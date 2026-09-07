# GRADE-M200 Gate 1 Evidence and Claim Audit V0.1

`GRADE-M200-G1-EVIDENCE-01` · 2026-09-02 · `TARGETED_RETURN / EVIDENCE_IDENTITY_VERSION_CONFLICT`

## Source discovery and inspection

An exhaustive PDF filename check found no file named for M-200. The only 200-labelled candidate was fully rendered, visually inspected and text-extracted.

| Check | Observed value | Decision |
|---|---|---|
| File | `docs/7.27 马来全套TDS +应用指南/7.27/TDS_CR-200_2024 V3.pdf` | conflicted candidate only |
| SHA-256 | `1607AB81ADD23973B15CA2808F637D7B1FAE55EEE8A305606FA0312B6B3381D9` | evidence anchor |
| File size/pages | 161,239 bytes / 1 page | readable |
| Filename identity/version | `CR-200` / `2024 V3` | conflicts with page |
| PDF metadata Title | `CR-200 Technical Data Sheet` | conflicts with page |
| Visible page identity | `M-200` | target Grade visible |
| Visible page footer | `TDS | M-200 Titanium Dioxide Pigment | V1 2026` | conflicts with filename version |
| Readability | render and text extraction both succeeded | PASS only for inspection, not public use |

## Gate decision

The PDF is readable but not an unconflicted Grade-matched source. SOP V2.0 section 6.2 requires no unresolved identity conflict; section 15 explicitly requires M-200 filename/PDF-title/visible-identity/version resolution. Therefore Gate 1 is returned and Gate 2-7 must not be fabricated from the document.

## Claim ledger while returned

| Claim family | Independent authority | Current decision |
|---|---|---|
| Page ID, URL, canonical, primary keyword | Registry + keyword master | verified for Gate 0 |
| Plastics relationship | relationship matrix | neutral mapping may be retained for future Gate 2 |
| Masterbatch relationship | relationship matrix | neutral mapping may be retained for future Gate 2 |
| Chloride process | relationship matrix | neutral classification may be retained for future Gate 2 |
| Coatings, Printing Inks, Paper, Specialty Materials | relationship matrix | `not_public` |
| Rutile/type, surface treatment, detailed applications, features, technical values | conflicted PDF only | `pending_verification / do_not_render` |
| Storage, packaging, safety, contact, origin, logistics, compliance | not approved for this page | `not_public` |

## Public-output effect

- Buyer Clean copy: not authored.
- Application cards: 0.
- Evaluation groups/items: 0/0.
- Technical columns/rows: 0/0.
- Product Schema properties: 0.
- Machine-readable Grade contract: not created.
- No CR-200 fallback, no placeholder technical module and no internal conflict wording may appear on a public page.

## Required correction

Provide a replacement M-200 TDS where all four identifiers agree:

1. filename identifies M-200;
2. PDF metadata Title identifies M-200;
3. visible header/body/footer identify M-200;
4. one visible version/date agrees with the source package label.

After replacement, compute a new SHA-256, render the complete PDF, re-extract every claim/value and restart Gate 1. Do not assume the current page content will remain unchanged.

