# RES-ORIGIN Gate 7 Acceptance and Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `RES-ORIGIN` / `/resources/non-china-titanium-dioxide/` |
| Package ID | `RES-ORIGIN-G7-HANDOFF-01` |
| Date | 2026-09-05 |
| Embedded status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED` |
| Gate 8 | Not authorized |
| Gate 9 | Read-only QA after accessible implementation |
| Gate 10 | Separate publication authorization required |

## 1. Gate 8 Acceptance Matrix

| ID | Domain | Required implementation result | Required evidence for Gate 9 | Severity if absent |
|---|---|---|---|---|
| G8-01 | Identity | Exact Page ID, `tio2-my`, EN, Buying Guide and path | Scoped CMS/API/route capture | P0 |
| G8-02 | Scope isolation | Filter scope before content, relation, media and cache lookup; no fallback | Wrong-scope-only fixture and response | P0 |
| G8-03 | Exact content | Gate 2 V0.2 strings and thirteen-module order | CMS/API payload + SSR text comparison | P0 |
| G8-04 | Cardinality | 6/6/5/5/8/4/3/9 collections | Automated count assertions | P0 |
| G8-05 | Claims | Zero named grades, mappings, M-996/M-2196 or trade outcomes | DOM/API/Schema text scan | P0 |
| G8-06 | Route predicates | Only fully eligible `tio2-my` relations are interactive | Per-predicate fixtures | P0 |
| G8-07 | Conditional absence | No disabled UI, placeholder, guessed route or orphan spacing | DOM/layout capture with routes absent | P1 |
| G8-08 | RFQ prefill | Only `source_page` and generic `interest` | Navigation/request capture | P0 |
| G8-09 | Shared Chrome | Consume Global Chrome V0.5; `Resources` active; correct logos | Desktop/Mobile/Menu DOM and visual capture | P0 |
| G8-10 | SEO metadata | Exact Title, Meta, Canonical and language | Head capture | P0 |
| G8-11 | Robots | Non-production not indexable; production gated by Gate 10 | Environment-specific head/headers | P0 |
| G8-12 | GEO parity | Definition/checklist use visible approved copy only | Visible text/API/structured comparison | P0 |
| G8-13 | Breadcrumb Schema | Visible three-level breadcrumb and BreadcrumbList match | DOM + JSON-LD comparison | P1 |
| G8-14 | Article Schema | Emit only with complete real visible metadata | Complete/incomplete fixtures | P0 |
| G8-15 | Prohibited Schema | No Product/Offer/Review/AggregateRating/FAQ/QAPage or hidden claims | JSON-LD scan | P0 |
| G8-16 | SSR disclosures | All nine answers in initial DOM | Raw HTML + accessibility tree | P1 |
| G8-17 | Responsive | Fidelity at 1440/768/390; robustness at 1024/430/375 | Screenshots and computed dimensions | P1 |
| G8-18 | Overflow/type/targets | No horizontal page scroll; body ≥16px; targets ≥44×44 | Computed browser checks | P0 |
| G8-19 | Keyboard/focus | FAQ/menu keyboard behavior and visible focus | Recorded keyboard sequence | P0 |
| G8-20 | Zoom/motion | 200% zoom usable; reduced motion preserves content | Browser captures | P1 |
| G8-21 | Cache isolation | Keys/tags/invalidation include scope and revisions | Cache tests/logs | P0 |
| G8-22 | Error behavior | Missing/wrong scoped data fails safely | Error fixture and route response | P0 |
| G8-23 | Shared-site regression | No Malaysia/TIOVAR/shared chrome/form leakage or regression | Required D16 regression suite | P0 |
| G8-24 | Gate 9 receipt | Preview, commit/ref, commands/results and payload evidence provided | External receipt package | P0 |

## 2. Viewport and State Matrix

| State | 1440 | 1024 | 768 | 430 | 390 | 375 | Gate 9 expectation |
|---|---:|---:|---:|---:|---:|---:|---|
| Complete page | Required | Robustness | Required | Robustness | Required | Robustness | No horizontal scroll/crop |
| Mobile Menu open | N/A | N/A | As applicable | Required | Required | Required | Focus containment, Escape, return |
| FAQ closed | Required | Required | Required | Required | Required | Required | All answers remain initial DOM |
| FAQ open/focus | Required | Required | Required | Required | Required | Required | Visible focus and correct state |
| Ineligible application links | Required | Required | Required | Required | Required | Required | Useful copy; no dead/disabled UI |
| Ineligible destination links | Required | Required | Required | Required | Required | Required | No guessed trade route/outcome |
| Missing Article metadata | Required | Required | Required | Required | Required | Required | Article omitted, page preserved |
| Wrong-scope-only data | Required | Required | Required | Required | Required | Required | Approved error/not found; no fallback |
| 200% zoom | Required | Required | Required | Required | Required | Required | Reading/action continuity |
| Reduced motion | Required | Required | Required | Required | Required | Required | No information removed |

## 3. Exact Metadata and Structured Data Checks

| Output | Expected |
|---|---|
| Title | `Non-China Titanium Dioxide Supply Guide | TiO2 Malaysia` |
| Meta description | `Evaluate non-China titanium dioxide supply using checks for origin evidence, technical documents, application fit and destination-market requirements.` |
| Canonical | `https://tio2malaysia.com/resources/non-china-titanium-dioxide/` |
| H1 | `Non-China Titanium Dioxide: A Procurement Evaluation Guide` |
| Language | EN |
| Breadcrumb | Home → Resources → Non-China Titanium Dioxide Supply Guide |
| Always-permitted page Schema | `BreadcrumbList`; global WebPage/Organization pattern as approved |
| Conditional | `Article` only with complete real visible metadata |
| Prohibited | Product, Offer, Review, AggregateRating, unsupported FAQPage/QAPage and hidden relations/claims |

## 4. Relation and Prefill Fixtures

### 4.1 Eligible relation

All of these must pass: both scopes `tio2-my`, approved owner ID, approved content, verified route, verified canonical and public eligibility. Expected: approved anchor text and target render once in DOM and match any structured relation.

### 4.2 One failed predicate

For each predicate independently set to failure. Expected: href and action affordance are absent; explanatory copy remains; no disabled control, empty card, placeholder, fallback or Schema relation.

### 4.3 RFQ prefill

Allowed: `source_page=RES-ORIGIN`, `interest=alternative-origin-sourcing`. All grade, market, application, quantity, destination, document, price, lead-time, origin and trade fields remain absent unless the buyer explicitly supplies them later in the RFQ workflow.

## 5. Release Blockers

The following block Gate 10 even if implementation tests otherwise pass:

1. No Gate 8 user authorization or no named external development receipt.
2. No accessible implementation URL and immutable commit/ref for Gate 9.
3. Route or canonical not verified in the intended environment.
4. Wrong-scope, cross-scope or cache leakage.
5. Any deviation from exact approved content or module order.
6. Any unsupported grade, product mapping, origin, document, availability or trade claim.
7. Missing real author/publisher/publication/review fields while Article remains emitted.
8. Non-production route indexable or production indexing enabled before Gate 10.
9. Any P0/P1 Gate 9 finding open.
10. Downstream link rendered without its own route/content/canonical/public gates.
11. RFQ prefill infers facts beyond the two approved fields.
12. Global Chrome or production-logo fork.
13. Mobile horizontal overflow, clipped content, sub-44px critical targets or inaccessible disclosures/menu.
14. RES-000 public card/ItemList added before this child passes all parent-child public eligibility controls.

## 6. Gate 9 Evidence Receipt

The external Gate 8 task must provide:

- exact repository, branch/worktree and immutable commit/ref;
- accessible preview URL and environment identity;
- CMS/source record identity and scoped API/ViewModel capture;
- route, canonical, robots, head and JSON-LD captures;
- rendered Desktop/Tablet/Mobile/Menu/FAQ states;
- wrong-scope, missing-route, missing-Article-metadata and relation-predicate fixtures;
- focused test commands/results plus required repository lint/type/build/test results;
- disclosure of any visual/content variance;
- confirmation that deployment, production data writes, publication and indexing remain disabled.

## 7. Rollback Contract

If a P0/P1 defect is discovered before release:

1. keep the route non-public/non-indexable or withdraw affected public eligibility;
2. remove affected relation, metadata or Schema output atomically;
3. invalidate only `tio2-my` and RES-ORIGIN scoped caches;
4. never fall back to another scope, stale static JSON, disabled UI or placeholder copy;
5. return a precise finding to the development task;
6. require a new immutable implementation ref and targeted Gate 9 verification.

If the entire scoped record is invalid, use the development project's approved safe not-found/error behavior.

## 8. Project-Control Gate 7 Checklist

- [x] Gate 6 approved and closed.
- [x] User explicitly authorized Gate 7.
- [x] Authority and visual hashes recorded.
- [x] CMS/API/ViewModel fields and cardinalities specified.
- [x] Component responsibilities and null states specified.
- [x] Scope, route, relation, RFQ and cache contracts specified.
- [x] SEO/GEO/Schema and robots contracts specified.
- [x] Responsive/accessibility/runtime states specified.
- [x] Gate 8 tasks and Gate 9 evidence specified.
- [x] Release blockers and rollback specified.
- [x] No code, CMS data, copied visual asset or D16 artifact in the package.
- [ ] Gate 7 Manifest sealed and project-control review wrapper completed.
- [ ] Gate 8 separately authorized.

## 9. Version Record

| Version | Date | Change | Embedded status |
|---|---|---|---|
| V0.1 | 2026-09-05 | Initial Gate 7 acceptance, evidence, blocker and rollback contract | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_SELF_APPROVED`; Gate 8 locked |

