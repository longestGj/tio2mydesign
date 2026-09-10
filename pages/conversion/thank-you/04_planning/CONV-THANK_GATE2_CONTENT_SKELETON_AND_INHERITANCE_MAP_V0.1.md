# CONV-THANK Gate 2 Content Skeleton and Inheritance Map A V0.1

Date: 2026-09-08. Dispatch: `G2-CONVTHANK-EXEC-20260908-01`. Author: `/root/conv_thank_gate2_execute`. Status: `INHERITED_EQUIVALENT_SKELETON / READY_FOR_BUYER_REVIEW`; this is an execution candidate, not Gate 2 approval.

## 1. Processing decision

`APPROVED_CONTENT_ADAPTATION` applies. The [approved design V0.1](../../../../docs/superpowers/specs/2026-09-08-404-thank-you-pages-design-v0.1.md) is an effective same-page Skeleton because it already fixes:

- the single page identity and `/thank-you/` route;
- the shared Header → result panel → shared Footer reading path;
- Quote, Documents, Sample and Direct / invalid as the complete visible state set;
- the success icon and exact `REQUEST RECEIVED` eyebrow condition;
- every H1, body sentence, action label and target;
- the receipt proof, failure, duplicate, privacy, analytics and machine-semantic boundaries.

The design therefore satisfies the Gate 2 Skeleton decision without inferring an article-only or cross-page approval. No visible copy is added, removed, rewritten or reordered. This A records the approved structure and inheritance positions so the Full Copy can be reviewed as one page.

## 2. Page task and Hero/result pattern

Page task: after a qualifying source-form success, state which request was received and offer two approved next steps. When success cannot be proven, offer the three source-request choices without receipt language.

The Hero and result panel are one compact page-body module. There is no breadcrumb, form, FAQ, recommendation, marketing panel, submitted-data summary or additional explanatory module.

## 3. State structure and inheritance map

### Shared assembly

1. Shared Header from the Home / Global Chrome owner. Current navigation key: `NONE`; no navigation surface marks this Conversion route current.
2. One page-body result panel, selected by the state rules in C.
3. Shared Footer, production Logo and legal/consent utilities from their current owners.

### Quote success

1. Success icon plus `REQUEST RECEIVED`.
2. H1: `Thank you. We’ve received your quotation request.`
3. Body: `Our team will review the details and contact you using the information provided.`
4. `Explore Products` → `/products/`.
5. `Go to Homepage` → `/`.

### Documents success

1. Success icon plus `REQUEST RECEIVED`.
2. H1: `Thank you. We’ve received your document request.`
3. Body: `Our team will review the requested documents and contact you using the information provided.`
4. `Return to Documents` → `/documents/`.
5. `Explore Products` → `/products/`.

### Sample success

1. Success icon plus `REQUEST RECEIVED`.
2. H1: `Thank you. We’ve received your sample request.`
3. Body: `Our team will review your application and sample requirements and contact you using the information provided.`
4. `Explore Products` → `/products/`.
5. `View Applications` → `/applications/`.

### Direct / invalid

1. No success icon and no eyebrow.
2. H1: `How can we help?`
3. Body: `Choose the request you’d like to make, and our team will guide you through the next step.`
4. `Request a Quote` → `/request-a-quote/`.
5. `Request Documents` → `/request-documents/`.
6. `Request a Sample` → `/request-sample/`.

The four states contain nine ordered action instances and seven unique destinations. The state-specific action hierarchy is preserved from the approved design; Gate 3 may place and reflow it without changing labels, targets or state ownership.

## 4. SEO, GEO and Schema direction

- SEO Title: `Thank You | TiO2 Malaysia`.
- Meta Description candidate: `View confirmation and next steps for a TiO2 Malaysia quotation, document or sample request, or choose the request you would like to make.`
- Canonical: one clean base identity at `https://tio2malaysia.com/thank-you/`; request query values do not create separate canonical entities and do not canonicalize to a source form.
- Robots: `noindex, nofollow` in every state; sitemap: excluded.
- GEO: no answer target, acquisition intent or new brand/product/business relation.
- Schema: no page-specific JSON-LD. In particular, no conversion, order, quotation, document-delivery or sample-approval result is emitted.

The Title is inherited verbatim. The Meta Description and clean base-canonical mapping are the Gate 2 adaptation delta and must be included in Buyer Review and user approval.

## 5. Stable conditions and excluded rendering

Success is eligible only after the matching source receiver returns its approved explicit positive acknowledgement and the current browser session has a valid matching non-personal marker. The query chooses eligible copy; query alone is not proof. Direct, missing, unsupported, mismatched, stale and new-session access uses the Direct / invalid state, with no success flash before validation.

Validation, receiver, network or ambiguous failure remains on the source form with entered values and retry. Duplicate activation produces no second request, navigation or success event. This page never renders submitted personal, company, product, destination, application, document, sample, quotation or request-body data, and never displays a request reference.

## 6. Adaptation delta and open boundary

The visible page-body delta from the approved design is zero. Gate 2 adds only the exact static Meta Description, the clean base-canonical mapping, the unique B editing source and the consolidated stable C contract.

No content blocker was found. Runtime and cross-owner dependencies remain future acceptance work under `THANK-DEP01`–`THANK-DEP07`; they are not implemented or tested by this artifact and do not appear in Buyer Clean copy.
