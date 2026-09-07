# ABOUT-001 Gate 7 Acceptance / Blocker Checklist V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `ABOUT-001` / `/about/` |
| Review ID | `ABOUT-001-G7-PCR-02` |
| Parent | Acceptance / Blocker Checklist V0.1 |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |

## 1. Targeted Media Acceptance

| Check | Required result |
|---|---|
| Public-body authorization | Every named Media Asset has `USER_APPROVED_EXTERNAL_USE`; no repeated approval request |
| Media inventory | Hero, Markets map/flags, four Applications and final CTA background are individually listed |
| Production method | Each Asset key supports existing source, derived crop or HTML/CSS/SVG rebuild |
| Semantic content | No whole-page PNG implementation and no rasterized headings/body/buttons/navigation |
| ALT | Neutral/decorative values do not infer factory, stock, shipment or customers |
| Scope | Every derived asset/component is `tio2-my`; no cross-scope fallback |
| OG/Schema | Optional; omitted when no concrete Asset key is selected |

## 2. Corrected Blocker Taxonomy

The following are blockers:

- a named required Asset key cannot be implemented by any permitted derivation method;
- a crop contains rasterized UI text;
- an implementation changes the approved visual object or creates an unapproved factual implication;
- a body asset leaks from another `site_scope`;
- an OG/Schema image is emitted without a named concrete implementation asset/hash or with non-neutral semantics.

The following are not blockers:

- the absence of an independent media-library file before Gate 8;
- the absence of optional OG/Schema image output;
- lack of a repeated user approval for the same approved body visual.

## 3. Preserved Acceptance

All V0.1 identity, content, Schema, route, shared Chrome, responsive, accessibility, evidence-state and phase controls remain unchanged. Gate 7 is not self-approved; Gate 8 remains unauthorized; `HANDED_OFF=NO`.
