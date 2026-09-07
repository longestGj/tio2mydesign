# DOC-000 Documents & Compliance Hub Normalized Brief V0.6

## 0. Control

| Field | Value |
|---|---|
| Page ID | `DOC-000` |
| Page name | Documents & Compliance Hub |
| URL | `/documents/` |
| Page type | Navigation hub |
| Language | English |
| Priority | P1 |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Mapping / verification | `PLANNED_ARCHITECTURE` / `NO_DIRECT_KEYWORD_TARGET` |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Gate 5 | `DOC-000-G5-FULL-VISUAL-01 = APPROVED / CLOSED` |
| Gate 6 | `DOC-000-G6-PCR-02 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 7 | `NOT_AUTHORIZED` |
| Date | 2026-09-02 |
| Status | `CURRENT_NORMALIZED_GATE6_INPUT / NOT_GATE6_APPROVED` |
| Normalization source | Gate 5 approved baseline plus `DOC-000-G4-HERO-CTA-02` and project-control return `DOC-000-G6-PCR-01` |

This is the sole current page Brief for Gate 6 PCR-02 review and any later Gate 7 preparation. V0.5 remains an approved historical Gate 1 intent baseline, but it is not a current complete delivery contract and must not be used to reconstruct current CTA behavior or Gate status.

## 1. Page Intent Card

| Required field | Current normalized intent |
|---|---|
| Audience | International B2B procurement, sourcing, technical, R&D, QA/QC, supplier-qualification and origin-review stakeholders evaluating a titanium dioxide product or supplier |
| Buyer problem | Understand which documentation purpose fits the review, optionally carry one Product Grade into a controlled request, and continue without being led to expect a public file library |
| Page job | Explain three review scenarios and four documentation categories, provide a 14-Grade selector, and route the buyer to `/request-documents/` through either a direct Hero entry or a Grade-first handoff |
| Core message | TiO2 Malaysia provides a structured route to request technical/product, safety, quality/COA, and origin/supplier-qualification documentation for review; applicability and availability are confirmed through the request process |
| Must include | Breadcrumb; `DOCUMENT HUB`; approved H1 and Hero copy; direct Hero CTA; 14-Grade Selector and visible Continue; lightweight How It Works; three scenarios; exactly four categories; Why on Request band; six FAQ; Closing CTA; inherited shared Chrome |
| Must exclude | Finder, public file inventory, result list, View/Download/PDF actions, file count, fifth category, direct child-page cards, market/language selector, availability/approval/SLA claim, universal Grade or market coverage, internal gate language in Buyer Clean |
| Ownership boundary | DOC-000 helps select context. `CONV-DOC` owns request fields, validation, privacy acknowledgement, submission and receipt. Document child pages retain their registered informational identities and are not started by this Brief |

## 2. Current CTA and route contract

### 2.1 Path A — direct Hero request

| Property | Current approved value |
|---|---|
| Label | `Start a Document Request` |
| Semantic role | Native accessible link |
| Destination | `/request-documents/` |
| Query / fragment | None |
| Grade transfer | None |
| Selector scroll or focus | None |

The receiving request form opens without a preselected Grade. No default Grade may be inferred.

### 2.2 Path B — Grade-first request

The buyer selects one allowlisted Grade and activates `Continue to Request Documents`:

`/request-documents/?product={GRADE}`

The receiver may prefill that Grade, but the value remains editable and removable. DOC-000 passes Grade only; it never passes scenario, category, document type, market, destination, language, availability, applicability, approval or delivery state.

### 2.3 Closing CTA

- Without a selected Grade, `Select a Product Grade` focuses the upper Product Grade field and does not navigate.
- With a selected Grade, `Continue to Request Documents` uses the same Grade-only handoff as the Selector.
- The action slot is never empty or represented as disabled fake functionality.

## 3. Module order and visible information architecture

1. Shared Header with `Documents` current state.
2. Hero with `Home / Documents` breadcrumb, approved copy, direct CTA and evidence-neutral media.
3. Product Grade Selector.
4. Lightweight `How It Works` sequence.
5. `Supporting Your Review Process` with three scenarios.
6. `Documentation You Can Request` with exactly four informational categories.
7. Full-width `Why Documents Are Provided on Request` band.
8. `Buyer Questions` with six disclosure items.
9. Compact Closing CTA.
10. Shared Footer.

Exact Buyer Clean copy and interaction details are controlled by `DOC-000_CONTENT_ARCHITECTURE_V0.9.md`.

## 4. Review scenarios and documentation categories

### 4.1 Three review scenarios

1. `Product Evaluation`.
2. `Quality & Supplier Qualification`.
3. `Origin & Supplier Qualification Review`.

These cards explain review purposes only and contain no CTA, count, availability or status badge.

### 4.2 Four documentation categories

1. `Technical Data & Product Documentation`.
2. `Safety Documentation`.
3. `Quality & COA Documentation`.
4. `Origin & Supplier Qualification Documentation`.

The four cards are informational. They do not prove file inventory, current revision, direct access, Grade applicability, market coverage, approval or delivery. `Other Documentation` is not a fifth Hub category. REACH remains a separate registered informational intent and is not represented as a fifth card.

## 5. Product Grade selector contract

Ordered allowlist, once each and with no default:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

Required behavior:

- prompt `Select a product grade`;
- visible, focusable and operable Continue on initial render; not disabled or `aria-disabled`;
- empty activation stays on the page, renders `Select a product grade to continue.`, associates the error with the field and focuses the select;
- valid activation sends only the allowlisted Grade;
- `Explore Products` links to `/products/` and does not imply suitability;
- unsupported, empty, repeated or malformed query values fail closed at the receiver to an unselected editable field.

## 6. FAQ contract

Exactly six question/answer pairs are defined in Content Architecture V0.9. Questions are visible on initial render; answers default collapsed, remain in the initial HTML/DOM, and one item may be expanded at a time. Each question uses an accessible disclosure button with stable relationships. FAQ Schema is conditional on exact visible/machine parity.

## 7. Page relationship and responsibility boundary

| DOC-000 owns | CONV-DOC owns |
|---|---|
| Qualification framing and buyer education | Request-form field set and document-type choices |
| Direct no-Grade entry | Unselected editable Grade state |
| Optional Grade selection and Grade-only handoff | Valid Grade prefill that remains editable/removable |
| Three scenarios and four category explanations | Contact/company/application/additional-requirements fields |
| Selector/FAQ/Closing interactions | Validation, privacy acknowledgement, submission, in-progress, failure and receipt states |

Neither page may treat a successful request as document approval, availability, regulatory coverage or delivery confirmation.

## 8. Keyword, SEO, GEO and Schema boundary

| Field | Current contract |
|---|---|
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Secondary vocabulary | TDS, SDS, COA, COO/origin, traceability and REACH/compliance only where it helps visible buyer selection |
| Search intent | Navigation / documentation-support selection |
| Excluded intent | Child document information terms, public download/PDF terms, country supplier terms, exact Grade primary terms and form-submission transaction intent |
| Cannibalization | DOC-REACH owns REACH intent; DOC-TDS owns TDS/SDS/COA intent; DOC-COO owns COO/origin-document intent; Grade pages own exact model terms; CONV-DOC owns conversion |

Eligible structured relationships are limited to visible verified page identity, breadcrumb and conditional FAQ parity. No file entity, inventory, count, download/view action, Product-file relation, certification, compliance coverage or `potentialAction` may be inferred from this Hub.

## 9. Shared Chrome and legal authority

- Global Chrome owns Header, Mobile Header, navigation surfaces, Mobile Menu, Production SVG Logo, persistent RFQ and Footer. DOC-000 supplies only `current_navigation_key=Documents`.
- Current legal architecture is controlled by:
  - `docs/architecture/LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`;
  - `docs/architecture/PAGE_REGISTRY_V0.2.md`;
  - `docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`.
- Footer legal controls are Privacy Policy `/privacy-policy/`, Dasar Privasi (BM) `/ms/privacy-policy/`, Cookie Policy `/cookie-policy/`, and non-page `Cookie Settings`.
- Earlier DOC-000 references to `Terms of Use` or `/terms-of-use/` are superseded by the later user-approved no-Terms decision. They are historical only and must not be consumed by Gate 7.
- Parallel legal completion is a release dependency, not permission to display internal placeholders or invent a Terms route.

## 10. Responsive, accessibility and evidence boundaries

- Required evidence surfaces remain 1440 Desktop, 768 Tablet, 390 Mobile and Mobile Menu Open.
- Desktop Hero remains two-column; responsive layouts may stack without changing content order or CTA meaning.
- Logical interactive targets are at least 44px where applicable; focus is visible and not color-only.
- Long H1, category names, FAQ questions and selected messages wrap without collision or horizontal overflow.
- Inactive navigation surfaces are excluded from the accessibility tree and keyboard order.
- Hero media is decorative/evidence-neutral; absent media collapses without a fact-bearing placeholder.
- No visual or copy may imply a verified file, factory, certificate, inventory, market scope, approval or immediate supply.

## 11. Gate status ledger

| Gate | Current status | Authority |
|---|---|---|
| Gate 0 | Page identity retained | Registry and keyword master |
| Gate 1 | `APPROVED / CLOSED` | Historical intent baseline V0.5 |
| Gate 2 | `APPROVED / CLOSED` | Approved complete copy and later normalized decisions |
| Gate 3 | `APPROVED / CLOSED` | Responsive Selector-CTA baseline |
| Gate 4 | `APPROVED / CLOSED` | Hero direct CTA and visual-direction closure |
| Gate 5 | `APPROVED / CLOSED` | `DOC-000-G5-FULL-VISUAL-01`, user approval 2026-09-02 |
| Gate 6 | `DOC-000-G6-PCR-02 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` | Targeted return response |
| Gate 7 | `NOT_AUTHORIZED` | No user authorization |

## 12. Version record and stop

| Version | Disposition |
|---|---|
| V0.5 | `HISTORICAL_APPROVED_GATE1_INTENT_BASELINE / NOT_CURRENT_COMPLETE_DELIVERY_CONTRACT` |
| V0.6 | `CURRENT_NORMALIZED_GATE6_INPUT / NOT_GATE6_APPROVED` |

This Brief changes no Buyer Clean copy and no Gate 5 visual asset. It normalizes current authority for review only. It does not authorize Gate 7, development, `D:\16Wordpress_nextjs`, code, testing, deployment, publication, DNS or indexing.
