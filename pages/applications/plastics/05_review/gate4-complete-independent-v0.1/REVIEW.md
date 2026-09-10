# APP-PLAS Gate 4 independent project-control review V0.1

Date: 2026-09-07  
Reviewer role: independent project-control reviewer; not the APP-PLAS Gate 4 executor  
Workset: `APP-PLAS-G4-COMPLETE-20260907-01`  
Freeze: `APP-PLAS-G4-FREEZE-20260907-01`  
Status: **PROJECT_CONTROL_REVIEW_REQUIRED_FINDING_OPEN**  
Required Findings: **1**  
Gate 4 decision: **NO PASS while APP-PLAS-G4-R01 remains open**

## Reviewed frozen identity

| Object | Bytes | SHA-256 |
|---|---:|---|
| Candidate HTML | 43,487 | `fd61a0b74f81c094af4193dcd323cb6f4965321ff453039e0b7bd58c6891e6f9` |
| Input index | 11,481 | `6981c5f2eddd3eab6f921d52db0b059bb2dc6a867a7aa928cdf7d8a3f4b8bb79` |
| Freeze record | 4,603 | `d685eaf70e4bf781924a19c11e28751e26b2c7c2805476eab9e195a2304faa89` |
| Evidence index | 53,704 | `5239d64dcf6db4ece3b8647c7247ca209688eec8443037e330293db002746ecd` |

The independent identity audit recalculated every file from disk. All **52/52 frozen inputs**, **6/6 declared freeze bindings**, and **92/92 evidence-image byte/SHA identities** are exact. The candidate and its 92 image files were kept read-only throughout this review.

The applicable root and page governance, Gate workflow V3.2, unified standard V2.2, current Gate 4 Agent/three Skills/contract, Application Playbook, APP-PLAS V0.6 and V0.7 draft Manifests, Gate 3 freeze/closure/handoff, approved A V0.2/B V0.3/C V0.3, brand/CTA/Global Chrome/Logo/legal contracts, execution self-check, submission, freeze and evidence index were reviewed as the decision basis.

## Required Finding

### APP-PLAS-G4-R01 — frozen render and image-dimension ledger is inaccurate and incomplete

**Level:** P1 / REQUIRED — evidence and freeze integrity. The reviewed page UI has no corresponding visual defect, but this frozen combination is not eligible for `PROJECT_CONTROL_REVIEW_PASS` while its declared identities misstate the evidence.

**Location:**

- `APP-PLAS_GATE4_FREEZE_RECORD_V0.1.json` → `renderer.viewports` for width 390;
- `APP-PLAS_GATE4_EVIDENCE_INDEX_V0.1.json` → the three `GRADE_PATH_CONTEXT` image records;
- the same evidence index → all 27 normal/hover/focus image records.

**Expected:** Gate 4 asset identity records must state the actual logical/physical dimensions, DPR, state, bytes and SHA-256. The freeze renderer must state the render viewport actually used. Independent review must be able to reproduce the frozen combination from those declarations.

**Observed evidence:**

1. The freeze declares the 390 renderer viewport as `390×844`, while the build/runtime path and the frozen 390 Menu and Cookie PNGs use and measure `390×900`.
2. The evidence index declares all three Grade-path context PNGs as 900 px high. Direct PNG metadata and independent pixel-identical rerenders measure:
   - 1440: declared `1440×900`; actual `1440×727`;
   - 768: declared `768×900`; actual `768×747`;
   - 390: declared `390×900`; actual `390×269`.
3. All 27 target-state records omit `physical_width`, `physical_height` and `dpr`. Their actual PNG dimensions, shared by normal/hover/focus within each group, are:

| Width | APP-MB owner | M-2377 | Request Documents |
|---:|---:|---:|---:|
| 1440 | `1004×124` | `742×124` | `410×127` |
| 768 | `649×124` | `445×124` | `728×127` |
| 390 | `323×124` | `370×124` | `374×125` |

The machine-readable evidence is in `identity-audit.json`. The audit found **62/65 declared dimensions exact**, three declared-dimension mismatches, and 27 image records without declared dimensions.

**Impact:** The visual files are authentic and usable, but the freeze states the wrong 390 render condition and the sole evidence index cannot serve as an exact asset ledger. Closing Gate 4 from this package would certify declarations that independent recomputation has disproved.

**Exact repair:**

1. Correct the 390 renderer viewport to `390×900`.
2. Correct the three Grade-path physical heights to `727`, `747` and `269` respectively.
3. Populate `physical_width`, `physical_height` and `dpr: 1` for all 27 state images from their actual PNG metadata, using the table above.
4. Correct the producing runtime/finalization records so a rerun preserves those values; recompute every dependent bytes/SHA pointer and issue a new freeze identity. The candidate HTML and PNG bytes may remain unchanged if they are not modified.
5. Submit the new freeze and evidence index under the same Finding ID for targeted independent re-review. If the candidate or any PNG bytes change, repeat the affected visual and runtime regression instead of treating this as metadata-only.

**Re-review acceptance condition:** a new internally consistent freeze declares `1440×900`, `768×900`, and `390×900`; all 92 evidence images have complete physical dimensions/DPR matching direct PNG metadata; all 52 frozen inputs, source, freeze bindings, evidence identities and dependent hashes recompute exactly; `APP-PLAS-G4-R01` is then closed explicitly.

## Independent visual and runtime results

The frozen evidence set was actually opened in full: **92/92 images** comprising 3 full pages, 51 continuous segments (13/16/22), 3 direction samples, 3 Grade-path context images, 2 Menu states, 3 Cookie states and 27 normal/hover/focus images. No visible horizontal overflow, clipping, broken section join, abnormal void, unreadable long content or footer-closure defect was found at 1440, 768 or 390.

An independent local-Chrome rerender produced **89 review images**: 3 full pages, 51 continuous segments, 3 Grade contexts, 27 target states, 2 Menu and 3 Cookie. All 70 independent runtime checks passed with zero page errors. The three full pages, all 51 segments, all 3 Grade contexts, both Menu states and all 3 Cookie states are pixel-identical to their frozen counterparts.

The substantive page checks passed:

- approved B visible copy and all 28 hrefs remain present across widths; the candidate main content and link order equal the closed Gate 3 DOM;
- all 12 modules remain in approved order, with 3 responsive semantic tables and 13 readable sources;
- M-350, M-510, M-200, M-108, M-210, M-340, M-886 and M-2377 retain equal treatment, approved process labels and no ranking, recommendation, equivalence, resin-fit or availability signal;
- one, several and unknown-Grade routes remain explicit and keep candidate results separate;
- APP-PLAS retains final-plastic evaluation while APP-MB retains high-concentration masterbatch production and qualification;
- Documents, Sample and RFQ emit the three distinct approved local intent contexts, including `KNOWN_OR_UNKNOWN`, `KNOWN_LEAD_OR_NOT_SURE` and `Additional Requirements`;
- the provisional URL correctly omits canonical and JSON-LD;
- the production logo assets, `GLOBAL-CHROME-005`, Applications current state, RFQ, approved privacy links and no-Terms rule are preserved;
- every visible control is at least 44×44 CSS px; all nine high-risk targets show distinct hover and keyboard focus, a 3 px `#008078` focus outline at 4.8177:1 against white, and stable geometry;
- Menu at 768/390 opens, isolates background content, loops focus, closes with Escape and returns focus; Cookie at all three widths is modal, loops focus, closes with Escape and returns focus;
- a 720 px responsive proxy also has no overflow and no undersized visible control.

## Decision and limits

The candidate visual implementation passes the independently exercised content, layout, responsive, interaction, ownership, brand, CTA, shared Chrome and legal checks. The frozen submission as a whole does **not** receive `PROJECT_CONTROL_REVIEW_PASS` because required Finding `APP-PLAS-G4-R01` is open. Required Finding count is **1**.

This review used local Chrome with HTTP(S) blocked. Local action receipts verify intent construction, not production receivers or network submission. Real devices, other browser engines, native zoom, screen-reader speech, live Cookie inventory/persistence, development integration, deployment and publication were not tested. No Gate closure or Gate 6 authorization is made here.

## Review evidence

- `identity-audit.json` — independent 52-input, freeze-binding, 92-image, physical-dimension and render-condition audit.
- `independent-runtime.json` — 70 independent checks, measurements, local actions and all 89 rerender identities.
- `rerender/` — review-only independent full-page, continuous-segment, Grade, state and Chrome evidence.
- `identity-audit.cjs` and `independent-runtime.cjs` — review-only reproducibility scripts.
