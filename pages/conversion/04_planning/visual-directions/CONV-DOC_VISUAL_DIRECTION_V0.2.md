# CONV-DOC Request Documents — Gate 4 Visual Direction V0.2

## 0. Control

| Field | Value |
|---|---|
| Review ID | `CONV-DOC-G5-V11-20260901-01` |
| Direction | Controlled Request, Low Friction |
| Status | `EXECUTED / DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Gate 3 input | `pages/conversion/04_planning/wireframes/CONV-DOC_WIREFRAME_SPEC_V0.2.md` |

V0.1 is historical because its visual hierarchy was built around destination/market request context and educational body sections.

## 1. Intended impression

Industrial, trustworthy and restrained. The page should feel like a controlled business request form, not a file manager, public download library, compliance portal, RFQ form or sales funnel.

The visual hierarchy is:

1. `Request Documents` and the receipt-only boundary.
2. Minimum information and three-step orientation.
3. Single-column form with clear Your Details / Request Details / Review groups.
4. Primary Request Documents action.
5. Shared Footer RFQ as persistent but terminal global navigation.

## 2. Shared brand system

- Consume `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, which preserves the V0.2-approved navigation, geometry and fixed RFQ lineage while removing buyer-visible CURRENT text.
- Desktop Header 84px; Mobile Header 64px; Mobile Menu and Footer remain shared.
- Production Logo asset keys and sizes remain unchanged.
- Deep Navy hero/Footer, white form surface, mist body background and accessible deep teal actions.
- No page-specific Header navigation item or Footer modification.

## 3. Page-specific components

- **Receipt boundary:** dark translucent panel with teal left rule; concise no-promise language.
- **Step cue:** three compact cards, numbered 01–03; not clickable and not a wizard.
- **Prefill box:** pale teal, editable chips, absent when no valid context exists.
- **Field groups:** thin rules and explicit headings; single scan column.
- **Document options:** white selectable cards, teal outline/fill only when selected, long labels wrap.
- **Controlled-request note:** grey neutral surface; never amber warning or red error unless state warrants it.
- **Review panel:** pale teal summary immediately before privacy and submit.
- **Privacy slot:** amber dashed internal annotation only in review assets; it is a release blocker, not final buyer copy.
- **Success/failure:** teal/red left rules and plain language; no celebratory delivery imagery.

## 4. Typography and density

Use the approved brand sans-serif direction. H1 is compact and literal. Body copy is 16–18px in hero and 13–16px in the form. Field labels remain readable at 390px. Form width is moderate rather than full desktop width; spacing groups the transaction without decorative empty bands.

## 5. Interaction visuals

- Focus uses Navy border plus amber outer ring with white separation.
- Validation uses error border, adjacent text and a focusable summary.
- Selected document cards retain clear checkbox state and do not rely on colour alone.
- Submitting uses a progress indicator and disabled-repeat affordance.
- Personal-email advice uses amber text but is not an error.
- Success primary content is `Document Request Received`; View Products is an outlined secondary action.
- Failure offers Try again and keeps the form data.

## 6. Prohibited visual directions

- PDF icons, download arrows, file inventory tables, Available/Approved badges or certificate seals.
- Country flags, destination chips, market-version selectors or regulatory maps.
- RFQ fields, quote-style pricing panels or immediate success-to-RFQ banner.
- Factory, warehouse, stock, shipment or certificate imagery that implies unverified capability.
- Disabling or hiding shared RFQ because route readiness is unresolved.

## 7. Gate 4 proof

The Gate 5 V0.2 assets demonstrate the direction at 1440, 768, 390, menu-open and interaction-state levels. Gate 4 is executed for review but is not approved or closed.
