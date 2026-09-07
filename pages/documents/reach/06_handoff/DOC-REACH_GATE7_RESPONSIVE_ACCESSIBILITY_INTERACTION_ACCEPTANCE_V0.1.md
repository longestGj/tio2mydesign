# DOC-REACH Gate 7 Responsive, Accessibility and Interaction Acceptance V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Visual authority | Gate 5 `Regulatory Evidence Ledger` |
| Required widths | `1440 / 1280 / 1024 / 768 / 640 / 430 / 390 / 375 / 320` |
| Gate 8–10 | `NOT_AUTHORIZED` |

## 1. Reference assets

| Surface | Dimensions | SHA-256 |
|---|---:|---|
| Desktop complete page | `1440×7491` | `64C913C196593B8B3062717CB19C451B1A9909B34885DF1F08625CC607A7800E` |
| Tablet complete page | `768×9881` | `B639EE293D58ED5EC20EF8CFF190D30D145349B93D1D93C1CFDC5923C9BFB421` |
| Mobile complete page | `390 logical @2x / 780×26052` | `AB9FC630610356C61D4A76B042322B1A060A72B1D209C1E833805F9A65196086` |
| Mobile Menu open | `390 logical @2x / 780×1688` | `0E04158847ED794A84099F0171C84DB99D75C1F5EA308E1A1DBA7F6AD4BA29AE` |
| Key states | `1440×1000` | `CF43400D08F2B45DD6F4F157302B8B629075908DFB7100869D55E2AAF1689F7E` |
| Request route unavailable | `1440×7326` | `4A00876D9242CC3B2E3A68014A4550AC5823490E08CFB7E9E46549398F5D01DE` |
| FAQ open/focus | `1440×619` | `6362A777E7674D8D31CC5FAC21262F09BF0BCBA1F286414818B376EA96CE0B2E` |

The approved HTML source SHA-256 remains `80E1BAE01AEFC935CE473C70B231EC72674859F18A390ED63B1A9EFE76890437`.

## 2. Responsive behavior

| Width range | Required layout behavior |
|---|---|
| 1024 and above | Desktop Header, two-column Hero, three-column role/scope cards, ledger source rows and two-column FAQ layout |
| 768–1023 | Mobile Header, one-column Hero, two-column cards/checks/process where space permits, two-column source ledger |
| 640 | 200% desktop-zoom reflow proxy; no horizontal scrolling or clipped actions |
| 430 and below | Single-column roles, scope, checklist, sources, steps and related cards; stacked CTA actions |
| 390 / 375 / 320 | Long H1, Only Representative labels, source URLs/dates and FAQ questions wrap without clipping or overlap |

At every required width:

- document `scrollWidth` equals viewport width;
- no body/section min-width creates horizontal overflow;
- text remains readable without pinch zoom;
- no large unexplained blank region appears after Hero actions, Mobile Menu or Final CTA;
- source names, URLs and dates break safely;
- content order matches the payload.

## 3. Keyboard and focus

- Every link, FAQ button, menu trigger and Cookie Settings control is keyboard reachable once in a logical order.
- All interactive controls have a visible focus indicator with at least a non-zero outline/border change and sufficient contrast.
- Opening a FAQ retains focus on its button, updates `aria-expanded` and exposes the associated answer.
- Closing the FAQ restores the collapsed state without moving focus unexpectedly.
- Mobile Menu open traps focus within its active surface where the shared Global Chrome contract requires, closes on Escape and returns focus to the trigger.
- Hidden navigation is not keyboard reachable and is absent from the accessibility tree.
- No hover-only information or action exists.

## 4. Semantic structure

- One `<main>` and one visible H1.
- Breadcrumb uses navigation semantics and identifies the current page.
- Legal roles, jurisdiction cards, checklist and request steps use headings/lists appropriate to their relationships.
- Official source links have descriptive names and are not exposed as raw URLs alone.
- FAQ uses buttons with `aria-expanded` and programmatic answer association; answers remain present in initial HTML.
- `Documents` carries the current page state exactly once per active navigation surface.

## 5. Touch, zoom and system preferences

- All visible actionable targets are at least 44×44 CSS pixels.
- At 200% browser zoom the page reflows without two-dimensional scrolling, clipped content or overlapping controls.
- Reduced-motion preference disables non-essential scrolling/transition effects.
- Forced-colors/high-contrast mode preserves boundaries, focus and current navigation state.
- Text and functional controls meet WCAG AA contrast; primary filled actions use the approved accessible teal treatment.

## 6. Interaction states

Required Gate 8/Gate 9 evidence includes:

1. default page with all FAQ items collapsed;
2. one legal-actor FAQ expanded and keyboard-focused;
3. Mobile Menu open at 390;
4. receiver eligible with all three page-owned request-action groups synchronized;
5. receiver unavailable with request actions/panel/note absent and Hub navigation retained;
6. source row with `source_updated_date`;
7. source row where `source_updated_date=null` and only the optional date is omitted.

## 7. Visual safety

The body remains intentionally text-first. No image may imply a factory, certificate, regulatory endorsement, legal approval, registration coverage or public document availability. Any future image requires separate asset, rights, alt-text and claim review.

