# CONV-SAMPLE Current Gate 1–5 Baseline Manifest V0.5

## 0. Manifest Control

| Field | Value |
|---|---|
| Manifest ID | `CONV-SAMPLE-CURRENT-G1-5-BASELINE-05` |
| Review ID | `CONV-SAMPLE-G5-RR-05` |
| Page ID | `CONV-SAMPLE` |
| URL | `/request-sample/` |
| Page type | Sample conversion page |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Mapping status | `PLANNED_CONVERSION` |
| Verification status | `QUALITATIVE_KEYWORD_EVIDENCE` |
| Manifest status | `APPROVED_GATE_5_BASELINE / ACTIVE` |
| Effective for review | 2026-09-03 |
| Next Gate authorization | `NONE` |

This is the only current Gate 1–5 baseline Manifest for CONV-SAMPLE. It records project-control pass for Review ID `CONV-SAMPLE-G5-RR-05` and the user's explicit Gate 5 approval on 2026-09-03. Gate 5 is `APPROVED / CLOSED`; this does not authorize Gate 6, Gate 7, development or release.

## 1. Authority and Consumption Order

Consume the following in order:

1. Current explicit user decisions and the project-control-directed input for Review ID `CONV-SAMPLE-G5-RR-05`.
2. Root `AGENTS.md` and `docs/architecture/PAGE_GATE_1_5_STANDARD_V1.0.md`.
3. This current Manifest.
4. Current Page Brief.
5. V0.5 full visual specification and V0.5 audit.
6. Gate 2 content architecture, Gate 3 wireframe and Gate 4 visual direction only where V0.5 does not replace their privacy, destination-field, copy, module-order or responsive evidence.
7. Shared Global Chrome and production Logo authorities.
8. Historical V0.1–V0.4 files for traceability only; they cannot override V0.5.

## 2. Current Gate 1–5 Authority Files

| Gate | Current file | Bytes | SHA-256 | Role/status |
|---|---|---:|---|---|
| Gate 0/1 | `docs/page-briefs/CONV-SAMPLE_REQUEST_SAMPLE_BRIEF_V0.1.md` | 35,877 | `d617b69e6c4ac809ddf15a030e9059d339e388a63a73b0636b4c2abb6c143eb5` | Current Brief; contains identity, intent, evidence and checkpoints; Gate 5 approved and closed |
| Gate 2 | `pages/conversion/request-sample/04_planning/CONV-SAMPLE_CONTENT_ARCHITECTURE_V0.1.md` | 25,628 | `2ef18173e589cacbf03d021ce4038bcbe5810fa76975599352d91e17abdbf534` | Retained except V0.5 explicit copy/field overrides |
| Gate 3 | `pages/conversion/request-sample/04_planning/wireframes/CONV-SAMPLE_WIREFRAME_SPEC_V0.1.md` | 29,157 | `4877691b24005f04577a700de2db6b4b9f8be82636316bd20695b89963b5e831` | Retained except V0.5 module order and 768px complete evidence |
| Gate 4 | `pages/conversion/request-sample/04_planning/visual-directions/CONV-SAMPLE_VISUAL_DIRECTION_V0.1.md` | 16,950 | `e67ed1fb5b3ff52127a5534009665502b6f62ba60248dbbd99e02fc570eeeaf1` | Current visual language; no brand-system change |
| Gate 5 | `pages/conversion/request-sample/04_planning/visual-designs/CONV-SAMPLE_FULL_VISUAL_DESIGN_V0.5.md` | 7,084 | `5640a0dfee03c70c3e2fd88ac7b51774ffb85372039857655bf10fcbae9bea28` | Current approved full visual specification; `APPROVED / CLOSED` |
| Gate 5 audit | `pages/conversion/request-sample/02_analysis/CONV-SAMPLE_GATE5_DIRECTED_REVISION_AUDIT_V0.5.md` | 5,084 | `19414b204ea58ae3c0a1b2e5eb6e30f391451e13b7bcd4ee8d77f5e19fabd536` | Current approved validation record; `APPROVED / CLOSED` |

If any listed file changes, its row and hash must be refreshed in a new Manifest version before it can become the current baseline.

## 3. Current Formal Visual Assets

Mobile assets are exported at 2× physical width and registered as `390px logical @2x`.

| Asset | Logical / physical dimensions | Bytes | SHA-256 |
|---|---:|---:|---|
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_PREFILLED_BUYER_CLEAN_V0.5.png` | 1440×4397 | 310,091 | `817723193b69a5dc402930fe35286f1185c1862de509dad7b48ac04c665b13f0` |
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_SUCCESS_BUYER_CLEAN_V0.5.png` | 1440×2391 | 183,397 | `e18983ca927a209a3c5a533c1a9d44b1ec66a87254fc98f3cd261e53c303f960` |
| `assets/CONV-SAMPLE_G5_DESKTOP_1440_UNPREFILLED_BUYER_CLEAN_V0.5.png` | 1440×4100 | 266,340 | `481eeeeb547a44c6e51c39938425080cba5445c6c056c3eafa5f439a7a16bfd8` |
| `assets/CONV-SAMPLE_G5_TABLET_768_UNPREFILLED_BUYER_CLEAN_V0.5.png` | 768×4802 | 233,355 | `5f620fccb5ee804780849e02d7ec30973b413a96ba39f9cafa465278e2784e01` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_UNPREFILLED_BUYER_CLEAN_V0.5.png` | 390 logical / 780×11004 physical | 748,124 | `f1ecf168efdb61438f0d764eaef505211889fdd088010dcb3b0885ff8b0e6a51` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_PREFILLED_BUYER_CLEAN_V0.5.png` | 390 logical / 780×12464 physical | 944,148 | `fa8f1a34974bdc5d26863d69b2dea579c6e84045e35cec818571452dda4e98f0` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_UNKNOWN_GRADE_V0.5.png` | 390 logical / 780×11004 physical | 748,557 | `94b24051553366345a694e632cbeed15ea8b953cd1de2051b909ff61dbd24437` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_OTHER_APPLICATION_V0.5.png` | 390 logical / 780×11304 physical | 773,644 | `43d61e3adfcea18f0b3783b0b143cd478001df6bcca9091c6ef19caba38a24d8` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_VALIDATION_FOCUS_ERROR_V0.5.png` | 390 logical / 780×11942 physical | 835,301 | `92592c6f21b98197351d14dc4ab4f87d493606f331e9d84606abe88cfa3be46f` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUBMITTING_V0.5.png` | 390 logical / 780×11004 physical | 834,978 | `9f54e52bcbd42b43281b031265245addfd13fb24067d0c63550a9c3966c6439d` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUBMISSION_FAILURE_V0.5.png` | 390 logical / 780×11440 physical | 899,919 | `0520d4c088a976ae63801d6682e4fe0c4c7969243197f766238d867b8beb1372` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SUCCESS_V0.5.png` | 390 logical / 780×6400 physical | 476,990 | `9dbb007c0ded1f6bb67303ebaf783a2b1a8745d8028387ab26b952d68ab55c52` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_SERVICE_UNAVAILABLE_V0.5.png` | 390 logical / 780×4942 physical | 349,989 | `01aa3fb397ace8d174c85f0b337010d49e4ef24056fb77458b513f16aeaa2015` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_MENU_OPEN_V0.5.png` | 390×720 logical / 780×1440 physical | 46,496 | `ef552150abf8bb5ef590ac635c16883c6999f8722976f11773d4c9a9f3f9f8c3` |
| `assets/CONV-SAMPLE_G5_DESKTOP_INTERACTION_STATE_BOARD_V0.5.png` | 1440×1963 | 193,902 | `4b097be4a99b41e9fa0a4f0a52876220a7eeb70371cb6665c5e2d8e323d987ea` |
| `assets/CONV-SAMPLE_G5_MOBILE_390_INTERACTION_STATE_BOARD_V0.5.png` | 390 logical / 780×6656 physical | 604,990 | `3fd151b3ce6f614acbf97ab510c4344d2021e12754b166dc900b3ed1c330f942` |

All asset paths are relative to `pages/conversion/request-sample/04_planning/visual-designs/`.

## 4. Shared Global Chrome Authority

| Authority | Version/status | Bytes | SHA-256 |
|---|---|---:|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | Current approved shared specification | 7,235 | `cc236f47018a68771856fdbaf5553517f63959774e0e8819130e66e2b1049f18` |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` | Current shared cross-page state registry | 3,237 | `ea3ccc7d90fd6ebb28be562c9fabfdd4663d360aa18e66590a6297fb14f697b7` |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PCR_01_CLOSURE_V0.1.md` | V0.5 project-control closure record | 2,511 | `a02c4be68a98c8b178679c9065dc7508954cfb978b6cf89f83c75a0d0431027e` |
| `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | Approved production Logo Manifest | 8,090 | `81b73a5262269f618e8fb0667c9345279449a1bcb71647422b6a1d3f8ebfe894` |

Required asset keys:

- `brand_logo_primary_horizontal` — Header on light surfaces;
- `brand_logo_reverse_monochrome` — Footer on Deep Navy.

CONV-SAMPLE current navigation key is `NONE`. The page does not own or modify shared Chrome.

## 5. Approved and Directed Decisions

| Date | Decision/source | Scope | Current status |
|---|---|---|---|
| 2026-08-30 | User approved PRODUCT V0.3 | Product/Application/Process relationship truth | Approved shared input; consumed without expansion |
| 2026-09-01 | User authorized Gate 5 execution | Permission to create Gate 5 visual evidence | Execution authorization only; not outcome approval |
| 2026-09-01 | User requested removal of the Desktop right empty rail | Full-width single-column form region | Incorporated in V0.3 and retained |
| 2026-09-01 | User requested position adjustment | `Sample Request → Human Review → FAQ` | Incorporated in V0.4 and retained |
| 2026-09-03 | Project-control Review `CONV-SAMPLE-G5-RR-05` | Privacy notice, 768px proof, destination text input, reader-first copy, Manifest | `PROJECT_CONTROL_REVIEW_PASS` |
| 2026-09-03 | User explicitly approved Request a Sample V0.5 Gate 5 in the current project-control dialogue | Complete V0.5 Gate 5 baseline | `APPROVED / CLOSED` |

User approval of the complete Gate 5 V0.5 result is recorded above. It applies to Gate 5 only and does not authorize any later Gate or implementation activity.

## 6. Superseded and Historical Versions

| Version | Status | Retention |
|---|---|---|
| V0.1 | `HISTORICAL` | Original Gate 5 review package and assets retained |
| V0.2 | `SUPERSEDED / HISTORICAL` | Buyer-clean cleanup version retained |
| V0.3 | `SUPERSEDED / HISTORICAL` | Desktop single-column, review-first version retained |
| V0.4 | `SUPERSEDED / HISTORICAL` | Form-first version without final privacy/Tablet corrections retained |
| V0.5 | `APPROVED_GATE_5_BASELINE / ACTIVE` | Only current approved Gate 5 baseline; Gate 5 closed |

Historical specifications remain in `visual-designs/`; historical PNGs remain in `visual-designs/assets/`. They must not control current review or later handoff.

## 7. Open External Dependencies and Release Controls

| Stage | Required item | Current treatment |
|---|---|---|
| Gate 8 | Implement `/privacy-policy/` and form receiver/route/persistence/idempotency/fallback | External development dependency; no implementation in this project |
| Gate 9 | Read-only verify link accessibility, exact privacy copy, positive receiver acknowledgement, retained failure values, duplicate protection and fallback | Required QA before release |
| Gate 10 | Confirm all dependencies are live and consistent; obtain explicit release authorization | Missing dependency blocks release, not Gate 5 visual review |

Canonical, robots and sitemap activation also require their normal later approval and release controls. No implementation, deployment or indexing action has occurred.

## 8. Fresh Validation Snapshot

- 16/16 formal V0.5 render jobs passed after a complete rerun.
- 1440px scroll width = 1440px.
- 768px scroll width = 768px; responsive Header = 64px; minimum target = 44px.
- 390px scroll width = 390px; Mobile Header = 64px; minimum target = 44px.
- Exact Hero/privacy/submit/success/destination strings passed runtime assertions.
- Privacy href is `/privacy-policy/`; privacy checkbox count is zero.
- Buyer-facing internal-term count is zero.
- Detailed disclaimer blocks outside FAQ count is zero.
- Visible current-label and visible `aria-current=page` counts are zero; RFQ remains visible.

This validation proves the planning artifacts only. It is not a production implementation test.

## 9. Supplementary Design Workspace

Superdesign project `c659cf18-2405-4e15-9eff-40dcccc7ce8a`, draft `085466ef-426d-4ad5-a004-a46cc80ad577`, was used as a supplementary visual consistency check. It is not a project authority and cannot override the local files or hashes in this Manifest.

## 10. Stop Point

Gate 5 V0.5 is `APPROVED / CLOSED`, and this Manifest is `APPROVED_GATE_5_BASELINE / ACTIVE`. Work stops here: Gate 6, Gate 7, development, handoff, deployment, publication, DNS and indexing are not authorized.
