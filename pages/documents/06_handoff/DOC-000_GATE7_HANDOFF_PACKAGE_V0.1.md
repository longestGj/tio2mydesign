# DOC-000 Gate 7 Development Handoff Package V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` — Documents & Compliance Hub |
| URL | `/documents/` |
| Page type | Navigation hub |
| Language | English |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Mapping | `PLANNED_ARCHITECTURE` |
| Site scope | `tio2-my` |
| Gate 6 authority | `DOC-000_CURRENT_GATE6_BASELINE_MANIFEST_V0.3.md` |
| Gate 7 authorization | User authorized 2026-09-02 |
| Package ID | `DOC-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Page lifecycle | `DESIGN_IN_REVIEW` |
| Gate 8 | `NOT_AUTHORIZED` |
| Date | 2026-09-02 |

This package converts the approved Gate 6 page contract into a development-ready specification. It contains no implementation, code, test execution, deployment or production change.

## 1. Authority and consumption order

Consume these authorities in order:

1. `pages/documents/05_review/DOC-000_CURRENT_GATE6_BASELINE_MANIFEST_V0.3.md`, SHA-256 `A8CC6C23449BADFEE3CECCDB4DB43A69BD716C85A00253E56671FD1C5C9C030D` — current approved Gate 6 root and status authority.
2. `docs/page-briefs/DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.6.md`, SHA-256 `561438171421419ADFA50A20EBCAF26EBF4691EC85AC32A824CB2B2E81B4693F` — current page identity, responsibility and evidence contract.
3. `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.9.md`, SHA-256 `4F5FA658C3310A5D342FEE4FDE11F857CFB13A79F7EFC2A7726F77BF8C44BE03` — exact Buyer Clean copy, module order and interaction contract.
4. Gate 7 field, route, SEO, responsive, isolation and acceptance contracts in this package.
5. Shared owner specifications for Global Chrome, production Logo and legal utilities.

The pre-review status labels embedded in Brief V0.6 and Content V0.9 are superseded only for Gate 6/Gate 7 governance by the Gate 6 closure and current Manifest. Their content and hashes remain unchanged. Do not reconstruct the page from Brief V0.5, Content V0.8, separate Hero override text, SEO V0.6 or Documents Playbook V0.3.

## 2. Page job and prohibited behavior

DOC-000 helps international B2B buyers understand four documentation purposes, optionally select one Product Grade, and continue to the controlled Request Documents workflow.

It is not:

- a public file library;
- a file inventory or result page;
- proof that a document exists, is current, approved or available;
- proof of universal Grade, market, regulatory or language coverage;
- the Request Documents form;
- a child Document information page.

The public page must contain no View, Download, file count, disabled file action, fifth category, internal gate label, route-readiness warning or Contact fallback.

## 3. Required module assembly

1. Shared Header with `current_navigation_key=Documents`.
2. Hero with breadcrumb, direct request link and evidence-neutral media.
3. Product Grade Selector.
4. `How It Works`, exactly three steps.
5. `Supporting Your Review Process`, exactly three scenario cards.
6. `Documentation You Can Request`, exactly four informational cards.
7. `Why Documents Are Provided on Request` full-width band.
8. `Buyer Questions`, exactly six accessible disclosure items.
9. Closing CTA with selected/unselected behavior.
10. Shared Footer.

Exact fields and copy are in `DOC-000_GATE7_CMS_API_COMPONENT_MAPPING_V0.1.md`.

## 4. Approved visual assets

| Surface | Asset | Dimensions | SHA-256 |
|---|---|---:|---|
| Desktop | `pages/documents/04_planning/visual-designs/gate5_v0.7.1/assets/DOC-000_G5_DESKTOP_1440_FULL_BUYER_CLEAN_V0.7.1.png` | 1440×3784 | `6DD95749FE87FCCAEBE16AC8AFD8A3C21F1BAD1227A3BB7D5660234AE57A0A12` |
| Tablet | `pages/documents/04_planning/visual-designs/gate5_v0.7.1/assets/DOC-000_G5_TABLET_768_FULL_BUYER_CLEAN_V0.7.1.png` | 768×5324 | `85A1A5810AFDE686ECD0D2160A40A45AB13F1125941A9FADADE3CBD0FCF0DF96` |
| Mobile | `pages/documents/04_planning/visual-designs/gate5_v0.7/assets/DOC-000_G5_MOBILE_390_LOGICAL_2X_FULL_BUYER_CLEAN_V0.7.png` | 780×11708, represents 390 logical @2x | `7631E2B994AF50C149E3310EB6018E3BC9037D082C411911135E5517D0A76282` |
| Selector / FAQ states | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_SELECTOR_FAQ_INTERACTION_STATES_V0.6.png` | 1440×1260 | `4E8EB8F3EA0A1996C028C0E5502E2FBA74DEE55EC3C079D72A8B0D6E58B6116D` |
| Mobile Menu | `pages/documents/04_planning/visual-designs/gate5_v0.6/assets/DOC-000_G5_MOBILE_MENU_OPEN_390_LOGICAL_2X_V0.6.png` | 780×1360 | `C4A7B133A0873308439F99174CC6D9595DEF489FB77C3771969C316E437EBDE0` |
| Shared Chrome assembly proof | `pages/documents/04_planning/visual-directions/gate4_v0.5/assets/DOC-000_G4_GLOBAL_CHROME_ASSEMBLY_PROOF_V0.5.png` | 1440×1680 | `CE69A907B22BEDC1FCA80C737171EEF72A4265B8D942A250CB2AE7303C815AC9` |

The PNGs are visual acceptance evidence, not sources for extracting editable text or inventing asset relationships.

## 5. Deliverable map

| Contract | Purpose |
|---|---|
| CMS/API/Component Mapping | Exact content fields, cardinality, component mapping and missing-value behavior |
| Route/Prefill Contract | Hero, Selector, Closing and receiver query behavior |
| SEO/GEO/Schema/Social Contract | Metadata, initial DOM, structured data and social parity |
| Responsive/A11y/Interaction Acceptance | 1440/768/390, keyboard, focus, disclosure, zoom and overflow checks |
| Site-Scope/Shared-Ownership Contract | `tio2-my` isolation and Global Chrome ownership |
| Gate 8/9 Acceptance and Blockers | Implementation evidence, read-only QA and release blockers |
| Gate 7 Manifest | Exact package hashes and current package root |

## 6. Shared ownership

Global Chrome owner supplies Header, Mobile Header, Desktop/Mobile navigation, Mobile Menu, Production SVG Logo, persistent Request a Quote and Footer/legal utility controls. DOC-000 passes only `current_navigation_key=Documents`. It does not copy or own navigation arrays, Footer arrays, Logo media, RFQ state or legal-control data.

## 7. Legal current authority

The effective legal utilities are:

- Privacy Policy → `/privacy-policy/`;
- Dasar Privasi (BM) → `/ms/privacy-policy/`;
- Cookie Policy → `/cookie-policy/`;
- Cookie Settings → shared non-page consent control.

There is no approved `/terms-of-use/` route, Footer link, sitemap item, Canonical, hreflang or QA dependency.

## 8. Gate boundary

This package is `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. It does not authorize Gate 8, coding, tests, development, CMS changes, branch operations, deployment, publication, DNS or indexing. `D:\16Wordpress_nextjs` is outside this task and must not be accessed.
