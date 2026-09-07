# TiO2 Malaysia Global Chrome Current-page State Board Text V0.4

## 0. Document control

| Field | Value |
|---|---|
| Review ID | `GHC-CURRENT-TEXT-REMOVAL-01` |
| Version | `V0.4` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| User decision date | 2026-08-31 |
| Authority candidate | `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.4.md` |
| Production Logo | `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` |
| Scope | Written state-board contract only; no new PNG, page body or implementation |

## 1. Desktop state-board text

### Buyer-facing state

| State | Required rendering |
|---|---|
| Home current | `Home` in Bold with a 3px Teal underline; no visible status word |
| Products current example | `Products` in Bold with a 3px Teal underline; no visible status word |
| Other navigation items | Approved regular navigation style |
| Request a Quote | Approved fixed Teal terminal CTA |

The board title or internal review annotation may say `Current-page state review`, but no label is rendered inside the buyer-facing navigation item.

### Internal semantic annotation

The review annotation must record:

`Current link semantic requirement: aria-current="page"`

This annotation stays outside the buyer-facing Header composition.

## 2. Mobile Menu state-board text

### Buyer-facing state

| State | Required rendering |
|---|---|
| Home current | `Home` in Bold with a 4px Teal left marker; no visible status word |
| Other menu items | Approved regular menu-row style |
| Request a Quote | Final fixed action row |

The closed Mobile Header remains `Logo | RFQ | Menu` at 64px and does not display a current-page label.

### Internal semantic annotation

The review annotation must record:

`Current menu link semantic requirement: aria-current="page"`

This annotation stays outside the buyer-facing menu surface.

## 3. Frozen state-board content

- Desktop canvas geometry and 84px Header remain unchanged.
- Mobile canvas geometry, 64px Header and 390px no-overflow requirement remain unchanged.
- Navigation order, Logo, RFQ, focus treatment, Deep Navy Footer and Footer content remain unchanged.
- No Home or cross-page body section, copy, CTA, SEO/GEO, Schema or fact state is changed.

## 4. Historical PNG status

The V0.2 and V0.3 Global Chrome PNG boards contain the former visible label. They remain historical static evidence and retain their existing hashes. They are not valid visual instructions for current-page label treatment under V0.4.

No PNG is regenerated in this controlled specification task. Any later visual proof must receive a new version and must preserve the rest of the approved Global Chrome pixels while removing only the buyer-visible label and closing the resulting spacing naturally.

## 5. Review checklist

- [ ] Buyer-facing visible label count is 0.
- [ ] Desktop uses Bold + 3px Teal underline.
- [ ] Mobile Menu uses Bold + 4px Teal left marker.
- [ ] `aria-current="page"` is recorded as a production semantic requirement.
- [ ] Header geometry, Logo, fixed RFQ, Footer and page body are frozen.
- [ ] Historical PNG paths and hashes remain unchanged.
- [ ] No development or publication work is implied.

