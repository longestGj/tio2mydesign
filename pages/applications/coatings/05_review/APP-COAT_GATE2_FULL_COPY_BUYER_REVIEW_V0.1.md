# APP-COAT Gate 2 Full Copy Buyer Review V0.1

## 1. Review control

| Field | Value |
|---|---|
| Review ID | `APP-COAT-G2-BR-01` |
| Phase | `Full Copy initial review` |
| Review date | 2026-09-07 |
| A / SHA-256 | `APP-COAT_GATE2_CONTENT_SKELETON_V0.1.md` / `EFA3C0AF5BF2E69D6942DAFDC83DF2DECDC571B4C988589788BD0F77A55B0FC2` |
| B / SHA-256 | `APP-COAT_GATE2_FULL_BUYER_CLEAN_COPY_V0.1.md` / `252EAB4925CBA831351DA5199CF16FE2585458725020D86F53012E59671F34A3` |
| C / SHA-256 | `APP-COAT_GATE2_CONTENT_CONTRACT_V0.1.md` / `AB5FD1D67EAE464193D6E20B3F80A94AFD36E29383FFB5A2C99DB8E7103DE400` |
| Current Manifest / SHA-256 | `APP-COAT_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` / `57BE194B2E32E9183D08774A3770C198DA49B858FE1517501DCA765A6B3BA26B` |
| Verdict | `BUYER_REVIEW_PASS_WITH_MINOR_REVISIONS` |
| Required Findings | `APP-COAT-G2-BR-F01`, `APP-COAT-G2-BR-F02`, `APP-COAT-G2-BR-F03` |

The actual B was cold-read from the breadcrumb through Source 6 before the execution self-check or C was consulted. Discovery continued through the full page after the first issue.

## 2. Highest-risk action and workload Finding

### `APP-COAT-G2-BR-F01` — `Review each Grade page` turns all eight options into required buyer work

**Severity:** Minor, required.

> Review each Grade page against your declared coating basis.

**Trace:** coatings buyer → reviews “each” Grade page → eight separate Product pages → expects to identify a shortlist → returns with one, several or no selected Grade.

The preceding copy correctly calls the list a neutral starting point, but `each` converts all eight equal entries into an exhaustive task. That adds work and conflicts with the page's role of helping a buyer apply a declared comparison basis without pretending to recommend a Grade.

**Required revision:** tell the buyer to open or compare the Grade pages relevant to the candidates they are considering. Do not require all eight pages, create a shortlist for the buyer, or add ranking, recommendation, suitability, equivalence or performance language.

**Acceptance condition:** a buyer may review one or several candidates and may continue with an unknown Grade; no sentence instructs the buyer to review all eight.

## 3. Weakest Buyer Copy sentence

### `APP-COAT-G2-BR-F02` — Cost sentence has a grammar and clarity defect

**Severity:** Minor, required.

> Price per kilogram, nominal TiO2 content or a different loading has no complete commercial meaning if the resulting coating does not deliver the accepted coverage, film, appearance, process behaviour and required performance.

The compound subject takes a plural verb, and `has no complete commercial meaning` is not natural industrial English. A buyer can infer the intended point, but the sentence needs rereading in the page's commercial decision section.

**Required revision:** use a plural construction and state directly that those inputs do not provide a meaningful cost comparison unless the coating reaches the accepted technical endpoint. Preserve the buyer-owned accounting boundary and do not add a saving, ROI, price or performance promise.

**Acceptance condition:** the revised sentence is grammatically correct on first read and retains the approved equal-technical-endpoint rule.

## 4. Page-specific value and incomplete-information path

The page-specific value is visible before the Grade list: it makes the actual coating system the comparison object, separates prepared-film optical results from dry-pigment data, separates dispersion/rheology/appearance endpoints, distinguishes pigment-level photoactivity screening from formulated-film durability, and then consolidates the decision into a five-row declared-basis table and an equal-endpoint cost rule. The technical article is therefore used in the correct decision order rather than reduced to a generic Coatings introduction.

The nine body modules do not constitute repetition merely because the page is long. System definition, optical film results, achieved dispersion/rheology, durability limits, endpoint synthesis and cost answer distinct buyer decisions. The table usefully consolidates earlier evidence; the technical sources sit after the action module and do not interrupt conversion. No module exposes Gate, evidence-state, SOP or route-readiness language.

Incomplete paths are usable:

- unknown Grade → continue without guessing; RFQ offers `Not sure / Need help`;
- multiple candidates → keep trials separate and list other Grade names in RFQ `Additional Requirements`;
- incomplete technical conditions → mark them unknown and provide known context;
- estimated quantity → accepted in metric tonnes;
- multiple documents for one Grade → select the relevant document types in one request; another Grade uses a separate request;
- Sample and RFQ submissions → human review/contact only, with no arrangement, qualification, equivalence, quote, stock or delivery result promised.

Apart from F01, the eight entries are equal and evidence-backed. They show only Grade name, neutral Chloride/Sulfate classification and the corresponding Product-page link. M-996/M-2196 are not differentiated, and the page does not take over Plastics, Masterbatch, Printing Inks, Process, Grade or country intent.

## 5. Third-party and technical-source fidelity

### `APP-COAT-G2-BR-F03` — Two source expressions are more precise or broader than the cited records

**Severity:** Minor, required.

1. Source 3 says `Published 1 December 2003`, while the publisher and Crossref metadata identify the issue only as **December 2003** (`published` and `published-print` date-parts contain year and month, with no day). The predicate and citation identity are correct; the day is falsely precise.
2. The durability section says changing `the light source or conditions can change degradation behaviour and even candidate ranking`. Wang et al. compare one UV exposure apparatus under dry and warm/wet conditions and support matrix, pigment/photoreactivity, dispersion and condition dependence. The cited study does not compare different light sources or directly establish a rank reversal.

**Required revision:** render Source 3 as `Published December 2003` unless a primary record supplies an exact day. For the durability sentence, retain the supported exposure-condition guidance and remove the unsupported light-source/rank-reversal extension, or attach a separately approved primary source that directly supports it.

**Acceptance condition:** source date precision matches the available metadata, and every claim associated with Source 6 stays within its tested matrix, pigment/dispersion and dry-versus-warm/wet exposure scope.

Other source results:

| Source | Result |
|---|---|
| ASTM D3451-24 | `SUPPORTED_AS_WRITTEN`: active title, 12 September 2024 update, application/agreement/chemistry-dependent interpretation and relative-comparison scope match. |
| NIST Sung et al. | `SUPPORTED_AS_WRITTEN`: entity, authors, 1 October 2000 date and bounded microstructure/scattering/appearance predicate match. |
| Tiarks et al. | `SUPPORTED_WITH_WEAKER_WORDING`: formulation/distribution predicate and DOI match; publication date should be month-level. |
| Beldarrain et al. | `SUPPORTED_AS_WRITTEN`: title, authors, 13 May 2026 date and bounded waterborne binder/dispersant/process observations match. |
| van Dyk and Heyns | `SUPPORTED_AS_WRITTEN`: title, authors, 15 October 1998 date, surface-treatment/dispersion predicate and methylene-blue photoactivity method match. |
| Wang et al. | `SUPPORTED_WITH_WEAKER_WORDING`: title, authors, 14 May 2010 online date/2011 issue and the main tested-system paragraph match; light-source/ranking extension is unsupported by this source. |

The link labels lead to the named standard or publication landing pages. No study result is mapped to a TiO2 Malaysia Grade or turned into a universal formulation, durability or service-life conclusion.

## 6. Content to preserve and next responsibility

Preserve the system-first Hero, coating-definition checklist, prepared-film rule, separate endpoints, powder/liquid and pigment-screen/formulated-film boundaries, five-row table, equal-endpoint cost principle, eight exact neutral Grade relationships, known/multiple/unknown Grade paths, three distinct conversion-owner actions, post-submit expectations and six source links. Do not add modules or Grade summaries as part of these revisions.

Next responsibility: Gate 2 Execution Agent revises F01–F03 and saves a versioned response. Independent Buyer Review then verifies the actual revised B, source wording and adjacent action paths. This report does not approve or close Gate 2 and does not authorize APP-PLAS or Gate 3.
