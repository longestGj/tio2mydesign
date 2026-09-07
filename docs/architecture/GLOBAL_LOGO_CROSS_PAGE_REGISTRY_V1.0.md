# TiO2 Malaysia Production Logo Cross-Page Registry V1.0

## Registry control

| Field | Value |
|---|---|
| Registry ID | `TIO2MY-GLOBAL-LOGO-CROSS-PAGE-01` |
| Version | `V1.0` |
| Status | `APPROVED_CROSS_PAGE_ASSET_REFERENCE` |
| Effective date | 2026-08-31 |
| Production Manifest | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Global Chrome Addendum | `docs/architecture/GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md` |

## Page-system registration

| Page system | Global Chrome Logo binding | Status |
|---|---|---|
| Home | Production Manifest V1.0 asset keys | Available for authorised handoff; not implemented |
| Markets Hub and Market pages | Production Manifest V1.0 asset keys | Registered; page facts and routes unchanged |
| Products Hub, Process pages and 14 Grade pages | Production Manifest V1.0 asset keys | Registered; product relationships unchanged |
| Applications Hub and Application pages | Production Manifest V1.0 asset keys | Registered; provisional routes unchanged |
| Documents Hub and document-request paths | Production Manifest V1.0 asset keys | Registered; document evidence gates unchanged |
| Resources Hub and Resource pages | Production Manifest V1.0 asset keys | Registered; inventory and freshness gates unchanged |
| About / Contact | Production Manifest V1.0 asset keys | Registered; company/contact fact gates unchanged |
| Conversion pages | Production Manifest V1.0 asset keys | Registered; RFQ route/form release gates unchanged |

## Registration rules

1. Every TiO2 Malaysia page must resolve the shared asset keys through the Production Manifest.
2. Existing visual designs that contain the former PNG remain valid historical visual evidence; they are not the production source.
3. Page specifications do not need to duplicate SVG files or hashes. They reference the Manifest and Addendum.
4. No page may redefine colours, proportions, clear space, minimum sizes or prohibited uses.
5. No page may load a Logo from another `site_scope` or use another site's asset as a fallback.
6. This registry changes no page identity, URL, keyword, content, Schema, CTA, route or release status.

## Development and release boundary

Registration permits future authorised development tasks to consume the production assets. It does not create code, update CMS/media records, perform deployment or publish the Logo. Implementation and runtime verification remain external development and QA responsibilities.

