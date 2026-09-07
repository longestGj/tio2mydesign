# Global Header / Footer Visual Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the inconsistent Header, Mobile Menu and Footer in Home, the product-detail template, PRODUCT-000, MARKET-000, RES-000 and APP-000 with one approved global visual contract without changing page-body design, SEO/GEO ownership or evidence gates.

**Architecture:** `GLOBAL_HEADER_FOOTER_SPEC_V0.1.md` is the single cross-page contract. The Home task owns the shared visual state board; each original page task re-exports only its own complete-page visuals with the shared chrome; project control performs one cross-page review and presents one final user approval point. No page task edits another page family, and no task modifies the WordPress/Next.js project.

**Tech Stack:** Markdown specifications, PNG visual assets, existing page-specific visual-generation workflow, read-only PowerShell validation, Inter typography, Navy/Teal/White brand system.

**Spec:** `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.1.md`

## Global Constraints

- Work only in `D:\23MySec`; never modify `D:\16Wordpress_nextjs`.
- Do not create WordPress, Next.js, CMS, test, branch, worktree, deployment, publishing, DNS or indexing deliverables.
- Preserve all existing page-body content, geometry, SEO/GEO, Schema, route states and evidence gates.
- Use `site_scope=tio2-my`; never read another site scope as a fallback.
- Use one `brand_logo_primary_horizontal` visual asset reference across every page.
- Desktop navigation is exactly `Home | Markets | Products | Applications | Documents | Resources | About | Request a Quote`.
- Mobile Header order is exactly `Logo | RFQ | Menu`.
- All pages use the same Deep Navy Global Footer; unregistered Privacy, Terms and Legal links do not render.
- RFQ ON/OFF synchronizes Header, Mobile Menu and Footer without empty slots.
- Existing Gate 1–4 approvals are not reopened.
- PRODUCT-000 page-body Gate 5 approval remains valid; global chrome remains a separate handoff blocker until approved.

---

### Task 1: Synchronize the Approved Global Governance Baseline

**Files:**

- Modify: `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.1.md`
- Modify: `D:\23MySec\01_PROJECT_INDEX.md`
- Modify: `D:\23MySec\00_PROJECT_STATUS.md`

**Interfaces:**

- Consumes: user approval dated `2026-08-30`.
- Produces: `APPROVED_GLOBAL_CHROME_BASELINE`, the authoritative path consumed by every page task.

- [ ] **Step 1: Confirm the specification approval record**

  Verify the specification contains `APPROVED_GLOBAL_CHROME_BASELINE`, approval date `2026-08-30`, and closed decision `GHF-D01`.

- [ ] **Step 2: Add the specification to the project index**

  Add one entry under 页面治理 or 视觉资产 identifying `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.1.md` as the sole cross-page Header/Footer contract.

- [ ] **Step 3: Register the cross-page revision in project status**

  Record the revision as `GLOBAL_CHROME_VISUAL_REVISION_IN_PROGRESS`; state that Home and 03–07 body designs remain unchanged and that development is out of scope.

- [ ] **Step 4: Validate governance consistency**

  Run a read-only scan confirming the three files use the same specification path and status, contain no conflict markers, and do not authorize development.

---

### Task 2: Produce the Shared Component State Board and Home Chrome Revision

**Owner:** Original Home task `01a04b91-38fc-7133-b9b0-76cb8f414d42`

**Files:**

- Create: `D:\23MySec\pages\home\04_planning\06_global_header_footer_component_states_v0.1.md`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_DESKTOP_STATES_V0.1.png`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_MOBILE_STATES_V0.1.png`
- Create: `D:\23MySec\pages\home\04_planning\04_homepage_full_visual_design_v0.4.md`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\homepage-full-visual-pc-clean-v0.4.png`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\homepage-full-visual-mobile-clean-v0.4.png`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\homepage-mobile-menu-open-v0.4.png`
- Preserve: every V0.3 Home file and image.

**Interfaces:**

- Consumes: `APPROVED_GLOBAL_CHROME_BASELINE`.
- Produces: the only shared component visual reference used by Tasks 3–7.

- [ ] **Step 1: Build the Desktop shared state board**

  Show Header RFQ ON/OFF, Home and a non-Home current state, Footer RFQ ON/OFF, Inter type sizes, logo asset label, focus state and route-safe zero-height closure.

- [ ] **Step 2: Build the 390px shared state board**

  Show `Logo | RFQ | Menu`, RFQ OFF with Menu at the far right, Menu Open RFQ ON/OFF, active-item left marker plus `CURRENT`, Footer ON/OFF, 44px targets and no horizontal overflow.

- [ ] **Step 3: Re-export Home Desktop V0.4**

  Preserve all V0.3 page-body modules and copy. Replace only Header and Footer; set Home current; use Teal Header CTA; remove Company, Privacy and Terms; keep Contact conditional.

- [ ] **Step 4: Re-export Home Mobile V0.4 and Menu Open**

  Preserve the approved mobile body and whitespace fix. Use the shared Mobile Header, Menu Open state and Deep Navy Footer.

- [ ] **Step 5: Validate body preservation**

  Compare V0.3 and V0.4 excluding the Header/Footer regions. Report every changed page-body pixel region; expected result is zero unauthorized body changes.

- [ ] **Step 6: Submit one Home/shared-chrome review package**

  Report exact image dimensions, asset manifest, RFQ state coverage, logo reference, forbidden Footer labels scan and mobile overflow result. Keep the revision in review until project control approves it.

---

### Task 3: Replace Chrome in the 03 Product-detail Template

**Owner:** Original product-template task `01a04c1c-41cc-7b20-ac45-646888191307`

**Files:**

- Create: `D:\23MySec\docs\product-pages\04_Product_Page_Global_Chrome_Addendum_V0.1.md`
- Create: `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_DESKTOP_V0.1.png`
- Create: `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_MOBILE_390_V0.1.png`
- Create: `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_MENU_STATES_V0.1.png`
- Preserve: all existing `docs/product-pages/*V1.0.md` files and the read-only prototype evidence under `D:\16Wordpress_nextjs`.

**Interfaces:**

- Consumes: shared component state board from Task 2 and the existing 14-grade template contract.
- Produces: the visual baseline inherited by future Grade pages; Products is the current top-level item.

- [ ] **Step 1: Write the product-template chrome addendum**

  State that the existing module order remains unchanged; the page ends after Sample and Global Footer; Header and Footer inherit the global contract; product pages do not embed a Final RFQ or RFQ form.

- [ ] **Step 2: Create a Desktop complete-page visual in `D:\23MySec`**

  Use the existing M-350 template body only as planning input. Remove the prototype status bar, `PRODUCT TEMPLATE` logo, Process navigation item, internal disclaimer Footer and any wrong navigation order.

- [ ] **Step 3: Create a 390px complete-page visual**

  Include the shared Mobile Header and Menu; demonstrate RFQ ON, Products current, Breadcrumb and Deep Navy Footer after Sample.

- [ ] **Step 4: Create RFQ OFF/Menu state proof**

  Show the same shared component with RFQ absent and no empty action slot.

- [ ] **Step 5: Validate the hard boundary**

  Confirm no file in `D:\16Wordpress_nextjs` changed, no page-body product fact changed, and no M-2377 or M-996/M-2196 relation was added.

- [ ] **Step 6: Submit the 03 targeted review package**

  Report manifest, dimensions, fixed navigation order, Products current state, Footer link list and read-only prototype exclusion statement.

---

### Task 4: Replace Chrome in PRODUCT-000 Without Reopening Its Body Approval

**Owner:** PRODUCT-000 task `01a04d09-1b3d-7842-a886-44ccc43e7540`

**Files:**

- Create: `D:\23MySec\pages\products\04_planning\visual-designs\PRODUCT-000_FULL_VISUAL_DESIGN_V0.3.md`
- Create: four V0.7 complete-page PNGs for Desktop Full, Desktop Route-safe, Mobile Full and Mobile Route-safe under the existing `assets` directory.
- Create: `PRODUCT-000_G5_GLOBAL_CHROME_STATES_V0.7.png` under the existing `assets` directory.
- Preserve: `PRODUCT-000_FULL_VISUAL_DESIGN_V0.2.md`, all nine approved Gate 5 baseline assets, and all relationship/freeze evidence.

**Interfaces:**

- Consumes: Task 2 shared state board and PRODUCT V0.2.1 relation baseline.
- Produces: approved PRODUCT-000 body inside the new global chrome.

- [ ] **Step 1: Register cross-page review item `GHC-PRODUCT-01`**

  Mark only the shared chrome as pending review; keep the previously approved page body and Gate 5 evidence baseline intact.

- [ ] **Step 2: Re-export four complete pages**

  Replace only Header, Mobile Menu and Footer. Keep Selector, 25 Application relations, 13 Process classifications, All Grades, Buyer Questions and every conditional module unchanged.

- [ ] **Step 3: Prove Full and Route-safe behavior**

  Full pages use RFQ ON; Route-safe pages use RFQ OFF; Header/Menu/Footer synchronize and close without blank slots.

- [ ] **Step 4: Validate protected relationships**

  Confirm M-2377 remains hidden from Application/Process relationships; M-996/M-2196 remain equal base Coatings/Sulfate relations without comparison.

- [ ] **Step 5: Validate body preservation and submit**

  Compare approved old and new complete pages outside chrome. Submit `GHC-PRODUCT-01` for project-control review without changing Gate 6/7 or handoff status.

---

### Task 5: Replace Chrome in MARKET-000

**Owner:** MARKET-000 task `01a04d2d-92c3-75b1-8f81-a8d1056a0677`

**Files:**

- Create: `D:\23MySec\pages\markets\04_planning\visual-designs\MARKET-000_FULL_VISUAL_DESIGN_V0.2.md`
- Create: four V0.3 complete-page PNGs for Desktop S0, Desktop S6, Mobile S0 and Mobile S6.
- Update or replace the responsive component state board with a V0.2 board using the shared chrome.
- Preserve: all V0.1/V0.2 current assets and superseded history.

**Interfaces:**

- Consumes: Task 2 shared state board and existing S0–S6 state contract.
- Produces: MARKET-000 current-state pages with consistent global chrome.

- [ ] **Step 1: Register `GHC-MARKET-01`**

  Keep Markets body, EU disclosure, Trade, PT-BR and 22-route gates unchanged.

- [ ] **Step 2: Re-export S0 RFQ OFF pages**

  Use Markets current, unified Header/Footer and zero RFQ slots.

- [ ] **Step 3: Re-export S6 RFQ ON pages**

  Use the same Footer structure with the conditional CTA added; do not change destination, Buyer Questions or market actions.

- [ ] **Step 4: Update Mobile Menu proof**

  Use `Logo | RFQ | Menu`, Markets current and RFQ ON/OFF states.

- [ ] **Step 5: Validate body preservation and submit**

  Confirm zero PT-BR content in current Buyer Clean, zero Product relations and no change to Trade freshness. Submit only the chrome delta for review.

---

### Task 6: Replace Chrome in RES-000

**Owner:** RES-000 task `01a04d50-5c83-7d33-b155-4c5da3a9c8f8`

**Files:**

- Create: `D:\23MySec\pages\resources\04_planning\visual-designs\RES-000_FULL_VISUAL_DESIGN_V0.2.md`
- Create: `RES-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.2.png`.
- Create: `RES-000_G5_MOBILE_390_ROUTE_SAFE_BUYER_CLEAN_V0.2.png`.
- Create: `RES-000_G5_MOBILE_390_MENU_OPEN_V0.2.png`.
- Preserve: V0.1 assets, internal state board and planning-only preview history.

**Interfaces:**

- Consumes: Task 2 shared state board and current route-safe Resources body.
- Produces: RES-000 RFQ OFF visual with the common Footer.

- [ ] **Step 1: Register `GHC-RES-01`**

  Keep inventory=0, ItemList=0, Trade freshness and all Resource cards unchanged.

- [ ] **Step 2: Replace Desktop Header/Footer**

  Use Resources current and RFQ OFF. Remove page-local `Research paths` and `Buyer questions` links from the Global Footer.

- [ ] **Step 3: Replace Mobile Header/Menu/Footer**

  Use the single logo, Menu at far right, no RFQ slot and the shared Deep Navy Footer.

- [ ] **Step 4: Validate route-safe closure**

  Confirm no Request a Quote label, no Footer conversion blank area, no unregistered route and no horizontal overflow.

- [ ] **Step 5: Submit only the chrome delta**

  Preserve all existing Gate 1–5 project-control conclusions pending user approval; do not promote a Gate status.

---

### Task 7: Replace Chrome in APP-000

**Owner:** APP-000 task `01a04d50-589b-7c61-8317-02f62b422788`

**Files:**

- Create: `D:\23MySec\pages\applications\04_planning\visual-designs\APP-000_FULL_VISUAL_DESIGN_V0.4.md`
- Create: four V0.4 complete-page PNGs for Desktop Full, Desktop Route-safe, Mobile Full and Mobile Route-safe.
- Create: `APP-000_G5_GLOBAL_CHROME_STATES_V0.4.png`.
- Preserve: all V0.3 assets and superseded history.

**Interfaces:**

- Consumes: Task 2 shared state board and PRODUCT V0.2.1 relationship baseline.
- Produces: APP-000 Buyer Clean visuals with Applications current and common Footer.

- [ ] **Step 1: Register `GHC-APP-01`**

  Keep all approved page-body type sizes, Application cards, Process section, Support, Buyer Questions and RFQ qualification unchanged.

- [ ] **Step 2: Re-export four complete pages**

  Use `RFQ` in Mobile Header, not `Request Quote`; use Applications current; use the common Footer.

- [ ] **Step 3: Prove RFQ ON/OFF synchronization**

  Full pages display Header/Menu/Footer RFQ; Route-safe pages remove all three without empty slots.

- [ ] **Step 4: Validate relation and typography boundaries**

  Confirm 25 verified Application relationships, 13 explicit Process classifications, M-2377 hidden, M-996/M-2196 comparison frozen, Inter font and approved body sizes.

- [ ] **Step 5: Submit only the chrome delta**

  Keep Gate 5 pending user approval; do not enter Gate 6/7 or child pages.

---

### Task 8: Project-control Cross-page Review and Final User Approval

**Files:**

- Create: `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_CROSS_PAGE_REVIEW_V0.1.md`
- Modify after approval: `D:\23MySec\00_PROJECT_STATUS.md`
- Modify after approval: `D:\23MySec\01_PROJECT_INDEX.md`

**Interfaces:**

- Consumes: Tasks 2–7 review packages.
- Produces: one PASS / CONDITIONAL RETURN / RETURN decision for global chrome and one user approval point.

- [ ] **Step 1: Verify asset manifests and dimensions**

  Confirm every declared PNG exists, is non-empty, has the declared dimensions and is stored under `D:\23MySec`.

- [ ] **Step 2: Verify exact Header contracts**

  Check one logo asset reference, Desktop navigation order, current-page mapping, Teal CTA, Mobile order, labels, 44px targets and RFQ ON/OFF closure.

- [ ] **Step 3: Verify exact Footer contracts**

  Check Deep Navy structure, approved links only, Contact gate, optional RFQ, copyright, minimum 14px text and absence of Privacy、Terms、Legal、Company独立页、内部声明及页面内锚点。

- [ ] **Step 4: Verify page-body preservation**

  Review before/after comparison records for Home and 03–07. Any unauthorized body change returns only the affected page task; other page reviews continue.

- [ ] **Step 5: Verify SEO/GEO and evidence boundaries**

  Confirm no Page ID、URL、keyword、Schema、canonical、product relation、market fact、freshness or localization change.

- [ ] **Step 6: Inspect Desktop and 390px visuals at original detail**

  Check no crop, overlap, horizontal overflow, unreadable navigation, broken active state, empty RFQ slot or button-after blank band.

- [ ] **Step 7: Publish the cross-page review decision**

  Record exact Review IDs and actionable findings. Project-control PASS remains pending user approval; do not impersonate user approval.

- [ ] **Step 8: Close the revision after user approval**

  Mark the global chrome `VISUAL_APPROVED`, update project status and index, stop all six page tasks at the visual endpoint, and do not start development.
