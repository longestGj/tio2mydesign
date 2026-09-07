# CONV-DOC Gate 7 — Gate 8 Implementation and Gate 9 Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `CONV-DOC-G7-HANDOFF-01` |
| Review ID | `CONV-DOC-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8 | `NOT_STARTED / SEPARATE_AUTHORIZATION_REQUIRED` |
| Gate 9 | `FUTURE_READ_ONLY_QA` |

## 1. Gate 8 implementation work packages

These become executable only after separate authorization.

| ID | Work package | Required output |
|---|---|---|
| G8-DOC-01 | Scoped page route | `/request-documents/` bound only to `site_scope=tio2-my` |
| G8-DOC-02 | Buyer Clean rendering | Approved module order, exact visible content, five types, 14 Grades and eight fields |
| G8-DOC-03 | Prefill normalization | Allowlisted visible editable context; safe discard; Market attribution only |
| G8-DOC-04 | Client/server validation | Required, syntax, allowlist, conditional and 500-character rules with value retention |
| G8-DOC-05 | Receiver integration | Verified owner/endpoint, explicit positive receipt mapping, timeout/failure/retry and duplicate prevention |
| G8-DOC-06 | Privacy integration | Exact short notice/link; actual data-flow facts supplied to Legal/Privacy owner; no consent checkbox |
| G8-DOC-07 | State machine | Initial, invalid, submitting, unconfirmed/failure, retry and receipt-confirmed success |
| G8-DOC-08 | Responsive/a11y | Approved composition plus semantic form, keyboard/focus/error/announcement behavior |
| G8-DOC-09 | Shared dependencies | Consume Global Chrome, legal utilities, Production SVG and applicable consent signal without forks |
| G8-DOC-10 | SEO/GEO/Schema | Exact metadata/canonical and allowed Schema from `tio2-my`; robots remains Gate 10 controlled |
| G8-DOC-11 | Privacy-safe observability | Internal failure diagnostics without form values in analytics, URLs or client-visible logs |

## 2. Gate 9 read-only QA matrix

| Area | Required evidence | Failure result |
|---|---|---|
| Route/scope | Resolved route, record/query/cache evidence and negative cross-scope checks | Page release blocker |
| Visual fidelity | Screenshots at approved and intermediate widths compared with Gate 5 assets | Return to development |
| Responsive | 1440/1280/1024/768/430/390/375/320 with no overflow/crop/dead space | Blocking defect |
| Fields/options | DOM/control inventory proves exactly eight fields, five types and 14 Grades in approved order | Blocking defect |
| Prefill | Valid/editable/removable, empty, stale, unsupported and malicious cases | Blocking defect |
| Country | Text semantics, exact helper/error and no list/routing side effect | Blocking defect |
| Validation/focus | First-load neutral, focused summary, linked fields, described errors, value retention | Blocking defect |
| Receiver | Positive acknowledgement, validation rejection, timeout, ambiguous response, retry and duplicate prevention | Operational release blocker |
| Success/failure | Receipt-only success; failure does not claim receipt or use Contact fallback | Blocking defect |
| Privacy | `/privacy-policy/` link, DOM order, actual policy/data-flow parity and no checkbox | Cross-page release blocker |
| Global Chrome | Correct shared Header/Menu/Footer, RFQ visibility/route, no false current state or local fork | Shared release blocker |
| Accessibility | Keyboard-only, accessibility tree, announcements, focus restoration, colour/motion independence | Blocking defect |
| SEO/Schema | Title/Meta/H1/canonical parity, query canonical, Schema allowlist and prohibited-node scan | Blocking defect |
| Analytics/logging | No form values/errors; receipt success only after explicit acknowledgement and applicable consent | Privacy/release blocker |
| Security/minimization | Server validation/sanitization, no secret/upload/payment fields, no raw error exposure | Blocking defect |

## 3. External dependency evidence

The owning tasks provide evidence for Privacy Policy, shared Global Chrome/legal utilities/consent and upstream routes. CONV-DOC Gate 9 verifies consumption and complete-site readiness; it does not take over their implementation.

Readiness false must record the responsible owner and block the applicable later gate/release. It must not hide, disable, remove, relink or replace approved final-reader surfaces with Contact, email, phone, another workflow or internal governance text.

## 4. Gate 10 controls

Gate 10 alone controls production deployment/release, domain/DNS, receiver production configuration, final dependency readiness, robots/indexing and search exposure. `noindex, follow` is a Gate 6/7 candidate only.

## 5. Rollback and change control

Rollback must stay within `site_scope=tio2-my`, restore the last approved implementation and preserve the fixed Global RFQ/shared dependencies. It must never fall back to another site scope, stale policy, hidden route or page-local shared component clone.

Any change to URL, page responsibility, fields, option sets, validation, outcome meaning, privacy copy, module order, visual hierarchy, Global Chrome mapping, metadata/Schema or product relation returns through project change control.
