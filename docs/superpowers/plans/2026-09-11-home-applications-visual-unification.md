# HOME-001 Applications-Aligned Visual Unification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace HOME-001's current mixed full-bleed visual treatment with the user-approved Applications-aligned page system while preserving all approved Home content, links, data, SEO/GEO/Schema behavior, shared Header/Footer, and release boundaries.

**Architecture:** First produce and independently review a new versioned Gate 4 visual bundle in `D:\23MySec`; then close Gate 4 and Gate 6 under the current standing authority and stop for explicit Gate 8 authorization. After authorization, a separate developer task in `D:\16Wordpress_nextjs` changes only the Home renderer and Home CSS, with test-first coverage and exact-width evidence. A different read-only reviewer then performs Gate 9 against the locked development commit and evidence manifest. The current Home Gate 9 implementation remains the rollback baseline until the new implementation passes Gate 9.

**Tech Stack:** Markdown and JSON governance artifacts; static HTML visual prototype; Playwright/Chromium PNG capture; Next.js 16; React 19; TypeScript; CSS Modules; Vitest and Testing Library; Playwright plus Axe; PowerShell verification.

**Spec:** `docs/superpowers/specs/2026-09-11-home-applications-visual-unification-design.md`

## Controlling Project Workflow

This plan is subordinate to the TiO2 Malaysia project workflow and does not create a parallel lifecycle. The controlling sequence for this visual revision is:

```text
Gate 4 visual revision and freeze
→ Gate 5 independent visual review mapped to the single Gate 4 closeout
→ Gate 6 project-control review and sole development handoff
→ explicit user authorization for Gate 8
→ Gate 8 implementation in the separate D16 project
→ Gate 9 independent read-only acceptance
→ explicit user authorization for Gate 10
```

Gate 1–3 remain inherited and frozen because this revision changes presentation only. Any executor skill named in this plan is only a task-execution method inside the currently authorized Gate. It cannot approve a Gate, start the next Gate, modify project authority, or authorize external development, release, deployment, DNS, or indexing.

## Global Constraints

- The approved visual decision is exact: Home adopts the current `/applications` body language while keeping Home's own information architecture and role.
- Freeze `wordpress/plugins/tio2-site-model/config/tio2-my-homepage.json`, `lib/seo/homepage-metadata.ts`, `lib/seo/homepage-jsonld.ts`, all visible copy, all link targets, PRODUCT V0.3 relationships, and module order.
- Reuse `MalaysiaGlobalHeader` and `MalaysiaGlobalFooter`; do not fork or restyle Global Chrome and do not render a buyer-visible `CURRENT` label.
- Preserve the production SVG Logo and all fixed RFQ surfaces. The page-level RFQ remains visible at 768/1024/1440 and hidden at 320/390; Hero, Header, Mobile Menu, and Footer RFQ remain available.
- Keep `Start Here` immediately below Hero and visible at all five widths. This implements the user's decision that Tablet retains the module.
- Keep all 14 Grade IDs and product counts `6 / 5 / 2 / 1`; infer no recommendation, ranking, equivalence, suitability promise, or new relationship.
- Preserve the approved responsive compositions: Products `4 / 2×2 / mobile disclosure`; Applications `3+2 / 2+2+1 / one column`.
- Use the current Applications tokens exactly where the systems overlap: `--navy:#062b5b`, `--deep:#031b3a`, `--teal:#007f77`, `--bright:#00a99d`, `--ink:#334155`, `--muted:#64748b`, `--soft:#f5f8fb`, `--line:#d9e2ec`, `--white:#fff`, and a `1200px` centered content width.
- Do not call paid Superdesign. Use the existing Gate 4 Agent and the three approved project skills.
- D23 may produce design, handoff, and read-only QA artifacts only. D16 implementation must occur in a separate, explicitly authorized development task.
- Gate 10, merge, deployment, release, DNS, and indexing are outside this plan.
- Preserve unrelated user changes. In the dirty D23 worktree, stage and commit only the exact files created or changed by the active task.

## File Responsibility Map

### D23 design and governance

- Create: `pages/home/04_planning/17_homepage_applications_aligned_visual_design_v1.0.md` — one authoritative Gate 4 visual contract for this revision.
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/homepage-applications-aligned-preview-v1.0.html` — editable static visual source only; not production code.
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/freeze-record.json` — source, dependency, viewport, asset, byte, and SHA-256 identities.
- Create in the same visual directory: seven required PNGs named in Task 2.
- Create: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_AUTHOR_SELF_CHECK_V1.0.md` — execution self-check, never an independent approval.
- Create: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md` — the single independent visual review required by the current 4→5 contract.
- Create: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_CLOSEOUT_V1.0.md` — project-control closeout under standing authority.
- Create: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE6_REVIEW_AND_DELIVERY_V1.0.md` — changed-scope Gate 6 review.
- Create: `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_HANDOFF_PACKAGE_V1.0.md` — sole development entry.
- Create: `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_ACCEPTANCE_AND_BLOCKERS_V1.0.md` — Gate 8/9 acceptance IDs and stop conditions.
- Create: `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md` — sole page-level pointer after Gate 4 closes; it must distinguish the new approved design from the old current implementation.
- Update only after the new page Manifest is approved: `00_PROJECT_STATUS.md` and `01_PROJECT_INDEX.md` — change Home's pointer without rewriting unrelated page status.
- Create: `99_workspace/HOME-001_applications_aligned_v1/verify_home_visual_bundle.ps1` and `verification_home_visual_bundle_v1.json` — deterministic visual-bundle identity and rule checks.

### D16 implementation and evidence, only after Gate 8 authorization

- Modify: `components/sites/tio2-my/homepage/malaysia-homepage.tsx` — Home-owned semantic wrappers and visual grouping only.
- Modify: `components/sites/tio2-my/homepage/malaysia-homepage.module.css` — Applications-aligned Home layout and responsive styles.
- Modify only if a failing acceptance test proves it necessary: `components/sites/tio2-my/homepage/responsive-product-groups.tsx` — preserve existing accessible disclosure behavior.
- Modify: `tests/unit/homepage/malaysia-template.test.tsx` — frozen order/content plus new structural wrapper assertions.
- Modify: `tests/unit/homepage/malaysia-styles.test.ts` — exact token, breakpoint, visibility, and shared-language assertions.
- Modify: `tests/e2e/malaysia-homepage-gate9.spec.ts` — replace obsolete fixed-height assertions with approved responsive geometry and visibility behavior.
- Create: `tests/e2e/malaysia-homepage-visual-unification.spec.ts` — screenshot/evidence capture and cross-page visual-family checks.
- Create: `docs/verification/home-applications-aligned-v1.0/EVIDENCE_MANIFEST.json` — Gate 8→9 identity handoff.
- Create: `docs/verification/home-applications-aligned-v1.0/GATE8_IMPLEMENTATION_RECEIPT.md` — commit, build, commands, results, differences, and rollback.
- Create in the same evidence directory: seven implementation PNGs matching the Gate 4 viewport/state inventory.

### D23 Gate 9, after Gate 8 return

- Create: `pages/home/07_qa/HOME-001_APPLICATIONS_ALIGNED_GATE9_READ_ONLY_ACCEPTANCE_V1.0.md`.
- Create: `pages/home/07_qa/home-applications-aligned-v1.0/` — reviewer-generated diagnostic images and machine output only when triggered by an acceptance need.
- Supersede the page-level Manifest only after Gate 9 decision; preserve `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` as the rollback implementation record.

---

### Task 1: Pin the Gate 4 workset and create the visual contract

**Files:**
- Create: `pages/home/04_planning/17_homepage_applications_aligned_visual_design_v1.0.md`
- Create: `99_workspace/HOME-001_applications_aligned_v1/verify_home_visual_bundle.ps1`
- Reference: `docs/superpowers/specs/2026-09-11-home-applications-visual-unification-design.md`
- Reference: `pages/home/07_qa/HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md`
- Reference: `components/sites/tio2-my/applications/malaysia-application-hub.module.css` in D16

- [ ] Read the current Home implementation Manifest, approved design spec, Gate 4 Agent baseline, all three Gate 4 project skills, and the exact Applications CSS file. Record exact input identities before authoring.

- [ ] Write the versioned visual contract with `page_id=HOME-001`, one `workset_id`, the old Gate 9 implementation as rollback, the seven evidence states, frozen content/behavior fields, and the user-approved decisions from the spec.

- [ ] Map every existing `data-module` to its new surface without changing order:

```text
hero → rounded bordered hero + right media card
start-here → three rounded entry cards
markets → four cards, 2×2 at 768+
products → four grouped cards, 4 / 2×2 / mobile disclosure
applications → five cards, 3+2 / 2+2+1 / one column
company → one light rounded container
documents → two white cards in a light section
resources → five same-family cards, 2+3 / two columns / one column
page-rfq → rounded navy container, hidden only at 320/390
```

- [ ] Implement the verifier so it fails before the visual assets exist and checks at minimum: all seven expected asset names, PNG dimensions, nonzero bytes, hashes recorded in `freeze-record.json`, required module names, exact Applications token values, Tablet Start Here presence, and page-RFQ breakpoint rules.

- [ ] Run the verifier and confirm the intentional red state.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\99_workspace\HOME-001_applications_aligned_v1\verify_home_visual_bundle.ps1
```

Expected: nonzero exit with explicit missing visual-source/freeze/PNG findings; no unrelated file is reported.

- [ ] Commit only the visual contract and verifier.

```powershell
git add -- pages/home/04_planning/17_homepage_applications_aligned_visual_design_v1.0.md 99_workspace/HOME-001_applications_aligned_v1/verify_home_visual_bundle.ps1
git commit -m "docs: define Home Applications-aligned Gate 4 contract"
```

### Task 2: Build and freeze the complete responsive visual bundle

**Files:**
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/homepage-applications-aligned-preview-v1.0.html`
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/home-001-applications-aligned-1440-v1.0.png`
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/home-001-applications-aligned-1024-v1.0.png`
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/home-001-applications-aligned-768-v1.0.png`
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/home-001-applications-aligned-390-v1.0.png`
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/home-001-applications-aligned-320-v1.0.png`
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/home-001-mobile-menu-390-v1.0.png`
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/home-001-products-expanded-390-v1.0.png`
- Create: `pages/home/04_planning/visual-designs/home-applications-aligned-v1.0/freeze-record.json`
- Create: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_AUTHOR_SELF_CHECK_V1.0.md`
- Create: `99_workspace/HOME-001_applications_aligned_v1/verification_home_visual_bundle_v1.json`

- [ ] Use the approved Home content and existing powder asset `pages/home/04_planning/visual-designs/assets/homepage-hero-tio2-material-v0.6.png`; do not invent or rewrite copy. Build the static HTML source with the Applications token values and exact structure in the visual contract.

- [ ] Implement Hero as a bordered rounded card with current text/actions at left and a bounded image card at right. At 390/320, stack copy, actions, then image; the image remains visible and no placeholder gap remains.

- [ ] Implement all other module grids and CTA levels exactly as approved. Use the existing shared Chrome visual evidence as an owner dependency; do not create a competing Header/Footer implementation.

- [ ] Capture full-page evidence at 1440, 1024, 768, 390, and 320 CSS pixels, plus the 390 Mobile Menu and 390 Products-expanded states. Record browser, DPR, viewport, source identity, dimensions, bytes, and SHA-256.

- [ ] Inspect original-detail crops at every section join and confirm no clipping, overlap, abnormal whitespace, horizontal overflow, or card collision; all visible mobile actions are at least 44px high.

- [ ] Write the author self-check with an explicit distinction among `STATIC_VISUAL`, `LOCAL_SIMULATION`, and behavior deferred to Gate 9. The self-check must not claim independent approval.

- [ ] Run the verifier summary until it passes and hash the stable JSON result.

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File .\99_workspace\HOME-001_applications_aligned_v1\verify_home_visual_bundle.ps1
Get-FileHash .\99_workspace\HOME-001_applications_aligned_v1\verification_home_visual_bundle_v1.json -Algorithm SHA256
```

Expected: exit `0`; seven assets found; five widths correct; all declared hashes match; no contract-rule failures.

- [ ] Commit the frozen Gate 4 bundle with an exact path list.

```powershell
git add -- pages/home/04_planning/visual-designs/home-applications-aligned-v1.0 pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_AUTHOR_SELF_CHECK_V1.0.md 99_workspace/HOME-001_applications_aligned_v1/verification_home_visual_bundle_v1.json
git commit -m "design: freeze Home Applications-aligned visual bundle"
```

### Task 3: Perform the single independent Gate 5 visual review and close Gate 4

**Files:**
- Create: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md`
- Create: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_CLOSEOUT_V1.0.md`
- Create: `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md`
- Modify after closeout: `00_PROJECT_STATUS.md`
- Modify after closeout: `01_PROJECT_INDEX.md`

- [ ] Dispatch the frozen `bundle_id` to a reviewer different from the Gate 4 author. Verify input completeness under `GATE4_GATE5_VISUAL_HANDOFF_CONTRACT_V1.0.md`.

- [ ] Review all seven assets and source against the approved spec. Cover visual-family parity, Home-specific hierarchy, all frozen content/modules, exact responsive arrangements, Hero image presence, Start Here presence, RFQ visibility, shared Chrome ownership, overflow, touch targets, and rollback identity.

- [ ] If a defect is found, retain stable Finding IDs, return it to the Gate 4 author, create a new versioned source/bundle, and review only the changed scope plus adjacent regression. Never edit a submitted frozen bundle in place.

- [ ] When the independent report is `REVIEW_PASS`, create the closeout with:

```text
status=APPROVED / CLOSED
approval_basis=USER_STANDING_AUTHORITY
authority=G346-DELEGATED-CLOSURE-20260907
review_stage=GATE5_INDEPENDENT_VISUAL_REVIEW
next_gate=GATE_6_NOT_STARTED_UNTIL_DISPATCH
gate_8=NOT_AUTHORIZED
```

- [ ] Create the sole page-level Manifest. It must state that the new Gate 4 design is approved while the current runtime is still the old Gate 9 V0.2 implementation; neither may masquerade as the other.

- [ ] Update only Home's Status and Index pointers. Scan for competing Home current-Manifest pointers and stale active claims that Tablet Start Here remains undecided.

```powershell
rg -n "HOME-001.*CURRENT|Tablet.*Start Here|USER_DECISION_REQUIRED" .\00_PROJECT_STATUS.md .\01_PROJECT_INDEX.md .\pages\home
```

Expected: one page-level current Manifest pointer; the old Gate 9 V0.2 file remains a named rollback implementation record; no active undecided Tablet Start Here statement.

- [ ] Commit review and closeout records separately from the visual-author commit.

```powershell
git add -- pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE5_INDEPENDENT_VISUAL_REVIEW_V1.0.md pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE4_CLOSEOUT_V1.0.md pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md 00_PROJECT_STATUS.md 01_PROJECT_INDEX.md
git commit -m "docs: approve Home Applications-aligned Gate 4 baseline"
```

### Task 4: Complete Gate 6 review and prepare the sole Gate 8 handoff

**Files:**
- Create: `pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE6_REVIEW_AND_DELIVERY_V1.0.md`
- Create: `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_HANDOFF_PACKAGE_V1.0.md`
- Create: `pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_ACCEPTANCE_AND_BLOCKERS_V1.0.md`
- Modify: `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md`
- Modify: `00_PROJECT_STATUS.md`
- Modify: `01_PROJECT_INDEX.md`

- [ ] Receive Gate 4 using `GATE5_GATE6_ACCEPTANCE_CONTRACT_V1.0.md`. Reuse the independent visual review; do not perform a second full visual review without a new identity or conflict.

- [ ] Compare Gate 1–4 authority with the new visual bundle and prove this is presentation-only: content JSON, metadata, JSON-LD, link targets, product relationships, shared Chrome, and production Logo are unchanged.

- [ ] Define acceptance IDs that persist through Gate 8 and Gate 9:

```text
HOME-VU-A01 exact module order and approved copy/link parity
HOME-VU-A02 Applications-aligned tokens, 1200px shell, card language, and section rhythm
HOME-VU-A03 Hero image visible and bounded at 1440/1024/768/390/320
HOME-VU-A04 Start Here visible at all five widths
HOME-VU-A05 approved Markets, Products, Applications, Company, Documents, Resources layouts
HOME-VU-A06 page RFQ visible at 768+ and absent at 390/320
HOME-VU-A07 14 unique Grades, 6/5/2/1, accessible mobile disclosure
HOME-VU-A08 shared Header/Footer/Logo/current-state/fixed-RFQ no regression
HOME-VU-A09 no overflow, clipping, overlap; mobile targets >=44px; Axe serious/critical=0
HOME-VU-A10 metadata, JSON-LD, CMS contract, site_scope, and public behavior unchanged
HOME-VU-A11 exact-width implementation evidence and Gate 8 receipt identity complete
HOME-VU-A12 old Gate 9 V0.2 implementation remains executable rollback
```

- [ ] The handoff must name D16 files that may change, frozen files, required commands, seven evidence outputs, fail-closed behavior, and rollback. Do not prescribe a new CMS model or duplicate Applications components.

- [ ] Independently review the new Gate 6 handoff content. Close Gate 6 under standing authority only after all mandatory findings are resolved; record `APPROVED_FOR_HANDOFF`, not `HANDED_OFF`.

- [ ] Update Home's page-level Manifest and status pointers with Gate 6 approved/closed and `Gate 8=LOCKED / NOT_AUTHORIZED`.

- [ ] Commit the Gate 6 package.

```powershell
git add -- pages/home/05_review/HOME-001_APPLICATIONS_ALIGNED_GATE6_REVIEW_AND_DELIVERY_V1.0.md pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_HANDOFF_PACKAGE_V1.0.md pages/home/06_handoff/HOME-001_APPLICATIONS_ALIGNED_GATE6_ACCEPTANCE_AND_BLOCKERS_V1.0.md pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md 00_PROJECT_STATUS.md 01_PROJECT_INDEX.md
git commit -m "docs: close Home visual-unification Gate 6 handoff"
```

- [ ] **STOP:** report the exact approved visual bundle, independent review result, Gate 6 package, open release blockers, and concrete Gate 8 changes. Do not touch D16 until the user explicitly authorizes Gate 8 development.

### Task 5: Establish failing Gate 8 tests in the separately authorized D16 task

**Files:**
- Modify: `tests/unit/homepage/malaysia-template.test.tsx`
- Modify: `tests/unit/homepage/malaysia-styles.test.ts`
- Modify: `tests/e2e/malaysia-homepage-gate9.spec.ts`
- Create: `tests/e2e/malaysia-homepage-visual-unification.spec.ts`

- [ ] In the D16 task, verify repository, branch/checkout, and worktree before changes. Record the exact baseline commit; do not assume the historical worktree in Home Gate 9 V0.2 is still active.

```powershell
git status --short
git rev-parse HEAD
git branch --show-current
```

Expected: the intended Home development checkout is identified. If unrelated changes overlap Home/shared files, stop and return the exact collision rather than overwriting it.

- [ ] Extend the unit renderer test to retain existing module order and 14-Grade assertions and add Home-owned surface markers without exposing internal IDs publicly:

```tsx
expect(container.querySelector('[data-module="hero"] [data-home-surface="hero-media"]')).toBeTruthy()
expect(container.querySelectorAll('[data-module="start-here"] [data-home-card]')).toHaveLength(3)
expect(container.querySelectorAll('[data-module="markets"] [data-home-card]')).toHaveLength(4)
expect(container.querySelectorAll('[data-module="products"] [data-product-group]')).toHaveLength(4)
expect(container.querySelectorAll('[data-module="applications"] [data-home-card]')).toHaveLength(5)
expect(container.querySelectorAll('[data-module="documents"] [data-home-card]')).toHaveLength(2)
expect(container.querySelectorAll('[data-module="resources"] [data-home-card]')).toHaveLength(5)
```

- [ ] Extend the style test to compare Home's overlapping token values with actual Applications CSS, verify `1200px`, the 560px mobile breakpoint, page-RFQ visibility, and that no Home selector reaches into shared Header/Footer classes.

- [ ] Replace the obsolete exact 1440 section-height map in the existing Gate 9 E2E with invariant checks: centered width, layout columns, visibility, no overflow, module order, accessibility, and touch targets. Do not carry old fixed heights into a deliberate redesign.

- [ ] Create the visual-unification E2E with exact widths `320, 390, 768, 1024, 1440`, visible Hero image at all five, Start Here at all five, correct RFQ visibility, and computed-style comparison between Home and Applications for shared card/shell properties.

- [ ] Run focused tests before implementation and confirm they fail for intended visual-contract reasons.

```powershell
npx vitest run tests/unit/homepage/malaysia-template.test.tsx tests/unit/homepage/malaysia-styles.test.ts
$env:TIO2_MY_BASE_URL='http://127.0.0.1:3100'
npx playwright test tests/e2e/malaysia-homepage-gate9.spec.ts tests/e2e/malaysia-homepage-visual-unification.spec.ts --project=chromium
```

Expected: new surface/token/layout assertions fail against old Home; existing content/order/link assertions remain green.

- [ ] Commit only the failing tests.

```powershell
git add -- tests/unit/homepage/malaysia-template.test.tsx tests/unit/homepage/malaysia-styles.test.ts tests/e2e/malaysia-homepage-gate9.spec.ts tests/e2e/malaysia-homepage-visual-unification.spec.ts
git commit -m "test: define Home Applications-aligned visual contract"
```

### Task 6: Restructure the Home renderer without changing data or semantics

**Files:**
- Modify: `components/sites/tio2-my/homepage/malaysia-homepage.tsx`
- Test: `tests/unit/homepage/malaysia-template.test.tsx`

- [ ] Add only Home-owned grouping hooks needed by the approved layout. Keep current semantic elements, headings, native links, RFQ attribution, IDs, module order, and data mappings.

- [ ] Convert the Hero visual wrapper into an explicit media-card surface while keeping `next/image`, the same source, empty decorative alt, dimensions, and high-priority load:

```tsx
<div className={styles.heroMedia} data-home-surface="hero-media" aria-hidden="true">
  <Image
    src={homepage.hero.media.src}
    alt=""
    width={homepage.hero.media.width}
    height={homepage.hero.media.height}
    className={styles.heroImage}
    sizes="(min-width: 1200px) 430px, (min-width: 561px) 38vw, calc(100vw - 80px)"
    fetchPriority="high"
  />
</div>
```

- [ ] Add `data-home-card` only to existing visible card roots in Start Here, Markets, Applications, Documents, and the five combined Resource/Buyer Answer articles. Do not add duplicate text, hidden copy, or a second navigation layer.

- [ ] Keep `ResponsiveProductGroup` behavior unchanged unless unit/E2E evidence exposes a real accessibility or state defect.

- [ ] Run the focused unit renderer test.

```powershell
npx vitest run tests/unit/homepage/malaysia-template.test.tsx
```

Expected: module order, one H1, 14 unique Grade IDs, native links, RFQ attribution, and new structure all pass.

- [ ] Commit the renderer-only change.

```powershell
git add -- components/sites/tio2-my/homepage/malaysia-homepage.tsx
git commit -m "refactor: expose Home visual-unification surfaces"
```

### Task 7: Implement Applications-aligned Home CSS and responsive layouts

**Files:**
- Modify: `components/sites/tio2-my/homepage/malaysia-homepage.module.css`
- Modify only if proven necessary: `components/sites/tio2-my/homepage/responsive-product-groups.tsx`
- Test: `tests/unit/homepage/malaysia-styles.test.ts`
- Test: `tests/e2e/malaysia-homepage-gate9.spec.ts`
- Test: `tests/e2e/malaysia-homepage-visual-unification.spec.ts`

- [ ] Replace the mixed full-bleed body treatment with the Applications token block and centered shell. Preserve Home's font stack and accessible contrast:

```css
.homepageMain {
  --navy:#062b5b;
  --deep:#031b3a;
  --teal:#007f77;
  --bright:#00a99d;
  --ink:#334155;
  --muted:#64748b;
  --soft:#f5f8fb;
  --line:#d9e2ec;
  --white:#fff;
  color:var(--ink);
  background:var(--white);
  overflow-x:clip;
}

.homepageMain > section {
  width:min(1200px,calc(100% - 64px));
  margin-inline:auto;
}
```

- [ ] Implement approved Hero, section headers, cards, buttons, light section surfaces, and one rounded navy page-RFQ. Match Applications' `14px` outer surfaces, `12px` cards, fine borders, and low-opacity shadows rather than creating near-match values.

- [ ] Implement exact grid behavior:

```text
1440: Start 3; Markets 2×2; Products 4; Applications 3+2; Resources 2+3
1024: Start 3; Markets 2×2; Products 2×2; Applications 2+2+1; Resources 2 columns
768:  Start 3; Markets 2×2; Products 2×2; Applications 2+2+1; Resources 2 columns
390/320: all one column; product disclosure visible; Hero image visible; page RFQ hidden
```

- [ ] Ensure Company and Documents surfaces are light. Deep Navy may appear only in page RFQ and shared Footer; no full-width dark Documents band remains.

- [ ] Run unit and E2E tests against the local Malaysia site.

```powershell
npx vitest run tests/unit/homepage/malaysia-template.test.tsx tests/unit/homepage/malaysia-styles.test.ts
$env:TIO2_MY_BASE_URL='http://127.0.0.1:3100'
npx playwright test tests/e2e/malaysia-homepage-gate9.spec.ts tests/e2e/malaysia-homepage-visual-unification.spec.ts --project=chromium
```

Expected: all tests pass; no serious/critical Axe violations; scrollWidth equals clientWidth at all five widths; Hero/Start Here/RFQ rules match the spec.

- [ ] Commit Home styling separately.

```powershell
git add -- components/sites/tio2-my/homepage/malaysia-homepage.module.css
git add -- components/sites/tio2-my/homepage/responsive-product-groups.tsx
git commit -m "feat: align Home visual system with Applications"
```

Do not run the second `git add` if `responsive-product-groups.tsx` was not changed.

### Task 8: Prove frozen contracts and capture Gate 8 evidence

**Files:**
- Create: `docs/verification/home-applications-aligned-v1.0/home-001-1440.png`
- Create: `docs/verification/home-applications-aligned-v1.0/home-001-1024.png`
- Create: `docs/verification/home-applications-aligned-v1.0/home-001-768.png`
- Create: `docs/verification/home-applications-aligned-v1.0/home-001-390.png`
- Create: `docs/verification/home-applications-aligned-v1.0/home-001-320.png`
- Create: `docs/verification/home-applications-aligned-v1.0/home-001-mobile-menu-390.png`
- Create: `docs/verification/home-applications-aligned-v1.0/home-001-products-expanded-390.png`
- Create: `docs/verification/home-applications-aligned-v1.0/EVIDENCE_MANIFEST.json`
- Create: `docs/verification/home-applications-aligned-v1.0/GATE8_IMPLEMENTATION_RECEIPT.md`

- [ ] Confirm frozen nonvisual files are byte-identical to Gate 6 handoff identities: Home CMS JSON, metadata, JSON-LD, shared Global Chrome TSX/CSS, and production SVG assets.

- [ ] Capture seven implementation states from the locked candidate and record viewport, DPR, URL, timestamp, source commit, build ID, dimensions, bytes, and SHA-256 in the evidence Manifest.

- [ ] Run the complete affected regression set:

```powershell
npx vitest run tests/unit/homepage tests/integration/homepage tests/infrastructure/tio2-my-homepage-contract.test.ts
npm run typecheck
npx eslint components/sites/tio2-my/homepage tests/unit/homepage tests/e2e/malaysia-homepage-gate9.spec.ts tests/e2e/malaysia-homepage-visual-unification.spec.ts
npm run build
$env:TIO2_MY_BASE_URL='http://127.0.0.1:3100'
npx playwright test tests/e2e/malaysia-homepage-gate9.spec.ts tests/e2e/malaysia-homepage-visual-unification.spec.ts tests/e2e/tio2-my-global-navigation.spec.ts --project=chromium
```

Expected: every command exits `0`; production build completes; shared navigation regression stays green; no Home-owned file outside the approved change set is modified.

- [ ] Write implementation receipt with exact baseline and candidate commits, dirty/clean state, build identity, command outputs, deviations, untested layers, rollback reference, and acceptance-ID mapping. Do not claim Gate 9 approval.

- [ ] Commit evidence and receipt.

```powershell
git add -- docs/verification/home-applications-aligned-v1.0
git commit -m "test: record Home visual-unification Gate 8 evidence"
```

- [ ] Send the D23 Gate 9 reviewer the candidate commit and evidence Manifest. Do not merge, deploy, publish, or index.

### Task 9: Perform independent read-only Gate 9 acceptance in D23

**Files:**
- Create: `pages/home/07_qa/HOME-001_APPLICATIONS_ALIGNED_GATE9_READ_ONLY_ACCEPTANCE_V1.0.md`
- Create only as needed: `pages/home/07_qa/home-applications-aligned-v1.0/`
- Modify after decision: `pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md`
- Modify after decision: `00_PROJECT_STATUS.md`
- Modify after decision: `01_PROJECT_INDEX.md`

- [ ] Use the Gate 9 read-only Agent and runtime verification skill. Run Gate 8→9 preflight against exact candidate commit and evidence Manifest; do not repair D16 from the review task.

- [ ] Independently verify `HOME-VU-A01` through `HOME-VU-A12` using source inspection, actual browser behavior, computed styles, screenshot review, accessibility scan, and nonvisual file hashes. Distinguish reused Gate 4 evidence from fresh runtime evidence.

- [ ] Compare Home and `/applications` at 1440, 768, and 390 for intended shared visual properties, but do not require identical content, total height, or module count.

- [ ] Confirm current user experience:

```text
all widths: shared Header/Footer, no CURRENT text, Hero image visible, Start Here visible
768/1024/1440: page RFQ visible
320/390: page RFQ absent, product groups accessible and expandable
all widths: no horizontal overflow, clipped text, card collision, or serious/critical Axe issue
```

- [ ] If a defect exists, write stable Finding IDs with evidence, owner, exact acceptance condition, affected commit, and regression scope; return them to Gate 8. Keep Gate 9 `NOT_PASS` until replacement candidate is independently rechecked.

- [ ] If all acceptance IDs pass, record Gate 9 pass for the locked commit and update the page-level Manifest to make the new implementation current. Preserve `HOME-001_GATE9_CURRENT_IMPLEMENTATION_MANIFEST_V0.2.md` and its commit as rollback history.

- [ ] Update only Home's project status/index pointers. Keep Gate 10 `LOCKED / NOT_AUTHORIZED` and list genuine external release blockers separately from page implementation status.

- [ ] Commit only D23 QA and pointer updates.

```powershell
git add -- pages/home/07_qa/HOME-001_APPLICATIONS_ALIGNED_GATE9_READ_ONLY_ACCEPTANCE_V1.0.md pages/home/07_qa/home-applications-aligned-v1.0 pages/home/HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md 00_PROJECT_STATUS.md 01_PROJECT_INDEX.md
git commit -m "docs: record Home visual-unification Gate 9 result"
```

- [ ] **STOP:** report Gate 9 result, exact implementation commit, evidence identity, remaining release blockers, and rollback baseline. Do not start Gate 10 or release work.

## Final Verification Checklist

- [ ] D23 visual bundle and D16 implementation bundle each have unique, reproducible identities.
- [ ] Old Home Gate 9 V0.2 implementation was never overwritten or falsely described as the new design.
- [ ] One independent Gate 5 review covered the frozen Gate 4 bundle; no duplicate same-scope review was added.
- [ ] Gate 6 reused valid review evidence and produced one development entry.
- [ ] Gate 8 started only after explicit authorization and changed no frozen CMS/SEO/Schema/shared-Chrome files.
- [ ] Gate 9 was performed read-only by a reviewer independent from the developer.
- [ ] All five widths and two mobile states are covered.
- [ ] Header/Footer remain shared; Home did not create page-private Chrome.
- [ ] Content, module order, links, 14 Grades, PRODUCT V0.3 boundaries, SEO/GEO/Schema, and `site_scope=tio2-my` are unchanged.
- [ ] Gate 10, deployment, publication, DNS, and indexing remain unauthorized.
