# MARKET-EU-001 Gate 9 Read-Only Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / route | `MARKET-EU-001` / `/markets/european-union/` |
| Review date | 2026-09-08 |
| Handoff ID | `MARKET-EU-001-G8-G9-REFRESH-20260908-01` |
| Gate 8 task | `01a05595-2a2c-7ef0-9be4-f55a42043bb6` |
| Effective implementation | `cfe9ef37ca3a8d9c6b05365ca6b09bcd22baf670` |
| Evidence HEAD / Build ID | `4ab0215c9a0b8cbe6ab126cc44c81dc3f6c5145e` / `odpFAtdFqE4o-SW2_HXul` |
| Runtime | `http://127.0.0.1:3240/markets/european-union/` |
| Review result | `READ_ONLY_QA_COMPLETE / GATE9_NOT_PASS` |
| Condition tally | 9 PASS / 3 FAIL / 1 NOT_VERIFIED |
| Gate 10 | Not authorized |

D23 independently reviewed the exact current-local-main candidate. Gate 8 self-checks were treated as evidence inputs. No D16 file, runtime data or production service was changed.

## 1. Intake and Identity

- Evidence-manifest validation: `PASS`, 91 checks, 0 failures.
- Gate 9 preflight: `PASS`, 2/2 HTTP requests, each HTTP 200 with 75,310 bytes and the exact Next 16 RSC Build ID marker.
- Git: originating page commit `8bf9d0c…` is an ancestor of effective candidate `cfe9ef3…`; candidate is an ancestor of evidence HEAD `4ab0215…`; evidence worktree is clean.
- Build: `.next-market-eu-g9-refresh/BUILD_ID` equals `odpFAtdFqE4o-SW2_HXul`.
- Submitted verification: scoped Vitest 20 files / 213 tests PASS; production build PASS; final Playwright 5/5 PASS; scoped ESLint PASS. No full-repository test was claimed or inferred.

## 2. Gate 7 Condition Matrix

| ID | Result | Independent Gate 9 basis |
|---|---|---|
| `EU-G8-A01` | PASS | Exact `MARKET-EU-001`, `tio2-my`, `en`, CMS record and route resolve; wrong/missing-scope tests and exact runtime are bound. |
| `EU-G8-A02` | PASS | The approved composite copy, 13 semantic modules and server-rendered content are present without buyer-visible governance placeholders. |
| `EU-G8-A03` | PASS | Exactly M-350, M-510, M-896, M-200, M-108 and M-210 render in the approved 3+3 groups; all six Grade routes return 200. |
| `EU-G8-A04` | FAIL | `/applications/`, all five Application children, Germany, Italy and EU Trade return 404. The runtime safely omits unavailable page anchors and the dated Trade block, but the required route/link set is not ready. Maps to `EU-G6-R03` and shared `G9-T4A5-F02`. |
| `EU-G8-A05` | FAIL | The contextual RFQ URL returns 200, but the runtime displays “The quotation request form is temporarily unavailable.” No editable `European Union` prefill field is present. Maps to `EU-G6-R04` and `CONV-RFQ-G8-RECEIVER-ENV-BLOCKER-01`. |
| `EU-G8-A06` | FAIL | Request Documents exposes the expected local form, but Request Sample displays an unavailable state and no sample form. No actual receiver/delivery proof exists. Maps to `EU-G6-R04`; production receiver verification remains release-layer open. |
| `EU-G8-A07` | PASS | The dated Trade sub-block, official references and Trade action are atomically absent while the Trade route is unavailable; approved evergreen customs guidance remains and no empty control appears. |
| `EU-G8-A08` | PASS | WordPress readback has `release_enabled=false` and `indexing_authorized=false`; held origin relationships do not enter Schema or enable release. |
| `EU-G8-A09` | PASS | Runtime has the exact title, one self-canonical, `noindex, nofollow`, no prohibited Schema hit and no sitemap promotion. |
| `EU-G8-A10` | PASS | Current shared Global Chrome and production logos render without a page-local fork; Markets is current. |
| `EU-G8-A11` | PASS | Footer exposes Privacy EN/BM, Cookie Policy and Cookie Settings. Built-in-browser operation opened the shared “Cookie settings” dialog; it states that optional analytics/advertising technology is inactive. |
| `EU-G8-A12` | NOT_VERIFIED | 1440/768/390 layout, targets, keyboard disclosure, focus retention, menu, reduced motion and automated accessibility checks pass. The submitted “200-percent equivalent” case only changes the viewport to 360px and does not establish browser UI zoom at 200%. |
| `EU-G8-A13` | PASS | Query, CMS, route, metadata, cache/revalidation and current runtime evidence retain exact `tio2-my` scope; no cross-scope fallback was observed. |

## 3. Required Findings

### MARKET-EU-001-G9-F01 — P1 — Shared route set is incomplete

Affected condition: `EU-G8-A04`. Existing roots: `EU-G6-R03` and `G9-T4A5-F02`.

Fresh HTTP checks returned 404 for `/applications/`, all five Application child paths, `/markets/germany/`, `/markets/italy/` and `/resources/eu-titanium-dioxide-anti-dumping-duty/`. Spain, Poland, Netherlands and Belgium returned 200. The EU page emits no Application anchors, no country destination anchors and no Trade-update anchor in the current safe state.

Closure must come from the registered shared page/route owners on the current `tio2-my` baseline. Do not add page-local fallback, guessed routes, empty shells, hidden links or a parallel hub. After owner-authorized integration, recheck response, redirect/canonical, Page ID/scope, visible anchor set, ItemList parity, keyboard path and Back/Return.

### MARKET-EU-001-G9-F02 — P1 — Required RFQ/Sample runtime behaviors are unavailable

Affected conditions: `EU-G8-A05`, `EU-G8-A06`. Existing root: `EU-G6-R04`; RFQ evidence maps to `CONV-RFQ-G8-RECEIVER-ENV-BLOCKER-01`.

The RFQ target returns HTTP 200 but renders its approved unavailable state; the required editable `European Union` context cannot be verified. Request Sample also returns HTTP 200 but renders “The sample request form is not available.” Request Documents exposes a local form. No real submission was made.

Closure requires owner-authorized RFQ and Sample availability in the same exact runtime, correct editable context, validation/privacy/success/error behavior and production-equivalent receiver evidence. Actual receipt, persistence, deduplication and acknowledgement remain release checks. MARKET-EU-001 must not implement or fork either conversion page.

### MARKET-EU-001-G9-F03 — P1 evidence blocker — Actual 200% browser UI zoom is not proven

Affected condition: `EU-G8-A12`.

`tests/e2e/european-union-market.spec.ts:153` labels a 360px viewport test as “200-percent equivalent CSS reflow.” Viewport resizing is useful responsive evidence but is not browser UI zoom.

Closure requires an auditable browser UI zoom value of 200%, before/after logical and physical viewport plus DPR, and checks for horizontal overflow, clipping, fixed/sticky obstruction, keyboard reachability and target usability. CSS zoom, viewport resize, pinch/page scale or CDP page-scale emulation alone is insufficient.

## 4. Independent Browser and Visual Review

- The built-in browser opened the exact runtime with the approved title, H1, Breadcrumb, 13 modules, six Grades, eight FAQ details, Sources/official ECHA reference and final conversion actions.
- A third FAQ disclosure was opened and closed; Enter retained focus on its summary control. All eight answer paragraphs exist in DOM.
- Cookie Settings opened the shared modal and Close returned to the page.
- The contextual RFQ, Documents and Sample destinations were opened read-only. RFQ and Sample showed unavailable states; Documents showed its local form. No form was submitted.
- Fresh 1440/768/390 and mobile-menu screenshots were reviewed. No blocker-level horizontal crop, overlap, missing module or navigation obstruction was observed. The shorter page height is consistent with approved safe omission of unavailable link/dynamic states.
- ECHA's current official non-EU company guidance continues to support the page's qualified importer/only-representative wording. The page does not claim that an only representative has been appointed.

## 5. Carry-Forwards and Four-Layer Status

| Item / layer | Status | Meaning |
|---|---|---|
| `EU-G6-R01` | `OPEN / RELEASE` | Malaysia-origin evidence hold remains; release and indexing stay disabled. |
| `EU-G6-R02` | `SAFE_OMISSION_PASS / RELEASE_RECHECK_REQUIRED` | Dated Trade output is absent; recheck official sources before any later enablement. |
| `EU-G6-R03` | `OPEN / PAGE_GATE9 / SHARED_ROUTES` | Incorporated into `MARKET-EU-001-G9-F01`. |
| `EU-G6-R04` | `OPEN / PAGE_GATE9_AND_RELEASE` | Current form availability blocks A05/A06; production receiver/delivery remains a release requirement. |
| `EU-G6-R05` | `PARTIAL / PAGE_GATE9` | Runtime, metadata, Schema, CMP and layout pass; native 200% UI zoom remains unverified. |
| `RECHECK_SCOPE` | `PASS` | Exact implementation, evidence HEAD, build, CMS and runtime are bound. |
| `PAGE_GATE9` | `READ_ONLY_QA_COMPLETE / NOT_PASS` | Three required findings remain open; no Gate 9 pass notice is issued. |
| `INTEGRATION` | `INTEGRATED_LOCAL_MAIN` | Effective candidate already exists in local main; this review performs no merge. |
| `RELEASE` | `NOT_AUTHORIZED` | Gate 10, deployment, publication, production CMS writes, real submissions and indexing remain outside scope. |

## 6. Disposition

Issue a Gate 8 return notice that preserves the EU page implementation and assigns closure to the existing shared owners plus the evidence owner. A fresh handoff must bind the current integrated candidate and recheck A04, A05, A06 and A12; the nine PASS conditions require regression confirmation. Gate 9 remains open.
