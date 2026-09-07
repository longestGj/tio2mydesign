# MARKET-EU-DE Gate 3 Task Input Card V0.1

## Identity and permission

| Field | Bound value |
|---|---|
| Page | `MARKET-EU-DE` — Germany |
| URL / language / scope | `/markets/germany/` / EN / `tio2-my` |
| Page type | Market procurement landing page |
| Gate 3 authorization | `G3-DE-IT-PARALLEL-01` / Germany workstream |
| Current approved entry | `MARKET-EU-DE_CURRENT_GATE_BASELINE_MANIFEST_V0.5.md` |
| Allowed work | Responsive structure, local planning interaction and evidence only |
| Output | `D:\23MySec\pages\markets\germany\04_planning\gate3-v0.1` and Germany `05_review` |
| Stop | `DRAFT_FOR_PROJECT_CONTROL_REVIEW`; no self-approval or Gate 4 start |

## Approved Gate 2 inputs

| Role | File | SHA-256 |
|---|---|---|
| A | `MARKET-EU-DE_GATE2_CONTENT_SKELETON_V0.1.md` | `f42dc446fbe95be7728d55580fc4e5bc4b7e2c6a19e915ae81b32631e33579d0` |
| B — sole visible copy | `MARKET-EU-DE_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md` | `f95f338b4b966d48e0a10c0ad81b6fd7ffd21e552cee780bc9597d2e67b6c4d8` |
| C | `MARKET-EU-DE_GATE2_CONTENT_CONTRACT_V0.2.md` | `a2a5d629258e1d24aff03d6a3b3a24f194d89c5c6c1f5e6b68bb8eaef5faa187` |

The exact complete binding, authority identities and shared sources are in `input-binding.json`.

## Shared consumption

- Consumer: `TIO2MY-GATE3-SHARED-CONSUMER-002` / V0.2 / `1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50`.
- Current primary navigation: `Markets`.
- Production SVG keys: `brand_logo_primary_horizontal` and `brand_logo_reverse_monochrome`.
- Header, Footer, Mobile Menu and Cookie Settings are embedded from the page-neutral generator. No other business page is a source or dependency.

## Structure questions and validation positions

| Structure question | Expected relationship | Validation position / viewport / state |
|---|---|---|
| Can the three application paths stay distinct without implying a Germany-specific Grade choice? | Coatings, Plastics and Masterbatch each keep their own prompt and owner link; no named Grade is introduced | DE-02; 1440 three-column comparison, 768/390 stacked reading |
| Can destination guidance keep final receiving location separate from port or handover context? | Two explanatory paragraphs remain tied to the five-item request checklist | DE-05; 1440 prose/checklist pair, 768/390 stacked |
| Can long source labels, dates and limiting predicates remain readable? | VdL, GKV and Hamburg labels, dates and scope language remain complete and adjacent | DE-02 and DE-07 references; all three full pages, readable segments |
| Does the EU handoff preserve owner boundaries? | EU overview and dated Trade Update remain separate links; no duty, tax, customs-origin or shipment result is added | DE-06; full pages and exact href inspection |
| Does responsive shared Chrome work in this page assembly? | Markets current mapping, fixed RFQ, Footer closure, two narrow menu operations and Cookie entry/exit remain intact | 1440/768/390 runtime; 768/390 menu formal evidence |

No page form, selector, FAQ, accordion, page-specific media, data table or result state exists in B/C. Route liveness and actual receiving remain Gate 8/9 work.
