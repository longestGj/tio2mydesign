# PRODUCT-000 Gate 7 Project-Control Review Submission V0.4

## 1. Submission control

| Field | Value |
|---|---|
| Page ID | PRODUCT-000 |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Review ID | `PRODUCT-000-G7-PCR-04` |
| Submission status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Submitted date | 2026-08-31 |
| Prepared scope | Gate 7 implementation-neutral handoff package |
| Handoff state | `HANDED_OFF` on 2026-08-31 |
| Page lifecycle | `HANDED_OFF` |
| Gate 8 state | `HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED` |
| External task | `01My首页开发`; thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |

Project control reviewed, closed and handed off this authority set. This record does not declare any route live or assert the external task's implementation progress; that state is maintained by the D16 development task.

`PRODUCT-000-G7-PCR-01` and `PRODUCT-000-G7-PCR-02` are retained as historical `CONDITIONAL_RETURN / NOT_APPROVED` reviews. PCR-03's P0-03, P1-03 and P1-04 directed revisions were incorporated into PCR-04. `PRODUCT-000-G7-PCR-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`. PCR-02's route-safe Meta and current-baseline corrections remain closed.

## 2. Package submitted

| File | SHA-256 | Purpose |
|---|---|---|
| `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.4.md` | `106B67715E54E495F916A480C83928A651DD6CC0CE386C2B42230A8DB842AF0F` | Current complete Brief; lifecycle `HANDED_OFF` |
| `docs/page-briefs/PRODUCT-000_TITANIUM_DIOXIDE_PRODUCTS_BRIEF_V0.3.md` | `23DF2AA0C4F1A4A6AF92868F0C6FC884D87A00626E24096F872779E584F390DE` | Approved relationship-only addendum incorporated into V0.4 |
| `pages/products/06_handoff/PRODUCT-000_GATE7_HANDOFF_PACKAGE_V0.3.md` | `0E8BDBB542CB331786ABC161177DE656918796DDB82C8F85E6383B8212C1C3F6` | Approved and handed-off master package |
| `pages/products/06_handoff/PRODUCT-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.3.md` | `4B1C89D6A8F854903D6D64802A1EDDE2804D7B1A1C5D01FFC1F8ACF9302AC8D7` | Approved CMS/API/component mapping and exact content fields |
| `pages/products/06_handoff/PRODUCT-000_GATE7_SEO_GEO_SCHEMA_METADATA_V0.3.md` | `E43F0890A4C387B1745A9B087BCED1717E9FCF80EC6D9146167233017E1A2919` | Approved SEO/GEO/Schema and route-safe metadata contract |
| `pages/products/06_handoff/PRODUCT-000_GATE7_RESPONSIVE_A11Y_INTERACTION_ACCEPTANCE_V0.3.md` | `C7DBE02F284269AFC4CD8A4C8B272CD8BC8E18B0EDCB8E03824831557BC4D8D3` | Approved 1440/Tablet/390px, accessibility and interaction acceptance |
| `pages/products/06_handoff/PRODUCT-000_GATE7_SITE_SCOPE_ISOLATION_CONTRACT_V0.4.md` | `380FC885CE84F1FC750FF5D905DD4103B23A82E865803BBAD83DA3787C45377B` | Approved `site_scope=tio2-my` isolation; Gate 9 checks Process 2/1/0 all three states |
| `pages/products/06_handoff/PRODUCT-000_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.3.md` | `CC8097BEFE466C09E3C9C9B2DAF08B51360F6B4F038C0F91AB5C882A9253DD81` | Approved Hub/external ownership and Gate 8/9/10 acceptance |
| `pages/products/06_handoff/PRODUCT-000_GATE7_GLOBAL_CHROME_CURRENT_STATE_ACCEPTANCE_V0.1.md` | `F1B1C37AED758AC8495245887951CB0AAD9CEADA426465E46E25AE8663D46C5E` | Approved V0.5 current-state authority binding and Gate 8/9 acceptance |
| `pages/products/06_handoff/PRODUCT-000_GATE7_HANDOFF_MANIFEST_V0.4.md` | `D058D4D5A2471D27350490D456EA78D389881423FFCF757AACF8A06EA3332308` | Handed-off authority files, visual assets, Brief chain and hashes |

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
- Global Chrome V0.5 is bound through a targeted PRODUCT-000 acceptance contract: Desktop Products is Bold + 3px Teal underline; Mobile Menu Products is Bold + 4px Teal left marker; buyer-visible `CURRENT` is 0; semantic current state remains surface-scoped with one active accessible navigation surface/current link.

## 4. Mandatory exact-summary contract

The fourteen exact approved directory summaries must use one server-side field: `grade_directory[].summary`.

- Visible directory copy and any optional Product Schema `description` must match the same value character-for-character.
- Provenance metadata is internal governance data and must not render in Buyer Clean output.
- The project does not contain fourteen complete TDS files. Only the exact user-approved strings are authorized; no value, standard, guarantee, recommendation, comparison or other page statement may be inferred.
- Each summary belongs only to its named Grade and cannot be reused for another Grade.

## 4A. Global Chrome V0.5 authority synchronization

| Authority file | SHA-256 | Status / role |
|---|---|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; formal authority |
| `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` | `2214BF1BCBE7646E8727A8E75E5E2A1552047E838D861891D0441B4895401B94` | Approved component-state and semantic-test reference |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` | `EA3CCC7D90FD6EBB28BE562C9FABFDD4663D360AA18E66590A6297FB14F697B7` | Approved PRODUCT-000 → Products mapping |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.2.md` | `B12C92F8CC87B1F7DBCAFECA6BAE2D29D2C4883BF52B751388FCBB8EA63FB54E` | Authority project-control closure record |

The targeted acceptance contract requires buyer-visible `CURRENT` = 0, Desktop Bold + 3px Teal underline, Mobile Bold + 4px Teal left marker and `aria-current="page"` under the approved surface-scoped/active-accessibility-tree cardinality. It explicitly preserves Header geometry, navigation order, production SVG Logo, fixed RFQ, Footer, page body, SEO/GEO, PRODUCT V0.3 and all unrelated Gate 5 content. Historical PNGs remain immutable evidence but their old visible-label pixels do not control production current-state rendering.

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
| Global Chrome current-state runtime behavior | Shared Global Chrome integration; Gate 9 QA/release blocker | Verify visible `CURRENT` = 0, Desktop/Mobile structural markers, one current link per mapped surface, one active accessible navigation surface/current link and no inactive-surface focus leak |

Non-blocking recorded limitation: `PRODUCT-G6-TDS-I01 = ACCEPTED_SOURCE_LIMITATION / NON_BLOCKING_FOR_GATE_7`.

## 6. Project-control decision and execution boundary

`PRODUCT-000-G7-PCR-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`

`PRODUCT-000 lifecycle = HANDED_OFF`

`HANDED_OFF = YES`

`Gate 8 = HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED`

Project control transferred the approved package to `01My首页开发`, thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`. External execution status is maintained by the D16 development task.

## 7. Fresh validation

| Field | Result |
|---|---|
| Verifier | `99_workspace/PRODUCT-000_gate7_review/verify_product_gate7_handoff_v04.ps1`; SHA-256 `9587C7C487995C1090F71CFEDEF46EF0AD7CA514704F2E1DC42DFF440975EA22` |
| Machine-readable result | `99_workspace/PRODUCT-000_gate7_review/verification_product_gate7_handoff_v04.json` |
| Result | `207 PASS / 0 FAIL` |
| Review status verified | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; lifecycle `HANDED_OFF`; Gate 8 `HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED` |

The verifier covers file and SHA integrity, approved PNG dimensions, production SVG hashes, fourteen exact summaries, all Grade routes, PRODUCT V0.3 counts and freezes, metadata and Schema parity, responsive/accessibility contracts, scope isolation, stage boundaries and document hygiene. A passing verifier confirms package consistency only; it does not approve Gate 7.

## 8. Scope declaration

- No Process or Grade child-page work was started.
- No WordPress, Next.js, CMS, component, styling, test, branch, deployment, publication or indexing work was performed.
- `D:\16Wordpress_nextjs` was not accessed or modified.
- Gate 8 has been handed off and authorized; actual execution status is maintained by the external D16 task.
