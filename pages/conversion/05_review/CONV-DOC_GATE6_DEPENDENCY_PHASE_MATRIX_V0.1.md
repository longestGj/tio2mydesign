# CONV-DOC Gate 6 Dependency and Phase Matrix V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `CONV-DOC` / `/request-documents/` |
| Review ID | `CONV-DOC-G6-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 7 | Prior conditional authorization activated after Gate 6 pass; started under `CONV-DOC-G7-PCR-01` |

## 1. Phase classification

| ID | Dependency | Gate 6 conclusion | Gate 8 implementation | Gate 9 read-only QA | Gate 10 release |
|---|---|---|---|---|---|
| DOC-G6-O01 | `/request-documents/` route and `site_scope=tio2-my` page record | Contract complete; not a Gate 6 blocker | Implement isolated route/query/cache/content/media binding | Verify no cross-scope leakage or fallback | Confirm production route and release authorization |
| DOC-G6-O02 | Form receiver, owner and explicit positive receipt acknowledgement | Operational input open; not a planning defect | Implement receiver, validation, sanitization, anti-duplication and failure path | Exercise success, timeout, ambiguous response, retry and observability | Must be operational before release |
| DOC-G6-O03 | Privacy Policy route `/privacy-policy/` and actual processing disclosure | Final link contract approved; parallel page work is not a Gate 6 blocker | Implement real route and ensure actual form processing matches notice | Verify link, rendered policy and actual data flow | Missing/mismatched policy blocks release |
| DOC-G6-O04 | Shared Header/Footer/Mobile Menu and legal utilities | Consumption contract complete | Consume shared components; no page-local clone | Verify RFQ permanence, current state, legal links and Cookie Settings | Shared-route failure blocks release |
| DOC-G6-O05 | Products/Applications/Documents prefill and Market attribution | Behavioral contract complete | Implement allowlist, visible editable values and safe discard; Market never drives fields/documents | Test valid, empty, stale, unsupported and malicious parameters | Broken required upstream routes block complete-site release as applicable |
| DOC-G6-O06 | SEO metadata, canonical, `noindex, follow` candidate and Schema | Planning contract complete | Render from `tio2-my` record only | Verify HTML/metadata/JSON-LD parity and clean canonical | User controls final robots/indexing decision |
| DOC-G6-O07 | Responsive/accessibility/runtime state machine | Acceptance contract complete | Implement semantic form, focus/error relationships, responsive behavior and announcements | Verify keyboard, screen-reader semantics, targets, overflow and all states | Unresolved blocking defects prevent release |

## 2. `site_scope=tio2-my` isolation

The implementation contract must isolate:

- page/content queries and IDs;
- route generation and canonical URLs;
- cache keys and invalidation;
- navigation and shared-component configuration;
- SEO fields, JSON-LD and social metadata;
- form receiver/configuration, validation messages and observability;
- media and logo bindings;
- prefill allowlists and source attribution.

No other `site_scope`, TIOVAR site or frozen site may provide fallback values. Missing Malaysia data fails closed rather than leaking another site's content, recipient, URL, media, metadata or form state.

## 3. Prefill field contract for later implementation

| Input family | Allowed behavior | Rejected behavior |
|---|---|---|
| Product/Grade | Populate a registered Grade visibly; buyer can change it | Infer application, document availability or recommendation |
| Application | Populate visible optional application context; buyer can edit/remove | Automatically select a Grade |
| Documents | Populate supported document category values visibly | Treat category as file existence, current version or approval |
| Market | Source attribution only | Populate Country / Region, select a document or establish scope/applicability |
| Invalid/stale | Discard safely and keep form usable | Show internal status, negative suitability or first-load error |

No buyer-entered form value may be placed in the URL, canonical, Schema, analytics labels or public logs.

## 4. Release-boundary conclusion

The open items above do not block Gate 6 review because their planning contracts are complete. They become Gate 8 implementation requirements, Gate 9 QA checks and, where stated, Gate 10 release blockers.

Gate 6 pass activated the user's prior authorization to begin Gate 7. This document remains a Gate 6 phase record and does not itself authorize Gate 8 development.
