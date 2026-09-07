# DOC-000 Documents & Compliance Hub Brief V0.2

## 0. Control

| Field | Value |
|---|---|
| Page ID / name | `DOC-000` — Documents & Compliance Hub |
| URL / language | `/documents/` / English page |
| Page type / priority | Navigation hub / inherited registry priority |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Keyword / mapping | `NO_PRIMARY_KEYWORD` / `PLANNED_ARCHITECTURE` |
| Fact status | Evidence-gated; English-only service fact supplied by user |
| Revision status | `GATE_0_1_REAUDITED; GATE_2_5_SUBMITTED / NOT_APPROVED` |
| Authority | User redesign instruction and explicit `授权Gate5` |
| Stop | No Gate 6/7, child page, development, test, handoff or release |

## 1. Gate 0 re-admission audit

| Check | Result | Source |
|---|---|---|
| Page exists in registry | PASS | `PAGE_REGISTRY_V0.1.md` — DOC-000 |
| URL unchanged | PASS — `/documents/` | Registry and current user instruction |
| Type unchanged | PASS — Navigation hub | Registry |
| Primary keyword unchanged | PASS — `NO_PRIMARY_KEYWORD` | Keyword master |
| Mapping unchanged | PASS — `PLANNED_ARCHITECTURE` | Keyword master |
| Header/Footer responsibility unchanged | PASS | Global Chrome V0.5 and current instruction |
| Child pages started | NO | Explicit task boundary |
| Gate authority | Gate 5 authorised; Gate 6+ not authorised | User `授权Gate5` |

Gate 0 result: `ADMITTED_FOR_V0.2_GATE_5_REVISION / NOT APPROVED`.

## 2. Gate 1 research and evidence audit

### 2.1 Buyers and tasks

Primary users: procurement/sourcing, technical/formulation, QA/QC, regulatory/compliance, import/trade and distributor/commercial project teams.

Required decisions:

- which document category fits the review;
- which product or grade it concerns;
- whether destination market matters;
- whether order or batch context may be required;
- which fields to prepare;
- how to submit a qualified document request.

### 2.2 Authority ledger

| Evidence ID | Evidence | Allowed use | Not proven |
|---|---|---|---|
| `E-USER-DOC-REDESIGN-001` | User-supplied redesign brief, 2026-09-01 | English-only service; conversion hierarchy; exact category and workflow scope | Existence, revision, applicability or release status of any file |
| `E-REGISTRY-DOC-000` | Page registry | Identity, URL and type | Route publication |
| `E-KW-DOC-000` | Keyword master | `NO_PRIMARY_KEYWORD`, `PLANNED_ARCHITECTURE` and ownership boundary | Search performance or index decision |
| `E-PRD-DOCUMENTS` | PRD V0.4 | Documents vs Request Documents responsibility | File inventory |
| `E-GLOBAL-CHROME-V05` | Current Header/Footer and Logo baseline | Fixed navigation, dimensions, current state, RFQ placement | RFQ route live readiness |
| `E-DOC-INVENTORY-AUDIT` | Current project evidence audit | Eligible public records = 0 | Non-existence of documents outside the approved inventory |

### 2.3 Research conclusion

The redesign can safely explain six category purposes and scope dependencies. It may display target-state request actions because the user expressly requires a conversion Hub, but it cannot claim that the receiving route is live or that a requested document exists, applies, is approved or can be released. This creates a release blocker, not buyer-visible fallback copy.

Gate 1 result: `SUBMITTED / PASS WITH OPEN RELEASE DEPENDENCIES`.

## 3. Page responsibility

One-sentence responsibility: help an international B2B buyer understand document categories, prepare the correct product and purchasing context, and continue to a structured Request Documents workflow without implying file availability or coverage.

Explicit exclusions:

- article-depth TDS/SDS/COA, origin or REACH content;
- file repository or generic download centre;
- embedded request form;
- quotation capture in the body;
- company manufacturing/origin proof;
- regulatory, customs, duty or tariff assurance;
- any child-page deliverable.

## 4. Search and cannibalization contract

| Intent | Owner | DOC-000 allowance |
|---|---|---|
| TDS/SDS/COA article-depth terms | `DOC-TDS` | Category name and concise purpose only |
| REACH registration/compliance terms | `DOC-REACH` | Concise scoped explanation only |
| COO/origin-document terms | `DOC-COO` | Concise purpose/context only |
| Request form and submission | `CONV-DOC` | CTA and prefill contract only |
| Company origin/traceability proof | About | No proof claim |

## 5. Required modules and conversion

Required order: Hero → category choice → scope → request steps → prepare request → primary conversion → Buyer Questions → light final request link → Footer.

Primary page conversion: `Request Documents`.

Secondary category actions: Request TDS, SDS, COA, Origin Documents, Traceability Documents and Compliance Information. Global Request a Quote remains in shared Chrome only.

## 6. Request workflow receiving contract

The destination workflow must be able to receive:

- Product / Grade;
- Document Type;
- Destination Market;
- Company;
- Contact Name;
- Business Email;
- Order / Batch Reference — optional / if relevant;
- Additional Notes.

No language selector. Category entry preselects Document Type; product-page entry may preselect Product / Grade. This Brief specifies the handoff contract only and does not start or redesign CONV-DOC.

## 7. Facts and claims

Allowed:

- documents are currently supplied in English;
- general category purposes;
- scope can depend on product/grade, destination market and order/batch context;
- COA is associated with a defined lot/batch;
- requests are reviewed for scope and availability;
- submission is not a guarantee.

Prohibited without new evidence:

- any named file, revision, certificate or download;
- all-grade/all-market coverage;
- universal Malaysia origin, REACH or traceability claim;
- availability, immediate provision or approval;
- duty-free, tariff-saving or anti-dumping claims.

## 8. Responsive and accessibility acceptance

- Desktop and 390px preserve the same semantic order.
- Mobile categories are single column; no carousel or two-column small text.
- Request Documents is full-width or near-full-width on mobile.
- Header 84px / Mobile Header 64px; all mobile actions at least 44px.
- Long category names wrap; no image is required; focus and hover do not hide meaning.
- Mobile Menu and Footer remain inherited, with Request a Quote visible.

## 9. SEO/GEO/Schema acceptance

- one H1: `Documents & Compliance Guidance`;
- Title/meta do not target a child keyword;
- direct answers cover selection, scope, English, non-universal applicability, non-guarantee and request steps;
- visible file records equal structured file records;
- current public file set is zero, so no file entity or download relation is emitted;
- canonical, robots and indexing remain `DECISION_REQUIRED`.

## 10. Open items and release blockers

| ID | Item | Current state | Gate effect |
|---|---|---|---|
| `DOC-000-R002` | Canonical, robots, index decision | Open | SEO `PASS WITH CHANGES` |
| `DOC-000-R003` | Approved public document inventory and scope | Eligible public set = 0 | Evidence-limited design; no fake records |
| `DOC-000-R005` | `/request-documents/` workflow and live route | Not verified | Conversion target approved only as design; release blocker |
| `DOC-000-R006` | Per-product/per-market compliance, origin and traceability facts | Not verified | Neutral category wording only |
| `DOC-000-R009` | Global RFQ route readiness | Not tested here | Global release blocker; Chrome remains unchanged |

## 11. Gate record

| Gate | Output | Status | Approval source |
|---|---|---|---|
| 0 | Re-admission and Brief V0.2 | Submitted | User revision authority; not approval |
| 1 | Buyer/evidence/relationship audit | Submitted | User facts plus inherited sources; not approval |
| 2 | Content and SEO/GEO/Schema contracts | Submitted | Gate 5 authority permits preparation; not approval |
| 3 | Desktop/390px wireframe and conversion flow | Submitted | Same |
| 4 | Visual direction | Submitted | Same |
| 5 | Desktop/390px full visuals and key states | Submitted | Explicit `授权Gate5`; not approval |
| 6+ | Not started | Unauthorized | Separate authority required |

## 12. Version record

| Version | Change | Status |
|---|---|---|
| V0.1 | Zero-record guidance proposal | Historical submitted candidate; not approved |
| V0.2 | Re-audited conversion-Hub target state and English-only fact | `SUBMITTED_FOR_USER_GATE_5_REVIEW / NOT_APPROVED` |
