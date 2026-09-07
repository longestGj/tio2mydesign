# DOC-000 Current Gate 5 Baseline Manifest V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Current Review ID | `DOC-000-G5-MOBILE-REPAIR-01` |
| Parent review | `DOC-000-G5-FULL-VISUAL-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Manifest date | 2026-09-02 |
| Gate 5 authority | `USER_AUTHORIZED / IN_PROGRESS` |
| Approved Gate 4 upstream | Manifest V0.1 SHA-256 `9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00` |
| Current package role | Sole current Gate 1–5 candidate root |
| Gate 6/7 | `NOT_AUTHORIZED` |

V0.2 supersedes Current Gate 5 Manifest V0.1 after the project-control conditional return. V0.1 and all V0.6 files remain preserved and are not overwritten.

## 1. Current control documents

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Conditional Return V0.1 | `pages/documents/04_planning/DOC-000_GATE5_PROJECT_CONTROL_CONDITIONAL_RETURN_V0.1.md` | 1704 | `B43CEBBEE017297AD8AD8D8113F4B9FF19ED53B382DD7CB09EFA4F0AAA10EB73` | `CONDITIONAL_RETURN / NOT_APPROVED` |
| Full Visual Design V0.7 | `pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.7.md` | 4623 | `326DF30249C7F7D00678197660EC2B961DA92F8F9310F1078858EE2A7C1811F0` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 5 Visual Validation V0.7 | `pages/documents/04_planning/DOC-000_GATE5_VISUAL_VALIDATION_V0.7.md` | 3040 | `7874CE702DD8F3C9FA73BF4BEEF9BBD655B895E43F5E6880D84287A07F1B2070` | `VALIDATED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Targeted Repair Submission V0.7 | `pages/documents/04_planning/DOC-000_GATE5_TARGETED_REPAIR_PROJECT_CONTROL_SUBMISSION_V0.7.md` | 2117 | `F0B0A6F74FB559D0CAB3D94CECBC44AF0ACED2E3C1A657A161ED0E14FD60C251` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

The Manifest self-hash is computed after final validation and is not self-embedded.

## 2. Current visual payload

| Role | Path | Dimensions | Bytes | SHA-256 | Disposition |
|---|---|---:|---:|---|---|
| Desktop full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_DESKTOP_1440_FULL_BUYER_CLEAN_V0.6.png` | 1440×3784 | 427716 | `ADF3B2A2CB25D8B67909C82A94AA12ADEBCF6B6F1304EE38C2D0BD3A1B17830A` | Inherited V0.6 / hash preserved |
| Tablet full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_TABLET_768_FULL_BUYER_CLEAN_V0.6.png` | 768×5324 | 392515 | `202000F9BA65ACFE383FCEC5393104F6EF9586B27C4FB1ED70144AD241361163` | Inherited V0.6 / hash preserved |
| Mobile full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.7/assets/DOC-000_G5_MOBILE_390_LOGICAL_2X_FULL_BUYER_CLEAN_V0.7.png` | 780×11708 | 779807 | `7631E2B994AF50C149E3310EB6018E3BC9037D082C411911135E5517D0A76282` | Current repaired Mobile |
| Mobile H1 / FAQ / Footer proof | `pages/documents/04_planning/visual-designs/gate5_v0.7/assets/DOC-000_G5_MOBILE_H1_FAQ_FOOTER_REPAIR_PROOF_V0.7.png` | 780×1840 | 124681 | `629EB38658307BBFAB4CE6BF116783C5543DCF247D3093E5C2A3BDC0F749FE07` | Current repair proof |
| Selector / FAQ interaction states | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_SELECTOR_FAQ_INTERACTION_STATES_V0.6.png` | 1440×1260 | 119766 | `4E8EB8F3EA0A1996C028C0E5502E2FBA74DEE55EC3C079D72A8B0D6E58B6116D` | Inherited unchanged |
| Mobile Menu open | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_MOBILE_MENU_OPEN_390_LOGICAL_2X_V0.6.png` | 780×1360 | 43409 | `C4A7B133A0873308439F99174CC6D9595DEF489FB77C3771969C316E437EBDE0` | Inherited unchanged |
| Global Chrome assembly proof | `pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_GLOBAL_CHROME_ASSEMBLY_PROOF_V0.5.png` | 1440×1680 | 195674 | `CE69A907B22BEDC1FCA80C737171EEF72A4265B8D942A250CB2AE7303C815AC9` | `INHERITED_APPROVED_GATE4 / BYTE_IDENTICAL` |

## 3. Targeted repair lock

- H1 exact copy remains `Documents for Product & Supplier Qualification`.
- H1 logical right edges are 327px and 333px within the 372px content boundary.
- All 109 visible Mobile text nodes remain within the 390px viewport.
- FAQ action slot is fixed at `x=326..372`; long-question maximum right edge is 225px.
- All six FAQ rows remain visible and collision-free.
- Mobile Footer visibly contains Brand, Explore, Information, Procurement / Request a Quote and Copyright.
- Footer link pitch is 44px and RFQ height is 50px.
- Desktop and Tablet hashes remain identical to V0.6.

## 4. Frozen page contracts

- Hero direct path: `Start a Document Request` → `/request-documents/`, without query, Selector focus or default Grade.
- Selector Grade-first path remains immediately after Hero with 14 Grades.
- Initial Continue and Explore Products remain visible.
- Fixed structure remains 3 scenarios, 4 categories and 6 FAQ questions.
- Mobile Menu remains inherited from shared navigation authority.
- No file download, inventory, approval, availability or regulatory-coverage promise is introduced.

## 5. Validation snapshot

| Check | Result |
|---|---|
| P0-01 H1 crop | CLOSED IN CANDIDATE / pending project-control confirmation |
| Whole-page horizontal overflow | 0 violations / PASS |
| P0-02 shared Mobile Footer | five parts present / PASS |
| P1-01 FAQ collision | 0 overlaps / PASS |
| Original-detail segmented review | H1, FAQ and Footer / PASS |
| Desktop hash preservation | PASS |
| Tablet hash preservation | PASS |
| Buyer-visible governance labels | 0 |

## 6. Approved upstream

| Upstream authority | SHA-256 / status |
|---|---|
| Gate 4 Manifest V0.1 | `9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00` / `APPROVED / CLOSED` |
| Gate 4 User Approval Closure V0.1 | `0C7684D3B4556BC5FF4196EE120D81840581D1EC7FD7D541D24A940BA595B1B9` / `APPROVED / CLOSED` |
| SEO/GEO/Schema V0.6 | `2374A673C5335C5AE75EFFCFAD6AF4BF92111F782C5DB9C72FD178B022318364` / inherited unchanged |
| Shared Global Chrome | V0.5 visual authority / inherited unchanged |

## 7. History

| Historical set | Disposition |
|---|---|
| Current Gate 5 Manifest V0.1 | `SUPERSEDED / PRESERVED`, SHA-256 `DF2639517CC2F1D0F57BEE205F510A15B21E3364EB90DFBA2CF7D7EA1218946F` |
| Gate 5 V0.6 full visual, validation and submission | `CONDITIONAL_RETURN / PRESERVED / NOT_CURRENT` |
| V0.6 Mobile full Buyer Clean | `SUPERSEDED_MOBILE / PRESERVED` |
| V0.6 Desktop and Tablet assets | `INHERITED_CURRENT / BYTE_IDENTICAL` |
| Gate 5 V0.1–V0.5 files | `HISTORICAL / NOT_CURRENT` |

## 8. Open items and stop condition

| ID | Item | Status |
|---|---|---|
| DOC-G5-R01 | Project-control confirmation of P0-01, P0-02 and P1-01 closure | `PENDING` |
| DOC-G5-R02 | User approval after project-control pass | `NOT_REQUESTED_YET` |
| DOC-G5-R03 | Gate 6/7 authorization | `NOT_AUTHORIZED` |

`DOC-000-G5-MOBILE-REPAIR-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

The package stops at Gate 5. Gate 6/7, child Document pages, development, D16, code, testing, deployment, publication, DNS and indexing remain unauthorized.

