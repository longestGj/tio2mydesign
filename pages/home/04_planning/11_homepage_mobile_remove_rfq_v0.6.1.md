# Homepage Mobile V0.6.1 — RFQ Section Removal

Status: `READY_FOR_USER_VISUAL_REVIEW`  
Date: 2026-08-31  
Scope: One authorised visual change only  
Base: Homepage Mobile V0.6  
Production status: Not production code; not a release approval

## Change performed

The full Mobile Homepage RFQ Section was removed, including:

- `REQUEST A QUOTE`
- `Prepare a structured quotation request`
- Supporting copy
- Destination Market
- Application
- Grade / Product
- Quantity
- Packaging
- Document Needs
- Section-level Request a Quote button
- The complete Navy section background and its spacing

No replacement CTA, form, strip, button, marketing copy, SEO content or GEO content was added.

## New bottom order

`Resources / Buyer Answers → Footer`

## Required confirmation

1. Full RFQ Section completely removed: `PASS`.
2. Resources / Buyer Answers directly enters Footer: `PASS`.
3. Footer unchanged: `PASS` — outer HTML, element dimensions and computed visual styles exactly match V0.6.
4. Products unchanged: `PASS` — outer HTML and isolated visual screenshot SHA-256 exactly match V0.6.
5. GEO content unchanged: `PASS` — Applications, Company, Documents and Resources/Buyer Answers markup, dimensions and styles match V0.6.
6. All other modules and buyer copy unchanged: `PASS`.

Existing Request a Quote access remains in Header, Hero and Footer.

## Responsive verification

| Width | Result | Page height | Horizontal overflow | RFQ Section | Resources → Footer |
|---:|---|---:|---|---|---|
| 375px | PASS | 9013px | None | Removed | Direct |
| 390px | PASS | 8884px | None | Removed | Direct |
| 430px | PASS | 8550px | None | Removed | Direct |

Formal 390px PNG: `390 × 8884px`.

## Unchanged-module evidence

- Header, Hero, Start Here, Markets, Products, Applications, Company and Documents: isolated screenshots are pixel-identical to V0.6.
- Resources and Footer: markup, dimensions and computed styles are identical. Their full-page vertical positions change naturally because the RFQ block no longer exists.
- V0.6 files remain preserved and are not overwritten.
