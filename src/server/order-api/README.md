Deprecated App Router API source preserved for a future Node backend.

The storefront is currently built with `output: "export"` so it can ship as a static site.
Dynamic order readback, admin readback, and webhook handlers cannot live under
`src/app/api` while static export is enabled. Keep this source here until a Node
host/backend lane is explicitly selected and proven.

Do not wire these handlers into the live storefront without:
- backend host/deploy proof
- environment variable proof
- order/payment test proof
- rollback path
