import { buildLlmsFullTxt } from "@/lib/llms-content";

// Static route handler — emitted as /llms-full.txt in the static export
// (output: "export"). Generated from the canonical data libs so every product,
// research, blog, and landing-page URL stays valid. Previously a hand-maintained
// public/llms-full.txt where 5/8 blog URLs had drifted to 404s.
export const dynamic = "force-static";

export function GET() {
  return new Response(buildLlmsFullTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
