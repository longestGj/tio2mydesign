# DOC-000 Gate 6 Project-Control Review Package V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` — Documents & Compliance Hub |
| URL | `/documents/` |
| Page type | Navigation hub |
| Gate | Gate 6 — project-control review |
| Review ID | `DOC-000-G6-PCR-02` |
| Parent return | `DOC-000-G6-PCR-01 = CONDITIONAL RETURN / NOT_APPROVED` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Date | 2026-09-02 |
| Gate 5 | `DOC-000-G5-FULL-VISUAL-01 = APPROVED / CLOSED` |
| Gate 7 | `NOT_AUTHORIZED` |

This targeted revision resolves P0-01, P1-01 and P1-02 from project control. It changes no Buyer Clean copy, module, interaction or Gate 5 PNG.

## 1. Sole current page-owned inputs

Gate 7 must consume these two normalized page-owned inputs only, in this order:

1. `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.6.md` — current normalized page identity, responsibility, CTA, module, gate, legal and evidence contract.
2. `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.9.md` — current complete Buyer Clean copy, module order and interaction contract.

The following remain preserved for history but are not current Gate 7 inputs: Brief V0.5, Content Architecture V0.8, the separate Hero override reconstruction path, SEO/GEO/Schema Contract V0.6 and Documents Playbook V0.3. Gate 7 is not asked to interpret precedence or merge conflicting historical files.

Shared and cross-page dependencies remain governed by their owners and are referenced as dependencies, not as page-owned copy inputs.

## 2. P0-01 closure — normalized authority

| Conflict returned by project control | Normalized current result |
|---|---|
| V0.5 said the body conversion required Grade selection and recorded Gate 3–5 as not started | Brief V0.6 records both approved request paths and Gate 5 `APPROVED / CLOSED` |
| V0.8 Hero CTA scrolled/focused the selector | Content V0.9 directly contains `Start a Document Request` as a native `/request-documents/` link with no query, scroll or focus transfer |
| Previous package relied on precedence | Current package has no current page-owned precedence merge; the two normalized files are internally aligned |

### 2.1 Current request paths

- Direct path: `Start a Document Request` → `/request-documents/`, with no query and no default Grade.
- Grade-first path: select one of 14 allowlisted Grades → `Continue to Request Documents` → `/request-documents/?product={GRADE}`; receiver prefill remains editable/removable.
- Closing CTA: without Grade, focuses the upper select; with Grade, uses the same Grade-only handoff.

### 2.2 Current module contract

`Hero → Product Grade Selector → How It Works → three Review Scenarios → four Documentation Categories → Why on Request → six Buyer Questions → Closing CTA → Shared Footer`.

No Finder, result list, public inventory, View, Download, file count, fifth category or disabled fake action is part of the current contract.

## 3. Page identity, keyword and cannibalization review

| Check | Current contract | Result |
|---|---|---|
| Page ID | `DOC-000` | PASS |
| URL | `/documents/` | PASS |
| Type | Navigation hub | PASS |
| Primary keyword | `NO_PRIMARY_KEYWORD` | PASS |
| Mapping | `PLANNED_ARCHITECTURE` | PASS |
| Current first-level nav | Documents, supplied by shared owner | PASS |

DOC-REACH owns REACH informational intent; DOC-TDS owns TDS/SDS/COA informational intent; DOC-COO owns COO/origin-document intent; Grade pages own exact model terms; About owns verified company/manufacturing/origin/traceability trust facts; Market pages own country context; CONV-DOC owns request conversion.

## 4. Visible content and interaction review

- Hero copy, H1, direct CTA and evidence-neutral media contract are exact in Content V0.9.
- Selector contains the approved sequence: `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.
- Initial Continue is visible, focusable and operable; no Grade is defaulted.
- Empty activation renders `Select a product grade to continue.`, stays on the Hub and focuses the select.
- Four categories and three scenarios remain informational.
- Six FAQ pairs are present in the initial HTML/DOM, default collapsed and exposed through accessible disclosure controls.
- Long content, focus, hover-independent meaning, 44px targets and no horizontal overflow remain required at 1440, 768 and 390.

## 5. Hub / CONV-DOC separation

DOC-000 owns qualification framing, direct entry, optional Grade selection, Grade-only handoff and buyer education. CONV-DOC owns the request field set, five request types, editable Grade, validation, privacy acknowledgement, submission and receipt states.

DOC-000 never passes scenario, category, document type, market, destination, language, availability, applicability, approval or delivery state. Neither page may claim a verified file, direct download, universal coverage, approval or SLA.

## 6. P1-01 closure — legal/privacy current authority

Current authority chain:

1. `docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md` — user-approved active architecture override.
2. `docs/architecture/PAGE_REGISTRY_V0.2.md` — 57-page registry with three legal/privacy pages and no Terms page.
3. `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` — approved Footer legal utility row.

The effective legal/utility set is:

- Privacy Policy → `/privacy-policy/`;
- Dasar Privasi (BM) → `/ms/privacy-policy/`;
- Cookie Policy → `/cookie-policy/`;
- Cookie Settings → shared non-page consent control.

There is no approved `Terms of Use` page, Footer link or `/terms-of-use/` route. Any Terms text in an earlier DOC-000 file is superseded by the later user decision, remains historical only and is prohibited from Gate 7 consumption, route inventory, sitemap, Canonical, hreflang or release dependencies.

## 7. P1-02 closure — SEO, GEO, Schema and social metadata

The current machine-parity contract is detailed in `DOC-000_GATE6_SEO_GEO_SCHEMA_REVIEW_V0.2.md`.

- SEO title: `Documents for Product Qualification | TiO2 Malaysia`.
- Meta description: `Request technical, safety, quality, COA, origin and supplier-qualification documentation for a selected titanium dioxide grade.`
- Canonical candidate: `https://tio2malaysia.com/documents/`, only after production route verification.
- Robots candidate: `index,follow`, only after production-equivalent parity checks.
- Eligible schema: `WebPage`, visible `BreadcrumbList`, verified `WebSite` relationship and conditional exact-parity `FAQPage`.
- Prohibited schema: inventory/file entities, counts, Download/View actions, Product-file or compliance relationships and unverified `potentialAction`.

Social fields are derived from the same approved SEO sources:

| Field | Rule |
|---|---|
| `og:title` | exact SEO title source |
| `og:description` | exact Meta description source |
| `og:url` | exact verified production canonical |
| `og:type` | `website` |
| `twitter:title` | exact SEO title source |
| `twitter:description` | exact Meta description source |

No fact-bearing social image is approved. If a shared default social image is used, its approved asset key must come from the shared Brand/SEO owner. Until that key is ready, no cross-scope or guessed image fallback is allowed; Gate 8/9 must verify either the approved key or intentional image-tag omission.

## 8. Future Gate 7 readiness and release dependencies

`DOC-000_GATE6_GATE7_READINESS_CONTRACT_V0.2.md` defines future fields, routes, fail-closed behavior, `site_scope=tio2-my` isolation, shared ownership and Gate 8/9 acceptance. It is review evidence only.

Open later dependencies include Request Documents receiver/prefill, Products and RFQ routes, English operational handling, production canonical/indexing, Privacy EN/BM, Cookie Policy, Cookie Settings and any shared approved social image key. These are not Buyer Clean internal-status copy.

## 9. Requested disposition

Requested result: `DOC-000-G6-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`, with Gate 7 still `NOT_AUTHORIZED` until separate user authorization.

Current status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. No D16 access, implementation, testing, deployment, publication, DNS or indexing occurred.
