# RES-CHEMOURS Search Intent Evidence Analysis V0.1

## 0. Method control

| Field | Value |
|---|---|
| Method | Project Skill `skills/search-intent-evidence-analysis/SKILL.md` |
| Status | `METHOD_REPORT_COMPLETE / NOT_PAGE_DECISION` |
| Research date | 2026-09-06 |
| Original query | `chemours titanium dioxide alternative` |
| Market / language | Global / English |
| Page context | Candidate technical guide `RES-CHEMOURS` |
| Output path | `D:\23MySec\pages\resources\chemours-alternatives\01_research\RES-CHEMOURS_SEARCH_INTENT_EVIDENCE_V0.1.md` |

This report records search observations and possible interpretations. It does not approve a page, choose a CTA, determine audience priority or authorize Gate 2.

## 1. Actual paths and evidence set

### 1.1 Reused local raw evidence

The 2026-08-29 query-level raw captures were retained and hash-registered before this task:

- `research/keyword/raw/serp/2026-08-29/REVISION/EN/chemours_ti_pure_alternative/raw_search_response.json`
- `research/keyword/raw/serp/2026-08-29/REVISION/EN/tipure_r706_alternative_equivalent/raw_search_response.json`

Both are eligible as dated historical intent evidence. Their data-centre location, device and personalization are unavailable; neither is search-volume evidence.

### 1.2 Fresh web search

The original query was executed alone on 2026-09-06 using `web_search`. Expanded queries were then run separately for question discovery. The structured visible sample is saved at:

- `evidence/RES-CHEMOURS_FRESH_SERP_OBSERVATION_2026-09-06.md`

The original returned sample included Chemours-owned pages, third-party substitution claims, and non-grade material-alternative content. Result order is preserved only within the recorded visible sample. It is not represented as a Google country ranking.

### 1.3 Fresh page reading

`web_fetch`-equivalent page opening was used on four current Chemours/Ti-Pure pages. URL, lines reviewed, observations and use limits are saved at:

- `evidence/RES-CHEMOURS_OFFICIAL_PAGE_OBSERVATIONS_2026-09-06.md`

### 1.4 Paths not used

- Browser Google: not used; current web search plus reusable raw SERP evidence were sufficient to identify the mixed intent and ownership boundary.
- Semrush: not used; no current volume/KD/CPC/trend is claimed. These metrics remain `Unavailable`.

## 2. Traceable observations

| Observation ID | Query/source | Observed content type | Evidence | Selection/use |
|---|---|---|---|---|
| SI-01 | Original query | Chemours press release about TS-6706 and R-706 | Fresh SERP + `RESCH-OFFICIAL-01` | Shows Chemours-to-Chemours product-update interpretation; not our equivalence evidence |
| SI-02 | Original query | Chemours company/product/application pages | Fresh SERP + `RESCH-OFFICIAL-02/03` | Shows brand/product selection information is relevant to the phrase |
| SI-03 | Original query | Third-party direct-equivalence supplier pages | Fresh SERP, historical raw SERP | Shows commercial substitution language exists; claims excluded as technical proof |
| SI-04 | Original query | Academic/general alternatives to TiO₂ itself | Fresh SERP | Counterexample: “alternative” can mean a different whitening/opacifying material, outside this page |
| SI-05 | Exact R-706 historical query | Exact-grade comparison/substitution results | 2026-08-29 raw capture | Supports a distinct exact-grade task and the need for a separate owner |
| SI-06 | Chemours product pages | Separate coatings, plastics and laminates portfolios and selection paths | `RESCH-OFFICIAL-02/04` | Supports identifying current grade/application before evaluating candidates |
| SI-07 | Chemours coatings page | Selection varies with formulation and performance priorities | `RESCH-OFFICIAL-03` | Supports an evaluation-input checklist; limited to context, not a mapping |
| SI-08 | TS-6706 press release | Chemours' own drop-in statement is tied to R-706 and named testing | `RESCH-OFFICIAL-01` | Strong counterexample to casual transfer of “drop-in” across suppliers |

## 3. Intent interpretations

### 3.1 Supported interpretation

The observed evidence supports a **mixed informational / technical-evaluation query**. A user may be trying to:

1. find another supply source after starting from the Chemours/Ti-Pure brand;
2. identify how to compare a currently used Ti-Pure grade with candidates;
3. find information about a specific Ti-Pure grade, especially R-706;
4. find a material that replaces TiO₂ itself rather than a different TiO₂ grade.

The evidence does not support claiming which task is a majority, or that every searcher is a procurement professional. The project's B2B audience informs relevance, but does not replace query evidence.

### 3.2 Other reasonable explanations and counterexamples

- Chemours' own TS-6706/R-706 update can satisfy “alternative” without any competing supplier.
- Non-TiO₂ opacifier/whitener research is a different material-substitution task and should be excluded.
- Third-party pages use strong “equivalent” and “drop-in” language, but this is evidence of market wording, not proof that the claims are correct.
- Exact-grade searches can be more useful than the brand-level query because evaluation requirements differ by grade and application.

### 3.3 Support level

- Independent brand-level research need: `QUALITATIVELY_SUPPORTED`.
- Exact demand size, keyword priority and traffic potential: `UNAVAILABLE`.
- Any Chemours-to-IKHLAS grade mapping: `NOT_SUPPORTED_BY_SEARCH_EVIDENCE`.
- Exact R-706 ownership as a separate task: `SUPPORTED_BY_DISTINCT_QUERY_AND_EXISTING_REGISTRY_BOUNDARY`.

## 4. Problem clues for Agent synthesis

| Clue ID | Problem clue | Source location | Nature |
|---|---|---|---|
| PC-01 | “Chemours alternative” is not one universal grade question; the current Ti-Pure grade and application must be identified first. | `RESCH-OFFICIAL-02`, product sections | Summary of source structure |
| PC-02 | A buyer evaluating a coatings pigment may need to preserve a specific balance of appearance, durability, dispersion/processing and formulation behaviour. | `RESCH-OFFICIAL-01/03` | Source-supported clue, coatings scope |
| PC-03 | Claims of one-to-one equivalence require grade-specific test evidence; search-result wording alone is insufficient. | Third-party SERP claims vs `RESCH-OFFICIAL-01` named Chemours test programme | Analytical inference |
| PC-04 | Exact R-706 questions should leave the brand-level page rather than expand it into a hidden comparison table. | SI-05 + registry RES-R706 row | Project ownership conclusion for Agent to assess |
| PC-05 | Product selection, document access and sample/qualification are separate next-step tasks. | `RESCH-OFFICIAL-04` and project architecture | Source/project synthesis clue |
| PC-06 | A useful page must explain evaluation inputs and validation steps rather than repeat competitor names or generic “alternatives” language. | SI-01–08 | Analyst-proposed quality criterion |

## 5. Unknowns and impact

1. Search volume, KD, CPC and trend are unavailable. Impact: the page cannot be prioritized on quantitative demand.
2. No controlled test data currently connects a Chemours grade to an IKHLAS grade in this Gate 1 evidence. Impact: no direct mapping, equivalence or replacement promise is eligible.
3. The fresh web-search sample is not a location-controlled Google top ten. Impact: conclusions are qualitative and limited to observed result types.
4. It is not yet known whether enough grade-specific evidence will later support multiple comparison cases. Impact: an independent page must remain a method/decision guide unless separate technical review approves cases.
5. No browser Google or Semrush collection was completed. Impact: no metric or country-specific ranking claim is made; this does not prevent a qualitative Gate 1 direction decision.

## 6. Skill handoff

- **报告路径：** `D:\23MySec\pages\resources\chemours-alternatives\01_research\RES-CHEMOURS_SEARCH_INTENT_EVIDENCE_V0.1.md`（保存后由执行 Agent 读回核对）。
- **结论摘要：** 原词呈混合的品牌替代来源、具体牌号、Chemours内部产品更新和非TiO₂材料替代意图；可支持一个品牌级评估方法页，但不能支持任何具体等效映射。R-706精确意图应由独立owner承接。
- **未完成事项：** Semrush/Google本地排名与量化指标未收集；任何具体Chemours→IKHLAS映射均无证据，需未来逐牌号技术审查。
