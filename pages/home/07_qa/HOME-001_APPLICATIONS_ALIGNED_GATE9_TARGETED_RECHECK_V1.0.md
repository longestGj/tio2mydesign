# HOME-001 Applications-Aligned Gate 9 Targeted Recheck V1.0

## 1. Decision

| Field | Value |
|---|---|
| Date | `2026-09-11` |
| Review ID | `HOME-001-G9-APP-ALIGN-RETURN-01` |
| Page / route / scope | `HOME-001` / `/` / `tio2-my` |
| Implementation commit | `09aa4e446ec3eae870f8fc844a73a4169ac06abe` |
| Evidence HEAD | `517f18f883a9853b5510ddec088df97bf2828923` |
| Build / runtime | `lcePXqYwI1h1gOF3nVmpW` / `http://127.0.0.1:3292` |
| `RECHECK_SCOPE_STATUS` | `PASS` |
| `PAGE_GATE9_STATUS` | `NOT_PASS / EVIDENCE_INCOMPLETE` |
| `INTEGRATION_STATUS` | `NOT_READY` |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` |

The exact targeted return passes. `HOME-001-G9-USER-CHANGE-01` is closed: the Home Hero left green ornament is absent at all five required widths, and all observed visual changes are confined to the former ornament pixels. The shared Mobile Menu backdrop remains unchanged and is accepted as-is by the user's explicit 2026-09-11 decision.

The page-level Gate 9 is not signed overall because `HOME-VU-A09-PHYSICAL-AT` remains explicitly unverified: no physical screen reader, touch device or native browser 200% zoom session has been exercised. This is an evidence status, not a newly inferred implementation defect. The six external `404` routes separately keep Integration not ready.

## 2. Locked identity and preflight

- External Manifest SHA-256: `B687F951CC874C83BE22AB5F3D02BA62C1B7D05DB4038DB1D6F804B768141B23`.
- D23 Manifest validator: `PASS`, all declared checks passed.
- D23 two-round preflight: `PASS`, `2/2` requests returned the expected Home identity and exact Build marker.
- Feature worktree: clean at evidence HEAD `517f18f883a9853b5510ddec088df97bf2828923`.
- D16 `main`: unchanged at the recorded baseline; no merge occurred.
- Source delta from the prior reviewed implementation: the Home CSS removes the two `.hero::before` rule blocks; the only other change is its focused test assertion. Shared Global Chrome remains byte-identical.

## 3. Targeted result

| Object | Result | Independent observation |
|---|---|---|
| `HOME-001-G9-USER-CHANGE-01` | `PASS / CLOSED` | At 1440, 1024, 768, 390 and 320, Hero `::before` has `content:none`, `background-image:none` and transparent background. |
| Five-width visual confinement | `PASS` | New/old image dimensions are identical. Pixel changes are confined to a 6px-wide former ornament band on 1440/1024/768 and a 4px-wide band on 390/320. |
| Hero preservation | `PASS` | Hero border, radius, background, shadow, grid, copy, CTA, image, dimensions and spacing remain; exact H1 and module order are unchanged. |
| Responsive integrity | `PASS` | Five widths return `200`, have zero horizontal overflow and preserve the exact nine-module order. |
| Automated accessibility regression | `PASS` | Independent Axe: zero violations and zero serious/critical violations at all five widths. |
| Shared Mobile Menu backdrop | `ACCEPTED_AS_IS_BY_USER / CLOSED` | Runtime remains transparent, `aria-modal=true` and body scroll lock remains; no shared code was changed. |

Pixel-difference bounds:

| Width | Changed pixels | Exact bounding box |
|---|---:|---|
| 1440 | 3,737 | `x=121..126`, `y=129..756`, width `6` |
| 1024 | 3,305 | `x=41..46`, `y=109..664`, width `6` |
| 768 | 4,259 | `x=41..46`, `y=109..823`, width `6` |
| 390 | 3,278 | `x=29..32`, `y=95..917`, width `4` |
| 320 | 3,634 | `x=25..28`, `y=95..1006`, width `4` |

## 4. Stable acceptance conditions after recheck

| ID | Current result | Note |
|---|---|---|
| `HOME-VU-A01` | `PASS` | Content, order and href evidence inherited; source and runtime regression remain unchanged. |
| `HOME-VU-A02` | `PASS` | Visual family and hierarchy preserved. |
| `HOME-VU-A03` | `PASS` | Hero media/geometry preserved and the user-directed ornament removal verified. |
| `HOME-VU-A04` | `PASS` | Start Here position and entries preserved. |
| `HOME-VU-A05` | `PASS` | Four groups, fourteen Grades and disclosure behavior preserved. |
| `HOME-VU-A06` | `PASS` | Responsive page RFQ rule preserved. |
| `HOME-VU-A07` | `PASS_UNDER_USER_DISPOSITION` | Shared Chrome remains unchanged; backdrop appearance is explicitly accepted as-is. |
| `HOME-VU-A08` | `PASS` | Five-width integrity rechecked. |
| `HOME-VU-A09` | `NOT_VERIFIED_PHYSICAL_SUBSET` | Browser keyboard/focus/menu/disclosure/44px/Axe subset passes; physical screen reader, touch-device and native 200% zoom remain untested. |
| `HOME-VU-A10` | `PASS` | Frozen metadata/Schema and visible meaning remain applicable. |
| `HOME-VU-A11` | `PASS` | `tio2-my` scope and frozen bindings remain applicable. |
| `HOME-VU-A12` | `PASS` | New exact Manifest, commit, evidence, Build and runtime identity validated. |

## 5. Durable independent evidence

Evidence root: `pages/home/07_qa/evidence-applications-aligned-return-v1.0/`.

- `home-001-return-g9-evidence-validation-v1.0.json`
- `home-001-return-g9-preflight-v1.0.json`
- `home-001-gate9-targeted-return-audit-v1.0.json`
- `home-001-return-pixel-diff-v1.0.json`
- five independent full-page screenshots and one Menu-open regression screenshot
- `home-001-gate9-targeted-return-audit.cjs`
- `home-001-return-pixel-diff.cjs`

All images used for the visual conclusion were opened and inspected. The prior independent evidence under `evidence-applications-aligned-v1.0/` remains the unchanged-scope basis for A01–A12 outside the targeted return.

## 6. Current issue ledger

| ID | Layer | Status / owner / closure evidence |
|---|---|---|
| `HOME-001-G9-USER-CHANGE-01` | Targeted recheck | `PASS / CLOSED`; D16 return work may stop. |
| `ROOT-GLOBAL-CHROME-G9-F01` | User visual decision | `ACCEPTED_AS_IS_BY_USER / CLOSED / NO_CHANGE_REQUIRED`. |
| `HOME-VU-A09-PHYSICAL-AT` | Page Gate 9 evidence | `NOT_VERIFIED`; user may either authorize named physical accessibility/device testing or explicitly accept that untested scope. |
| `HOME-VU-DEP-03-APPLICATION-ROUTES` | Integration | Five Application child routes return `404`; owned by those registered pages. |
| `HOME-VU-DEP-03-SULFATE-ROUTE` | Integration | Sulfate-process route returns `404`; owned by that registered page. |
| `HOME-VU-DEP-05` | Release | Gate 10 and release remain unauthorized. |

## 7. Gate 8 pass notice

```json
{
  "gate8_pass_notice": {
    "notice_type": "TARGETED_SCOPE_PASS",
    "recheck_scope_status": "PASS",
    "page_gate9_status": "NOT_PASS / EVIDENCE_INCOMPLETE",
    "integration_status": "NOT_READY",
    "release_status": "NOT_AUTHORIZED",
    "implementation_commit": "09aa4e446ec3eae870f8fc844a73a4169ac06abe",
    "evidence_head": "517f18f883a9853b5510ddec088df97bf2828923",
    "build_id": "lcePXqYwI1h1gOF3nVmpW",
    "closed_findings": [
      "HOME-001-G9-USER-CHANGE-01",
      "ROOT-GLOBAL-CHROME-G9-F01-USER-DISPOSITION-01"
    ],
    "remaining_items": [
      "HOME-VU-A09-PHYSICAL-AT",
      "HOME-VU-DEP-03-APPLICATION-ROUTES",
      "HOME-VU-DEP-03-SULFATE-ROUTE",
      "HOME-VU-DEP-05"
    ],
    "gate8_should_stop_return_work": true
  }
}
```

Notification target: D16 task `01My开发1` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e`. Delivery status is recorded after sending.

