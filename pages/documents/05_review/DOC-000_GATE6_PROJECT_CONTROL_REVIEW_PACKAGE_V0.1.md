# DOC-000 Gate 6 Project-Control Review Package V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` — Documents & Compliance Hub |
| URL | `/documents/` |
| Page type | Navigation hub |
| Gate | Gate 6 — project-control review |
| Review ID | `DOC-000-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Date | 2026-09-02 |
| Gate 5 | `DOC-000-G5-FULL-VISUAL-01 = APPROVED / CLOSED` |
| Gate 6 authority | `USER_AUTHORIZED / IN_PROGRESS` |
| Gate 7 | `NOT_AUTHORIZED` |

This package consolidates the approved Gate 1–5 decisions for independent Gate 6 review. It does not alter any approved PNG and is not a Gate 7 handoff.

## 1. Current approved Gate 5 baseline

| Role | Authority |
|---|---|
| Package root | `DOC-000_CURRENT_GATE5_BASELINE_MANIFEST_V0.3.md`, SHA-256 `D0C8E49F09BC37ED7E13E88B9D5506E724CC7ADA5F53AB5396E795B528CCDE9D` |
| Desktop | V0.7.1, 1440×3784 |
| Tablet | V0.7.1, 768×5324 |
| Mobile | V0.7, 390 logical @2x |
| Selector / FAQ states | V0.6 |
| Mobile Menu | V0.6 |
| Global Chrome | inherited approved assembly proof |
| User approval closure | `DOC-000_GATE5_USER_APPROVAL_CLOSURE_V0.1.md` |

The Gate 5 Manifest is an immutable reviewed package root. Its pre-approval status text is superseded by the project-control and user-approval closure records; its files and hashes remain unchanged.

## 2. Page identity and keyword review

| Check | Current contract | Gate 6 candidate result |
|---|---|---|
| Page ID | `DOC-000` | PASS |
| URL | `/documents/` | PASS; no redirect or alternate Hub URL proposed |
| Type | Navigation hub | PASS |
| Primary keyword | `NO_PRIMARY_KEYWORD` | PASS; no commercial primary term created |
| Mapping | `PLANNED_ARCHITECTURE` | PASS; unchanged |
| Search intent | Navigation / documentation-support selection | PASS |
| Current first-level nav | Documents | PASS; shared owner only |

Cannibalization ownership remains:

- DOC-REACH owns REACH informational intent.
- DOC-TDS owns TDS/SDS/COA informational intent.
- DOC-COO owns COO/origin-document intent.
- Product pages own exact Grade search terms and technical facts.
- About owns verified company/manufacturing/origin/traceability trust facts.
- Market pages own country context.
- CONV-DOC owns controlled request capture.

DOC-000 uses category words only to help selection; it does not become a long-form document or compliance page.

## 3. Current visible content authority

The authoritative assembly is Content Architecture V0.8 except where a later explicit decision overrides it.

### 3.1 Later Hero override

`DOC-000-G4-HERO-CTA-02` overrides the V0.8 Hero CTA only:

- visible label: `Start a Document Request`;
- native accessible link to `/request-documents/`;
- no query, Grade prefill, fragment, selector scroll or focus transfer;
- works without a JavaScript-only click handler.

All other approved Hero copy remains:

- eyebrow: `DOCUMENT HUB`;
- H1: `Documents for Product & Supplier Qualification`;
- body: `Request technical, safety, quality, COA, origin and supplier-qualification documentation for the titanium dioxide grade your team is evaluating.`;
- note: `Requests are currently handled in English.`

### 3.2 Selector and Grade-only handoff

- One select control with no default and exactly 14 values: `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.
- Prompt: `Select a product grade`.
- Continue is visible, focusable and operable on initial load; it is not disabled.
- Empty activation stays on the Hub, renders `Select a product grade to continue.` and focuses the select.
- Valid activation sends only `/request-documents/?product={GRADE}` or an equivalent approved safe transfer.
- The receiver must prefill the Grade and keep it editable.
- Explore Products remains `/products/` and does not infer suitability.

### 3.3 Module contract

`Hero → Product Grade Selector → How It Works → three Review Scenarios → four Documentation Categories → Why on Request → six Buyer Questions → Closing CTA → Shared Footer`.

The Hub contains no Finder, public record results, file inventory, View, Download, file count, direct document link or fifth category. The four visible groups remain informational.

### 3.4 FAQ behavior

- Six approved question/answer pairs.
- All question buttons are present on initial render; answers default collapsed.
- One item may be expanded at a time.
- Each question is a native button or equivalent accessible disclosure with `aria-expanded` and `aria-controls`.
- Enter and Space toggle the current item; focus does not move unexpectedly.
- Answers remain in the initial HTML/DOM and are not fetched only after activation.
- FAQ Schema, if enabled, must use these exact visible answers.

## 4. Hub / Request Documents separation

| DOC-000 owns | CONV-DOC owns |
|---|---|
| Qualification framing | Contact and company fields |
| Product Grade selection | Editable Product Grade field |
| Four request-category explanations | Five request types, including neutral Other Documentation |
| Grade-only handoff | Document-type multi-select and validation |
| Buyer education and FAQ | Application context, additional requirements and privacy acknowledgement |
| Direct entry to the request route | Submission, in-progress, failure and receipt states |

DOC-000 never passes scenario, category, market, destination, language, availability, applicability, approval or delivery state. Direct Hero entry reaches CONV-DOC with no Grade selected.

Neither page may claim that a file exists, is available, approved, current, downloadable, applicable to all Grades/markets, covered by regulation or deliverable within a stated time. Successful request submission means receipt for human review only.

## 5. SEO, GEO, Schema and initial DOM review

The Gate 6 review candidate is defined in `DOC-000_GATE6_SEO_GEO_SCHEMA_REVIEW_V0.1.md`.

Key boundaries:

- self-canonical candidate: `https://tio2malaysia.com/documents/` after final route verification;
- robots candidate: `index,follow`; `NO_PRIMARY_KEYWORD` does not imply noindex;
- `WebPage`, visible `BreadcrumbList`, optional parity-checked `FAQPage`;
- no `ItemList`, `DigitalDocument`, file URL, download/view action, file count, Product-document relation, certification, registration, Offer or compliance relation;
- no `potentialAction` until the Request Documents route and editable prefill are verified for release;
- H1, visible content, breadcrumb and FAQ content must be server-rendered or otherwise present in the initial HTML/DOM used by crawlers and assistive technology;
- machine-readable relationships may not exceed visible verified relationships.

## 6. Responsive, interaction and accessibility review

| Surface | Required current evidence |
|---|---|
| Desktop | 1440 complete page; shared 84px Header; two-column Hero; visible Selector; shared Footer |
| Tablet | 768 complete page; stacked Hero; separate full-width select/message/action rows; zero overlap |
| Mobile | 390 logical @2x complete page; complete H1; single-column flow; zero text-bound overflow |
| Mobile Menu | 64px Header, `Logo | RFQ | Menu`, Documents structural current state, terminal RFQ |
| Selector states | Initial, exact validation and selected Grade |
| FAQ states | Default collapsed and one expanded |

Gate 6 acceptance must include:

- logical targets at least 44px where applicable;
- visible focus not dependent on colour;
- inactive responsive navigation excluded from the accessibility tree and keyboard order;
- one accessible current link in the active navigation surface;
- long headings/questions wrap without icon collision;
- no horizontal overflow at 390px or 200% zoom;
- no information available only on hover;
- decorative media has empty ALT/hidden semantics and no file, factory, certificate or compliance claim.

## 7. Shared Global Chrome and legal dependencies

DOC-000 consumes Global Header/Footer V0.5 and supplies only `currentNavigationKey=Documents`. It cannot modify navigation order, Logo, RFQ visibility or Footer ownership.

The complete-site legal set is a parallel shared dependency:

- `/privacy-policy/`;
- `/ms/privacy-policy/`;
- `/cookie-policy/`;
- non-page `Cookie Settings` control;
- no independent Terms page in the approved architecture.

Their current parallel production state does not block Gate 6 review of DOC-000 and must not be replaced by internal placeholders or repeated disclaimers. Gate 7 must register them as dependencies; Gate 8/9 must verify real links, content parity and Cookie Settings behavior before release.

## 8. Input normalization and findings

| ID | Finding | Gate 6 treatment | Status |
|---|---|---|---|
| G6-N01 | Content V0.8 still describes the superseded Hero selector-scroll CTA | Later approved `DOC-000-G4-HERO-CTA-02` controls Hero behavior | RESOLVED BY PRECEDENCE |
| G6-N02 | SEO/GEO/Schema V0.6 cites Content V0.7 and retains a pre-confirmation status | Gate 6 SEO review V0.1 restates the current V0.8 + Hero-override parity contract | PENDING PROJECT-CONTROL REVIEW |
| G6-N03 | Documents Playbook V0.3 is a not-approved historical Finder/Results proposal conflicting with the approved four-category Hub | Exclude V0.3 from Gate 7 consumption; use approved page-specific baseline and current Gate 6 contract | RESOLVED FOR PACKAGE / PLAYBOOK MAINTENANCE LATER |
| G6-N04 | CONV-DOC route/receiver implementation is not verified | Design remains valid under complete-site principle; route/prefill is a Gate 8/9 release dependency | OPEN RELEASE DEPENDENCY |
| G6-N05 | Shared legal routes are parallel and not yet production-verified | Register for Gate 7; verify at Gate 8/9; do not block Gate 6 | OPEN SHARED RELEASE DEPENDENCY |
| G6-N06 | English request-operation scope is visible but operational readiness is not verified here | Preserve approved copy; verify receiver/process before release | OPEN RELEASE DEPENDENCY |

No finding requires a Gate 5 visual change.

## 9. Gate 7 preparation boundary

`DOC-000_GATE6_GATE7_READINESS_CONTRACT_V0.1.md` defines the future content model, route contract, fail-closed behavior, `site_scope=tio2-my` isolation and Gate 8/9 checks. It is preparation evidence only and is not an authorized handoff.

## 10. Requested Gate 6 disposition

Project control should independently decide whether:

1. the approved Gate 1–5 baseline is internally consistent after the recorded precedence rules;
2. the Gate 6 SEO/GEO/Schema normalization is acceptable;
3. the Gate 7 readiness contract is sufficiently complete;
4. the open route, privacy, legal and operational items are correctly classified as later release dependencies rather than Gate 6 design blockers.

Requested status after independent pass: `DOC-000-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` with Gate 7 still `NOT_AUTHORIZED` until a separate user instruction.

Current status remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

