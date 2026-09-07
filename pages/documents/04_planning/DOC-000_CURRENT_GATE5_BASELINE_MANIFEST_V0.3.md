# DOC-000 Current Gate 5 Baseline Manifest V0.3

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Current Review ID | `DOC-000-G5-MOBILE-REPAIR-01` |
| Current revision | V0.7.1 |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Manifest date | 2026-09-02 |
| Gate 5 authority | `USER_AUTHORIZED / IN_PROGRESS` |
| Approved Gate 4 upstream | Manifest V0.1 SHA-256 `9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00` |
| Current package role | Sole current Gate 1–5 candidate root |
| Gate 6/7 | `NOT_AUTHORIZED` |

V0.3 supersedes Current Gate 5 Manifest V0.2 after the Desktop/Tablet shared Footer P0. Earlier Manifests, V0.6, V0.7 and all assets remain preserved.

## 1. Current control documents

| Role | Path | Bytes | SHA-256 | Status |
|---|---|---:|---|---|
| Shared Footer P0 Return V0.1 | `pages/documents/04_planning/DOC-000_GATE5_SHARED_FOOTER_P0_RETURN_V0.1.md` | 1400 | `70CA97C97EC3FCC90B6DDB3AFF5B41924501416CAE9638BD393D17B4CDFFA251` | `REVISION_REQUIRED / NOT_APPROVED` |
| Full Visual Design V0.7.1 | `pages/documents/04_planning/visual-designs/DOC-000_FULL_VISUAL_DESIGN_V0.7.1.md` | 3147 | `62597E01949BDBD0A32AADA06B482F92A75E1475A8158957C502DC956D5D38BD` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Visual Validation V0.7.1 | `pages/documents/04_planning/DOC-000_GATE5_VISUAL_VALIDATION_V0.7.1.md` | 2268 | `1F3AD132EA83A57F89A24C5378DFB4B063C033EFD4F5C6F49A47D42F935BEF78` | `VALIDATED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Targeted Repair Submission V0.7.1 | `pages/documents/04_planning/DOC-000_GATE5_TARGETED_REPAIR_PROJECT_CONTROL_SUBMISSION_V0.7.1.md` | 1750 | `1BFB25EDC03423B5AB9FB9EA17DE81E5153B96DFF7AB360C60C10118E4591C18` | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

The Manifest self-hash is computed after final validation and is not self-embedded.

## 2. Current visual payload

| Role | Path | Dimensions | Bytes | SHA-256 | Disposition |
|---|---|---:|---:|---|---|
| Desktop full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.7.1/assets/DOC-000_G5_DESKTOP_1440_FULL_BUYER_CLEAN_V0.7.1.png` | 1440×3784 | 422469 | `6DD95749FE87FCCAEBE16AC8AFD8A3C21F1BAD1227A3BB7D5660234AE57A0A12` | Current shared-Footer revision |
| Tablet full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.7.1/assets/DOC-000_G5_TABLET_768_FULL_BUYER_CLEAN_V0.7.1.png` | 768×5324 | 388567 | `85A1A5810AFDE686ECD0D2160A40A45AB13F1125941A9FADADE3CBD0FCF0DF96` | Current shared-Footer revision |
| Mobile full Buyer Clean | `pages/documents/04_planning/visual-designs/gate5_v0.7/assets/DOC-000_G5_MOBILE_390_LOGICAL_2X_FULL_BUYER_CLEAN_V0.7.png` | 780×11708 | 779807 | `7631E2B994AF50C149E3310EB6018E3BC9037D082C411911135E5517D0A76282` | Current / byte-identical |
| Mobile H1 / FAQ / Footer proof | `pages/documents/04_planning/visual-designs/gate5_v0.7/assets/DOC-000_G5_MOBILE_H1_FAQ_FOOTER_REPAIR_PROOF_V0.7.png` | 780×1840 | 124681 | `629EB38658307BBFAB4CE6BF116783C5543DCF247D3093E5C2A3BDC0F749FE07` | Current / byte-identical |
| Selector / FAQ interaction states | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_SELECTOR_FAQ_INTERACTION_STATES_V0.6.png` | 1440×1260 | 119766 | `4E8EB8F3EA0A1996C028C0E5502E2FBA74DEE55EC3C079D72A8B0D6E58B6116D` | Inherited unchanged |
| Mobile Menu open | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_MOBILE_MENU_OPEN_390_LOGICAL_2X_V0.6.png` | 780×1360 | 43409 | `C4A7B133A0873308439F99174CC6D9595DEF489FB77C3771969C316E437EBDE0` | Inherited unchanged |
| Global Chrome assembly proof | `pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_GLOBAL_CHROME_ASSEMBLY_PROOF_V0.5.png` | 1440×1680 | 195674 | `CE69A907B22BEDC1FCA80C737171EEF72A4265B8D942A250CB2AE7303C815AC9` | Inherited approved authority |

## 3. Shared component ownership

DOC-000 does not own, redesign or fork Header, Mobile Header, Mobile Menu or Footer. It consumes the Home / Global Chrome owner baseline and supplies only `currentNavigationKey=Documents`.

The current Footer contract at all three breakpoints is:

- Brand and Copyright.
- Explore: Home, Markets, Products, Applications.
- Information: Documents, Resources, About.
- Procurement: Request a Quote.
- Contact is absent unless its route is approved and live.

## 4. Pixel preservation and revision boundary

| Viewport | Footer boundary | Body RAW SHA-256 before/after | Result |
|---|---:|---|---|
| Desktop | 3494px | `3A04185DD277ACB5E9EE86343ED6897DF9D8E615D6BEDDD3A4FB2F7A84327B4F` | BYTE_IDENTICAL |
| Tablet | 4904px | `DB55218FEDBF85037EBAC6647048D8758CB89CCDEB1824255EE8AA1FC0D08885` | BYTE_IDENTICAL |

Only the Desktop and Tablet Footer regions changed. Mobile V0.7 and its proof retain their recorded hashes.

## 5. Validation snapshot

| Check | Result |
|---|---|
| Original Mobile H1 / FAQ / Footer findings | independently passed / preserved |
| Desktop shared Footer set | PASS |
| Tablet shared Footer set | PASS |
| Legacy page-specific Footer links | 0 |
| Desktop body raw-pixel change | 0 |
| Tablet body raw-pixel change | 0 |
| Buyer-visible governance labels | 0 |

## 6. Frozen page contract

- Hero direct path remains `/request-documents/` without query or default Grade.
- Grade-first Selector remains immediately after Hero with 14 Grades.
- Initial Continue and Explore Products remain visible.
- Structure remains 3 scenarios, 4 categories and 6 FAQ questions.
- No download, inventory, approval, availability or regulatory-coverage promise is introduced.

## 7. History

| Historical set | Disposition |
|---|---|
| Current Gate 5 Manifest V0.2 | `SUPERSEDED / PRESERVED`, SHA-256 `353B53603203D797F52FB282D2A90D246C81E1B80D544EB15DBBF97109E28529` |
| V0.7 repair package | `SUPERSEDED_REVISION / PRESERVED`; Mobile assets remain current by hash |
| V0.6 Desktop/Tablet | `SUPERSEDED_FOOTER / PRESERVED` |
| V0.6 and earlier package files | `HISTORICAL / NOT_CURRENT` |

## 8. Open items and stop condition

| ID | Item | Status |
|---|---|---|
| DOC-G5-R04 | Project-control confirmation of shared Footer P0 closure | `PENDING` |
| DOC-G5-R05 | User approval after project-control pass | `NOT_REQUESTED_YET` |
| DOC-G5-R06 | Gate 6/7 authorization | `NOT_AUTHORIZED` |

`DOC-000-G5-MOBILE-REPAIR-01 / revision V0.7.1 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

The package stops at Gate 5. Gate 6/7, child pages, development, D16, testing, deployment, publication, DNS and indexing remain unauthorized.

