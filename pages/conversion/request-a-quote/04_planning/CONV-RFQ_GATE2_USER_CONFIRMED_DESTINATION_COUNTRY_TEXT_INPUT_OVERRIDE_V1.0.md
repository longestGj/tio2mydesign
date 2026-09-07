# CONV-RFQ Gate 2 User-confirmed Destination Country Text-input Override V1.0

## 0. Control

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Gate | Gate 2 — complete-copy checkpoint |
| Date | 2026-09-01 |
| Decision | `USER_CONFIRMED_DESTINATION_COUNTRY_TEXT_INPUT` |
| Override scope | Destination Country field and prefill/validation contract only |
| Project-control review | `CONV-RFQ-G2-FULL-COPY-PCR-01` |
| Gate 3 | `NOT_STARTED / NOT_AUTHORIZED` |

This explicit user decision supersedes only the earlier Gate 1/2 Destination Country control description. Historical Brief, Skeleton and submission files remain unchanged for audit history. This override is consumed before those historical field descriptions.

## 1. Final current field contract

| Property | Current authority |
|---|---|
| Label | `Destination Country` |
| Required | Yes |
| Control | Single-line text input |
| Placeholder | `Enter the destination country` |
| Maximum length | 100 Unicode characters after trimming |
| Empty error | `Enter a destination country.` |
| Overlength error | `Keep the destination country to 100 characters or fewer.` |

The current contract uses no select, country list, shared country dataset, ISO/stable country code, region taxonomy or automatic country normalization.

## 2. Meaning boundary

Buyer-entered Destination Country text is RFQ request context only. It does not prove or promise service scope, shipping, freight, lead time, regulatory applicability, market support, inventory or availability.

## 3. Prefill contract

- Prefill may carry only actual Destination Country text explicitly provided by the buyer or an upstream action.
- The prefilled text remains visible and editable.
- A broad market or region such as `European Union` must not be written automatically into this field.
- Empty, whitespace-only, invalid or over-100-character prefill returns to the empty text state.
- Discarded prefill does not produce an error on first load.
- The field performs no automatic country lookup, allowlist resolution, code/name matching or normalization.

## 4. Frozen remainder

All other Gate 1/2 fields, Hero, module order, status copy, SEO/GEO/Schema, PRODUCT V0.3, Global Chrome and responsive boundaries remain unchanged. Shared Footer is consumed unchanged and remains wholly owned by Home / Global Chrome; it is not a CONV-RFQ Gate 2 revision item. The form-area Privacy Policy link remains separate Buyer Clean form content.
