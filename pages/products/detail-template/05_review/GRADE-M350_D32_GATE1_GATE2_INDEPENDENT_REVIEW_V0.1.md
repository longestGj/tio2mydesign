# GRADE-M350 D32 Gate 1 / Gate 2 Independent Targeted Review V0.1

## 1. Control

| Field | Value |
|---|---|
| Review ID | `GRADE-M350-D32-G12-IVR-01` |
| Page ID | `GRADE-M350` |
| Page | M-350 Titanium Dioxide |
| Reviewer | Codex independent reviewer `/root/m350_gate1_gate2_review` |
| Review mode | `INDEPENDENT_TARGETED_RECHECK / SOURCE_READ_ONLY` |
| Date | `2026-09-20` |
| Gate 1 verdict | `INDEPENDENT_REVIEW_PASS / RECOMMEND_PROJECT_CONTROL_CLOSURE` |
| Gate 2 verdict | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Remaining findings | `0 Blocker / 0 Important / 0 Minor` |

This review does not edit or approve any reviewed source. It closes or reopens review findings only. It does not replace the user's exact-copy approval, close Gate 2, authorize Gate 3, authorize a D32 development handoff, or authorize deployment, publication, sitemap inclusion or indexing.

## 2. Exact review set

The reviewer read the following six files in full and bound this result to their current byte identity:

| File | Bytes | SHA-256 |
|---|---:|---|
| `pages/products/detail-template/02_analysis/GRADE-M350_D32_COPY_PARITY_AUDIT_AND_GATE2_REOPEN_PROPOSAL_V0.1.md` | 13586 | `A9EC364E9A0BC0D6E8A54E29895AEA633462D7DC0640E38F5C4C7CA53925FDCB` |
| `docs/page-briefs/GRADE-M350_M350_TITANIUM_DIOXIDE_BRIEF_V0.1.md` | 17413 | `6207807E60EA0CBB2A3B52CE62C92F05F76EC380C35016C4D5732F7EFAA9EE40` |
| `pages/products/detail-template/02_analysis/GRADE-M350_GATE1_EVIDENCE_AND_CLAIM_AUDIT_V0.1.md` | 11833 | `77827325C031462DED58BB3933FD6B8973B22F7E949115F4566118FCB90DD6F1` |
| `pages/products/detail-template/04_planning/GRADE-M350_GATE2_CONTENT_SKELETON_V0.1.md` | 4348 | `D2383AD2567AEBB081AB246B8FF793EF71BC644EC10BC1154EC58F7A25A79F06` |
| `pages/products/detail-template/04_planning/GRADE-M350_GATE2_FULL_COPY_V0.1.md` | 13987 | `8D44B5C91129229CB69E1237CEF24EF01ACF51951D48F2340F3F64FA64FD707A` |
| `pages/products/detail-template/GRADE-M350_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` | 6165 | `8FBB3ED7C09A176A8C7957C966977B4A9F9BA29D45640496E935D63AD5A43DA7` |

The review also checked the current indexed Grade workflow controls that materially determine the result: `docs/product-pages/03_Product_Detail_Template_Reuse_Development_SOP_V2.3.md` and `docs/product-pages/04_Product_Detail_Single_Grade_Operational_Checklist_V1.3.md`.

## 3. Targeted recheck of the six prior findings

| ID | Prior level | Status | Recheck evidence and reason |
|---|---|---|---|
| `M350-G12-F01` | Important | `CLOSED` | The public copy now identifies the source as `V3 2023` in the Hero, Hero data line, Positioning, Paper boundary and Technical Data source note. The Documents module asks the team to confirm the applicable revision instead of presenting the referenced source as the current TDS. No `current TDS` or `current Technical Data Sheet` wording remains in the Buyer Clean section. |
| `M350-G12-F02` | Important | `CLOSED` | `GRADE-M350_GATE2_FULL_COPY_V0.1.md` §2 is now a clean public-copy block. Routing keys, prefill values, conditional module behavior, page-end behavior and Schema instructions are separated into §3, which expressly says that it does not render as public copy. A regression scan found no `source_page`, `required prefill`, `page ends`, `appears only` or `Primary CTA:` text in §2. |
| `M350-G12-F03` | Important | `CLOSED` | The copy audit §6.3, Brief §9, Skeleton §1 and Full Copy §1 all use the same route-independent Meta Description: `Evaluate M-350 titanium dioxide for coatings, printing inks and plastics. Review application directions, formulation priorities and 15-row technical data.` The Meta no longer promises access to a document, sample or RFQ receiver. |
| `M350-G12-F04` | Important | `CLOSED` | `GRADE-M350_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md` now exists as the single current D32-stage Manifest. It distinguishes Gate 0–2 planning from D32 implementation, records the exact candidate hashes, keeps Gate 3+ unauthorized, and identifies the historical D16 material as historical evidence only. |
| `M350-G12-F05` | Minor | `CLOSED` | The Sample module now asks for application, destination and test objective, plus only non-confidential material-system or processing context that may help the review. This removes the earlier implication that a buyer must provide confidential formulation detail and matches the internal receiver contract's optional-context boundary. |
| `M350-G12-F06` | Minor | `CLOSED` | The Industrial Coatings sentence now asks the buyer to test using the intended substrate, curing or drying process and service conditions. The earlier unnatural `under the substrate` construction is absent and the sentence does not add a performance claim. |

All six prior findings are closed. F07 below was newly detected during this recheck and closed by a bounded correction before the final verdict. It is not evidence that the author introduced it while repairing F01–F06.

## 4. Additional finding detected and closed during the recheck

### `M350-G12-F07` — Important — `CLOSED` — Three Hero CTAs exceeded the current single-Grade contract

**Location**

- Initial recheck candidate, `GRADE-M350_GATE2_CONTENT_SKELETON_V0.1.md` §3 Hero row: `Quote/Sample/Document actions`.
- Initial recheck candidate, `GRADE-M350_GATE2_FULL_COPY_V0.1.md` §2.1 action row: `Request an M-350 Quote · Request an M-350 Sample · Request M-350 Documents`.
- Governing controls: `docs/product-pages/03_Product_Detail_Template_Reuse_Development_SOP_V2.3.md` §8 requires the existing Hero topology and a maximum of two Hero CTAs; `docs/product-pages/04_Product_Detail_Single_Grade_Operational_Checklist_V1.3.md` §C repeats the same Gate 2 requirement.

**Reason**

The candidate renders three simultaneous Hero actions when all receivers are ready. Conditional fail-closed behavior does not cure the all-ready state. This breaks the current single-Grade content contract and diverges from the later Grade-page language/interaction pattern in which the Hero has Quote + Sample and Documents/TDS stays in the dedicated Documents module.

**Applied minimum correction**

The revised Skeleton Hero row now states `Quote and Sample actions` and `Maximum two Hero CTAs`. The revised Full Copy Hero contains only `Request an M-350 Quote` and `Request an M-350 Sample`. `Request the M-350 TDS` and `Request M-350 Documents` remain in the existing Technical Data/Documents area. The internal delivery table now assigns the Hero only to Quote and Sample and keeps TDS/document actions under `CONV-DOC`. No M-350 fact, module order, Meta Description, document-request wording or receiver destination changed.

**Closure verification**

The reviewer read back the complete revised Skeleton and Full Copy, verified the two Hero action labels, verified both document actions in the body, and matched their byte counts and SHA-256 values to the refreshed Manifest rows. F07 is closed. No new full Gate 1 review was required.

## 5. Gate 1 conclusion

Gate 1 passes independent review.

- `GAP_RESEARCH` is the correct Gate 1 path. The existing Grade identity, keyword role, M-350 TDS and approved Product relationship matrix are reusable; the work correctly limits new research to D32 copy parity, Paper provenance, independent M-350 control and the approved domain change.
- The source is identified as the M-350 Technical Data Sheet `V3 2023`, not as an unverified current revision. Its registered SHA-256 remains `881A1F9C6DB4C1FF52702BFF8BE984C8795D2BB7EAAF0AF43521929719522B58`.
- The Full Copy reproduces all 15 Gate 1 Standard/Typical rows exactly, including column separation, inequalities, units and dash semantics, followed by the non-specification statement.
- PRODUCT V0.3 supports only a neutral M-350-to-Paper relationship. The audit and public copy keep Paper outside the five TDS-backed directions, expressly state that V3 2023 has no Paper-specific performance detail, and do not create a hidden Paper performance property.
- The current canonical is consistently `https://tio2products.com/products/m-350/`. Related Grades, unsupported comparison, product-specific origin and operational promises remain omitted.

The Controller may record `PROJECT_CONTROL_REVIEW_PASS` and close Gate 1 under the applicable authority after adding this review record to the current control chain. F07 is a Gate 2 CTA-placement issue and does not invalidate the Gate 1 evidence or claim decisions.

## 6. Gate 2 Buyer Review

### 6.1 Buyer Clean and source fidelity

The public copy is readable and technically restrained. It gives a buyer a clear sequence: identify the Grade, understand its position, inspect five source-backed application directions, see the separately qualified Paper path, review formulation priorities and exact technical data, then request documents, market support or a sample. M-350-specific value is carried by the five named directions, four evaluation themes and the 15-row table rather than by generic procurement language.

The action with the highest claim risk is the Documents request. Its revised wording says the team will confirm which revision and additional material are applicable and available; it does not promise that every requested document exists or applies. The action with the highest buyer workload is the Sample request. It asks for application, destination and test objective and makes additional material-system or processing context optional and non-confidential, so a buyer with incomplete information can still proceed.

The weakest sentence for scanability is the second Positioning paragraph beginning `Use M-350's listed features and technical data...` because it carries a long list of selection variables. It remains understandable, technically useful and free of unsupported claims, so it does not require revision in Gate 2. Gate 4 may solve its visual wrapping without changing its meaning.

### 6.2 SEO, GEO, Schema and conditional rendering

- Title, Meta, canonical and breadcrumb are page-specific and use the approved `tio2products.com` domain.
- The Meta remains accurate when any contextual receiver is unavailable.
- Application, market, RFQ, sample and document actions fail closed at the affected action or module, without invented URLs or fallback to another site scope.
- Product Schema is limited to visible identity and the same visible technical rows; Paper does not become a performance property or TDS-derived claim.
- Related Grades is fully omitted rather than left as an empty heading, navigation item or spacing shell.
- The copy uses the same buyer language as the later Grade family: `evaluate`, `review`, `confirm`, `request` and buyer-side testing, without guarantee, ranking, equivalence or replacement wording.

### 6.3 Gate 2 disposition

All Buyer Review findings are closed on the exact candidate bound in §2. The Gate 2 review conclusion is `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`.

The user must still be shown the exact English public copy, module order and two-action Hero result and approve them before Gate 2 can close. Neither this review nor that later Gate 2 approval authorizes Gate 3, D32 implementation, deployment, publication or indexing.

## 7. Review boundary

This is a content/evidence/Buyer Review of the six exact files in §2. It is not a visual design review, responsive implementation test, runtime route test, form-receiver test, Schema-render test or deployment acceptance. Those checks remain with their authorized later Gates. No source return remains from this review.
