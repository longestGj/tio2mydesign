# CONTACT-001 Gate 3 Responsive Wireframe Design Report V0.1

## Control

| Field | Value |
|---|---|
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Frozen source | `CONTACT-001_GATE3_WIREFRAME_V0.1.html` |
| Frozen identity | 31,318 bytes / `360bf45c2dddd431603c3ba8102dd67d5f98afef37857c6b294de322e5beaf18` |
| Preflight | `PASS_FOR_FORMAL_RENDER`; current-page Chromium assertions 50/50 PASS |
| Formal evidence | 11 assets rendered from the frozen identity; external requests 0 |
| Shared consumer | `TIO2MY-GATE3-SHARED-CONSUMER-002` / V0.2 |
| Method | Responsive Wireframe Design V0.4 plus Layout & Interaction Verification V0.8; paid Superdesign not used |

## Structure decision

The page is a utility contact surface, not a commercial landing page. The hierarchy first explains the general-contact scope, then exposes only verified contact facts, separates quote/document/sample requests into their dedicated routes, and finally offers a minimum-data general inquiry form. This keeps `NO_PRIMARY_KEYWORD` intact and prevents Contact from taking over RFQ, Sample, or Request Documents responsibilities.

| Structure problem | Expected relation | Validation location |
|---|---|---|
| General inquiry can be confused with purchasing requests | Hero and form copy define general business matters; quote, documents, and sample appear as three separate specialist route cards before the form | 1440/768/390 full pages; runtime approved-copy/order assertions |
| Contact facts can be missing or conflicting | Each verified datum is its own card; an affected card and its referring sentence disappear together, without phone/WhatsApp or empty space | `CONTACT-001_G3_390_RESTRICTED_CONTACT.png`; restricted runtime operation |
| A form failure can erase buyer effort | Values remain visible in submitting/failure states; failure gives an adjacent `Try again`; success clears fields and replaces them with bounded confirmation | submitting, failure-preserved, and success formal assets; runtime state records |
| Narrow layouts can break labels, addresses, and long inputs | Card/form relations reflow without changing order, labels, ownership, or task destinations | all three full pages; validation-long and failure-preserved assets |
| Contact is absent from primary navigation | Shared chrome remains owner-controlled; About is the inherited active group and no buyer-visible `CURRENT` word is introduced | 768/390 Menu-open assets and runtime Menu operations |

## Responsive specification

| View | Structural behavior |
|---|---|
| Desktop 1440 | Shared 84px Header; centered content; verified contact cards and route cards each form three columns; general inquiry form uses two columns for paired short fields and full-width Subject/Message; Footer closes the full page |
| Narrow 768 | Shared narrow Header/Menu contract; cards use `2 + 1`; form retains two columns where labels remain readable; block order and dedicated-route precedence do not change |
| Mobile 390 | Shared 64px Header; Menu is a single vertical owner-controlled surface with ≥44px controls; all page cards and form fields become one column; long copy wraps naturally; primary form action spans the available column |

The highest-risk transition is the simultaneous `3 → 2+1 → 1` card change and `2 → 1` form change. Formal full-page images show that no heading, label, value, action, privacy note, or Footer block is clipped or reordered across that transition.

## States and evidence

| State | Evidence | Boundary |
|---|---|---|
| Default | 1440, 768, and 390 full pages | Static visual from current source plus runtime geometry |
| Menu open | 768 and 390 Menu assets | Actual local runtime; About active, background inert, focus enters Menu, no `CURRENT` word |
| Keyboard focus | 1440 form-focus asset | Actual local runtime; 3px teal outline on Business Email |
| Validation + long copy | 390 validation-long asset | Actual local validation with six errors and synthetic long values |
| Submitting | 390 submitting asset | Local simulation; values retained, fields read-only, duplicate submit blocked |
| Service error | 390 failure-preserved asset | Local simulation; input preserved and `Try again` visible |
| Success | 390 success asset | Local simulation; fields cleared and bounded acknowledgement visible |
| Restricted details | 390 restricted-contact asset | Local simulation of a source mismatch; affected sentence/card omitted; no phone or empty slot |

No simulated form state proves a receiver, spam control, delivery, storage, retention, notification, analytics, Consent Mode, or production session. Those remain later implementation and QA responsibilities.

## Shared inheritance and locked boundaries

Header, Menu, Logo, persistent RFQ action, Footer, privacy link, cookie behavior, control sizes and responsive header heights come directly from the V0.2 shared consumer and its current owner contracts. Contact does not add a primary-navigation item. Every shared Request a Quote instance remains visible and points to `/request-a-quote/`; no disabled, hidden, empty-slot, `RFQ OFF`, or Contact-fallback state exists.

Gate 4 may determine visual treatment within the approved brand and accessibility contracts. It may not alter module order, verified facts, buyer copy meaning, CTA ownership/destinations, form field contract, restricted-field behavior, page identity, URL, keyword assignment, or shared chrome ownership without a governed upstream change.

## Evidence roles

`approval_core` contains only the 11 formal approval-facing images. `diagnostic_support` contains readable segments, preflight runtime, manual diagnostic readback, and preserved failed-attempt history; it is supporting evidence, not an alternative candidate. The formal renderer, preflight builder, and other temporary scripts remain in `99_workspace` and are not runtime dependencies.

Open controller item: `00_PROJECT_STATUS.md` still carries an older Gate 2 authorization description. The current user authorization and Manifest V0.3 are the bound Gate 3 inputs; controller-owned status synchronization is not performed by this execution author and does not change the candidate identity.
