# ABOUT-001 Gate 5 Full Visual Specification V0.1

## 0. Document Control

| Field | Value |
|---|---|
| Page ID | `ABOUT-001` |
| Page | About TiO2 Malaysia |
| URL | `/about/` |
| Gate | Gate 5 — Desktop / 390px Full Visual |
| Version | `V0.1` |
| Date | `2026-09-01` |
| Status | `DRAFT_COMPLETE / SUBMITTED_FOR_GATE_5_REVIEW / NOT_APPROVED` |
| Gate 0–4 | `USER_APPROVED_2026_09_01` |
| Gate 5 authority | `USER_AUTHORIZED_2026_09_01` |
| Gate 6/7 | `NOT_STARTED / NOT_AUTHORIZED` |
| Content baseline | `ABOUT-001_GATE2_CONTENT_ARCHITECTURE_COPY_V0.1.md` |
| Structure baseline | `ABOUT-001_GATE3_DESKTOP_390_WIREFRAME_SPEC_V0.1.md` |
| Visual baseline | `ABOUT-001_GATE4_VISUAL_DIRECTION_V0.1.md` |
| Global Chrome | `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` + Home shared V0.2 |

This specification records the complete visual submission for ABOUT-001 only. It is not a development handoff and does not authorize Gate 6/7, WordPress, Next.js, CMS, code, testing, deployment or publishing.

## 1. Formal Visual Set

| Asset | Review purpose |
|---|---|
| `ABOUT-001_GATE5_DESKTOP_FULL_VISUAL_V0.1.png` | 1440px Buyer Clean full page with all ten modules and Desktop Footer |
| `ABOUT-001_GATE5_390PX_FULL_VISUAL_V0.1.png` | 390px Buyer Clean full page with the same approved content and Mobile Footer |
| `ABOUT-001_GATE5_MOBILE_MENU_OPEN_V0.1.png` | Logo, Close, fixed navigation order, About current and terminal RFQ |
| `ABOUT-001_GATE5_EVIDENCE_STATES_V0.1.png` | Atomic Partial and Restricted evidence rendering |
| `ABOUT-001_GATE5_INTERACTION_SCHEMA_V0.1.png` | Terminal/contextual actions, focus/hover/current and visible entity relationship |
| `ABOUT-001_GATE5_VALIDATION_V0.1.md` | Responsive, content, evidence, accessibility and manifest checks |

## 2. Full-page Visual Decision

The approved `Evidence-Led Industrial` direction is applied as a complete page:

- White and Soft Background carry the long procurement narrative.
- Primary/Deep Navy establish industrial authority and contain Markets, Final CTA and Footer.
- Teal is limited to Malaysia identity, section numbering, sources, active states and terminal actions.
- Trust is communicated by visible operating-company relationships, qualification copy, document applicability, fact labels, source lines and review dates.
- No factory, production-line, warehouse, loading, port, certificate, team, packaging or stock imagery is used.
- No generated capability image, gallery substitute, factory icon, certificate icon, shield, badge, map route, flag wall or decorative KPI counter is used.

## 3. Desktop Complete Visual

- Reference width: 1440px; content width: 1200px.
- Header: 84px; approved Logo; exact first-level order; About uses weight + `CURRENT` + 3px Teal underline; terminal RFQ remains visible.
- Hero: 7:5 identity / relationship split, full long H1, full operating-company name, qualification copy, CTA pair and adjacent source/review row.
- All ten approved modules render in order:
  `Hero → Who We Are → Why Malaysia Matters → What We Do → Markets We Serve → Applications We Support → How We Work → Documentation & Product Transparency → Company Facts → Final CTA`.
- Why Malaysia, Documentation and Company Facts remain the three primary trust anchors.
- How We Work is a coordination sequence, not a production, QC or traceability process.
- Footer: Deep Navy Brand / Explore / Information / Conversion / copyright structure with terminal RFQ.

## 4. 390px Complete Visual

- Header: 64px, `Logo | RFQ | Menu`; all logical targets are at least 44×44px.
- The approved long English copy is retained rather than shortened for mobile.
- H1 wraps naturally; `IKHLAS TITANIUM (MALAYSIA) SDN. BHD.` remains a visible entity line.
- CTAs stack full-width; source and review date remain adjacent to the claims they qualify.
- Malaysia/market relationship becomes a text matrix without crossing lines or route implications.
- Four-column Desktop modules become single-column lists/cards without horizontal scrolling.
- Company Facts use label-over-value; the Taiping address wraps without truncation.
- Mobile Footer uses the approved two-column link grouping, terminal RFQ and copyright.

## 5. Mobile Menu and Interaction

- Mobile Menu order: `Home → Markets → Products → Applications → Documents → Resources → About → Request a Quote`.
- About current uses bold text, visible `CURRENT` and a 4px Teal structural marker.
- Global RFQ always points to `/request-a-quote/`; there is no hidden, disabled, empty-slot or substitute action state.
- Terminal RFQ: `#007F77`; hover: `#006E68`; focus: 3px visible outline.
- Contextual primary remains Navy solid; contextual secondary remains White/Navy outline.
- Buttons do not move or change label between states; text links retain an underline cue.

## 6. Evidence-State Rendering

### Sufficient

The formal Desktop and 390px Buyer Clean visuals show user-approved first-party fields with `company-provided`, source, review date and applicability wording. Annual supply, export reach and customer base remain labelled `Company-reported` and are not represented as independently audited capacity.

### Partial

The scale rows can be removed while manufacturing/origin and export-coordination fields remain. Remaining source wording narrows to the fields still rendered. No empty card, dash, blank KPI or pending badge remains.

### Restricted

- H1 changes to `About TiO2 Malaysia`.
- Brand, operating-company relationship, neutral procurement framework and owner-page links remain.
- Manufacturing, origin, scale, quality, Port Klang, FCL/LCL and document-availability claims are absent.
- Company Facts retains only Brand and Operating company.
- Global RFQ remains visible and enabled.

## 7. Quality, Documents and Traceability Boundary

- Quality trust is expressed through product information, COA/document applicability and the buyer-review sequence; no certified QMS or ISO claim is introduced.
- TDS, SDS, COA, COO and REACH-/FDA-related support remains subject to grade, market, tonnage and transaction.
- About summarizes support and routes to Documents; it does not expose certificate thumbnails, downloads or document-management UI.
- Batch traceability remains frozen because the approved first-party source did not establish a publishable traceability process. No visual, icon or process step implies one.

## 8. SEO / GEO and Visible Schema Consistency

- One visible H1 owns `malaysia titanium dioxide manufacturer` in the sufficient/partial state.
- Restricted evidence overrides keyword matching with `About TiO2 Malaysia` rather than retaining an unsupported manufacturer claim.
- The visible entity chain is:
  `TiO2 Malaysia (Brand/platform) → operated by → IKHLAS TITANIUM (MALAYSIA) SDN. BHD. (Organization) → stated manufacturing site → Taiping, Perak, Malaysia (Place)`.
- European Union, United Kingdom, India and Brazil are visibly framed as priority website markets, not guaranteed export destinations.
- Organization Schema may repeat only the visible relationship and may not add registry, certification, production-capacity, traceability or guarantee fields.

## 9. Review Boundary

Gate 5 is complete as a submission but remains `NOT_APPROVED`. Project-control review and explicit user approval are required before any later gate. This task stops at Gate 5 and does not request or perform Gate 6/7.

