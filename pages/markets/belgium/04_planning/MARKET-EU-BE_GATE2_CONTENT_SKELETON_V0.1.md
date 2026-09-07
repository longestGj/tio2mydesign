# MARKET-EU-BE · Gate 2 Content Skeleton V0.1

Date: 2026-09-07. Status: `DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED`. This is deliverable A under the approved serial Full Copy batch. The batch authority permits Full Copy to be produced without a separate page-level Skeleton approval; it does not approve this Skeleton, close Gate 2 or start Gate 3.

## 1. Page task and buyer path

The page serves industrial procurement and technical evaluators sourcing titanium dioxide for delivery to Belgium. It gives coatings and plastics first attention, supports importer and distributor enquiries, and prevents the general term “titanium dioxide” from obscuring the product form or supply origin.

**identify the industrial product, origin and destination → state the required product form and application → review candidate Grades → request documents for one selected Grade → request a quotation with known or incomplete information**

The buyer may open the quotation route from the Hero. Reading every module or knowing the exact Grade is not required before an RFQ can begin.

## 2. Proposed page content in order

### BE-01 · Hero

**H1**

> Titanium Dioxide Supplier for Belgium

**Candidate Hero copy**

> IKHLAS TITANIUM (MALAYSIA) SDN. BHD. provides Malaysia-origin industrial titanium dioxide for procurement and technical evaluation in Belgium. Review products for coatings and plastics, or send us your application, quantity and delivery requirements for a quotation.

**Actions**

- `Request a Quote` → `/request-a-quote/`
- `Explore Products` → `/products/`

### BE-02 · Confirm the Product, Origin and Destination

**Candidate copy**

> The Product Hub lists industrial titanium dioxide pigment Grades for formulation and production review. The stated product origin is Malaysia; Belgium is the intended delivery market for the enquiry.

> Liquid dispersions, laboratory reagents and finished coatings require different purchasing specifications and should not be assumed from these listings. If physical form is part of your pigment specification, state it explicitly in your enquiry.

This is the Belgium-specific qualification answer from Gate 1. It clarifies the buying object and separates origin from destination without building a competitor comparison or claiming that every listed form is offered.

### BE-03 · Describe What You Need to Evaluate

The module begins with the information already available; it does not require an exact Grade or a complete specification before product review or RFQ.

- **Coatings:** coating system, end use, waterborne or solvent-borne context, indoor or outdoor use, substrate and properties to evaluate.
- **Plastics and masterbatch:** resin, processing route, finished product, direct pigment use or masterbatch production, and relevant processing or appearance requirements.
- **Import and distribution:** application groups, reference specifications, candidate Grades and estimated quantity for the intended Belgium delivery, using non-confidential criteria.

**Action**

- `Explore Products` → `/products/`

Product pages provide Grade-specific information. The Belgium page does not select, recommend or establish a country-specific fit.

### BE-04 · Request Documents for a Selected Grade

**Candidate copy**

> For a Grade you are evaluating, request the TDS, SDS, COA or origin and supplier-qualification documentation needed for review. Each document request uses one selected Grade and may include more than one document type.

> A Certificate of Origin is available upon request.

The module preserves the shared receiver boundary: an unknown-Grade buyer may begin but must choose one Grade before submission; other Grades may be supplementary context but cannot receive separately assigned document types in the same request.

**Actions**

- `Request Documents` → `/request-documents/`
- `View Document Hub` → `/documents/`
- `European Union Procurement Overview` → `/markets/european-union/`

### BE-05 · Request a Quote for Delivery to Belgium

**Candidate copy**

> On the quotation form, select one Product / Grade or “Not sure / Need help.” Add other candidate Grades in Additional Requirements. Include the application or target requirement, any product-form and evaluation details you already know, required or estimated quantity, delivery location in Belgium, and company and business contact information.

> After you submit your quotation request, our team will review your requirements and contact you using the information provided.

**Primary action**

- `Request a Quote` → `/request-a-quote/`

Belgium may be passed as visible, editable destination context. No Grade, application, quantity, city or port is inferred. Submission does not guarantee a quotation, stock, supply or delivery.

## 3. Key module decisions

| Decision | Reason and effect |
|---|---|
| Add a short product/origin/destination module | Belgium Gate 1 found genuine ambiguity between industrial pigment, liquid dispersion, laboratory reagent, finished coating, local manufacture and destination. Resolving it helps qualification before technical detail. |
| Use two application paths plus a distribution path | Coatings and plastics are the approved priorities. Importers and distributors are an approved secondary audience whose enquiry context differs from a single formulation project. |
| Keep product form as an enquiry input rather than a new catalogue | The page can ask the buyer to state powder, dispersion, reagent or finished-product context without claiming that IKHLAS supplies every form. Product owners retain the offer facts. |
| Keep Documents and RFQ separate | Documents uses one selected Grade and multiple document types; RFQ accepts `Not sure / Need help` and supplementary candidate Grades. |
| Link to the EU owner without adding a trade module | The page answers where to continue for regional context while avoiding undated regulation, duty or customs copy. |

## 4. SEO direction and review focus

- SEO Title: `Titanium Dioxide Supplier Belgium | TiO2 Malaysia`
- Meta Description: `Source Malaysia-origin industrial titanium dioxide for coatings and plastics projects in Belgium. Review product information and documents, or request a quote.`
- Canonical: `https://tio2malaysia.com/markets/belgium/`
- Schema direction: `WebPage` + `BreadcrumbList`; no `LocalBusiness`, `Product`, `Offer`, certification, availability or shipping semantics.

Independent Buyer Review should test whether the product-form clarification is useful without sounding like an offer of every form, whether the importer/distributor path earns its place, and whether RFQ and Documents remain accurate for incomplete information. Full Copy and module order remain pending independent review, project-control review and batch user approval.
