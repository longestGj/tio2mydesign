# APP-PLAS Gate 2 Full Copy Buyer Review V0.1

## 1. Review control

| Field | Value |
|---|---|
| Review ID | `APP-PLAS-G2-BR-01` |
| Phase | `Full Copy initial review` |
| Review date | 2026-09-07 |
| A / SHA-256 | `APP-PLAS_GATE2_CONTENT_SKELETON_V0.1.md` / `C712B5021E45FCEEBE7EF855DC272F4E64EA8EADF6FB7F5C6ADBA9AA5773EAA5` |
| B / SHA-256 | `APP-PLAS_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` / `E1F592393FDED03AFC4E26FAE4A461745088A8B06689AC6BDCAAF3D10492F714` |
| C / SHA-256 | `APP-PLAS_GATE2_CONTENT_CONTRACT_V0.1.md` / `90368F236F88937F1A729A1562B93749C99AD3D8AE34EB034AC9E2C2FB56BDD3` |
| Current Manifest / SHA-256 | `APP-PLAS_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` / `71B7789B6A807A0D81DBB5E9E439DFB0511A345C8DC6DB1AA61E704DAAC2E2D8` |
| Verdict | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS` |
| Required Findings | `APP-PLAS-G2-BR-F01`, `APP-PLAS-G2-BR-F02`, `APP-PLAS-G2-BR-F03` |

The actual B was cold-read from the H1 through Source 14 before A, C or the Execution self-check was opened. The Discovery pass continued to the end after the first issue. This report does not approve or close Gate 2.

## 2. Required Findings

### `APP-PLAS-G2-BR-F01` — the Grade qualifier exposes relationship-governance language

**Severity:** Minor, required.

> The following are neutral Plastics relationships. They are navigation options, not a shortlist, ranking or statement of resin-specific suitability.

`Neutral relationships` and `navigation options` describe the project's relationship controls and interface model. They do not sound like a supplier speaking to a plastics buyer. The second sentence also spends the opening of the product section explaining what the list is not, before explaining how the buyer should use it.

**Required revision:** state in natural Buyer Copy that the eight Grades are starting points for technical review and that the buyer should open the Grade pages relevant to the candidate or candidates being considered. Preserve all eight equal relationships and the no-ranking/no-suitability boundary without using internal relationship or navigation terminology.

**Acceptance condition:** the section no longer says `neutral relationships` or `navigation options`; it gives a direct buyer use for the list; one, several and unknown-Grade paths remain available; no Grade recommendation, resin suitability, equivalence, performance or availability claim is added.

### `APP-PLAS-G2-BR-F02` — the cost close is the weakest Buyer Copy sentence

**Severity:** Minor, required.

> Price per kilogram, nominal TiO2 content and loading make a meaningful cost comparison only when the incumbent and candidate plastic reach the same accepted technical endpoint. State which costs the comparison includes, such as material, testing, scrap or rework. The buyer owns that accounting boundary; this page does not predict savings or commercial outcome.

`The incumbent and candidate plastic` is awkward because the comparison is between plastic systems or outputs, and `the buyer owns that accounting boundary; this page does not predict...` reads like an internal scope disclaimer. The useful buyer action is already present: compare at an equal accepted endpoint and state the included costs.

**Required revision:** use natural plural wording for the compared plastic systems or outputs, then tell the buyer directly to define the included cost categories. Preserve the equal-technical-endpoint rule and the absence of savings, ROI, price or commercial-outcome promises without referring to what `this page` predicts or to ownership of a control boundary.

**Acceptance condition:** the paragraph reads naturally on first pass, names the comparison object clearly, and retains the approved accepted-output and cost-category limits.

### `APP-PLAS-G2-BR-F03` — Source 11 does not land on the product identified by its link label

**Severity:** Minor, required.

Source 11 labels the destination as BASF's `ULTRAMID® 8233GHS TN7317 POLYAMIDE (PRD# 30216475)` product page. On 2026-09-07 the exact URL returned HTTP 200 but rendered the generic title `myBASFWorld | Landing page`; the returned page contained neither `ULTRAMID`, `8233GHS` nor `30216475`. A buyer therefore cannot use the cited landing page to verify the named product context.

**Required revision:** replace it with a stable public BASF page that visibly identifies the named product and supports the exact retained polyamide context, or remove the source and any dependency on it if that product-specific source no longer supports a visible sentence. Do not replace it with a source that introduces a drying schedule, processing setting, compatibility or Grade conclusion.

**Acceptance condition:** the public link visibly lands on the named BASF record and supports the bounded visible predicate, or the unused record is removed and the A/C source count and source contract are updated consistently.

## 3. High-risk action and workload trace

The highest-workload instruction is:

> Run the incumbent and candidate on a declared basis: the same resin or clearly documented lot difference, TiO2 introduction route, formulation, specimen, process conditions, conditioning, exposure, method and endpoint.

**Trace:** the buyer's technical or application team → runs the incumbent and selected candidate under a declared matched basis → records results in its own trial and decision process → obtains endpoint-specific evidence for its local comparison.

This is substantial work, but it is the page's approved core task and is proportionate to a qualification decision. It does not require testing all eight listed Grades, does not send results to an unspecified website receiver and does not present the list as an industry-standard SOP. No Finding is required for this instruction.

The three external actions also have accurate receivers and outcomes:

- Documents → `CONV-DOC`: one known Grade, one or more document types, and a separate request for another Grade; receipt leads to human review of availability and applicable scope.
- Sample → `CONV-SAMPLE`: known or unknown Grade plus application, destination and test objective; submission starts human review, while any arrangement is confirmed separately.
- RFQ → `CONV-RFQ`: known lead Grade or `Not sure / Need help`, a numeric required or estimated MT quantity, destination and optional other candidates in `Additional Requirements`; confirmed receipt leads only to review and contact using the supplied details.

No action promises a document, sample, quotation, stock, fixed response time, route or delivery result.

## 4. Page-specific value, scope and incomplete-information paths

The page-specific value appears before the product and conversion sections. It turns the approved Plastics article into a usable sequence: define the actual resin/material state and TiO2 introduction route; judge optics in the finished specimen; separate FPV, film assessment and line defects; bound accelerated weathering; distinguish final-plastic evaluation from masterbatch production; convert PET, PC/PBT and PA examples into questions; classify TDS fields; and compare cost only after an accepted technical output is reached.

The 11 body sections are not duplicative merely because the page is long. Each technical section answers a separate comparison question, while the later matched-trial and request sections consolidate the inputs for a decision and supplier inquiry. The tables improve scanning. Detailed carrier selection, concentrate formulation and high-concentration masterbatch production are correctly routed to APP-MB; Source 8 remains a background masterbatch study but no study-specific formulation result is carried into APP-PLAS.

Incomplete paths remain usable:

- an unknown technical condition may be marked unknown rather than guessed;
- an unknown Grade may continue through application context, Sample or RFQ;
- one or several candidate Grades may be opened, with trial results kept separate;
- Documents supports several document types for one Grade and explains the separate-request behavior for another Grade;
- Sample accepts a known or unknown Grade;
- RFQ accepts a lead Grade or `Not sure / Need help`, permits other candidate names in `Additional Requirements`, and permits a required or estimated MT figure.

The eight Grade rows exactly match PRODUCT V0.3 and expose only Grade name, neutral process classification and Product-page route. M-2377 is not expanded into Specialty Materials or Rubber; M-996/M-2196 do not appear; no best, recommended, equivalent or resin-specific candidate is inferred. Subject to F01, APP-PLAS and APP-MB responsibilities are cleanly separated.

## 5. Technical and third-party source fidelity

Fresh checks were made against the 14 named public destinations on 2026-09-07. A fetch restriction was treated as an access limit, not as proof that a source is absent.

| # | Result | Precision conclusion |
|---:|---|---|
| 1 | `SUPPORTED_AS_WRITTEN` | TDMA entity/title and outdoor-plastics topic match; B retains only qualitative optics context and no durability or Grade guarantee. |
| 2 | `SUPPORTED_AS_WRITTEN` | HunterLab gives the 20 April 2023 date, CIE Y black/white sequence and illuminant/observer reporting basis used in B. |
| 3 | `SUPPORTED_AS_WRITTEN` | ISO 23900-5:2015 title, May 2015 publication and 2025 confirmation match; B keeps FPV within a stated thermoplastic/concentrate test context and adds no cutoff. |
| 4 | `SUPPORTED_AS_WRITTEN` | ISO 23900-6:2015 title, May 2015 publication and 2025 confirmation match; B uses it only as a bounded film dispersion assessment. |
| 5 | `SUPPORTED_AS_WRITTEN` | Q-Lab identifies Sean Fowler and 22 August 2022 and directly rejects a universal hours-to-outdoor-years factor. |
| 6 | `SUPPORTED_AS_WRITTEN` | Atlas identifies Andreas Riedl and 30 December 2024 and states that acceleration factors must be measured for the material, property and compared tests. |
| 7 | `SUPPORTED_AS_WRITTEN` | NIST identifies the four authors and 16 August 2020; its aromatic thermoplastic variables are not converted into a TiO2-formulation result. |
| 8 | `SUPPORTED_AS_WRITTEN / BACKGROUND_ONLY` | MDPI title, authors, *Fibers* 13(9), article 122 and 8 September 2025 match. The PLA masterbatch study is not used to assert transferable formulation or TiO2 Malaysia performance. |
| 9 | `SUPPORTED_AS_WRITTEN` | PubMed confirms the five authors, title, *Polymers* 13(2), article 310 and 19 January 2021; B keeps the PET case as a feed-stream/process question. |
| 10 | `SUPPORTED_AS_WRITTEN` | Springer confirms the title, September 1995 publication and 1 September 1996 erratum; B expressly prevents transfer to another Grade, resin or formulation. |
| 11 | `LINK_LANDING_REQUIRES_REVISION` | The label names a BASF product page, but the public response is a generic landing page with no named product; see F03. |
| 12 | `SUPPORTED_AS_WRITTEN` | PubMed confirms the six authors, title, *Polymers* 15(16), article 3387 and 12 August 2023; conditioning effects stay limited to the reported PA66 specimens/states. |
| 13 | `SUPPORTED_AS_WRITTEN` | ISO 1110:2019 title, fourth edition, May 2019 publication and 2024 confirmation match; no procedure or universal drying rule is reproduced. |
| 14 | `SUPPORTED_AS_WRITTEN` | ASQ's undated COQ page supports inclusion of appraisal, testing, scrap, rework and failure costs; B attributes no TiO2 saving, ROI or commercial result to ASQ. |

No source predicate is expanded into a TiO2 Malaysia Grade property, universal compatibility, service-life conversion, sole-cause diagnosis or performance guarantee. Source 8 has no direct study-specific visible predicate after APP-MB detail was routed away; this is a non-blocking source-density observation, provided later revisions do not reintroduce its masterbatch formulation findings on APP-PLAS.

## 6. Content to preserve and next responsibility

Preserve the system-first Hero, unknown-input path, finished-system optics, separate FPV/film/defect roles, weathering limits, APP-MB handoff, resin-context questions, TDS comparability framework, matched trial, eight exact Grade rows, one/several/unknown-Grade behavior, three distinct owner actions, post-submit expectation and SEO/GEO/Schema meaning. Do not add Grade summaries, recommendations or another module as part of these fixes.

Next responsibility: Gate 2 Execution Agent revises F01–F03 and saves a versioned Finding response. The independent Review Agent then reads the actual revised B and any required A/C update, verifies the three acceptance conditions and checks adjacent Grade, cost, source and CTA semantics. APP-MB remains locked until APP-PLAS completes the serial page cycle.
