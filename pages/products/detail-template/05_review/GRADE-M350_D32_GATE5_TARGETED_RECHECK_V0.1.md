# GRADE-M350 D32 Gate 5 Targeted Recheck V0.1

## 1. Control

| Field | Value |
|---|---|
| Recheck ID | `GRADE-M350-D32-G5-IR-01-R1` |
| Parent review | `GRADE-M350-D32-G5-IR-01` |
| Parent report | `GRADE-M350_D32_GATE5_INDEPENDENT_VISUAL_REVIEW_V0.1.md`, SHA-256 `DF5F7FF6A00B5DA9BB62B436D084C2657BE8425CC6DA1C6BE4814DFC2447AD5A` |
| Page / URL | `GRADE-M350` / `/products/m-350/` |
| Date | `2026-09-20` |
| Review mode | `INDEPENDENT_REVIEW / TARGETED_RECHECK` |
| Recheck scope | `GRADE-M350-D32-G5-F01`, revised frozen identity and adjacent Document-region regression |
| Previous bundle | `GRADE-M350-D32-G4-FREEZE-01` / Handoff `GRADE-M350-D32-G4-G5-HANDOFF-01` |
| Revised bundle | `GRADE-M350-D32-G4-FREEZE-02` / Handoff `GRADE-M350-D32-G4-G5-HANDOFF-02` |
| Result | `REVIEW_PASS / F01 CLOSED / PROJECT_CONTROL_REVIEW_PASS` |

The same independent Reviewer performed this targeted recheck. The Reviewer did not edit either frozen version, the execution records, handoffs, current Manifest or approval state. All unaffected coverage from the parent review is inherited only where the versioned source comparison proves it unchanged.

## 2. Versioned revision admission

The first frozen combination remains intact in `04_planning/m350-d32-gate4-v0.1/`; all eight original files independently reproduce the exact source, measurement and PNG hashes recorded in the parent report. The corrected combination is separately preserved in `04_planning/m350-d32-gate4-v0.2/` with these identities:

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `m350-visual.html` | `31375` | `AAB959A66FD8790C04D1754EE746D5C1E2F9177A52CFA59C0B9EE68E40E44F32` |
| `capture_gate4.py` | `6287` | `954D79119242774518EE0BE1AA574B3D3EEC9F61ED45E603D503578DE7CEBBC1` |
| `gate4_measurements.json` | `12914` | `DB0082B97984CA51DBC822BA062D218F0E8663B126B81C435D0FA082F546DE83` |
| `M350_D32_G4_FULL_1440.png` | `1342225` | `03F744F3335D56E6B501B1228B515443DE637B17CCAE3F077032FECC4811B36A` |
| `M350_D32_G4_FULL_768.png` | `1255900` | `FCAF1E79B0F76415793B00CD03E162160BD65B7F10214CA43F934572A76921FA` |
| `M350_D32_G4_FULL_390.png` | `1170737` | `185D76F852BE3E104914689493A77710C5659F8D58EAA1A25EA0524861E4F252` |
| `M350_D32_G4_MENU_390.png` | `83977` | `BE4E32FA510D430BCB4168D369A553D30FB4075521C2E6EF5199F9F472758D76` |
| `M350_D32_G4_COOKIE_390.png` | `58111` | `89EA406EEFFD213A0FEC3B50BC90241BA205F7F8E379E42A0604B5764F9DAB4A` |

The revised execution, self-check and handoff identities are respectively `433C4056C789253757B2ECD85556433FFD8F03A83FBA651048FD7428B22068FA`, `9DB5CE4334870D8A9067B0F6F7905988340349BDF40A3F7A622DD018CAE1503E` and `291A423B43D4045A4B48A991F03B7DF1252EDF1FAE1D02E0CA269B0A2E6271AE`.

Normalized source-line comparison shows exactly one added declaration:

```css
.documentBand .small{color:#d4e0eb}
```

The byte stream also contains a line-ending normalization at the insertion boundary; it changes no source token, selector, value, content or behavior. No approved copy, geometry rule, component, action, query parameter or script changed. The menu and cookie formal PNGs are byte-identical across Freeze 01 and Freeze 02.

## 3. F01 acceptance result

### `GRADE-M350-D32-G5-F01` — CLOSED

The mandatory sentence remains exact:

`Submitting a request does not confirm that every requested document is applicable or available.`

At `1440`, `768` and `390`, independent Chromium observation returns foreground `rgb(212, 224, 235)` (`#d4e0eb`), font size `14px`, a visible non-zero text box, and the unchanged document-band gradient `#052d60 → #062b5b → #064a65`. Independently recomputed contrast is:

| Background stop | Contrast with `#d4e0eb` |
|---|---:|
| `#052d60` | `10.10:1` |
| `#062b5b` | `10.41:1` |
| `#064a65` | `7.20:1` |

Every stop exceeds the `4.5:1` acceptance threshold. The three revised formal full-page renders were opened at usable scale. The qualification is now clearly legible, and its sentence, line wrapping and placement remain associated with the Document Request CTA.

**Acceptance condition:** satisfied.

## 4. Adjacent regression and inherited coverage

Fresh targeted runtime checks reproduce `clientWidth = scrollWidth` and the unchanged page heights `6353 / 7816 / 14001` for `1440 / 768 / 390`. Across all three widths:

- the Document CTA remains `Request M-350 Documents` and both approved Document option blocks remain present and readable;
- the preceding Technical Data region retains exactly 15 rows and the following Market region retains four route cards;
- one H1 and exactly two Hero actions remain;
- public TDS version exposure, Related Grades and buyer-visible `CURRENT` remain zero;
- no horizontal overflow, section-boundary shift, clipping or new contrast problem appears in the affected Technical Data → Documents → Markets sequence.

The parent review's content, family consistency, Paper distinction, full-page visual, 44px, menu, cookie, focus and contextual-action conclusions are inherited. The source comparison proves those implementations unchanged, and the byte-identical menu/cookie evidence confirms the revised selector cannot affect their captured states.

The targeted observation record is `GRADE-M350_D32_GATE5_TARGETED_RECHECK_OBSERVATION_V0.1.json`, SHA-256 `BFE1964BE35818EB3B4F2F076F1D6A2DB98320071BE77C85A6B94CFFB131A222`; its failure list is empty. No new Blocker, Important or Minor Finding was introduced.

## 5. Final disposition

`GRADE-M350-D32-G5-IR-01-R1 = REVIEW_PASS / F01 CLOSED`

The parent initial review plus this targeted recheck constitute the complete valid Gate 5 independent review chain for `GRADE-M350-D32-G4-FREEZE-02`. The combined technical result is `PROJECT_CONTROL_REVIEW_PASS` with zero open Gate 5 Findings.

This result is ready for Project Control to receive and, under the standing authority, decide the single combined Gate 4 closure. It does not itself close Gate 4, start Gate 6, dispatch D32 development or authorize deployment, publication or indexing.
