# GRADE-M350 D32 Gate 5 Independent Visual Review V0.1

## 1. Control and disposition

| Field | Value |
|---|---|
| Review ID | `GRADE-M350-D32-G5-IR-01` |
| Dispatch ID | Codex subagent task `/root/m350_gate5_independent_visual` |
| Handoff ID | `GRADE-M350-D32-G4-G5-HANDOFF-01` |
| Page / URL | `GRADE-M350` / `/products/m-350/` |
| Date | `2026-09-20` |
| Review mode | `INDEPENDENT_REVIEW / INITIAL` |
| Gate 4 executor | Parent controller instance `/root`, acting under `agent-gate4-complete-visual` |
| Independent reviewer | `/root/m350_gate5_independent_visual`, acting under `agent-gate5-independent-visual-review` |
| Role / method | Gate 5 Agent V0.5; Layout and Interaction Verification V0.8; Independent Visual Review V0.2 |
| Frozen workset / bundle | `GRADE-M350-D32-G4-WORKSET-01` / `GRADE-M350-D32-G4-FREEZE-01` |
| Technical result | `CHANGES_REQUIRED` |
| Project-control mapping | `RETURN` |

The executor and Reviewer are different agent instances. The Reviewer did not edit the frozen source, formal images, Gate 4 execution record, self-check, handoff, current Manifest or approval state. One Important Finding remains open, so this review does not support `PROJECT_CONTROL_REVIEW_PASS`.

## 2. Admission and identity check

The handoff is otherwise complete and reviewable. The authority Manifest is `GRADE-M350_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.4.md`; Gate 2 public copy SHA is `85A4C0183A382F2F8CBFC57D7F59D7DF515111C22F811D97AE195D64C4A6957A`; Gate 3 closure SHA is `EF1B9F228D39BB8DEBFA27E019C07F01C251C89D1D450E0BD48DB506AC7BBB50`.

The Reviewer independently recomputed every frozen file identity. All eight files match the Gate 4 evidence index:

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `m350-visual.html` | `31336` | `5CBCAD5E441B8439EAB7DDBDD1B6499CDFA4EC0CD91B0A243D92A8FF2AD1233F` |
| `capture_gate4.py` | `6287` | `954D79119242774518EE0BE1AA574B3D3EEC9F61ED45E603D503578DE7CEBBC1` |
| `gate4_measurements.json` | `12914` | `3190785CEA99F9986BA66CF4FE9795E9776D4DA8D89EE59D327B646D77A0A93C` |
| `M350_D32_G4_FULL_1440.png` | `1341889` | `4798C170FBF887D06EBF2F904F0C91095A833AC3B10B93B41801268607F10F85` |
| `M350_D32_G4_FULL_768.png` | `1255878` | `1FBFD4AECFC3F1CAAD32F0A178B5B24CE61B7496EAE7E013F026A35A3F232E54` |
| `M350_D32_G4_FULL_390.png` | `1170939` | `1789E66CBFC66843F0C6A20F47571856B474F68E3F38DFCA65E3EB244F29B786` |
| `M350_D32_G4_MENU_390.png` | `83977` | `BE4E32FA510D430BCB4168D369A553D30FB4075521C2E6EF5199F9F472758D76` |
| `M350_D32_G4_COOKIE_390.png` | `58111` | `89EA406EEFFD213A0FEC3B50BC90241BA205F7F8E379E42A0604B5764F9DAB4A` |

The three full-page PNG dimensions are exactly `1440×6353`, `768×7816` and `390×14001`. The source loads the current local Inter dependency and both approved production SVG logo paths without request or console errors. No evidence/source mismatch was found.

## 3. Independent coverage

The Reviewer opened all five formal PNGs and read the three long pages through their complete module connections at usable scale. No duplicate formal screenshots were saved. Independent headless Chromium observation then loaded the frozen source at CSS widths `1440`, `768` and `390`, DPR `1`.

The independent run reproduced:

- `clientWidth = scrollWidth` at all three widths, with no text/control outside the viewport and no content clipping;
- one H1, two Hero actions, six application blocks and exactly 15 technical rows;
- all 119 extracted Gate 2 public-copy fragments present and the 15 Standard/Typical row triples exactly equal to the approved table;
- zero public `V3 2023`/`2023` version exposure, zero Related Grades and zero buyer-visible `CURRENT`;
- minimum ordinary visible action size `44×44` CSS px;
- five contextual Quote, Sample and Document actions carrying the required `site_scope=tio2-my`, `grade=M-350`, `source_page=GRADE-M350`, plus `requested_type=TDS` on the TDS action;
- mobile-menu opening, Home focus entry, one Products current marker, inert background, complete forward/reverse focus loop, Escape close and focus return at both `768` and `390`;
- cookie-dialog opening, Close focus entry, two-control focus loop, Escape close and trigger focus return at `1440` and `390`;
- visible skip-link focus treatment, loaded fonts and loaded primary/reverse logos.

The Paper card is visibly distinct while retaining the exact neutral limitation that it is an additional evaluation path without TDS paper-specific performance detail. The Grade Detail module family is coherent with the current Home/Product Hub navy, teal and light-neutral system without copying Hub structure. The data-summary artwork is abstract and makes no product, package, factory, certification or performance claim. The responsive transformations retain object/value relationships; the long mobile technical section is clearly labelled and readable.

Independent machine observations are stored in `GRADE-M350_D32_GATE5_INDEPENDENT_RUNTIME_OBSERVATION_V0.1.json`, SHA-256 `1970565179B50CD139110612BB85E309B3D1D641FC76778E652F84155487431A`. Its structural/interaction failure list is empty. The observation record does not override the visual Finding below.

## 4. Findings

### `GRADE-M350-D32-G5-F01` — Important — OPEN

**Location:** `m350-visual.html`, Document Request band; the public sentence `Submitting a request does not confirm that every requested document is applicable or available.` at source line 69, styled by the generic `.small` rule at source line 14.

**Expected:** This required availability limitation remains comfortably readable on every approved viewport. At its actual 14px size, normal text requires at least `4.5:1` contrast against its background.

**Observed:** The element receives foreground `#64748b` while its section background is the dark gradient `#052d60 → #062b5b → #064a65`. Independent contrast recomputation gives only `2.85:1` against `#052d60`, `2.93:1` against `#062b5b`, and `2.03:1` against `#064a65`. The low contrast is visible in the formal 1440, 768 and 390 renders; it is materially fainter than the other Document Request text.

**Buyer impact:** A buyer can miss the qualification that submitting the request does not confirm document applicability or availability. This is an approved meaning boundary, not decorative secondary copy.

**Responsibility:** Gate 4 executor.

**Acceptance condition:** Create a new frozen revision that changes only the dark-band disclaimer treatment to a colour with at least `4.5:1` contrast across the full gradient, without changing its words, section order or semantics. Re-render the affected `1440`, `768` and `390` full-page evidence and recheck the disclaimer, Document CTA/options, section boundary and adjacent Technical Data/Market regions. Bind the new source and evidence identities in a revised handoff bundle.

No Blocker or Minor Finding was recorded. No other Important Finding remains from this initial review.

## 5. Scope limits and final decision

This review inspected the local Gate 4 visual source and its stated interactions. It did not prove D32 WordPress data projection, receiver readiness, live route resolution, Schema, production behaviour, deployment or publication; those belong to Gate 8/9. Real-device, screen-reader and native-zoom evidence were not required under the user's current project instruction and were not performed.

`GRADE-M350-D32-G5-IR-01 = CHANGES_REQUIRED / RETURN`

The unchanged coverage above remains valid for a targeted recheck if the executor makes only the accepted contrast correction and supplies a new frozen bundle. Gate 4 remains `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; Gate 6 must not start from this bundle.
