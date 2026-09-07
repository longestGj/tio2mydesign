# DOC-REACH Gate 2 Content Skeleton Project-Control Submission V0.2

## 0. Decision requested

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Review ID | `DOC-REACH-G2-SKELETON-V02-PCR-01` |
| Date | 2026-09-05 |
| Review result | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Gate 2 state | `GATE2_CONTENT_SKELETON / PENDING_USER_CONFIRMATION` |
| Complete Buyer Clean Copy | `NOT_STARTED` |
| User decision | `APPROVE / REVISE / REJECT` |
| Approval effect | `AUTHORIZE_COMPLETE_BUYER_CLEAN_COPY_WITHIN_GATE2` only |

## 1. Revised visible foundation

**H1 — unchanged**

`Titanium Dioxide REACH Registration: What Procurement Teams Should Verify`

**Hero support — revised**

`Understand which EU REACH information matters for titanium dioxide procurement, distinguish substance-level information from supplier-specific evidence, and prepare the context needed to review or request supporting documentation.`

**Scope line — corrected**

`For procurement teams reviewing supply into the EU/EEA. UK REACH is a separate framework and is not covered by this page.`

**General Direct Answer — scope wording revised**

> An EU REACH document review should identify the substance, the relevant legal entity and supply-chain role, the intended EU/EEA market or use, and the source, scope and date of the information reviewed. Public substance-level information does not by itself establish registration coverage for a named supplier, legal entity, supply arrangement or use.

**CTA — unchanged**

- Primary: `Request REACH Documentation` → `/request-documents/`, readiness-gated.
- Secondary: `View Document Hub` → `/documents/`.

## 2. Eleven-module narrative

1. Breadcrumb + Hero
2. `What Should an EU REACH Document Review Confirm?`
3. `Separate Substance Information From Supplier Coverage`
4. `Identify the Relevant Legal Actor and Supply-Chain Role`
5. `Confirm the EU/EEA Scope — and Keep UK REACH Separate`
6. `Use This Buyer Verification Checklist`
7. `Review the Source, Scope and Date`
8. `How to Request REACH Documentation`
9. `Questions Buyers Ask`
10. `Related Procurement Paths`
11. Final CTA

FAQ and final conversion are no longer combined. The sequence follows `Understand → Scope → Verify → Request → Resolve → Convert`.

## 3. Generic Only Representative rule

V0.2 separates generic framework information from named-entity claims:

> A manufacturer established outside the EEA may appoint an EEA-based Only Representative to fulfil importer obligations under REACH, where applicable.

This role may be explained from approved official evidence. No relationship involving IKHLAS, TiO2 Malaysia, a customer, importer or other named entity may be stated without separate approved evidence.

## 4. Source dates, threshold and request behavior

- Source panels use `Source updated`, when the official source provides a date, and `Reviewed`, the date TiO2 Malaysia last checked it; internal fields are locked as `source_updated_date` and `site_reviewed_date`, not a generic `evidence_date`.
- Retrieval timestamps remain internal and cannot be presented as an evidence or effective date.
- The one-tonne-per-year threshold is context-only; it cannot become a prominent number or supplier-specific shortcut.
- Process copy: `Requests are reviewed after submission. We may ask for additional context before the relevant documentation can be assessed.`
- Short CTA note: `Submission does not confirm document availability.`
- `document_types[]=other` is transport-only; all buyer-visible states use `REACH Documentation`.

## 5. FAQ and SEO direction

The five FAQ topics are retained. FAQ #2 is corrected to:

`Which legal entity and supply-chain role should be checked?`

- SEO Title: `Titanium Dioxide REACH Registration: What to Verify | TiO2 Malaysia`
- Meta Description: `Understand which EU REACH information titanium dioxide buyers should verify across substance identity, legal-entity scope, supply-chain role, source and review date.`
- Schema: `WebPage + BreadcrumbList`; no `FAQPage` at this stage.

## 6. Direct Answer blocker preserved

The question `Is titanium dioxide REACH registered?` remains reserved but does not render while the official ECHA evidence blocker is open. There is no visible placeholder or internal status message. Future official evidence would still require separate content/publication approval before the answer could enter copy, metadata, FAQ or Schema.

## 7. V0.1 → V0.2 change summary

1. Corrected strict EU-only language to EU/EEA scope.
2. Restored generic Only Representative information while retaining the named-entity prohibition.
3. Replaced `Grade or shipment` in the Direct Answer with the legal-entity/supply-arrangement/use model and explained Grade separately.
4. Replaced `qualified document review` with buyer-facing review/request language.
5. Expanded ten modules to eleven and separated FAQ from final CTA.
6. Split official source update date from site review date.
7. Made the threshold context subordinate and non-decisional.
8. Trimmed request microcopy into a helpful process sentence plus one short availability note.
9. Locked `other` as transport-only and `REACH Documentation` as the visible semantic label.
10. Corrected FAQ #2 from `or` to `and`.

## 8. Remaining risks and limits

- Official titanium-dioxide-specific ECHA evidence remains incomplete; the substance-specific Direct Answer cannot be published.
- No first-party evidence supports company registration, Grade-wide coverage, named importer/Only Representative coverage, registration number or tonnage band.
- The URL remains `PROVISIONAL_URL`; this review does not authorize publication or indexing.
- `Request REACH Documentation` must be omitted if CONV-DOC is not eligible at runtime.

## 9. Project-control recommendation

`APPROVE` V0.2 and authorize complete Buyer Clean copy within Gate 2. The two P1 factual corrections are supported by official ECHA/EU/HSE materials, and all P2 wording/architecture issues have been resolved without changing the H1, search ownership or TiO2-specific publication blocker.

Approval does not approve the future full copy and does not authorize Gate 3–10, development, deployment, publication or indexing.
