# MARKET-000 Gate 9 Read-only QA Evidence V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-000` / `/markets/` |
| Review date | 2026-09-04 |
| Gate 9 authority | User-directed formal Gate 9 review in the current task |
| Approved delivery authority | `MARKET-000-G7-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Review ID | `MARKET-000-G9-ROQA-02` |
| Project-control decision | `PROJECT_CONTROL_REVIEW_ACCEPTED / CONDITIONAL_RETURN / TARGETED_REVISION_AND_DEPENDENCY_RESOLUTION_REQUIRED / NOT_APPROVED` |
| Page lifecycle | `READ_ONLY_QA_IN_REVIEW` |
| Gate 10 / release / indexing | `NOT_AUTHORIZED` |

This record is a fresh read-only audit of the accessible local production build. No WordPress, Next.js, CMS, source, test, configuration, deployment, DNS, production or indexing change was made in `D:\16Wordpress_nextjs`.

## 1. Authority and implementation identity

### 1.1 Approved Gate 7 authority

| File | Bytes | SHA-256 |
|---|---:|---|
| `MARKET-000_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` | 7,124 | `E3AAE2CA9EC07C40C23530C31F352D1924771FDCF6BFCB1B72D2D34306A685E4` |
| `MARKET-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md` | 14,256 | `D998DEFDF4FE5B3AC61FCAA01BFA2B2A4F5EC95DB538BABA618B40FA663DED56` |
| `MARKET-000_GATE7_HANDOFF_PACKAGE_V0.1.md` | 15,106 | `60CBFB6EE244308DD3C162C1076997FF6C8EC094D40FCB33AE764AE117BA4030` |
| `MARKET-000_GATE7_MANIFEST_V0.1.md` | 4,696 | `E4CA0C7B2F66FA3C5AF0A5AA51E1716C100631F12E7F814A75D64D367FEDD68A` |
| `MARKET-000_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md` | 5,469 | `3407BEC5A6E55866C894388B2EC784D54037241611B44296A70BAE2FA27417C3` |

### 1.2 Actual implementation target

| Item | Observed value |
|---|---|
| Development repository | `D:\16Wordpress_nextjs\.worktrees\home-001-tio2-my` |
| Branch | `codex/home-001-tio2-my` |
| Audited HEAD | `49289d40fdb0b91d28f534776464403883d912ff` |
| HEAD date / message | `2026-09-04 07:42:25 +0800` / `fix: address sample request gate 9 findings` |
| Merge base with `origin/main` | `ad164cb1722bd652f583980063b86fbf14ec1a7d` |
| Branch distance | 52 commits ahead of `origin/main` at audit time |
| MARKET-000 implementation commit | `7acb647b2a55c4216668c5a0db41210811977ab6` |
| MARKET-000 targeted follow-ups | `eae28fd5cfd5556b10ef48a7a4f07d4d64181c2d`, `c9f1c0253e72ee7f1863310eddb9f4c4a3bd93f0` |
| Shared Chrome follow-ups consumed by this page | `024f171474f3d01a5cb7edc8ddf7848840aaea11`, `90d1644df46df595c77364dcb8e12c614b7ab733`, `73cbcf71f7ea79665c8add4210175fa65a253f98`, `0ef338716a9c2f04b861ab343a2b669eeade648b`, `2a23d34f28cae676f99bfd2a1a162e26907ad2b5` |
| Final tracked state | Clean; `git diff --check` produced no output |

The root checkout at `D:\16Wordpress_nextjs` was not the implementation target. It was on `main` at `c811622`; the implemented page and current verification target were resolved from the worktree above.

## 2. Fresh executable checks

| Check | Fresh result |
|---|---|
| Focused MARKET-000, Global Chrome, RFQ, revalidation and crawler Vitest suites | PASS — 22 files / 139 tests |
| TypeScript `npm run typecheck` | PASS |
| Scoped production build with `SITE_ID=tio2-my`, preview robots and isolated `.next-tio2-my-g9-market` output | PASS — Next.js 16.3.2; 35 routes; `/markets` emitted as dynamic |
| MARKET-000 Playwright suite | PASS — 3/3 at 390, 768 and 1440 |
| Independent browser audit | PASS — 4 viewports / 0 failed checks at 320, 390, 768 and 1440 |
| Axe | PASS — 0 serious / 0 critical violations at all four independent viewports |
| Mobile keyboard sequence | PASS at 320/390/768 — first-focus, Tab, Shift+Tab, Escape and focus return |
| PHP syntax | PASS — MARKET singleton, content types, plugin bootstrap and seed |
| WordPress singleton resolver failure harness | PASS — missing, multiple and invalid records fail closed |
| Sitemap staging probe | PASS — `/markets`, PT-BR and specific Trade URLs absent |
| RFQ production-browser path | FAIL — route returns 200 but renders `The quotation request form is temporarily unavailable.`; no submit control is present |

The RFQ targeted browser command produced one controlled-sitemap PASS and one form-path FAIL. The failure is real runtime evidence, not a flaky assertion: `NEXT_PUBLIC_TIO2_MY_WEB3FORMS_ACCESS_KEY` was absent from the audited runtime, so the approved fail-closed unavailable state rendered.

## 3. MARKET-000 runtime contract results

At 320, 390, 768 and 1440 the following all passed:

- one H1: `Choose Your Destination Market`;
- exact module order: breadcrumb, hero, destination market, how to choose, next procurement check, current information, buyer questions;
- 10 Market actions and six server-rendered buyer answers;
- EU parent plus six EU country actions, followed by UK, India and Brazil EN;
- zero body RFQ and three visible shared-Chrome RFQ anchors at the audited viewport/menu state;
- no horizontal overflow and zero visible target smaller than 44px;
- PT-BR output zero and specific Trade link/output zero;
- PRODUCT V0.3 Grade/Application/Process row-level output zero;
- one `CollectionPage`, one `BreadcrumbList` and one 10-item `ItemList`; no FAQ/QAPage/Product/Offer output;
- no hreflang; staging robots `noindex, nofollow`;
- zero serious/critical Axe violation and zero browser console error.

Observed metadata:

| Field | Runtime value |
|---|---|
| Title | `Markets for Titanium Dioxide Procurement | TiO2 Malaysia` |
| Meta description | `Navigate titanium dioxide procurement information for the European Union, United Kingdom, India, and Brazil, with clear guidance on the next review step.` |
| Canonical element | `https://tio2malaysia.com/markets/` |
| Actual final local path | `/markets` |
| Robots | `noindex, nofollow` |
| Hreflang | 0 |

The metadata values themselves match the Gate 7 contract. The Canonical is not self-referential at runtime because the approved trailing-slash URL redirects to the slashless path; this is recorded as a blocking finding below.

## 4. Approved visual authority and runtime screenshots

### 4.1 Approved Gate 5 authority recheck

| Asset | Dimensions | SHA-256 | Result |
|---|---:|---|---|
| `MARKET-000_G5_DESKTOP_FINAL_REVIEW_CANDIDATE_V0.5.png` | 1440×4664 | `DD94FB6613A21F42C9225EDCD7C1123D9B2AF266821F8224A128BE41A65FA397` | MATCH |
| `MARKET-000_G5_MOBILE_390_FINAL_REVIEW_CANDIDATE_V0.5.png` | 780×16874 | `008C8A83D778672C4494FA38D5660522ECB70A5638FB0ABE0A68A3D78322DD0B` | MATCH |
| `MARKET-000_G5_TABLET_768_FINAL_REVIEW_CANDIDATE_V0.5.png` | 768×6399 | `A1BA1068BE372E4B710D0A2AF2B58EDA0EF5827151099B03F926AA48033ADF5A` | MATCH |
| `MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.4.png` | 1600×2500 | `E4D8C2E71CB9A65F032A5770D4FBD1B7BB24AFE23C4EEBB92706B0F5234BCFAA` | MATCH |

### 4.2 Fresh runtime evidence

Browser-panel screenshots exclude the browser scrollbar from image width; the requested viewport is retained in each file name.

| Evidence | Captured dimensions | SHA-256 | Review |
|---|---:|---|---|
| `evidence/2026-09-04/MARKET-000_GATE9_DESKTOP_1440_2026-09-04.png` | 1425×5266 | `778D005A047907F41882C22C981231D1C8C5A8A1301F21CF0B2129A0D4BE1024` | PASS |
| `evidence/2026-09-04/MARKET-000_GATE9_TABLET_768_2026-09-04.png` | 753×7035 | `AD682B1B1C3A686C45604C5B6995AE147C7C65DC81BB7DA3CDD5AE93B17F803B` | PASS |
| `evidence/2026-09-04/MARKET-000_GATE9_MOBILE_390_2026-09-04.png` | 375×8195 | `26F09D8600AFA1BEF6B14B0861AABCEE41895856A7B3968F9626C9FCAFBE1C27` | PASS |
| `evidence/2026-09-04/MARKET-000_GATE9_MOBILE_320_2026-09-04.png` | 305×9447 | `E091CC0CE2E4450D042E5A50B24FEEC7A87FB08BCC473A9069F0777F74E25AB8` | PASS |

Original-detail review found no clipping, overlap, horizontal crop, broken card boundary, abnormal blank band or Buyer Questions-to-Footer closure defect. Runtime height differs from the static visual because the implementation uses live fonts and responsive content flow; no fixed-height truncation was observed.

## 5. Complete 22-route runtime probe

Every approved trailing-slash URL first returned 308 to the slashless form in this build. The final response after following that redirect is recorded below.

| Page ID | Planned URL | Gate 7 role | Final response | Gate 9 observation |
|---|---|---|---:|---|
| `MARKET-EU-001` | `/markets/european-union/` | Visible Market action | 404 | BLOCKING |
| `MARKET-EU-DE` | `/markets/germany/` | Visible Market action | 404 | BLOCKING |
| `MARKET-EU-IT` | `/markets/italy/` | Visible Market action | 404 | BLOCKING |
| `MARKET-EU-ES` | `/markets/spain/` | Visible Market action | 404 | BLOCKING |
| `MARKET-EU-PL` | `/markets/poland/` | Visible Market action | 404 | BLOCKING |
| `MARKET-EU-NL` | `/markets/netherlands/` | Visible Market action | 404 | BLOCKING |
| `MARKET-EU-BE` | `/markets/belgium/` | Visible Market action | 404 | BLOCKING |
| `MARKET-UK-001` | `/markets/united-kingdom/` | Visible Market action | 404 | BLOCKING |
| `MARKET-IN-001` | `/markets/india/` | Visible Market action | 404 | BLOCKING |
| `MARKET-BR-EN` | `/markets/brazil/` | Visible Market action | 404 | BLOCKING |
| `MARKET-BR-PT` | `/pt-br/markets/brazil/` | Localization hold | 404 | HOLD preserved; zero DOM/Schema/sitemap/hreflang output |
| `PRODUCT-000` | `/products/` | Supporting destination | 200 | Ready in this build |
| `APP-000` | `/applications/` | Visible procurement action | 404 | BLOCKING |
| `DOC-000` | `/documents/` | Visible procurement action | 200 | Ready in this build |
| `RES-000` | `/resources/` | Visible Trade-boundary action | 200 | Ready in this build |
| `ABOUT-001` | `/about/` | Supporting destination | 200 | Ready in this build |
| `CONV-DOC` | `/request-documents/` | Supporting destination | 500 | Not ready; WordPress record dependency remains |
| `CONV-RFQ` | `/request-a-quote/` | Fixed Global Chrome | 200 | Route exists, form unavailable; BLOCKING |
| `RES-TRADE-EU` | `/resources/eu-titanium-dioxide-trade-update/` | Trade hold | 500 | Zero exposure preserved; direct unresolved record does not fail closed |
| `RES-TRADE-UK` | `/resources/uk-titanium-dioxide-trade-update/` | Trade hold | 500 | Zero exposure preserved; direct unresolved record does not fail closed |
| `RES-TRADE-IN` | `/resources/india-titanium-dioxide-trade-update/` | Trade hold | 500 | Zero exposure preserved; direct unresolved record does not fail closed |
| `RES-TRADE-BR` | `/resources/brazil-titanium-dioxide-trade-update/` | Trade hold | 500 | Zero exposure preserved; direct unresolved record does not fail closed |

The 10 child-Market publication gate remains open. This review does not authorize creation or publication of those child pages. It records that the Hub cannot pass release acceptance while its 10 approved visible Market actions resolve to 404.

## 6. PRODUCT V0.3 and frozen-state evidence

The current sole relationship source contains 84 rows: 30 `VERIFIED_FOR_PUBLIC_MAPPING`, 54 `NO_PUBLIC_MAPPING`, and zero conflict rows. MARKET-000 renders no Grade, Application or Process row-level recommendation, comparison or country-to-product inference.

PT-BR remains `LOCALIZATION_HOLD / DO_NOT_RENDER`. Specific Trade routes, outcome claims and freshness-dependent policy text remain absent from the Hub, Schema and sitemap. MKT-R002–MKT-R005 remain open and are not changed by this Gate 9 review.

## 7. Earlier `MARKET-000-G9-ROQA-01` disposition

All three earlier implementation findings are `VERIFIED_FIXED / CLOSED`:

| Earlier item | Fresh evidence | Disposition |
|---|---|---|
| Typography leakage into shared Global Chrome | Scoped CSS, infrastructure suite and four-view runtime review | `VERIFIED_FIXED / CLOSED` |
| Footer heading geometry/overlap | 390/768/1440 Playwright geometry plus original-detail screenshots | `VERIFIED_FIXED / CLOSED` |
| CMS missing/multiple/invalid record handling | PHP resolver harness and integration tests | `VERIFIED_FIXED / CLOSED` |

Closing those three items does not close the new Gate 9 findings or authorize release.

## 8. Gate 9 finding summary

| Finding | Severity | Result |
|---|---|---|
| `MARKET-G9-P0-01` | BLOCKING | `/markets/` redirects to `/markets`, while the page declares the trailing-slash Canonical; self-Canonical/redirect parity fails |
| `MARKET-G9-P0-02` | BLOCKING | 10 visible Market actions and visible `APP-000` action resolve to 404; `ItemList` repeats the 10 unavailable Market targets |
| `MARKET-G9-P0-03` | BLOCKING | Fixed RFQ route exists, but the form is unavailable and cannot complete validation/error/success/submission QA |
| `MARKET-G9-P1-04` | IMPORTANT | `CONV-DOC` and four held Trade planned paths return 500; Trade remains unexposed, but unresolved records should fail closed rather than server-error |

Project-control Gate 9 outcome: `PROJECT_CONTROL_REVIEW_ACCEPTED / CONDITIONAL_RETURN / NOT_APPROVED` until P0-01 through P0-03 are resolved and freshly rechecked. P0-01 is MARKET-000's own shared-development correction. P0-02 and P0-03 are external page/environment dependencies and release gates. P1-04 is assigned to the applicable page owners/shared route layer, without exposing or authorizing Trade content.
