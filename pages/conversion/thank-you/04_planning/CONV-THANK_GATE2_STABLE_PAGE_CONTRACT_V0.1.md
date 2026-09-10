# CONV-THANK Gate 2 Stable Page Contract C V0.1

Date: 2026-09-08. Dispatch: `G2-CONVTHANK-EXEC-20260908-01`. Author: `/root/conv_thank_gate2_execute`. Status: `STABLE_CONTRACT_CANDIDATE / READY_FOR_BUYER_REVIEW`; not Gate 2 approval.

## 1. Identity and content positions

| Field | Contract |
|---|---|
| Page | `CONV-THANK` / Thank You |
| Route / language / market | `/thank-you/` / `EN` / `GLOBAL` |
| Type / priority | Shared form-result utility page / `P1` |
| Scope | `site_scope=tio2-my`; no cross-scope fallback |
| Keyword | `NO_PRIMARY_KEYWORD`; no secondary acquisition keyword |
| Copy source | [Full Buyer Clean Copy B V0.1](CONV-THANK_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md) |
| Page-local modules | One mutually exclusive result panel: Quote, Documents, Sample or Direct / invalid |
| Shared assembly | Header before the result panel; Footer after it; both consumed from Global Chrome owner |

B is the only editable page-local visible-copy source. This C identifies B positions and behavior; it does not maintain competing body copy.

## 2. State eligibility and rendering

| State | Eligible only when | Visible position in B |
|---|---|---|
| Quote success | query type=`quote` and a valid current-session `quote` marker exists after the RFQ receiver's explicit positive acknowledgement | `BC-Q-01`–`BC-Q-05` |
| Documents success | query type=`documents` and a valid current-session `documents` marker exists after HTTP 200 plus JSON `success=true` from the current Documents receiver | `BC-D-01`–`BC-D-05` |
| Sample success | query type=`sample` and a valid current-session `sample` marker exists after the verified Sample receiver returns `ok=true` and `receipt_confirmed=true` | `BC-S-01`–`BC-S-05` |
| Direct / invalid | marker absent, invalid, mismatched, unsupported, stale or from a new session; query missing/invalid; or state cannot be safely verified | `BC-I-01`–`BC-I-05` |

The query selects an eligible copy variant and is never success proof. The marker contains only the approved request type, a success timestamp and a non-personal flow value needed to verify the current browser session. It carries no fixed minute value: it remains valid for an approved short period within the same session and expires when the session ends. A future Gate 6/8 design may use an equally private, more robust mechanism if the observable behavior is unchanged.

The selected state is resolved before success content is exposed. A loading or verification condition never flashes a success icon, `REQUEST RECEIVED`, success H1 or success body. Same valid-session refresh preserves the matching success state without emitting another conversion. Back, direct, page-view-only and invalid traffic do not establish or renew success.

## 3. Page-specific actions

| B position | Action | Target | Context carried |
|---|---|---|---|
| `BC-Q-04` | Explore Products | `/products/` | none |
| `BC-Q-05` | Go to Homepage | `/` | none |
| `BC-D-04` | Return to Documents | `/documents/` | none |
| `BC-D-05` | Explore Products | `/products/` | none |
| `BC-S-04` | Explore Products | `/products/` | none |
| `BC-S-05` | View Applications | `/applications/` | none |
| `BC-I-03` | Request a Quote | `/request-a-quote/` | none |
| `BC-I-04` | Request Documents | `/request-documents/` | none |
| `BC-I-05` | Request a Sample | `/request-sample/` | none |

These are nine state-specific action instances and seven unique destinations. No action appends submitted context, request data, prefill, marker data or analytics identifiers. The result page has no submit action, dynamic recommendation or marketing CTA.

## 4. Source-form failure, retry and duplicate boundary

The RFQ, Documents and Sample pages retain ownership of fields, validation, receivers, retry, duplicate prevention and workflow-specific success events.

- Validation failure stays on the source form, preserves unaffected values and focuses the approved error summary or field. It creates no marker and performs no navigation.
- Timeout, network, provider, receiver or ambiguous failure stays on the source form, preserves entered values and offers retry. It creates no marker, navigation or success event.
- Duplicate activation while submitting is prevented by the source form and cannot create a second request, result navigation or success event.
- A transport status, timer, client-side optimism, query value or Thank You page view cannot substitute for the source workflow's explicit positive acknowledgement.

## 5. Data, privacy, analytics and consent

The page renders no submitted name, email, phone, company, product, destination, application, document selection, sample requirement, quotation detail, free text or request reference. None of those values may appear in the URL, marker, analytics payload, accessible name, metadata or page content.

Quote, Documents and Sample retain distinct success-event semantics. Each success event is emitted by the source flow only after its positive acknowledgement, before or during controlled navigation, and remains subject to the approved shared GA4/GTM consent behavior. This page's view, refresh, back navigation, Direct / invalid state and any failure are not conversion events. Event payloads contain no form or marker values.

Advanced Consent Mode remains the shared owner contract: default consent states are denied before Google tags, full applicable measurement follows the visitor's choice, denied-state cookieless measurement may occur, and `ad_personalization` remains denied. Remarketing/audiences, Turnstile and reCAPTCHA remain disabled. No page-local consent manager or legal copy is created.

## 6. SEO, GEO and Schema

| Field | Exact contract |
|---|---|
| SEO Title | `Thank You | TiO2 Malaysia` |
| Meta Description | `View confirmation and next steps for a TiO2 Malaysia quotation, document or sample request, or choose the request you would like to make.` |
| Canonical | one clean base canonical `https://tio2malaysia.com/thank-you/`; query states create no separate canonical identity and do not canonicalize to source forms |
| HTTP | actual `/thank-you/` utility route returns `200`; this does not prove form receipt |
| Robots | `noindex, nofollow` in every state |
| Sitemap | excluded |
| GEO | no acquisition target, answer block, FAQ target or new entity relation |
| Schema | no page-specific JSON-LD; no conversion, order, quotation, delivery, document availability or sample-approval semantics |
| Social | no campaign target and no request/state-specific dynamic metadata |

There is no breadcrumb or `BreadcrumbList`. Shared sitewide machine nodes, if emitted by their owner, cannot contain this page's request state, marker or result semantics.

## 7. Shared-owner and accessibility boundaries

- Consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, the production SVG Logo baseline, the current primary CTA accessibility override, Footer legal utility row and Advanced Consent contracts without page-local forks.
- Current navigation key is `NONE`; each Desktop/Mobile navigation surface has zero current links for this route, and buyer-visible `CURRENT` count is zero.
- Fixed `Request a Quote` remains visible and links to `/request-a-quote/` on every approved Global Chrome surface.
- Footer legal utilities remain Privacy Policy → `/privacy-policy/`, Dasar Privasi (BM) → `/ms/privacy-policy/`, Cookie Policy → `/cookie-policy/`, and the Cookie Settings button. No Terms route or link is created.
- Success is expressed by text and icon; the icon is never the only signal. All actions must be keyboard reachable, have visible focus, meet the 44×44 logical-pixel minimum at 390px, remain usable at 200% zoom and cause no horizontal overflow.
- Gate 3/4 must cover complete Quote, Documents, Sample and Direct / invalid states at 1440, 768 and 390, plus the shared Mobile Menu. Exact visual design remains outside Gate 2.

## 8. Later-stage owner and acceptance map

| Dependency | Owner | Acceptance condition |
|---|---|---|
| `THANK-DEP01` source-flow integration | Three source-form owners plus Project Control | Gate 6 freezes the exact current receiver thresholds, inline-scope replacement and distinct event mapping before implementation |
| `THANK-DEP02` receiver/failure/retry/duplicate behavior | Three source-form Gate 8 owners | Gate 9 proves every source flow navigates only after its own positive acknowledgement and preserves retryable failures without duplicate requests/events |
| `THANK-DEP03` session state | CONV-THANK Gate 6/8 owner | Gate 9 covers valid refresh, missing/mismatched/unsupported/stale/new-session fallback and no pre-validation success flash |
| `THANK-DEP04` privacy/analytics | Legal/Consent and source-form analytics owners | Gate 9 covers consent choices/withdrawal, view/refresh/back/non-success events and zero PII/commercial values in URL, marker, content or analytics |
| `THANK-DEP05` search output | CONV-THANK and SEO owners | Gate 9 proves route 200, all-state noindex/nofollow, sitemap exclusion, base-only canonical identity and absence of result Schema |
| `THANK-DEP06` shared assembly and exits | Global Chrome/Brand/Legal and destination owners | Gate 9 proves shared Header/Menu/Footer/Logo/fixed RFQ/legal utilities, nine action instances, seven exact targets, no current marker and no Terms link |
| `THANK-DEP07` responsive/a11y/scope | Gate 3/4 and Gate 8/9 owners | Approved visual evidence and runtime proof cover four states, 1440/768/390, Mobile Menu, keyboard/focus/44px/zoom/overflow and full `tio2-my` isolation |

These dependencies are future implementation and verification conditions, not claims of current runtime behavior. If the shared route cannot be delivered safely, the approved rollback is the last approved inline-success state of each source form under an authorized later-stage change.
