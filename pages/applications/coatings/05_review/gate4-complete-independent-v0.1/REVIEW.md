# APP-COAT Gate 4 Final Independent Review V0.1

## Decision

- Page ID: `APP-COAT`
- Reviewer role: independent Gate 4 reviewer; reviewer did not participate in this Gate 4 candidate's production or executor self-check.
- Workset: `COAT-G4-COMPLETE-V01`
- Freeze: `COAT-G4-COMPLETE-V01-F01`
- Review status: `PROJECT_CONTROL_REVIEW_FAIL / REMEDIATION_REQUIRED`
- Required Finding count: **1**
- Gate state: Gate 4 remains open. This review does not approve or close Gate 4 and does not start Gate 6, development, deployment or publication.

The frozen candidate meets the approved content, architecture, responsive layout, shared-component and general interaction requirements, but it does not implement the exact pre-freeze hover repair used to close `COAT-G4-PF01`. The execution report and independent-review entry both say the final primary CTA hover surface is `#F5F8FB`; the frozen CSS and three-width runtime instead use `#007F77`. This evidence/candidate inconsistency blocks an independent PASS.

## Finding

### COAT-G4-IR-01 — Blocking — Frozen primary CTA hover does not contain the recorded PF01 repair

**Expected contract and recorded closure**

- `4A-direction-check.json` records the `COAT-G4-PF01` resolution as “Use the approved light neutral `#F5F8FB` hover surface; measured contrast is 4.5797:1.”
- `APP-COAT_GATE4_VISUAL_AND_EXECUTION_REPORT_V0.1.md` states that the hover surface was changed to `#F5F8FB`, the issue was closed before freeze, and all final runs passed.
- `APP-COAT_GATE4_INDEPENDENT_REVIEW_ENTRY_V0.1.md` requires the reviewer to ensure the final hover surface remains `#F5F8FB` with contrast at least 4.5:1.

**Exact frozen evidence**

- `visual-direction.css:141` is `.primaryAction:hover{color:#fff;background:var(--coat-teal);...}` and `--coat-teal` is `#007f77`; there is no `#F5F8FB` primary-action hover rule.
- Independent true-hover measurements, reproduced from a clean local server at all required widths:

| Width | Actual foreground | Actual hover background | Text contrast | Exact `#F5F8FB` condition |
|---:|---|---|---:|---|
| 1440 | `rgb(255, 255, 255)` | `rgb(0, 127, 119)` | 4.8813:1 | FAIL |
| 768 | `rgb(255, 255, 255)` | `rgb(0, 127, 119)` | 4.8813:1 | FAIL |
| 390 | `rgb(255, 255, 255)` | `rgb(0, 127, 119)` | 4.8813:1 | FAIL |

The actual dark-teal state clears the 4.5:1 text-contrast threshold and remains geometrically stable, but that does not establish the recorded `#F5F8FB` repair. The executor's 720-check record tests the contrast threshold and therefore does not detect the exact-surface mismatch.

**Impact**

The frozen candidate is inconsistent with its 4A closure record, visual/execution report, evidence index diagnostic statement and independent-review acceptance condition. Project control cannot rely on the claim that `COAT-G4-PF01` was closed in the source that was frozen.

**Required remediation**

Apply the recorded `#F5F8FB` hover surface to the primary CTA with an approved foreground that measures at least 4.5:1, then create a new candidate/freeze and regenerate affected direction, runtime, state-image, inventory, evidence-index, self-check and Manifest-draft identities. If project control chooses a different hover design, it must first revise the applicable direction/acceptance record so that the candidate and evidence describe the same approved state; a new freeze is still required.

**Re-review condition**

An independent reviewer must recompute the new identities and reproduce true hover at 1440/768/390, confirming the exact accepted surface, at least 4.5:1 contrast, at least 44×44 CSS-pixel target size, visible keyboard focus, and unchanged geometry. The adjacent secondary CTA and shared Header/Footer actions must remain unaffected.

## Independent verification result

The reviewer opened all **48/48** formal assets at their recorded paths and independently generated **48** review assets from the frozen source: 3 complete pages, 34 continuous readable segments, 2 Menu states, 3 Cookie states and 6 high-risk focus/hover states. The independently generated asset SHA multiset matches the formal asset SHA multiset **42/48**. The six non-identical files are the first segment and stitched full page at each width; pixel differences are confined to the CSS decorative hero field, while the candidate identity, measured DOM geometry, text, links and all state images remain stable. The independently reproduced hover defect is therefore a frozen-source condition rather than an export-only artifact.

The independent runtime contains **471 checks: 468 passed, 3 failed**. The three failures are one exact condition, `COAT-G4-PF01`, reproduced at 1440, 768 and 390. All other independently exercised conditions passed:

- Exact approved B V0.2 visible copy and link targets at all three widths.
- Ten-part order, one H1 and nine ordered H2 headings; five endpoint records; six technical sources.
- Eight visually equal Grades in the approved order: `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-52`, `M-2377`; four Chloride and four Sulfate; no ranking, recommendation or equivalence claim.
- Full desktop tables, two-column labelled records at 768 and single-column labelled records at 390, with no horizontal overflow, clipping, ellipsis, line clamp, unexplained gap or overlap.
- Three separate owner paths and exact targets: Documents `/request-documents/`, Sample `/request-sample/`, and RFQ `/request-a-quote/`.
- Shared Consumer V0.2, Applications current state, production Logo, Header/Footer/legal order and absence of a Terms link.
- Menu and Cookie isolation, focus loop, Escape/Close return; visible focus; true hover; 44px minimum targets; stable geometry; 720 CSS-pixel reflow proxy.

The complete-page dimensions were 1440×10070, 768×11531 and 390×17825 pixels. The 15 official 390 segments were independently stitched losslessly; the result and official `390-full.png` are both 1,220,855 bytes with SHA-256 `103f6bfc8ab352d20b648acd74c780dfb5109403b81e39df601e71f6246c4014`. This closes the requested 390 continuity and stitch-specific audit with no additional Finding.

## Identity audit

| Object | Recomputed result |
|---|---:|
| Frozen inputs | 51/52 current paths match |
| Frozen dependencies | 6/6 match |
| Frozen bound records | 5/5 match |
| Evidence-index identity pointers | 14/14 match |
| Formal assets | 48/48 match |
| Independent/formal asset SHA multiset | 42/48 match; six hero-field raster differences |

The sole current-path input mismatch is `D:/23MySec/01_PROJECT_INDEX.md`: frozen 21,612 bytes / `7c843a5c853d8899897efcbde013a7266eebc49a57b4e7d8e56f34a85596131e`; recomputed during this review 21,657 bytes / `9f369cadfe0456fd0f1e9e829d0a748d6b28ee3312a7fe964a84617625bd1939`. The post-freeze git diff updates the Poland task row and Applications article-navigation row. It does not change APP-COAT, a Gate 4 method, approved Coatings content, a shared contract, a dependency, a bound record or a formal asset, so it is recorded as non-blocking post-freeze governance-navigation drift. The required remediation for `COAT-G4-IR-01` will necessarily create a new freeze against the then-current index.

Key recomputed identities:

| Object | Bytes | SHA-256 |
|---|---:|---|
| Candidate HTML | 33,997 | `a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2` |
| Visual CSS | 6,196 | `f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c` |
| Source freeze | 14,253 | `1dfaab4a9fcaea3747260269924a62bba9883889c55878aa692d801bf87a3323` |
| Evidence index | 5,084 | `86eaa5336c34120631b84a037621575911cb9015100d8738b37edc2a669402a3` |
| Export inventory | 29,059 | `0d0119424d8d357a28fdf77ad3c838933eceda81e76ab5c0b3a7d0e88633854b` |
| Asset inventory | 13,419 | `4ebc73e620f902223164fe506cc5a019fb47f001d4b08f7adf8b44d2182b5b4e` |
| Executor formal runtime | 667,153 | `9a9c2fd6b03698fb55a0c851c3d61709010c55b2a3cd4dfd14495b665631596a` |
| Independent runtime | 426,585 | `436f09b76cad3af131ad84477612ac7851120c7ba22e35849b6c7a4a1580518d` |
| Current Manifest V0.6 | 8,771 | `3e4910df9b194decf8751adcadef58ae3233583b0de37fd190e48deb9d8ac6dd` |
| Candidate Manifest V0.7_DRAFT | 3,928 | `5f7b4a77f7fe04fd1a01a2a0026fd66ad82bde83004351efb99b953de17987c9` |

Machine-readable details are in `identity-audit.json`; independent runtime assertions and exact measurements are in `independent-runtime.json`; independent screenshots are under `independent-evidence/`.

## Runtime limits

Evidence comes from local headless Chrome 152 at 1440, 768 and 390 CSS pixels. The 720 CSS-pixel run is a reflow proxy rather than native browser zoom. Navigation receivers, live external sources, CMS/Schema, real devices and assistive technology are outside this Gate 4 run.
