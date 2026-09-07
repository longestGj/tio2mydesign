# PRODUCT-PROC-SU Search Intent Evidence V0.1

## 0. Method handoff control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-PROC-SU` |
| Method | Project Skill `search-intent-evidence-analysis` |
| Status | `METHOD_REPORT_COMPLETE / INPUT_TO_GATE1_AGENT` |
| Date | 2026-09-06 |
| Output path | `D:\23MySec\pages\products\sulfate-process\01_research\PRODUCT-PROC-SU_SEARCH_INTENT_EVIDENCE_V0.1.md` |
| Raw index | `pages/products/sulfate-process/01_research/PRODUCT-PROC-SU_RAW_EVIDENCE_INDEX_V0.1.csv` |
| Scope | Query-level search observations and buyer-question evidence only; no page strategy, CTA or Gate decision |

## 1. Questions and actual tool paths

This method run asked:

1. What result types appear for the exact phrase `sulfate process titanium dioxide`?
2. Do supplier/manufacturer and spelling-variant expansions expose a category-to-Grade task in addition to chemistry/process explanation?
3. What questions can a Sulfate Process aggregation page answer without taking ownership of comparison, exact-Grade or generic-Application intent?

Actual paths used:

- Generic `web_search`: one isolated original-query call, followed by a separately labelled four-query expansion batch.
- Webpage/PDF open (`web_fetch` equivalent on the current tool surface): an FTC institutional record, Ishihara's sulfate category page, a KRONOS sulfate Grade page and a Tronox product portfolio page. A Chemours PDF open failed because the source exceeded the tool's content limit; that failure remains visible in the raw capture and is not treated as a read.
- Project-local keyword research: current implementation master plus the 2026-08-29 keyword master, cluster and architecture files.
- Google browser: not used. No claim about Google-local ordering, PAA, autocomplete or personalized results is made.
- Semrush browser: not used. The current project records contain no numeric Search Volume, KD, CPC or trend for the sulfate/sulphate terms; these remain `Unavailable`, not zero.

Language/market: English / GLOBAL. The generic search surface did not expose a controllable country database or location. The capture supports result-composition observations only, not national rank, search share or demand volume.

## 2. Search observation chain

### 2.1 Original query

The exact phrase was run alone before any expansion. The accessible set mixed:

- general technical explanations of the sulfate production route;
- historic institutional effluent and industrial-process records;
- patents and academic papers about particular sulfate-process steps;
- broader health/food-grade or nanotechnology contexts that are adjacent to, but not the same as, this site's industrial-pigment procurement task;
- comparison spillover involving chloride and sulfate routes.

Supported interpretation: the exact phrase carries a strong informational process-definition task. The accessible sample does not establish that the searcher is necessarily a buyer or that a supplier category page is the only or dominant desired result.

Counter-interpretation: some users may be researching environmental controls, chemistry, patents, food-grade material or historical manufacturing rather than industrial pigment procurement. The future page should therefore qualify its industrial-pigment scope early and should not expand into all possible TiO2 meanings.

### 2.2 Manufacturer, supplier and spelling-variant expansions

The expanded queries exposed:

- manufacturer category pages headed as sulfate/sulphate process and followed by multiple Grades;
- individual Grade pages with process classification, applications and technical fields;
- product directories and selection-guide structures;
- supplier pages with direct document, quote or comparison actions;
- promotional superiority, cost and performance claims that are not transferable to IKHLAS.

The Ishihara page provides the clearest structural example: a sulfate-process category heading with Grade rows and technical/application fields. KRONOS provides an exact sulfate Grade page with a path back to the Grade list and technical/document actions. Tronox demonstrates portfolio navigation through application filters and Grade links, although its own company/process facts do not transfer.

Supported interpretation: alongside the technical-definition task, there is a plausible commercial-investigation task where a reader wants to identify which products are in the Sulfate category and then move to a specific Grade, application evaluation, documentation or quotation step.

Limit: the expansion sample cannot be used to claim that the exact original query is commercially dominant. Manufacturer and supplier pages do not prove searcher occupation, purchasing stage or demand magnitude.

### 2.3 Sulfate and sulphate spelling

Both spellings appear naturally in supplier/manufacturer material and the project keyword baseline. This supports consuming `sulfate process titanium dioxide` as the single primary keyword and treating `sulphate process titanium dioxide` as a same-intent language variant on the same page. It does not support creating a second URL, separate canonical or duplicated page.

### 2.4 Comparison spillover

The exact and expanded results contain route-comparison claims about quality, color, cost, environmental effect, feedstock and interchangeability. Some observations are jurisdiction-, company-, product- or application-specific, and several sources are promotional or historical. The current implementation master assigns the exact comparison intent to `RES-PROC`.

Supported interpretation: PRODUCT-PROC-SU may state that process is one classification factor and route readers who need a balanced comparison to RES-PROC. It should not reproduce a versus article, generalize a market-specific comparison, or describe Sulfate as universally better or worse.

## 3. Representative page observations

| Source | Direct observation | Question signal | Limitation |
|---|---|---|---|
| U.S. FTC public decision record | At a high level, sulfate TiO2 combines titanium-bearing feedstock with sulfuric acid in a batch route before subsequent treatment produces TiO2. | “What does sulfate process mean in a restrained industrial-pigment definition?” | The record is litigation evidence with North American comparison findings; it does not prove current global performance, IKHLAS plant facts or general interchangeability. |
| Ishihara sulfate-process category page | A sulfate-process category heading is followed by multiple Grade rows and technical/application fields. | “Which Grades belong to this process category, and where should the reader evaluate the exact model?” | Competitor content; only the category-to-Grade information pattern is reusable. No competitor values or performance claims transfer. |
| KRONOS 2044 Grade page | The page explicitly classifies a Grade as rutile pigment produced by the sulfate process and provides application, technical and document/list navigation. | “What Grade-specific evidence should follow process classification?” | One competitor Grade cannot establish facts about any IKHLAS Grade or the sulfate route generally. |
| Tronox TiO2 portfolio page | Product discovery is organized through application categories, filters and Grade links; company process facts appear separately. | “How can a process page connect to application and exact-Grade evaluation?” | Manufacturer/company facts and performance statements are not IKHLAS evidence. |
| Chemours PDF attempt | The search result exposed comparison-oriented promotional language, but the PDF itself was too large for the page-open tool and was not read. | “Which claims require explicit exclusion or separate comparison ownership?” | Search-result text only; not eligible as a read source and not used as positive technical evidence. |

## 4. Evidence-bounded intent interpretation

The combined evidence supports a mixed information-plus-commercial-investigation task:

1. establish the industrial-pigment meaning of sulfate/sulphate process;
2. explain that production route is a classification, not a complete performance, application or suitability conclusion;
3. show the current approved Sulfate Grade set neutrally;
4. move the reader to exact Grade pages, application evaluation, documents or a qualified quotation request;
5. route full Chloride-versus-Sulfate comparison to its separate owner.

This interpretation is stronger than a pure chemistry article because manufacturer expansions show category and Grade paths. It remains narrower than a comparison guide or an individual Grade page.

No numeric demand conclusion is available. The existing project baseline retains `sulfate process titanium dioxide`, `sulphate process titanium dioxide` and `sulfate tio2 supplier` qualitatively; Search Volume, KD, CPC, trend and complete SERP type remain `Unavailable`.

## 5. Question leads for the Gate 1 Agent

| Lead | Nature | Source position | Boundary |
|---|---|---|---|
| What is sulfate-process titanium dioxide pigment? | Source-explicit / summarized | FTC high-level process description; original-query technical sources | Restrained definition only; no IKHLAS plant, feedstock, equipment or operating claim. |
| Are `sulfate` and `sulphate` separate product categories? | Search/language observation | Project keyword master plus expanded manufacturer results | Treat as spelling variants on one page, not separate URLs or products. |
| Which current IKHLAS Grades are classified as Sulfate? | Project-fact question | PRODUCT V0.3 matrix and audit | Exactly five current verified Grades; neutral classification only. |
| Is a process label sufficient to choose a Grade? | Analysis supported by category/Grade patterns | Ishihara category and KRONOS Grade structures | Answer neutrally: review Grade/application evidence; do not compare routes or infer performance. |
| What should a buyer review next? | Source-informed question | Manufacturer Grade/application/document navigation patterns | Exact Grade page, approved applications, current Grade evidence/documents and quotation context; no transferred competitor data. |
| Where should a reader compare sulfate with chloride? | Ownership question | Comparison spillover + implementation master | Route to RES-PROC; do not publish a full comparison here. |

## 6. Unknowns and impact

- Numeric keyword metrics remain `Unavailable`; this prevents quantitative demand ranking but does not undermine the approved page identity.
- No Google-local browser session was run, so no result is represented as country-specific Google rank, PAA or autocomplete evidence.
- Direct reads are page/PDF extracts, not complete local archives. They are sufficient for high-level question discovery, not detailed chemical, environmental or performance claims.
- The failed Chemours PDF open supplies no positive evidence beyond the captured search-result observation.
- No IKHLAS plant/process-operation evidence was sought because the page can explain the general category and current approved portfolio classification without asserting that IKHLAS owns or operates a sulfate-process plant.
- Search results do not support claiming that Sulfate is universally better, worse, cheaper, more expensive, cleaner, less clean, higher quality, lower quality, more durable, less durable or interchangeable with Chloride.

## 7. Skill self-check

| Check | Result |
|---|---|
| Original query kept separate from expansions | PASS |
| Expansion proportions not used as original-query distribution | PASS |
| Search snippets distinguished from opened page content | PASS |
| Supplier pages not used to infer user occupation or demand volume | PASS |
| Competitor facts not transferred to IKHLAS | PASS |
| Sulfate/sulphate handled as a same-page variant, not a new architecture decision | PASS |
| Google/Semrush absence recorded without inventing values | PASS |
| Comparison spillover retained as a counter-signal and ownership boundary | PASS |

## 8. Fixed handoff

- **Report path:** `D:\23MySec\pages\products\sulfate-process\01_research\PRODUCT-PROC-SU_SEARCH_INTENT_EVIDENCE_V0.1.md`.
- **Conclusion summary:** The accessible evidence supports a mixed technical-definition and commercial-investigation task: define the sulfate/sulphate route briefly, clarify that process classification is not a complete Grade choice, neutrally aggregate the approved Sulfate Grades, and route onward to exact evidence and actions. Full process comparison remains a separate owner.
- **Unfinished items:** no numeric metrics; no Google-local/browser evidence; no full webpage/PDF archives; one oversized PDF could not be opened. These limitations block demand/ranking and detailed comparative claims, but not the Gate 1 direction based on the approved identity and PRODUCT V0.3.

