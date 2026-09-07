# DOC-COO Gate 2 Content Contract V0.1

## 1. Identity and stable content locations

| Field | Contract |
|---|---|
| Page / language | `DOC-COO` / EN |
| URL | `/documents/certificate-of-origin/` |
| Type | Document-compliance decision page |
| Primary keyword | `titanium dioxide country of origin certificate` |
| Mapping / fact state | `PROVISIONAL_URL` / `FACT_EVIDENCE_REQUIRED` |
| Content locations | Hero direct answer; evidence-type comparison; four context inputs; origin-versus-traceability explanation; request preparation; official source |
| Shared navigation | Global Chrome owner; `current_navigation_key=Documents` |

Buyer Copy owns the exact H1, paragraphs, comparison labels, checklist and source wording. This contract records behavior and machine meaning only.

## 2. Page-specific actions

| Buyer Copy location | Target | Page-specific context and boundary |
|---|---|---|
| Breadcrumb `Home` | `/` | Ordinary navigation. |
| Breadcrumb `Documents`; `View Document Hub` | `/documents/` | Returns to the Documents navigation hub without document or Grade prefill. |
| `Request Origin Documentation` | `CONV-DOC` / `/request-documents/` | Pass semantic `prefill.document_types[]=origin_supplier_qualification`; the visible selection is editable/removable. Pass `source_context.page_id=DOC-COO` only as hidden system attribution. Do not prefill destination, scheme, transaction outcome or Product Grade. Buyer Copy directs destination, scheme/requested-form and transaction-reference context to the existing `Additional Requirements` field. |
| `explore the Product Hub` | `PRODUCT-000` / `/products/` | Used when the buyer does not yet know the IKHLAS Grade; carries no origin or certificate relationship. |
| Royal Malaysian Customs Department link | Official external source | Opens the named FAQ Rules of Origin page; supports general origin-document definitions and conditions only. |

The receiver retains its approved one-Product-Grade and multi-document-type contract. A request records buyer context for review; it does not establish availability, issuance, origin qualification, customs acceptance or tariff treatment.

## 3. SEO, GEO and Schema

| Item | Contract |
|---|---|
| SEO Title | `Certificate of Origin for Titanium Dioxide | TiO2 Malaysia` |
| Meta Description | `Understand when a titanium dioxide country of origin certificate or other proof may be relevant and what details to provide with a document request.` |
| Canonical | Candidate `https://tio2malaysia.com/documents/certificate-of-origin/` |
| Indexing | Candidate only while URL remains provisional; publication/index authorization remains separate. |
| GEO direct answer | A Certificate of Origin certifies the origin of identified goods; the relevant evidence and its use depend on destination, applicable rules and transaction documents. |
| Entity relationships | Certificate/Proof of Origin → identified goods and transaction context; preferential/non-preferential/other permitted evidence → applicable rules/procedure; traceability remains a separate concept. |
| Schema | `WebPage` + visible `BreadcrumbList`; name, description, URL, source and review date must match visible Buyer Copy. |
| Exclusions | No `FAQPage`, Product, Offer, DigitalDocument, file inventory, availability, certificate issuance, customs result, tariff result or IKHLAS traceability relation. |

## 4. Fact basis and contract-changing open items

- Visible general statements use Claim Register items `DOC-COO-CL-001`–`CL-003` and the qualified transaction/rules context of `CL-004`; lead source: Royal Malaysian Customs Department `FAQ Rules of Origin`, information updated through 2025-10-10, page updated 2026-01-05, reviewed for this draft on 2026-09-07.
- The current site-wide authority permits the exact statement `Malaysia-origin titanium dioxide`, but Buyer Copy does not use it and creates no product-, Grade-, order- or shipment-level certificate relation.
- The separate statement `A Certificate of Origin is available upon request` remains unapproved for DOC-COO and is not expressed visibly or in machine-readable content.
- A destination-specific proof, current tariff treatment, customs decision or certificate-issuing path requires separate current official verification before being added.
- URL mapping, canonical implementation, indexing, publication and the live release of the receiver remain later decisions. Changes to those items require contract review.
