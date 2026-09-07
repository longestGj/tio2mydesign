# DOC-000 Responsive Wireframe V0.4

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Page type | Navigation hub |
| Gate | Gate 3 — responsive wireframe |
| Review ID | `DOC-000-G3-V11-WF-01` |
| Status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION` |
| Upstream copy | `DOC-000-G2-V11-COPY-02 = APPROVED / CLOSED` |
| Required evidence | `1440px Desktop`, `768px Tablet`, `390px Mobile`, `390px Mobile Menu open` |
| Current navigation key | `Documents` |
| Stop | No Gate 4/5 visual direction, production visual, child page or implementation |

This file validates structure, priority, wrapping and interaction placement. Lines, boxes and column ratios are structural only; they do not approve colors, typography, shadows, icons or finished styling.

## 1. Locked page sequence

The shared Header precedes the page body. The body consumes the approved Gate 2 sequence without additions or omissions:

1. Hero, with visible breadcrumb inside the Hero
2. `How It Works`
3. `Supporting Your Review Process`
4. `Documentation You Can Request`
5. `Select a Product Grade`
6. `Why Documentation Is Provided on Request`
7. `Buyer Questions`
8. Closing CTA
9. Shared Footer

There is no Finder, Type filter, Document Index, file/result list, public-download row, inventory zero-state, standalone Quick Answers or fifth documentation category.

## 2. Desktop — 1440px logical width

### 2.1 Page frame

- Shared Desktop Header: `84px`, full width, fixed approved navigation order.
- Body working frame: centered, approximately `1200px` maximum content width with safe outer gutters. This is a wireframe proportion, not an implementation value.
- The layout deliberately alternates wide horizontal groups and balanced two-column decisions. It must not look like a narrow mobile column centered on a desktop canvas.
- Shared Footer: full-width shared region after the closing CTA.

### 2.2 Complete desktop structure

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ SHARED DESKTOP HEADER — 84px                                                │
│ Logo | Home | Markets | Products | Applications | DOCUMENTS | Resources     │
│      | About | Request a Quote                                               │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────── HERO — TWO COLUMNS ─────────────────────────┐
│ LEFT — about 7/12                              │ RIGHT — about 5/12           │
│ Home / Documents                              │ Requests are currently       │
│ DOCUMENT HUB                                  │ handled in English.          │
│ Documents for Product &                       │                              │
│ Supplier Qualification                        │ [ Select a Product Grade ]   │
│                                               │ → #product-grade; focus the  │
│ Explore documentation categories for product │   field label                │
│ evaluation and supplier qualification, select│                              │
│ the relevant titanium dioxide grade, and     │                              │
│ continue to Request Documents.                │                              │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────── HOW IT WORKS — 3 COLUMNS ────────────────────────┐
│ 01 Choose your review need │ 02 Select a Product Grade │ 03 Continue to       │
│ Use the review scenarios   │ Choose the titanium       │ Request Documents     │
│ and documentation          │ dioxide grade connected   │ Carry the selected    │
│ categories to identify the │ to your review.            │ grade into the request│
│ information your team      │                            │ page and add the      │
│ needs.                     │                            │ details your team     │
│                            │                            │ wants reviewed.       │
└──────────────────────────────────────────────────────────────────────────────┘

Supporting Your Review Process
Start with the decision your team is preparing to make.
┌──────────────────────┬──────────────────────┬───────────────────────────────┐
│ Product Evaluation   │ Quality & Supplier   │ Origin & Supplier             │
│ Technical, product,  │ Qualification        │ Qualification Review          │
│ safety and handling  │ Quality, COA-related │ Origin-review and supplier-   │
│ information for      │ and supplier         │ qualification information for │
│ product and          │ information for QA   │ a scoped purchasing review.   │
│ application          │ and supplier review. │                               │
│ evaluation.          │                      │                               │
└──────────────────────┴──────────────────────┴───────────────────────────────┘

Documentation You Can Request
Choose the category that best matches your review.
┌─────────────────────────────────┬────────────────────────────────────────────┐
│ Technical Data & Product        │ Safety Documentation                       │
│ Documentation                   │ Safety, handling and storage information   │
│ Product data, specifications    │ for internal review.                       │
│ and technical information for   │                                            │
│ evaluation.                     │                                            │
├─────────────────────────────────┼────────────────────────────────────────────┤
│ Quality & COA Documentation     │ Origin & Supplier Qualification            │
│ Quality information and         │ Documentation                              │
│ COA-related support for QA and  │ Origin-review and supplier-qualification   │
│ purchasing review.              │ information for purchasing context.        │
└─────────────────────────────────┴────────────────────────────────────────────┘
No card-level action, count, status badge or decorative empty action slot.

┌──────────────────── PRODUCT GRADE SELECTOR — TWO COLUMNS ────────────────────┐
│ LEFT — explanation                             │ RIGHT — interaction          │
│ Select a Product Grade                         │ Product Grade                │
│ Choose the grade related to your review. Your  │ [ Select a product grade ▾ ]│
│ selection will be carried into Request         │ Choose one grade to continue.│
│ Documents and can be changed there.            │                              │
│                                                │ Selected state:              │
│ Not sure which grade to select?                │ Selected product grade:      │
│ Explore Products. → /products/                 │ M-2377                       │
│                                                │ [ Continue to Request        │
│                                                │   Documents ]                │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────── REQUEST EXPLANATION — TWO COLUMNS ───────────────────────┐
│ Why Documentation Is Provided on Request      │ Availability and applicable │
│ Documentation requirements vary by product    │ scope are confirmed during  │
│ and review purpose. Submitting a request helps│ review.                      │
│ our team understand the scope and identify the│                              │
│ relevant materials for review.                │                              │
└──────────────────────────────────────────────────────────────────────────────┘

Buyer Questions
┌──────────────────────────────────────────────────────────────────────────────┐
│ What is the Documents Hub?                                                [+]│
├──────────────────────────────────────────────────────────────────────────────┤
│ How do I request documentation?                                          [+]│
├──────────────────────────────────────────────────────────────────────────────┤
│ Which documentation category should I choose?                            [+]│
├──────────────────────────────────────────────────────────────────────────────┤
│ What if I am not sure which Product Grade applies?                       [−]│
│ Use Explore Products to review the available grades, then return to select  │
│ the grade most relevant to your request.                                    │
├──────────────────────────────────────────────────────────────────────────────┤
│ Can I change the Product Grade on the request page?                       [+]│
├──────────────────────────────────────────────────────────────────────────────┤
│ What language is used for document requests?                             [+]│
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────── CLOSING CTA — TWO COLUMNS ───────────────────────────┐
│ DOCUMENT REQUEST                               │ No Grade:                    │
│ Continue with Your Product Grade               │ [ Select a Product Grade ]   │
│ Select the relevant Product Grade to carry it  │ Selected Grade:              │
│ into Request Documents. You can review or      │ [ Continue to Request        │
│ change the Grade before submitting your        │   Documents ]                │
│ request.                                       │                              │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ SHARED FOOTER — full desktop structure                                       │
│ Brand/identity | Explore | Information | Procurement                         │
│ Shared legal row: Privacy Policy | Terms of Use | Cookie Policy | Settings   │
└──────────────────────────────────────────────────────────────────────────────┘
```

### 2.3 Desktop decisions

- Hero is obligatorily left/right at 1440px. The right action rail may not fall beneath the left copy at this evidence width.
- Three steps and three review scenarios are horizontal three-column groups.
- Four documentation categories use a `2 × 2` grid so the approved long titles remain readable; they are not squeezed into four narrow cards.
- Selector, request explanation and closing CTA use horizontal two-column structures.
- Buyer Questions remain one wide reading column; the answer width is capped inside the row for readable line length.

## 3. Tablet — 768px logical width

```text
[Shared Tablet/Mobile Header — 64px: Logo | Request a Quote | Menu]

[Hero — stacked intentionally at 768]
Home / Documents
DOCUMENT HUB
Documents for Product & Supplier Qualification
Explore documentation categories for product evaluation and supplier
qualification, select the relevant titanium dioxide grade, and continue
to Request Documents.
Requests are currently handled in English.
[Select a Product Grade]

[How It Works — vertical numbered list: 01 → 02 → 03, all full copy]

[Supporting Your Review Process]
[Product Evaluation] [Quality & Supplier Qualification]
[Origin & Supplier Qualification Review — full row]

[Documentation You Can Request — 2 × 2]
[Technical Data & Product Documentation] [Safety Documentation]
[Quality & COA Documentation] [Origin & Supplier Qualification Documentation]

[Select a Product Grade — one-column interaction]
Heading + full body
Product Grade [Select a product grade ▾]
Helper / validation / selected confirmation
[Continue to Request Documents]
Not sure which grade to select? Explore Products.

[Why Documentation Is Provided on Request — stacked]
Full body
Availability and applicable scope are confirmed during review.

[Buyer Questions — six full-width accordion rows; one expanded specimen]

[Closing CTA — stacked copy, then state-aware CTA]

[Shared Footer — tablet reflow; four legal controls retained]
```

Tablet preserves all content and actions. The Hero reflow is intentional because the approved H1 and body would create an overly narrow reading column in a 768px split. It is not evidence for the 1440px desktop structure.

## 4. Mobile — 390px logical width

### 4.1 Complete mobile page

```text
┌──────────────────────────────────────┐
│ SHARED MOBILE HEADER — 64px          │
│ Logo | Request a Quote | Menu        │
└──────────────────────────────────────┘

Home / Documents
DOCUMENT HUB
Documents for Product &
Supplier Qualification
Explore documentation categories for
product evaluation and supplier
qualification, select the relevant
titanium dioxide grade, and continue
to Request Documents.
Requests are currently handled in English.
[ Select a Product Grade — full width ]

How It Works
[01 Choose your review need + full copy]
[02 Select a Product Grade + full copy]
[03 Continue to Request Documents + full copy]

Supporting Your Review Process
Start with the decision your team is
preparing to make.
[Product Evaluation + full copy]
[Quality & Supplier Qualification + full copy]
[Origin & Supplier Qualification Review + full copy]

Documentation You Can Request
Choose the category that best matches
your review.
[Technical Data & Product Documentation + full copy]
[Safety Documentation + full copy]
[Quality & COA Documentation + full copy]
[Origin & Supplier Qualification Documentation + full copy]

Select a Product Grade
Choose the grade related to your review.
Your selection will be carried into
Request Documents and can be changed there.
Product Grade
[ Select a product grade                  ▾ ]
Choose one grade to continue.
Selected product grade: M-2377
[ Continue to Request Documents — full width ]
Not sure which grade to select?
Explore Products.

Why Documentation Is Provided on Request
Documentation requirements vary by product
and review purpose. Submitting a request
helps our team understand the scope and
identify the relevant materials for review.
Availability and applicable scope are
confirmed during review.

Buyer Questions
[What is the Documents Hub?               +]
[How do I request documentation?          +]
[Which documentation category should I    ]
[choose?                                  +]
[What if I am not sure which Product      ]
[Grade applies?                           −]
 Use Explore Products to review the available
 grades, then return to select the grade most
 relevant to your request.
[Can I change the Product Grade on the    ]
[request page?                            +]
[What language is used for document       ]
[requests?                                +]

DOCUMENT REQUEST
Continue with Your Product Grade
Select the relevant Product Grade to carry
it into Request Documents. You can review
or change the Grade before submitting your
request.
[ Select a Product Grade — full width ]
or selected state:
[ Continue to Request Documents — full width ]

[SHARED FOOTER — stacked]
[Brand/identity]
[Explore]
[Information]
[Procurement + Request a Quote]
[Privacy Policy] [Terms of Use]
[Cookie Policy] [Cookie Settings]
```

### 4.2 Mobile Menu open proof

```text
┌──────────────────────────────────────┐
│ Logo | Request a Quote | Close       │  64px
├──────────────────────────────────────┤
│ Home                                 │  ≥44px
│ Markets                              │  ≥44px
│ Products                             │  ≥44px
│ Applications                         │  ≥44px
│ ▌ Documents                          │  ≥44px; current page
│ Resources                            │  ≥44px
│ About                                │  ≥44px
│ Request a Quote                      │  ≥44px; terminal menu action
└──────────────────────────────────────┘
```

The open menu is the active navigation surface. Background page content is not focusable while it is open. `Documents` is the only current link in the active surface. No visible `CURRENT` status word is rendered.

## 5. Required interaction-state wireframes

### 5.1 Grade selector

| State | Visible structure | Behavior |
|---|---|---|
| Initial | Prompt + `Choose one grade to continue.` | No default, no generated request URL, no Continue CTA |
| Menu open | 14 approved Grade values, each once | Keyboard arrows/type-ahead supported by the chosen accessible control pattern |
| Validation | Prompt + `Select a product grade to continue.` | Message associated with field; focus returns to field |
| Selected | `Selected product grade: {GRADE}` + Continue CTA | Grade is validated against the 14-value set |
| Handoff | Continue CTA | Transfers Grade only; receiving Grade remains editable |

The open-value specimen must show all values without clipping: `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

### 5.2 Anchor and focus behavior

- Hero and no-selection closing CTA move to `#product-grade` and focus the visible `Product Grade` label/control without hiding it beneath the sticky shared Header.
- `Explore Products` is a normal text link to `/products/`.
- A valid Continue action uses `/request-documents/?product={GRADE}` or a safe equivalent; no category, availability, language, market or approval state is passed.

### 5.3 Buyer Questions

- Each question is one full-row button with `aria-expanded` state.
- Expanded content remains in document flow; no overlay and no clipped fixed height.
- Opening the longest question and answer at 390px must not create horizontal scrolling.
- FAQ order and answer copy remain identical to the six approved Gate 2 entries.

### 5.4 Focus, hover and touch

- Desktop hover may signal interactivity only on actual links, buttons, selector control and accordion buttons. Informational cards must not acquire a false clickable hover treatment.
- All keyboard-focusable controls have a persistent visible focus indicator; focus is not communicated by color alone.
- Mobile interactive targets are at least `44 × 44px`; adjacent targets retain a clear separation.
- Pointer hover does not reveal content required to understand or operate the page.

## 6. Real-content stress tests

| Risk | Wireframe proof / acceptance |
|---|---|
| Long Hero H1 | Wraps naturally; no truncation or overlap in all three viewports |
| Long category names | Desktop uses 2 × 2; Tablet 2 × 2; Mobile one column |
| Long scenario name | `Origin & Supplier Qualification Review` wraps without changing card alignment |
| Long FAQ question | Full text remains visible and the disclosure control stays reachable |
| Grade identifiers | All 14 values render once; no guessed descriptive suffixes |
| No imagery | Page remains structurally complete with no image or image placeholder |
| No inventory | Absence of file records is normal; do not render empty result or fake cards |
| Route unavailable | Not a Buyer Clean state; release is blocked outside the page rather than replacing the approved CTA with fallback text |
| Shared legal route unavailable | Same release boundary; final Footer structure remains shown in Gate 3 |
| Narrow width | No horizontal page overflow at 390px; only a native/select list may use platform scrolling within its own surface |
| Abnormal whitespace | No desktop module is constrained to a narrow mobile-width column; no large blank action slots |

## 7. Full approved FAQ payload

1. **What is the Documents Hub?** — It helps you choose a documentation category and Product Grade before continuing to Request Documents.
2. **How do I request documentation?** — Select a Product Grade, choose Continue to Request Documents, then add your documentation requirements on the request page.
3. **Which documentation category should I choose?** — Choose technical/product, safety, quality/COA, or origin/supplier qualification according to the review your team is preparing.
4. **What if I am not sure which Product Grade applies?** — Use Explore Products to review the available grades, then return to select the grade most relevant to your request.
5. **Can I change the Product Grade on the request page?** — Yes. The selected Grade is carried into Request Documents as an editable value.
6. **What language is used for document requests?** — Requests are currently handled in English.

## 8. Gate 3 review disposition

Project control passed the responsive structure, module priority, two-column desktop Hero, selector/FAQ interaction placement and 390px overflow/touch behavior. Status=`PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_CONFIRMATION`. User approval is not claimed; Gate 4 and Gate 5 remain unauthorized.
