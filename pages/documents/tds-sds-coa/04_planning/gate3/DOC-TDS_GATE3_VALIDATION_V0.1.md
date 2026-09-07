# DOC-TDS Gate 3 Validation V0.1

## 0. Control

| Field | Value |
|---|---|
| Page / URL | `DOC-TDS` / `/documents/tds-sds-coa/` |
| Date | `2026-09-04` |
| Status | `PASS / NO P0 OR P1` |
| Test source | `99_workspace/DOC-TDS/gate3/test-doc-tds-gate3.mjs` |
| Render source | `99_workspace/DOC-TDS/gate3/DOC-TDS_GATE3_WIREFRAME_V0.1.html` |
| Validation collector | `99_workspace/DOC-TDS/gate3/collect-doc-tds-gate3-validation.mjs` |

## 1. Test-first record

1. The structural/browser test was written before the local wireframe HTML existed.
2. RED was observed with `AssertionError: Gate 3 wireframe HTML must exist`.
3. The first implementation reached the Tablet target-size assertion and failed.
4. Diagnostic measurement identified the breadcrumb Home link as 34.6875 × 44px.
5. The target contract was corrected to a minimum 44 × 44px at Tablet/Mobile; the complete test then passed.
6. Visual QA found an outdated Footer legal row and one-column Mobile Footer. A new failing regression asserted the current legal/utility row and responsive Footer geometry.
7. The Footer was corrected to the approved current Global Chrome/Addendum and the complete test passed again.

Final command/result:

```text
node 99_workspace/DOC-TDS/gate3/test-doc-tds-gate3.mjs
DOC-TDS Gate 3 structural and responsive contract: PASS
```

## 2. Structural cardinality

| Check | Expected | Actual | Result |
|---|---:|---:|---|
| Body modules | 10 | 10 at 1440 / 768 / 390 | PASS |
| Document checkboxes | 3 | 3 | PASS |
| Multiple-needs controls | 0 | 0; explanatory card only | PASS |
| Grade select options | 15 | 1 prompt + 14 Grades | PASS |
| FAQ questions | 5 | 5 | PASS |
| Related Paths | 3 | 3 | PASS |
| Request Process steps | 4 | 4 | PASS |
| Primary request actions | 3 | Hero + context panel + Final CTA | PASS |
| Mobile Menu links | 8 | 8 in approved order | PASS |

## 3. Responsive metrics

| Viewport | Scroll width | Scroll height | Minimum visible target | Comparison | Result |
|---:|---:|---:|---:|---|---|
| 1440 | 1440 | 6024 | Desktop not subject to the 44px test | Semantic table | PASS |
| 768 | 768 | 7475 | 44px | Semantic table | PASS |
| 390 | 390 | 9993 | 44px | Three document cards | PASS |

Horizontal overflow is zero at all three required logical widths.

## 4. Asset integrity

| Asset | Dimensions | Bytes | SHA-256 | Result |
|---|---:|---:|---|---|
| `DOC-TDS_G3_DESKTOP_1440_WIREFRAME_V0.1.png` | 1440 × 6110 | 371575 | `1ED82B325836FBC588CE2A9AB661ABB25A1A940D0E84D6812379AE17D1366738` | PASS |
| `DOC-TDS_G3_TABLET_768_WIREFRAME_V0.1.png` | 768 × 7475 | 331558 | `FDE452DF67CE412DB1737279F8D08B252767BBAEDD968D314EDE1E0BD09D79F5` | PASS |
| `DOC-TDS_G3_MOBILE_390_LOGICAL_2X_WIREFRAME_V0.1.png` | 780 × 19986 | 2332051 | `315C99CB11DB806E782EFAD039269F77A1EEF23D77202BBB4ED4F5E17B771727` | PASS |
| `DOC-TDS_G3_MOBILE_MENU_390_LOGICAL_2X_WIREFRAME_V0.1.png` | 780 × 20770 | 2369930 | `73785E8945E6EB1E0B49F93A43C3159153F591DA4F5A7F970E5695B4F0D88710` | PASS |
| `DOC-TDS_G3_SELECTION_STATES_V0.1.png` | 1440 × 1014 | 49559 | `AD13A366A541CF17A01743B9958AC66FF9CC6594C3D74FD0CBEADB9667A00564` | PASS |

## 5. Buyer Clean and evidence scan

- Buyer-frame scan found zero: Claim Register, Evidence Hold, allowlist, normalization, eligibility, fail-closed, Schema-parity, Coming Soon and Download.
- Buyer-visible `CURRENT` text is zero.
- Public file inventory, filename, preview, download, Grade-document mapping and availability/delivery promise are zero.
- Internal review annotations remain in the outer review strip or the separate state board, not in the Buyer Clean page frame.
- Production primary and reverse Logo SVGs are loaded from the exact approved paths.

## 6. Visual inspection

All five formal assets were opened and inspected, including the Mobile page in five readable-height segments and a separate Mobile Footer crop.

| Area | Result |
|---|---|
| Header / Mobile Header | No collision or crop |
| Long H1 and Hero actions | Wrap and stack correctly |
| Choice cards | No missing checkbox or truncated copy |
| Product Grade panel | Complete helper, summary and action |
| Desktop/Tablet comparison | No clipped columns or page overflow |
| Mobile comparison cards | All four dimensions visible for each document |
| Checklist / Process / FAQ | Correct order; no overlap |
| Related Paths / Final CTA | Complete and readable |
| Mobile Footer | Brand full width; two link columns; Procurement below; current legal row |
| Page closure | Footer closes with no abnormal blank region |

## 7. Generation-tool record

- Superdesign project creation, model discovery and approved Logo Brand Asset uploads succeeded.
- Draft generation was blocked before draft creation by the external account response `out of credits`.
- No Superdesign draft is claimed.
- Deterministic local HTML/CSS plus the existing browser runtime produced the formal evidence; this fallback did not change the approved design or Gate ceiling.

## 8. Disposition

`DOC-TDS GATE 3 VALIDATION = PASS / NO P0 OR P1`

The package may enter project-control submission and user review. Gate 3 remains open until explicit user approval.

