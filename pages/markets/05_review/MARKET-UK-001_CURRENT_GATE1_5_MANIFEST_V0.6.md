# MARKET-UK-001 Current Gate 1–5 Baseline Manifest V0.6

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-UK-001` / `/markets/united-kingdom/` |
| Page type | Market procurement landing page |
| Manifest role | Sole current Gate 1–5 pointer |
| Status | `CURRENT_GATE5_V0.1_APPROVED_BASELINE / APPROVED_GATE_5_BASELINE` |
| Lifecycle | `APPROVED_FOR_HANDOFF`; not `HANDED_OFF` |
| Gate 1–4 | `USER_APPROVED / CLOSED` |
| Gate 5 | `APPROVED / CLOSED` |
| Gate 6 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION` |
| Gate 8–10 | `LOCKED / NOT_AUTHORIZED` |
| Current review | `MARKET-UK-001-G7-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| User authority | Gate 5 approved, Gate 6 passed project control and Gate 7 package preparation authorized on 2026-09-05 |
| Site scope | `tio2-my` |
| Date | 2026-09-05 |

## 1. Authority and consumption order

Use the following order for MARKET-UK-001 Gate 1–5 review:

1. current user decisions and root `AGENTS.md`;
2. `PAGE_GATE_1_5_STANDARD_V1.0.md`;
3. the current Brief V0.5;
4. approved Gate 1–4 baselines;
5. Gate 5 Full Visual Specification and Responsive/Conditional States V0.1;
6. Gate 5 HTML and PNG evidence;
7. historical V0.1–V0.5 files for traceability only.

## 2. Current authority set

| Role | File | SHA-256 | State |
|---|---|---|---|
| Current Brief | `docs/page-briefs/MARKET-UK-001_UNITED_KINGDOM_BRIEF_V0.5.md` | `d809392ca0e201e52502f946e14b7da34d8317845cf11e50f80a5aa0a2c16971` | `GATE_5_APPROVED / GATE_6_PROJECT_CONTROL_PASS / GATE_7_PROJECT_CONTROL_PASS_PENDING_USER_GATE8_AUTHORIZATION` |
| Gate 1 research | `pages/markets/01_research/MARKET-UK-001_GATE1_RESEARCH_AND_EVIDENCE_V0.4.md` | `7f212755b074e706a6302b42db2afdaa566b5fc14d028a55a3849d748674b398` | `APPROVED_GATE_1_BASELINE` |
| Gate 2 content | `pages/markets/04_planning/MARKET-UK-001_GATE2_CONTENT_ARCHITECTURE_V0.4.md` | `99f2eaecbd84e0c734a4ca0e40b2e12fd9b93d756784f19a21a2334b0fe4eb35` | `APPROVED_GATE_2_BASELINE` |
| Gate 3 wireframe | `pages/markets/04_planning/wireframes/MARKET-UK-001_GATE3_WIREFRAME_SPEC_V0.2.md` | `dc7be6a5da58b2345e0667543e1681f6fc528bc70c1d3f2274dd7456c9b2a92d` | `APPROVED_GATE_3_BASELINE` |
| Gate 4 direction | `pages/markets/04_planning/visual-directions/MARKET-UK-001_GATE4_VISUAL_DIRECTION_V0.1.md` | `6850766f6c9ae29ffac00bfd2c90a011d682346396804a47929dbd4ce655897e` | `APPROVED_GATE_4_BASELINE` |
| Gate 5 visual specification | `pages/markets/04_planning/visual-designs/MARKET-UK-001_GATE5_FULL_VISUAL_SPEC_V0.1.md` | `d71e77e400ad61d725bde9bcf334feddee490a34aa05c6bffdfa0afe0d58810b` | `APPROVED_GATE_5_BASELINE` |
| Gate 5 state contract | `pages/markets/04_planning/visual-designs/MARKET-UK-001_GATE5_RESPONSIVE_AND_CONDITIONAL_STATES_V0.1.md` | `416527e87dac25e01a83e188f73981dba6ea9660258e4977cebc2118ed231f4d` | `APPROVED_GATE_5_BASELINE` |
| Gate 5 submission | `pages/markets/05_review/MARKET-UK-001_GATE5_PROJECT_CONTROL_SUBMISSION_V0.1.md` | `6a3d6679a3696a6cba50eb634b06926c99cd1654bc378f768923d3a2a9f2e019` | `APPROVED / CLOSED` |

### 2.1 Current Gate 6 review references

| Role | File | SHA-256 | State |
|---|---|---|---|
| Gate 6 audit | `pages/markets/05_review/MARKET-UK-001_GATE6_AUDIT_AND_ACCEPTANCE_V0.1.md` | `ff4bb218a17840faa7cae674129f575ee26f705cd70cf70cd694b57ff0aebf51` | `PROJECT_CONTROL_REVIEW_PASS / USER_GATE7_AUTHORIZED` |
| Gate 6 submission | `pages/markets/05_review/MARKET-UK-001_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | `c0814d0fab1fbf30a06daa1bdc09fd21f718e7db125b2dfb86bfce1f274e1ea8` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

### 2.2 Current approved Gate 7 handoff baseline references

| Role | File | SHA-256 | State |
|---|---|---|---|
| Gate 7 handoff package | `pages/markets/06_handoff/MARKET-UK-001_GATE7_HANDOFF_PACKAGE_V0.1.md` | `91df8d2142ac3088e889fdf59e28ff7c1af2d12055e9fed1a765d403b520eac6` | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Gate 7 CMS/API/component mapping | `pages/markets/06_handoff/MARKET-UK-001_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` | `25065f0e3035f4fdd69df4c5033185d47b15050f31f10c3057f745269b931c25` | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Gate 7 acceptance and blockers | `pages/markets/06_handoff/MARKET-UK-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | `cf069dd83e6afaa16c4c862c3bdda679b09aa3bdf67623376e0b2c5affbe821b` | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Gate 7 package Manifest | `pages/markets/06_handoff/MARKET-UK-001_GATE7_MANIFEST_V0.1.md` | `e13eb0e922e675f56f18fc94ce5bd59d5aedb45dee116df3b66e874a390f80c7` | `PROJECT_CONTROL_REVIEW_PASS / APPROVED_GATE_7_HANDOFF_BASELINE` |
| Gate 7 review submission | `pages/markets/06_handoff/MARKET-UK-001_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | `c5004e1938d6cd535ed4ee7aa14d8e52a2c2db46b80d74d5441dc5310499f79d` | `MARKET-UK-001-G7-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |

## 3. Gate 5 visual assets

| Asset | Logical dimensions | Bytes | SHA-256 | Review state |
|---|---:|---:|---|---|
| `MARKET-UK-001_GATE5_FULL_DESKTOP_1440_V0.1.png` | 1440 × 8177 | 935094 | `5197c6b2b997ebaae75c2617fc9d0339a3de4b949a7dbe52745d7107304ed41b` | Full-page candidate |
| `MARKET-UK-001_GATE5_FULL_TABLET_768_V0.1.png` | 768 × 10724 | 967811 | `37712250a50b56b044fc9c067735c483e530273c0499a759a8b9d92d2243d686` | Full-page candidate |
| `MARKET-UK-001_GATE5_FULL_MOBILE_390_V0.1.png` | 390 × 14770 | 990070 | `122d28a26e63d7034c9c2e330696ee6429f6e28e64bfab0581ce715c16479a56` | Full-page candidate |
| `MARKET-UK-001_GATE5_MOBILE_MENU_OPEN_FOCUS_390_V0.1.png` | 390 × 844 | 20905 | `57ccc0a11bad4bc16e15ff929dbdb599bdef45dff05e5d6b2eeabde32653886b` | Interaction candidate |
| `MARKET-UK-001_GATE5_FAQ_ALL_EXPANDED_DESKTOP_1440_V0.1.png` | 1440 × 1247 | 170973 | `68e20e6bc34028c6fd35a2065c041f41c0538048406da30a9e9f256654f080c0` | Interaction candidate |
| `MARKET-UK-001_GATE5_FAQ_ALL_COLLAPSED_MOBILE_390_V0.1.png` | 390 × 808 | 47747 | `a837e237747e464a4c6d912e0b91fa75c8a6bb590f6369fba48d9bd69d00d13d` | Interaction candidate |
| `MARKET-UK-001_GATE5_DOCUMENTS_FOCUS_DESKTOP_1440_V0.1.png` | 1440 × 772 | 96671 | `96b3301ef310a49d6cc84641909eb69881b9ef8892a4da804b8e7d25d33740be` | Accessibility candidate |
| `MARKET-UK-001_GATE5_FULL_VISUAL_V0.1.html` | Responsive planning source | 37800 | `988e0d2cfa3f2883e4c5ff70b90590894f754aff467977ebe0503e0fd9c9acba` | Rendered and validated |

All assets are in `pages/markets/04_planning/visual-designs/market-uk-001/v0.1/`.

The three complete pages and Mobile Menu proof are byte-identical to the approved Gate 4 evidence. Gate 5 adds distinct FAQ and focus proofs plus a non-visual focus-containment correction in the planning HTML.

## 4. Shared Global Chrome and Logo

| Authority | Use |
|---|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Header, Mobile Header, Mobile Menu, Footer, fixed RFQ and Markets current-state rules |
| `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` | Copyright-first legal order, BM route and Cookie Settings button behavior |
| `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | Production primary and reverse SVG Logo asset keys and hashes |

The page consumes these authorities. It does not copy, redesign or replace their production ownership.

## 5. Superdesign trace

| Field | Value |
|---|---|
| Project ID | `8da9d871-2a33-4afe-ae43-0860688e5dbc` |
| Draft ID | `b4c673c4-4169-4fb9-b366-76631e89b632` |
| Current version | 5 |
| Direction | User-approved `UK Procurement Editorial`; Gate 5 complete visual candidate |
| Version 5 delta | Unique anchor IDs and Mobile Menu focus containment; no visible pixel or content change |
| Canvas | `https://superdesign.dev/teams/748bead0-f9b5-4101-ae48-150238cc276b/projects/8da9d871-2a33-4afe-ae43-0860688e5dbc?node=draft-variant-b4c673c4-4169-4fb9-b366-76631e89b632` |
| Preview | `https://p.superdesign.dev/draft/b4c673c4-4169-4fb9-b366-76631e89b632` |

## 6. Validation summary

- 1440/768/390 client, document-scroll and body-scroll widths equal the viewport.
- Complete page heights are 8177, 10724 and 14770px.
- H1=1; exact ten-H2 contract passes.
- Applications=5; representative Grades=6; GB=1; NI=1; FAQ=6.
- COO exact sentence=1; dated Trade paragraph=0; internal Trade Update action=0.
- Visible governance labels=0; visible `CURRENT`=0; main-content images=0.
- Visible targets below 44px=0.
- Anchor IDs=64/64; duplicate anchor IDs=0.
- Primary SVG Logo=2; reverse SVG Logo=1.
- Footer order/semantics, BM route and Cookie Settings event pass.
- Mobile Menu open/close, forward and backward Tab wrap, Escape, scroll restoration and focus return pass.
- Full-page and important-state evidence has been reviewed at original detail.

## 7. Open issues and frozen boundaries

| ID | Item | Status | Gate impact |
|---|---|---|---|
| `MARKET-UK-001-G5-PCR-01` | Project-control review of the complete Gate 5 visual and state package | `APPROVED / CLOSED` | Project-control PASS followed by user approval on 2026-09-05 |
| `MARKET-UK-001-G6-PCR-01` | Project-control review of the complete Gate 6 audit and acceptance package | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | User authorized Gate 7 package preparation on 2026-09-05; Gate 8 remains locked |
| `MARKET-UK-001-G7-PCR-01` | Initial project-control review of the complete implementation-neutral Gate 7 package | `CONDITIONAL_RETURN / SUPERSEDED_BY_PCR-02` | Two targeted corrections only; Gate 8 remains locked |
| `MARKET-UK-001-G7-P0-01` | Shared Global Chrome RFQ bare path versus Hero/Final contextual RFQ path | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | Gate 5 evidence unchanged; Gate 8 remains locked |
| `MARKET-UK-001-G7-P1-01` | Breadcrumb link-count and current-page semantics | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | 3 items / 2 links + 1 current non-link item; Gate 8 remains locked |
| `MARKET-UK-001-G7-PCR-02` | Targeted project-control re-review of P0-01 and P1-01 | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | Gate 7 approved for handoff; not handed off; Gate 8 remains locked |
| `UK-G1-04` | Runtime route readiness | `OPEN / LATER_GATE_ROUTE_DEPENDENCY` | Gate 8 implementation / Gate 9 QA / release; not a Gate 5 visual blocker |
| `UK-G1-05` | RFQ receiver and runtime workflow | `OPEN / LATER_GATE_CONVERSION_DEPENDENCY` | Gate 8 implementation / Gate 9 QA / release; not a Gate 5 visual blocker |
| `UK-R01–UK-R07` | Existing claim, market, trade, product, route and origin controls | OPEN as recorded in the approved Gate 1 audit | Unchanged by Gate 5 |

The dated Trade paragraph and internal Trade Update action remain absent until their approved freshness/content/route conditions are satisfied. Required complete-site actions remain visible as final-reader targets without claiming runtime readiness.

## 8. Supersession and history

This V0.6 Manifest supersedes `MARKET-UK-001_CURRENT_GATE1_5_MANIFEST_V0.5.md` as the sole current Gate 1–5 pointer. V0.5 remains the historical Gate 4 review pointer. Brief V0.4 remains historical; Brief V0.5 is current.

Gate 3 V0.1, Gate 4 V0.1 review history and all earlier Gate 1/2 versions remain preserved. No historical artifact was deleted.

## 9. Gate boundary

- Gate 1–4 are approved and closed.
- Gate 5 is user-approved and closed.
- Gate 6 passed project-control review and is closed.
- Gate 7 passed project-control review and the lifecycle is `APPROVED_FOR_HANDOFF`; the package is not `HANDED_OFF`.
- Gate 8–10 remain locked and not authorized.
- No other Market child page may start from this task.
- No development handoff, WordPress, Next.js, CMS, deployment, production publication, DNS or indexing action occurred.
- `D:\16Wordpress_nextjs` was not accessed.

## 10. Change record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.6 | 2026-09-05 | Replaced the Gate 4 review pointer with the user-approved Gate 4 and authorized Gate 5 state; registered the complete 1440/768/390 visual, Mobile Menu, FAQ and focus proofs, Superdesign V5, state contract and current hashes. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.6 review sync | 2026-09-05 | Recorded `MARKET-UK-001-G5-PCR-01` project-control PASS, refreshed current document hashes and retained Gate 5 as pending user approval. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| V0.6 user approval sync | 2026-09-05 | Recorded Gate 5 user approval, closed `MARKET-UK-001-G5-PCR-01`, preserved all approved visual assets and authorized Gate 6 review only. | `APPROVED_GATE_5_BASELINE / GATE_6_IN_PROGRESS` |
| V0.6 Gate 6 project-control PASS | 2026-09-05 | Recorded `MARKET-UK-001-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; retained Gate 7–10 locks pending user authorization. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE7_AUTHORIZATION` |
| V0.6 Gate 7 authorization | 2026-09-05 | Recorded the user's explicit Gate 7 authorization, opened `MARKET-UK-001-G7-PCR-01` and retained Gate 8–10 locks. | `GATE_7_PACKAGE_IN_REVIEW` |
| V0.6 Gate 7 targeted revision | 2026-09-05 | Recorded PCR-01 conditional return, draft resolutions for the shared/body RFQ URL contract and Breadcrumb semantics, and opened PCR-02; Gate 5 assets remain unchanged. | `RESOLVED_IN_DRAFT_PENDING_PROJECT_CONTROL_REVIEW`; Gate 8 locked |
| V0.6 Gate 7 targeted review PASS | 2026-09-05 | Recorded PCR-02, P0-01 and P1-01 project-control PASS/CLOSED; lifecycle advanced to approved for handoff without handoff or Gate 8 authorization. | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_GATE8_AUTHORIZATION` |
