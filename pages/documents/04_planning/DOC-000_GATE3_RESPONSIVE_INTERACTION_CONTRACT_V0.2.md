# DOC-000 Gate 3 Selector-CTA Responsive and Interaction Contract V0.2

## 0. Control

| Field | Value |
|---|---|
| Decision ID | `DOC-000-G2-G3-SELECTOR-CTA-01` |
| Status | `APPROVED / CLOSED` |
| Page | `DOC-000` / `/documents/` |
| Content authority candidate | `DOC-000_CONTENT_ARCHITECTURE_V0.8.md` |
| Wireframe authority candidate | `wireframes/DOC-000_WIREFRAME_V0.6.md` |
| Previous interaction contract | V0.1 retained as historical/superseded candidate |

## 1. Placement and responsive contract

| Viewport | Selector placement | Selector layout | CTA |
|---|---|---|---|
| Desktop 1440 | Immediately below Hero | Explanation left; field/state/action right | Visible from initial state |
| Tablet 768 | Immediately below stacked Hero/media | One-column explanation then field panel | Visible from initial state; ≥44px |
| Mobile 390 | Immediately below Hero/media | Complete single column | Full width, visible from initial state; ≥44px |

The Hero selector link uses an in-page anchor and focus transfer with sticky-Header offset. Because the selector is adjacent to the Hero, the transition is short and predictable.

## 2. Control semantics

- Product Grade remains one semantic select/dropdown.
- The prompt is not a valid Grade.
- Exactly 14 approved Grade values follow the prompt.
- No default valid Grade is selected.
- `Continue to Request Documents` is present, visible, focusable and operable from initial load.
- The button is not disabled and does not use `aria-disabled`.

## 3. State machine

```text
INITIAL
  ├─ Continue with no Grade
  │    → remain on /documents/
  │    → show exact validation
  │    → focus Product Grade select
  │    → preserve unrelated state
  └─ choose valid Grade
       → show selected Grade in select
       → show selected confirmation
       → same Continue button remains
       → Continue transfers Grade to Request Documents
```

### Initial

- Prompt=`Select a product grade`.
- Helper=`Choose one grade to continue.`.
- Validation position is stable but contains no error.
- Continue button is visible and operable.

### No-selection validation

- No navigation occurs.
- Error=`Select a product grade to continue.`.
- The field exposes invalid/error association through the final accessible implementation pattern.
- Focus moves to the select.

### Valid selected Grade

- Selected confirmation=`Selected product grade: {GRADE}`.
- The same Continue button targets `/request-documents/?product={GRADE}` or the approved safe equivalent.
- The receiver keeps Product Grade editable.

## 4. Closing CTA synchronization

- No Grade: visible `Select a Product Grade` action focuses the upper selector.
- Valid Grade: visible `Continue to Request Documents` uses the same Grade and approved handoff.
- The action is never hidden and no empty action slot is allowed.

## 5. FAQ disclosure contract

- All six question buttons remain visible.
- Answers default collapsed.
- Each button exposes its expanded state and opens its answer in document flow.
- One expanded answer in Gate 3 is interaction evidence, not a change to the default state.
- Full answers remain in accessible page content and conditional FAQ Schema must match the final visible/eligible implementation.

## 6. Shared Chrome and non-change boundary

Header, Mobile Header, Mobile Menu, Footer, current Documents state, persistent RFQ and legal controls are inherited without redesign. The prior Mobile Menu asset remains valid assembly proof. Four category cards remain non-interactive.

## 7. Accessibility and resilience

- Primary controls are ≥44px at 768px and 390px.
- Focus is visible and not color-only.
- Error meaning does not rely on color or icon.
- The stable validation position prevents a disruptive vertical jump.
- Real copy wraps without truncation and no horizontal overflow appears at 390px.
- Review labels and annotations never render in Gate 4/5 Buyer Clean.

## 8. Gate boundary

Status=`APPROVED / CLOSED` as of 2026-09-02. Gate 4 is separately authorized; Gate 5, child pages, development and D16 remain unauthorized.
