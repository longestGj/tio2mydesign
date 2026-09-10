# CONTACT-001 Gate 4 complete visual targeted repair V0.2

## Version purpose

V0.2 is a versioned repair of `CONTACT-001-G4-IR-F01`. V0.1 remains the immutable reviewed parent. All valid V0.1 visual decisions and shared-owner assemblies are inherited by exact identity except for the submitting/failure retained-value presentation.

## Changed presentation

Submitting and failure states now expose all six retained values in a non-editable definition list above the form fields. The component uses the established soft-surface, Navy label and Teal rule language. It is two columns above 560px and one column at 390px; Subject and Message span the full width on wider layouts. Arbitrarily long unbroken content wraps inside the component.

The group has the concise accessible label `Entered form values`. Its visible identifiers repeat the six already-approved field labels. There is no added heading or explanatory promise.

## Preserved contracts

- Six-field schema and field types are unchanged.
- Approved Buyer Copy, validation copy, privacy copy and success/failure copy are unchanged.
- Submitting remains read-only, `aria-busy`, and duplicate-blocked.
- Failure remains editable with `Try again`; edits synchronize to the review.
- Default, focus, validation, success and restricted-detail behavior are unchanged.
- Shared Header, Mobile Menu, Footer, Logo, About active mapping and persistent RFQ route are unchanged.
- Contact remains outside primary navigation and does not become an RFQ fallback.

## Evidence expectation

Formal evidence includes the three inherited full-page breakpoints, both Mobile Menu widths, focus, validation, success, restricted details, current-fixture submitting/failure states, and dedicated 390px element captures of current and 160/120 boundary retained values. Browser measurements must show exact value equality, complete rendered boxes and no horizontal overflow.

Lifecycle: `RESOLVED_IN_DRAFT_PENDING_TARGETED_RECHECK / NOT_APPROVED`.
