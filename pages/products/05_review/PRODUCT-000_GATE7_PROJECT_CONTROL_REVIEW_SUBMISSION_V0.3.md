# PRODUCT-000 Gate 7 Project-Control Review Submission V0.3

## 1. Submission control

| Field | Value |
|---|---|
| Page ID | PRODUCT-000 |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Review ID | `PRODUCT-000-G7-PCR-03` |
| Submission status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Submitted date | 2026-08-31 |
| Prepared scope | Gate 7 implementation-neutral handoff package |
| Handoff state | `NOT_HANDED_OFF` |
| Gate 8 state | `NOT_STARTED / NOT_AUTHORIZED` |

This submission requests project-control review. It does not self-approve Gate 7, transfer work to the development project, authorize implementation, or declare any route live.

`PRODUCT-000-G7-PCR-01` and `PRODUCT-000-G7-PCR-02` are retained as historical `CONDITIONAL_RETURN / NOT_APPROVED` reviews. PCR-03 addresses only P0-03 cross-page Gate 8 ownership, P1-03 Brief-version authority and P1-04 CR-901/Process 0-state behavior, plus necessary references, Manifest and validation updates. PCR-02's route-safe Meta and current-baseline corrections remain closed.

## 2. Package submitted

| File | SHA-256 | Purpose |
|---|---|---|
| `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.4.md` | `9FD715A992398B80BEB304F548F8D08ECA94340437DC7BD6FE5541377B62082D` | Current complete Brief; supersedes complete Brief V0.2 |
| `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.3.md` | `23DF2AA0C4F1A4A6AF92868F0C6FC884D87A00626E24096F872779E584F390DE` | Approved relationship-only addendum incorporated into V0.4 |
| `pages/products/06_handoff/PRODUCT-000_GATE7_HANDOFF_PACKAGE_V0.3.md` | `70F4E736685307DFB6EB3E9324D36DA2D843CCF9B808B800D5AE96A7B6512E2D` | Master package and authority order |
| `pages/products/06_handoff/PRODUCT-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.3.md` | `315D0B9EDD2B3CC8B286CD6E281D23803F846B6095006DD35EE3F058AC4D6548` | CMS/API/component mapping and exact content fields |
| `pages/products/06_handoff/PRODUCT-000_GATE7_SEO_GEO_SCHEMA_METADATA_V0.3.md` | `FA947DA747445896D0406B19200EC4EADF2DD75F1F1726CDC9E648873210858E` | SEO/GEO/Schema and route-safe metadata contract |
| `pages/products/06_handoff/PRODUCT-000_GATE7_RESPONSIVE_A11Y_INTERACTION_ACCEPTANCE_V0.3.md` | `81B8772C2F8DE2527E494E2AB8AD9E6BFB83CE559B4CB88354020CFEA8E1F624` | 1440/Tablet/390px, accessibility and interaction acceptance |
| `pages/products/06_handoff/PRODUCT-000_GATE7_SITE_SCOPE_ISOLATION_CONTRACT_V0.3.md` | `227E94314AE8FA2757E1B4660FBE2C97163295220C7ABA26542ABB58F28FDA92` | `site_scope=tio2-my` isolation and fail-closed rules |
| `pages/products/06_handoff/PRODUCT-000_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.3.md` | `85A2A296E80C4B058D81D8592B7DE0505DC0BF1B2C59F4ABE67BC98C3CF2A307` | Hub/external ownership and Gate 8/9/10 acceptance |
| `pages/products/06_handoff/PRODUCT-000_GATE7_HANDOFF_MANIFEST_V0.3.md` | `878ACC3D06A8543ACF0E4CA755EC26F7A7D07DF48C8D2FC970AAFC392A043B60` | Current authority files, visual assets, Brief chain and hashes |

## 3. Review scope completed

- Page identity, `/products/`, primary keyword responsibility and cannibalization boundary.
- Buyer Clean content, all exact directory summaries and conditional module behavior.
- PRODUCT V0.3: 84 rows, 30 verified, 0 conflict, 54 no-public; Process 8/5/1.
- M-2377 Specialty Materials and Rubber exclusion; M-996/M-2196 comparison hold.
- CMS/API fields and component rendering contracts for Hero, Selector, Process, fourteen-grade directory, five-step Evaluation Guide, Procurement paths, FAQ, RFQ and Global Chrome.
- SEO metadata, Canonical, robots, sitemap, GEO entities, Schema candidates and visible-content parity.
- Desktop 1440, Tablet and 390px behavior; keyboard, focus, menu, FAQ initial DOM, 44px touch targets, real copy and horizontal-overflow acceptance.
- Query, route, navigation, media, form, metadata, Schema, cache and analytics isolation under `site_scope=tio2-my`, with no cross-scope fallback.
- Production SVG Logo asset-key integration from the approved Manifest; historical PNG visuals are not production Logo assets.
- Current Meta is inherited as an unconditional route-safe value; Process routes remain implementation and atomic-state QA items, not metadata prerequisites.
- PRODUCT-000 Gate 8 scope is Hub-only; RFQ, Grade, Process, Applications, Documents and Markets targets are external dependencies owned by separate tasks.
- Process 2/1/0 counts only Chloride/Sulfate route cards; the parent heading/intro and CR-901 classification row remain in all states.
- Brief V0.4 is the current complete Brief; V0.3 is relationship-only and incorporated, eliminating competing-current ambiguity.

## 4. Mandatory exact-summary contract

The fourteen exact approved directory summaries must use one server-side field: `grade_directory[].summary`.

- Visible directory copy and any optional Product Schema `description` must match the same value character-for-character.
- Provenance metadata is internal governance data and must not render in Buyer Clean output.
- The project does not contain fourteen complete TDS files. Only the exact user-approved strings are authorized; no value, standard, guarantee, recommendation, comparison or other page statement may be inferred.
- Each summary belongs only to its named Grade and cannot be reused for another Grade.

## 5. Open Hub integration, external dependency and Gate 9 QA items

These items do not prevent project-control review of the Gate 7 package. They must be included in the later acceptance contract and closed before release where specified.

| Item | Stage | Required disposition |
|---|---|---|
| RFQ integration and external form readiness | PRODUCT-000 Hub Gate 8 integration; external `CONV-RFQ` task; Gate 9 release blocker | Hub binds approved link/prefill; Global RFQ stays visible; external form behavior, validation, success/error and scope isolation pass |
| Fourteen Grade and conditional external targets | PRODUCT-000 Hub resolver/link integration; external owner tasks; Gate 9 release blocker | Required Grade targets resolve; conditional cards reflect shared readiness; response/redirect, Canonical, links and scope pass |
| Process 2/1/0 plus CR-901 | PRODUCT-000 Hub integration; external Process/Grade dependencies; Gate 9 QA | 2/1/0 affects only Chloride/Sulfate grid; parent heading/intro and CR-901 classification remain; unresolved CR-901 action omitted |
| `PRODUCT-G6-TDS-I02` exact summary parity | PRODUCT-000 Hub Gate 8 contract; Gate 9 QA | Visible copy and optional Product Schema description must be character-identical |
| robots and sitemap | PRODUCT-000 Hub Gate 8 implementation; Gate 9 release blocker; Gate 10 authorization | No index/sitemap inclusion before approved release state |
| `site_scope=tio2-my` runtime isolation | PRODUCT-000 Hub integration plus shared/external dependency; Gate 9 release blocker | Prove no cross-scope query, cache, media, menu, form, metadata, Schema or analytics fallback |
| Runtime responsive and accessibility behavior | PRODUCT-000 Hub Gate 8 implementation; Gate 9 QA/release blocker | Verify 1440/Tablet/390px, 44px targets, keyboard/focus, menu, FAQ initial DOM and no horizontal overflow |

Non-blocking recorded limitation: `PRODUCT-G6-TDS-I01 = ACCEPTED_SOURCE_LIMITATION / NON_BLOCKING_FOR_GATE_7`.

## 6. Suggested project-control disposition

Suggested only; not self-awarded:

`PROJECT_CONTROL_GATE_7_PACKAGE_PASS_FOR_EXTERNAL_HANDOFF_WITH_GATE_8_9_ACCEPTANCE_ITEMS`

If project control accepts this disposition, a separate user decision is still required before actual handoff or Gate 8 work begins.

## 7. Fresh validation

| Field | Result |
|---|---|
| Verifier | `99_workspace/PRODUCT-000_gate7_review/verify_product_gate7_handoff_v03.ps1` |
| Machine-readable result | `99_workspace/PRODUCT-000_gate7_review/verification_product_gate7_handoff_v03.json` |
| Result | `170 PASS / 0 FAIL` |
| Review status verified | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

The verifier covers file and SHA integrity, approved PNG dimensions, production SVG hashes, fourteen exact summaries, all Grade routes, PRODUCT V0.3 counts and freezes, metadata and Schema parity, responsive/accessibility contracts, scope isolation, stage boundaries and document hygiene. A passing verifier confirms package consistency only; it does not approve Gate 7.

## 8. Scope declaration

- No Process or Grade child-page work was started.
- No WordPress, Next.js, CMS, component, styling, test, branch, deployment, publication or indexing work was performed.
- `D:\16Wordpress_nextjs` was not accessed or modified.
- Gate 8 remains unauthorized.
