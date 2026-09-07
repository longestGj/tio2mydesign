# APP-MB Gate 2 Content Skeleton V0.1

## 1. Control

| Field | Value |
|---|---|
| Page | `APP-MB` — TiO2 for Masterbatch |
| Gate | `GATE_2 / CONTENT SKELETON CHECKPOINT` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Date | `2026-09-06` |
| Gate 1 authority | `APP-MB-G1-USER-APPROVAL-01 / CONTENT_INTENT_CONFIRMED` |
| Article input | D22 R04 exact article SHA `7a40744ff8bb20a4fc3b35cc8ffdfabd40ecfc18de9c53f81b06a7630f277cfc` |
| Full-copy status | `NOT_DRAFTED / NOT_APPROVED` |
| Later Gates | `NOT_AUTHORIZED` |

This is the one-page content skeleton required before complete Gate 2 copy. English strings below are the actual proposed page direction for user review; explanatory notes are internal review context and are not buyer-visible copy.

## 2. Proposed first screen

### Breadcrumb

`Home > Applications > Titanium Dioxide for Masterbatch`

### Eyebrow

`MASTERBATCH APPLICATION`

### H1

**Titanium Dioxide for Masterbatch: Evaluate Dispersion, Processing Stability and End-Use Performance**

### Hero direct answer

> Evaluate the pigment in two connected stages: concentrate preparation and final let-down. Keep the system, method, specimen, reference and endpoint explicit so that each result supports only the next defined qualification decision.

### Identity line

> TiO2 is the pigment input. The carrier-based concentrate and the receiving-resin article are separate evaluation objects.

### Actions

| Role | Label | Target | Context |
|---|---|---|---|
| Primary | `Discuss Your Masterbatch Application` | `CONV-RFQ` / registered `/request-a-quote/` | Editable Masterbatch context; route and form eligibility checked later |
| Secondary | `Request Technical Documents` | `CONV-DOC` / registered `/request-documents/` | Editable Masterbatch and optional Grade/document context; no availability promise |

## 3. Proposed module order

| Order | Module ID | Proposed heading / visible label | Buyer decision and content depth |
|---:|---|---|---|
| 1 | `BREADCRUMB` | `Home > Applications > Titanium Dioxide for Masterbatch` | Establish the page hierarchy; later Breadcrumb Schema must match visible links |
| 2 | `HERO` | H1 and direct answer above | Confirm that the page evaluates TiO2 pigment input for Masterbatch, not finished Masterbatch supply |
| 3 | `ON_PAGE_NAV` | `On this page` | Anchor to System, Comparison, Evidence, Documents, Qualification, Grades and Inquiry; no keyword-stuffed navigation |
| 4 | `EVALUATION_SYSTEM` | `Start with the complete two-stage system` | Explain Stage 1 concentrate preparation versus Stage 2 final let-down/final article; name the separate inputs required for comparison |
| 5 | `COMPARISON_BASIS` | `Make the comparison basis explicit` | Show that preparation, method, equipment, conditions, test polymer, specimen, reference and endpoint must match or differences must be disclosed |
| 6 | `EVIDENCE_INTERPRETATION` | `Use complementary evidence without collapsing the results` | Give Flow, FPV, morphology/distribution and final-specimen endpoints separate roles and limits |
| 7 | `EVALUATION_BOUNDARY` | `Processing evidence does not close final-use requirements` | State clearly that favorable process evidence may support progression but cannot supply an unmeasured optical, mechanical, ageing/retention or end-use result |
| 8 | `DOCUMENTS` | `Match each document to the decision` | Compare current TDS, SDS, relevant lot CoA and application report; explain what each can answer and what it cannot qualify |
| 9 | `QUALIFICATION_WORKFLOW` | `Progress through a bounded qualification path` | Convert the article framework into four steps with progress/hold outcomes; mark it as decision guidance, not an ISO requirement or industry SOP |
| 10 | `GRADES_TO_REVIEW` | `Grades to Review for Masterbatch evaluation` | Present seven neutral Grade paths with one shared non-ranking qualifier and no inferred product description |
| 11 | `ECONOMICS` | `Compare economics only at an equal qualified endpoint` | Explain when cost-in-use comparison becomes meaningful; request missing commercial/operating inputs rather than estimate savings |
| 12 | `QUALIFICATION_INQUIRY` | `Prepare a focused qualification inquiry` | List the system, trial and evidence inputs that make a technical discussion actionable; repeat the primary CTA |
| 13 | `BUYER_QUESTIONS` | `Questions buyers ask before the next trial` | Provide concise, source-bounded answers to five recurring questions; visible FAQ form does not automatically authorize FAQ Schema |
| 14 | `SOURCES` | `Sources and scope notes` | Preserve four visible source notes, publication/version gaps and citation backlinks without exposing statement IDs or research controls |

Shared Global Header precedes the page. Shared Footer follows Sources. APP-MB does not fork either component.

## 4. Module content proposals

### 4.1 `EVALUATION_SYSTEM`

**Answer line**

> Concentrate-making results and final-article results answer different questions. Define both stages before comparing pigment candidates.

**Stage 1 — Concentrate preparation**

- carrier resin identity and Grade;
- TiO2 pigment candidate;
- concentrate pigment fraction;
- concentrate preparation and process context.

**Stage 2 — Final let-down and article**

- receiving resin identity and Grade;
- final pigment fraction;
- conversion route and conditions;
- final specimen and buyer-defined endpoints.

**Decision states:** `Complete enough for comparison` or `Hold for missing definition`. These are evidence states, not product pass/fail outcomes.

### 4.2 `COMPARISON_BASIS`

**Answer line**

> Results can be compared only when the relevant preparation, method, equipment, conditions, polymer, specimen, reference and endpoint are matched—or every difference is disclosed.

Proposed comparison table groups:

1. Method and preparation.
2. Equipment, conditions and test polymer.
3. Specimen and sampling basis.
4. Reference and buyer-defined endpoint.

**Decision states:** `Comparable`, `Not comparable`, `Needs verification`. The page does not publish an FPV operating procedure or pass threshold.

### 4.3 `EVIDENCE_INTERPRETATION`

| Evidence | Question it helps answer | Boundary kept visible |
|---|---|---|
| Flow | How did material behave under the declared process or test condition? | Not a microscopic observation or final-performance result |
| FPV | What filter-pressure behavior was measured under the declared method boundary? | Equipment, conditions, test polymer and preparation remain part of the result |
| Morphology / distribution | What spatial state appeared in the specimen or field examined? | One field does not establish whole-lot homogeneity |
| Final-specimen endpoints | How did the declared final article perform against a stated reference and endpoint? | Optical, color, mechanical and ageing/retention results remain separate questions |

The LLDPE study appears as a limiting example, not as a D23 Grade comparison or a transferable formulation.

### 4.4 `EVALUATION_BOUNDARY`

**Proposed highlighted answer**

> Favorable concentrate or processing evidence may support the next defined trial. It cannot qualify a final-specimen requirement that has not been measured in the declared resin, route, geometry and end use.

This is the primary technical boundary of the page and should appear once prominently rather than as repeated defensive copy.

### 4.5 `DOCUMENTS`

| Document | Page role |
|---|---|
| Current TDS | Grade-level screening information; read with identity, revision, method, units and declared value status |
| SDS | Safety communication for the correct identity and revision; not an application-performance report or compliance conclusion |
| Relevant lot CoA | Results for an identified lot under its declared methods and units; not final-application qualification |
| Complete application report | Evidence for its declared resin, preparation, specimen, reference, method and endpoint |

**Buyer action line**

> Before comparing candidate Grades, obtain and check the current TDS and SDS, the relevant lot CoA, and application data for the declared Masterbatch system.

This module includes the secondary CTA to `CONV-DOC` in the intended complete-site experience.

### 4.6 `QUALIFICATION_WORKFLOW`

| Step | Visible label | Outcome when required evidence is ready |
|---:|---|---|
| 1 | `Document screening` | Define the concentrate trial |
| 2 | `Controlled concentrate trial` | Progress to the receiving-resin/final-specimen trial |
| 3 | `Receiving-resin and final-specimen trial` | Progress to reproducibility assessment and a release request |
| 4 | `Reproducibility assessment and release request` | Submit the evidence to the responsible decision owner |

At every step, missing or non-comparable evidence creates a reasoned hold. A request remains different from approval.

### 4.7 `GRADES_TO_REVIEW`

**Proposed qualifier**

> These unranked TiO2 Malaysia Grades are provided as starting points for technical review. Their inclusion does not establish fit, availability, equivalence, comparative performance or qualification in your system.

Proposed navigation order:

`M-510 → M-200 → M-108 → M-210 → M-340 → M-886 → M-2377`

The order follows the current approved relationship presentation and has no ranking meaning. Intended links target the corresponding `GRADE-*` owners and remain conditional on route eligibility.

### 4.8 `ECONOMICS`

**Answer line**

> Compare economics only after candidates reach the same accepted functional endpoint in the declared system.

Supporting inputs: actual consumption, delivered cost, accepted yield, energy/time, losses and allocated qualification/change costs, with comparable currency, date/period, terms and destination.

**Boundary line**

> If an equal qualified endpoint or current commercial and operating inputs have not been established, the next step is a targeted data request—not a savings estimate or Grade winner.

### 4.9 `QUALIFICATION_INQUIRY`

**Prompt**

> Prepare the next discussion around the unresolved qualification question.

Inputs requested before continuing:

- carrier resin and receiving resin identity/Grade;
- concentrate and final TiO2 fractions;
- process, conversion route and final specimen;
- target endpoints and acceptance basis;
- comparison method and reference;
- documents already reviewed or still needed;
- intended trial stage and unresolved evidence.

Primary action: `Discuss Your Masterbatch Application`.

### 4.10 `BUYER_QUESTIONS`

Proposed questions:

1. `Does a favorable FPV or processing result qualify the final application?`
2. `What needs to match before two pigment candidates can be compared?`
3. `What is the difference between a TDS, SDS, lot CoA and application report?`
4. `Are the listed Grades recommendations for every Masterbatch system?`
5. `When should cost-in-use be compared?`

Answers must reuse the visible page evidence and cannot introduce a new product, method, compliance or commercial claim.

## 5. Internal-link and ownership map

| From module | Target owner | Purpose | Condition |
|---|---|---|---|
| Breadcrumb | `HOME-001`, `APP-000` | Hierarchy/navigation | Approved/live routes and exact visible parity |
| Documents | `DOC-TDS`, `CONV-DOC` | Explain document types and start a controlled request | Corresponding route and request contract eligible |
| Grades to Review | Seven `GRADE-*` owners | Continue exact Grade review | Each target independently approved/live |
| Inquiry | `CONV-RFQ` | Continue a system-specific technical discussion | RFQ route, prefill and privacy/receiver contract eligible |
| Contextual boundary | `APP-PLAS` | Continue broader plastics evaluation when Masterbatch is not the buyer's intended scope | APP-PLAS route/content eligible |

## 6. Conditional and empty-state rules

- Page planning shows the intended complete-site CTAs and links; Gate 7 registers their implementation dependencies.
- A target that is not eligible must not produce a dead link, fabricated route, disabled buyer control or hidden Schema relationship.
- Missing Grade/product detail removes only the affected link/card under the approved atomic behavior; it does not create a negative suitability claim.
- Missing source year/version remains visible in Sources as an undated record; no date is invented.
- No article statement comment, internal evidence ID, Gate status or release blocker appears in Buyer Clean HTML.
- Long tables must preserve header/value relationships when transformed for Mobile in Gate 3.

## 7. What changes from the article

| Article form | Page form | Reason |
|---|---|---|
| Long opening paragraphs | Hero direct answer + identity line | Establish relevance and pigment-input boundary immediately |
| Nine sequential H2 sections | Fourteen buyer-decision modules | Add navigation, product paths, CTAs and separate sources from decision content |
| Repeated scope limitations | One prominent boundary plus local qualifiers | Preserve accuracy without making the page defensive or repetitive |
| Comparison prose and bullets | Structured comparison groups | Improve scanning and later responsive behavior |
| Evidence prose | Four evidence-role blocks | Prevent different observations from appearing interchangeable |
| Qualification table | Four-step progress/hold workflow | Make the next decision visible without implying an industry SOP |
| Grade list inside inquiry section | Independent neutral Grade module | Give product discovery its correct role without turning it into recommendation |
| Source notes only at end | Inline citation anchors + accessible source notes | Preserve traceability and reading flow |

## 8. Decision requested

Approve or revise:

1. H1 and Hero direct answer.
2. Fourteen-module order.
3. Primary and secondary CTA wording.
4. Neutral Grade qualifier and seven-Grade presentation.
5. The decision-first transformations described above.

Approval of this skeleton authorizes drafting the complete Gate 2 Buyer Clean copy and semantic content model only. It does not approve that future copy or authorize Gate 3.

