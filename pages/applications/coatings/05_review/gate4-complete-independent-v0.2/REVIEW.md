# APP-COAT Gate 4 Targeted Independent Re-review V0.2

## Decision

- Page ID: `APP-COAT`
- Review ID: `COAT-G4-REREVIEW-20260907-01`
- Reviewer role: independent Gate 4 reviewer; original V0.1 independent reviewer; did not produce the V0.2 remediation package.
- Workset: `COAT-G4-COMPLETE-V02`
- Freeze: `COAT-G4-COMPLETE-V02-F01`
- Finding disposition: **`COAT-G4-IR-01 / CLOSED_BY_TARGETED_INDEPENDENT_REREVIEW`**
- Review status: **`PROJECT_CONTROL_REVIEW_PASS`**
- Required Finding count: **0**
- Advisory Finding count: **0**

The V0.2 package resolves the only V0.1 blocking inconsistency. The active records now describe the frozen primary CTA exactly as white text on `#007F77` at `4.881302249384679:1`; they classify `#007F77` on `#F5F8FB` at `4.5796989189682495:1` only as the separate non-primary-link hover pairing. The candidate visual source and CSS remain byte-identical to V0.1.

This report independently passes the V0.2 Gate 4 review object. It does not close Gate 4 and does not start Gate 6, development, deployment or publication.

## Reviewed identity

| Object | Bytes | SHA-256 |
|---|---:|---|
| Candidate HTML | 33,997 | `a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2` |
| Visual CSS | 6,196 | `f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c` |
| V0.2 workset | 1,786 | `9acc48801c9e171458c04dbbb86ae974b21806bf0fc146b228e6c30ea0e88fd1` |
| V0.2 input index | 13,843 | `a12087e9469fd2f298eb08f8d32d3f9d74b04436d14dc29f0aca965dbf1cb28a` |
| V0.2 source freeze | 18,186 | `7f40b7202990a25b17448bd6d75480caebd813cb71a4905d9f8d4a7d1a551226` |
| V0.2 evidence index | 36,996 | `aad86687d0c8ca055d18482f49f86737ca3c35db72a3d88be5a71c6fb9f404ed` |
| Statement correction register | 2,294 | `dabc36d786b34a8eb436ac9c32ea626a58f46da7f6d16b1df14beb6d7c9147bf` |
| Corrected 4A record | 1,820 | `63a023c70211498770de981cc80798ca18b21ddfffeb303d4a66e20bc0c68657` |
| Finding response | 3,688 | `d296c3dc166ff12764d57b6c5fbe5121fd0ea49ea3f027580b10ab43e21d3317` |
| Re-review submission | 2,287 | `d5c10aaac33675a6fa0362c203ce2f7bf0deb8254b2d0452cc6a9ccc862d21bb` |

Independent recomputation found 61/61 V0.2 inputs exact when the review began. Before report finalization, the mutable root Index changed from the frozen 23,151-byte identity to 23,305 bytes / `95be420f973b877acb25af25ab5f3a6ed117135956abc9dc9352fbdfbb68e2c5`; 60/61 live input paths therefore remain exact. The final live Index was preserved as `01_PROJECT_INDEX.finalization-snapshot.md`. Its change is limited to Poland Gate 9 and Applications R02 article-research navigation and has no Coatings contract impact. All 6/6 frozen dependencies, 6/6 frozen bound records and eight evidence-index identity pointers remain exact. The evidence index binds 48/48 inherited formal assets and 6/6 new regression images at their exact byte, SHA and declared PNG dimensions. The inherited asset verification also reports 48/48 decoded pixel identities exact with zero failure.

## Targeted runtime result

I independently loaded the unchanged candidate in local Chrome with HTTP(S) blocked and operated `.heroActions .primaryAction` at 1440×900, 768×900 and 390×900. All 15 independent checks passed.

| Width | True-hover foreground | True-hover background | Contrast | Target size | Focus | Geometry |
|---:|---|---|---:|---:|---|---|
| 1440 | `rgb(255, 255, 255)` | `rgb(0, 127, 119)` | `4.881302249384679:1` | `215.140625×51.796875` | visible 3px outline | stable |
| 768 | `rgb(255, 255, 255)` | `rgb(0, 127, 119)` | `4.881302249384679:1` | `215.140625×51.796875` | visible 3px outline | stable |
| 390 | `rgb(255, 255, 255)` | `rgb(0, 127, 119)` | `4.881302249384679:1` | `350×51.796875` | visible 3px outline | stable |

At each width, hover adds the underline without changing the control rectangle. The target exceeds 44×44 CSS pixels, keyboard focus remains visible, and the adjacent secondary CTA retains its foreground, background and geometry while the primary CTA is hovered.

Independent runtime: `targeted-runtime.json`, 22,541 bytes, SHA-256 `be3f2f5e93e10041a6ede4859fe681c6f8ec8a540e424b180e7bfd33ef383a33`. Machine identity audit: `identity-audit.json`, 4,181 bytes, SHA-256 `5f8d041d672cacfcce3934836eecaa2d050f8d076591a3c42581fdf8e98f7a8d`. Finding ledger: `findings.json`, 801 bytes, SHA-256 `f593fd1bf5d0afaaabcccbdc1114962040076b255d69f895da46bd66e064e6d6`.

## Visual and contract readback

The six V0.2 regression images were opened. The three complete pages retain 1440×10070, 768×11531 and 390×17825 extents with coherent section joins, no horizontal overflow, clipping or abnormal void, and complete Footer closure. The three hover captures visibly show white underlined text on the dark teal surface at all widths. Because all 48 inherited formal files are byte- and pixel-identical to the V0.1 set already opened in the original independent review, the original full-page, continuous-segment, Menu, Cookie and high-risk-state visual findings remain valid without regenerating or substituting those assets.

Runtime contract sampling passed at all three widths:

- `COAT-01` through `COAT-10`, one H1 and nine H2 headings remain in order.
- The eight Grades remain `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-52`, `M-2377`, with no rank, recommendation or equivalence added.
- Documents, Sample and RFQ remain separate and target `/request-documents/`, `/request-sample/` and `/request-a-quote/`.
- Six technical sources remain present.
- Header and Footer remain `GLOBAL-CHROME-005`, Applications remains current, and no Terms link appears.
- The V0.2 records preserve the approved content, URL, module, Grade, owner, brand and shared-contract scope; no source or visual byte changed.

## Finding closure and limits

`COAT-G4-IR-01` is closed for the exact V0.2 workset/freeze. Required Finding count is **0** and the result is **`PROJECT_CONTROL_REVIEW_PASS`**.

The old V0.1 workset, freeze and failed independent report remain retained as history. Production receivers, live external-source freshness, CMS/Schema integration, real devices, non-Chrome engines, native zoom and assistive technology remain later-stage checks. Project Control must separately decide Gate 4 closure under the standing authority; this re-review does not exercise that authority.
