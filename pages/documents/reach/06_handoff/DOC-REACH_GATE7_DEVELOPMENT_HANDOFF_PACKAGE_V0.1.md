# DOC-REACH Gate 7 Development Handoff Package V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-REACH` — Titanium Dioxide REACH |
| URL | `/documents/reach/` |
| Page type | Document-compliance decision page |
| Language / priority | English / P1 |
| Primary keyword | `titanium dioxide reach registration` |
| Mapping / evidence | `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` |
| Site scope | `tio2-my` |
| Gate 6 authority | `DOC-REACH_CURRENT_GATE6_BASELINE_MANIFEST_V0.12.md` |
| Gate 7 authorization | User decision `保留当前通用答案；授权 Gate 7。` on 2026-09-05 |
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Submission state | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 8–10 | `NOT_AUTHORIZED` |

This package converts the approved Gate 1–6 page into a development-ready specification. It contains no implementation, CMS write, code change, test implementation, deployment, publication or production action.

## 1. Authority and consumption order

Consume these inputs in order:

1. `pages/documents/reach/05_review/DOC-REACH_CURRENT_GATE6_BASELINE_MANIFEST_V0.12.md`, SHA-256 `9CDED213A4B259ED9E52824811779837C737640CA755AA3362399C1F7197557A` — current review root;
2. `pages/documents/reach/05_review/DOC-REACH_GATE6_USER_DECISION_AND_GATE7_AUTHORIZATION_V0.1.md` — current-answer decision and Gate 7 authority;
3. `pages/documents/reach/04_planning/DOC-REACH_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`, SHA-256 `CD18BA997EFE53BB5589F76D36453E62DFF6BE61A255D3224AB1D264624E8DCE` — exact Buyer Clean and internal search/request controls;
4. `pages/documents/reach/04_planning/DOC-REACH_CURRENT_GATE5_APPROVED_MANIFEST_V0.11.md`, SHA-256 `7F39F236BBCBB9FC1073ABC35F88DE6040CD60FF624B5A0547A0BB1BAFC29E7A` — approved visual and interaction authority;
5. `pages/conversion/06_handoff/CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md`, SHA-256 `12F3BF9169DEF3FA6CCF79496A77D2C0D4579D03B5DEEC3FDB8874E85835BEAA` — receiver field, validation and option contract;
6. `pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md`, SHA-256 `ACC1977233A6089F954555E403E493516B2240C1A4972695019C9D1224522A59` — current receiver QA/release state;
7. `pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.10.md`, SHA-256 `019881F75517F87B75283A4A14FA7BEA3163B740DB6196B3B5F3778B84164326` — current Documents Hub content relationship;
8. `docs/architecture/EVIDENCE_GAP_USER_DECISION_REGISTER_V1.0.md` — current EG-006 decision;
9. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` and Production SVG Logo authority — shared Chrome ownership.

The source payload is the implementation source for DOC-REACH. The approved Buyer Clean file remains the authority for meaning and approval history.

## 2. Page job

DOC-REACH must help a buyer:

1. understand what a general EU REACH document review should confirm;
2. distinguish public substance information from legal-entity and supply-arrangement evidence;
3. identify manufacturer, importer and Only Representative roles without inventing a named relationship;
4. keep EU/EEA, Great Britain and Northern Ireland scopes separate;
5. prepare substance, entity, role, destination/use, scope and source/date context;
6. continue to a controlled Request Documents workflow.

DOC-REACH does not own company/Grade registration claims, a registration number, tonnage band, legal advice, UK REACH conclusions, public file inventory, downloads, request approval or document availability.

## 3. Required render order

1. Hero;
2. General Direct Answer;
3. Substance Information vs Supplier Coverage;
4. Legal Actor and Supply-Chain Role;
5. EU/EEA, Great Britain and Northern Ireland Scope;
6. Buyer Verification Checklist;
7. Official Sources;
8. Request Process;
9. Buyer Questions;
10. Related Procurement Paths;
11. Final CTA.

All eleven modules use exact content from `DOC-REACH_GATE7_SOURCE_PAYLOAD_V0.1.json`. No value may come from another `site_scope`, historical copy or an inferred registration relationship.

## 4. Package deliverables

| Deliverable | Responsibility |
|---|---|
| Source Payload | Exact page values, module order, sources, routes and claim controls |
| Content / Component Mapping | Rendering fields, semantics, ownership and empty/conditional behavior |
| Route / Prefill / State Contract | `other` mapping, editable semantic context, hidden source and failure behavior |
| SEO / GEO / Schema / Social Contract | Exact metadata, entity relationships, machine allowlist/denylist and parity |
| Responsive / Accessibility / Interaction Acceptance | Approved breakpoints, keyboard/focus, disclosures, source panel and overflow behavior |
| Site-Scope / Shared-Dependency Contract | `tio2-my`, caches, Global Chrome, Legal, Hub, Market and CONV-DOC owners |
| Gate 8 / Gate 9 Acceptance | Future implementation packages, returned evidence and release controls |
| Validation / Review / Manifest | Package consistency, hashes, closure and sole current pointer |

## 5. Frozen answer and evidence decision

The current general answer is required exactly as approved. The stronger EG-006 company/entity/arrangement proposition is excluded from this baseline under the user's decision `保留当前通用答案`.

The public ECHA Titanium dioxide entry may be used only as substance-level context after source revalidation. It may not create a statement that IKHLAS, a Grade, an importer, an Only Representative or a supply arrangement is covered.

## 6. Shared ownership

- Global Chrome owns Header, Desktop/Mobile navigation, Mobile Menu, Production Logo, persistent RFQ and Footer/legal utilities.
- DOC-REACH supplies only `current_navigation_key=Documents` and its page body.
- CONV-DOC owns the eight-field form, Product Grade and document-type validation, buyer-editable additional requirements, privacy notice, submission, receiver, errors and receipt-only success.
- DOC-000 owns Documents Hub navigation.
- MARKET-EU-001 owns wider EU procurement context.
- Legal/Privacy and Consent owners supply Privacy EN/BM, Cookie Policy and Cookie Settings behavior.

Page-local forks are prohibited.

## 7. Frozen visual authority

The external implementation reproduces the approved Gate 5 assets: Desktop 1440, Tablet 768, Mobile 390 logical @2x, Mobile Menu open, key-state board, real request-route-unavailable page and real FAQ-open/focus state.

Framework-native mechanics are allowed, but approved copy, module order, information hierarchy, `Regulatory Evidence Ledger` character and state meaning may not change without change control.

## 8. Gate boundary

This package is a Gate 7 review input. Gate 8 requires a separate explicit user authorization before D16 access, implementation, CMS changes, code, branch, tests, deployment or production activity. Gate 9 is future read-only QA; Gate 10 alone controls release and indexing.

