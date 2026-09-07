# PRODUCT-PROC-CL Search Intent Evidence V0.1

## 0. Method handoff control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-PROC-CL` |
| Method | Project Skill `search-intent-evidence-analysis` |
| Status | `METHOD_REPORT_COMPLETE / INPUT_TO_GATE1_AGENT` |
| Date | 2026-09-06 |
| Output path | `D:\23MySec\pages\products\chloride-process\01_research\PRODUCT-PROC-CL_SEARCH_INTENT_EVIDENCE_V0.1.md` |
| Raw index | `pages/products/chloride-process/01_research/PRODUCT-PROC-CL_RAW_EVIDENCE_INDEX_V0.1.csv` |
| Scope | Search observations and question evidence only; no page strategy, CTA or Gate decision |

## 1. Questions and actual tool paths

This method run asked:

1. What result types appear for the exact phrase `chloride process titanium dioxide`?
2. Do commercial expansions expose a category-and-grade task rather than only a chemistry-definition task?
3. What questions can a process aggregation page answer without taking ownership of comparison, exact-Grade or generic-Application intent?

Actual paths used:

- Generic `web_search`: one isolated original-query call, followed by a separately labelled three-query expansion batch.
- Webpage/PDF open (`web_fetch` equivalent on the current tool surface): Ishihara category page, UNIDO report, institutional BREF and Chemours technical guide.
- Project-local historical keyword research: current implementation master plus the 2026-08-29 master/cluster/architecture files.
- Google browser: not used. No claim about Google-local ordering, PAA, autocomplete or personalized results is made.
- Semrush browser: not used. Existing project records contain no numeric Search Volume, KD, CPC or trend for the three chloride-process terms; these remain `Unavailable`.

Language/market: English / GLOBAL. The generic search surface did not expose a controllable country database or location. The capture is therefore evidence about accessible result composition, not national ranking or demand share.

## 2. Search observation chain

### 2.1 Original query

The original query was run alone before expansion. The visible set mixed:

- general technical definitions and production-route explanations;
- institutional or historical technical reports;
- manufacturer technical guides;
- research papers, patents and environmental/industrial references;
- unrelated or adjacent meanings involving titanium metal, nanoparticles or titanium chlorides;
- comparison/promotional spillover.

Supported interpretation: the original phrase carries a meaningful informational process-definition task, but the result set is not pure. It does not by itself prove that most searchers are buyers or that they want a supplier page.

Counter-interpretation: some users may be researching chemistry, industrial emissions, patents or titanium metal rather than pigment procurement. The page therefore needs a concise definition that quickly qualifies the industrial-pigment scope, rather than assuming every visitor has already chosen a Grade.

### 2.2 Supplier, grade-selection and application expansions

The expanded sample exposed manufacturer/distributor category pages, product tables, grade directories and selection guides. The strongest structural observation was Ishihara's manufacturer category page: a chloride-process heading followed by multiple Grades and technical/application fields. Exact Grade product pages also appeared.

Supported interpretation: alongside technical explanation, there is a plausible commercial-investigation task in which a reader wants to see which products fall under the process category and then continue to a Grade-level evaluation.

Limit: supplier pages and snippets do not prove user occupation, procurement stage or demand volume. Their products, technical numbers and capability claims do not transfer to IKHLAS.

### 2.3 Comparison spillover

Expanded results repeatedly introduced chloride-versus-sulfate content, cost, environmental and performance-superiority claims. The current implementation master assigns the exact comparison primary keyword to `RES-PROC`, not this page.

Supported interpretation: PRODUCT-PROC-CL should acknowledge that process label is one classification input and route readers who need a balanced comparison to RES-PROC. It should not reproduce a versus article or make one route categorically superior.

## 3. Representative page observations

| Source | Direct observation | Question signal | Limitation |
|---|---|---|---|
| UNIDO technical report | Chlorination creates TiCl4, which is purified and oxidized; chlorine is recovered/recycled; TiO2 then receives further treatment. | “What does chloride process mean at a high level?” | Does not prove IKHLAS manufacturing steps or any Grade performance. |
| Institutional BREF | Chloride and sulphate are separate basic routes; subsequent milling/treatment creates products for different substrates; comparison is a distinct section. | “Why is process classification not a complete Grade-selection answer?” | Old technical reference; not a current environmental-performance or policy claim. |
| Ishihara category page | Chloride-process category page lists multiple Grades and technical/application fields. | “Which Grades belong to this process, and where can I evaluate each one?” | Competitor/manufacturer content; only page-task structure is reusable. |
| Chemours technical guide | Process explanation is followed by finishing/surface-treatment discussion and application-oriented testing themes. | “Which Grade-specific fields and application evidence should be reviewed after process classification?” | Manufacturer-specific source; no IKHLAS facts, values or superiority claims may be inferred. |

## 4. Evidence-bounded intent interpretation

The combined evidence supports a mixed but coherent page task:

1. establish the industrial-pigment meaning of chloride process;
2. explain that production route is a classification, not a complete performance or suitability conclusion;
3. show the current approved Chloride Grade set neutrally;
4. move the reader to exact Grade pages, application evaluation, documents or a qualified RFQ.

This is stronger than a pure chemistry article because commercial expansions expose grade/category paths. It is narrower than a comparison guide because versus material is both a separate intent pattern and an explicitly separate project owner.

No numeric demand conclusion is available. The 2026-08-29 project keyword baseline assigns Commercial Investigation / Technical Evaluation and retains three terms qualitatively, but Search Volume, KD, CPC and trend are all `Unavailable`.

## 5. Question leads for the Gate 1 Agent

| Lead | Nature | Source position | Boundary |
|---|---|---|---|
| What is chloride-process titanium dioxide pigment? | Source-explicit / summarized | UNIDO page 30; BREF page 153 | High-level definition only; no IKHLAS plant claim. |
| Which current IKHLAS Grades are classified as Chloride? | Project-fact question | PRODUCT V0.3 matrix and audit | Exactly eight current verified Grades; neutral classification only. |
| Is a process label enough to select a Grade? | Analysis supported by sources | BREF's later treatment/different-substrate statement; Chemours finishing/testing discussion | Answer “no” in neutral evaluation terms; do not compare route superiority. |
| Which factors should a buyer review next? | Source-informed question | Chemours page 15 and 17; Ishihara table fields | Use categories such as application need, Grade TDS and relevant tested properties; do not transplant competitor values. |
| Where should a reader compare chloride with sulfate? | Ownership question | Search spillover + current keyword master | Route to RES-PROC; do not answer a full versus comparison here. |
| How can a buyer request documentation or quotation context for a Grade? | Project workflow question | PRODUCT Playbook CTA/internal-link contracts | Agent must choose the page path; search results do not decide the CTA. |

## 6. Unknowns and impact

- Numeric keyword metrics remain `Unavailable`; this prevents quantitative demand ranking but does not undermine the approved page identity.
- No Google-local/browser session was run; result order cannot be represented as Google ranking in any country.
- Direct reads are extracts, not full local archives. They are sufficient for high-level question discovery but not for detailed chemical, environmental or performance claims.
- No current IKHLAS plant/process-operation evidence was sought because the page can explain the category and portfolio classification without asserting that IKHLAS owns or operates a chloride-process plant.
- The sources do not support claiming Chloride is universally cleaner, higher quality, more durable, more opaque, more dispersible or otherwise superior.

## 7. Fixed handoff

- **Report path:** `D:\23MySec\pages\products\chloride-process\01_research\PRODUCT-PROC-CL_SEARCH_INTENT_EVIDENCE_V0.1.md` (saved and read-back verification required below).
- **Conclusion summary:** The accessible evidence supports a mixed information-plus-commercial-investigation task: define the chloride route briefly, clarify that process classification is not a complete Grade choice, neutrally aggregate the approved Chloride Grades, and route onward. Comparison and Grade-specific facts remain separate owners.
- **Unfinished items:** no numeric metrics; no Google-local/browser evidence; no full webpage/PDF archives. These limit demand/ranking and detailed technical conclusions, but not the Gate 1 direction based on existing approved page identity and PRODUCT V0.3.

