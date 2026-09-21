# Remaining 13 Product Detail Pages — D32 NextJS Gate 9 Independent Acceptance V0.1

Date: 2026-09-21. Review ID: `PRODUCT-DETAIL-13-GRADE-D32-NEXTJS-G9-20260921-01`. Reviewer: `/root`, independent of this Gate 8 implementation. Scope: the thirteen Product Detail routes listed in the Gate 6 package.

## Result and four-layer status

**Gate 9 does not pass this exact candidate. Twelve of fourteen stable acceptance conditions pass. One shared Cookie Settings keyboard-focus defect fails `PD13-D32-AC-A11Y` and `PD13-D32-AC-REGRESSION`; no cosmetic or minor visual variance is returned.**

| Layer | Status |
|---|---|
| `RECHECK_SCOPE_STATUS` | `INITIAL_REVIEW_COMPLETE / RETURN_REQUIRED` |
| `PAGE_GATE9_STATUS` | `READ_ONLY_QA_NOT_APPROVED / GATE8_RETURN_REQUIRED` |
| `INTEGRATION_STATUS` | `NOT_READY / PAGE_GATE9_NOT_PASS_AND_EXTERNAL_DEPENDENCIES_OPEN` |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` |

Gate 10, merge, push, deployment, publication, sitemap activation and indexing remain unauthorized.

## Exact candidate and intake

| Object | Bound identity |
|---|---|
| Repository / worktree | `D:/32NextJS` / `D:/32NextJS/.worktrees/product-detail-13-gate8` |
| Branch | `codex/product-detail-13-gate8` |
| Baseline | `53280559074eab582aecabea6e2593aaf9ccd8ed` |
| Implementation | `3a06b574d52dbf2f32f11f872dbaea63ca65aad3` |
| Evidence HEAD | `d75043ba5bf379b804d567db39871019dc778704` |
| Build | `7BGXY_4cV95ZiX1VdmTId` |
| Runtime | `http://127.0.0.1:8341`; held under `GATE9_PASS_OR_RETURN_NOTICE` |
| Gate 6 package | `PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE6_HANDOFF_PACKAGE_V0.4.md`; SHA-256 `D7397CB3647EAE61D3B7B5BF653552B6C3B2978C78B3BB425563B4EBB0815591` |
| Evidence Manifest | `D:/32NextJS/.worktrees/gate8-manifests/PRODUCT-DETAIL-13-GRADE-D32-NEXTJS-G6-04/gate8_evidence_manifest.json`; SHA-256 `A7FBB84FC860BEACEEEF63A826D2FA239E578F7C81E1BA235088CC5D8CBA5058` |

Official Manifest validation passes 85/85 checks. Two-round preflight passes 34/34 requests across the thirteen pages plus Home, Product Hub, M-350 and Applications. Candidate branch, commits, Build, runtime markers and the clean worktree agree.

## Covered pages

`GRADE-M510`, `GRADE-M896`, `GRADE-M895`, `GRADE-M340`, `GRADE-M886`, `GRADE-M52`, `GRADE-M108`, `GRADE-M210`, `GRADE-M200`, `GRADE-M996`, `GRADE-M2196`, `GRADE-M2377` and `GRADE-CR901` at their approved `/products/<grade>/` routes.

## Independent machine and browser observations

The independent HTTP audit passes 299/299 checks. Each route matches its approved content-contract bytes and hash, contains the expected modules and technical rows, uses the correct title, description, canonical, preview robots, Open Graph URL, Product Schema and Breadcrumb Schema, and excludes prohibited relations and internal control text. An unknown detail slug returns 404 without Grade leakage. `/sitemap.xml` remains unavailable in this preview. Home, Product Hub, M-350 and Applications respond with their expected markers; Product Hub exposes all fourteen visible and machine-readable Grade URLs and no old origin.

The Codex built-in browser covered all thirteen pages at 1440, 1024, 768, 430, 390 and 320 CSS pixels, for 78 route/width observations. Each observation retained one H1, no page-level horizontal overflow, no clipped horizontal text, non-overlapping sections, applicable 44×44 CSS-pixel targets and responsive technical-data labels. M-2377 at 1440 and CR-901 at 320 received full-page visual inspection. The M-510 accessibility tree preserved landmarks, heading/list structure and table headers. Console errors and warnings were zero.

The shared mobile menu passed initial focus, forward/reverse loop, Escape close and trigger-focus return. Cookie Settings passed open, initial focus, Escape close, trigger-focus return and current-state copy, but failed reverse focus containment as recorded below.

## Fourteen stable acceptance conditions

| Acceptance condition | Result | Independent basis |
|---|---|---|
| `PD13-D32-AC-IDENTITY` | `PASS` | Exact Page ID, Grade, slug, route and `tio2-my` identity match; unknown identity fails closed. |
| `PD13-D32-AC-CONTENT` | `PASS` | All thirteen approved contracts and module orders match; no M-350, placeholder or internal-text leakage. |
| `PD13-D32-AC-TECHNICAL` | `PASS` | Visible and Schema technical properties retain each Grade's values, units and property meaning. |
| `PD13-D32-AC-RESTRICTIONS` | `PASS` | Prohibited mappings and stronger Food/FDA/Rubber/comparison/compliance claims remain absent. |
| `PD13-D32-AC-SEO-SOCIAL` | `PASS` | Unique head data, formal-host URLs, language and preview robots are correct for all thirteen routes. |
| `PD13-D32-AC-SCHEMA` | `PASS` | Product and Breadcrumb identities and technical facts agree with visible content; no offers/reviews/origin expansion. |
| `PD13-D32-AC-ACTIONS` | `PASS` | Held target actions are omitted atomically; visible labels remain non-dead plain text; fixed shared RFQ stays context-clean. |
| `PD13-D32-AC-RESPONSIVE` | `PASS` | All six required CSS widths pass for all thirteen pages. The 320 result is responsive evidence only. |
| `PD13-D32-AC-A11Y` | `FAIL` | Cookie Settings loses focus outside the still-open modal on reverse traversal; `PD13-D32-G9-ROOT-F01`. |
| `PD13-D32-AC-HUB-READINESS` | `PASS` | Visible and Schema URLs are aligned for all fourteen valid Grade routes in the exact candidate. |
| `PD13-D32-AC-ISOLATION` | `PASS` | Invalid/missing/mismatched Grade and unknown routes fail closed without cross-Grade or cross-site fallback. |
| `PD13-D32-AC-REGRESSION` | `FAIL` | Home/Product/M-350 routes remain stable, but the exact-candidate shared Cookie overlay fails its approved focus behavior. The component is unchanged from the branch baseline; this identifies a shared-owner defect rather than claiming this branch introduced it. |
| `PD13-D32-AC-PREVIEW` | `PASS` | All thirteen remain `noindex, nofollow`, sitemap-excluded and unclaimed as published. |
| `PD13-D32-AC-EVIDENCE` | `PASS` | Active-schema evidence binds the thirteen pages, fourteen ACs, exact commits, Build, runtime and checked evidence files. |

Count: `PASS 12 / FAIL 2 / NOT_VERIFIED 0 / NOT_APPLICABLE 0` across fourteen stable ACs.

## Finding `PD13-D32-G9-ROOT-F01` — Cookie modal reverse focus escapes to BODY

| Field | Observation |
|---|---|
| Scope | Shared Cookie Settings on all thirteen routes; reproduced at `/products/m-510/` in the exact runtime at 390×844 CSS pixels |
| Steps | Activate `Cookie Settings`; focus correctly starts on `Close`; press `Shift+Tab` |
| Actual | The Cookie dialog remains open, but `document.activeElement` becomes `BODY`; the active element is outside the open dialog |
| Expected | Focus remains inside the modal and wraps from `Close` to `Read Cookie Policy` |
| Adjacent passing behavior | Escape closes the dialog and returns focus to `Cookie Settings`; current no-optional-analytics copy is accurate; mobile-menu focus containment works |
| Contract impact | Gate 6 §7 expressly treats trapped/lost focus as failure for `PD13-D32-AC-A11Y`; the shared overlay no longer meets the accepted interaction behavior required by `PD13-D32-AC-REGRESSION` |
| Source observation | `components/sites/tio2-my/consent/malaysia-cookie-settings.tsx` opens a native dialog and restores trigger focus but contains no explicit forward/reverse focus-loop handler; this file is unchanged from the candidate baseline |
| Severity | `MUST_FIX`; functional keyboard-access defect, not a cosmetic variance |
| Owner | Gate 8 with the shared Consent/Chrome implementation owner |

Closure requires a replacement exact candidate in which Cookie Settings keeps sequential focus inside the open modal in both directions, Escape/Close/backdrop still close correctly and restore trigger focus, and the current consent-state copy remains accurate. Gate 9 will recheck the shared component on one Product Detail representative plus Home, Product Hub, M-350 and Applications, and will re-run candidate identity/preflight before closing the two affected ACs. Unrelated twelve PASS ACs may be inherited if the new manifest and diff prove they are unchanged.

## User exceptions

The user explicitly removed these three manual evidence items from this Gate 9 acceptance. They are recorded as `USER_EXCEPTED / NOT_TESTED / NON_BLOCKING`, not as PASS and not as Gate 8 return requirements:

- physical-device testing;
- manual named assistive-technology testing;
- native browser or operating-system 200% zoom evidence.

The 320 CSS-pixel observation remains valid responsive-layout evidence and is not presented as native 200% zoom evidence.

## External dependencies and stop boundary

Home and Product Hub are available in the exact runtime. The current target owners for contextual RFQ, Sample, Documents, chloride and sulfate Process pages, five Application pages, four Market pages and Gate 10 indexing remain open. Their unavailable contextual links are correctly omitted, so they are not additional Page Gate 9 implementation findings, but they keep `INTEGRATION_STATUS=NOT_READY` and `RELEASE_STATUS=NOT_AUTHORIZED`.

No real form was submitted. No code, CMS/data, Manifest, Status or Index was changed. No merge, push, PR, deployment, publication, sitemap activation, indexing or Gate 10 action was performed.

## Evidence index

| ID | Type | Durable evidence | Proves |
|---|---|---|---|
| `PD13-G9-E01` | `IDENTITY` | `PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE9_20260921/evidence-validation.json` | Manifest/schema/hash/Git/evidence integrity; 85/85 |
| `PD13-G9-E02` | `ACTUAL_RUNTIME` | `PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE9_20260921/preflight.json` | Two-round exact-runtime identity and availability; 34/34 |
| `PD13-G9-E03` | `ACTUAL_RUNTIME / SOURCE_INSPECTION` | `PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE9_20260921/independent-http-audit.json` and its audit script | Thirteen-route content/head/Schema/restriction/isolation/regression checks; 299/299 |
| `PD13-G9-E04` | `ACTUAL_RUNTIME` | `PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE9_20260921/independent-browser-audit.json` | Six-width browser matrix, accessibility tree, shared interactions and F01 reproduction |
| `PD13-G9-E05` | `SOURCE_INSPECTION` | D32 shared Cookie component and candidate Git diff | Missing focus-loop implementation and unchanged-from-baseline ownership boundary |
| `PD13-G9-E06` | `CONTROL` | `PRODUCT-DETAIL-13-GRADE_D32_NEXTJS_GATE9_20260921/gate8-return-notice.json` | Exact return state, candidate and targeted recheck scope |

## Gate 8 return notice

```json
{
  "gate8_return_notice": {
    "notice_type": "PAGE_GATE9_RETURN",
    "recheck_scope_status": "INITIAL_REVIEW_COMPLETE / RETURN_REQUIRED",
    "page_gate9_status": "READ_ONLY_QA_NOT_APPROVED / GATE8_RETURN_REQUIRED",
    "integration_status": "NOT_READY / PAGE_GATE9_NOT_PASS_AND_EXTERNAL_DEPENDENCIES_OPEN",
    "release_status": "NOT_AUTHORIZED",
    "implementation_commit": "3a06b574d52dbf2f32f11f872dbaea63ca65aad3",
    "evidence_head": "d75043ba5bf379b804d567db39871019dc778704",
    "build_id": "7BGXY_4cV95ZiX1VdmTId",
    "open_findings": ["PD13-D32-G9-ROOT-F01"],
    "gate8_should_stop_return_work": false
  }
}
```
