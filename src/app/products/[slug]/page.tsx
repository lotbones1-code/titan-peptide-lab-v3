import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/products";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ProductDetail } from "@/components/site/product-detail";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  return (
    <>
      <Header />
      <main>
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  );
}
