# DOC-000 Gate 2/3 Selector-CTA Change Impact V0.1

## 0. Control

| Field | Value |
|---|---|
| Decision ID | `DOC-000-G2-G3-SELECTOR-CTA-01` |
| Decision date | 2026-09-02 |
| Decision source | Explicit user confirmation |
| Status | `APPROVED / CLOSED` |
| Scope | Selector placement, persistent Continue CTA and state proof only |

## 1. Directed changes

| Area | V0.7/V0.5/V0.2 candidate | New candidate | Effect |
|---|---|---|---|
| Module order | Selector followed documentation categories | Selector is immediately below Hero | Grade decision becomes the first post-Hero action |
| Control type | Dropdown | Dropdown retained | User explicitly rejected conversion to cards/permanent list |
| Initial Continue | Prior full-page asset did not visibly render the button; interaction lived in a review note | Same primary button is visible and operable from initial load | Next step is discoverable before a Grade is selected |
| No-selection activation | Described in prose | No navigation; exact error; focus returns to dropdown | Clear, recoverable validation |
| Selected state | Described in prose | Selected Grade confirmation plus same Continue action and handoff target | One stable action across states |
| State proof | Internal `Interaction proof…` note in the full page | Separate initial/validation/selected grayscale board | Buyer-visible controls are shown; review notes remain outside Buyer Clean |
| FAQ | One expanded proof | Retained; six question buttons visible, answers otherwise collapsed | No change to user-confirmed accordion behavior |
| Closing CTA | Visible no-selection action | Retained and state-aware; never empty | Conversion route remains discoverable |

## 2. Module-order impact

New order:

`Hero → Product Grade Selector → How It Works → Review Scenarios → Documentation Categories → Why on Request → Buyer Questions → Closing CTA → Shared Footer`

No module is added or removed. Only Product Grade Selector moves.

## 3. SEO/GEO/Schema impact

No SEO Title, Meta, H1, keyword, entity or FAQ text changes. SEO/GEO/Schema Contract V0.6 is inherited unchanged. Persistent button visibility does not authorize structured `potentialAction`; that remains a later release-verification boundary.

## 4. Shared and evidence boundaries

The four category cards, 14 Grade values, Grade-only handoff, editable receiver, `NO_PRIMARY_KEYWORD`, no-inventory/download/fifth-category rules, Global Header/Footer/Menu, RFQ, legal controls and media/evidence limits remain unchanged. The Mobile Menu asset is inherited rather than redrawn.

## 5. Version preservation

- Content Architecture V0.7 remains preserved as historical/superseded candidate.
- Wireframe V0.5 and Manifest V0.2 remain preserved as historical/superseded candidate.
- Prior V0.1 grayscale assets remain preserved.
- New versions do not overwrite or delete historical files.

## 6. Open items

| ID | Item | State |
|---|---|---|
| DOC-SCTA-O01 | Project-control review of module order and three-state CTA contract | `PASS` |
| DOC-SCTA-O02 | Project-control review of new full-page assets and state board | `PASS` |
| DOC-SCTA-O03 | User approval of complete Gate 3 candidate | `APPROVED` on 2026-09-02 |
| DOC-SCTA-O04 | Gate 4 authorization | `AUTHORIZED / IN_PROGRESS` |

## 7. Stop condition

The Gate 3 package is `APPROVED / CLOSED`. Gate 4 is separately authorized; Gate 5, child pages, development, D16, deployment, publication and indexing remain unauthorized.
