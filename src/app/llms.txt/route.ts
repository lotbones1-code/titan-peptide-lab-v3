import { buildLlmsTxt } from "@/lib/llms-content";

// Static route handler — emitted as /llms.txt in the static export (output:
// "export"). Generated from the canonical data libs so the URLs can never
// desync from real routes. Previously a hand-maintained public/llms.txt.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
