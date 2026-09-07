# DOC-REACH Gate 2 Content Skeleton V0.2

## 1. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Version / date | V0.2 / 2026-09-05 |
| Supersedes | `DOC-REACH_GATE2_CONTENT_SKELETON_V0.1.md` as the current review candidate; V0.1 remains historical |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 | `GATE2_CONTENT_SKELETON / PENDING_USER_CONFIRMATION` |
| Complete Buyer Clean Copy | `NOT_STARTED` |
| Gate 3–10 | `NOT_AUTHORIZED` |
| Additional control | `DOCUMENT_REACH_COO_POST_TDS_EXECUTION_CHECKLIST_V0.1.md` |
| Review resolution | `DOC-REACH_GATE2_SKELETON_V0.1_REVIEW_RESOLUTION_V0.1.md` |

This is a content-architecture candidate. Quoted English text is proposed buyer-visible copy. Internal behavior and evidence rules are not page copy.

## 2. Above-the-fold candidate

| Element | Proposed visible English copy / behavior |
|---|---|
| Eyebrow | `EU REACH DOCUMENT REVIEW` |
| H1 | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Hero support | `Understand which EU REACH information matters for titanium dioxide procurement, distinguish substance-level information from supplier-specific evidence, and prepare the context needed to review or request supporting documentation.` |
| Scope line | `For procurement teams reviewing supply into the EU/EEA. UK REACH is a separate framework and is not covered by this page.` |
| Primary CTA | `Request REACH Documentation` → `/request-documents/` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| Breadcrumb | `Home` → `Documents` → `Titanium Dioxide REACH` |

**Internal behavior:** The primary CTA appears only when the CONV-DOC route and action are eligible. If unavailable, remove the visible action and corresponding Schema relationship together; do not substitute Contact automatically.

## 3. Direct Answer publication states

### 3.1 Current buyer-visible answer while the substance-specific answer is blocked

**Visible question:** `What should an EU REACH document review confirm?`

**Proposed visible answer:**

> An EU REACH document review should identify the substance, the relevant legal entity and supply-chain role, the intended EU/EEA market or use, and the source, scope and date of the information reviewed. Public substance-level information does not by itself establish registration coverage for a named supplier, legal entity, supply arrangement or use.

This answer gives immediate buyer value using the approved general evidence boundary. It does not answer whether titanium dioxide is registered and does not make a company or product compliance claim.

### 3.2 Reserved titanium-dioxide-specific answer

The approved question `Is titanium dioxide REACH registered?` remains reserved in the content model but does not render while `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN`.

There is no buyer-visible pending message, evidence warning or empty placeholder. If complete official ECHA evidence is later captured and approved, the substance-specific answer still requires separate content/publication approval before replacing or supplementing the current general answer in visible copy, metadata, FAQ or Schema.

## 4. Eleven-module narrative

| # | Major module / proposed visible heading | Purpose | Buyer decision enabled |
|---:|---|---|---|
| 1 | Breadcrumb + Hero | Establish the EU/EEA scope and the two approved paths. | Continue with an EU REACH review or return to Documents. |
| 2 | `What Should an EU REACH Document Review Confirm?` | Give a concise, citable general answer without making the blocked TiO2-specific claim. | Understand the minimum scope of a useful review. |
| 3 | `Separate Substance Information From Supplier Coverage` | Explain why public substance information is not evidence for a named supplier, legal entity, supply arrangement or use. | Avoid treating a generic entry as supplier-specific proof. |
| 4 | `Identify the Relevant Legal Actor and Supply-Chain Role` | Explain manufacturer, importer and generic Only Representative roles without claiming a named-company relationship. | Know whose evidence and role need to be checked. |
| 5 | `Confirm the EU/EEA Scope — and Keep UK REACH Separate` | Define the EU/EEA scope and prevent EU evidence from being reused as a UK REACH conclusion. | Choose the correct regulatory framework. |
| 6 | `Use This Buyer Verification Checklist` | Combine substance identity, legal entity, role, use/market, source, scope and review date into a practical checklist. | Prepare a useful internal or supplier review. |
| 7 | `Review the Source, Scope and Date` | Separate the official source update date from the website's last review date. | Judge whether the source is relevant and current enough for the decision. |
| 8 | `How to Request REACH Documentation` | Explain add context → submit → review, with a short availability boundary beside the action. | Prepare and submit useful context. |
| 9 | `Questions Buyers Ask` | Resolve remaining scope, role and request questions without repeating the Direct Answer. | Resolve uncertainty before taking action. |
| 10 | `Related Procurement Paths` | Link to the EU Market page and Documents Hub only when their routes are eligible. | Continue to regional procurement or another document task. |
| 11 | Final CTA | Repeat the approved request and Hub actions without merging conversion into the FAQ. | Request documentation or return to the Hub. |

The narrative is `Understand → Scope → Verify → Request → Resolve → Convert`. Module count is driven by distinct buyer functions, not by parity with DOC-TDS.

## 5. Module detail candidates

### 5.1 Substance information versus supplier coverage

**Proposed lead:**

> A public substance entry can help identify regulatory information about a substance. It does not, on its own, confirm registration coverage for a named supplier, legal entity, supply arrangement or use. A commercial Grade name identifies a product offering; it is not the registrant or an independent registration record.

No company, supplier or Grade coverage badge is shown.

### 5.2 Legal actor and supply-chain role

Use neutral explanatory cards for:

- `Manufacturer` — identify the EEA-established entity manufacturing the substance, where applicable.
- `Importer` — identify the EEA-established entity responsible for bringing the substance into the EEA, where applicable.
- `Only Representative` — a manufacturer established outside the EEA may appoint an EEA-based Only Representative to fulfil importer obligations under REACH, where applicable.

**Named-entity boundary:** Generic Only Representative role information may be explained from approved official evidence. No Only Representative relationship involving IKHLAS, TiO2 Malaysia, a customer, importer or other named entity may be stated without separate approved evidence.

### 5.3 EU/EEA scope and UK boundary

**Proposed visible copy:**

> References to EU REACH on this page include the EEA countries where REACH applies: Norway, Iceland and Liechtenstein. UK REACH operates separately in Great Britain, so EU REACH information should not be treated as confirmation of UK REACH coverage.

The page does not provide UK REACH advice or determine obligations for a specific arrangement.

### 5.4 Buyer verification checklist

Proposed buyer-visible checklist:

1. Confirm the substance identity referenced by the information.
2. Identify the relevant legal entity and whether the applicable role is manufacturer, importer or Only Representative.
3. Define the intended EU/EEA market, use and supply arrangement.
4. Check what the information covers—and what it does not cover.
5. Record the official source update date, when available, and the date the source was last reviewed for this page.
6. Request clarification when the supplier-specific scope is not clear.

### 5.5 Evidence panel

The panel may show only fully captured and approved official sources. Proposed buyer-visible fields:

- `Source` — official institution or authority.
- `Source updated` — the publication/update date supplied by the official source, when available.
- `Reviewed` — the date TiO2 Malaysia last checked the source for this page.
- `Scope` — a concise note explaining what the source supports.

**Internal date-field contract:** use `source_updated_date`, when the official source provides one, and `site_reviewed_date` for the website's last verification. These fields must not be collapsed into a generic `evidence_date`.

Internal retrieval timestamps may remain in the audit trail but must not be presented as an evidence, effective or source-update date. Discovery-only ECHA results and capture-failure details stay internal and do not render.

### 5.6 Threshold context

The general one-tonne-per-year registration threshold may appear only as qualified framework context where needed. It must not be a prominent number, buyer decision card or shortcut for concluding that a particular supplier, importer or supply arrangement is registered or exempt.

### 5.7 Request process

Proposed steps:

1. `Describe the EU REACH information you need.`
2. `Add the relevant product, Grade, application or EU/EEA supply context.`
3. `Submit the request for review.`

**Proposed process copy:**

> Requests are reviewed after submission. We may ask for additional context before the relevant documentation can be assessed.

**Short CTA note:**

> Submission does not confirm document availability.

The complete registration-scope, evidence and delivery controls remain internal and are not repeated in every buyer-facing sentence.

## 6. Request-context contract

| Context | Current transport / behavior | Editability / visible label |
|---|---|---|
| Source attribution | `source_page=DOC-REACH`, normalized to the approved internal source context | Hidden / system / non-editable |
| Document type | Optional `prefill.document_types[]=other` under the current CONV-DOC allowlist | Buyer-visible / editable / removable as `REACH Documentation` |
| Request description | Visible context such as `REACH documentation` | Buyer-visible / editable |
| Other context | Product Grade, application or other supported visible inputs | Buyer-visible / editable |

`other` is transport-only. Every buyer-visible surface—including the field label, selected-value summary, review state, success state and any buyer-facing analytics-derived output—must retain the semantic label `REACH Documentation`.

Hidden source metadata cannot satisfy a required buyer field, determine coverage or appear in buyer-visible copy, metadata or Schema.

## 7. FAQ candidates

1. `Is public substance information enough to confirm supplier coverage?`
2. `Which legal entity and supply-chain role should be checked?`
3. `Does EU REACH information also confirm UK REACH coverage?`
4. `What information should I include in a REACH document request?`
5. `Does submitting a request confirm registration or document availability?`

The blocked question `Is titanium dioxide REACH registered?` is not included in the visible FAQ while the official-evidence blocker is open. `FAQPage` Schema is not proposed at this stage.

## 8. SEO / GEO / Schema direction

| Element | Candidate / rule |
|---|---|
| Primary keyword | `titanium dioxide reach registration` |
| Secondary keyword | `titanium dioxide reach supplier` |
| Query-language term | Search-intent input only; never a company/product claim |
| SEO Title | `Titanium Dioxide REACH Registration: What to Verify | TiO2 Malaysia` |
| Meta Description | `Understand which EU REACH information titanium dioxide buyers should verify across substance identity, legal-entity scope, supply-chain role, source and review date.` |
| Canonical | `https://tio2malaysia.com/documents/reach/` candidate; no publication or indexing authorization |
| Schema | `WebPage` + `BreadcrumbList`; visible content and machine-readable claims share the same approved public data source |
| GEO answer | The general Direct Answer in Section 3.1 is eligible; the titanium-dioxide-specific answer is omitted from visible and machine-readable output while blocked |

The primary keyword and SEO Title remain because the page genuinely addresses titanium dioxide procurement and REACH registration review. Full copy must not manufacture keyword density with unqualified phrases such as `titanium dioxide REACH registered` or `REACH compliant titanium dioxide`.

## 9. Buyer-visible public data boundary

### 9.1 Allowed in complete copy

- Approved general EU REACH definition and EU/EEA framework.
- Qualified manufacturer/importer responsibility and generic Only Representative role information.
- Qualified threshold context only where needed, without supplier-specific inference.
- The difference between public substance information and supplier/legal-entity/supply-chain evidence.
- The buyer checklist and controlled request path.
- Explicit EU/EEA scope and UK REACH separation.

### 9.2 Not allowed in complete copy without new evidence and approval

- IKHLAS or TiO2 Malaysia registration/coverage.
- A named importer or Only Representative relationship.
- Registration number, tonnage band or all-Grade coverage.
- An unqualified company/product compliance statement.
- A UK REACH conclusion for a specific arrangement.
- The titanium-dioxide-specific Direct Answer.
- Internal status, evidence-control, Claim Register or source-capture language.

## 10. Confirmation requested

User confirmation is requested for:

1. the revised Hero and EU/EEA scope line;
2. the revised general Direct Answer and separate commercial-Grade explanation;
3. the generic Only Representative explanation with named-entity prohibition;
4. the eleven-module order;
5. the split `Source updated` / `Reviewed` date model;
6. the subordinate threshold rule and trimmed request microcopy;
7. the five FAQ questions, including FAQ #2 with `and`;
8. the `other` transport-only / `REACH Documentation` visible-label contract;
9. the SEO, Schema and public allowlist/denylist controls.

Approval authorizes preparation of the complete Buyer Clean copy within Gate 2 only. It does not approve that future copy or authorize Gate 3–10, development, deployment, publication or indexing.
