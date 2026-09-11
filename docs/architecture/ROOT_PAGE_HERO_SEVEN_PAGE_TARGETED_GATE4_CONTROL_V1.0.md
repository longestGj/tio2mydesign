# Root Page Hero · Seven-Page Targeted Gate 4 Control V1.0

## 1. Document Control

| Field | Value |
|---|---|
| Control ID | `ROOT-HERO-G4-7PAGE-CTRL-01` |
| Version | `V1.0` |
| Date | `2026-09-11` |
| Parent authority | `ROOT-PAGE-HERO-001 = USER_APPROVED / ACTIVE` |
| Workflow mode | `PREPARE` |
| Current status | `PREPARED / NOT_DISPATCHED` |
| Scope | Seven approved root navigation pages only |
| Production implementation | Not authorized by this control record |

This record converts the approved shared Root Page Hero contract into an executable sequence. It does not start Gate 4, approve any new visual candidate, update any page Manifest, authorize Gate 8, or authorize changes in `D:\16Wordpress_nextjs`.

## 2. Controlled Scope

The targeted workset is limited to:

1. `HOME-001` — `/`
2. `APP-000` — `/applications/`
3. `PRODUCT-000` — `/products/`
4. `MARKET-000` — `/markets/`
5. `DOC-000` — `/documents/`
6. `RES-000` — `/resources/`
7. `ABOUT-001` — `/about/`

The work is a shared Hero alignment revision, not a seven-page redesign. Existing approved page identity, copy, media facts, CTA destinations, SEO/GEO/Schema facts, Header/Footer, and body modules remain governed by each page's current Manifest at dispatch time.

## 3. Ownership Model

### 3.1 Gate 4 production owner

Use one Gate 4 execution task for the shared parent workset `ROOT-HERO-G4-7P-V1`.

That task owns:

- the shared `RootPageHero` design master;
- the approved visual variants;
- shared geometry, spacing, typography, CTA, media and responsive tokens;
- seven page-specific bindings;
- targeted evidence for 1440px, 768px and 390px page contexts.

The executor must not create seven independent Hero systems or seven copies of shared rules.

### 3.2 Independent review owner

After the seven-page Gate 4 bundle is frozen, use a different task for the single formal Gate 5 independent cross-page review. The Gate 4 execution task's self-checks and wave checkpoints are not independent approval.

### 3.3 Future implementation owner

Only after the approved bundle passes Gate 6 and receives separate Gate 8 authorization may the D16 development owner implement one shared production component with seven consumer bindings. Page-level code forks are prohibited.

## 4. Execution Sequence

### Wave 1 — shared master proof

| Order | Page | Variant | Why first | Targeted proof |
|---:|---|---|---|---|
| 1 | `HOME-001` | `flagship-light` | Closest existing visual to the approved shared target; establishes flagship spacing, media balance and removal of the left decorative line. | Header-to-Hero join, full Hero, first following module at 1440/768/390. |
| 2 | `APP-000` | `hub-light` | First ordinary Hub consumer; proves the shared system works with information cards and without the historical left decorative line. | Header-to-Hero join, Hero information-card treatment, first following module at 1440/768/390. |

Wave 1 checkpoint: freeze the shared layout grid, text width, CTA rhythm, media boundary, minimum/maximum height behavior and responsive stack. If the master changes after this checkpoint, every already-rendered consumer must be regenerated and rechecked.

### Wave 2 — light Hub expansion

| Order | Page | Variant | Page-specific preservation |
|---:|---|---|---|
| 3 | `PRODUCT-000` | `hub-light` | Preserve the approved portfolio summary, product relationship boundaries and current CTA destinations. |
| 4 | `MARKET-000` | `hub-light` | Preserve destination-market identity, existing route governance and approved market summary language. |
| 5 | `DOC-000` | `hub-light` | Preserve the document-system illustration and keep the one-grade selector workflow below the Hero; Hero CTA remains a direct route to Request Documents. |

Wave 2 checkpoint: confirm one `hub-light` system handles three different content densities without hard-coded page-specific geometry or hidden actions.

### Wave 3 — approved special variants

| Order | Page | Variant | Page-specific preservation |
|---:|---|---|---|
| 6 | `RES-000` | `hub-dark` | Preserve the approved contained dark Resource Hub identity; do not turn the full page into a new dark theme. |
| 7 | `ABOUT-001` | `corporate-light` | Simplify first-screen density while preserving user-approved public facts; move supporting copy below the first-screen composition rather than deleting it. |

Wave 3 checkpoint: verify that the two special variants remain visibly part of the same Root Page Hero family and do not become unrelated page-specific designs.

## 5. Gate 4 Deliverable Set

The executor must submit one coherent bundle containing:

1. shared Hero master and token table;
2. variant rules for `flagship-light`, `hub-light`, `hub-dark`, and the approved About presentation `corporate-light`;
3. seven page-binding records that point to the exact current page copy, CTA, media and surrounding-module baseline;
4. targeted 1440px, 768px and 390px evidence for each page, including Header, full Hero and enough of the next module to review the transition;
5. explicit proof that no buyer-visible `CURRENT` label and no teal/green left decorative line remain;
6. overflow, long-copy, keyboard/focus, CTA visibility, media crop and 44px touch-target checks;
7. an unchanged-scope register covering Header/Footer, body content, routes, SEO/GEO/Schema and page-specific evidence boundaries;
8. an asset and evidence Manifest with dimensions and SHA-256 values.

Full long-page rerenders are not required when the unchanged body is already covered by the current approved page baseline. The targeted evidence must still prove the Hero-to-body transition in real page context; isolated component cards are insufficient.

## 6. Dispatch Preconditions

Before each page binding is rendered, the Gate 4 executor must re-read:

- the current page Manifest;
- the latest approved Brief and Gate 2/Gate 3 inputs consumed by that Manifest;
- the current Global Chrome and production Logo contracts;
- `ROOT_PAGE_HERO_SHARED_COMPONENT_SPEC_V1.0.md`;
- any active same-page change record.

If another active change touches the same Hero, first module, CTA or page Manifest, the controller must either freeze that change or explicitly combine it into the same workset. Silent parallel baselines are prohibited. In particular, any open `DOC-000` FAQ revision remains separate from the Hero unless its current Manifest is formally updated before the DOC binding starts.

## 7. Formal Review and Closure

After all waves are complete:

1. Freeze one seven-page Gate 4 candidate bundle.
2. Submit it to one independent Gate 5 reviewer who did not create the bundle.
3. Review shared consistency and every page's specific preservation contract.
4. Return all findings under one review cycle, separating shared-parent defects from page-binding defects.
5. After required corrections, the project controller may close Gate 4 and Gate 5 under the approved standing authority, provided no new user decision is required.
6. Update each page Manifest only after the cross-page bundle has passed; do not overwrite historical approved baselines.
7. Prepare one cross-page Gate 6 impact/addendum package rather than seven duplicate shared-component specifications.

## 8. Stop Conditions

Stop and return to project control if work would:

- change page identity, URL, primary intent or approved copy meaning;
- change CTA destination or form workflow;
- introduce or remove a buyer-facing module outside the Hero transition;
- alter Header/Footer or Logo ownership;
- change SEO/GEO/Schema facts;
- require a new shared variant not authorized by the parent contract;
- overwrite an approved visual baseline;
- start production implementation without Gate 8 authorization.

## 9. Rollback

Each page keeps its current approved Manifest and assets until the complete cross-page candidate passes independent review and is promoted. A failed page binding can roll back to its prior approved Hero without invalidating unrelated pages. A failed shared-parent rule returns the full affected wave for regeneration.

## 10. Next Authorized Decision

The next decision is whether to dispatch `ROOT-HERO-G4-7P-V1` to one Gate 4 execution task. This preparation record does not make that decision automatically.
