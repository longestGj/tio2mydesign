# HOME-001 Gate 7 Acceptance and Release-Blocker Contract V0.2

## 0. Contract control

| Field | Value |
|---|---|
| Page | `HOME-001` / `/` |
| Existing package | `HOME-001-G7-HANDOFF-01` |
| Amendment ID | `HOME-001-G7-P0-REV-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Date | 2026-08-31 |
| Scope | Versioned P0 replacement clauses for Tablet evidence and Canonical acceptance |
| Unaffected clauses | Inherit `HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.1.md` unchanged |

V0.1 remains preserved. This V0.2 is the current candidate control layer: it inherits every V0.1 acceptance and release-blocker clause except where an ID is explicitly replaced below.

## 1. Replacement acceptance clauses

### 1.1 Content and responsive evidence

| ID | V0.2 requirement | Acceptance evidence | Severity |
|---|---|---|---|
| HOME-G7-CONT-03 | Desktop/Tablet order is Header → Hero → Markets → Products → Applications → Company → Documents → Resources / Buyer Answers → page-level RFQ → Footer. Mobile retains its separately approved order without page-level RFQ. | 1440/1024/768/390 screenshots plus DOM-order inspection | Blocking |
| HOME-G7-CONT-04 | Desktop and Tablet render the page-level RFQ. 390px does not render that Section. Global Chrome RFQ remains visible in Header/Footer and in Mobile Menu where applicable. | Breakpoint/state evidence and DOM visibility checks | Blocking |
| HOME-G7-RWD-01 | 1440 and 390 align with the existing current Manifest evidence. Tablet aligns with the formal 768×6844 and 1024×5220 V0.2 evidence. | Screenshot comparison, dimensions and Manifest hashes | Blocking |
| HOME-G7-RWD-02 | Tablet evidence contains all required modules; evidence may not stop at Documents or omit Resources / Buyer Answers or page-level RFQ. | Full-page 768/1024 evidence and visible-module scan | Blocking |

Formal current Tablet evidence:

- `homepage-tablet-768-evidence-v0.2.png` — 768×6844 — SHA-256 `E642EA33FD0755884529AB35E3A80062A7F44F8A9D31E209F271176CCC5EA357`.
- `homepage-tablet-1024-evidence-v0.2.png` — 1024×5220 — SHA-256 `F81110344F7946185504D7A5D37E50CA0AC1E4DF72826F67F40EC528E8E3897C`.

### 1.2 SEO Canonical acceptance

| ID | V0.2 requirement | Acceptance evidence | Severity |
|---|---|---|---|
| HOME-G7-SEO-01 | Title, Meta Description, robots, language and H1 remain exact approved values. Canonical is evaluated by the normalized-equivalence rule below, not by raw character equality. | Rendered Head/HTML inspection and URL parser output | Blocking |
| HOME-G7-SEO-02 | Exactly one self-referencing Home canonical exists. Both `https://tio2malaysia.com` and `https://tio2malaysia.com/` pass when parsing yields HTTPS, hostname `tio2malaysia.com`, pathname `/`, empty search and empty hash. | Canonical count plus parsed URL component assertions | Blocking |
| HOME-G7-SEO-03 | No second canonical may be created to represent the accepted trailing-slash alternative. No HTTP, `www`, alternate domain, non-root path, query, fragment, locale or other `site_scope` canonical passes. | DOM count, parsed URL components and negative fixtures | Blocking |

Reference acceptance algorithm, expressed without prescribing implementation code:

```text
canonical_count == 1
AND parsed.protocol == "https:"
AND parsed.hostname == "tio2malaysia.com"
AND parsed.pathname == "/"
AND parsed.search == ""
AND parsed.hash == ""
```

The preferred emitted value remains `https://tio2malaysia.com/`. This contract changes only acceptance equivalence.

## 2. Release blockers retained unchanged

All V0.1 release blockers remain open in their existing responsibility stages, including:

- `/request-a-quote/` route, form, labels, privacy, validation and result handling;
- planned/provisional href approvals and `RES-PROC` page/route status;
- production Logo/SVG and visual-asset clearance;
- factory, manufacturing location, product origin, COO, traceability and document evidence;
- M-996/M-2196 differentiation;
- Contact/legal/public company details;
- external implementation, technical/accessibility QA, deployment, DNS, indexing and release authority.

Neither the new Tablet evidence nor Canonical normalization closes an implementation or release blocker.

## 3. Evidence limitations

The V0.2 Tablet PNGs are deterministic Gate visual evidence. They do not replace external rendered-page, DOM, responsive, keyboard, accessibility, link, form or release validation. Gate 8/9/10 remain outside this P0 revision.

## 4. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Original Gate 7 acceptance and blocker contract | Historical approved baseline; retained |
| V0.2 | 2026-08-31 | Replaces Tablet evidence clauses and Canonical literal-equality clauses only | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
