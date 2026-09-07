# DOC-REACH Gate 2 Content Skeleton V0.1

## 1. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Version / date | V0.1 / 2026-09-05 |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 | `GATE2_CONTENT_SKELETON / PENDING_USER_CONFIRMATION` |
| Complete Buyer Clean Copy | `NOT_STARTED` |
| Gate 3–10 | `NOT_AUTHORIZED` |
| Additional control | `DOCUMENT_REACH_COO_POST_TDS_EXECUTION_CHECKLIST_V0.1.md` |

This is a content-architecture candidate. Quoted English text is proposed buyer-visible copy. Internal behavior and evidence rules are not page copy.

## 2. Above-the-fold candidate

| Element | Proposed visible English copy / behavior |
|---|---|
| Eyebrow | `EU REACH DOCUMENT REVIEW` |
| H1 | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Hero support | `Understand which EU REACH information matters for titanium dioxide procurement, distinguish substance-level information from supplier-specific evidence, and prepare the context needed for a qualified document review.` |
| Scope line | `For global procurement teams reviewing an EU-bound supply arrangement. UK REACH is a separate framework and is not covered by this page.` |
| Primary CTA | `Request REACH Documentation` → `/request-documents/` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| Breadcrumb | `Home` → `Documents` → `Titanium Dioxide REACH` |

**Internal behavior:** The primary CTA appears only when the CONV-DOC route and action are eligible. If unavailable, remove the visible action and corresponding Schema relationship together; do not substitute Contact automatically.

## 3. Direct Answer publication states

### 3.1 Current buyer-visible answer while the substance-specific answer is blocked

**Visible question:** `What should an EU REACH document review confirm?`

**Proposed visible answer:**

> An EU REACH document review should identify the substance, the relevant legal actor and supply-chain role, the intended EU market or use, and the date and scope of the evidence being reviewed. Public substance-level information does not by itself establish coverage for a named supplier, Grade or shipment.

This answer gives immediate buyer value using the approved general evidence boundary. It does not answer whether titanium dioxide is registered and does not make a company or product compliance claim.

### 3.2 Reserved titanium-dioxide-specific answer

The approved question `Is titanium dioxide REACH registered?` remains reserved in the content model but does not render while `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN`.

There is no buyer-visible pending message, evidence warning or empty placeholder. If complete official ECHA evidence is later captured and approved, the substance-specific answer still requires separate content/publication approval before replacing or supplementing the current general answer in visible copy, metadata, FAQ or Schema.

## 4. Ten-module narrative

| # | Major module / proposed visible heading | Purpose | Buyer decision enabled |
|---:|---|---|---|
| 1 | Breadcrumb + Hero | Establish the EU-only regulatory scope and the two approved paths. | Continue with an EU REACH review or return to Documents. |
| 2 | `What Should an EU REACH Document Review Confirm?` | Give a concise, citable general answer without making the blocked TiO2-specific claim. | Understand the minimum scope of a useful review. |
| 3 | `Separate Substance Information From Supplier Coverage` | Explain why public substance information is not evidence for a named supplier, Grade or shipment. | Avoid treating a generic entry as supplier-specific proof. |
| 4 | `Identify the Relevant Legal Actor and Supply-Chain Role` | Explain that manufacturer/importer and other applicable roles must be assessed in the actual supply arrangement without claiming a company role. | Know whose evidence needs to be checked. |
| 5 | `Confirm the EU Scope — and Keep UK REACH Separate` | Define the intended EU market/use context and prevent EU evidence from being reused as a UK conclusion. | Choose the correct regulatory framework. |
| 6 | `Use This Buyer Verification Checklist` | Combine substance identity, legal actor, supply-chain role, use/market, source, scope and evidence date into a practical checklist. | Prepare a qualified internal or supplier review. |
| 7 | `Review the Source, Scope and Date` | Show how to read the dated official-source panel without presenting discovery-only or incomplete evidence. | Judge whether evidence is relevant and current enough for the decision. |
| 8 | `How to Request REACH Documentation` | Explain add context → submit → qualified review, with request boundaries beside the action. | Prepare and submit useful context. |
| 9 | `Related Procurement Paths` | Link to the EU Market page and Documents Hub only when their routes are eligible. | Continue to regional procurement or another document task. |
| 10 | `Questions Buyers Ask` + final CTA | Resolve remaining scope and request questions, then repeat the approved actions. | Decide whether to request documentation or return to the Hub. |

## 5. Module detail candidates

### 5.1 Substance information versus supplier coverage

**Proposed lead:**

> A public substance entry can help identify regulatory information about a substance. It does not, on its own, confirm registration or supply-chain coverage for a named supplier, legal entity, Grade, use or shipment.

No company, supplier, Grade or shipment coverage badge is shown.

### 5.2 Legal actor and supply-chain role

Use neutral explanatory cards for:

- `Identify the legal entity` — confirm which entity is named in the evidence.
- `Identify the supply-chain role` — understand which manufacturer or importer role is relevant to the EU-bound arrangement.
- `Match the intended use and market` — check that the evidence is being assessed in the correct business context.

Only Representative-specific advice or relationship claims do not render without separately approved evidence and legal review.

### 5.3 EU / UK scope boundary

**Proposed visible copy:**

> This page addresses European Union REACH review only. UK REACH is a separate framework, so EU evidence should not be treated as confirmation of UK coverage.

### 5.4 Buyer verification checklist

Proposed buyer-visible checklist:

1. Confirm the substance identity referenced by the evidence.
2. Identify the relevant legal entity and its supply-chain role.
3. Define the intended EU market, use and supply arrangement.
4. Check what the evidence covers—and what it does not cover.
5. Record the source and evidence date used for the decision.
6. Request clarification when the supplier-specific scope is not clear.

### 5.5 Evidence panel

The panel may show only fully captured and approved official sources. Each entry needs a source owner, buyer-readable title, scope note and evidence date or retrieval date. Discovery-only ECHA results and capture-failure details stay internal and do not render.

### 5.6 Request process

Proposed steps:

1. `Describe the EU REACH information you need.`
2. `Add the relevant product, Grade, application or supply context.`
3. `Submit the request for a qualified review.`

**Proposed request microcopy:**

> Requests are reviewed after submission. Submitting a request does not confirm registration scope, document availability or delivery.

## 6. Request-context contract

| Context | Current transport / behavior | Editability |
|---|---|---|
| Source attribution | `source_page=DOC-REACH`, normalized to the approved internal source context | Hidden / system / non-editable |
| Document type | Optional `prefill.document_types[]=other` under the current CONV-DOC allowlist | Buyer-visible / editable / removable |
| Request description | Visible context such as `REACH documentation` | Buyer-visible / editable |
| Other context | Product Grade, application or other supported visible inputs | Buyer-visible / editable |

Hidden source metadata cannot satisfy a required buyer field, determine coverage or appear in buyer-visible copy, metadata or Schema.

## 7. FAQ candidates

1. `Is public substance information enough to confirm supplier coverage?`
2. `Which legal entity or supply-chain role should be checked?`
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
| Meta Description | `Understand which EU REACH information titanium dioxide buyers should verify across substance identity, legal-entity scope, supply-chain role and evidence date.` |
| Canonical | `https://tio2malaysia.com/documents/reach/` candidate; no publication or indexing authorization |
| Schema | `WebPage` + `BreadcrumbList`; visible content and machine-readable claims share the same approved public data source |
| GEO answer | The general Direct Answer in Section 3.1 is eligible; the titanium-dioxide-specific answer is omitted from visible and machine-readable output while blocked |

## 9. Buyer-visible public data boundary

### 9.1 Allowed in complete copy

- Approved general EU REACH definition and framework.
- Qualified manufacturer/importer responsibility and threshold context.
- The difference between public substance information and supplier/legal-entity/supply-chain evidence.
- The buyer checklist and controlled request path.
- Explicit EU scope and UK REACH separation.

### 9.2 Not allowed in complete copy without new evidence and approval

- IKHLAS or TiO2 Malaysia registration/coverage.
- Importer or Only Representative coverage.
- Registration number, tonnage band or all-Grade coverage.
- An unqualified company/product compliance statement.
- A UK REACH conclusion.
- The titanium-dioxide-specific Direct Answer.
- Internal status, evidence-control, Claim Register or source-capture language.

## 10. Confirmation requested

User confirmation is requested for:

1. the H1, Hero support and explicit EU/UK scope line;
2. the general buyer-safe Direct Answer while the TiO2-specific answer remains omitted;
3. the ten-module order;
4. the buyer verification checklist and request microcopy;
5. the five FAQ questions;
6. the SEO Title, Meta Description and `WebPage + BreadcrumbList` direction;
7. the public allowlist/denylist and request-context contract.

Approval authorizes preparation of the complete Buyer Clean copy within Gate 2 only. It does not approve that future copy or authorize Gate 3–10, development, deployment, publication or indexing.

