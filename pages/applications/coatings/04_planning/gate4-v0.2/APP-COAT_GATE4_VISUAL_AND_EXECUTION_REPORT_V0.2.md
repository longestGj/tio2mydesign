# APP-COAT Gate 4 Visual and Execution Report V0.2

## Result

| Field | Value |
|---|---|
| Page / workset | `APP-COAT` / `COAT-G4-COMPLETE-V02` |
| Freeze | `COAT-G4-COMPLETE-V02-F01` |
| Status | `DIRECTED_RECORD_CORRECTION_COMPLETE / DRAFT_FOR_INDEPENDENT_REREVIEW` |
| Finding response | `COAT-G4-IR-01-R1` |
| Candidate | inherited unchanged from `gate4-v0.1/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html` |
| Candidate SHA-256 | `a1e8c4153831aa829698f62e0c30c1fc7a77ec5bbb1f23ce264dede5d61443d2` |
| Visual CSS SHA-256 | `f4c2e703345cb3eae1221937ff63b61b3742c6f2da6ccf9c1f3da730db67ca8c` |
| New remediation runtime | `24/24 PASS` |
| Inherited formal runtime | `720/720 PASS` |
| Formal assets | `48/48` exact identities, dimensions and decoded pixel digests verified before inheritance |

This V0.2 execution corrects the V0.1 record inconsistency identified by `COAT-G4-IR-01`. It makes no visual, content, URL, module, brand or shared-contract change.

## Correct primary CTA hover record

The frozen primary CTA uses `#FFFFFF` text on `#007F77` in normal and true-hover states. The true-hover state adds the approved underline without changing geometry. WCAG relative-luminance calculation gives `4.881302249384679:1`. Actual runtime reproduces that foreground, background and ratio at 1440, 768 and 390.

The old `#F5F8FB` / `4.5796989189682495:1` description was not the primary CTA state. It describes the `#007F77` foreground on `#F5F8FB` non-primary-link pairing. V0.2 replaces that attribution everywhere in the active remediation records; V0.1 remains unchanged failure history.

## Source and evidence inheritance

The candidate HTML and visual CSS were hashed before and after the remediation run and remained byte-identical to V0.1. The V0.2 source freeze states that inheritance explicitly.

All 48 V0.1 formal images were checked against the frozen export inventory. Each file matches its recorded bytes, SHA-256 and dimensions and was decoded to an independent RGBA pixel digest. V0.2 cites these exact formal files rather than copying or regenerating them. Six new V0.2 diagnostic images cover the affected state: three primary-hover captures and three complete-page rerenders.

The new full-page regression preserved 1440×10070, 768×11531 and 390×17825 extents with no horizontal overflow. Ten sections, one H1, nine ordered H2 headings, five endpoint records, eight equal Grades, three request owners, six sources and all visible 44px targets remain intact. The three full rerenders were opened and visually checked through the final Footer.

## Identity and scope

The V0.2 input index freezes 61 current identities, including the retained V0.1 workset, freeze, evidence, reports and failed independent review. The sole drift from the V0.1 52-input snapshot is the previously documented root Index navigation update; the V0.2 snapshot records its current identity and does not edit the root file.

The corrected evidence index is SHA-256 `aad86687d0c8ca055d18482f49f86737ca3c35db72a3d88be5a71c6fb9f404ed`. The corrected source freeze is SHA-256 `7f40b7202990a25b17448bd6d75480caebd813cb71a4905d9f8d4a7d1a551226`.

## Boundary

This is an executor report and self-check input. Independent rereview remains required. It does not approve or close Gate 4, update root Status/Index, start Gate 6, or authorize development, deployment or publication.
