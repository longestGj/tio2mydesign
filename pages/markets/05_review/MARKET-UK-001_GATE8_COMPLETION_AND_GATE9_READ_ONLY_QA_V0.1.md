# MARKET-UK-001 Gate 8 Completion and Gate 9 Read-Only QA V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `MARKET-UK-001` / `/markets/united-kingdom/` |
| Review date | 2026-09-05 |
| Review ID | `MARKET-UK-001-G9-PCR-01` |
| Project-control review | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 implementation | `EXTERNAL_IMPLEMENTATION_COMPLETE / DEVELOPMENT_EVIDENCE_RECEIVED` |
| Gate 9 candidate outcome | `READ_ONLY_QA_COMPLETED / CONDITIONAL_RETURN / RELEASE_BLOCKED` |
| Document state | `PROJECT_CONTROL_REVIEW_PASS / CONDITIONAL_RETURN / RELEASE_BLOCKED` |
| Page lifecycle | `READ_ONLY_QA_IN_REVIEW` |
| Gate 10 | `LOCKED / NOT_AUTHORIZED` |
| Reviewer scope | D23 read-only inspection; no implementation edits |

This report records completion of the user-authorized Gate 8 supervision and the resulting Gate 9 read-only QA. It does not approve deployment, production CMS writes, publication, indexing or Gate 10. The page implementation is reviewable and the page-specific QA domains listed below pass, but release cannot pass while the blocking dependencies in section 6 remain open.

## 1. Gate 8 completion evidence accepted for Gate 9

| Item | Evidence |
|---|---|
| Development task | `01My首页开发`; thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Worktree | `C:\Users\longe\.codex\worktrees\609c\16Wordpress_nextjs` |
| Branch | `codex/doc-reach-gate8-evidence` |
| Implementation commit | `d55aeb70fad34c80f08964913789c21958b873bb` |
| Commit subject | `feat(tio2-my): implement UK market Gate 8 with scoped QA evidence` |
| Evidence root | `docs/verification/market-uk-001/` in the development worktree |
| Evidence inventory | 43 manifest entries plus the manifest itself; 36 PNG screenshots |
| Evidence integrity | 43/43 manifest entries match exact bytes and SHA-256; 0 missing or mismatched files in the 2026-09-05 D23 verification |
| Development tree | Clean at the recorded commit in the 2026-09-05 D23 verification |

The development evidence reports the following fresh implementation checks: 33 Vitest files / 224 tests passed; 40 PHP mutation cases passed; 5 PHP seed cases passed; the PHP resolver passed 7 negative cases, a valid scoped payload, 20 conservative route states and the non-null String contract; ESLint reported 0 errors and 0 warnings; Playwright reported 21 passed with 0 skipped, unexpected or flaky tests; the Malaysia-scoped build and final typecheck exited 0. D23 verified the evidence bytes and inspected the rendered evidence, but did not modify or rerun implementation code.

## 2. Read-only QA method

Gate 9 used the approved Gate 5 visual baseline, the locked Gate 7 handoff and acceptance contract, the external Gate 8 report, JSON runtime evidence and original-size screenshots. The review covered:

- the 1440px, 768px, 390px and 320px/reflow surfaces;
- Mobile Menu open, focus, FAQ expanded/collapsed and RFQ states;
- page identity, copy, Breadcrumb, Applications, representative Grades, GB/NI, Documents and Trade boundaries;
- Title, Meta, Canonical, robots, hreflang, sitemap, GEO answers and JSON-LD;
- Global Chrome fixed RFQ, production Logo rendering evidence and Markets current state;
- `site_scope=tio2-my` fail-closed behavior and cache/revalidation evidence;
- internal destination response evidence and official external-source freshness.

The ordinary persistent loopback preview could not be retained because the local execution tool rejected the standalone startup. Gate 9 therefore relied on the Playwright-managed production-mode build/start session, DOM/runtime JSON, screenshots and test results. This limitation is recorded as `MARKET-UK-001-G9-I01`; it is not converted into a false live-URL claim.

## 3. Gate 9 result matrix

| Domain | Result | Evidence / boundary |
|---|---|---|
| Identity | `PASS` | Exact route, page ID/source mapping, one H1 and Markets current navigation are recorded in browser evidence. |
| Buyer Clean / content | `PASS` | Approved supplier/product-first copy, five Applications, six representative Grades, GB/NI distinction, exact COO sentence and seven visible answer sections retain the approved meaning. |
| PRODUCT V0.3 | `PASS` | Zero Process, comparison or UK-specific Grade recommendation output; the six links remain global discovery paths only. |
| Breadcrumb | `PASS` | Home link + Markets link + United Kingdom current non-link; current semantics retained without a self-link. |
| Global Chrome | `PASS` | Shared Desktop/Mobile Header, Menu and Footer; fixed bare `/request-a-quote/`; Markets current; no UK-specific fork. |
| Page-body RFQ UX | `PASS_WITH_RELEASE_DEPENDENCY` | Approved contextual query, editable United Kingdom prefill, no implicit Grade, validation focus, retained error input and success focus pass locally. Real external delivery is not verified. |
| SEO | `PASS_IN_LOCAL_EVIDENCE` | One self-Canonical, approved Title/Meta, `noindex,nofollow`, no hreflang and UK omitted from sitemap. Release environment remains unverified. |
| GEO / Schema | `PASS_IN_LOCAL_EVIDENCE` | Approved seven-answer meaning; WebPage + BreadcrumbList; conditional six-item Grade ItemList only; no FAQPage, QAPage, Product, Offer, Process or comparison schema. |
| Site isolation | `PASS_IN_LOCAL_EVIDENCE` | Missing/foreign records fail closed; no other-scope content fallback in recorded tests. Real deployed CMS/cache remains unverified. |
| Desktop 1440 | `PASS` | Original 1440×8208 screenshot reviewed; no visible crop, overlap, broken Footer closure or horizontal overflow. |
| Tablet 768 | `PASS` | Original 768×10835 screenshot and Menu state reviewed; complete stacked flow and no visible horizontal overflow. |
| Mobile 390 | `PASS` | Original 390×14470 screenshot and Menu state reviewed; readable flow, target sizing evidence and no visible crop/horizontal overflow. |
| Reflow / narrow | `PASS_IN_RECORDED_EVIDENCE` | 720px 200%-equivalent and 320px screenshots show contained content; this is not a claim of native browser zoom execution. |
| Keyboard / focus / Menu | `PASS_IN_AUTOMATED_AND_VISUAL_EVIDENCE` | Close-first focus, Tab wrap, Escape/return, 3px focus outline, FAQ states, reduced-motion and axe evidence pass; no independent screen-reader session was performed. |
| Visible internal routes | `BLOCKED` | 14/20 controlled dependency destinations return 200; Application Hub returns 404 and five Application child paths return 500. |
| Official external sources | `PASS_AT_2026-09-05_CHECKPOINT` | HSE and GOV.UK boundaries remain current; detailed TiO2 trade status stays outside Buyer Clean and must be checked again on release day. |
| Production Logo | `PASS_RENDERING / RELEASE_BYTE_CHECK_OPEN` | Approved Git blobs and rendered geometry/artwork pass; exact packaged/served bytes remain open because the Windows checkout uses different line endings. |

## 4. Visual inspection record

The following original evidence was inspected at full detail:

- `uk-1440.png`, `uk-768.png`, `uk-390.png`;
- `uk-menu-390.png`, `uk-menu-768.png`;
- `uk-faq-all-expanded-1440.png`, `uk-faq-all-collapsed-390.png`;
- `uk-documents-focus-1440.png`;
- `uk-reflow-320.png`, `uk-reflow-720.png`;
- `uk-rfq-prefill.png`, `uk-rfq-negative.png`, `uk-rfq-positive.png`.

No visible title clipping, horizontal overflow, card break, Footer collision, abnormal decorative gap or FAQ-to-Footer closure defect was observed. The shared Mobile Menu shows the approved Logo, Close action, eight navigation items, Markets current treatment and terminal RFQ. RFQ screenshots show editable country prefill, negative validation and positive local success states. These are visual and local interaction findings, not proof of production delivery.

## 5. Official-source freshness check

Read-only official-source verification was performed on 2026-09-05:

| Source | Current finding | Page effect |
|---|---|---|
| `https://www.hse.gov.uk/REACH/roles.htm` | GB importer, downstream-user and Only Representative roles remain differentiated. | Approved role-safe copy remains supportable; no registration guarantee is added. |
| `https://www.hse.gov.uk/reach/about.htm` | UK REACH applies in GB and EU REACH continues in Northern Ireland. | Approved GB/NI REACH distinction remains supportable. |
| `https://www.hse.gov.uk/chemical-classification/brexit.htm` | GB CLP applies in GB; EU CLP continues for Northern Ireland. | Approved GB/NI CLP distinction remains supportable. |
| `https://www.gov.uk/trade-tariff` | The service remains the official route for commodity-code, duty and VAT checks. | No code, rate or transaction outcome is inferred. |
| `https://public-file.trade-remedies.service.gov.uk/` | AD0086 for rutile titanium dioxide from China is active and was updated 2026-09-02. | Detailed current status remains owned by the Trade Update; default UK page retains evergreen guidance only. |
| GOV.UK Trade Remedies Notice 2026/14 | Registration notice remains a dated, product- and origin-specific measure. | It is not generalized to Malaysia-origin supply or rendered as Buyer Clean UK-page advice. |

This checkpoint closes only the 2026-09-05 review. `UK-G6-B02` remains open for same-day release verification because trade and regulatory sources can change.

## 6. Blocking findings

| ID | Finding | Severity | Required close evidence | Status |
|---|---|---|---|---|
| `MARKET-UK-001-G9-B01` | Six required visible Application destinations are unavailable: APP-000 is 404; APP-COAT, APP-PLAS, APP-MB, APP-INK and APP-PAPER are 500. | `BLOCKING / RELEASE` | Each approved destination returns its approved canonical behavior in `site_scope=tio2-my`; no hidden link, substitute URL or cross-scope fallback. | `OPEN` |
| `MARKET-UK-001-G9-B02` | RFQ UI behavior passes locally, but two submissions were intercepted and `externalSubmission=false`; real receiver/delivery is unverified. | `BLOCKING / RELEASE` | Non-production or production-equivalent end-to-end receiver evidence covering privacy, validation, error, success and delivery without sending an unauthorized real request. | `OPEN` |
| `MARKET-UK-001-G9-B03` | Real Malaysia WordPress UK record, route readiness, deployed metadata, sitemap, cache and revalidation behavior were not verified. | `BLOCKING / RELEASE` | Accessible release-candidate environment proves exact fields, fail-closed scope, cache/revalidation, no cross-site leakage, release-state `index, follow`, self-canonical and sitemap inclusion. | `OPEN` |
| `MARKET-UK-001-G9-B04` | Time-sensitive HSE/GOV.UK/TRA status can change after this review. | `BLOCKING / RELEASE-DAY` | Same-day official-source review and content parity immediately before release authorization. | `OPEN` |
| `MARKET-UK-001-G9-B05` | Approved SVG Git blobs are unchanged and rendering passes, but exact packaged/served bytes are not proven because local checkout line endings differ. | `BLOCKING / RELEASE` | Hash the packaged and served production SVG bytes against the approved production Manifest, or document an approved byte-normalization contract. | `OPEN` |

## 7. Important evidence limitation

| ID | Finding | Status |
|---|---|---|
| `MARKET-UK-001-G9-I01` | No persistent live preview remained available for an additional independent URL session because standalone startup was rejected by execution policy. Playwright-managed production-mode build/start, DOM/runtime JSON and screenshots remain valid evidence, but this review does not claim a continuously accessible environment. | `OPEN / NON-CODE ENVIRONMENT LIMITATION` |
| `MARKET-UK-001-G9-I02` | The immutable `runtime-matrix.json` contains differently cased keys such as `chrome-Home-1440` and `chrome-home-1440`. Future evidence generators should use one casing convention so case-insensitive consumers can parse the file reliably. | `NON_BLOCKING / FUTURE_EVIDENCE_QUALITY_RECOMMENDATION` |

## 8. Gate disposition

Gate 8 supervision is complete and the implementation evidence is sufficient to perform Gate 9. Gate 9 read-only QA is complete as an inspection activity, with the candidate outcome `CONDITIONAL_RETURN / RELEASE_BLOCKED`. The page is not `READ_ONLY_QA_APPROVED` because five release blockers remain open. Gate 10 stays locked, and no deployment, publication, indexing, production CMS write or implementation correction is authorized from this report.

Project control independently reviewed this package and closed `MARKET-UK-001-G9-PCR-01` as `PROJECT_CONTROL_REVIEW_PASS / CLOSED`. That review accepts the inspection result; it does not close B01–B05 or authorize release.

Required next workflow:

1. project control reviews this Gate 9 package;
2. the external development/integration owners close `G9-B01` through `G9-B05` without changing the approved page scope;
3. D23 performs a targeted read-only recheck on a release-candidate environment;
4. only a later explicit user decision may authorize Gate 10.

## 9. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Recorded Gate 8 completion evidence, independent Gate 9 visual/SEO/GEO/Schema/route/source review, five release blockers and one environment limitation. | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / CONDITIONAL_RETURN / RELEASE_BLOCKED` |
| V0.1 PCR sync | 2026-09-05 | Recorded project-control PASS/CLOSED, clarified B03 release-indexing evidence and added a non-blocking future runtime-matrix key-casing recommendation. | `PROJECT_CONTROL_REVIEW_PASS / CONDITIONAL_RETURN / RELEASE_BLOCKED` |
