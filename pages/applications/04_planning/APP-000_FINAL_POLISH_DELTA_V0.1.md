# APP-000 Final Polish Delta V0.1

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-000` |
| URL | `/applications/` |
| Date | 2026-08-31 |
| Parent | APP-000 V0.10 Full-route visual |
| Review ID | `APP-000-G5-V11-FINAL-POLISH-01` |
| Status | `PARTIALLY_SUPERSEDED_BY_V0.12_GLOBAL_CHROME_CORRECTION` |
| Lifecycle | `DESIGN_IN_REVIEW` |
| Relationship source | PRODUCT V0.3; unchanged |
| Release-candidate state | `BLOCKED_BY_SHARED_CHROME_AND_LIVE_DOM_QA` |

V0.11 preserves the V0.10 section order and performs only the user's requested final polish. Its APP body copy and responsive content remain inherited by V0.12. Its Mobile `Quote` and page-specific Footer entity proposals were not approved and are replaced by the V0.5 Global Chrome authority in `APP-000_GLOBAL_CHROME_REALIGNMENT_DELTA_V0.1.md`.

## 2. Exact copy changes

| Location | V0.11 public copy |
|---|---|
| Specialty Materials | `For specialty material applications currently associated with CR-901.` |
| Review All Products | `Open the complete product directory when the required grade is already known or when a wider portfolio review is needed.` |
| Identify Required Documents | `Review the technical, quality and origin documentation requirements relevant to your evaluation and procurement process.` |
| Review Destination Context | `Check the relevant market page for destination-specific procurement context.` |

No relationship, performance, suitability, ranking or recommendation fact changes.

## 3. Mobile Process classification

The 390px Process module is now one stacked classification list with no redundant `Process Classification | Grades` column header.

- Process name is a clear row heading.
- Grade items use two-column 44px pills and natural row wrapping.
- Full-route demonstrates the conditional linked state.
- Route-safe renders plain pills because no Grade route is verified live.
- The module remains one compact container; it does not become three large cards.

Desktop retains the compact two-column table. Tablet retains the compact table because its 896px content width remains readable.

## 4. Historical shared Chrome proposal — not approved

V0.11 historically demonstrated the following proposed shared-component changes:

- 390px Header visible label `Quote`, with intended accessible name `Request a Quote`;
- Desktop Header, Mobile Menu and Footer retain `Request a Quote`;
- Footer uses `Procurement`;
- Desktop, Tablet and Mobile Footer visibly render `Operated by IKHLAS TITANIUM (MALAYSIA) SDN. BHD.`;
- copyright remains the existing approved visual format.

These changes were not approved. `GLOBAL_HEADER_FOOTER_APP_V11_CHANGE_IMPACT_V0.1.md` is closed without approval. V0.12 replaces the Header/Footer with `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`; this list is historical evidence only and is not an implementation or visual instruction.

## 5. Preserved scope

- H1, Hero body, Hero qualification and six quick links are unchanged.
- Six Application sets and PRODUCT V0.3 counts remain 8 / 8 / 7 / 4 / 2 / 1.
- The five-step guide, Process facts, three procurement paths, five FAQ items and Final RFQ copy are unchanged apart from the listed polish.
- `NO_PRIMARY_KEYWORD`, child-page keyword ownership and PRODUCT-000 directory ownership remain unchanged.
- M-2377 remains active in its five approved Applications and Sulfate; it is not pending or a page blocker.
- M-996/M-2196 comparison restrictions remain.
- No Product directory, new section, image, factory, certificate, trade or SEO-long-copy module is added.

## 6. Release blockers retained

1. The historical `Quote / operating entity` proposal is closed without approval and is not a current dependency; V0.12 consumes Global Chrome V0.5.
2. No external APP-000 DOM was supplied; anchor behavior, accordion ARIA and shared Chrome markup cannot receive live-DOM PASS.
3. All 14 Grade routes are registered but none is verified live in `site_scope=tio2-my`.
4. Application, Products, Documents, Markets and RFQ routes/workflows still require independent live verification.

Therefore V0.11 is historical and V0.12 is the current directed-revision candidate; neither is `APP-000 — RELEASE CANDIDATE`.
