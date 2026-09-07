# CONV-RFQ Gate 7 Acceptance and Blockers V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Package | `CONV-RFQ-G7-HANDOFF-01` |
| Review ID | `CONV-RFQ-G7-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

## 1. Gate 7 package checklist

- [x] Gate 5 approved baseline and Gate 6 V1.2 Manifest are frozen references.
- [x] Page ID, URL, P0, page type, language and keyword role match registry/master.
- [x] Exact Title/Meta/H1/canonical/robots, GEO and Schema contract is included.
- [x] All fields, options, order, requiredness, limits, helpers and error strings are enumerated.
- [x] Prefill, invalid/stale behavior and canonical/query rules are enumerated.
- [x] Receipt-confirmed state machine, value retention, retry and duplicate prevention are defined.
- [x] Receiver/Web3Forms/data-flow interface and explicit positive acknowledgement are defined.
- [x] Privacy/retention/processors/transfers/CMP/Cookie/GA4/GTM dependencies are defined.
- [x] No remarketing/audience features and no Turnstile/reCAPTCHA are explicit.
- [x] Global Chrome V0.5 and Production SVG are shared references only.
- [x] `site_scope=tio2-my` and no cross-scope fallback cover all layers.
- [x] 1440/768/390 and runtime responsive/accessibility acceptance are defined.
- [x] Analytics privacy and receipt-confirmed-only success event are defined.
- [x] Sample/Documents are required final-system links with no conditional renderer.
- [x] Gate 8 implementation and Gate 9 read-only QA matrix is complete.
- [ ] Project control has approved Gate 7.
- [ ] User has authorized Gate 8/development.
- [ ] External development destination has received the package.

## 2. Carry-forward controls

| ID | Boundary | Current state | Gate 8 obligation | Gate 9/release evidence |
|---|---|---|---|---|
| `RFQ-G7-B01` | `/request-a-quote/` route and `tio2-my` isolation | OPEN | implement scoped route/config | response, scope, canonical and no leakage |
| `RFQ-G7-B02` | receiver and accountable human-review owner | OPEN | configure verified receiver/owner | production-equivalent receipt/delivery evidence |
| `RFQ-G7-B03` | Web3Forms plan/data flow/DPA/subprocessors/integrations/security | OPEN | implement/document actual configuration | network/config/data-flow evidence |
| `RFQ-G7-B04` | explicit positive receipt response | OPEN | implement unambiguous acknowledgement | success only on verified acknowledgement |
| `RFQ-G7-B05` | Privacy Policy route/final production disclosure | OPEN | implement shared policy/link | exact route/content/data-flow parity |
| `RFQ-G7-B06` | privacy contact, retention, processors/transfers/rights | OPEN | populate verified configuration/policy | user-confirmable production-equivalent disclosure |
| `RFQ-G7-B07` | CMP, Cookie Settings and Cookie/storage inventory | OPEN | implement approved consent system | scan and consent/firing evidence |
| `RFQ-G7-B08` | GA4/GTM consent and analytics privacy | OPEN | consent-gated tags/events; no form values | network/dataLayer/consent evidence |
| `RFQ-G7-B09` | no remarketing, Turnstile or reCAPTCHA | CONTROLLED | keep disabled/absent | config/network/DOM scan |
| `RFQ-G7-B10` | `/request-sample/` required route/link | OPEN / REQUIRED_FINAL_SYSTEM | implement exact route and link | functional route/link before release |
| `RFQ-G7-B11` | `/request-documents/` required route/link | OPEN / REQUIRED_FINAL_SYSTEM | implement exact route and link | functional route/link before release |
| `RFQ-G7-B12` | canonical equivalence, robots and indexing | OPEN | implement environment-aware metadata | Gate 9 equivalence; Gate 10 authorization |
| `RFQ-G7-B13` | Global Chrome/legal Footer integration | OPEN shared dependency | consume shared components | no private fork; fixed RFQ/legal links work |

These do not block project-control review of the Gate 7 specification. They block Gate 9/release as stated and must not become Buyer Clean placeholders.

## 3. Gate 8 implementation acceptance

If separately authorized, the external development project must:

1. Implement the registered scoped route and exact approved Buyer Clean without cross-scope fallback.
2. Preserve single-column page flow and approved form composition at all required widths.
3. Implement exact fields/options/order/limits/helpers/errors and semantic labels.
4. Keep first load neutral; implement focusable summary, linked errors and value retention.
5. Implement safe visible/editable prefill and discard invalid/stale values without status leakage.
6. Keep canonical/metadata/Schema invariant across query/prefill URLs.
7. Bind the verified receiver with explicit positive receipt acknowledgement.
8. Treat timeout/network/server/malformed/ambiguous response as failure and retain retryable values.
9. Prevent duplicate submission without disabling shared RFQ navigation.
10. Implement privacy notice/route and actual Web3Forms/controller/retention/processor/transfer disclosures.
11. Implement shared legal Footer, Cookie Banner and Cookie Settings with approved CMP.
12. Use GA4/GTM only with approved consent behavior; keep form values/errors out of analytics.
13. Fire quotation-request success/conversion only on `receipt_confirmed`.
14. Keep remarketing/audience features, Turnstile and reCAPTCHA absent.
15. Implement `/request-sample/` and `/request-documents/`; retain both exact required low-weight links.
16. Consume shared Global Chrome V0.5 and Production SVG; do not fork/copy them.
17. Emit exact SEO and WebPage + BreadcrumbList-only Schema.
18. Meet responsive, keyboard, focus, menu, live-message, target-size and zoom acceptance.
19. Preserve PRODUCT V0.3 and prohibit relationship/comparison inference.
20. Provide production-equivalent evidence for Gate 9 read-only QA.

## 4. Gate 9 read-only QA matrix

| Domain | Required evidence |
|---|---|
| Identity/scope | exact route/Page ID/`tio2-my`; no foreign CMS/API/cache/form/media/menu data |
| Content | exact Hero, labels, helpers, privacy, sibling links and state copy |
| Fields | required/optional, option order, lengths, quantity/MT and unknown-grade path |
| Validation | first-load neutral; exact summary/errors; described-by/invalid/focus behavior |
| Prefill | visible/editable; stale safe discard; no broad-region country injection; clean canonical |
| Receiver | verified owner/endpoint/data flow; explicit positive acknowledgement; delivery evidence |
| Failure | timeout/network/server/ambiguous response retains values and shows retry/no Contact fallback |
| Success | only after receipt; no quote/order/approval implication; analytics success only here |
| Unavailable | final-reader state; release remains blocked; shared RFQ visible |
| Privacy/legal | policy route, notice parity, controller/contact/purpose/retention/processors/transfers/rights |
| Consent/Cookies | CMP, Cookie Banner/Settings, production-equivalent storage inventory and consent signals |
| Analytics | GA4/GTM consent; no form values/errors; no attempt/failure counted as conversion |
| Prohibited tech | no remarketing/audience, Turnstile or reCAPTCHA |
| Required sibling routes | both exact links visible and both routes functional; no hide/disable/Contact fallback |
| Global Chrome | shared V0.5, fixed RFQ, legal Footer links, Production SVG, no visible CURRENT |
| SEO/GEO | exact Title/Meta/H1/canonical/robots and visible-answer parity |
| Schema | WebPage + BreadcrumbList only; prohibited nodes and buyer data absent |
| PRODUCT V0.3 | M-2377 boundaries, Rubber/Specialty Materials and M-996/M-2196 holds |
| Responsive | 1440/1280/1024/768/430/390/375/320; no overflow/crop/blank band |
| Accessibility | headings/landmarks/labels, focus, errors, live states, Menu trap/Escape/return, ≥44px, 200% zoom |
| Security/output | long/adversarial input safe; no output injection, URL/form-data leakage or confidential upload |

## 5. Release blockers

Any of the following blocks Gate 9 acceptance for the affected domain and/or complete-site release:

- RFQ route/form/receiver unavailable, ambiguous receipt handling or cross-scope fallback;
- success shown without explicit receiver acknowledgement;
- lost values, duplicate submissions, sensitive URL/log/analytics leakage or Contact fallback;
- missing/broken Privacy route, inaccurate production disclosure or unresolved receiver/retention/processor/transfer facts;
- missing/incorrect CMP, Cookie Settings, Cookie inventory or GA4/GTM consent behavior;
- remarketing/audience feature, Turnstile or reCAPTCHA enabled;
- missing, hidden, disabled, removed or relinked Sample/Documents link, or either required route not functional;
- local Header/Footer/Menu fork, fixed RFQ missing or legal Footer system absent;
- metadata/canonical/robots/Schema divergence or query/private value indexing;
- unapproved Product relationship/comparison/availability/price/logistics/regulatory claim;
- responsive overflow/crop, keyboard/focus/live-message/Menu/44px/zoom failure.

## 6. Rollback and safe failure

Rollback must preserve approved content/state semantics and scope:

1. Stop or disable the failing receiver operation internally without claiming receipt.
2. Present approved failure/unavailable state and retain values where safe.
3. Purge only `tio2-my` + `CONV-RFQ` scoped caches/config revisions.
4. Do not fall back to another site, receiver, Contact, email, phone or stale static configuration.
5. Do not hide global RFQ or either required sibling link as a rollback mechanism.
6. Verify clean canonical/metadata/Schema and privacy-safe analytics before reopening.

If either sibling route fails, block release until fixed; do not silently remove its link.

## 7. Gate boundary

This Gate 7 package is user-authorized for preparation and submitted for project-control review. It is not approved for handoff, not handed off and does not authorize Gate 8. `D:\16Wordpress_nextjs` remains untouched.

