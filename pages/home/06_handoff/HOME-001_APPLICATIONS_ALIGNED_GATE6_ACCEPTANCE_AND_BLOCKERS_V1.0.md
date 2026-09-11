# HOME-001 Applications-Aligned Gate 6 Acceptance and Blockers V1.0

## 0. Contract control

| Field | Value |
|---|---|
| Page / route | `HOME-001` / `/` |
| Site scope | `tio2-my` |
| Contract ID | `HOME-001-G6-APP-ALIGN-ACCEPTANCE-V1` |
| Handoff ID | `HOME-001-G6-APP-ALIGN-HANDOFF-V1` |
| Date | `2026-09-11` |
| Status | `READY_FOR_INDEPENDENT_GATE6_REVIEW / NOT_APPROVED` |
| Gate 8 authorization | User explicitly authorized Home Gate 8 and assigned existing task `01My开发1` / thread `01a07a66-3c4a-75a2-9df4-648942742f9e`; dispatch remains pending Gate 6 independent review and project-control close |
| Gate 8 implementation | `NOT_STARTED_BY_THIS_PACKAGE` |
| Gate 9 | `NOT_STARTED` |
| Gate 10 / merge / deploy / publish / DNS / index | `NOT_AUTHORIZED` |

These twelve stable IDs are the only acceptance namespace for this Applications-aligned Home revision. Gate 8 must bind each ID to the actual implementation commit and evidence HEAD. Gate 9 must assess the same IDs against the locked runtime candidate; it must not replace them with a new checklist.

The contract is presentation-only. It does not authorize copy, href, data, metadata, Schema, Global Chrome, production Logo, route ownership, form receiver, or shared-component changes.

## 1. Evidence classes

| Evidence class | What it can prove | What it cannot prove |
|---|---|---|
| Approved Gate 4 source and PNGs | Intended visual result, section relationships, exact planning viewports and states | Production DOM, runtime accessibility, route readiness, build identity |
| Gate 8 source/tests | Implementation and automated regression against one exact commit | Independent visual judgment or production release |
| Gate 8 runtime screenshots and browser data | Actual candidate appearance and behavior in the recorded environment | A different commit, build, device, browser, or production environment |
| Gate 9 independent read-only evidence | Acceptance of the locked candidate for the tested scope | Gate 10, merge, deployment, publication, DNS or indexing approval |

`STATIC_VISUAL`, `LOCAL_SIMULATION`, `REFERENCE_IMPLEMENTATION`, and self-reported PASS are not substitutes for production-candidate evidence.

## 2. Stable acceptance conditions

### HOME-VU-A01 — exact Home content, order and links

- **Source:** `HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.0.md`; `HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md` content and link clauses as inherited by the current Manifest; the exact `<main>...</main>` in the V1.1 frozen source; current Home CMS JSON identity recorded in the V1.1 freeze record.
- **Precondition/input:** Gate 8 records the actual repository, branch/worktree, baseline HEAD and hashes of the Home CMS JSON, visible-copy source and renderer before modification.
- **Expected visible/machine result:** one Home main region with module order `Hero → Start Here → Markets → Products → Applications → Company & Supply → Documents → Resources & Buyer Answers → page RFQ (768px and wider only)`; every visible string, destination href, Grade order and native-link meaning remains unchanged. No duplicate, hidden replacement copy, internal status label or new destination appears.
- **Required evidence:** before/after hashes for the frozen CMS JSON and non-renderer content sources; unit/DOM assertions for module order, one H1, exact href inventory and visible-copy parity; Gate 8 receipt mapping to the implementation commit; Gate 9 rendered DOM inspection.
- **Failure:** any copy rewrite, lost or duplicated module, reordered module, changed href, invented route, hidden SEO copy, changed Grade order, or buyer-visible governance text.
- **Owner/stage:** Gate 8 implements only Home renderer/CSS preservation; content or route changes return to the D23 owner. Gate 9 verifies.

### HOME-VU-A02 — Applications-aligned visual language and hierarchy

- **Source:** user-approved design `2026-09-11-home-applications-visual-unification-design.md`; Gate 4 V1.1 contract and formal visual evidence; visual standard and Primary CTA accessibility addendum.
- **Precondition/input:** current Home content is rendered without semantic changes; shared Chrome is outside the Home body style scope.
- **Expected visible/machine result:** Home body uses the Applications-family tokens (`#062b5b`, `#031b3a`, `#007f77`, `#00a99d`, `#334155`, `#64748b`, `#f5f8fb`, `#d9e2ec`, `#fff`), a centered maximum `1200px` shell, restrained `14px` outer surfaces and `12px` card language, fine borders, low-opacity shadows, consistent eyebrow/H2/intro hierarchy and white/soft section rhythm. Deep Navy in the body is limited to the rounded page RFQ. Functional teal on light surfaces uses the approved accessible pairing.
- **Required evidence:** CSS/source assertions, computed-style capture at representative modules, five full-page runtime screenshots, and Gate 9 comparison with the V1.1 evidence and `/applications` visual family.
- **Failure:** return to the old mixed full-bleed design, private near-match tokens, full-width dark Documents band, inconsistent card family, a second dark body band, inaccessible functional teal, or loss of Home entry-page hierarchy.
- **Owner/stage:** Gate 8 Home renderer/CSS; Gate 9 read-only visual and computed-style verification.

### HOME-VU-A03 — Hero media and geometry

- **Source:** Gate 4 V1.1 contract/source and five full-page PNGs; the approved Home powder asset identity in `freeze-record.json`.
- **Precondition/input:** the same approved decorative powder asset is available within `site_scope=tio2-my`; it is not reinterpreted as company, factory, origin, manufacturing, capacity, inventory or certification evidence.
- **Expected visible/machine result:** the Hero keeps exact copy and two actions, uses the Applications-family rounded bordered surface, and shows the existing powder image in a bounded rounded media card at 1440, 1024, 768, 390 and 320. Desktop/Tablet use the approved side-by-side relationship; Mobile stacks copy, actions and media without an empty placeholder gap. The image remains decorative with empty alt semantics.
- **Required evidence:** five exact-width screenshots; DOM/Image source and `alt` assertions; bounding-box and visibility records; no-layout-shift/overflow observation in the captured candidate.
- **Failure:** image missing at any required width, changed asset, capability-implying alt, crop or overlap that obscures the intended material composition, unbounded half-screen media, or Mobile blank gap.
- **Owner/stage:** Gate 8 Home renderer/CSS and scoped media resolution; Gate 9 runtime verification.

### HOME-VU-A04 — Start Here at all five widths

- **Source:** the user's 2026-09-11 Tablet decision, approved design §7, V1.1 evidence, and current Manifest closeout.
- **Precondition/input:** viewport width is 1440, 1024, 768, 390 or 320 CSS pixels.
- **Expected visible/machine result:** `Start Here` appears immediately after Hero with exactly three ordered entry cards—Markets, Products, Documents—using their existing descriptions and hrefs. It is three columns on Desktop/Tablet and one column on Mobile.
- **Required evidence:** five full-page screenshots, DOM-order assertion and computed grid/visibility data.
- **Failure:** module omitted at Tablet or any required width, hidden by CSS, moved away from directly below Hero, reordered entries, changed href, or introduced horizontal scroll.
- **Owner/stage:** Gate 8 Home renderer/CSS; Gate 9 verifies.

### HOME-VU-A05 — Product groups, fourteen Grades and expanded state

- **Source:** Gate 4 V1.1 source/evidence; current Home content contract; PRODUCT V0.3 relationship boundary as already consumed by Home.
- **Precondition/input:** the same Home product data is available; no new relationship, recommendation or comparison is inferred.
- **Expected visible/machine result:** four groups remain ordered with counts `6 / 5 / 2 / 1` and exactly these fourteen unique Grade IDs in order: `M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377, CR-901`. Layout is four columns at 1440, `2×2` at 1024/768, and accessible native disclosure behavior at 390/320. The 390 expanded evidence exposes every Grade. M-996/M-2196 receive no comparison; M-2377 and CR-901 gain no new Home relationship.
- **Required evidence:** exact data/DOM list assertion, duplicate/count tests, desktop/tablet grid records, keyboard open/close test, `aria-expanded`/focus evidence, and the required 390 Products-expanded screenshot.
- **Failure:** missing/duplicate/reordered Grade, count drift, hidden Grade after expansion, inaccessible disclosure, a third process page inferred from CR-901, or recommendation/ranking/equivalence/suitability language.
- **Owner/stage:** Gate 8 renderer/CSS; data/relationship changes return to D23. Gate 9 verifies.

### HOME-VU-A06 — page RFQ responsive rule

- **Source:** approved Home responsive contract and Gate 4 V1.1 five-width evidence.
- **Precondition/input:** Home renders at the five acceptance widths; shared Global Chrome remains separately present.
- **Expected visible/machine result:** the rounded page-level RFQ section is visible at 1440, 1024 and 768, with its exact six labels and action; it is absent from layout and accessibility tree at 390 and 320. This rule does not hide or replace Hero, Header, Mobile Menu or Footer RFQ.
- **Required evidence:** DOM and accessibility-tree visibility assertions at five widths, five full-page screenshots, and exact label/href checks.
- **Failure:** page RFQ missing at 768+, present/focusable at 390/320, converted into a form, changed labels, full-width edge-to-edge dark band, or any fixed Global Chrome RFQ regression.
- **Owner/stage:** Gate 8 Home renderer/CSS; Gate 9 verifies.

### HOME-VU-A07 — shared Header, Footer, Menu, legal utilities and production SVG

- **Source:** `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`, Footer legal utility addendum, Production SVG Logo Manifest V1.0 and Gate 4 V1.1 shared-Chrome evidence.
- **Precondition/input:** Gate 8 identifies the actual shared Malaysia Global Chrome implementation and its baseline hash before editing Home.
- **Expected visible/machine result:** Home consumes the existing shared `MalaysiaGlobalHeader` and `MalaysiaGlobalFooter`; no Home-private Header/Footer/Menu is created. Desktop Header is 84px; Mobile Header is 64px in `Logo | RFQ | Menu` order. Navigation order and fixed RFQ surfaces remain exact. Home current state is underline/left marker plus `aria-current="page"` within the active surface, with zero buyer-visible `CURRENT`. Mobile Menu uses Deep Navy, eight-item order and terminal RFQ. Footer includes the three legal links and semantic route-less Cookie Settings in approved order. Production asset keys resolve to the approved SVGs without copied or edited SVG files.
- **Required evidence:** source import/assembly inspection, shared-component file hashes before/after, five screenshots plus open-menu screenshot, active/inactive navigation accessibility-tree assertions, target-size checks, legal control tag/route/order checks and SVG path/hash evidence.
- **Failure:** page-private Chrome, modification of shared Chrome, wrong height/order, hidden fixed RFQ, visible `CURRENT`, duplicate accessible navigation, white private mobile menu, missing/stale legal control, Terms link, PNG/substitute Logo, copied or altered SVG.
- **Owner/stage:** Home Gate 8 consumes; Global Chrome owner handles any genuine shared change under separate authorization. Gate 9 verifies consumption and regression.

### HOME-VU-A08 — five-width responsive integrity

- **Source:** Gate 4 V1.1 1440/1024/768/390/320 evidence and approved responsive matrices.
- **Precondition/input:** exact CSS viewport widths, browser zoom 100%, recorded DPR and loaded approved font/media.
- **Expected visible/machine result:** no horizontal overflow, clipped text, overlap, card collision, off-canvas content, focus leak or abnormal whitespace at all five widths. Markets are `2×2` at 1440/1024/768 and one column on Mobile; Applications are `3+2`, `2+2+1`, and one column respectively; Resources/Buyer Answers are balanced `2+3`, two columns, and one column respectively; Company and Documents preserve the approved light surfaces.
- **Required evidence:** five full-page screenshots, document/client width readings, representative bounding-box intersection checks, computed grid columns and scrollWidth assertions.
- **Failure:** any overflow/crop/collision, missing section, wrong responsive composition, blank placeholder, illegible forced shrink, or layout only matching by deleting approved content.
- **Owner/stage:** Gate 8 Home CSS; Gate 9 runtime verification.

### HOME-VU-A09 — keyboard, focus, Menu, disclosure and accessibility

- **Source:** Global Chrome V0.5, visual standard, CTA accessibility addendum, approved Gate 4 behavior boundary and project accessibility requirements.
- **Precondition/input:** candidate runtime is available with JavaScript enabled; both Desktop and Mobile surfaces are tested at applicable widths.
- **Expected visible/machine result:** keyboard order follows visual/DOM order; focus indicators are visible and sufficiently contrasted; Mobile Menu opens/closes by keyboard, isolates background, locks scroll as currently approved, traps or contains focus and returns focus on close; inactive navigation is excluded from accessibility tree and focus; Product disclosures expose correct state and keyboard behavior; all Mobile actionable targets are at least `44×44px`; no serious or critical Axe violations.
- **Required evidence:** Playwright keyboard traces/assertions, active accessibility-tree/role queries, computed target boxes, Axe result and Mobile Menu plus Products-expanded screenshots.
- **Failure:** keyboard trap/loss, invisible focus, duplicate exposed navigation, background focus leak, stale `aria-expanded`, disclosure inaccessible, target below 44px, or serious/critical Axe violation.
- **Owner/stage:** Gate 8 implementation/tests; Gate 9 independently verifies. Assistive-technology behavior not exercised must remain explicitly `NOT_VERIFIED`, never silently PASS.

### HOME-VU-A10 — metadata, Canonical, Schema and visible meaning remain unchanged

- **Source:** `HOME-001_SEO_GEO_SCHEMA_CONTRACT_V0.1.md`; current Home Manifest; frozen Home metadata/JSON-LD source identities recorded in the Gate 4 freeze record.
- **Precondition/input:** Gate 8 records before/after hashes for Home metadata and JSON-LD implementation files and inspects the rendered document head/graph.
- **Expected visible/machine result:** exact approved Title, Meta Description, H1, `lang="en"`, `index, follow`, one normalized self-canonical for `https://tio2malaysia.com/`, and the approved five-node/five-relation JSON-LD graph remain unchanged. The visible manufacturer sentence remains present. No forbidden or stronger machine fact is added; no CMS field or public behavior changes.
- **Required evidence:** before/after hashes, rendered head extraction, canonical parser output, JSON parse/entity/relation/prohibited-field tests, and visible sentence assertion.
- **Failure:** any metadata/Schema source modification, canonical drift/duplication, different H1, added inferred relation/type/Offer/ItemList/FAQPage/countryOfOrigin, machine-visible fact stronger than Buyer Clean, or missing visible support.
- **Owner/stage:** Gate 8 must preserve and test; SEO/GEO changes return to D23. Gate 9 verifies.

### HOME-VU-A11 — `site_scope=tio2-my` isolation

- **Source:** root governance §14, current Home handoff isolation clauses and Gate 8→9 evidence contract.
- **Precondition/input:** Gate 8 inspects actual query, route, cache, menu, metadata, Schema and media bindings for Home before changing the visual renderer.
- **Expected visible/machine result:** Home and all consumed content/media/Chrome resolve only under `site_scope=tio2-my`; cache and lookup identity include scope where applicable; missing Malaysia data fails closed and never falls back to TIOVAR, a frozen site or another scope. The visual update adds no cross-scope import, route, media, content or SEO fallback.
- **Required evidence:** source/config inspection, positive `tio2-my` fixture, wrong/missing-scope negative fixtures, cache/query key assertions where present, and rendered source/asset URL review.
- **Failure:** omitted scope, another site's content/Logo/media/route/metadata/Schema appearing as fallback, cross-scope cache collision, or unscoped new visual data source.
- **Owner/stage:** Gate 8 implementation/infrastructure; Gate 9 verifies. A broader shared isolation defect is returned to its actual owner and remains a release blocker without authorizing this Home task to repair it.

### HOME-VU-A12 — Gate 8 evidence Manifest, implementation identity and rollback

- **Source:** `GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md`, its JSON Schema, this package, and rollback Manifest V0.2.
- **Precondition/input:** implementation is complete on a recorded D16 repository/worktree/branch with a specific baseline commit, implementation commit, evidence HEAD and build ID.
- **Expected visible/machine result:** a schema-valid `gate8_evidence_manifest.json` binds `HOME-001-G6-APP-ALIGN-HANDOFF-V1`, task `01a07a66-3c4a-75a2-9df4-648942742f9e`, `site_scope=tio2-my`, `/`, all A01–A12 IDs, exact implementation/evidence/build/runtime identities, hashes and generation commands. The committed receipt uses one `EVIDENCE: <repo-relative-path>` line per referenced evidence and the set exactly matches the Manifest. Seven runtime images cover 1440, 1024, 768, 390, 320, 390 Menu-open and 390 Products-expanded. Runtime remains available under `GATE9_PASS_OR_RETURN_NOTICE`. The former Gate 9 V0.2 implementation commit and files remain an executable rollback reference until Gate 9 accepts the new candidate.
- **Required evidence:** schema validator PASS, two-round Gate 9 preflight-ready identity, clean/dirty timestamps, Git object checks, build marker, runtime path checks, evidence hashes, committed receipt and explicit rollback instructions.
- **Failure:** missing/invalid Manifest, self-reported paths not committed, receipt/Manifest set mismatch, evidence from another commit/build/runtime, missing acceptance ID/image, dirty state unreported, runtime released early, or rollback overwritten/unrecoverable.
- **Owner/stage:** Gate 8 produces and holds runtime; Gate 9 validates and sends pass/return/release notice. Project control, not Gate 8, changes the D23 current Manifest after acceptance.

## 3. Implementation and release dependencies

| Dependency | Current state | Owner | Required behavior | Failure effect / closing evidence |
|---|---|---|---|---|
| `HOME-VU-DEP-01` actual D16 baseline identity | `UNVERIFIED_BY_GATE6_BY_DESIGN` | Gate 8 assignee | Before edits, report repository root, worktree, branch, HEAD, upstream state and dirty files; do not assume a prior Market branch/worktree or the historical rollback worktree is current | Identity mismatch or unowned dirty overlap stops affected edits and is returned to project control; preflight record closes this dependency for implementation |
| `HOME-VU-DEP-02` frozen nonvisual files | `GATE8_PRESERVATION_REQUIRED` | Gate 8 assignee | Hash CMS JSON, metadata, JSON-LD, shared Chrome and production SVG files before/after; no content change is authorized | Any change blocks Gate 8 return until reverted or separately approved; before/after evidence closes it |
| `HOME-VU-DEP-03` exact route availability | `EXTERNAL_INTEGRATION / NO_ROUTE_CHANGE_AUTHORIZED` | Each route owner; Gate 9 observes | Preserve existing hrefs. Broken targets must be reported to their page owner; Home may not invent substitutes or cross-scope fallbacks | A broken required action blocks integration/release, not Gate 6 package approval; runtime route evidence records status |
| `HOME-VU-DEP-04` independent Gate 9 | `NOT_STARTED` | Independent Gate 9 reviewer | Run machine preflight then independent source/runtime/visual/a11y review of A01–A12 | New candidate cannot replace rollback baseline until one locked candidate passes Gate 9 |
| `HOME-VU-DEP-05` release authorization | `LOCKED / NOT_AUTHORIZED` | User / release owner | Separate approval after Gate 9; do not merge, deploy, publish, change DNS or index from this handoff | Remains a release blocker until explicit Gate 10 authorization and release evidence |

## 4. Stage boundary

This file is ready for a different-identity Gate 6 reviewer. It does not independently approve itself, close Gate 6, record `APPROVED_FOR_HANDOFF`, send the package, begin Gate 8, validate a D16 candidate, approve Gate 9, or authorize release.
