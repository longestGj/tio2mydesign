# PRODUCT-000 Gate 7 Global Chrome Current-state Acceptance V0.1

## 1. Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Review ID | `PRODUCT-000-G7-PCR-04` |
| Status | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Date | 2026-08-31 |
| Scope | Targeted Global Chrome current-state authority binding and Gate 8/9 acceptance only |
| Page lifecycle | `HANDED_OFF` |
| Handoff | `HANDED_OFF` to thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6` on 2026-08-31 |
| Gate 8 | `HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED`; execution state maintained by D16 task |

This contract does not revise the approved Gate 5 page body, SEO/GEO, Schema, PRODUCT V0.3, fixed RFQ, production Logo, Footer or route ownership. Project control has approved and closed Gate 7, but this contract does not perform the external handoff, start Gate 8 or authorize this task to implement code.

## 2. Formal Global Chrome authority

All paths are relative to `D:\23MySec`.

| Authority file | Bytes | SHA-256 | Status / role |
|---|---:|---|---|
| `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | 7235 | `CC236F47018A68771856FDBAF5553517F63959774E0E8819130E66E2B1049F18` | `PROJECT_CONTROL_REVIEW_PASS / CLOSED`; controlling Global Chrome specification |
| `pages/home/04_planning/16_global_header_footer_current_state_component_states_v0.5.md` | 3682 | `2214BF1BCBE7646E8727A8E75E5E2A1552047E838D861891D0441B4895401B94` | Approved written component-state and semantic-test reference |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_CROSS_PAGE_REGISTRY_V0.2.md` | 3237 | `EA3CCC7D90FD6EBB28BE562C9FABFDD4663D360AA18E66590A6297FB14F697B7` | Approved cross-page binding; PRODUCT-000 maps to Products |
| `docs/architecture/GLOBAL_HEADER_CURRENT_STATE_PROJECT_CONTROL_SUBMISSION_V0.2.md` | 2586 | `B12C92F8CC87B1F7DBCAFECA6BAE2D29D2C4883BF52B751388FCBB8EA63FB54E` | Project-control closure record |

For Global Chrome current-state treatment only, these approved files and this PRODUCT-000 binding supersede older Gate 5 PNG label pixels and older Gate 7 phrases such as “Products current” or “identifiable without colour alone” where those phrases are less precise. The older PNGs and specifications remain immutable history. All unaffected page-body and Global Chrome contracts remain authoritative.

## 3. PRODUCT-000 buyer-visible current state

| Surface | Required Products treatment | Buyer-visible `CURRENT` text |
|---|---|---:|
| Desktop primary navigation | Products is Bold with a 3px Malaysia Teal underline | 0 |
| Open Mobile Menu primary navigation | Products is Bold with a 4px Malaysia Teal left marker | 0 |
| Closed Mobile Header | `Logo | RFQ | Menu`; no current-page label | 0 |
| Footer | No current-page marker | 0 |

No badge, suffix, label or equivalent visible status word may replace `CURRENT`. Colour alone is not the state indicator because weight plus the structural underline/left marker are both required.

## 4. Semantic and accessibility contract

1. PRODUCT-000 is an approved mapped route whose primary-navigation parent is Products.
2. Each Desktop or Mobile navigation surface contains at most one `aria-current="page"`.
3. For PRODUCT-000, the Desktop navigation surface contains exactly one current link and the Mobile Menu navigation surface contains exactly one current link.
4. At the active viewport, exactly one primary-navigation surface enters the accessibility tree and that surface exposes exactly one `aria-current="page"`.
5. The inactive responsive navigation surface may remain in the DOM, but it must be excluded from the accessibility tree and expose zero focusable descendants.
6. A full shared-component DOM fixture may therefore contain two total current nodes, one scoped to each responsive surface. Two current nodes within one surface are a blocking failure.
7. The current link remains keyboard reachable on the active surface and has the same accessible name as its visible navigation label: `Products`.

## 5. Frozen contracts

- Desktop navigation order remains `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Desktop Header remains 84px; Mobile Header remains 64px.
- Mobile Header order remains `Logo | RFQ | Menu`; the Mobile Menu preserves the same eight-item navigation order.
- Production SVG Logo assets remain governed by Production SVG Logo Manifest V1.0 and its approved keys.
- RFQ remains permanently visible across the approved Header, Mobile Header, Mobile Menu and Footer surfaces.
- Footer remains unchanged and buyer-visible `PROCUREMENT` remains required.
- Gate 5 body geometry, modules, copy, CTA, SEO/GEO, Schema, PRODUCT V0.3 and route-state behavior remain unchanged.
- Historical Gate 5 PNGs remain immutable visual evidence; their old visible-label pixels do not control production current-state rendering.

## 6. Gate 8 implementation contract

If PRODUCT-000 Gate 8 is separately authorized, it consumes the approved shared Global Chrome component and binds the PRODUCT-000 route to Products. It must not create a page-local Header/Menu variant, alter shared navigation text or order, use a historical PNG as a production asset, or infer a different parent.

This contract records implementation acceptance only. Gate 8 is `HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED`; actual implementation status is maintained by the D16 development task.

## 7. Gate 9 read-only QA and release blockers

Gate 9 must verify all of the following against the accessible implementation:

- Desktop Products treatment is Bold plus a 3px Teal underline.
- Mobile Menu Products treatment is Bold plus a 4px Teal left marker.
- Buyer-visible exact status word `CURRENT` in Desktop Header and Mobile Menu is 0.
- Per-surface `aria-current="page"` cardinality is exactly 1 for PRODUCT-000 and never greater than 1.
- At 1440px, 1024px, 768px and 390px, the active accessibility tree contains one primary-navigation surface and one current link.
- The inactive navigation surface is absent from the accessibility tree and keyboard sequence.
- At 390px and 200% zoom, there is no horizontal overflow, current-marker collision or hidden-surface focus leak.
- Navigation order, 84px/64px geometry, production Logo, fixed RFQ, Footer and protected page body remain unchanged.

Any failure above is a `GATE_9_READ_ONLY_QA_AND_RELEASE_BLOCKER`. This package does not claim that an external candidate implementation already passes these runtime checks.

## 8. Stage boundary

- `PRODUCT-000-G7-PCR-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
- Page lifecycle is `HANDED_OFF`.
- Gate 7 authority was handed to `01My首页开发`, thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`.
- Gate 8 is `HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED`; external execution status is not asserted here.
- Gate 9 is read-only QA after an accessible implementation exists.
- Gate 10 release, deployment, publication and indexing require separate user authorization.
- `D:\16Wordpress_nextjs` was not accessed or modified.
