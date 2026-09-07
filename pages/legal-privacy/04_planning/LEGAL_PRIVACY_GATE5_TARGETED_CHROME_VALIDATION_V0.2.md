# Legal / Privacy Gate 5 Targeted Shared-Chrome Validation V0.2

## Control

| Field | Value |
|---|---|
| Correction ID | `LEGAL-PRIVACY-G5-CHROME-CORRECTION-02` |
| Date | 2026-09-02 |
| Result | `PASS` |
| Full validation | `visual-designs/gate5_v0.2/assets/validation-report.json` |
| Asset manifest | `visual-designs/gate5_v0.2/assets/generation-manifest.json` |

## Test-first evidence

- The dedicated shared-Chrome conformance test was first run against approved V0.1 and failed on all nine Unicode-subscript Footer labels plus the extra Mobile Menu utility block.
- The same test run against V0.2 passes: `buyer_clean_svgs=9; mobile_menu=1`.

## Full regression result

- 9/9 Buyer Clean page SVG/PNG pairs exist and match their manifest hashes.
- 9/9 page visuals retain the complete approved public copy.
- 3/3 Mobile pages remain exact 390 logical @2x exports.
- Mobile Menu exists, contains all eight primary destinations in order and contains no extra Privacy utility block.
- Exact Footer label `© 2026 TiO2 Malaysia.` is present in all nine page SVGs; Unicode-subscript copyright is absent.
- Shared Consent Desktop and Mobile V0.1 evidence remains available with original hashes.
- No Buyer Clean governance term, Terms link or new route was introduced.

## Targeted-diff result

After normalising the single approved Footer-character correction, each V0.2 page SVG is byte-identical to its V0.1 counterpart. Mobile Menu change is limited to removing the unapproved Privacy utility block. Dimensions remain unchanged.

`LEGAL-PRIVACY-G5-CHROME-CORRECTION-02 = PROJECT_CONTROL_VALIDATION_PASS / CLOSED`

