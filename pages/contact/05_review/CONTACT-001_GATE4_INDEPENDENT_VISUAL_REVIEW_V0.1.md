# CONTACT-001 Gate 4 Independent Visual Review V0.1

## 1. Review control and intake

| Field | Value |
|---|---|
| Review ID | `CONTACT-001-G4-IR-01` |
| Review stage | `GATE5_INDEPENDENT_VISUAL_REVIEW` mapped to the merged Gate 4 final review |
| Page / route | `CONTACT-001` / `/contact/` |
| Mode | `INDEPENDENT_REVIEW / INITIAL` |
| Date | 2026-09-10 |
| Actual execution author | `08Contact 页面视觉策划`; thread `01a05138-e6a4-7122-b322-0f12aca58b86` |
| Independent reviewer | `00-gate3`; thread `01a07589-a65c-7a22-a8fd-c0ed42bc602d` |
| Dispatch source | Root thread `01a04b7e-5fed-7171-ae92-e946cfd7bdae` |
| Workset / bundle | `CONTACT-001-G4-WORKSET-20260910-01` / `CONTACT-001-G4-BUNDLE-V0.1-6D4F4AAF` |
| Frozen source | `CONTACT-001_GATE4_COMPLETE_VISUAL_V0.1.html`; 35,914 bytes; SHA-256 `6D4F4AAF1300B75A384B18E011DEE21D43C5ED551596C6D9C524E689F3BFF78E` |
| Result | `CHANGES_REQUIRED / TARGETED_REVISION_REQUIRED` |
| Required Findings | `1` |
| Gate effect | Gate 4 remains open. This report does not approve/close Gate 4 or start Gate 6. |

The handoff intake is complete and valid. Manifest V0.4, approved Gate 2 A/B/C, the approved Gate 3 frozen combination and closure, Gate 4 direction/design/workset, preflight/freeze/inventory, execution submission/self-check, Gate 4→Gate 5 handoff, formal runtime/readback, complete frozen HTML and all 11 `approval_core` images were read. The execution author and Reviewer are different actual tasks.

Independent recomputation confirmed the source plus all 11 formal images match the inventory's paths, bytes, dimensions and SHA-256. No new screenshots were generated because the existing formal failure-state evidence is readable and directly demonstrates the Finding.

## 2. Independent visual coverage

The 1440, 768 and 390 full-page images were read from Header through Footer. The Deep Navy Hero gives general contact clear first priority; verified facts, specialist routes and the general form have distinct visual groups; typography, spacing, density and card rhythm remain professional across all three layouts. Long entity/address copy wraps correctly in the default pages, the form remains understandable, and Footer closure has no abnormal blank region.

Menu evidence at 768 and 390 correctly shows the shared owner pattern: Contact is absent from primary navigation, About alone is active, RFQ remains present, and no buyer-visible `CURRENT` appears. The frozen source keeps the shared Header/Footer/Menu/Cookie markup and behavior from the approved neutral consumer and adds no page-specific override of those shared selectors.

Focus, validation, submitting, failure, success and restricted-detail assets were visually checked. Focus and state boundaries are clear without relying on color alone. Recorded contrast samples meet 4.5:1, controls meet the 44×44 requirement, and no page-level horizontal overflow, collision or fixed-element obstruction was found. Buyer Clean content is preserved; there is no `mailto:`, Phone/WhatsApp surface or excluded mailbox. Production processor/receiver, spam, retention, real-device and assistive-technology work remains correctly classified as later Gate 6/8/9 dependencies.

## 3. Required Finding

### `CONTACT-001-G4-IR-F01` — P1 / IMPORTANT — retained long single-line values are visually clipped at 390

**Requirement and location**

Approved Gate 2 Contract C §8.6 requires: “Long values up to each field limit wrap within the field, review/error state and mobile viewport without clipping or horizontal overflow.” The submitting contract also requires all field values to remain visible, and the failure contract requires all six values to remain intact and available for correction. The affected formal evidence is `CONTACT-001_G4_390_FORM_FAILURE_PRESERVED.png`; the same single-line controls are used in the submitting state.

**Observed result**

The failure image visibly cuts the Company value after `Global Industrial Materials Procureme…`. Independent Chromium measurement at 390 found a 278px input content width, while the 70-character Company fixture measures about 536px and the 74-character Subject fixture about 552px. Both controls have `scrollLeft=0`, and their frozen implementation is a native single-line `<input>`, so the retained suffix is not visible or wrapped in the reviewed state. The DOM contains the full strings, but preservation in data does not satisfy the approved visual readback requirement. Values closer to the approved 160/120-character limits increase the defect.

**Buyer impact**

After a failed or pending submission, a mobile buyer cannot visually confirm the complete retained Company and Subject values and may reasonably conclude that the page truncated their input. This weakens the failure-recovery promise at the moment when the buyer most needs confidence that work was preserved.

**Responsibility and required revision**

Project Control must coordinate the approved content/behavior contract owner and the Gate 4 execution author. The revision must preserve the approved single-line field semantics, six-field schema, exact Buyer Copy, submitting read-only behavior, failure edit/retry behavior and route ownership while providing a fully readable wrapped presentation of retained long values in submitting and failure states. Gate 4 must not silently change field types or amend Contract C.

**Deterministic acceptance condition**

1. Produce a new versioned frozen source/bundle; preserve V0.1 unchanged.
2. At 390, demonstrate both submitting and failure states with the current long Company and Subject fixtures, plus values at their approved 160/120-character boundaries: every retained character is visibly reviewable through an explicitly approved wrapped presentation, with no internal visual truncation and no page-level horizontal scroll.
3. Confirm all six underlying values remain unchanged; submitting remains read-only/duplicate-blocked; failure remains editable with `Try again`; no new field, route, fallback, buyer claim or unapproved copy is introduced.
4. Recheck the affected 390 states and the adjacent 768 behavior, shared Footer closure, focus order and error/success state regression. Unchanged full-page and shared-owner evidence may be inherited by exact identity.
5. Return the revised combination for targeted independent recheck under the same Finding ID.

## 4. Preserved valid coverage and next step

All other reviewed Gate 4 coverage remains valid for the exact V0.1 bundle: three full pages, shared Menu/Chrome assembly, default content hierarchy, verified-fact presentation, specialist routing, six-field form structure, focus, validation summary, state differentiation, bounded success, restricted details, contrast, touch targets and Buyer Clean exclusions.

`CONTACT-001-G4-IR-01 = CHANGES_REQUIRED / TARGETED_REVISION_REQUIRED` with required Findings `1`. Next responsibility is Project Control → Gate 2 contract owner as needed → original Gate 4 execution author. After the versioned revision, the same independent Reviewer should perform `TARGETED_RECHECK` of `CONTACT-001-G4-IR-F01` and adjacent regression only. Gate 4 must not close and Gate 6 must not start until that recheck passes.
