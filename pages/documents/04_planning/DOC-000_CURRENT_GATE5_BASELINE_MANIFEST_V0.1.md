# DOC-000 Current Gate 5 Baseline Manifest V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Review ID | `DOC-000-G5-FULL-VISUAL-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Manifest date | 2026-09-02 |
| Gate 5 authority | `USER_AUTHORIZED / IN_PROGRESS` |
| Approved Gate 4 upstream | Manifest V0.1 SHA-256 `9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00` |
| Current package role | Sole current Gate 1–5 candidate root |
| Gate 6/7 | `NOT_AUTHORIZED` |

This Manifest replaces the Gate 4 Manifest as the current package root without changing Gate 4's approved status. It does not promote any historical Gate 5 V0.1–V0.5 asset.

## 1. Current Gate 5 payload

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Full Visual Design V0.6 | `pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.6.md` | 7591 | `7237D68D65CA23AE85359FA754E63797862E3C46B7A91E90D4ACCDDA7C776070` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 5 Visual Validation V0.6 | `pages/documents/04_planning/DOC-000_GATE5_VISUAL_VALIDATION_V0.6.md` | 3572 | `7BB9EEF232209D7E9E73221B720B6C3CC9B770B9B6BED34DA609FCBCA24FB35E` | `VALIDATED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 5 Project-Control Submission V0.6 | `pages/documents/04_planning/DOC-000_GATE5_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.6.md` | 2919 | `1ABBF8CFBD59A80C243ED9F42385932440E05AB9EE3B4578BC2C0F23ED1BA6E9` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Desktop 1440 full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_DESKTOP_1440_FULL_BUYER_CLEAN_V0.6.png` | 427716 | `ADF3B2A2CB25D8B67909C82A94AA12ADEBCF6B6F1304EE38C2D0BD3A1B17830A` | Same |
| Tablet 768 full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_TABLET_768_FULL_BUYER_CLEAN_V0.6.png` | 392515 | `202000F9BA65ACFE383FCEC5393104F6EF9586B27C4FB1ED70144AD241361163` | Same |
| Mobile 390 logical @2x full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_MOBILE_390_LOGICAL_2X_FULL_BUYER_CLEAN_V0.6.png` | 754902 | `E75F31BEE5A923E8D647ECEA5A0693F0A82E9BFCF49FBA568A5A3193BEF048AF` | Same |
| Selector / FAQ interaction states | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_SELECTOR_FAQ_INTERACTION_STATES_V0.6.png` | 119766 | `4E8EB8F3EA0A1996C028C0E5502E2FBA74DEE55EC3C079D72A8B0D6E58B6116D` | Same |
| Mobile Menu open 390 logical @2x | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_MOBILE_MENU_OPEN_390_LOGICAL_2X_V0.6.png` | 43409 | `C4A7B133A0873308439F99174CC6D9595DEF489FB77C3771969C316E437EBDE0` | Same |
| Inherited Global Chrome assembly proof | `pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_GLOBAL_CHROME_ASSEMBLY_PROOF_V0.5.png` | 195674 | `CE69A907B22BEDC1FCA80C737171EEF72A4265B8D942A250CB2AE7303C815AC9` | `INHERITED_APPROVED_GATE4 / BYTE_IDENTICAL` |

The Manifest self-hash is computed after final validation and is not self-embedded.

## 2. Approved upstream

| Upstream authority | SHA-256 / status |
|---|---|
| Gate 4 Manifest V0.1 | `9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00` / `APPROVED / CLOSED` |
| Gate 4 User Approval Closure V0.1 | `0C7684D3B4556BC5FF4196EE120D81840581D1EC7FD7D541D24A940BA595B1B9` / `APPROVED / CLOSED` |
| Hero CTA User Decision V0.1 | `5F1F15A2F87B526B72AD2DDA0D41BBB1EBF4F0C2A02B123E883B8A46CA6F830E` / active |
| Hero / Selector CTA Interaction Contract V0.1 | `D223AF14EE07B8E67607D19D6EDAA10690AE5BA738A4D32D188848E2644C240B` / active |
| PCR-01 Targeted Revision V0.1 | `BBEF186F9872F32FF3621BA63E3B48664B62F1617CAC11917F7C3CF4E656C422` / `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| SEO/GEO/Schema V0.6 | `2374A673C5335C5AE75EFFCFAD6AF4BF92111F782C5DB9C72FD178B022318364` / inherited unchanged |
| Global Header/Footer Specification V0.5 | shared authority / inherited unchanged |
| Production SVG Logo Manifest V1.0 | shared authority / inherited unchanged |

## 3. Full-page and interaction lock

- Three complete Buyer Clean pages: 1440 Desktop, 768 Tablet, 390 logical Mobile @2x.
- Hero direct path: `Start a Document Request` → `/request-documents/`, no query and no default Grade.
- Selector Grade-first path remains immediately after Hero.
- Selector states: initial, exact no-selection validation and valid selected Grade.
- Fixed structure: 3 scenarios, 4 categories, 14 Grades and 6 FAQ questions.
- FAQ default collapsed plus one-expanded proof.
- Mobile Menu open consumes shared Header/Menu/RFQ authority.
- Shared Footer is present at Desktop, Tablet and Mobile.
- Global Chrome assembly proof is inherited byte-identically.

## 4. Validation snapshot

| Check | Result |
|---|---|
| New Gate 5 PNGs | `5 / 5 PASS` |
| Expected dimensions and hashes | PASS |
| Complete Buyer Clean pages | `3 / 3 PASS` |
| Review bars / media annotation removed | PASS |
| Selector three states | PASS |
| FAQ collapsed / expanded | PASS |
| Mobile Menu open | PASS |
| Four categories / six FAQ | PASS |
| Minimum targets | `44px+` |
| Horizontal overflow | none in current compositions |
| View/Download/inventory/approval actions | `0` |
| Buyer-visible governance labels | `0` |

## 5. Evidence and route boundary

No file inventory, public download, filename, revision, approval, universal applicability, availability or delivery timing is asserted. Hero media remains evidence-neutral. SEO/GEO/Schema V0.6 is unchanged. Route and receiver readiness remain later release checks and do not appear as Buyer Clean status.

## 6. Historical disposition

| Historical set | Disposition |
|---|---|
| Full Visual Design V0.1–V0.5 | `HISTORICAL / NOT_CURRENT` |
| Gate 5 Review Submission V0.1–V0.5 | `HISTORICAL / NOT_CURRENT` |
| Historical Gate 5 PNGs under `visual-designs/assets/` | `HISTORICAL / PRESERVED / NOT_CURRENT` |
| Gate 4 Manifest V0.1 | `APPROVED_UPSTREAM / NOT_CURRENT_PACKAGE_ROOT` |

No historical file is overwritten or deleted.

## 7. Open items

| ID | Item | Status |
|---|---|---|
| DOC-G5-O01 | Project-control review of three complete pages | `PENDING` |
| DOC-G5-O02 | Project-control review of Selector/FAQ states | `PENDING` |
| DOC-G5-O03 | Project-control review of Mobile Menu and Chrome assembly | `PENDING` |
| DOC-G5-O04 | User approval after project-control pass | `NOT_REQUESTED_YET` |
| DOC-G5-O05 | Gate 6/7 authorization | `NOT_AUTHORIZED` |

## 8. Stop condition

`DOC-000-G5-FULL-VISUAL-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

The package stops at Gate 5 project-control submission. Gate 6/7, child Document pages, development, D16, code, testing, deployment, publication, DNS and indexing remain unauthorized.
