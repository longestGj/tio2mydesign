# CONV-RFQ Visual Direction V0.2 — Desktop Single-column Amendment

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 4 direction consumed by Gate 5 revision |
| Date | 2026-09-01 |
| Status | `TARGETED_REVISION_SUBMITTED / NOT_APPROVED` |
| Revision source | User feedback: `PC端额不行，左右排版的不行` |
| Supersedes | V0.1 Desktop intro/form side-by-side body layout only |
| Inherits | All other V0.1 colour, typography, field, state, Global Chrome, PRODUCT V0.3 and release-boundary rules |

## 1. Approved revision boundary

The Desktop main content must not use a left explanatory rail beside the RFQ form. Replace the 4/8 side-by-side body with a single-column procurement flow:

1. Eyebrow, H1, introduction and receipt boundary across the upper content column.
2. Three short preparation notes in one horizontal Desktop row.
3. One centred RFQ form below the introduction.
4. Human-review sequence below the form.
5. Buyer questions and shared Footer unchanged.

The Header remains horizontal because the user's feedback concerns the page-body left/right layout, not the approved Global Chrome navigation.

## 2. Desktop geometry

| Region | V0.2 geometry |
|---|---|
| Global shell | 1200px inherited shell |
| Main reading column | 1040px maximum, centred |
| H1 measure | 900px maximum |
| Intro measure | 860px maximum |
| Receipt boundary | 960px maximum |
| Preparation notes | Three equal cards, 16px gaps |
| Main form | 1040px maximum, centred; no adjacent rail |
| Form internals | Two-column field pairs may remain because they are related fields within one form, not page-level left/right composition |

## 3. Responsive effect

- At 390px, the existing single-column composition remains unchanged.
- Preparation cards remain hidden at 390px because the same guidance is already expressed in the intro and form hints.
- Desktop and Mobile state-board logic remains unchanged.
- No Header, Footer, CTA, field, relation, privacy or release-state change is authorized by this revision.

## 4. Decision status

This targeted revision responds to the user's Desktop layout rejection. It is submitted for Gate 5 review and is not an approval, Gate 6/7 authorization or release decision.

