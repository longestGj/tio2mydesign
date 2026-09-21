# GRADE-M350 D32 Copy Parity Audit and Gate 2 Reopen Proposal V0.1

## 0. Control

| Field | Value |
|---|---|
| Document ID | `GRADE-M350-D32-COPY-AUDIT-01` |
| Page ID | `GRADE-M350` |
| URL | `/products/m-350/` |
| Date | `2026-09-20` |
| Status | `USER_APPROVED / GATE_0_2_REOPENED / OLD_COPY_NOT_CLEARED_FOR_D32` |
| Scope | Read-only comparison of the approved historical M-350 example copy against the later single-Grade content system and current D32 inputs |
| Development | No D32 implementation authorization is created by this audit |
| User decision | 2026-09-20: `批准。` |

The user selected M-350 as the next page for evaluation and then required a copy review because the current M-350 wording differs materially from the other Grade pages. This audit separates valid product-specific differences from inconsistent content architecture and proposes the minimum Gate reopening required before D32 development.

## 1. Sources inspected

| Source | Authority used in this audit |
|---|---|
| `docs/architecture/PAGE_REGISTRY_V0.2.md` | Page identity, URL, type, priority and primary-keyword ownership |
| `research/keyword/11_page_keyword_master.csv` | Search intent, secondary terms, page role and cannibalization boundary |
| `docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md` plus current SOP addendum | Product-page responsibilities, evidence and CTA boundaries |
| `docs/product-pages/03_Product_Detail_Template_Reuse_Development_SOP_V2.3.md` | Current single-Grade Gate 0-2 and reuse requirements |
| `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` | Current approved Application and Process relationship states |
| `docs/7.27 马来全套TDS +应用指南/TDS_M-350_V3_2023.pdf` | M-350 identity, process, positioning, five TDS applications, four feature directions and 15 technical rows |
| Historical M-350 V0.5 visual/content baseline and D16 payload | Exact wording that previously passed for the old implementation object |
| M-510, M-896, M-895, M-108, M-2377 and other later Grade Gate 1/2 artifacts | Current content-system comparison set |
| `pages/products/PRODUCT-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` | Current D32 domain decision and Products-Hub relationship context |

The historical D16 candidate proves only its original object. It does not establish a current D32 content baseline.

## 2. Executive finding

`REOPEN_GATE_0_TO_2_BEFORE_D32_GATE_3 = RECOMMENDED`

The old M-350 copy should not be sent to D32 as the current implementation source. Its technical table and core M-350 facts remain usable, but its content contract predates the single-Grade workflow applied to the other thirteen products.

The mismatch has four causes:

1. M-350 was created as the shared template example and has no independent current Page Brief or Grade-specific Gate 1 claim audit.
2. Later Grade pages use a buyer-evaluation narrative, while the M-350 Hero repeats source feature language as direct product performance wording.
3. M-350 alone retains a Related Grades module without approved grade-to-grade comparison reasons; later pages omit that module when reasons are absent.
4. The current PRODUCT V0.3 relationship set includes a neutral M-350 to Paper mapping, while the M-350 TDS and old body contain only five TDS-listed directions and no Paper application.

This is a content-baseline issue. It does not require a new URL, keyword owner, page type or visual language.

## 3. Differences that are valid and must remain

The following differences are caused by M-350 evidence and must not be normalized away merely to make every Grade page look identical.

| M-350-specific item | Required treatment |
|---|---|
| `Chloride process / General grade` | Retain as product positioning; do not replace with a narrower coatings-only identity |
| Five TDS-listed directions | Retain Decorative Coatings, Industrial Coatings, Automotive Coatings, Printing Inks and Plastics as distinct source-backed directions |
| Four TDS feature directions | Retain hue/high gloss, hiding power, dispersibility and weather/temperature resistance as evaluation targets with qualification wording |
| 15 technical rows | Preserve all 15 rows and the three-column Standard/Typical structure; do not force the two-column format used by other Grades |
| `V3 2023` visible footer | May remain as source identity because it is visibly printed in the M-350 TDS, subject to the final approved source-label wording |
| Broad application coverage | Retain a multi-application page narrative; do not force M-350 into a single-application story |

## 4. Differences that should be corrected

| Area | Historical M-350 behavior | Current Grade-system behavior | Disposition |
|---|---|---|---|
| Independent control | Template example without a current M-350 Page Brief and Gate 1 audit | One Brief, evidence audit and approved full copy per Grade | Create the missing independent M-350 control set |
| Hero H1 | `M-350 Rutile Titanium Dioxide Pigment` | H1 explains the buyer's model-specific evaluation task | Rewrite around exact M-350 evaluation intent while retaining the primary keyword |
| Hero description | Directly states `excellent`, `strong` and `good` feature claims | Converts source features into factors to test and qualify | Reframe as evaluation directions; keep source meaning |
| Positioning | Short generic description and action-oriented bullet | Explains where the Grade fits, what the buyer should evaluate and what determines final selection | Expand using M-350-specific formulation and process context |
| Application copy | Repeats that an application is listed in the TDS | Gives practical, non-guaranteed testing context for each application | Rewrite all five cards without inventing application performance |
| Evaluation heading | Generic `Evaluation Priorities` | `What to Evaluate in Your Formulation` or an equally buyer-task-specific heading | Align to the current language system |
| Paper relationship | Absent | PRODUCT V0.3 permits a neutral Paper mapping, but the TDS supplies no Paper-specific claim | Keep separate from the five TDS-listed directions; use only a qualified neutral path if the user approves it |
| Related Grades | M-510, M-896 and M-895 shown because they share Coatings | Later pages omit Related Grades without approved comparison/selection reasons | Omit from the revised M-350 body; return buyers to Products/Application owner pages instead |
| Documents | Short selection wording | States what can be requested and that applicability/availability is confirmed after review | Align with later Grade pages and receiver readiness |
| Canonical domain | `https://tio2malaysia.com/products/m-350/` | Latest user-confirmed D32 public domain is `tio2products.com` | Use `https://tio2products.com/products/m-350/` in the new D32 contract |
| Shared UI | Historical D16 Header/Footer and detail implementation | Current D32 shared Header/Footer and WordPress-native architecture | Consume D32 shared owners; do not inherit D16 implementation |

## 5. Paper relationship decision boundary

The approved relationship matrix records:

- Coatings: `VERIFIED_FOR_PUBLIC_MAPPING`
- Plastics: `VERIFIED_FOR_PUBLIC_MAPPING`
- Printing Inks: `VERIFIED_FOR_PUBLIC_MAPPING`
- Paper: `VERIFIED_FOR_PUBLIC_MAPPING`, based on the approved first-party Home baseline
- Masterbatch and Specialty Materials: `NO_PUBLIC_MAPPING`
- Process: `Chloride / VERIFIED_FOR_PUBLIC_MAPPING`

The M-350 TDS itself lists only:

1. High-end decorative paint
2. Ink
3. Automotive paint
4. Industrial paint
5. Plastic

Therefore the revised page must not label Paper as a TDS-listed M-350 application or attach a Paper performance reason. The recommended Buyer Clean treatment is:

- Keep the five TDS-backed items as the main Application Directions.
- Add Paper only as a secondary neutral evaluation path, clearly separated in data provenance and without performance wording; or omit the body mention while retaining the Products-Hub neutral relationship.
- Do not add Paper to Product Schema application claims unless the same approved neutral relationship is visible and the final Schema contract explicitly allows it.

Recommendation: show a short neutral Paper path after the five main cards so the Products-Hub journey does not end in an unexplained mismatch. The exact copy must make clear that suitability still requires buyer testing and must not imply a TDS-listed Paper claim.

## 6. Recommended revised narrative

### 6.1 Page role

M-350 is a general-grade chloride-process rutile titanium dioxide for multi-application evaluation. The primary narrative follows the keyword-master role: decorative, industrial and automotive coatings plus printing inks. Plastics remains a source-backed secondary direction. Paper remains a separate neutral PRODUCT V0.3 relationship.

### 6.2 Module order

1. Shared Header
2. Breadcrumb
3. Product Hero
4. Product Positioning
5. Application Directions
6. What to Evaluate in Your Formulation
7. Typical Technical Data
8. Request M-350 Documents
9. Destination Market Support
10. Request an M-350 Sample
11. Shared Footer

Related Grades, Origin Support, Not Recommended, FAQ and embedded RFQ are omitted from this revision.

### 6.3 Candidate SEO direction

| Field | Candidate direction |
|---|---|
| Title | `M-350 Titanium Dioxide for Coatings and Inks | TiO2 Malaysia` |
| H1 | `M-350 Titanium Dioxide for Multi-Application Evaluation` |
| Meta | `Evaluate M-350 titanium dioxide for coatings, printing inks and plastics. Review application directions, formulation priorities and 15-row technical data.` |
| Canonical | `https://tio2products.com/products/m-350/` |
| Primary keyword | `M-350 titanium dioxide` unchanged |

These values are candidates for the reopened Gate 2 review. They are not approved public output yet.

## 7. Change impact

| Impact area | Effect |
|---|---|
| Page identity / URL | No change |
| Primary keyword / intent owner | No change |
| Product facts | Core TDS facts and all 15 technical rows remain; no new technical performance claim |
| Application relationships | Current V0.3 retained; Paper receives a qualified provenance boundary |
| Content | Hero, Positioning, Application and Evaluation copy rewritten; Documents/Markets/Sample standardized |
| Visual | Existing detail-page component family remains suitable; real revised copy must be checked at 1440/768/390 before reuse is confirmed |
| SEO/GEO/Schema | Title/H1/meta/description and Product description change; technical `additionalProperty` remains source-faithful; canonical domain changes to the latest D32 decision |
| Internal links | Related Grade links removed; Products, approved Application owner routes, Process, Markets and conversion routes remain conditional |
| D32 data | Requires a new M-350 WordPress content contract; old D16 JSON cannot be copied as the D32 source |
| Product Hub | No relationship or order change; first live M-350 URL may be activated only after its D32 Gate 9 result permits it |

## 8. Risks and rollback

| Risk | Control |
|---|---|
| Making all Grade pages sound identical | Preserve M-350 evidence, applications, features and three-column technical table |
| Overstating Paper | Keep Paper neutral and separate from TDS-backed directions |
| Turning source features into guarantees | Use evaluation and buyer-testing language |
| Creating unsupported comparisons through Related Grades | Omit the module until approved comparison reasons exist |
| D32 implementing historical copy during review | Mark the historical V0.5 copy as not cleared for D32 and hand off only the later approved Gate 6 package |
| Losing traceability | Preserve all historical V0.5 and D16 records unchanged |

Rollback means abandoning the candidate rewrite before D32 handoff and retaining the historical files for evidence. It does not mean treating the old copy as the current D32 authority without a new user decision.

## 9. Required synchronized artifacts if approved

1. Create `GRADE-M350` independent Page Brief using the current domain and D32 ownership.
2. Create M-350 Gate 1 evidence/claim audit bound to TDS SHA-256 `881A1F9C6DB4C1FF52702BFF8BE984C8795D2BB7EAAF0AF43521929719522B58` and PRODUCT V0.3.
3. Produce a complete revised Gate 2 Buyer Clean copy and show it directly to the user for content confirmation.
4. Create the one current M-350 Manifest; keep V0.5 and D16 Gate 9 records historical.
5. After Gate 2 approval, test the revised real copy against the shared detail structure in Gate 3 and decide standard versus template-reuse treatment.
6. Only after Gate 3-6 closure and separate Gate 8 authorization may the D32 developer receive the page.

## 10. Proposed decision

`GRADE-M350-D32-COPY-DECISION-01`

Recommended user decision:

> Reopen M-350 Gate 0-2 for D32 content normalization. Preserve the existing M-350 TDS facts, five TDS-listed directions, four evaluation feature directions and 15-row technical table; rewrite the Buyer Clean narrative to the current single-Grade system; keep Paper as a separately qualified neutral relationship; omit Related Grades until comparison reasons are approved; use `tio2products.com` for the new canonical. Do not send the old V0.5 copy to D32 as the current implementation source.

Status: `USER_APPROVED / CLOSED`.

The approval authorizes the independent current Brief, Gate 1 evidence audit and Gate 2 complete-copy preparation described in this document. It does not approve the exact later English full copy, Gate 3+, D32 Gate 8 development, deployment, publication or indexing.
