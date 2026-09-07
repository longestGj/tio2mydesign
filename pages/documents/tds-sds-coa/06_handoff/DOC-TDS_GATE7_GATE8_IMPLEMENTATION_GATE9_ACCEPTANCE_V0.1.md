# DOC-TDS Gate 7 — Gate 8 Implementation and Gate 9 Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Page / route | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Gate 8 | `NOT_STARTED / SEPARATE_USER_AUTHORIZATION_REQUIRED` |
| Gate 9 | `FUTURE_READ_ONLY_QA` |
| Gate 10 | `NOT_AUTHORIZED` |

## 1. Gate 8 implementation work packages

These work packages become executable only after explicit Gate 8 authorization.

| ID | Work package | Required independently testable output |
|---|---|---|
| `G8-TDS-01` | Scoped page record and route | `/documents/tds-sds-coa/` resolves only from `site_scope=tio2-my`; wrong/missing scope fails closed |
| `G8-TDS-02` | Buyer Clean rendering | Exact ten modules, copy, ordered headings, three selectable types, 14 Grades, five FAQs and three conditional related paths |
| `G8-TDS-03` | Document/Grade state | Independent TDS/SDS/COA checkboxes, one optional Grade, neutral initial state, live summary and no automatic navigation |
| `G8-TDS-04` | Prefill transport | Deterministic repeated `document_types[]`, one `product_grade`, safe discard, hidden trusted DOC-TDS source and receiver-editable values |
| `G8-TDS-05` | Route eligibility | Atomic action/card omission with no Contact/RFQ/email/phone/other-scope fallback |
| `G8-TDS-06` | CONV-DOC integration | Receiver exposes valid prefill visibly; still requires one Grade and ≥1 type before submit; no availability inference |
| `G8-TDS-07` | SEO/GEO/Schema/social | Exact Title/Meta/H1/clean Canonical; `WebPage + BreadcrumbList` only; same-source social copy; prohibited-node scan |
| `G8-TDS-08` | Responsive/accessibility | Approved 1440/768/390 composition plus intermediate widths, 44px targets, semantic table/disclosures, focus, zoom and no overflow |
| `G8-TDS-09` | Shared dependencies | Consume Global Chrome V0.5, Production Logo, legal utilities, consent and fixed RFQ without page-local forks |
| `G8-TDS-10` | Evidence suppression | No file inventory, filenames, previews, downloads, availability/currentness/compliance/origin/delivery claims or internal statuses |
| `G8-TDS-11` | Privacy-safe observability | No Grade/type/free-text/query/source values in public URLs beyond approved prefill, analytics payloads or client-visible logs; receipt events remain CONV-DOC-owned |

## 2. Required test-first implementation cases

### 2.1 Page and content

- exact `DOC-TDS`, route, locale and `tio2-my` page-record match;
- wrong/missing scope returns no other site's page;
- exactly ten modules in approved order;
- exactly one H1;
- exact Direct Answer and five FAQ pairs;
- three selectable document types and one non-selectable explanatory card;
- 14 unique Grade options in approved order;
- no forbidden Buyer Clean/internal/evidence language.

### 2.2 Selection and URL state

- empty → base `/request-documents/`;
- TDS → `technical_product`;
- SDS → `safety`;
- COA → `quality_coa`;
- SDS + COA preserve two values in display order;
- TDS + M-2196 uses exact approved example;
- clearing type/Grade removes only that value and updates all three actions;
- duplicate/unsupported/empty types are removed;
- repeated/unsupported/malformed Grade is discarded;
- source-query tampering cannot establish source attribution;
- Back/Forward restores coherent state.

### 2.3 Eligibility and dependencies

- CONV-DOC ineligible → three primary actions absent, no hidden focusable action and no machine request relationship;
- DOC-REACH/DOC-COO/DOC-000 ineligible → only the complete affected related/action surface is absent;
- no Contact, RFQ, email, phone or another scope is substituted;
- shared RFQ remains owner-controlled and its failure blocks complete-site release;
- legal paths are exact and Terms is absent.

### 2.4 SEO and machine-readable output

- exact Title, Meta, H1 and clean Canonical for base and all query states;
- one `WebPage`, one `BreadcrumbList`, correct visible order and URLs;
- no `FAQPage`, `QAPage`, `HowTo`, Product, Offer, DigitalDocument or action/file availability nodes;
- no buyer selection, hidden source or request data in JSON-LD/social metadata;
- non-production remains non-indexable; production index state requires Gate 10.

### 2.5 Responsive and accessibility

- no overflow at 1440/1280/1024/768/640/430/390/375/320;
- ≥44px visible targets at narrow widths;
- active viewport has one accessible primary navigation and one current Documents link;
- hidden navigation has zero focusable/accessibility-tree descendants;
- keyboard selection, disclosure, visible focus and logical focus order;
- FAQ answers remain in initial server HTML;
- comparison semantics retained at every width;
- Mobile Menu focus containment, Escape and return;
- 200% zoom, reduced motion and forced colors retain meaning.

## 3. Gate 8 evidence return

The external development project must return:

- implementation revision/commit and exact changed-file inventory;
- authoritative test commands and full results;
- scoped content/API/CMS seed or record evidence;
- production-equivalent build evidence using the Malaysia site scope;
- rendered 1440/768/390 full-page screenshots;
- intermediate-width measurements;
- interaction-state screenshots and DOM/accessibility evidence;
- rendered head/Canonical/robots/JSON-LD evidence;
- positive/negative route and cross-scope tests;
- dependency/readiness ledger with responsible owners;
- clean-worktree or explicitly scoped unrelated-change statement.

Gate 8 must not rewrite D23 approval files or claim Gate 9 approval.

## 4. Gate 9 read-only QA matrix

| Area | Required evidence | Failure result |
|---|---|---|
| Identity/scope | Page/API/query/cache plus wrong/missing-scope negative tests | Page release blocker |
| Content/order | DOM and payload comparison with exact Gate 7 source | Return to development |
| Visual fidelity | 1440/768/390 comparison with approved Gate 5 assets | Return to development |
| Responsive | Nine widths, zoom and no overflow/clipping/dead space | Blocking defect |
| Interaction | Selection, summary, three-action synchronization, FAQ and menu states | Blocking defect |
| Prefill | Valid/editable/removable plus invalid/duplicate/malformed/tampered cases | Blocking defect |
| Route eligibility | Atomic omission and no fallback | Blocking defect |
| CONV-DOC | Grade/type validation, visible editable prefill, privacy and receiver boundaries | Cross-page release blocker |
| Global Chrome | Shared component/version, Logo, current state, RFQ and Footer/legal utilities | Shared release blocker |
| Accessibility | Keyboard, focus, tree, announcements, table/disclosure semantics, motion/colors | Blocking defect |
| SEO/Schema/social | Exact fields, query Canonical, allowed graph and prohibited-output scan | Blocking defect |
| Evidence safety | No public files/downloads/availability/compliance/origin/delivery or internal states | P0 release blocker |
| Route dependencies | Hub/REACH/COO/CONV-DOC/RFQ/legal response and Canonical readiness | Release blocker or approved atomic omission |

## 5. Current later-stage blockers

The following are not Gate 7 defects but remain binding:

- DOC-TDS URL remains `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`;
- DOC-REACH and DOC-COO are not yet independently ready for public release;
- CONV-DOC production credentials, approved recipient, provider connectivity, actual mailbox receipt, production WordPress and Privacy/data-flow parity remain open;
- shared legal/consent and RFQ dependencies require release evidence;
- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER` and `SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD` remain open;
- Gate 10 has not authorized production release, DNS or indexing.

## 6. Gate 10 and rollback

Gate 10 alone controls production deployment/release, production Canonical/robots/indexing, final route dependency readiness and any receiver credential activation.

Rollback must stay within `site_scope=tio2-my`, restore the last approved implementation and never fall back to another scope, stale content, hidden route or page-local shared component copy.

## 7. Boundary

This is a development-delivery acceptance contract, not implementation authorization. No D16 action may start until the user separately authorizes Gate 8.
