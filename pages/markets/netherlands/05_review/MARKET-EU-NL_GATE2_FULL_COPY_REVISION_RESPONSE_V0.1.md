# MARKET-EU-NL · Gate 2 Full Copy Revision Response V0.1

Date: 2026-09-07. Status: `NL-G2-BR-01–03 REVISION_COMPLETE / PENDING_INDEPENDENT_REREVIEW`.

## 1. Revised object

- Source review: `MARKET-EU-NL_GATE2_FULL_COPY_BUYER_REVIEW_V0.1.md`.
- Previous Buyer Copy: `MARKET-EU-NL_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md`.
- Revised Buyer Copy: `MARKET-EU-NL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md`.
- Stable contract: `MARKET-EU-NL_GATE2_CONTENT_CONTRACT_V0.1.md`, unchanged because the receiver behavior, fact/source range, module responsibilities and SEO/GEO/Schema semantics did not change.

## 2. `NL-G2-BR-01` — Documents Grade and document-type relationship

Previous wording let the buyer infer that one request could assign document types across several Grades and made Product Hub sound like help inside the request flow.

Revised wording:

> If you do not yet know the Grade, you may start the document request, but you must select one Grade before submitting. You can also review candidate Grades in the Product Hub or use “Not sure / Need help” on the quotation request.

> Each document request uses one selected Grade and one or more document types. You may name other Grades in Additional Requirements as supplementary context, but the form does not assign document types to those additional Grades. Submit a separate request for each Grade when you need to specify its document types independently.

Acceptance check:

- starting the document request before the Grade is known remains allowed;
- one Grade is required before submission;
- Product Hub and RFQ are explicit linked page destinations, not claimed form-side helpers;
- one structured Grade and multiple document types remain intact;
- other Grades are supplementary context only, with no per-Grade document mapping;
- separate requests are used when document types must be specified independently by Grade.

## 3. `NL-G2-BR-02` — RFQ single selection and incomplete information

Previous wording led with several candidate Grades and exposed destination-prefill behavior.

Revised wording begins:

> On the quotation form, select one Product / Grade or “Not sure / Need help.” If you are considering other candidate Grades, add them in Additional Requirements.

The checklist now asks for the application or target requirement, the required or estimated quantity in metric tonnes, and the delivery location in the Netherlands with a city or port if known. It no longer says that the Netherlands is “carried into the form.” The existing after-submit sentence is unchanged.

Acceptance check: the single selection appears before the supplementary multi-Grade path; unknown Grade, estimated quantity and multiple candidate Grades remain usable; no implementation language is visible.

## 4. `NL-G2-BR-03` — VVVF source density

The single long attribution was split into three sentences:

> The Vereniging van Verf- en Drukinktfabrikanten (VVVF) groups its member-company market segments into sections. These cover construction, printing inks, automotive refinish, marine, protective and fire-resistant coatings, and roads or road marking. Use these contexts to describe your project; they do not determine which TiO2 grade to use.

The Coatings paragraph no longer repeats the six coating contexts; it refers to the relevant sector context and moves directly to system, indoor/outdoor use, substrate and evaluation properties.

Source regression against `https://www.vvvf.nl/brancheorganisatie`: entity, grouping predicate and complete section scope remain supported. No percentage, demand, market-share, IKHLAS-capability or Grade-suitability claim was introduced. Result: `SUPPORTED_AS_WRITTEN`.

## 5. Full Buyer cold read and adjacent regression

The revised B was read from the breadcrumb through the final CTA.

- **Highest-risk action sentence:** the revised Documents multi-Grade paragraph. It now distinguishes the selected Grade, supplementary Grade names and the absence of per-Grade document-type assignment before telling the buyer when separate requests are needed.
- **Weakest English sentence:** `These cover construction, printing inks, automotive refinish, marine, protective and fire-resistant coatings, and roads or road marking.` It remains the longest enumeration, but the attribution, list and buyer-use boundary are now separated, and the list is no longer repeated in the Coatings paragraph.
- **Incomplete-information paths:** unknown Grade, other RFQ candidate Grades, estimated quantity, optional city/port, multiple document types and supplementary document-request Grades all remain usable within the current receiver contracts.
- **Netherlands-specific value:** the VVVF contexts remain visible and feed directly into the coating and printing-ink project prompts; the page does not become a market overview.

Hero, company/origin statement, module headings and order, Product Hub wording, application prompts other than the adjacent Coatings de-duplication, exact COO sentence, CTA labels/targets, after-submit wording and SEO metadata were not changed. Gate 2 remains open; Gate 3 is not authorized.
