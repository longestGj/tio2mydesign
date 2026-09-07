# PRODUCT-PROC-CL Gate 2 Content Skeleton V0.2

## 0. Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-PROC-CL` |
| Page / URL | Chloride Process Titanium Dioxide / `/products/chloride-process-titanium-dioxide/` |
| Page type | Process aggregation page |
| Language / site scope | EN / `tio2-my` |
| Gate / phase | Gate 2 / Step 1 Content Skeleton |
| Version / date | V0.2 / 2026-09-06 |
| Status | `REVISED_FOR_BUYER_RE_REVIEW` |
| Execution owner | Gate 2 Execution subagent `chloride_gate2_execution` |
| Gate 1 authority | `PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` |
| Companion contract | `PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.2.md` |
| Previous Skeleton | V0.1; preserved unchanged as the initially reviewed version |
| Revision basis | `BR-CL-01` in Buyer Review `PRODUCT-PROC-CL-G2-SKELETON-BR-01` |
| Full Buyer Clean Copy | Not created in this phase |

This file is the Gate 2 Step 1 content proposal revised only for `BR-CL-01`. The English copy below is sufficiently concrete for the same independent reviewer to verify that CL-03 no longer implies mutually exclusive or exhaustive application groups. It is not approved Full Copy, visual design, implementation or publication authority.

## 1. Page task and buyer path

The page helps an industrial buyer understand what the Chloride process label means, scan the eight current Chloride Grades, move into Grade-specific evaluation and continue to documents or a quotation.

The primary path is:

**Understand the process label → scan the eight Grades → open the relevant Grade evidence → request documents or discuss the requirement**

A buyer who already has a defined requirement can use `Request a Quote` from the Hero without completing every step. A buyer who does not yet know the Grade can review the Grade list and Applications, or choose `Not sure / Need help` on the quotation form.

## 2. Proposed page order

Shared Header, breadcrumb and shared Footer assemble around five page-owned content modules. Module count follows this page's buyer task; it is not a general Process-page template.

| Order / ID | Proposed visible heading | Buyer decision or action | Content responsibility | Action |
|---:|---|---|---|---|
| 1 / CL-01 | `Chloride Process Titanium Dioxide` | Is this the right category page, and what can I do here? | Malaysia-origin sourcing context, eight-Grade scope, Grade-review and quotation paths | `Explore Chloride Grades`; `Request a Quote` |
| 2 / CL-02 | `What the Chloride Process Tells You` | What does the term mean, and what does it not decide? | Concise route definition; process classification as a starting point; route-comparison handoff | Conditional `Compare Chloride and Sulfate Routes` |
| 3 / CL-03 | `Explore Chloride-Process Grades` | Which current Grades can I investigate, including Grades with overlapping application relationships? | Eight Grade links as one continuous set in the approved order; concise overlap clarification; exact approved directory summaries; no ranking | Eight `View {Grade}` links |
| 4 / CL-04 | `How to Evaluate a Chloride-Process Grade` | What information should I review before selecting or testing a Grade? | Application/system context, Grade evidence, documents and buyer-side validation | `Explore Applications`; `Request Documents` |
| 5 / CL-05 | `Discuss Your Chloride-Process TiO2 Requirement` | How do I continue if I know a Grade or still need help choosing? | RFQ preparation, unknown-Grade path and human commercial response expectation | `Request a Quote` |

## 3. Candidate Buyer Copy

The following copy is a Skeleton-stage candidate. Headings, key paragraphs, all Grade summaries and action labels are actual proposed Buyer Copy; the Full Copy phase may polish transitions without changing the approved task or facts.

### CL-01 — Hero

**Breadcrumb**

> Home / Products / Chloride Process Titanium Dioxide

**Eyebrow**

> CHLORIDE-PROCESS TIO2 GRADES

**H1**

> Chloride Process Titanium Dioxide

**Hero copy**

> Explore eight Malaysia-origin chloride-process titanium dioxide grades for coatings, plastics and masterbatch evaluation. Open a grade page for product-specific information, or share your application and purchasing requirements for a quotation.

**Primary action**

> Explore Chloride Grades

**Action behavior — internal review annotation:** same-page anchor to CL-03.

**Secondary action**

> Request a Quote

**Action behavior — internal review annotation:** routes to `/request-a-quote/`. The destination receives source-page attribution only; no Grade or Application is selected by the page.

### CL-02 — What the Chloride Process Tells You

> At a high level, the chloride route converts titanium-bearing feedstock to titanium tetrachloride (TiCl4), purifies the intermediate and oxidizes it to form titanium dioxide. The base pigment then goes through further finishing and treatment to create individual commercial grades.
>
> The process label helps identify how the base pigment was formed. It does not, by itself, determine how a grade will perform in your formulation or process. Grade-specific product information and application-relevant evaluation still matter.

**Supporting text link**

> Compare Chloride and Sulfate Routes

**Action behavior — internal review annotation:** this action leads to the separate RES-PROC buying guide. No comparison, winner claim or environmental/cost conclusion is reproduced here. Route readiness remains an internal release dependency.

### CL-03 — Explore Chloride-Process Grades

**Introductory copy**

> These eight TiO2 Malaysia grades are classified as chloride-process products. Application relationships can overlap: M-350 is listed for Coatings, Plastics and Printing Inks, while M-510 is listed for Coatings, Plastics, Masterbatch and Printing Inks. Review all eight entries, then open the individual product page for the evidence relevant to your formulation and process. The order does not rank the grades or guarantee suitability.

**M-350**

> Excellent hue and high gloss with strong hiding power.

Action: `View M-350` → `/products/m-350/`

**M-510**

> TMP/TME-free multi-application grade with high brightness and durability.

Action: `View M-510` → `/products/m-510/`

**M-896**

> Superior weather resistance with high gloss and excellent opacity for demanding exterior coatings.

Action: `View M-896` → `/products/m-896/`

**M-895**

> High-opacity, high-gloss coatings grade with good weather resistance.

Action: `View M-895` → `/products/m-895/`

**M-200**

> High-durability exterior plastics grade with strong anti-chalking performance.

Action: `View M-200` → `/products/m-200/`

**M-210**

> High hiding power and easy dispersion for polyolefin masterbatch.

Action: `View M-210` → `/products/m-210/`

**M-340**

> High whiteness with strong high-temperature anti-yellowing performance.

Action: `View M-340` → `/products/m-340/`

**M-886**

> Bright-white plastics grade with excellent dispersion and processability.

Action: `View M-886` → `/products/m-886/`

**Source behavior — internal review annotation:** the eight summaries above are the current exact user-approved Product-directory strings. They remain individual Grade information and are not rewritten as a comparison, equivalence claim or recommendation.

### CL-04 — How to Evaluate a Chloride-Process Grade

#### 1. Define the intended system

> Start with the formulation, process and end-use requirements. For coatings, identify the coating system and exposure conditions. For plastics and masterbatch, identify the resin, processing route and finished product.

#### 2. Review the exact Grade

> Open the Grade page and compare its documented properties, treatments and application evidence with your requirements. Check the stated methods, units and whether a value is typical or a specification limit.

#### 3. Validate and collect the needed information

> Where relevant, evaluate the candidate under the formulation, processing and performance conditions that matter to your project. If your team needs TDS, SDS, COA or other product documentation, select the Grade and document types on the request form.

**Supporting actions**

- `Explore Applications` → `/applications/`
- `Request Documents` → `/request-documents/`

**Action behavior — internal review annotation:** the first action helps buyers who are still defining the use case. The second opens a document-request form; it does not imply a public download library or automatic file delivery.

### CL-05 — Discuss Your Chloride-Process TiO2 Requirement

> Ready to discuss a Grade, or still narrowing the list? Tell us the product or Grade you are evaluating—or choose Not sure / Need help—together with your application, quantity and destination. Our team will review your requirements and prepare the appropriate commercial response.

**Primary action**

> Request a Quote

**Action behavior — internal review annotation:** the quotation page owns its fields, validation, submission and response states. This page supplies only the source-page context and does not claim price, availability, delivery or quotation approval.

## 4. Content choices

| Choice | Reason and effect |
|---|---|
| Put the Grade list before the evaluation guidance | The page is a commercial-investigation category page. Buyers reach the actual portfolio quickly, then receive guidance for deeper evaluation. |
| Use exact approved Grade summaries | A list of eight names would prove inventory structure but would not help a buyer distinguish where to start. The approved summaries add real buyer value without deriving performance from the Process label. |
| Present all eight Grades as one continuous set | This resolves BR-CL-01: application relationships overlap, so application-labelled scan groups could cause Plastics, Masterbatch or Printing Inks buyers to skip M-350 or M-510. The revised intro states the approved overlap directly without creating a recommendation. |
| Keep the process explanation concise | The buyer needs enough chemistry to understand the label. Detailed route comparison remains with RES-PROC. |
| Answer core questions in the main flow | No separate FAQ is proposed. Definition, label limit, Grade list, evaluation method and next actions already answer the Gate 1 questions. |
| Keep Documents and RFQ as separate actions | Document requests and quotation requests are different buyer tasks with different receiving pages. |
| Preserve an unknown-Grade path | The RFQ receiver already provides `Not sure / Need help`; a buyer is not required to select a Grade before making contact. |
| Do not add COO, plant or supply-chain modules | Those topics are not needed for this Process-page task. Malaysia-origin is sufficient sourcing context and does not imply a plant, certificate or customs outcome. |

## 5. Skeleton review focus and stop point

The same independent Buyer Reviewer should re-review the actual English candidate copy above, with particular attention to:

1. whether the process definition is clear without turning into a chemistry article;
2. whether the eight approved summaries help rather than overload Grade scanning;
3. whether CL-03 now makes the cross-application M-350/M-510 relationships clear without implying suitability, ranking or exhaustive application membership;
4. whether `Compare Chloride and Sulfate Routes`, `Request Documents` and `Request a Quote` create accurate behavior expectations; and
5. whether a buyer who does not know the Grade still has a viable next step.

V0.2 changes only CL-03's introductory treatment and removes the two application-labelled subheadings. The five modules, eight Grade names, order, exact summaries, URLs, CTA labels, action behavior, facts, SEO direction and Schema direction remain unchanged. This Execution Agent stops after saving the revised Skeleton, companion contract, self-check, Revision Response and candidate Manifest. It does not create Full Copy, invoke the Review Agent, approve the Skeleton, close Gate 2 or enter Gate 3.
