# DOC-TDS Gate 7 Development Handoff Package V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-TDS` — TDS, SDS & COA |
| URL | `/documents/tds-sds-coa/` |
| Page type | Technical-document decision page |
| Language | English |
| Primary keyword | `titanium dioxide tds` |
| Mapping / evidence | `PROVISIONAL_URL / FACT_EVIDENCE_REQUIRED` |
| Site scope | `tio2-my` |
| Gate 6 authority | `DOC-TDS_CURRENT_GATE6_BASELINE_MANIFEST_V0.1.md` |
| Gate 7 authorization | User decision `授权Gate7` on 2026-09-05 |
| Package ID | `DOC-TDS-G7-HANDOFF-01` |
| Submission state | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 8–10 | `NOT_AUTHORIZED` |

This package converts the approved Gate 1–6 page into a development-ready specification. It contains no implementation, CMS write, code change, test implementation, deployment or production action.

## 1. Authority and consumption order

Consume these inputs in order:

1. `pages/documents/tds-sds-coa/05_review/DOC-TDS_CURRENT_GATE6_BASELINE_MANIFEST_V0.1.md`, SHA-256 `C3FE6280B01D9A7AF845A88EB439CEF1B19E775050BA5FBD4B1FF6C413182713` — current lifecycle and review root;
2. `pages/documents/tds-sds-coa/04_planning/DOC-TDS_GATE2_FULL_BUYER_CLEAN_COPY_V0.3.md`, SHA-256 `2F4B929FDE72831909B187E5F87E678E59A16AC94D06C6499CABD1A67EF3F376` — exact Buyer Clean and internal request/search controls;
3. `pages/documents/tds-sds-coa/04_planning/DOC-TDS_CURRENT_GATE5_APPROVED_MANIFEST_V0.2.md`, SHA-256 `B613B97109AA69AA37B64E7320E3EF6C6F94E93A9DA89D014C1C2511215CA366` — approved visual and interaction authority;
4. `pages/conversion/06_handoff/CONV-DOC_GATE7_CMS_API_COMPONENT_FIELD_INVENTORY_V0.1.md` — receiving form field and option contract;
5. `pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md` — current receiver readiness and release-blocker state;
6. `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, Production SVG Logo authority and `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` — shared ownership.

The source payload in this package is a faithful implementation source for DOC-TDS. It does not replace the approved Buyer Clean file when interpreting meaning or approval history.

## 2. Page job

DOC-TDS must help a buyer:

1. understand the difference between TDS, SDS and COA;
2. select one or more document types without creating an availability claim;
3. optionally add one primary Product Grade as editable request context;
4. understand which additional revision, jurisdiction/language, lot, batch or order details may help;
5. continue to the controlled Request Documents workflow.

DOC-TDS does not own document submission, receiver behavior, Grade technical facts, country-supplier intent, REACH conclusions, origin proof, file inventory or public downloads.

## 3. Required render order

1. Hero;
2. Direct Answer;
3. Document Choice;
4. Product Grade Context;
5. TDS/SDS/COA Comparison;
6. Request Checklist;
7. Four-Step Request Process;
8. Buyer Questions;
9. Related Document Paths;
10. Final CTA.

All ten modules use exact content from `DOC-TDS_GATE7_SOURCE_PAYLOAD_V0.1.json`. No field may be populated from another `site_scope`, a historical content version or inferred document data.

## 4. Gate 7 deliverables

| Deliverable | Responsibility |
|---|---|
| Source Payload | Exact page values, module order, Grade/document options, routes and restrictions |
| Content / Component Mapping | Rendering fields, semantics, ownership and empty/conditional behavior |
| Route / Prefill / State Contract | Document/Grade state, URL transport, hidden source and failure handling |
| SEO / GEO / Schema / Social Contract | Exact metadata, entity relationships, machine-readable allowlist and parity |
| Responsive / Accessibility / Interaction Acceptance | Approved breakpoints, keyboard/focus, disclosure and overflow behavior |
| Site-Scope / Shared-Dependency Contract | `tio2-my`, caches, Global Chrome, legal utilities and cross-page owners |
| Gate 8 / Gate 9 Acceptance | External implementation packages, evidence and later release controls |
| Validation / Review / Manifest | Package consistency, hashes and governance closure |

## 5. Shared and external ownership

- Global Chrome owns Header, Desktop/Mobile navigation, Mobile Menu, Production Logo, persistent RFQ and Footer/legal utilities.
- DOC-TDS supplies only `current_navigation_key=Documents` to Global Chrome.
- CONV-DOC owns the eight-field request form, Grade-required-before-submit validation, document-type group, free-text context, privacy notice, submission, receiver, errors and receipt-only success.
- DOC-000 owns Hub navigation.
- DOC-REACH and DOC-COO own their page content and route eligibility.
- Legal/Privacy and Consent owners supply Privacy EN/BM, Cookie Policy and Cookie Settings behavior.

Page-local forks of those systems are prohibited.

## 6. Frozen visual authority

The external implementation reproduces the approved Gate 5 V0.1 assets:

- Desktop 1440 full page;
- Tablet 768 full page;
- Mobile 390 logical full page;
- Mobile Menu open;
- three selection-state board states;
- TDS + M-2196 real selected state;
- SDS + COA / no Grade real selected state;
- FAQ open state.

Visual implementation may use framework-native mechanics, but it may not change approved copy, module order, information hierarchy, visual character or request-state meaning without change control.

## 7. Evidence and publication boundaries

- No public document inventory, filename, file preview, direct download or pseudo-download action.
- No Grade-document availability matrix or inferred Grade-document relationship.
- TDS evidence does not prove SDS or COA availability.
- Multiple TDS versions are not merged.
- No currentness, universal coverage, compliance approval, conformity, request approval, response time or delivery guarantee.
- Empty/unverified data is omitted without buyer-visible governance text.
- `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER` is not bypassed.
- `SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD` remains open.

## 8. Gate boundary

This package is a Gate 7 review input. Gate 8 requires a separate explicit user authorization before any D16 implementation, code, CMS, branch, test, deployment or production activity. Gate 9 remains future read-only QA and Gate 10 remains the sole release/indexing authorization.
