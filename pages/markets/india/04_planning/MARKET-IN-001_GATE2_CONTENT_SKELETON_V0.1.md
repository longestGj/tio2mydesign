# MARKET-IN-001 · Gate 2 Content Skeleton V0.1

Date: 2026-09-07. Status: `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED`. This is deliverable A under the approved serial Full Copy batch. The batch authority permits Full Copy to be produced without a separate page-level Skeleton approval; it does not approve this Skeleton, close Gate 2 or start Gate 3.

## 1. Page task and buyer path

The page serves India procurement, importing and technical-evaluation teams sourcing industrial TiO2 for coatings, plastics and masterbatch production. It helps them distinguish pigment from finished white masterbatch, review candidate Grades and prepare a quotation request on a consistent material, quantity and destination basis.

**identify the Malaysia-origin pigment supply → confirm pigment versus finished masterbatch → review Grades for the application → request documents for one selected Grade → prepare a clear India quotation request**

The buyer may open the quotation route from the Hero. Reading every module or knowing the exact Grade is not required before an RFQ can begin.

## 2. Proposed page content in order

### IN-01 · Hero

**H1**

> Titanium Dioxide Supplier for India

**Candidate Hero copy**

> IKHLAS TITANIUM (MALAYSIA) SDN. BHD. provides Malaysia-origin industrial titanium dioxide for buyers in India evaluating supply for coatings, plastics and masterbatch production. Review product information or send us your application, quantity and delivery requirements for a quotation.

**Actions**

- `Request a Quote` → `/request-a-quote/`
- `Explore Products` → `/products/`

### IN-02 · Confirm the Material You Are Buying

**Candidate copy**

> This page covers industrial titanium dioxide pigment Grades. For masterbatch production, TiO2 is an input to your formulation; a finished white masterbatch combines pigment with a polymer carrier and is a different purchase.

> If physical form, purity or another product specification matters to your project, include it in the quotation request.

This short qualification answer implements the India Gate 1 masterbatch finding without turning the page into a product-form article or adding a finished masterbatch offer.

### IN-03 · Review Products for the Intended Application

The module begins with the information the buyer already has and provides three distinct evaluation paths:

- **Coatings:** coating system, end use, waterborne or solvent-borne context, indoor or outdoor use, substrate and properties to evaluate.
- **Plastics:** resin, processing route, finished product and appearance, dispersion or processing requirements.
- **Masterbatch production:** carrier resin, processing route, downstream product and evaluation criteria for TiO2 as a pigment input.

**Action**

- `Explore Products` → `/products/`

Product pages own Grade-specific information. No India-only Grade, ranking or suitability recommendation is created.

### IN-04 · Product, Origin and Import Information

**Candidate copy**

> For a Grade you are evaluating, request the TDS, SDS, COA or origin and supplier-qualification documentation needed for review. Each document request uses one selected Grade and may include more than one document type.

> A Certificate of Origin is available upon request.

Unknown-Grade and supplementary-Grade behavior follows the current Documents receiver: the buyer may begin before a Grade is known but must select one before submission; additional Grades are context only unless separate Grade-specific requests are made.

The module also links to the India Trade Update for dated trade-remedy and customs-status research. It contains no rate, exemption, duty-status or shipment conclusion.

**Actions**

- `Request Documents` → `/request-documents/`
- `View Document Hub` → `/documents/`
- `Review the India Titanium Dioxide Trade Update` → `/resources/india-titanium-dioxide-anti-dumping-duty/`

### IN-05 · Prepare a Clear Quotation Request

**Candidate copy**

> To compare quotations on a consistent basis, describe the material, quantity and delivery destination clearly. On the quotation form, select one Product / Grade or “Not sure / Need help,” and add other candidate Grades in Additional Requirements.

The visible checklist covers application or target requirement, TiO2 pigment versus masterbatch-production context, relevant specifications, required or estimated quantity in metric tonnes, delivery location in India, and business contact details.

> After you submit your quotation request, our team will review your requirements and contact you using the information provided.

**Primary action**

- `Request a Quote` → `/request-a-quote/`

India may be passed as visible, editable destination context. No Grade, application, quantity, city or port is inferred. Submission does not guarantee a quotation, price, stock, supply or delivery.

## 3. Key module decisions

| Decision | Reason and effect |
|---|---|
| Give pigment versus finished masterbatch one short module | Gate 1 found these purchase objects mixed in India search results. The distinction changes what the buyer evaluates but does not justify a long explainer. |
| Separate coatings, plastics and masterbatch prompts | They are the three approved India priorities and require different project information. The page still leaves Grade selection to Product owners and buyer evaluation. |
| Make quotation basis the final conversion module | India price intent is answered by helping buyers standardize the material, MT quantity and destination information, not by publishing incomparable marketplace prices or inventing an MOQ. |
| Keep trade information as an owner link | RES-TRADE-IN owns dated duty, scope and official-verification content. MARKET-IN-001 retains commercial procurement and does not repeat rates or current legal conclusions. |
| Keep Documents and RFQ cardinality explicit | Documents has one structured Grade and multiple document types; RFQ permits `Not sure / Need help` and supplementary candidate Grades. |

## 4. SEO direction and review focus

- SEO Title: `Titanium Dioxide Supplier India | TiO2 Malaysia`
- Meta Description: `Source Malaysia-origin industrial titanium dioxide for coatings, plastics and masterbatch production in India. Review Grades and documents, or request a quote.`
- Canonical: `https://tio2malaysia.com/markets/india/`
- Schema direction: `WebPage` + `BreadcrumbList`; no `LocalBusiness`, `Product`, `Offer`, price, duty, certification, availability or shipping semantics.

Independent Buyer Review should test whether the material/masterbatch distinction resolves the India-specific buying problem, whether the quotation guidance creates a consistent basis without promising price comparability, and whether Documents and Trade routes retain their real owner boundaries. Full Copy and module order remain pending independent review, project-control review and batch user approval.
