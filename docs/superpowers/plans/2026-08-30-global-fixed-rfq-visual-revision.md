# Global Fixed RFQ Visual Revision Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将 Home 与 03–07 所有公开视觉稿的 Global Chrome RFQ 统一为永久显示，同时保持各页面正文像素、证据门禁和已批准视觉体系不变。

**Architecture:** `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` 是当前唯一 RFQ 可见性合同。Home 任务先输出不含 OFF 状态的共享 Header/Footer 状态板；03–07 原页面任务只重导各自 Header、Mobile Header、Mobile Menu 与 Footer；总控最后执行一次 26 项正式资产横向复审。页面正文、页面职责、关键词、关系矩阵和 route/freshness/localization 门禁彼此独立，不因 RFQ 固定显示而改变。

**Tech Stack:** Markdown 视觉规格、PNG 完整视觉稿、原图细节检查、像素区域哈希、390px 响应式测量、只读 PowerShell 验证。

**Spec:** `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`

## Global Constraints

- `GLOBAL_HEADER_FOOTER_SPEC_V0.2.md` 当前状态必须为 `APPROVED_GLOBAL_CHROME_BASELINE`。
- Desktop Header、Mobile Header、Mobile Menu 与 Footer 的 `Request a Quote` 必须永久显示。
- 正式 Buyer Clean 资产不得包含 RFQ OFF、hidden、disabled、empty slot 或 Contact fallback。
- `/request-a-quote/` 不可用时状态为 `RELEASE_BLOCKER`；视觉任务不得隐藏 RFQ 规避。
- 只允许修改 Header、Mobile Header、Mobile Menu、Footer 及其引起的画布总高度；受保护正文必须像素一致。
- Header 高度继续使用 Desktop 84px、Mobile 64px logical；390px 画布不得横向溢出；触控目标不得小于 44px。
- Logo、导航顺序、当前页状态、颜色、字体、Teal terminal CTA 与 Deep Navy Footer 继续消费已批准全站视觉体系。
- PRODUCT V0.2.1 的 25 条公开 Application 与 13 个明确 Process 保持；M-2377 继续冻结；M-996/M-2196 只保留基础关系，不表达差异、排名或选择理由。
- MARKET 22 routes、PT-BR、Trade freshness，RES inventory/ItemList/freshness，以及各页面事实门禁保持不变。
- 不启动二级页面、Gate 6/7、WordPress、Next.js、CMS、代码、测试、工作树、分支、部署或发布；不得操作 `D:\16Wordpress_nextjs`。
- 所有历史版本保留；新成果升级版本号，不覆盖或删除旧文件。

---

### Task 1: Synchronize the Approved V0.2 Governance Baseline

**Owner:** Project control

**Files:**
- Modify: `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_SPEC_V0.2.md`
- Create after all page reviews: `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_CROSS_PAGE_REVIEW_V0.2.md`

**Interfaces:**
- Consumes: 用户于 2026-08-30 对 RFQ 全站固定书面规范的明确批准。
- Produces: Tasks 2–7 唯一可消费的 `APPROVED_GLOBAL_CHROME_BASELINE` 和最终横向审查入口。

- [x] **Step 1: Upgrade the written specification to the approved baseline**

  Record `Current Status=APPROVED_GLOBAL_CHROME_BASELINE`, `GHF-D02=APPROVED / CLOSED`, the user approval date, and V0.1 as historical baseline.

- [x] **Step 2: Verify the approved specification**

  Confirm zero unfinished marker, zero conflict marker and zero trailing whitespace; confirm `RFQ_VISIBILITY = ALWAYS_VISIBLE`, `RFQ_ROUTE_READY`, `RELEASE_BLOCKER` and no Contact fallback are explicit.

- [x] **Step 3: Hold the cross-page report until Tasks 2–7 submit**

  Do not pre-approve any visual. Create V0.2 cross-page review only from the submitted current assets and their fresh hashes.

---

### Task 2: Rebuild the Shared Home Chrome Baseline Without RFQ OFF

**Owner:** Original Home task `01a04b91-38fc-7133-b9b0-76cb8f414d42`

**Files:**
- Create: `D:\23MySec\pages\home\04_planning\07_global_header_footer_component_states_v0.2.md`
- Create: `D:\23MySec\pages\home\04_planning\05_homepage_full_visual_design_v0.5.md`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\homepage-full-visual-pc-clean-v0.5.png`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\homepage-full-visual-mobile-clean-v0.5.png`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\homepage-mobile-menu-open-v0.5.png`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_DESKTOP_STATES_V0.2.png`
- Create: `D:\23MySec\pages\home\04_planning\visual-designs\global-chrome\GLOBAL_CHROME_MOBILE_STATES_V0.2.png`

**Interfaces:**
- Consumes: approved V0.2 spec and existing Home V0.4 body/brand geometry.
- Produces: the only shared RFQ-fixed component board consumed by Tasks 3–7.

- [x] **Step 1: Register `GHF-FIXED-RFQ-HOME-01`**

  Record scope as Global Chrome only, user-approved authority as V0.2, current status as `DRAFT_FOR_PROJECT_CONTROL_REVIEW`, and Home body as protected.

- [x] **Step 2: Replace the conditional state matrix**

  Show Desktop Header, Mobile Header, Mobile Menu, Desktop Footer and Mobile Footer with RFQ present. Remove every Buyer Clean RFQ OFF/hidden/disabled/empty-slot example. Internal QA may show only a written `RFQ_ROUTE_READY=false = RELEASE_BLOCKER` annotation, never a hidden-RFQ page.

- [x] **Step 3: Re-export Home V0.5**

  Keep the complete V0.4 Home body pixel-identical. Preserve Home current state, same Logo source and scale, 84px/64px Header geometry, ≥44px mobile targets and Deep Navy Footer.

- [x] **Step 4: Run Home validation**

  Compare the protected V0.4/V0.5 body rectangle for zero pixel differences; scan the five V0.5 formal assets for RFQ presence; inspect 390px safe area, Footer closing gap, current state, hover/focus and Logo visibility.

- [x] **Step 5: Submit without advancing the page lifecycle**

  Submit `GHF-FIXED-RFQ-HOME-01` to project control. Do not mark it PASS, APPROVED or CLOSED, and do not enter development.

---

### Task 3: Re-export the 03 Product-detail Template Chrome

**Owner:** Original product-template task `01a04c1c-41cc-7b20-ac45-646888191307`

**Files:**
- Create: `D:\23MySec\docs\product-pages\05_Product_Page_Global_Chrome_Addendum_V0.2.md`
- Create: `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_DESKTOP_V0.2.png`
- Create: `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_MOBILE_390_V0.2.png`
- Create: `D:\23MySec\pages\products\detail-template\04_planning\visual-designs\PRODUCT_DETAIL_TEMPLATE_MENU_STATES_V0.2.png`

**Interfaces:**
- Consumes: Task 2 V0.2 shared boards and the existing 14-grade detail-template contract.
- Produces: a fixed-RFQ template shell that does not alter any grade evidence or page body.

- [x] **Step 1: Register `GHF-FIXED-RFQ-DETAIL-01`**

  State that the addendum changes only Global Chrome and does not authorize any Grade page, content rewrite or development.

- [x] **Step 2: Re-export all three V0.2 assets**

  Display fixed RFQ in Desktop Header, Mobile Header, Mobile Menu and Footer; retain Products current state and the same shared Logo/Footer treatment.

- [x] **Step 3: Prove template body preservation**

  Compare the V0.1/V0.2 protected body rectangles for zero pixel differences and confirm no product fact, Application, Process or comparison copy changed.

- [x] **Step 4: Validate responsive and interaction states**

  Verify 390px no overflow, ≥44px targets, visible focus, complete Footer and zero RFQ OFF/Contact fallback in the current three-asset manifest.

- [x] **Step 5: Submit for project-control review**

  Keep `GHF-FIXED-RFQ-DETAIL-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`; do not change the template or child-page lifecycle.

---

### Task 4: Re-export PRODUCT-000 V0.9 With RFQ Fixed in Route-safe Views

**Owner:** PRODUCT-000 task `01a04d09-1b3d-7842-a886-44ccc43e7540`

**Files:**
- Create: `D:\23MySec\pages\products\04_planning\visual-designs\PRODUCT-000_FULL_VISUAL_DESIGN_V0.5.md`
- Create: `D:\23MySec\pages\products\04_planning\visual-designs\assets\PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.9.png`
- Create: `D:\23MySec\pages\products\04_planning\visual-designs\assets\PRODUCT-000_G5_DESKTOP_ROUTE_SAFE_REVERSE_V0.9.png`
- Create: `D:\23MySec\pages\products\04_planning\visual-designs\assets\PRODUCT-000_G5_MOBILE_FULL_ROUTE_REVERSE_V0.9.png`
- Create: `D:\23MySec\pages\products\04_planning\visual-designs\assets\PRODUCT-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.9.png`
- Create: `D:\23MySec\pages\products\04_planning\visual-designs\assets\PRODUCT-000_G5_GLOBAL_CHROME_STATES_V0.9.png`

**Interfaces:**
- Consumes: Task 2 V0.2 shared boards, current V0.8 Logo correction and PRODUCT V0.2.1 relationship baseline.
- Produces: five V0.9 current chrome assets; V0.8 remains historical.

- [x] **Step 1: Register `GHF-FIXED-RFQ-PRODUCT-01`**

  Record that the approved PRODUCT Gate 5 body remains approved and only the separate Global Chrome review is reopened.

- [x] **Step 2: Make RFQ visible in all four complete-page states**

  Full-route and route-safe Desktop/Mobile must all show Header, Mobile Header and Footer RFQ. Route-safe continues to close Process, Support and other protected body modules but may not close Global Chrome RFQ.

- [x] **Step 3: Rebuild the state board**

  Keep Products current state, common Logo scale, hover/focus and Mobile Menu proof. Remove the current RFQ OFF variant and replace it with fixed RFQ plus a non-public release-blocker annotation.

- [x] **Step 4: Prove body and relationship preservation**

  Recalculate the four protected body RAW hashes and require equality with V0.8. Confirm 25 verified Application mappings, 13 Process mappings, M-2377 freeze, M-996/M-2196 comparison freeze and 55 NO_PUBLIC_MAPPING behavior are unchanged.

- [x] **Step 5: Validate V0.9 and submit**

  Inspect five original-detail assets, 390px safe area, Footer closing gap, Logo dimensions and formal Manifest. Submit `GHF-FIXED-RFQ-PRODUCT-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`; do not enter Gate 6/7.

---

### Task 5: Re-export MARKET-000 V0.4 With RFQ Fixed From S0 Through S6

**Owner:** MARKET-000 task `01a04d2d-92c3-75b1-8f81-a8d1056a0677`

**Files:**
- Create: `D:\23MySec\pages\markets\04_planning\visual-designs\MARKET-000_FULL_VISUAL_DESIGN_V0.3.md`
- Create: `D:\23MySec\pages\markets\04_planning\visual-designs\assets\MARKET-000_G5_DESKTOP_S0_ROUTE_SAFE_BUYER_CLEAN_V0.4.png`
- Create: `D:\23MySec\pages\markets\04_planning\visual-designs\assets\MARKET-000_G5_DESKTOP_S6_FULL_EN_BUYER_CLEAN_V0.4.png`
- Create: `D:\23MySec\pages\markets\04_planning\visual-designs\assets\MARKET-000_G5_MOBILE_390_S0_ROUTE_SAFE_BUYER_CLEAN_V0.4.png`
- Create: `D:\23MySec\pages\markets\04_planning\visual-designs\assets\MARKET-000_G5_MOBILE_390_S6_FULL_EN_BUYER_CLEAN_V0.4.png`
- Create: `D:\23MySec\pages\markets\04_planning\visual-designs\assets\MARKET-000_G5_RESPONSIVE_COMPONENT_STATES_V0.3.png`

**Interfaces:**
- Consumes: Task 2 V0.2 shared boards and the current S0–S6 Markets body/state contract.
- Produces: five V0.4/V0.3 current assets with Global Chrome RFQ fixed and Markets body gates unchanged.

- [x] **Step 1: Register `GHF-FIXED-RFQ-MARKET-01`**

  Limit scope to Global Chrome and preserve Gate 4 baseline, Gate 5 body review status and all market evidence gates.

- [x] **Step 2: Add fixed RFQ to S0 and retain it in S6**

  Both S0 route-safe and S6 full EN complete pages must show Header/Mobile Header/Footer RFQ. S0 must still render zero unverified market actions, zero PT-BR and zero Trade action in the body.

- [x] **Step 3: Replace the responsive state proof**

  Remove S0 RFQ OFF proof. Show fixed RFQ with Markets current state, Mobile Menu, EU disclosure and preserved S1–S6 body-state boundaries.

- [x] **Step 4: Prove body and gate preservation**

  Require the four protected body RAW hashes to equal V0.3. Confirm 22 routes remain `NOT_VERIFIED_LIVE`, PT-BR remains `LOCALIZATION_HOLD / DO_NOT_RENDER`, Trade freshness remains closed and PRODUCT V0.2.1 row-level relationships remain absent from Buyer Clean.

- [x] **Step 5: Validate and submit**

  Inspect five formal assets at original detail, 390px typography/safe strip, Footer closing gap and zero RFQ OFF. Submit `GHF-FIXED-RFQ-MARKET-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`; do not enter Gate 6/7 or Market child pages.

---

### Task 6: Re-export RES-000 V0.3 With RFQ Fixed at Inventory Zero

**Owner:** RES-000 task `01a04d50-5c83-7d33-b155-4c5da3a9c8f8`

**Files:**
- Create: `D:\23MySec\pages\resources\04_planning\visual-designs\RES-000_FULL_VISUAL_DESIGN_V0.3.md`
- Create: `D:\23MySec\pages\resources\04_planning\visual-designs\assets\RES-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.3.png`
- Create: `D:\23MySec\pages\resources\04_planning\visual-designs\assets\RES-000_G5_MOBILE_390_ROUTE_SAFE_BUYER_CLEAN_V0.3.png`
- Create: `D:\23MySec\pages\resources\04_planning\visual-designs\assets\RES-000_G5_MOBILE_390_MENU_OPEN_V0.3.png`

**Interfaces:**
- Consumes: Task 2 V0.2 shared boards and current Resources route-safe body.
- Produces: three V0.3 current assets with fixed RFQ and unchanged inventory/freshness behavior.

- [x] **Step 1: Register `GHF-FIXED-RFQ-RES-01`**

  State that inventory=0 and ItemList=0 continue to control Resources body only.

- [x] **Step 2: Re-export all route-safe chrome with RFQ present**

  Desktop Header/Footer, Mobile Header/Menu/Footer must all show RFQ. Preserve Resources current state, Deep Navy Footer and no unapproved Contact link.

- [x] **Step 3: Prove Resources body preservation**

  Require Desktop and Mobile protected body pixels to equal V0.2. Confirm inventory=0, ItemList=0, route/freshness and Trade official-source boundaries remain unchanged.

- [x] **Step 4: Validate the three-asset package**

  Check ≥44px Menu targets, 390px no overflow, Logo visibility, RFQ fixed, Footer closure and zero internal page-anchor links added to Footer.

- [x] **Step 5: Submit for review**

  Submit `GHF-FIXED-RFQ-RES-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`; keep Gate 1–5 approval positions and all RES-R items unchanged.

---

### Task 7: Re-export APP-000 V0.5 With RFQ Fixed in Route-safe Views

**Owner:** APP-000 task `01a04d50-589b-7c61-8317-02f62b422788`

**Files:**
- Create: `D:\23MySec\pages\applications\04_planning\visual-designs\APP-000_FULL_VISUAL_DESIGN_V0.5.md`
- Create: `D:\23MySec\pages\applications\04_planning\visual-designs\assets\APP-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.5.png`
- Create: `D:\23MySec\pages\applications\04_planning\visual-designs\assets\APP-000_G5_DESKTOP_ROUTE_SAFE_BUYER_CLEAN_V0.5.png`
- Create: `D:\23MySec\pages\applications\04_planning\visual-designs\assets\APP-000_G5_MOBILE_FULL_ROUTE_BUYER_CLEAN_V0.5.png`
- Create: `D:\23MySec\pages\applications\04_planning\visual-designs\assets\APP-000_G5_MOBILE_ROUTE_SAFE_BUYER_CLEAN_V0.5.png`
- Create: `D:\23MySec\pages\applications\04_planning\visual-designs\assets\APP-000_G5_GLOBAL_CHROME_STATES_V0.5.png`

**Interfaces:**
- Consumes: Task 2 V0.2 shared boards, corrected V0.4 Logo composition and PRODUCT V0.2.1 relationship baseline.
- Produces: five V0.5 current assets with fixed RFQ and unchanged Application body mapping.

- [x] **Step 1: Register `GHF-FIXED-RFQ-APP-01`**

  Limit change to Global Chrome and preserve Applications page identity, keyword boundary, Gate states and relationship rules.

- [x] **Step 2: Re-export full-route and route-safe pages**

  All four complete pages must show Header/Mobile Header/Footer RFQ. Route-safe continues to hide only unverified body actions and relationships.

- [x] **Step 3: Rebuild the current state board**

  Keep Applications current state, same Logo source, visible focus and Mobile Menu; remove RFQ OFF and Contact fallback states.

- [x] **Step 4: Prove body and relationship preservation**

  Require all protected body rectangles to equal V0.4. Confirm exactly the approved 25 Application relationships remain available, M-2377 stays hidden, M-996/M-2196 comparison remains frozen and NO_PUBLIC_MAPPING is not rewritten as inapplicable.

- [x] **Step 5: Validate and submit**

  Inspect five original-detail assets, 390px safe area, Logo pixels, Footer closing gap and formal Manifest. Submit `GHF-FIXED-RFQ-APP-01=DRAFT_FOR_PROJECT_CONTROL_REVIEW`; do not start Application child pages or development.

---

### Task 8: Perform the Final Cross-page RFQ Review

**Owner:** Project control

**Files:**
- Create: `D:\23MySec\docs\architecture\GLOBAL_HEADER_FOOTER_CROSS_PAGE_REVIEW_V0.2.md`
- Modify only for approval records after review: the current V0.2/V0.5 page specifications submitted by Tasks 2–7

**Interfaces:**
- Consumes: Tasks 2–7 formal current manifests, original-detail PNGs, protected-body hashes and review submissions.
- Produces: one `GHF-FIXED-RFQ-CROSS-01` decision and one user approval point.

- [x] **Step 1: Build the current 26-asset manifest**

  Record exact path, dimensions, SHA-256, page identity, current nav item and RFQ surfaces for 5 Home + 3 detail template + 5 PRODUCT + 5 MARKET + 3 RES + 5 APP assets.

- [x] **Step 2: Verify global visual consistency**

  Compare Logo visible bounds, Desktop/Mobile Header geometry, navigation order, current-state signals, Teal terminal CTA, Deep Navy Footer, typography, focus and ≥44px targets across all page families.

- [x] **Step 3: Verify fixed RFQ coverage**

  Require RFQ in every applicable Header, Mobile Header, Mobile Menu and Footer. Scan current specifications and manifests for zero public RFQ OFF/hidden/disabled/empty-slot/Contact-fallback states.

- [x] **Step 4: Verify protected content and gates**

  Recheck body hashes and confirm no page identity, keyword, route, product relation, localization, inventory, freshness or evidence boundary changed.

- [x] **Step 5: Issue one project-control decision**

  Use `PASS`, `CONDITIONAL_RETURN` or `RETURN` under `GHF-FIXED-RFQ-CROSS-01`. Do not close page review items or impersonate user approval.

- [x] **Step 6: Present one unified visual approval point**

  If project-control PASS, show the shared Header/Footer boards and representative Desktop/Mobile complete-page assets to the user. After explicit user approval, close only the fixed-RFQ chrome review items and stop at the visual endpoint.
