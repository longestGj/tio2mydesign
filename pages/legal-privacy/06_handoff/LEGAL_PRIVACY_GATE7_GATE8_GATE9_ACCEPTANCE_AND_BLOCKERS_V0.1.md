# Legal / Privacy Gate 7 — Gate 8 / Gate 9 Acceptance and Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Package | `LEGAL-PRIVACY-G7-HANDOFF-01` |
| Review | `LEGAL-PRIVACY-G7-PCR-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Gate 8–10 | `NOT_AUTHORIZED` |
| Handoff | `HANDED_OFF=NO` |

## 1. Gate 8 implementation obligations after separate authorization

An authorized external development task must:

1. implement the three exact registered routes and the shared Cookie Settings/Consent surface for `site_scope=tio2-my`;
2. use the hashed Buyer-visible copy boundaries without rendering internal notes;
3. consume shared Global Chrome and production Logo without a Legal-local fork;
4. implement exact metadata, Canonical, hreflang, Schema and sitemap/index gating;
5. implement the current `no_optional_analytics` state unless a separately evidenced Analytics-active state is selected;
6. configure Web3Forms/receiver secrets outside public content and verify receipt/failure semantics with the form owner;
7. implement automated tests for route identity, content-source integrity, release-state exclusivity, consent order/transitions, same-scope isolation, metadata/Schema, responsive behavior and accessibility;
8. produce production-equivalent build and runtime evidence for Gate 9.

The external task must not add Terms, redirect `/legal/privacy-policy/`, activate analytics/ads without approved evidence, copy TITAN identifiers, expose credentials or read another site scope as fallback.

## 2. Gate 8 minimum evidence

| Area | Required evidence |
|---|---|
| Routes | route tests for three exact paths; 404/no registration for forbidden paths unless a later approved change exists |
| Content | normalized and raw hash/source proof for all three Buyer-visible copy authorities; internal-section exclusion tests |
| CMS/API | same-scope records, cardinality/order validation, missing/foreign-scope fail-closed tests |
| Chrome | shared component consumption; exact Footer; eight-item Mobile Menu; no Legal current state |
| Consent | default-before-Google execution proof; state-transition tests; invalid/storage-blocked/runtime-error behavior |
| Release state | current and conditional projections cannot coexist; default build is current no-Analytics state |
| Web3Forms | secret/config owner, positive receipt, recipient delivery, negative response, network failure and limit observability |
| SEO/GEO/Schema | initial HTML Title/Meta/Canonical/hreflang/JSON-LD tests; visible-copy parity |
| Responsive/a11y | 1440/768/390 screenshots; Mobile Menu; 200% zoom; keyboard/focus/screen-reader evidence |
| Build quality | scoped unit/integration tests, typecheck, lint and production-equivalent build |

## 3. Gate 9 read-only QA matrix

| ID | Check | Pass condition |
|---|---|---|
| LP-G9-01 | Page identity | all three Page IDs/routes/locales correct and same-scope |
| LP-G9-02 | Copy parity | full Buyer-visible copy present in exact order; no internal governance text |
| LP-G9-03 | BM equivalence | qualified human reviewer confirms meaning/legal equivalence including approved Meta |
| LP-G9-04 | Chrome | current shared Header/Footer/Menu/Logo consumed; exact copyright and legal utilities |
| LP-G9-05 | Responsive | 1440/768/390 visual comparison; TOC normal flow; table/card reflow; no overflow |
| LP-G9-06 | Accessibility | keyboard, focus, dialog/region semantics, target size, contrast, screen reader and 200% zoom pass |
| LP-G9-07 | Current technology inventory | clean browser captures Cookies, Local Storage, session storage, IndexedDB/service worker where applicable and network recipients |
| LP-G9-08 | Consent ordering | all four denied defaults occur before GTM or Google measurement; no late default race |
| LP-G9-09 | Consent choices | before choice, Necessary only, Accept analytics, reopened Save/Close and withdrawal match the state table |
| LP-G9-10 | Advanced denied traffic | cookieless requests are inventoried and disclosed accurately when Google is active |
| LP-G9-11 | Prohibited advertising | no remarketing/audience/personalisation; three advertising-related states remain denied |
| LP-G9-12 | Web3Forms | production key owner and receiver verified; positive receipt reaches mailbox; failures are not success |
| LP-G9-13 | Provider parity | actual host, email, form and measurement providers match Privacy/Cookie disclosures |
| LP-G9-14 | Retention parity | company three-year rule, provider TTL and browser storage duration are distinct and accurate |
| LP-G9-15 | SEO/GEO/Schema | exact metadata/canonicals/language alternates/JSON-LD in initial HTML; no unsupported entity |
| LP-G9-16 | Forbidden routes | no Terms route/link/sitemap/Schema; no old Privacy route or cross-scope fallback |

## 4. Later-stage blocker ownership

| Blocker/control | Owner | Required before | Public behavior while unresolved |
|---|---|---|---|
| BM human legal/meaning equivalence | Legal/qualified BM reviewer | Gate 9 approval/release | approved BM page remains implementation input but cannot release |
| Web3Forms account key/receiver/delivery | RFQ + operational owner | Gate 9/release | no credential or internal warning in public copy |
| Enterprise mailbox monitoring | operational owner | Gate 9/release | public contact remains approved email only after verified operation |
| Production host/log/DPA behavior | hosting/technical owner + Legal | final policy/Gate 9 | do not name planned host as active |
| Exact Cookie/storage/network inventory | Consent/technical owner | Gate 9/release | current policy uses only verified state; undisclosed active item blocks release |
| GA4/GTM/Ads configuration | analytics owner + Consent owner | before any activation | remain inactive; no active-category claim |
| Sample/Documents form data flows | respective conversion owners + Legal | before those workflows release | do not add speculative fields to policy |
| Malaysia PDPA/current EU/UK applicability review | qualified Legal reviewer | Gate 10/publication | no new public legal claim or representative/DPO claim |
| Gate 10 publication/index decision | user + development/release owner | public release | preview/non-public only |

These are later-stage controls, not Gate 7 defects and not Buyer-visible placeholders. If the relevant condition is encountered during implementation or QA, the owning stage is blocked and returned with evidence.

## 5. Severity rules

- **Blocking:** wrong route/Page ID/site scope; missing or altered approved copy; both release states rendered; Google defaults after measurement; advertising state granted; secret exposed; false form success; cross-scope/TITAN leakage; missing policy/Cookie Settings; BM released without human review.
- **Important:** visual/responsive divergence, incomplete inventory fields, focus/zoom/table semantics failure, metadata/Schema mismatch, unverified provider named active.
- **Advisory:** implementation detail that does not change observable contract, evidence, content, privacy behavior or release safety.

All Blocking findings must close before Gate 9 approval. Important findings close before release unless Project Control documents why the exact issue is non-blocking and assigns a controlled follow-up.

## 6. Rollback contract

Rollback returns to the last verified same-scope implementation and keeps routes/legal links available. It must default optional tags to denied/blocked and must not:

- restore Basic Consent Mode;
- restore TITAN IDs, key, event namespace or text;
- merge current and Analytics-active Cookie copy;
- hide Privacy/Cookie links or Cookie Settings;
- redirect to Contact, another scope or `/legal/privacy-policy/`;
- introduce a Terms page or suppress known provider behavior from the policy.

## 7. Authorization boundary

This document is an acceptance contract only. Gate 8, Gate 9, Gate 10, external handoff, code, credentials, deployment, publication, DNS and indexing are not authorized by Gate 7 approval.
