# MARKET-BR-EN · Gate 2 Content Skeleton V0.1

Date: 2026-09-07. Status: `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED`. This is deliverable A under the approved serial Full Copy batch. The batch authority permits Full Copy without a separate page-level Skeleton approval; it does not approve this Skeleton, close Gate 2 or start Gate 3.

## 1. Page task and buyer path

The page serves Brazil industrial procurement, importing and technical-evaluation teams considering a Malaysia-origin TiO2 supplier. It lets an early-stage buyer begin with an application, review candidate Grades, request supporting documents and prepare enough context for a quotation. Detailed trade-measure interpretation stays with `RES-TRADE-BR`.

**confirm the supplier and origin context → review Products and Applications → request documents for one selected Grade → check the dated Brazil Trade Resource when relevant → submit a Brazil quotation request**

The Hero provides immediate access to both RFQ and Products. The buyer does not need to read every module or know the exact Grade before starting an RFQ.

## 2. Proposed page content in order

### BR-EN-01 · Hero

**H1**

> Titanium Dioxide Supplier for Brazil

**Candidate Hero copy**

> IKHLAS TITANIUM (MALAYSIA) SDN. BHD. provides Malaysia-origin industrial titanium dioxide for buyers in Brazil evaluating supply for coatings, plastics and masterbatch production. Explore Product Grades and application information, request supporting documents, or send us your requirements for a quotation.

**Actions**

- `Request a Quote` → `/request-a-quote/`
- `Explore Products` → `/products/`

### BR-EN-02 · Review Products for Your Application

The module starts with buyer-known inputs rather than requiring a complete specification:

- **Coatings:** coating system, end use, waterborne or solvent-borne context, indoor or outdoor use, substrate and evaluation properties.
- **Plastics:** resin, processing route, finished product, appearance, dispersion and processing requirements.
- **Masterbatch production:** carrier resin, processing route, downstream product and requirements for TiO2 as the pigment input.

The Product Hub owns neutral Grade discovery. Application pages provide deeper evaluation guidance. This page creates no Brazil-specific Grade recommendation or ranking.

**Actions**

- `Explore Product Grades` → `/products/`
- `TiO2 for Coatings` → `/applications/titanium-dioxide-for-coatings/`
- `TiO2 for Plastics` → `/applications/titanium-dioxide-for-plastics/`
- `TiO2 for Masterbatch` → `/applications/titanium-dioxide-for-masterbatch/`

### BR-EN-03 · Documents for Product Review

The visible copy names TDS, SDS, COA, origin and supplier-qualification documentation without implying a public file inventory. It preserves the receiver's real cardinality:

- one structured Product Grade per request;
- one or more document types for that selected Grade;
- the buyer may start before knowing the Grade but must select one before submission;
- other Grade names may be supplementary context in `Additional Requirements`, but document types are not assigned to them;
- separate requests are needed only when document types must be specified independently for each Grade.

The exact approved sentence appears once:

> A Certificate of Origin is available upon request.

**Actions**

- `Request Documents` → `/request-documents/`
- `View Document Hub` → `/documents/`

### BR-EN-04 · Check Current Brazil Trade Information

The module gives the owner Resource's exact current review date, `6 September 2026`, and routes buyers to it for dated official-source context. It does not reproduce a measure, rate, scope conclusion, proceeding outcome, customs result or duty-avoidance claim.

**Action**

- `Review the Brazil Titanium Dioxide Trade Update` → `/resources/brazil-titanium-dioxide-anti-dumping-duty/`

### BR-EN-05 · Prepare a Quotation Request for Brazil

The checklist uses the existing RFQ fields and safe incomplete-information paths:

- one Product / Grade or `Not sure / Need help`;
- one Application or `Other / Not sure`;
- other candidate Grades and relevant non-confidential context in `Additional Requirements`;
- required or estimated quantity in metric tonnes;
- delivery location in Brazil, with port, city or receiving point if known;
- company and business-contact details.

> After you submit your quotation request, our team will review your requirements and contact you using the information provided.

**Primary action**

- `Request a Quote` → `/request-a-quote/`

Brazil may be passed as visible, editable destination context. No Grade, application, quantity, city or port is inferred. Submission does not guarantee a quotation, price, stock, supply or delivery.

## 3. Key module decisions

| Decision | Reason and effect |
|---|---|
| Put Product and Application evaluation directly after the Hero | Implements the approved supplier/product-first direction and keeps the page useful before a Grade is known. |
| Give Documents one operational module | Answers a real evaluation task while preserving one-Grade/multiple-document behavior and the no-public-inventory boundary. |
| Keep the Trade Resource handoff short and dated | Provides Brazil-specific value while leaving current measures, scope, rates and legal interpretation with `RES-TRADE-BR`. |
| End with concrete RFQ preparation | Turns supplier intent into known Grade/application or safe unknown choices, estimated MT quantity and Brazil delivery context without adding fields. |
| Use five modules | Each module supports a distinct buyer decision or action; no Brazil overview, supplier-claim or duplicated trade explainer is added. |

## 4. SEO direction and review focus

- SEO Title: `Titanium Dioxide Supplier Brazil | TiO2 Malaysia`
- Meta Description: `Explore Malaysia-origin industrial titanium dioxide Grades for coatings, plastics and masterbatch production in Brazil. Request documents or request a quote.`
- Canonical: `https://tio2malaysia.com/markets/brazil/`
- Schema direction: `WebPage` + `BreadcrumbList`; no `LocalBusiness`, `Product`, `Offer`, price, duty, certification, availability, shipping or trade-status semantics.

Independent Buyer Review should challenge whether the Product/Application guidance helps an early-stage buyer, whether the Documents instructions state the true receiver behavior, whether the dated Trade Resource handoff avoids importing a legal conclusion, and whether the RFQ checklist handles unknown and multiple Grade contexts naturally. Full Copy and module order remain pending independent review, project-control review and batch user approval.
