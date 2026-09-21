# GRADE-M350 D32 Gate 3 Responsive Structure Specification V0.1

## 1. Control

| Field | Value |
|---|---|
| Page ID | `GRADE-M350` |
| URL | `/products/m-350/` |
| Site scope | `tio2-my` |
| Date | `2026-09-20` |
| Stage | `GATE_3 / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Planning / QA owner | `D:\23MySec` |
| Implementation owner | `D:\32Wordpress_new` after Gate 6 handoff |
| Source | `pages/products/detail-template/04_planning/m350-d32-gate3-v0.1/m350-wireframe.html` |

Gate 3 defines the information structure, shared-component bindings, action semantics and three responsive proofs. Its column counts, spacing and visual placement are working arrangements for validation; Gate 4 may refine them without changing the approved content, sequence, relationships or behavior.

## 2. Bound authority

| Authority | SHA-256 | Use |
|---|---|---|
| `GRADE-M350_GATE2_FULL_COPY_V0.1.md` | `85A4C0183A382F2F8CBFC57D7F59D7DF515111C22F811D97AE195D64C4A6957A` | Exact buyer-facing copy, metadata, CTA labels and technical data |
| `GRADE-M350_GATE2_CONTENT_SKELETON_V0.1.md` | `D2383AD2567AEBB081AB246B8FF793EF71BC644EC10BC1154EC58F7A25A79F06` | Approved module order and Hero action boundary |
| `GRADE-M350_GATE2_USER_APPROVAL_AND_CLOSURE_V0.1.md` | `044AB84DCBD6DA46EDC475A09046DB20B6834FC1B3E42C9A648B26711188943F` | User approval and external-reader interpretation |
| `docs/architecture/GATE3_CROSS_PAGE_CONSISTENCY_DECISION_V1.0.md` | `0C78278B9898E3A52ED048E0BCD3CD338F6F490E1DD56FA3085B7B83FC86C95C` | Approved shared, family and page-specific consistency decision |
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | Approved Global Chrome structure and behavior |
| `pages/products/detail-template/05_review/PRODUCT-DETAIL-GLOBAL-CHROME-CURRENT-AUTHORITY-ADDENDUM_V0.5.md` | `DE8BF3DFB4F50DFF2C8CCD2FD0AB665E21FE02D7D00A6B558CEBC0344A1CC6EA` | Approved Product Detail consumption of the current Chrome owner |
| `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | `81B73A5262269F618E8FB0667C9345279449A1BCB71647422B6A1D3F8EBFE894` | Approved production-logo owner; source SVG hashes are `EEED3A...` primary and `7CFAEA...` reverse |
| `pages/products/detail-template/04_planning/visual-designs/M350_PRODUCT_DETAIL_DESKTOP_V0.5.png` | `72B56E251D8C22C031B4E294A4E10A2E86D52284D12B8525EE00E0861581818D` | Historical Grade Detail family visual reference only; no copy, D16 state or approval is inherited |
| `pages/products/detail-template/04_planning/visual-designs/M350_PRODUCT_DETAIL_MOBILE_390_V0.5.png` | `1A6E6CBA3D93C814ACA6B5AD094D840E16265FE8279C25CC178E92E66E4BE6DF` | Historical mobile family reference under the same boundary |
| `pages/products/04_planning/d32-gate4-v0.1/product-visual.html` | `BDE34207290F7E6ED9064587AF76BC6492DF02F55B3B84C6B7991BFE68F4D235` | Product Hub visual-context reference for the current navy/teal/light-neutral language only; its root-page structure and copy are not inherited |

The internal evidence file remains `TDS_M-350_V3_2023.pdf`. Its version identity is review metadata only and does not appear in public copy.

## 3. Page family and module sequence

M-350 remains a Grade Detail page. The approved sequence is:

1. Global Header and breadcrumb.
2. Hero: category eyebrow, one H1, approved orientation copy, Quote and Sample actions, and a concise product-data/evaluation summary.
3. Product Positioning.
4. Application Directions: Decorative Coatings, Industrial Coatings, Automotive Coatings, Printing Inks, Plastics, and the separately qualified Paper evaluation path.
5. Formulation Evaluation.
6. Typical Technical Data: exactly 15 Standard/Typical rows and the non-specification boundary.
7. Document Request.
8. Market Support.
9. Sample Request.
10. Global Footer and cookie-settings dialog.

`Related Grades` is absent. It must not be restored from the historical page. The Hero has exactly two actions. TDS and document actions stay in their body modules.

## 4. Shared-component and difference mapping

| Reference / component | M-350 use | Required difference or boundary | Gate 4 responsibility |
|---|---|---|---|
| Global Header/Footer owner | Reuse current navigation, Product current state, fixed RFQ, procurement footer, legal links and cookie interaction | No buyer-visible `CURRENT`; no page-private Chrome fork | Apply the current shared visual identity and verify focus/overlay behavior |
| Grade Detail family | Reuse Hero, positioning, applications, evaluation, technical-data, documents, markets and sample-request roles | Current Gate 2 copy replaces historical M-350 copy | Set final density, columns, rhythm and responsive composition |
| Product Hub visual system | Reuse navy/teal/light-neutral palette, typography hierarchy and restrained action patterns | Product Hub structure is not a detail-page template | Maintain family coherence without copying hub modules |
| Application cards | Use five TDS-backed directions plus one separately qualified Paper block | Paper must remain visibly and semantically qualified; it is not a TDS property | Choose a clear controlled variation for the Paper block |
| Technical data | Preserve one 15-row Standard/Typical dataset | Mobile may transform rows into labelled value groups; values and headers remain unchanged | Make the long dataset readable at all breakpoints |
| Document actions | Keep TDS request and additional-document request in the document/technical region | Public labels omit every internal TDS revision number | Establish final action hierarchy without moving them into Hero |

## 5. Responsive structure proof

| Viewport | Content mapping | Result |
|---:|---|---|
| `1440` | Wide detail-page reading measure; side-by-side Hero summary, evaluation columns, technical table with TDS action, market cards and sample action | `clientWidth = scrollWidth = 1440`; full height `6031` |
| `768` | Compact shared header; content groups reduce before stacking; technical CTA moves below the table while retaining association | `clientWidth = scrollWidth = 768`; full height `7609` |
| `390` | Single-column flow; technical rows become Property / Standard / Typical labelled groups; CTAs become full-width | `clientWidth = scrollWidth = 390`; full height `12321` |

All three proofs contain one H1, 15 technical rows, two Hero actions, six application blocks, zero public TDS-version fragments, zero Related Grades modules and zero buyer-visible `CURRENT` text. Tested interactive targets are at least `44 × 44` CSS pixels.

The mobile navigation opens with focus on `Home`, exposes one Products current-state indicator, makes the main and footer inert, closes on Escape and restores the underlying page. The cookie dialog opens with focus on `Close` and closes through its explicit control.

## 6. Gate 4 locked semantics and open visual decisions

Gate 4 must preserve:

- every approved public sentence and data value;
- the module order and the Paper qualification;
- Quote and Sample as the only Hero actions;
- the exact 15-row dataset and non-specification note;
- the absence of Related Grades and public TDS version numbers;
- action destinations and fail-closed conditional behavior;
- Global Chrome ownership and current navigation meaning.

Every contextual conversion action also preserves the approved delivery context: `site_scope=tio2-my`, `grade=M-350` and `source_page=GRADE-M350`; the TDS action additionally carries `requested_type=TDS`. Fixed Global Chrome RFQ remains governed by the shared owner rather than the page-specific contextual binding. These planning URLs express the contract and do not prove receiver readiness; unavailable contextual receivers cause their affected action/module to be omitted as defined by Gate 2.

Gate 4 decides final columns, widths, spacing, typography scale, visual grouping, card treatment, data-table presentation and breakpoint composition within the current visual system. The main risks to resolve are the long 15-row mobile dataset, the dense Positioning copy, a clear Paper distinction and the overall mobile page length. These are visual-composition problems and do not authorize copy removal.

## 7. Evidence set

| Artifact | Bytes | SHA-256 |
|---|---:|---|
| `m350-wireframe.html` | `27564` | `B5F748B870BA5A6FF1A2C8450DE91633152E7F1A3004ADA88BA405F3E60C36D5` |
| `capture_gate3.py` | `6149` | `1435A236EE2DC2C6F5F877D297638348CFAB5F9B318221884158A9051D2F78DE` |
| `M350_D32_G3_FULL_1440.png` | `732409` | `A5059EDFCE74D4AB735097A70A173929D121F511B41EDAC55CE283ECA5C50465` |
| `M350_D32_G3_FULL_768.png` | `744831` | `5B75EE632C7ABC67DFCCE0DFBE93AB2C5B33F29A8D6C9229F2A8F1A6F66876B5` |
| `M350_D32_G3_FULL_390.png` | `764728` | `45D33BDFE166BDC84B6958A7A77460C5D0AFB71DD659FEDD63E514356E6BE26A` |
| `M350_D32_G3_MENU_390.png` | `52864` | `F7B78C23D6BD333F927C9276AB46F13476D83EC0432BE1D93BD6BB90AB568189` |
| `M350_D32_G3_COOKIE_390.png` | `41360` | `EF1181CBF5E9A2D635D40AB5FBECE4C45702B798E4741C5764487C6EBFDBBF8E` |
| `gate3_measurements.json` | `12908` | `9DF924A9FAFFFAAA842D8F2611FB390B3E2DE923E9820D37D3B23B43F224271D` |

## 8. Stage boundary

This candidate is submitted for independent Gate 3 review. It is not a Gate 4 approval, a D32 implementation instruction, a deployment result or a publication authorization.
