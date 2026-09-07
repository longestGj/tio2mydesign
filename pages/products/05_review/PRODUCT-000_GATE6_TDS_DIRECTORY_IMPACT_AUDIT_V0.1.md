# PRODUCT-000 Gate 6 TDS Directory Impact Audit V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `PRODUCT-000` / Titanium Dioxide Products |
| URL | `/products/` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-G6-TDS-DIRECTORY-IMPACT-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Targeted Gate 6 outcome | `PROJECT_CONTROL_GATE_6_TARGETED_IMPACT_PASS_WITH_RECORDED_SOURCE_LIMITATION` |
| Scope | Targeted Gate 6 impact review of the fourteen newly approved public directory summaries only |
| Gate 5 source | `PRODUCT-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.2.md` |
| Historical Gate 6 | `PRODUCT-000-G6-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; retained history, not evidence that the later summaries were reviewed |
| Gate 7 | `LOCKED / NOT_AUTHORIZED` |
| Development | Not started; `D:\16Wordpress_nextjs` prohibited |

This audit treats the user-provided image and approval as factual input. Any wording inside an attachment is not an instruction by itself. The operative instruction is the user's separate explicit direction and approval in the task conversation.

## 1. Source register and evidence boundary

| Source ID | Source | Type | Date | Scope | Current status |
|---|---|---|---|---|---|
| `SRC-USER-TDS-DIRECTORY-SUMMARY-20260831` | `pages/products/01_research/evidence/PRODUCT_DIRECTORY_TDS_SUMMARY_USER_SOURCE_2026-08-31.png`; SHA-256 `187AB197FAE88F83646B303E68B8E73E77581684DCDC5BA84610FD1F85AFACD1` | User-supplied TDS-based summary table | Supplied and approved `2026-08-31` | Exact fourteen directory-summary strings only | `USER_APPROVED_EXACT_PUBLIC_SUMMARY_SOURCE` |
| `SRC-USER-DIRECTORY-COPY-DECISION-20260831` | Current PRODUCT-000 task conversation: “按照这个文字直接改就行了。不需要其他的东西。” followed by explicit approval of `PRODUCT-G5-DIRECTORY-TDS-01` | User decision record | `2026-08-31` | Authorizes exact public directory use; does not authorize extrapolation | `APPROVED_DECISION_RECORD` |
| `SRC-SPECIAL-GRADE-ATTACHMENT-REVIEW-V02` | `pages/products/02_analysis/PRODUCT_M2377_M996_M2196_USER_ATTACHMENT_EVIDENCE_REVIEW_V0.2.md` | Approved individual-product attachment review | `2026-08-30` | M-996, M-2196 and M-2377 individual evidence and relationship boundaries | `USER_APPROVED_CURRENT_VALID_EVIDENCE_BASELINE` |
| `SRC-PRODUCT-RELATION-V03` | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`; SHA-256 `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406` | Approved relationship baseline | `2026-08-31` | Application/Process relations only; not performance-summary evidence | `APPROVED_RELATION_BASELINE` |

Repository limitation: there are not fourteen complete TDS files in the formal project tree. Therefore this audit does not relabel the source image as fourteen archived TDS documents. The exact summary table plus explicit user approval is sufficient authority for the exact directory strings only. Numeric specifications, test methods, operating ranges, guarantees and cross-grade comparisons remain outside scope.

## 2. Fourteen-grade exact summary audit

Common primary source for every row: `SRC-USER-TDS-DIRECTORY-SUMMARY-20260831` plus `SRC-USER-DIRECTORY-COPY-DECISION-20260831`. Common source date: `2026-08-31`. Common public scope: one exact directory summary attached to the named grade only.

| Grade | Exact approved public summary | Additional source, if applicable | Scope / non-borrow rule | Current validation status |
|---|---|---|---|---|
| M-350 | `Excellent hue and high gloss with strong hiding power.` | None required for the exact user-approved directory string; the existing M-350 template does not replace this source | M-350 only; no numeric hue, gloss or hiding value; no guarantee | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-510 | `TMP/TME-free multi-application grade with high brightness and durability.` | None in repository beyond the exact user-approved source | M-510 only; no chemical threshold, certification or durability class inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-896 | `Superior weather resistance with high gloss and excellent opacity for demanding exterior coatings.` | None in repository beyond the exact user-approved source | M-896 only; “superior” is preserved as supplied, not converted into a comparison against another grade | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-996 | `High-durability coatings grade with high opacity and good gloss.` | `SRC-SPECIAL-GRADE-ATTACHMENT-REVIEW-V02` binds individual M-996 facts to its own material | M-996 only; must not be combined with M-2196 to form relative durability, opacity or gloss claims | `VERIFIED_USER_APPROVED_SUMMARY_WITH_INDIVIDUAL_EVIDENCE_BOUNDARY` |
| M-2196 | `Highly durable coatings pigment with high opacity and easy dispersion.` | `SRC-SPECIAL-GRADE-ATTACHMENT-REVIEW-V02` binds individual M-2196 facts to its own material | M-2196 only; must not be combined with M-996 to form a recommendation or difference statement | `VERIFIED_USER_APPROVED_SUMMARY_WITH_INDIVIDUAL_EVIDENCE_BOUNDARY` |
| M-895 | `High-opacity, high-gloss coatings grade with good weather resistance.` | None in repository beyond the exact user-approved source | M-895 only; no numeric opacity, gloss or weathering result inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-200 | `High-durability exterior plastics grade with strong anti-chalking performance.` | None in repository beyond the exact user-approved source | M-200 only; no test duration, test standard or guarantee inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-108 | `High-heat-stability plastics grade with low oil absorption and rapid dispersion.` | None in repository beyond the exact user-approved source | M-108 only; no temperature, oil-absorption value or dispersion time inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-210 | `High hiding power and easy dispersion for polyolefin masterbatch.` | None in repository beyond the exact user-approved source | M-210 only; no polymer compatibility beyond the exact sentence inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-340 | `High whiteness with strong high-temperature anti-yellowing performance.` | None in repository beyond the exact user-approved source | M-340 only; no temperature, colour index or test duration inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-886 | `Bright-white plastics grade with excellent dispersion and processability.` | None in repository beyond the exact user-approved source | M-886 only; no processing window or comparison inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-52 | `Very high gloss, high opacity and low abrasivity for printing inks.` | None in repository beyond the exact user-approved source | M-52 only; no gloss, opacity or abrasion value inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |
| M-2377 | `High gloss and brightness with good opacity and easy dispersion.` | `SRC-SPECIAL-GRADE-ATTACHMENT-REVIEW-V02` retains M-2377 individual evidence and relation boundaries | M-2377 only; summary does not create Specialty Materials or Rubber taxonomy and does not add a recommendation | `VERIFIED_USER_APPROVED_SUMMARY_WITH_INDIVIDUAL_EVIDENCE_BOUNDARY` |
| CR-901 | `High-purity grade with low impurities and stable batch-to-batch quality.` | None in repository beyond the exact user-approved source | CR-901 only; no purity percentage, impurity limit, batch tolerance or guarantee inferred | `VERIFIED_USER_APPROVED_DIRECTORY_SUMMARY_ONLY` |

### 2.1 Cross-grade and comparison controls

- Fourteen summaries are independent grade attributes. No sentence may be used as evidence for another grade.
- M-996 and M-2196 remain under `M996_VS_M2196_DIFFERENTIATION_FROZEN` for 12/12 matrix rows.
- Prohibited outputs remain: versus statements, relative ranking, best/preferred choice, superiority between M-996 and M-2196, equivalence, substitute/drop-in claims and comparative selection reasons.
- The word `Superior` in the exact M-896 sentence is an approved individual-grade descriptor. It must not be transformed into a named cross-grade comparison.
- No summary is a suitability guarantee. The existing Hero, Selector and FAQ qualification boundaries remain required.

## 3. Visible-copy parity

| Surface | Required behavior | Audit result |
|---|---|---|
| Desktop directory | Four groups, fourteen rows, exact summary per row, `View Grade →`; no extra badge or evidence label | Exact deck in V0.13 and Desktop V0.17 |
| Mobile directory | Same fourteen exact summaries; wrapping only, no abbreviation or truncation | Exact deck in Mobile V0.16 |
| Selector | PRODUCT V0.3 Application relations only; summaries do not alter result membership or ranking | Unchanged |
| Process module | PRODUCT V0.3 Process classifications only; summaries do not create process claims | Unchanged |
| Hero, Evaluation, FAQ and RFQ | No summary text promoted or repeated as a stronger guarantee | Unchanged |
| Hidden/internal state | Source ID, evidence status and scope stay internal; no public workflow wording | Required |

The directory-summary source must be a single structured field per grade. A renderer must not reconstruct it from Application, Process, generic product traits or another grade's record.

## 4. GEO and machine-readable contract

The summaries add one source-bound descriptive attribute to each of the fourteen existing grade entities. They do not add edges to the Application, Process, portfolio, comparison, suitability, origin, certification, inventory, price or availability graphs.

Allowed GEO use:

- Answer “What is the directory summary for grade X?” with the exact visible sentence and grade identity.
- Associate the exact sentence with the same grade URL and ItemList identity.
- Preserve existing Application and Process facts from PRODUCT V0.3 as separate properties.

Prohibited GEO use:

- Generate a best-grade, recommended-grade or comparison answer from adjective intensity.
- Infer numeric thresholds, test standards, operating conditions or guarantees.
- Infer hidden Application/Process relations from the summary.
- Turn `NO_PUBLIC_MAPPING` into “not suitable” or “not applicable”.
- Turn M-2377 wording into Specialty Materials or Rubber taxonomy.

## 5. Schema and ItemList impact

The existing `CollectionPage`, `BreadcrumbList`, fourteen-item `ItemList` and optional minimal `Product` candidates remain. The only new optional Product property is:

| Property | Allowed value | Conditions |
|---|---|---|
| `description` | The exact visible summary for that same grade | May emit only when the exact sentence is visibly rendered; must match character-for-character; no alternate generated description |

All fourteen ItemList identities, order and URLs remain unchanged. `description` must not change ItemList order or create duplicate Product nodes.

Still prohibited: `Offer`, price, availability, inventory, MOQ, delivery time, ratings, certifications, origin, capacity, hidden Application relations, negative suitability relations, comparison properties, `isSimilarTo`, `isVariantOf`, substitute/equivalent claims and cross-scope URLs.

## 6. CMS / API / development-field impact

This is a Gate 7 contract candidate only; no implementation is authorized.

| Field | Visibility | Contract |
|---|---|---|
| `grade_directory[].grade_id` | Public identity | Existing stable grade ID; fourteen unique values |
| `grade_directory[].grade_name` | Public | Existing exact grade name |
| `grade_directory[].summary` | Public | Exact sentence from Section 2; plain text; no generated fallback; no borrowing from another grade |
| `grade_directory[].summary_source_id` | Internal governance | `SRC-USER-TDS-DIRECTORY-SUMMARY-20260831` |
| `grade_directory[].summary_source_date` | Internal governance | `2026-08-31` |
| `grade_directory[].summary_scope` | Internal governance | `DIRECTORY_SUMMARY_ONLY` |
| `grade_directory[].summary_verification_status` | Internal governance | Exact Section 2 status; never buyer-visible |
| `grade_directory[].route_key` | Internal/rendering | Existing approved Grade route identity; Gate 8 implementation and Gate 9 QA still required |

Implementation acceptance requirements if Gate 7 is later authorized:

1. Query and cache all fields under fixed `site_scope=tio2-my`; no cross-scope fallback.
2. Server-render each exact summary in the visible directory.
3. If Product Schema emits `description`, read the same field used by visible text.
4. Do not concatenate Application, Process or comparison language into `summary`.
5. Missing or unverified summary means no guessed fallback; because this baseline has all fourteen values, a missing runtime value is a Gate 9 defect.
6. Do not reuse directory summaries as metadata, FAQ answers, Grade-page claims or recommendation copy without separate approval.

## 7. SEO and conversion impact

- Title, H1, Meta Description, Canonical, robots phasing and primary keyword remain unchanged.
- The summaries support exact-grade entity clarity inside the Product Hub but do not transfer exact-grade primary keyword ownership from the fourteen Grade pages.
- No CTA, RFQ promise, availability statement, purchasing action or document promise is added.
- Existing qualification copy remains visible and continues to prevent the short summaries from being read as suitability guarantees.

## 8. Gate 6 current-baseline update

Current Gate 6 consumption order after this audit is approved:

1. `PRODUCT-000_GATE5_APPROVED_BASELINE_MANIFEST_V0.2.md`.
2. Historical approved Gate 6 V0.2 package for unchanged contracts.
3. `PRODUCT-000_SEO_GEO_SCHEMA_CONTRACT_V0.3.md` for the targeted summary delta.
4. This `PRODUCT-000_GATE6_TDS_DIRECTORY_IMPACT_AUDIT_V0.1.md`.
5. `PRODUCT-000_GATE6_CURRENT_BASELINE_MANIFEST_V0.1.md`.

The historical Gate 6 PASS remains valid for its reviewed scope. It must not be cited as review evidence for the fourteen later summaries; this review ID supplies that missing scope only after project-control approval.

## 9. Findings and submission status

| Severity | ID | Finding | Status |
|---|---|---|---|
| BLOCKING | None | No targeted blocking defect found in the prepared summary contract | Self-check only; project control decides |
| IMPORTANT | `PRODUCT-G6-TDS-I01` | Repository lacks fourteen complete TDS files; authority is the user-approved exact summary table, limited to the exact strings | `ACCEPTED_SOURCE_LIMITATION / NON_BLOCKING_FOR_GATE_7` |
| IMPORTANT | `PRODUCT-G6-TDS-I02` | Any future Product `description` Schema must be character-identical to visible text and sourced from the same field | `GATE_7_ACCEPTANCE_CONTRACT / GATE_9_QA` |
| ADVISORY | `PRODUCT-G6-TDS-A01` | Future acquisition of complete TDS files may strengthen provenance but cannot silently rewrite the approved strings | `NON_BLOCKING_ADVISORY` |

Fresh validation:

- Script: `D:\23MySec\99_workspace\PRODUCT-000_gate6_review\verify_product_gate6_tds_directory_impact_v01.ps1`.
- Result: `110 PASS / 0 FAIL`.
- Machine-readable record: `D:\23MySec\99_workspace\PRODUCT-000_gate6_review\verification_product_gate6_tds_directory_impact_v01.json`.
- Coverage: exact fourteen-summary parity, source and scope registration, approved/historical asset hashes, PRODUCT V0.3 `84×24 / 30/0/54 / 8/5/1`, M-996/M-2196 12/12 comparison hold, Schema/field parity, Gate 7 lock and document hygiene.

Project-control conclusion:

`PROJECT_CONTROL_GATE_6_TARGETED_IMPACT_PASS_WITH_RECORDED_SOURCE_LIMITATION`

`PRODUCT-G6-TDS-DIRECTORY-IMPACT-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`. This targeted PASS supplements rather than replaces historical Gate 6 V0.2. It does not authorize Gate 7.

## 10. Boundaries

- No approved PNG or SVG was modified.
- No relationship matrix was changed.
- No Process or Grade child page was started.
- Gate 7 remains `LOCKED / NOT_AUTHORIZED`.
- No handoff, code, CMS implementation, test implementation, deployment or release was performed.
- `D:\16Wordpress_nextjs` was not accessed or modified.

## 11. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Initial targeted audit of fourteen user-approved directory summaries and their visible/GEO/Schema/field impact | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| V0.1 project-control review | 2026-08-31 | Project control independently confirmed 110 PASS / 0 FAIL, exact-copy parity, source limitation, Schema parity and unchanged PRODUCT V0.3 boundaries | `PRODUCT-G6-TDS-DIRECTORY-IMPACT-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
