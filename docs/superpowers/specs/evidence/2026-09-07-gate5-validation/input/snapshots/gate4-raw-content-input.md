# Gate 4 isolated exercise: Reference Materials Desk

This is a synthetic method exercise, not a TiO2 page, real product claim, new page identity or user-approved business fact. The content and layouts below are fixed within this exercise so the method can be evaluated against raw requirements. No production Header/Footer is required: the neutral shell is the plain text `Reference Materials Desk`.

## Task and authority

Use the project candidate `skills/brand-applied-visual-design/SKILL.md` to create representative visual samples, concrete reusable visual rules and saved evidence. Apply the supplied industrial brand language to the fixed structures below. Do not change copy or structure. Author's self-check is not independent review.

Direction: calm technical reading with clear parameter relationships and a distinguishable request action. Retain the order Orientation, Comparison, Request. No alternative art direction is required. Samples may be one offline HTML preview, explicitly identified as three regions rather than a complete production page. Use 1440,768,390 logical widths at 1x.

Read these brand references as styling sources, applying their scope correctly:
- D:/23MySec/brand/visual/TiO2_Malaysia_Visual_Standard_V1.0.md
- D:/23MySec/brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md

The neutral shell does not use the TiO2 Logo, company name, navigation or shared consent components. Therefore this exercise cannot prove production Global Chrome assembly. Functional teal from the later addendum applies to light-surface controls. Use Inter supplied at `input-assets/Inter-Variable.ttf`; if loading fails, record the actual substitution and limitation rather than claiming Inter was used. Body text 16px or above. Normal text contrast >=4.5:1; large text and meaningful non-text controls >=3:1. Visible controls must have actual target width and height >=44px. These are exercise acceptance requirements, not a new project standard.

## Exact visible content

Use the following text literally; whitespace/line wraps may differ. Labels for the sample viewer itself can be outside the sample and clearly separated. Do not display this instruction document as buyer copy.

### Region O — Orientation

- H1: `Compare materials before requesting an evaluation pack`
- Intro: `Use the technical comparison to identify the information you need. The example values describe different measurement conditions and must be read with their notes.`
- Primary link: `Prepare an evaluation request` → local #request
- Secondary link: `Read the comparison` → local #comparison
- Illustration title: `Reading a comparison`
- Illustration caption: `Read the value, unit and measurement condition together.`

1440: text on left, a small optional explanatory illustration on right. 768 and390: text followed by illustration. Illustration may be an original simple SVG showing three boxes labelled `Value`, `Unit`, `Condition`; these are the only allowed illustration words. It must be visibly informational, without seals/checkmarks/certificates/factories. Treat this diagram as redundant decoration (`aria-hidden` or equivalent), with its caption outside the image. No external photographs. Media-present and media-absent variants required; in absent state remove illustration panel and caption together, expand desktop text to available width, and preserve heading, intro and both actions. The absent variant is already part of this exercise's fixed layout, not a new structural choice. No empty placeholder.

### Region C — Comparison

- H2: `Compare the measurement conditions`
- Intro: `These fictional records are for interface evaluation. They are not product specifications or recommendations.`
- Column labels: `Record`, `Measured value`, `Measurement condition`, `Note`
- Record A: `Sample Alpha — long-form technical reference`
- Value A: `94.5 %`
- Condition A: `Dry sample basis; measured after conditioning for 24 hours at 23 °C.`
- Note A: `A — A percentage on a dry sample basis is not directly comparable with a liquid dispersion result.`
- Record B: `Sample Beta — extended evaluation reference with a deliberately long record name`
- Value B: `0.001 g/L`
- Condition B: `Dilute dispersion; measurement made after the stated preparation sequence, without converting to a dry sample percentage.`
- Note B: `B — Preserve the unit and preparation condition when copying this result into an evaluation note.`
- Record C: `Sample Gamma — assessment reference`
- Value C: `12–18 µm`
- Condition C: `Observed interval across the prepared sample; the interval is not a guaranteed production tolerance.`
- Note C: `C — The endpoints describe the observed sample interval only.`

1440 and768: comparison table with all four columns; content wraps, all rows remain complete. 390: three ordered cards, each containing record, measured value, condition and associated note with labels. No horizontal scrolling, truncation, hidden notes or content tooltip substitution. Row/card structures are fixed. Typography, column proportions within the table, surfaces and spacing are open to visual design.

### Region R — Request

- H2: `Prepare an evaluation request`
- Intro: `Choose a reference record and describe the question you want to discuss. This offline example shows how a request could be prepared.`
- Select label: `Reference record`
- Placeholder option: `Choose a reference record`
- Three options: exact Record A/B/C labels above; values alpha/beta/gamma. Single selection. Full selected name must remain visibly readable at every viewport and state; an equivalent accessible single-select presentation is permitted. Dropdown/custom-select behavior is implementation choice, cardinality is fixed.
- Textarea label: `Evaluation question`
- Helper: `Describe the result or measurement condition you want to understand. You can leave this question blank for now.`
- Primary button: `Preview request`
- Secondary button: `Clear selection`
- Error, when Preview request is clicked without a record: `Choose a reference record before previewing your request. Your evaluation question has been kept so you can continue without typing it again.`
- Success, when a record is chosen and Preview request clicked: `Your request preview is ready. Nothing has been sent.`
- Status prefix before selected full name: `Selected reference:`

All widths: a single-column form, label and helper adjacent to their field, error adjacent to select, actions after textarea/helper, result follows actions. No field order change, no real submission. Clear selection clears only the record, resets error/success and selected summary, preserves textarea. Invalid preview preserves textarea, focuses record control. Success preserves inputs and shows exact selected name with the prefix plus success sentence. On selection change, clear prior error/success; summary appears only with success. Textarea optional, never add required behavior.

Required visual states: initial, missing-record error with a nonempty textarea, Beta selected with its full long name, successful Beta preview with question preserved, and media absent. Exercise state coverage at all three widths is required; multiple states may share one export when actually visible. A focused control state must have rendered evidence; operate the focus rather than drawing a fake indicator. Keyboard testing may be limited but must report actual coverage.

## File handoff and boundaries

Working root: D:/23MySec/99_workspace/gate4-method-validation-2026-09-07
Design source/output: working root /design-v1/
Method report: working root /design-v1/report.md
Use relative asset paths so archived output remains usable.
Save source, PNG exports, render script and raw observation evidence, and an asset inventory (path, role, source identity, logical/physical width, scale,state,bytes,SHA-256). Exclude inventory/report self-hashes. Check fonts loaded and actual geometry/contrast. Save and read back the report, open all delivered PNGs at readable scale. Return saved absolute paths, summary and incomplete items. Do not modify input.md or source brand/Skill files. Do not access D:/16Wordpress_nextjs, send requests, install dependencies or use paid tools.

Bundled Node packages: C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules
Playwright is available there. Chrome channel may be used if bundled browser path unavailable. Work entirely offline with file URLs or localhost. No need to build a real page or publish anything.
