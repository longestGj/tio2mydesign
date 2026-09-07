# DOC-REACH Gate 2 Content Skeleton V0.3

## 1. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-REACH` / `/documents/reach/` |
| Version / date | V0.3 / 2026-09-05 |
| Supersedes | `DOC-REACH_GATE2_CONTENT_SKELETON_V0.2.md` as the approved skeleton; V0.1/V0.2 remain historical |
| User decision | `APPROVE_WITH_MINOR_PRECISION_FIXES` |
| Gate 1 | `CONTENT_INTENT_CONFIRMED / USER_APPROVED / CLOSED` |
| Gate 2 skeleton | `USER_APPROVED_AFTER_PRECISION_FIXES / CLOSED_FOR_SKELETON` |
| Complete Buyer Clean Copy | `AUTHORIZED / ACTIVE` |
| Gate 3–10 | `NOT_AUTHORIZED` |
| Additional control | `DOCUMENT_REACH_COO_POST_TDS_EXECUTION_CHECKLIST_V0.1.md` |
| Review resolution | `DOC-REACH_GATE2_SKELETON_V0.2_REVIEW_RESOLUTION_V0.1.md` |

This is the approved content architecture after the user's four precision fixes. Quoted English text is approved skeleton-level buyer-visible copy. Internal behavior and evidence rules are not page copy.

## 2. Above-the-fold approved skeleton

| Element | Approved visible English copy / behavior |
|---|---|
| Eyebrow | `EU REACH DOCUMENT REVIEW` |
| H1 | `Titanium Dioxide REACH Registration: What Procurement Teams Should Verify` |
| Hero support | `Understand which EU REACH information matters for titanium dioxide procurement, distinguish substance-level information from supplier-specific evidence, and prepare the context needed to review or request supporting documentation.` |
| Scope line | `For procurement teams reviewing supply into the EU/EEA. UK REACH applies separately in Great Britain; Northern Ireland remains subject to EU REACH arrangements.` |
| Primary CTA | `Request REACH Documentation` → `/request-documents/` |
| Secondary CTA | `View Document Hub` → `/documents/` |
| Breadcrumb | `Home` → `Documents` → `Titanium Dioxide REACH` |

**Internal behavior:** The primary CTA appears only when the CONV-DOC route and action are eligible. If unavailable, remove the visible action and corresponding Schema relationship together; do not substitute Contact automatically.

## 3. Direct Answer publication states

### 3.1 Approved general buyer-visible answer

**Visible question:** `What should an EU REACH document review confirm?`

**Approved skeleton answer:**

> An EU REACH document review should identify the substance, the relevant legal entity and supply-chain role, the intended EU/EEA market or use, and the source, scope and date of the information reviewed. Public substance-level information does not by itself establish that a specific legal entity or supply arrangement is covered by an applicable registration.

This answer does not say whether titanium dioxide is registered and does not make a company or product compliance claim.

### 3.2 Reserved titanium-dioxide-specific answer

The approved question `Is titanium dioxide REACH registered?` remains reserved in the content model but does not render while `ECHA_TIO2_DIRECT_ANSWER_PUBLICATION_BLOCKER=OPEN`.

There is no buyer-visible pending message, evidence warning or empty placeholder. If complete official ECHA evidence is later captured and approved, the substance-specific answer still requires separate content/publication approval before replacing or supplementing the general answer in visible copy, metadata, FAQ or Schema.

## 4. Approved eleven-module narrative

| # | Major module / approved visible heading | Purpose | Buyer decision enabled |
|---:|---|---|---|
| 1 | Breadcrumb + Hero | Establish the EU/EEA, Great Britain and Northern Ireland scope boundary and the two approved paths. | Continue with an EU REACH review or return to Documents. |
| 2 | `What Should an EU REACH Document Review Confirm?` | Give a concise general answer without making the blocked TiO2-specific claim. | Understand the minimum scope of a useful review. |
| 3 | `Separate Substance Information From Supplier Coverage` | Explain why public substance information does not establish that a specific legal entity or supply arrangement is covered by an applicable registration. | Avoid treating a generic entry as entity- or arrangement-specific proof. |
| 4 | `Identify the Relevant Legal Actor and Supply-Chain Role` | Explain manufacturer, importer and generic Only Representative roles without claiming a named-company relationship. | Know whose evidence and role need to be checked. |
| 5 | `Confirm the EU/EEA Scope — and Keep UK REACH Separate` | Define EU/EEA, Great Britain and Northern Ireland treatment without turning the page into UK REACH advice. | Choose the correct regulatory framework. |
| 6 | `Use This Buyer Verification Checklist` | Combine substance identity, legal entity, role, use/market, source, scope and review date into a practical checklist. | Prepare a useful internal or supplier review. |
| 7 | `Review the Source, Scope and Date` | Separate the official source update date from the website's last review date. | Judge whether the source is relevant and current enough for the decision. |
| 8 | `How to Request REACH Documentation` | Explain add context → submit → review, with a short availability boundary beside the action. | Prepare and submit useful context. |
| 9 | `Questions Buyers Ask` | Resolve remaining scope, role and request questions without repeating the Direct Answer. | Resolve uncertainty before taking action. |
| 10 | `Related Procurement Paths` | Link to the EU Market page and Documents Hub only when their routes are eligible. | Continue to regional procurement or another document task. |
| 11 | Final CTA | Repeat the approved request and Hub actions without merging conversion into the FAQ. | Request documentation or return to the Hub. |

The narrative remains `Understand → Scope → Verify → Request → Resolve → Convert`.

## 5. Module detail controls

### 5.1 Substance information versus applicable registration

**Approved lead:**

> A public substance entry can help identify regulatory information about a substance. It does not, on its own, establish that a specific legal entity or supply arrangement is covered by an applicable registration. A commercial Grade name identifies a product offering; it is not the registrant or an independent registration record.

No company, supplier or Grade coverage badge is shown.

### 5.2 Legal actor and supply-chain role

Use neutral explanatory cards for:

- `Manufacturer` — identify the EEA-established entity manufacturing the substance, where applicable.
- `Importer` — identify the EEA-established entity responsible for bringing the substance into the EEA, where applicable.
- `Only Representative` — a manufacturer, formulator or article producer established outside the EEA may appoint an EEA-based Only Representative to fulfil relevant importer obligations under REACH, where applicable.

**Named-entity boundary:** Generic Only Representative role information may be explained from approved official evidence. No Only Representative relationship involving IKHLAS, TiO2 Malaysia, a customer, importer or other named entity may be stated without separate approved evidence.

### 5.3 EU/EEA, Great Britain and Northern Ireland boundary

**Approved visible copy:**

> References to EU REACH on this page include the EEA countries where REACH applies: Norway, Iceland and Liechtenstein. UK REACH operates separately in Great Britain, while EU REACH continues to apply in Northern Ireland. Evidence for one framework should not automatically be treated as confirmation under another.

The page does not provide UK REACH advice or determine obligations for a specific arrangement.

### 5.4 Buyer verification checklist

Approved buyer-visible checklist:

1. Confirm the substance identity referenced by the information.
2. Identify the relevant legal entity and whether the applicable role is manufacturer, importer or Only Representative.
3. Define the intended EU/EEA market, use and supply arrangement.
4. Check what the information covers—and what it does not cover.
5. Record the official source update date, when available, and the date the source was last reviewed for this page.
6. Request clarification when the entity- or arrangement-specific scope is not clear.

### 5.5 Evidence panel

The panel may show only fully captured and approved official sources. Approved buyer-visible fields:

- `Source` — official institution or authority.
- `Source updated` — the publication/update date supplied by the official source, when available.
- `Reviewed` — the date TiO2 Malaysia last checked the source for this page.
- `Scope` — a concise note explaining what the source supports.

**Internal date-field contract:** use `source_updated_date`, when the official source provides one, and `site_reviewed_date` for the website's last verification. These fields must not be collapsed into a generic `evidence_date`.

Internal retrieval timestamps may remain in the audit trail but must not be presented as an evidence, effective or source-update date. Discovery-only ECHA results and capture-failure details stay internal and do not render.

### 5.6 Threshold context

Any visible one-tonne-per-year reference must be framed as a general threshold applied in the relevant legal-entity/substance context and subject to applicable exemptions and other REACH conditions.

It must not be a prominent number, buyer decision card or shortcut for concluding that a particular supplier, importer or supply arrangement is registered or exempt.

### 5.7 Request process

Approved steps:

1. `Describe the EU REACH information you need.`
2. `Add the relevant product, Grade, application or EU/EEA supply context.`
3. `Submit the request for review.`

**Approved process copy:**

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

## 7. Approved FAQ questions

1. `Is public substance information enough to confirm coverage under an applicable registration?`
2. `Which legal entity and supply-chain role should be checked?`
3. `Does EU REACH information also confirm UK REACH coverage?`
4. `What information should I include in a REACH document request?`
5. `Does submitting a request confirm registration or document availability?`

The blocked question `Is titanium dioxide REACH registered?` is not included in the visible FAQ while the official-evidence blocker is open. `FAQPage` Schema is not proposed at this stage.

## 8. SEO / GEO / Schema direction

| Element | Approved skeleton direction / rule |
|---|---|
| Primary keyword | `titanium dioxide reach registration` |
| Secondary keyword | `titanium dioxide reach supplier` |
| Query-language term | Search-intent input only; never a company/product claim |
| SEO Title | `Titanium Dioxide REACH Registration: What to Verify | TiO2 Malaysia` |
| Meta Description | `Understand which EU REACH information titanium dioxide buyers should verify across substance identity, legal-entity scope, supply-chain role, source and review date.` |
| Canonical | `https://tio2malaysia.com/documents/reach/` candidate; no publication or indexing authorization |
| Schema | `WebPage` + `BreadcrumbList`; visible content and machine-readable claims share the same approved public data source |
| GEO answer | The general Direct Answer in Section 3.1 is eligible; the titanium-dioxide-specific answer is omitted from visible and machine-readable output while blocked |

The primary keyword and SEO Title remain because the page addresses titanium dioxide procurement and REACH registration review. Full copy must not manufacture keyword density with unqualified phrases such as `titanium dioxide REACH registered` or `REACH compliant titanium dioxide`.

## 9. Buyer-visible public data boundary

### 9.1 Allowed in complete copy

- Approved general EU REACH definition and EU/EEA framework.
- Qualified manufacturer/importer responsibility and generic Only Representative role information.
- Qualified threshold context only where needed, without entity- or arrangement-specific inference.
- The difference between public substance information and evidence applicable to a legal entity or supply arrangement.
- The buyer checklist and controlled request path.
- Explicit EU/EEA, Great Britain and Northern Ireland boundary.

### 9.2 Not allowed in complete copy without new evidence and approval

- IKHLAS or TiO2 Malaysia registration/coverage.
- A named importer or Only Representative relationship.
- Registration number, tonnage band or all-Grade coverage.
- An unqualified company/product compliance statement.
- A UK REACH conclusion for a specific arrangement.
- The titanium-dioxide-specific Direct Answer.
- Internal status, evidence-control, Claim Register or source-capture language.

## 10. Conditional approval closure

The user's `APPROVE_WITH_MINOR_PRECISION_FIXES` decision is satisfied by:

1. the explicit Great Britain / Northern Ireland boundary;
2. the complete generic OR appointing-party definition;
3. the applicable-registration wording in the Direct Answer and substance module;
4. the fully qualified one-tonne-per-year context rule.

The skeleton is closed as `USER_APPROVED_AFTER_PRECISION_FIXES`. Preparation of complete Buyer Clean copy is authorized within Gate 2. The complete copy itself remains subject to user confirmation before Gate 2 can close.

Gate 3–10, development, deployment, publication and indexing remain unauthorized.

