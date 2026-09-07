# DOC-000 Gate 7 Responsive / Accessibility / Interaction Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Package ID | `DOC-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Required viewports | 1440 Desktop, 768 Tablet, 390 Mobile logical width |
| Additional | Mobile Menu Open and 200% zoom |

## 1. Responsive assembly

| Surface | Required behavior |
|---|---|
| 1440 Desktop | shared 84px Header; two-column Hero; complete breadcrumb/Hero/direct CTA/media; Selector in approved desktop arrangement; complete body and shared Footer |
| 768 Tablet | shared responsive Header; Hero stacks without changing content order; select/message/action have non-overlapping full-width behavior; no clipped content |
| 390 Mobile | shared 64px Header; single-column page; complete H1; Selector, cards, FAQ and Closing fit logical width; Footer stacks/wraps according to shared owner |
| Mobile Menu Open | shared `Logo | RFQ | Menu` header; Documents is the structural current item; terminal RFQ remains visible; inactive menu surface is not exposed |
| 200% zoom | reflow without two-dimensional scrolling for page content; no clipped CTA, label, error, FAQ icon or Footer control |

The mobile 780px raster is 390 logical @2x evidence, not a 780px CSS breakpoint.

## 2. Global target and focus rules

- Interactive logical targets are at least 44×44px where applicable.
- Keyboard focus is clearly visible and not color-only.
- Focus order follows visual/DOM order.
- No content or action is available only on hover.
- Hover, focus, active and visited states preserve legibility and sufficient contrast.
- Disabled styling is not used to conceal required Selector or Closing actions.
- Sticky Header does not obscure a focused target after in-page focus movement.

## 3. Selector acceptance states

### Initial

- No Grade selected.
- Prompt is `Select a product grade`.
- Helper is visible.
- Continue is visible, focusable and operable; not disabled or `aria-disabled`.
- Stable validation space prevents disruptive layout shift.

### Empty error

- Activation causes no navigation.
- Exact error: `Select a product grade to continue.`
- Error is programmatically associated with the select.
- Select exposes invalid state and receives focus.
- Screen reader announcement occurs once without duplicate alert loops.
- Layout remains stable at 1440, 768 and 390.

### Selected

- Selected value remains visible in the control.
- Exact confirmation template: `Selected product grade: {GRADE}`.
- Stale error state clears.
- Continue remains in the same location.
- Activation uses the Grade-only route contract.

Long selected text and error content must wrap without horizontal overflow or button collision.

## 4. Closing CTA acceptance

| State | Required action |
|---|---|
| No Grade | visible `Select a Product Grade` button focuses the upper select; no navigation |
| Valid Grade | visible `Continue to Request Documents` uses the same allowlisted Grade handoff as Selector |

Focus movement to the upper select accounts for the sticky Header. The action slot is never empty, hidden behind a false disabled state or replaced with Contact fallback.

## 5. FAQ acceptance

- Exactly six question buttons are visible in initial HTML/DOM.
- Default state is all collapsed.
- One item may be expanded at a time.
- Each question is a native button or equivalent accessible disclosure control.
- Each has stable `aria-expanded` and `aria-controls`; each answer has a matching labelled region.
- Enter and Space toggle the focused item.
- Focus stays on the activated question unless the user moves it.
- Opening one item closes the previously open item without focus loss.
- Answers remain in DOM and are not loaded by click.
- Long questions wrap without colliding with disclosure icons at 390px or 200% zoom.
- Visual plus/minus/icon state is not the only programmatic expanded-state indicator.

## 6. Link and navigation semantics

- Hero CTA is a native link to `/request-documents/` with no query.
- Explore Products is a native link to `/products/` when the route is valid.
- Home breadcrumb is a native link to `/`.
- Documents breadcrumb current item is programmatically current without a misleading link requirement.
- One current Documents navigation item exists in the active navigation surface.
- Inactive Desktop/Mobile navigation surfaces are removed from accessibility tree and tab order.

## 7. Shared Mobile Menu

- Menu trigger has an accessible name and correct expanded/controlled relationship.
- Opening moves focus according to the shared Global Chrome contract.
- Escape closes and returns focus to the trigger.
- Focus is contained appropriately while the modal/drawer menu is open.
- Background content is not focusable/announced when the shared menu is modal.
- RFQ remains visible and points to `/request-a-quote/`.
- Documents current state is structural and does not display internal status words.

## 8. Text, media and overflow

- H1, scenario/category titles, FAQ questions and legal labels wrap naturally.
- No text-bound horizontal overflow at 390px, 320px stress check or 200% zoom.
- No fixed card height clips long copy.
- Decorative Hero/media icons have empty ALT or are hidden from assistive technology.
- Informational icons never imply a verified file/certificate and are not required to understand the copy.
- If Hero media is absent, the layout closes cleanly without a blank evidence placeholder.

## 9. Keyboard sequence smoke path

1. Traverse shared Header and current Documents navigation.
2. Reach Hero direct link and verify native destination.
3. Reach Selector, open/select an option using keyboard.
4. Activate Continue empty and selected states.
5. Reach Explore Products link.
6. Traverse six FAQ buttons and toggle with Enter/Space.
7. Activate Closing unselected/selected state.
8. Traverse Footer links and Cookie Settings.

No focus trap, skipped control, duplicate current item or off-screen focused element is acceptable.

## 10. Required Gate 8/9 evidence

- screenshots or equivalent visual evidence at 1440, 768 and 390;
- Mobile Menu Open evidence;
- Selector initial/error/selected evidence;
- FAQ default and one-open evidence;
- keyboard/focus trace;
- 200% zoom and 320px overflow trace;
- automated checks may supplement but not replace manual keyboard and screen-reader-oriented inspection.

## 11. Boundary

Status remains `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. This acceptance specification does not authorize implementation or test execution in this task.
