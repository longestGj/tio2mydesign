# APP-000 PRODUCT V0.3 Relationship Impact Audit V0.1

## 0. Document control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| Page name | Applications |
| URL | `/applications/` |
| Page type | Navigation hub |
| Primary keyword | `NO_PRIMARY_KEYWORD` |
| Date | 2026-08-30 |
| Scope | Relationship-impact revision inside the existing APP-000 design only |
| Review ID | `APP-000-PRODUCT-V03-REL-01` |
| Status | `INCORPORATED_INTO_V0.6_FOR_PROJECT_CONTROL_REVIEW` |
| Page lifecycle | `DESIGN_IN_REVIEW`; unchanged |
| Sole current relationship source | `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` |
| Explicitly excluded | Gate 6/7, Application child pages, code, CMS, development, handoff, deployment and publication |

PRODUCT V0.3 supersedes V0.2.1 for current relationship decisions. V0.2.1 and APP-000's earlier Gate records remain immutable history; they are not parallel current inputs.

## 1. Authority and evidence

The following user-approved PRODUCT V0.3 sources govern this impact revision:

1. `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`;
2. `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md`;
3. `pages/products/01_research/PRODUCT-000_GATE1_EVIDENCE_AUDIT_V0.3.md`;
4. `pages/products/02_analysis/PRODUCT-000_RELATION_DEPENDENCY_AUDIT_V0.3.md`.

The third companion audit is in `pages/products/02_analysis/`, not `01_research`; this audit uses its actual project path.

## 2. Independent matrix reproduction

| Check | Reproduced result |
|---|---:|
| Grade × approved Application taxonomy rows | 84 |
| Unique relation IDs | 84 / 84 |
| Unique Grade + Application pairs | 84 / 84 |
| `VERIFIED_FOR_PUBLIC_MAPPING` | 30 |
| `CONFLICT_HOLD` | 0 |
| `NO_PUBLIC_MAPPING` | 54 |
| Grade-level Process classifications | 14 |
| Unresolved Process classifications | 0 |

Application distribution:

| Existing Application collection | V0.2.1 | V0.3 | Authorized delta |
|---|---:|---:|---|
| Coatings | 7 | 8 | Add M-2377 neutral mapping |
| Plastics | 7 | 8 | Add M-2377 neutral mapping |
| Masterbatch | 6 | 7 | Add M-2377 neutral mapping |
| Printing Inks | 3 | 4 | Add M-2377 neutral mapping |
| Paper | 1 | 2 | Add M-2377 neutral mapping |
| Specialty Materials | 1 | 1 | No change; CR-901 only |

Process distribution:

| Process | V0.2.1 | V0.3 | Authorized delta |
|---|---:|---:|---|
| Chloride | 8 | 8 | No change |
| Sulfate | 4 | 5 | Add M-2377 neutral classification |
| Vapor-phase oxidation | 1 | 1 | No change; CR-901 only |

## 3. M-2377 rendering contract

| Relation | V0.3 status | APP-000 behavior |
|---|---|---|
| Coatings | `VERIFIED_FOR_PUBLIC_MAPPING` | Render once as equal-weight `Grade to Review` |
| Plastics | `VERIFIED_FOR_PUBLIC_MAPPING` | Render once as equal-weight `Grade to Review` |
| Masterbatch | `VERIFIED_FOR_PUBLIC_MAPPING` | Render once as equal-weight `Grade to Review` |
| Printing Inks | `VERIFIED_FOR_PUBLIC_MAPPING` | Render once as equal-weight `Grade to Review` |
| Paper | `VERIFIED_FOR_PUBLIC_MAPPING` | Render once as equal-weight `Grade to Review` |
| Specialty Materials | `NO_PUBLIC_MAPPING` | `DO_NOT_RENDER`; no negative suitability wording |
| Sulfate | `VERIFIED_FOR_PUBLIC_MAPPING` | Render once as neutral Process classification |

`R-M2377-PROCESS`, `R-M2377-APPLICATION` and `R-M2377-DOCUMENT-FRESHNESS` are resolved by the approved PRODUCT V0.3 evidence package. The legacy aggregate `R-M2377-TDS` is `RESOLVED / SUPERSEDED_BY_SPLIT_GATES` and must not remain an active APP-000 hard gate.

## 4. Frozen and non-rendering relations

- Rubber is an evidence-registry term only. It creates no APP-000 collection, card, navigation item, URL, Page ID, primary keyword, Schema item or child-page artifact.
- M-996 and M-2196 may retain their individual neutral Coatings/Sulfate facts. `M996_VS_M2196_DIFFERENTIATION_FROZEN` remains `OPEN`.
- No difference, rank, superiority, equivalence, replacement, substitution or comparative selection rationale is authorized between M-996 and M-2196.
- `NO_PUBLIC_MAPPING` means no approved positive public relationship. It is not “not suitable”, “not applicable”, “not recommended” or a disabled state.
- Grade order remains a stable directory presentation and does not indicate preference or performance.

## 5. APP-000 boundaries reproduced

- Page identity remains `APP-000` / `/applications/` / Navigation hub / `NO_PRIMARY_KEYWORD`.
- Coatings, Plastics, Masterbatch, Printing Inks and Paper child-page primary-keyword ownership remains unchanged.
- Specialty Materials remains a selector taxonomy collection and does not become a sixth Application child page.
- Header, Mobile Menu, Footer and fixed RFQ remain governed by the approved V0.5 fixed-RFQ visual baseline.
- No unrelated APP-000 Buyer Clean copy, CTA contract, route state, SEO/GEO/Schema boundary or `site_scope=tio2-my` rule is changed.

## 6. Relationship-impact disposition

| Item | Status |
|---|---|
| Matrix and companion audits read | PASS |
| 84-row uniqueness and 30/0/54 counts reproduced | PASS |
| 8/8/7/4/2/1 Application counts reproduced | PASS |
| 8/5/1 Process counts reproduced | PASS |
| M-2377 five Application + Sulfate relations authorized | PASS |
| M-2377 Specialty Materials hidden | PASS |
| Rubber taxonomy/page/URL/keyword creation | NOT CREATED |
| M-996/M-2196 comparison freeze | PRESERVED / OPEN |
| Review disposition | `APP-000-PRODUCT-V03-REL-01=INCORPORATED_INTO_V0.6`; review through `APP-000-G5-V06-UNIFIED-01` |

This self-check is incorporated into the V0.6 review package. It is not project-control approval and does not advance any Gate.
