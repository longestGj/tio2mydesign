# DOC-REACH Gate 7 Gate 8 Implementation and Gate 9 Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Page / route | `DOC-REACH` / `/documents/reach/` |
| Gate 8 | `NOT_AUTHORIZED` |
| Gate 9 | `NOT_STARTED / FUTURE_READ_ONLY_QA` |
| Gate 10 | `NOT_AUTHORIZED` |

This file defines future acceptance. It does not authorize or perform implementation.

## 1. Gate 8 implementation work packages

| WP | Responsibility | Required implementation evidence |
|---|---|---|
| `REACH-G8-WP01` | Page record and `site_scope=tio2-my` isolation | scoped CMS/API/page fixtures plus correct/wrong/missing-scope tests |
| `REACH-G8-WP02` | Exact source payload and eleven-module render order | source-to-DOM comparison and server-rendered HTML evidence |
| `REACH-G8-WP03` | Current general answer and evidence denylist | positive exact-answer test and negative scans for EG-006/query-only/company/Grade claims |
| `REACH-G8-WP04` | Official-source ledger and freshness | four source rows, optional date behavior, HTTPS host checks and atomic stale-row removal tests |
| `REACH-G8-WP05` | CONV-DOC route, semantic alias and editable prefill | valid route proof, visible `REACH Documentation`, Grade/additional-context edits and normalization tests |
| `REACH-G8-WP06` | Receiver eligibility and fail-closed state | eligible/unavailable DOM, action/Schema atomicity, Hub retention and no-fallback tests |
| `REACH-G8-WP07` | Shared Global Chrome, Logo, Footer Legal and Consent | component-source/version evidence, current Documents state and Mobile Menu proof |
| `REACH-G8-WP08` | Responsive and visual fidelity | 1440/768/390 screenshots, all nine width measurements and approved asset comparison |
| `REACH-G8-WP09` | Accessibility and interactions | keyboard/focus, FAQ semantics, initial DOM, menu focus/Escape/return, zoom/contrast/motion results |
| `REACH-G8-WP10` | SEO, GEO, Canonical, robots, Schema and social | rendered head/JSON-LD/SSR evidence, query Canonical tests and prohibited-node scan |
| `REACH-G8-WP11` | Full regression, dependency ledger and evidence return | focused tests, project checks/build, route readiness, clean/scoped change statement and hashes |

Each work package must be independently reviewable. Implementation may combine files technically, but returned evidence must preserve the package boundaries.

## 2. Required Gate 8 return

The external development task must return:

- repository/worktree identity, branch and exact commit;
- changed-file inventory and purpose;
- authoritative test commands with full results;
- scoped content/CMS/API data evidence;
- production-equivalent Malaysia build evidence;
- server-rendered page and head/JSON-LD captures;
- 1440, 768 and 390 complete-page screenshots;
- 1280, 1024, 640, 430, 375 and 320 measurements;
- default, FAQ-open/focus, Mobile Menu, receiver-eligible and receiver-unavailable state evidence;
- valid, duplicate, unsupported, malformed, overlength, HTML-like, Back/Forward and source-tampering request-context tests;
- correct/wrong/missing-scope and cache-isolation tests;
- dependency readiness ledger for Hub, EU Market, CONV-DOC, RFQ and Legal/CMP;
- public output scans for excluded claims, internal states, document files/downloads and machine-node violations;
- clean worktree or an explicit statement separating unrelated user changes.

Gate 8 must not rewrite D23 approval files or claim Gate 9/10 approval.

## 3. Gate 9 read-only QA matrix

| Area | Required evidence | Failure result |
|---|---|---|
| Identity/scope | Page/API/query/cache plus wrong/missing-scope negatives | P0 page release blocker |
| Content/order | DOM and source-payload comparison for all eleven modules | Return to development |
| Answer/claims | exact general answer; no EG-006/query-only/company/Grade coverage output | P0 release blocker |
| Source ledger | four rows, dates, official hosts, freshness and stale-removal parity | Blocking defect |
| Visual fidelity | 1440/768/390 comparison with seven approved Gate 5 assets/states | Return to development |
| Responsive | nine widths, 200% zoom, no overflow/clipping/dead space | Blocking defect |
| Interaction | FAQ, Mobile Menu, eligible/unavailable action synchronization | Blocking defect |
| Prefill | visible/editable/removable context plus all negative cases | Blocking defect |
| CONV-DOC | Grade/type/additional requirement, privacy, receiver and success boundaries | Cross-page release blocker |
| Shared Chrome | shared version, Logo, current state, RFQ, Footer/legal/CMP | Shared release blocker |
| Accessibility | keyboard, focus, tree, announcements, semantics, motion/colors | Blocking defect |
| SEO/Schema/social | exact fields, query Canonical, allowed graph and prohibited-output scan | Blocking defect |
| Dependencies | Hub/EU Market/CONV-DOC/RFQ/legal response and Canonical readiness | Release blocker or approved atomic omission |

## 4. Deterministic acceptance cases

### 4.1 Content and claims

- exactly one visible H1 equals the payload;
- direct answer is byte-equivalent after normal whitespace normalization;
- five FAQs render in approved order and their answers exist in initial HTML;
- the EG-006 stronger proposition, `reach compliant titanium dioxide`, a registration number, named importer/OR, all-Grade coverage and public download text are absent from visible HTML, metadata, JSON-LD and serialized payloads.

### 4.2 Request path

- valid semantic link selects the `other` value while presenting `REACH Documentation` and visible editable `REACH documentation` context;
- a buyer can change/remove document type, Grade, application/use and additional context;
- clearing Additional Requirements while `other` is the sole type triggers the approved receiver error;
- public query `source_page=DOC-REACH` alone never establishes hidden attribution;
- unavailable receiver removes all body request actions, the selection panel, note and machine relation while retaining eligible Hub links.

### 4.3 Source and jurisdiction

- EU/EEA, GB and NI remain separate in visible and machine-derived summaries;
- `source_updated_date=null` produces no empty/placeholder date row;
- official source links use the approved Commission, Europa and HSE hosts;
- source review time is not presented as legal effective date;
- stale source removal updates visible copy and derived machine output atomically.

## 5. Current later-stage controls

- URL/evidence mapping remains `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED`.
- EG-006 is closed for this current baseline by retaining the generic answer; future expansion still requires new authority.
- CONV-DOC production account/key placement, WordPress application/readback, approved recipient and user-side mailbox receipt remain release controls according to its current Manifest.
- Hub, EU Market, RFQ and Legal/CMP must be production-ready or handled by approved conditional omission.
- runtime metadata, Schema, accessibility and responsive behavior require implementation evidence.
- Gate 10 has not authorized deployment, production Canonical/robots/indexing or public release.

## 6. Rollback and stop boundary

Rollback must stay inside `site_scope=tio2-my`, restore the last accepted implementation and never fall back to another site, stale content, historical claim state or page-local shared component.

No D16 action may start until the user separately authorizes Gate 8 and the approved Gate 7 package is explicitly handed off.

