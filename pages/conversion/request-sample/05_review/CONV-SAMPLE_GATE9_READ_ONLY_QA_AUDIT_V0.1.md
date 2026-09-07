# CONV-SAMPLE Gate 9 Read-only QA Audit V0.1

## 0. Decision Boundary

| Field | Value |
|---|---|
| Page | `CONV-SAMPLE` / `/request-sample/` |
| Review ID | `CONV-SAMPLE-G9-PCR-01` |
| Date | 2026-09-04 |
| Authority | Explicit user Gate 9 authorization recorded in `CONV-SAMPLE_GATE9_USER_AUTHORIZATION_RECORD_V0.1.md` |
| Result | `FINDINGS_PRESENT` |
| Findings | `P0=0 / P1=2 / P2=2` |
| Submission status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 10 / release | `LOCKED / NOT_AUTHORIZED` |

The returned Gate 8 implementation was inspected read-only against Package `CONV-SAMPLE-G7-HANDOFF-01`, Gate 5 V0.5 and the Gate 8 completion record. No finding was fixed in D16.

## 1. Findings

### `SAMPLE-G9-P1-01` — Known unavailable receiver does not replace the initial form

- **Severity:** P1.
- **Contract:** Gate 7 state `FORM_SERVICE_UNAVAILABLE`; closed Gate 8 review item `SAMPLE-G8-PCR-02`; known receiver unavailability must replace usable controls.
- **Paths:** `app/request-sample/page.tsx:12`, `app/request-sample/page.tsx:14`, `components/sites/tio2-my/request-sample/malaysia-request-sample-form.tsx:23`, `components/sites/tio2-my/request-sample/malaysia-request-sample-form.tsx:52`, `app/api/tio2-my/request-sample/route.ts:40`.
- **Observable evidence:** the production server was started without `TIO2_MY_REQUEST_SAMPLE_RECEIVER_URL` and `TIO2_MY_REQUEST_SAMPLE_RECEIVER_TOKEN`. A fresh GET still rendered one usable form and all field controls. Only after the buyer completed the form and POST returned `503 / kind=unavailable` did the unavailable panel replace the controls.
- **Risk:** a buyer can spend time entering business and evaluation information even though the server already knows the receiver is unavailable. The behavior contradicts the recorded closure of `SAMPLE-G8-PCR-02`.
- **Required correction:** determine verified receiver readiness server-side and pass only a non-secret readiness state into the page/form. When configuration is known absent, render the exact approved unavailable panel on initial load and render no usable form controls, while preserving shared navigation. Retain the current safe post-submit handling for runtime receiver loss.
- **Why not P0:** the observed path did not show success, did not send data to a configured downstream receiver and ultimately rendered the approved unavailable state.

### `SAMPLE-G9-P1-02` — Privacy Policy link misses the 44px responsive target

- **Severity:** P1.
- **Contract:** Gate 5 V0.5 requires the Privacy Policy link target to be at least 44px at 768 and 390; Gate 7 requires at least 44×44 logical px targets at 768 and below.
- **Paths:** `components/sites/tio2-my/request-sample/malaysia-request-sample-form.tsx:70`; `components/sites/tio2-my/request-sample/malaysia-request-sample-page.module.css:1` at `.privacy a` and responsive rules.
- **Observable evidence:** measured link target heights were 17px at 768, 390 and 375; 34px at 430 and 320. The link remains inline and has no responsive minimum target size.
- **Risk:** the directly adjacent legal/privacy action is harder to activate on touch and fails the approved responsive acceptance contract even though other tested form controls meet 44px.
- **Required correction:** provide a minimum 44px logical activation area for the exact `/privacy-policy/` link at every width at or below 768px without changing the approved notice or adding a mandatory checkbox; rerun 768/430/390/375/320 measurements and overflow checks.

### `SAMPLE-G9-P2-01` — FAQ disclosure deviates from the explicit `aria-expanded` contract

- **Severity:** P2.
- **Contract:** Gate 7 requires FAQ buttons with `aria-expanded` and keyboard operation; Gate 5 V0.5 records the same interaction direction.
- **Path:** `components/sites/tio2-my/request-sample/malaysia-request-sample-page.tsx:15`.
- **Observable evidence:** the runtime uses native `<details><summary>`; the first `SUMMARY` had `aria-expanded=null` while its parent was open. Keyboard behavior and complete answer content remained available, and Axe reported no serious/critical issue.
- **Risk:** this is an explicit approved-component/state mismatch and makes automated state verification inconsistent with the handoff contract.
- **Required correction:** implement the approved disclosure state with a keyboard-operable button and synchronized `aria-expanded`/panel relationship, or obtain a specific project-control-approved contract change for the native details pattern before acceptance.

### `SAMPLE-G9-P2-02` — Submitting state lacks form-level `aria-busy`

- **Severity:** P2.
- **Contract:** approved Gate 5 submitting-state direction includes `aria-busy`; Gate 7 requires an exposed busy state and disabled repeat activation.
- **Paths:** `components/sites/tio2-my/request-sample/malaysia-request-sample-form.tsx:52`, `components/sites/tio2-my/request-sample/malaysia-request-sample-form.tsx:70`, `components/sites/tio2-my/request-sample/malaysia-request-sample-form.tsx:71`.
- **Observable evidence:** during a delayed production-browser submission, the primary button changed to `Sending your request…`, became disabled, the status text was rendered, and ordinary-browser double activation produced one request; however the form's `aria-busy` attribute remained absent.
- **Risk:** duplicate protection works, but the implemented state does not fully expose the approved busy semantic on the form region.
- **Required correction:** synchronize `aria-busy=true` with the in-flight form state and remove/reset it outside that state, retaining the disabled action, status announcement and duplicate guard.

## 2. Acceptance Matrix

| Area | Result | Evidence / note |
|---|---|---|
| Identity, page ID and URL | PASS | One H1; `/request-sample/`; `CONV-SAMPLE`; `site_scope=tio2-my` |
| Approved copy and module order | PASS | Exact Hero/form/privacy/failure/success copy; `Sample Request → Human Review → FAQ` |
| Desktop visual composition | PASS | Full-width main flow; no page-level left/right split or right empty rail |
| Fields and minimum-data contract | PASS | Required, conditional and optional controls match Gate 7; no prohibited quantity/address/upload/logistics fields |
| Grade/Application choices | PASS | 14 grades + unknown; eight Applications; M-996/M-2196 independent |
| PRODUCT V0.3 relations | PASS | 30 relation mapping and 8/5/1 process set represented; M-2377 five approved Applications + Sulfate; Specialty Materials relation hidden; Rubber absent from taxonomy/prefill |
| Prefill | PASS | Valid context visible/editable/removable; invalid/mismatched values clear neutrally; clean canonical retained |
| Validation and maximums | PASS | Client/server validation, Unicode code-point limits, retained long value, focused error summary and linked field focus |
| Unknown Grade / Other | PASS | Unknown Grade valid; Other reveals required detail; Rubber can remain buyer text only |
| Submission failure/retry | PASS | Entries retained; ambiguous response rejected; direct retry keeps idempotency key; material edit rotates it |
| Duplicate protection | PASS | Normal browser double-click produced one logical request; button disabled in flight |
| Success semantics | PASS | Only explicit `{ok:true, receipt_confirmed:true, kind:'receipt_confirmed'}` entered success; success copy remains receipt/review only |
| Service unavailable | FAIL P1 | Post-submit replacement works; known initial unavailability does not replace form |
| Privacy notice/link | FAIL P1 + dependency | Exact copy/href and no checkbox pass; responsive target fails; production data-flow/policy parity remains externally unverified |
| Keyboard/focus/announcements | PASS with P2 deviations | Visible focus, error focus, state focus and Mobile Menu trap/Escape/restore pass; FAQ `aria-expanded` and form `aria-busy` deviate |
| Responsive / overflow | PASS except Privacy target | No horizontal overflow at 1440/1280/1024/768/430/390/375/320; form one column ≤768; other measured controls ≥44px |
| Axe | PASS | Zero serious/critical violations at 1440/768/390 |
| Global Chrome | PASS locally | Shared Header/Footer used; CSS Header 84/64px; RFQ present in Header/Footer; no Request Sample first-level nav/current state |
| SEO/canonical/robots | PASS for pre-release | Exact title/meta/canonical; query-independent canonical; `noindex, nofollow`; sitemap remains excluded |
| Schema | PASS | One graph; `WebPage` + `BreadcrumbList` only; no Product/Offer/FAQPage/query/PII |
| Claims | PASS | No free sample, stock, availability-now, quantity commitment, timing, freight, shipping, dispatch, delivery, regulatory, equivalence, comparison or ranking promise |
| Site-scope isolation | PASS locally | WordPress singleton, DTO and route fail closed for wrong scope/path/contract; no cross-scope fallback found |
| Production receiver/persistence | NOT VERIFIED / RELEASE BLOCKER | Local contract tests are not production durable-persistence/deduplication/acknowledgement evidence |
| Target WordPress state | NOT VERIFIED / RELEASE BLOCKER | Migration/singleton/seed not applied or verified in an authorized target environment |

## 3. Retained Production and Release Blockers

1. `SAMPLE-G9-P1-01` and `SAMPLE-G9-P1-02` require implementation-owner correction and Gate 9 recheck.
2. `SAMPLE-G9-P2-01` and `SAMPLE-G9-P2-02` require correction or an explicit approved contract disposition before Gate 9 closure.
3. Production receiver URL/token, operational owner, durable persistence, receiver-side deduplication and positive acknowledgement evidence remain missing.
4. The scoped WordPress migration/singleton/seed has not been applied and verified in an authorized target environment.
5. The Legal/Privacy owner has not confirmed parity between the actual production sample-request data flow, published Privacy Policy and shared consent/CMP dependencies.
6. Shared RFQ, upstream source pages, Global Chrome, legal controls and receiver availability still require target-environment/complete-site verification.
7. Canonical/robots/sitemap/indexing remain pre-release locked; Gate 10, deployment, publication, DNS, production writes and indexing have not been authorized.

## 4. Recommendation

Return the four findings to the external implementation owner. After correction, rerun the targeted 13-file test suite, TypeScript, production build and the independent browser assertions, then resubmit the changed evidence to project control. Do not enter Gate 10 while any retained release blocker remains.

## 5. Stop Point

Gate 9 remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. This audit does not grant project-control pass, user approval, Gate 10 or release authorization.
