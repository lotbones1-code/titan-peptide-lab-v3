import { promises as fs } from "fs";
import path from "path";

export type OrderStatus =
  | "awaiting_payment"
  | "payment_received"
  | "shipped"
  | "cancelled"
  | "refunded";

export interface OrderItem {
  productId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface OrderLedgerEntry {
  orderId: string;
  items: OrderItem[];
  subtotal: string;
  shipping: string;
  total: string;
  customerEmail: string;
  customerName: string;
  country: string;
  shippingAddress: string;
  status: OrderStatus;
  source?: string;
  ocTouchId?: string;
  refCode?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
  utmTerm?: string;
  attributionSessionId?: string;
  paymentMethod?: "crypto";
  paymentCoin?: string;
  paymentAddress?: string;
  cryptoAmount?: string;
  chain?: string;
  walletAddress?: string;
  txHash?: string;
  txConfirmedAt?: string;
  txConfirmations?: number;
  discountCode?: string;
  notes?: string;
  // Legacy single-product fields tolerated for backwards compat reads.
  product?: string;
  productId?: string;
  quantity?: number;
  _receivedAt?: string;
  _updatedAt?: string;
}

const ORDERS_FILE = path.join(process.cwd(), "data", "orders.json");

async function readAll(): Promise<OrderLedgerEntry[]> {
  try {
    const raw = await fs.readFile(ORDERS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as OrderLedgerEntry[]) : [];
  } catch {
    return [];
  }
}

async function writeAll(orders: OrderLedgerEntry[]): Promise<void> {
  const dir = path.dirname(ORDERS_FILE);
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(ORDERS_FILE, JSON.stringify(orders, null, 2));
}

export async function appendOrder(order: OrderLedgerEntry): Promise<OrderLedgerEntry> {
  const orders = await readAll();
  const entry: OrderLedgerEntry = {
    ...order,
    _receivedAt: order._receivedAt ?? new Date().toISOString(),
  };
  orders.push(entry);
  await writeAll(orders);
  return entry;
}

export async function findOrder(orderId: string): Promise<OrderLedgerEntry | null> {
  if (!orderId) return null;
  const orders = await readAll();
  return orders.find((o) => o.orderId === orderId) ?? null;
}

export async function listOrders(opts?: {
  status?: OrderStatus;
  limit?: number;
}): Promise<OrderLedgerEntry[]> {
  const orders = await readAll();
  const filtered = opts?.status
    ? orders.filter((o) => o.status === opts.status)
    : orders;
  const reversed = filtered.slice().reverse();
  return typeof opts?.limit === "number" ? reversed.slice(0, opts.limit) : reversed;
}

export async function updateOrder(
  orderId: string,
  patch: Partial<OrderLedgerEntry>,
): Promise<OrderLedgerEntry | null> {
  const orders = await readAll();
  const idx = orders.findIndex((o) => o.orderId === orderId);
  if (idx === -1) return null;
  const next: OrderLedgerEntry = {
    ...orders[idx],
    ...patch,
    orderId: orders[idx].orderId,
    _updatedAt: new Date().toISOString(),
  };
  orders[idx] = next;
  await writeAll(orders);
  return next;
}

export function publicView(order: OrderLedgerEntry): {
  orderId: string;
  status: OrderStatus;
  total: string;
  items: { name: string; quantity: number }[];
  paymentCoin?: string;
  paymentAddress?: string;
  cryptoAmount?: string;
  txHash?: string;
  txConfirmedAt?: string;
  receivedAt?: string;
} {
  return {
    orderId: order.orderId,
    status: order.status,
    total: order.total,
    items: order.items.map((i) => ({ name: i.name, quantity: i.quantity })),
    paymentCoin: order.paymentCoin,
    paymentAddress: order.paymentAddress,
    cryptoAmount: order.cryptoAmount,
    txHash: order.txHash,
    txConfirmedAt: order.txConfirmedAt,
    receivedAt: order._receivedAt,
  };
}
