# Legal / Privacy CONV-DOC Post-Gate 9 Change Record V0.1

## 0. Control

| Field | Value |
|---|---|
| Change ID | `LEGAL-PRIVACY-CONV-DOC-PARITY-CHANGE-01` |
| Review ID | `LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-01` |
| Date | 2026-09-05 |
| Scope | `LEGAL-PRIV-EN`, `LEGAL-PRIV-MS`; Request Documents actual data flow only |
| User authority | Explicit post-Gate 9 targeted content and stage authorization in the current delegation |
| Status | `USER_APPROVED / CONTENT_REVISION_COMPLETE` |
| Gate 10 / deployment / publication | `NOT_AUTHORIZED` |

## 1. Reason for change

The V0.1 policies state that sample or document-request forms may be introduced later. That statement is no longer accurate for Request Documents: `CONV-DOC` has been implemented and its current approved runtime is Web3Forms Free browser-direct submission to a fixed provider endpoint.

The change aligns the Privacy Policy with the actual current Request Documents data categories, purposes and provider path. It does not reopen unrelated Legal/Privacy content or alter the policy layout, SEO ownership, URL, retention, rights, security, international-processing or consent model.

## 2. Current facts applied

| Fact | Current value |
|---|---|
| Workflow | `request_documents` / `CONV-DOC` |
| Provider and plan | Web3Forms Free |
| Submission path | browser-direct to fixed Web3Forms endpoint |
| Routing | Access Key binds the provider recipient; value and recipient address remain undisclosed |
| Access Key classification | browser-available routing identifier; not described as a private secret |
| Buyer fields | exactly 8 |
| Future-only workflow | Sample, while its production receiver remains inactive |
| Company retention | up to three years from last substantive interaction or inquiry closure |
| Web3Forms dashboard visibility | currently 30 days; not a deletion promise |
| Web3Forms physical retention wording | up to three years under current provider terms |

Runtime authority consumed: `pages/conversion/05_review/CONV-DOC_WEB3FORMS_FREE_PLAN_RUNTIME_DECISION_V0.1.md`. The earlier server-only receiver implementation record remains historical for that superseded runtime assumption and is not used as the current Privacy data-flow source.

## 3. Exact content changes

### 3.1 EN and BM Information We Collect

Both policies now disclose exactly:

1. Full Name / Nama Penuh;
2. Company / Syarikat;
3. Business Email / E-mel Perniagaan;
4. Country / Region / Negara / Rantau;
5. Product Grade / Gred Produk;
6. selected Document Types / Jenis Dokumen yang dipilih;
7. optional Application / Industry / Aplikasi / Industri; and
8. optional Additional Requirements / Keperluan Tambahan.

They also state that page/source context, stable request token, site/workflow identifiers and minimum routing/security data may be processed where applicable. No Request Documents upload, telephone/WhatsApp, Website or Market/Destination field is added.

### 3.2 EN and BM purposes

The policies now cover receiving, reviewing and responding to document requests; reviewing the selected Grade, Document Types, optional Application/Industry and business context; confirming intended scope; assessing whether relevant documents may be available or provided; and necessary follow-up communication.

Both language versions expressly state that submission does not confirm document existence, applicability, availability, provision or sending.

### 3.3 Web3Forms

The old quotation-only description is replaced with quotation-and-document-request coverage. The Request Documents paragraph identifies Web3Forms Free browser-direct submission to the fixed endpoint and recipient routing through an Access Key. The Access Key value and recipient email address are not published, and the key is not labelled a private secret.

### 3.4 Future-workflow sentence and date

- Document Request is removed from the future-only sentence.
- Sample remains future-only until an active production receiver and verified data flow exist.
- EN: `Last updated: 5 September 2026`.
- BM: `Kemas kini terakhir: 5 September 2026`.

## 4. Unchanged policy areas

The following remain substantively unchanged:

- controller identity, correspondence address and privacy contact;
- technical/usage information;
- international-processing and operational-provider sections other than the targeted Web3Forms clarification;
- retention, including the 30-day dashboard versus up-to-three-year physical-retention distinction;
- Cookies, Analytics and Advanced Consent Mode wording;
- rights, security, business-user/children and contact sections;
- Title, Meta, Canonical, hreflang, Schema and `NO_PRIMARY_KEYWORD`;
- BM qualified-human equivalence review as a release blocker;
- production provider/recipient/receipt, operational retention, legal-review and Gate 10 controls.

## 5. New authority files

| Role | File | SHA-256 |
|---|---|---|
| EN current full copy | `pages/legal-privacy/04_planning/LEGAL-PRIV-EN_GATE2_FULL_COPY_V0.2.md` | `E76744DB9C18FF14D17EB3854230E10BFC83E4F8E57A0F38DEDE87B67499213C` |
| BM current full copy | `pages/legal-privacy/04_planning/LEGAL-PRIV-MS_GATE2_FULL_COPY_V0.2.md` | `6AC8C904A490FCC563BD5E1FFCDB846FDB067054341426D271D995EA58DCE5C7` |
| Machine-readable source payload | `pages/legal-privacy/06_handoff/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_SOURCE_PAYLOAD_V0.1.json` | `0DBCF7269D4DA5CF8F5AF81E95FAF8FC58EEE98A2F03CCDA2517765AC6E90048` |

V0.1 files remain unchanged as historical evidence.

## 6. Implementation and release boundary

D16 may update the local/preview Legal/Privacy source and tests from the new full-copy files and source payload. This is a targeted parity correction, not a new page, redesign or production-release approval.

After implementation, D23 must perform a targeted read-only parity check. Deployment, production writes, publication, DNS, robots/sitemap changes and indexing remain outside this decision.

