# GRADE-M350 D32 Gate 4 Complete Visual Execution V0.2

## 1. Control

| Field | Value |
|---|---|
| Workset ID | `GRADE-M350-D32-G4-WORKSET-01` |
| Page ID | `GRADE-M350` |
| Date | `2026-09-20` |
| Authority Manifest | `GRADE-M350_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md` |
| Gate 3 closure | `GRADE-M350_D32_GATE3_PROJECT_CONTROL_CLOSURE_V0.1.md`, SHA `EF1B9F228D39BB8DEBFA27E019C07F01C251C89D1D450E0BD48DB506AC7BBB50` |
| Design source | `04_planning/m350-d32-gate4-v0.2/m350-visual.html` |
| State | `COMPLETE_VISUAL_FROZEN / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Allowed write scope | M-350 planning and review directories only |

The workset applies the approved Gate 3 structure and current visual system to a complete Grade Detail page. It does not modify the approved Gate 2 copy, shared component owners or D32 code.

## 2. Shared input index

| Input | Identity | Scope consumed |
|---|---|---|
| Gate 2 Full Copy V0.1 | `85A4C0183A382F2F8CBFC57D7F59D7DF515111C22F811D97AE195D64C4A6957A` | Exact public text, metadata, CTA labels and technical data |
| Gate 3 Specification V0.1 | `202E56807DE4542F488ABE1C687314745F26D3B358FFC4D37E20D7C20979B2D3` | Module order, relationships, action semantics and responsive risks |
| Gate 3 handoff | `0F576E2FD80858422D9353C1B18EAD1DABD05E97783E16E166AF87B8781D498B` | Exact family/shared references and Gate 4 open decisions |
| Global Header/Footer V0.5 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | Shared Header/Footer, current navigation, fixed RFQ, legal and cookie behavior |
| Product Detail Chrome addendum V0.5 | `DE8BF3DFB4F50DFF2C8CCD2FD0AB665E21FE02D7D00A6B558CEBC0344A1CC6EA` | Grade Detail consumption boundary |
| Production logo manifest V1.0 | `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894` | Primary and reverse SVG assets |
| Product Hub visual context | source SHA `BDE34207290F7E6ED9064587AF76BC6492DF02F55B3B84C6B7991BFE68F4D235` | Current typography, navy/teal/light-neutral palette, restrained surfaces and action treatment only |
| Historical M-350 family renders | desktop `72B56E...1818D`; mobile `1A6E6C...BE6DF` | Grade Detail family context only; no historical copy or D16 state |

## 3. 4A visual-direction check

`VISUAL_DIRECTION_CHECKED = PASS`

The selected direction is a precise industrial product-data page using the current shared visual language:

- navy carries hierarchy and document confidence;
- teal identifies actions, navigation state and structured evaluation cues;
- white and light-neutral surfaces preserve long-form and table readability;
- restrained borders, small shadows and controlled radii match the Product Hub family without copying its root-page layout;
- a data-summary panel replaces the Gate 3 dashed structural treatment without introducing product photography or unsupported claims.

Representative risks were checked in the same design source before full-page capture: the long H1 and Hero CTAs, six positioning facts, the separately qualified Paper block, the 15-row Standard/Typical table, dark document band, long market labels, sample action, mobile Header menu and cookie modal. The direction preserves content hierarchy and creates no new shared component or visual owner.

## 4. 4B complete-page composition

| Area | Final visual treatment | Preserved contract |
|---|---|---|
| Hero | soft technical gradient, compact M-350 badge and structured data summary | exact copy; Quote + Sample only; no fake product pack or certification |
| Positioning | numbered six-card evidence grid | exact six facts and process link semantics |
| Applications | consistent bordered cards; Paper uses a wider teal-tinted qualified variation | five TDS directions plus separately qualified Paper |
| Evaluation | paired comparison panels with one shared caution boundary | full bullets and non-guarantee statement |
| Technical data | desktop/tablet table; mobile labelled row cards; TDS action kept adjacent | exactly 15 rows and non-specification note |
| Documents | navy/blue document band with two approved labelled statements | version-free public wording and controlled request action |
| Markets | four consistent route cards with shared disclaimer | no registration, stock or local-availability inference |
| Sample | concise action panel, no fake fields | approved text and route action only |
| Global Chrome | current logo, navigation, fixed RFQ, footer and cookie modal | shared-owner behavior; no buyer-visible `CURRENT` |

Final composition uses `Inter`, navy `#062b5b`, teal `#008078`, text `#334155`, secondary text `#64748b`, and light surfaces around `#f5f8fb`. Verified contrast ratios include navy/white `13.96:1`, teal/white `4.82:1`, main text/white `10.35:1`, secondary text/white `4.76:1`, and footer text/navy `12.82:1`.

## 5. Evidence index and freeze

| Artifact | Bytes | SHA-256 | Evidence role |
|---|---:|---|---|
| `m350-visual.html` | `31375` | `AAB959A66FD8790C04D1754EE746D5C1E2F9177A52CFA59C0B9EE68E40E44F32` | Corrected frozen editable visual source |
| `capture_gate4.py` | `6287` | `954D79119242774518EE0BE1AA574B3D3EEC9F61ED45E603D503578DE7CEBBC1` | Playwright capture and machine checks |
| `gate4_measurements.json` | `12914` | `DB0082B97984CA51DBC822BA062D218F0E8663B126B81C435D0FA082F546DE83` | Geometry, content counts, states and evidence hashes |
| `M350_D32_G4_FULL_1440.png` | `1342225` | `03F744F3335D56E6B501B1228B515443DE637B17CCAE3F077032FECC4811B36A` | Desktop full page, `1440×6353` |
| `M350_D32_G4_FULL_768.png` | `1255900` | `FCAF1E79B0F76415793B00CD03E162160BD65B7F10214CA43F934572A76921FA` | Tablet full page, `768×7816` |
| `M350_D32_G4_FULL_390.png` | `1170737` | `185D76F852BE3E104914689493A77710C5659F8D58EAA1A25EA0524861E4F252` | Mobile full page, `390×14001` |
| `M350_D32_G4_MENU_390.png` | `83977` | `BE4E32FA510D430BCB4168D369A553D30FB4075521C2E6EF5199F9F472758D76` | Mobile navigation state |
| `M350_D32_G4_COOKIE_390.png` | `58111` | `89EA406EEFFD213A0FEC3B50BC90241BA205F7F8E379E42A0604B5764F9DAB4A` | Cookie modal state |

Render conditions: local Chromium through Playwright, CSS logical widths `1440`, `768`, `390`, DPR `1`, local frozen Inter variable font and production SVG logo assets. All five formal images were opened after capture and checked through their full visible range.

## 6. Self-check and open boundary

`PASS_FOR_FORMAL_RENDER = TRUE`

- no horizontal overflow at the three required widths;
- one H1, 15 technical rows, two Hero actions and six application blocks;
- no public TDS version number, Related Grades or buyer-visible `CURRENT`;
- minimum visible ordinary action size `44×44` CSS px;
- mobile menu opens with focus on Home, contains one current Products item, makes the page inert and closes on Escape;
- cookie modal opens with focus on Close and closes correctly;
- contextual conversion links retain complete `tio2-my`, Grade and source-page fields; TDS retains its requested type;
- all approved copy remains visible and the two document-label colons are preserved.

The 390px page remains long because all approved copy and 15 technical rows are present. The visual hierarchy, labelled row-card conversion and section rhythm keep it readable; page length is not treated as a reason to delete content. Static/local evidence does not prove production routing, data projection or receiver readiness; those belong to Gate 8/9.

New Gate 5 first review returned `GRADE-M350-D32-G5-F01`: the mandatory document-request qualification inherited secondary text color `#64748b`, producing only `2.03:1–2.93:1` contrast on the dark band. The targeted revision changes only `.documentBand .small` to `#d4e0eb`; the recomputed range is `7.20:1–10.41:1`. Fresh three-viewport full-page renders and the measurement index replace the first-freeze evidence. Menu and cookie outputs are byte-identical because the changed selector does not occur in those captured states.

`COMPLETE_VISUAL_FROZEN = GRADE-M350-D32-G4-FREEZE-02`

This corrected exact combination is ready for targeted new Gate 5 recheck. It is not yet Gate 4 approved or a Gate 6/D32 handoff.
