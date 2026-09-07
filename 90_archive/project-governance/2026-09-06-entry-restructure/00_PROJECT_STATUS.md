# TiO2 Malaysia 项目状态

## 文档信息

| 项目 | 内容 |
|---|---|
| 状态日期 | 2026-09-06 |
| 状态版本 | V0.157 |
| 维护角色 | 项目总控与质量审查 |
| 稳定规则 | `AGENTS.md` |
| 页面基线 | `docs/architecture/PAGE_REGISTRY_V0.2.md`（57页） |
| 状态性质 | 动态快照；不替代 PRD、关键词主表或页面任务卡 |

## 1. 当前确认基线

- 前台品牌：TiO2 Malaysia。
- 规划域名：`https://tio2malaysia.com`。
- 运营主体：IKHLAS TITANIUM (MALAYSIA) SDN. BHD.。
- 技术架构：开发项目使用共享 WordPress 与 Next.js，Malaysia 新站使用独立 `site_scope=tio2-my`。
- 本项目范围：视觉稿、SEO、GEO、内容与页面架构、开发交付规格，以及开发完成后的只读质量验收。
- 开发范围：WordPress、Next.js、CMS、代码、测试、部署和发布全部由 `D:\16Wordpress_nextjs` 开发项目负责。
- 本项目不编写或修改任何开发代码；只读验收发现问题后提交给开发项目修正。
- 策划资料：`D:\23MySec`。
- 开发代码：`D:\16Wordpress_nextjs`。
- 当前 PRD：`docs/prd/TiO2_Malaysia_Website_PRD_V0.4.md`。
- 页面—关键词实施主表：`research/keyword/11_page_keyword_master.csv`。
- 全站页面记录：`PAGE_REGISTRY_V0.2.md` 已合并为有效批准的57页架构；保留 Privacy EN、Privacy BM、Cookie Policy 3页，独立 Terms 页面为0，Cookie Settings 为非页面共享控制。
- 产品详情页：14 个型号，各自一个权威 URL。
- 当前产品关系基线：`PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`，用户于 2026-08-30 批准；30 条公开 Application、0 条 conflict、54 条 no-public；8 Chloride / 5 Sulfate / 1 Vapor-phase oxidation。
- Header：Home、Markets、Products、Applications、Documents、Resources、About、Request a Quote。
- 全站 Header / Mobile Menu / Footer 当前正式 authority 为 `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`；生产 Logo 由 `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` 绑定。Footer 买家标题为 `Procurement`，固定 RFQ 保持不变，可见 `CURRENT` 状态词为 0。
- HOME-001 Gate 5：用户于 2026-08-31 批准并关闭；正式视觉基线与哈希见 `pages/home/05_review/HOME-001_GATE5_APPROVED_BASELINE_MANIFEST_V0.1.md`。
- HOME-001 Gate 6：五项定向修订与 SEO/GEO P0 已通过项目总控复审，入口为 `pages/home/05_review/HOME-001_GATE6_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.2.md`；Gate 6 审查已完成。
- HOME-001 SEO/GEO P0：Review ID `HOME-G6-SEO-GEO-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`。当前外部候选实现已通过 Gate 9 定向核对：Title、Meta、Canonical 标准化等价、唯一 H1 与五节点/五关系 JSON-LD 符合合同；本地运行按安全策略保持 `noindex, nofollow`，生产 `index, follow` 仅由生产环境合同测试证明，尚未获得 Gate 10 索引授权。
- 用户于 2026-08-31 明确批准 IKHLAS 可公开表述为 `a titanium dioxide manufacturer`；该批准不开放工厂地点、Made/manufactured in Malaysia、产品原产地、COO、产能、认证或追溯事实。
- HOME-001 Gate 7：用户于 2026-08-31 明确授权准备开发交付规格；项目总控复审结论为 `PASS`。Package ID `HOME-001-G7-HANDOFF-01 = PROJECT_CONTROL_REVIEW_PASS / APPROVED_FOR_HANDOFF`，交付包入口为 `pages/home/06_handoff/HOME-001_GATE7_PROJECT_CONTROL_REVIEW_SUBMISSION_V0.1.md`。
- HOME-001 页面生命周期：`READ_ONLY_QA_APPROVED`。当前批准只读 QA 基线为 commit `616193f3dbf059f0e081c8d59119c008ba2b848b`；Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。Gate 10、部署和发布均未授权。
- HOME-001 Gate 7 P0 输入修订：用户于 2026-08-31 授权 Tablet 证据与 Canonical 等价验收两项定向修订；当前 Gate 9 按 `HOME-001_GATE7_ACCEPTANCE_AND_BLOCKERS_V0.2.md` 与 `HOME-001_GATE7_MANIFEST_V0.2.md` 核对。历史 V0.1 记录保留，不回写。
- HOME-001 Gate 9：`HOME-001-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；页面 lifecycle=`READ_ONLY_QA_APPROVED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。Home 色彩、Mobile Products 默认四组名+6/5/2/1、H1/section spacing、披露控件 ARIA/键盘已验证关闭；下游 404/500、RFQ receiver 与子页 readiness 继续为外部 release dependencies；Tablet `Start Here` 继续 `USER_DECISION_REQUIRED / IMPLEMENTATION_UNCHANGED`。Gate 10、部署、发布和索引未授权。关闭记录=`pages/home/07_qa/HOME-001_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md`。
- Production SVG Logo：用户于 2026-08-31 批准品牌方向并确认使用权；Review ID `TIO2MY-LOGO-SVG-PCR-01 = APPROVED / CLOSED`。四份经复审且哈希未变的 SVG 已由 `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` 晋升为全站正式 production SVG baseline。旧 2172×724 PNG 仅保留历史/视觉追溯；本状态不表示已实施、部署或发布，也不主张商标注册或提供法律意见。
- Global current-page state：定向复审 `GHC-CURRENT-TEXT-REMOVAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`，批准日期 2026-08-31。`GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` 现为正式 authority：可见状态词=0，Desktop Bold + 3px Teal underline，Mobile Bold + 4px Teal left marker；`aria-current="page"` 按 surface 管理，活动 viewport 只暴露一个可访问 navigation surface/current link。PRODUCT-000 已收到正式 path/version/post-closure hash 消费通知。独立开发候选 commit `024f171` 不等于部署或发布。
- MARKET-000 Gate 9：`MARKET-000-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；commit `616193f3dbf059f0e081c8d59119c008ba2b848b` 的 Canonical/308 定向复验通过，`MARKET-G9-P0-01=VERIFIED_FIXED / CLOSED`。当前 lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。旧 ROQA-01 三项继续 CLOSED；10 个 Market child、`APP-000`、RFQ receiver/readiness 与 `CONV-DOC`/held Trade route cleanliness 继续作为外部/全站 release blockers。MKT-R002–005、PT-BR/Trade/PRODUCT V0.3 门禁不变，Gate 10 未授权。关闭记录=`pages/markets/07_qa/MARKET-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md`；当前指针=`pages/markets/07_qa/MARKET-000_CURRENT_GATE9_BASELINE_MANIFEST_V0.1.md`。
- MARKET-EU-001 Gate 7–8：用户于 2026-09-04 明确决定 `确认移交，授权 Gate 8`；`MARKET-EU-001-G8-USER-AUTHORIZATION-01=USER_AUTHORIZED / CLOSED`，`MARKET-EU-001-G7-HANDOFF-CLOSURE-01=DELIVERED / CLOSED`。Gate 7 权威包及十项 test-first 实施计划已发送至现有 `01My首页开发` task/thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`，发送后任务状态为 `active / inProgress`。当前 lifecycle=`HANDED_OFF`，Gate 8=`AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`，唯一页面级指针=`pages/markets/06_handoff/MARKET-EU-001_CURRENT_GATE8_AUTHORIZATION_MANIFEST_V0.18.md`。关键词主表仍为57行、登记册仍为57页且哈希未改；`EU-G6-R01` 至 `EU-G6-R05` 继续作为 origin、trade freshness、route/conversion/runtime 的后续门禁。D23 不开发；Gate 9–10、部署、生产写入、发布、DNS 和索引均未授权。
- Applications 外部路由协调状态：2026-09-04 HOME/MARKET Gate 9 最终本地 production 探针确认 `/applications/` 仍返回 404；外部提交 `616193f` 未创建 `APP-000` 或任何 Application child，也未跨 `site_scope` 回退。该结果仅确认 Applications 尚未开发，继续作为外部 page-owner/release blocker；不构成 APP-000 Gate 8 授权，也不改变当前“先完成关键词—题材—研究—证据—正文内容体系，再进入开发”的工作顺序。未部署、未发布、未开放索引。
- APP-MB Gate 1：用户于 2026-09-06 批准 `Application landing page + depth article` 方向并要求按 Gate 1–9 推进；该决定只打开 Gate 1。页面 Brief、文章输入审计、关键词/内耗审计、Product V0.3 关系权威审计与 18 组 Claim/Evidence Register 已完成项目总控复审，`APP-MB-G1-PCR-01=PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`，等待用户确认 Page Intent Card 后才能形成 `CONTENT_INTENT_CONFIRMED`。当前中性 `Grades to Review` 为 M-510、M-200、M-108、M-210、M-340、M-886、M-2377；修订文章三项编辑问题继续阻止 Gate 2 完整文案批准；URL 保持 `PROVISIONAL_URL`。当前指针=`pages/applications/masterbatch/APP-MB_CURRENT_GATE_BASELINE_MANIFEST_V0.1.md`。Gate 2–10、D16 开发、部署、发布与索引未授权。
- PRODUCT-000 Gate 7：`PRODUCT-000-G7-PCR-04 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；项目总控已于 2026-08-31 将批准 authority set 发送给现有“01My首页开发”任务，thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`。页面生命周期=`HANDED_OFF`；Gate 8=`HANDED_OFF_TO_EXTERNAL_DEVELOPMENT / AUTHORIZED`。外部实际执行状态由 D16 开发任务维护；本页面执行任务不操作 `D:\16Wordpress_nextjs`。关闭记录见 `pages/products/05_review/PRODUCT-000_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md`。
- PRODUCT-000 Gate 8 / Gate 9：外部 Gate 8 Hub 实现提交为 `be94db980133cc27c05dfff892e1e185a617dac3`，共享 readiness 修订为 `e28ee17a3131e24c618b6df34cbda7df4e2d5f37`。2026-09-02 独立只读复验为 30 files / 550 tests PASS、typecheck PASS、产品范围 ESLint 0 errors / 0 warnings、外部工作树 clean；`PRODUCT-000-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`。标准生命周期=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。14 Grade、2 Process、下游支持目标、生产 RFQ/Privacy/consent 与索引授权继续阻止发布；Gate 10 未授权。关闭记录见 `pages/products/05_review/PRODUCT-000_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md`。
- GRADE-M350 / Product Detail Gate 8 / Gate 9：D23 旧状态中的 `HANDED_OFF=NO` 已由 `PRODUCT-SCOPE-G8-RECON-01` 行政纠正，不回写历史 Gate 7 关闭记录。外部实现提交为 `0a389b9153207f5bf991fad9ea25872433fa2b1d`，readiness 修订为 `e28ee17a3131e24c618b6df34cbda7df4e2d5f37`。`GRADE-M350-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；生命周期=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`，route release state=`PREVIEW_ONLY`。M-510 与其余 12 个 Grade 后续均已分别通过独立 Gate 9；14 个 Grade 详情路由现均为已验收预览。Gate 10、部署、发布和索引未授权。关闭记录见 `pages/products/detail-template/05_review/GRADE-M350_GATE9_READ_ONLY_QA_CLOSURE_V0.1.md`。
- 13 Grade 模板复用决定：用户于 2026-09-02 批准“共享 M-350 组件/字段模式 + 每型号独立证据与内容合同”的工作流；同日进一步批准 `PRODUCT-DETAIL-FAST-TRACK-01`，允许 M-510 的 Gate 3–5 由已批准 M-350 模板复用满足，并授权必要的一次性 WordPress + Next.js 多型号通用化。该快速通道只适用于 M-510 pilot；其他 12 个 Grade 仍需自己的内容与证据批准。
- GRADE-M510 快速通道 / Gate 8 / Gate 9：Gate 2 完整英文正文与模块顺序保持 `USER_APPROVED / CLOSED`，Gate 3–5 由已批准 M-350 模板复用满足，`GRADE-M510-FAST-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`。外部初始实现 `a8e4f5d4ab0fe2f12ce273d35bd8b394a36e29f6` 的两项 P1 已在 `3d2de1f418b011b6043e39f2119255f3f14fb0ed` 关闭：Product Detail 授权收敛到单一注册表，D23 批准内容通过原始哈希与规范化哈希双重绑定。独立复审为 10 files / 35 tests PASS、typecheck PASS、changed-file ESLint PASS、7 张视觉证据哈希不变、外部工作树 clean。`GRADE-M510-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`，route release state=`PREVIEW_ONLY`。后续 12 个 Grade 均已独立完成 Gate 9；Gate 10、部署、发布和索引未授权。当前 Manifest 为 `pages/products/detail-template/05_review/GRADE-M510_CURRENT_GATE9_BASELINE_MANIFEST_V0.8.md`。
- Product Detail 开发 SOP V2.0：用户于 2026-09-02 明确批准；`PRODUCT-DETAIL-SOP-V2-USER-APPROVAL-01=USER_APPROVED / CLOSED`，状态=`APPROVED_PROJECT_STANDARD / ACTIVE`。标准 Gate 3–5 与模板复用快速通道成为后续 Grade Product Detail 的正式双通道，单型号执行清单同步生效。旧 V1.0 保留为 `SUPERSEDED / HISTORICAL`。十二型号严格串行已按当前 Manifest `docs/product-pages/29_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.16.md` 完成并关闭；SOP 本身继续作为维护标准。Gate 10、部署、发布与索引仍未授权。
- 剩余 12 Grade 严格串行决定：用户于 2026-09-02 批准 `PRODUCT-DETAIL-12-GRADE-SERIAL-01=COMPLETED / CLOSED`。策划在“03产品页统一模板”thread `01a04c1c-41cc-7b20-ac45-646888191307` 中一次处理一个 Grade；Controller 02 审查通过后才逐一移交 D16；每个 Grade 完成 Gate 9 后才启动下一个。未进行批量策划、并行型号开发或多路由一次授权。
- 剩余 12 Grade 持续执行授权：`PRODUCT-DETAIL-12-GRADE-AUTO-SERIAL-01=COMPLETED / CLOSED`。固定顺序 `M-896 → M-895 → M-340 → M-886 → M-52 → M-108 → M-210 → M-200 → M-996 → M-2196 → M-2377 → CR-901` 已全部完成独立 Gate 9。Active Grade=`NONE`；当前串行指针为 `docs/product-pages/29_Product_Detail_Development_SOP_V2_Autonomous_Serial_Manifest_V0.16.md`，完成摘要为 `docs/product-pages/30_Product_Detail_12_Grade_Serial_Completion_Summary_V0.1.md`。Gate 10、部署、发布、DNS、生产写入和索引不在授权范围。
- GRADE-M896 Gate 7–9：V0.1 四项 P1 已在 V0.2 关闭；Gate 8 实现提交为 `4c0c79de8294435a6e25d70d4c04b8a5185d7f85`。独立 Gate 9 复验为 7 files / 36 tests PASS、typecheck PASS、changed-file ESLint PASS、正确 `SITE_ID=tio2-my` 的 production build PASS、7 张视觉证据哈希匹配、D23/D16 canonical content hash 一致、外部工作树 clean。`GRADE-M896-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY`。历史上关闭后推进到 M-895；当前十二型号串行已全部完成。Gate 10/部署/发布/索引未授权。当前页面 Manifest 为 `pages/products/detail-template/05_review/GRADE-M896_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md`。
- GRADE-M895 Gate 0–9：当前 V1 2026 TDS 与历史 11/2024 TDS 已分离；Gate 8 实现提交 `bf9c3438458d06856d42880a9013b7b61b3d09c4`。独立 Gate 9 为 6 files / 33 tests PASS、typecheck PASS、changed-file ESLint PASS、正确 Malaysia production build PASS、7 张视觉证据哈希匹配、D23/D16 canonical hash 一致、工作树 clean。`GRADE-M895-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY`。历史上关闭后推进到 M-340；当前十二型号串行已全部完成。Gate 10/部署/发布/索引未授权。当前页面 Manifest 为 `pages/products/detail-template/05_review/GRADE-M895_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md`。
- GRADE-M340 Gate 0–9：Gate 8 实现提交 `8b5d23aa0bd8eeb1763673e651810ee9dc7df1b6` 已通过独立 Gate 9；可见技术表保留 14 行 legacy standard/typical 数据，机器可读 Schema 按“非占位 value → typical → standard → omit”选择有意义值，不输出 `--`。`GRADE-M340-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY`。当前 Manifest 为 `pages/products/detail-template/05_review/GRADE-M340_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md`。
- GRADE-M886 Gate 0–9：Gate 8 实现提交 `6b4227d05fac00d5b5d9ae1c499453eae931dd1f` 已通过独立 Gate 9；公开关系保持证据边界，footwear 仅为 evidence-only/not_public，高温挤出与 cast film 归入 Plastics processing，不误归 Coatings。`GRADE-M886-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY`。当前 Manifest 为 `pages/products/detail-template/05_review/GRADE-M886_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md`。
- GRADE-M52 Gate 0–9：`TDS_M-52_V3_2023.pdf` 已按项目批准的“有文档即有效”规则核验；公开关系仅 Printing Inks、Coatings 与 Sulfate，内容合同含 3 个应用、2 组/8 项 Evaluation、11 行 Technical Specifications。Gate 8 实现提交 `3788e15c6e95173b0cc548ddc6a3674ad4112c4a` 已通过独立 Gate 9：16 files / 84 tests、typecheck、changed-file ESLint、diff check、Malaysia production build、D23/D16 canonical hash、7 张视觉证据哈希及 1440/390 视觉检查均 PASS。`GRADE-M52-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY`。当前 Manifest 为 `pages/products/detail-template/05_review/GRADE-M52_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md`。
- GRADE-M108 Gate 0–9：唯一一页 TDS 已核验；公开关系仅 Plastics、Masterbatch 与 Sulfate，文件名 `2023V3` 因页内未打印而保持内部不可见。Gate 8 实现提交 `c889841ffa0625c825202f10023ae6ff5ef2eb4a` 已通过独立 Gate 9：17 files / 92 tests、typecheck、changed-file ESLint、diff check、Malaysia production build、D23/D16 canonical hash、7 张视觉证据哈希及 1440/390 视觉检查均 PASS。`GRADE-M108-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；lifecycle=`READ_ONLY_QA_APPROVED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY`。当前 Manifest 为 `pages/products/detail-template/05_review/GRADE-M108_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md`。
- ABOUT-001 Gate 7：`ABOUT-001-G7-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；用户预先授权通过后直接移交现有“01My首页开发”任务，页面生命周期=`HANDED_OFF`，Gate 8=`AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`。外部实际执行状态由 D16 开发任务维护；本页面执行任务不操作 `D:\16Wordpress_nextjs`。关闭记录见 `pages/about-contact/05_review/ABOUT-001_GATE7_PROJECT_CONTROL_CLOSURE_V0.1.md`。
- ABOUT-001 Gate 9：`ABOUT-001-G9-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；标准页面生命周期=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。视觉、共享 Chrome、Operating Company、SEO/GEO/Schema 同源、字段级 evidence-state 原子投影、`site_scope=tio2-my`、1440/768/430/390px 与无障碍均通过；独立复验为 Vitest 10 files / 105 tests PASS、typecheck PASS、外部工作树 clean。发布仍受 `/applications/`、`/documents/`、`/request-documents/`、`/request-a-quote/`、`/contact/` 未就绪阻塞；Gate 10、部署、DNS、发布和索引未授权。关闭记录见 `pages/about-contact/05_review/ABOUT-001_GATE9_PROJECT_CONTROL_CLOSURE_V0.1.md`。
- CONV-RFQ Gate 1–6 已关闭；`CONV-RFQ-G7-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`。用户已授权 Gate 8，V1.1 authority 已移交 `01My首页开发` task/thread `01a05595-2a2c-7ef0-9be4-f55a42043bb6`；生命周期=`HANDED_OFF`，Gate 8=`AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`。2026-09-04 HOME/MARKET 最终本地 production 协调探针在 commit `616193f` 报告 `/request-a-quote/`=200，但 receiver=`UNAVAILABLE_IN_CURRENT_ENVIRONMENT`；该 commit 未加入 production secret、未改 RFQ contract、未回退 Contact。`RFQ_RECEIVER_ENVIRONMENT_RELEASE_BLOCKER=OPEN`，此探针不构成 CONV-RFQ Gate 8 完成或 Gate 9 准入证据；Gate 9=`NOT_STARTED / WAITING_FOR_PRODUCTION_EQUIVALENT_RESULT`。记录见 `pages/conversion/request-a-quote/05_review/CONV-RFQ_GATE8_RECEIVER_ENVIRONMENT_BLOCKER_RECORD_V1.0.md`。D23 不开发；部署、发布、DNS、索引未授权。
- CONV-DOC Gate 9：`CONV-DOC-G9-TARGETED-REREVIEW-PCR-01`与`DOC-G9-P1-01`保持CLOSED，lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`；当前唯一指针为`pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md`。当前receiver为Web3Forms Free browser-direct：`c2a62677e6781ad21e9a05ee9e90f419ec61a167`；共享Malaysia Key接线=`0b42ccfbb41f3e487c64dc4173dec5d608ed1141`；真实provider accepted证据=`33fe5fa45a4339a0679a79e99cacfb5883f27f0d`。EN/BM Privacy实际数据流parity在`f3409f1d4b2455e99fcbc1881e73fc90df049100`通过D23复审，`PRIVACY_PROCESSOR_AND_ACTUAL_DATA_FLOW_PARITY=VERIFIED / CLOSED`。旧`782e7fe...` server-only记录为历史，不能描述当前runtime。邮箱实际出现仍待用户外部确认；生产WordPress应用/读回及生产账户/Key放置/收件绑定证据仍开放。Gate 10、部署、生产写入、发布、DNS和索引未授权。
- Documents 三个详情页 Gate 1 均为 `USER_APPROVED / CLOSED`。DOC-TDS与DOC-REACH均已通过Gate 9。DOC-REACH reviewed HEAD=`036ea7a8f838acd93ef2f68865b9d6683d123cff`；`DOC-REACH-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`，定向返修`DOC-REACH-G9-P1-DEP-01=VERIFIED_FIXED / CLOSED`，lifecycle=`READ_ONLY_QA_APPROVED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`。页面与八项指定依赖通过；共享APP-000 `/applications/` 404、生产CMS/表单收件与隐私数据流、分支集成及Gate 10继续阻止发布。当前唯一指针=`pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE9_BASELINE_MANIFEST_V0.17.md`。当前通用答案及EG-006边界不变。DOC-COO可进入后续串行执行。Gate 10、部署、生产写入、发布、DNS和索引未授权。
- Malaysia-origin 全站跨页公开授权：用户于 2026-09-05 明确批准所有适用页面直接使用 `Malaysia-origin titanium dioxide`。`SITE_WIDE_CROSS_PAGE_MALAYSIA_ORIGIN_CLAIM_HOLD=USER_APPROVED / CLOSED`；授权覆盖买家可见正文、H1/标题、SEO 描述、GEO 实体表达、社交元数据、Schema 与跨页实体关系，要求机器可读内容与可见内容一致。该决定是内容与事实使用授权，不自动授权下一 Gate、开发、部署、发布、DNS或索引。权威记录见 `docs/architecture/MALAYSIA_ORIGIN_SITE_WIDE_PUBLICATION_AUTHORITY_V1.0.md`。
- CONV-SAMPLE Gate 9：`CONV-SAMPLE-G9-PCR-01 = PROJECT_CONTROL_ACCEPTED / CLOSED`；四项 finding `SAMPLE-G9-P1-01`、`SAMPLE-G9-P1-02`、`SAMPLE-G9-P2-01`、`SAMPLE-G9-P2-02` 均为 `VERIFIED_FIXED / CLOSED`。当前 lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`；当前指针为 `pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.3.md`。生产 receiver/persistence/dedup/positive acknowledgement、WordPress singleton/seed、Legal/Privacy production data-flow parity、完整站 shared dependencies 与独立 Gate 10 授权继续作为发布门禁；Gate 10 未授权。
- Legal/Privacy Gate 8 / Gate 9：原Gate 9审查继续维持`LEGAL-PRIVACY-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`与三页`READ_ONLY_QA_APPROVED`。EN/BM V0.2已由D16 commit `f3409f1d4b2455e99fcbc1881e73fc90df049100`实现；D23独立复审完成6 files/21 tests、TypeScript、ESLint、35/35 build、两语言正文同源、8/8字段、0禁用字段及2语言×3断点浏览器6/6，`LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`，runtime parity=`VERIFIED / CLOSED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_RELEASE_BLOCKERS`。当前Privacy EN/BM及共享权威指针为V1.3；Cookie与Shared Consent仍使用V1.1。BM人工法律/含义等效、最终法律复核、生产主机/供应商/存储/网络清单、保留期操作、生产WordPress应用/读回、Web3Forms生产账户/Key放置/收件绑定证据及用户侧邮箱收件确认继续开放。Gate 10、部署、生产写入、DNS、发布和索引未授权。
- Malaysia Origin 不设置独立一级栏目，相关搜索意图分别由 Home、About、Documents 和 Resources 承接。
- Resources 共享模板边界：用户于 2026-09-05 确认 `RESOURCE-TEMPLATE-CONTENT-SEPARATION-01=USER_APPROVED / CLOSED`。后续 Resource 子页只共享 Header/Footer、品牌与底层实现模板/组件能力，不共享买家可见内容、固定 Hero、模块选择/顺序、目录、来源、FAQ、CTA、内链、SEO、GEO 或 Schema 决策。`RES-ORIGIN` 仅为实现参考，不是七个剩余页面的内容模板；各页继续独立 Gate。该决定不授权 D16 改动、开发、部署、发布或索引。记录=`pages/resources/05_review/RESOURCE_SHARED_TEMPLATE_NOT_SHARED_CONTENT_DECISION_V0.1.md`。
- RES-PROC Gate 0/1–7：Gate 0/1 的控制命题继续为“生产路线可以影响基料形成，但 route label 本身不足以建立 grade-level performance conclusion”；Gate 2–5 均为用户批准关闭，Gate 6 于 2026-09-06 获用户批准。用户同日授权 Gate 7，当前 `RES-PROC-G7-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`，lifecycle=`APPROVED_FOR_HANDOFF`，`HANDED_OFF=NO`，0 P0 / 0 P1 / 0 P2。Gate 7 封装四文件核心包：独立 `ResProcPageViewModel`/来源与关系模型、14 模块及固定数量、Products 独立条件、两条 Process 路由原子 fail-closed、Article 条件链路、9 项测试优先开发任务、28 项 Gate 8 验收与 Gate 9 回执/回滚合同。源链接于 2026-09-06 复核：6 条直接可取，EUR-Lex 原 TXT endpoint 返回工具侧错误，但同一官方 CELEX 记录通过 ALL/PDF endpoint 可取；批准正文、链接和可见 2026-09-05 review date 未改，Gate 8 仍需核验 exact runtime destination。完整校验=`45 PASS / 0 FAIL`。Gate 8–10、外部开发任务/消息、D16 操作、RES-000 inventory/sitemap、部署、发布与索引均未授权。当前唯一指针=`pages/resources/05_review/RES-PROC_CURRENT_GATE7_HANDOFF_MANIFEST_V0.9.md`。

## 2. 已完成或已确认成果

| 工作项 | 当前状态 | 说明 |
|---|---|---|
| 战略定位 | 已形成项目资料 | 当前文件位于 `docs/strategy/TiO2_Malaysia_Website_Positioning_2026-08-29.md` |
| 关键词研究 | 已完成并有 QA | 原始、处理、主表、聚类、页面架构、机会与 QA 均保留 |
| 页面—关键词映射 | 当前实施主表57行 | Registry 与 Master 均为57个唯一 Page ID；三个 Legal 页面均为 `NO_PRIMARY_KEYWORD`，Terms记录为0；一致性校验 PASS |
| HOME-001 首页 Gate 9 | `READ_ONLY_QA_APPROVED` | `HOME-001-G9-ROQA-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；Tablet `Start Here` 等待用户决定；Gate 10 未授权 |
| Production SVG Logo baseline | `APPROVED / CLOSED` | Review `TIO2MY-LOGO-SVG-PCR-01` 已关闭；正式授权 Manifest 为 `brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md`。4 份 SVG 哈希保持；Global Chrome 与八类页面体系通过 Addendum/跨页登记消费；尚未实施或发布 |
| Global Header current-page visible label removal | `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | 正式 authority V0.5；State Board V0.5、Registry V0.2、Submission V0.2 同步关闭。历史 PNG 未覆盖；PRODUCT-000 可消费；外部候选实现仍需实现/发布边界 |
| MARKET-000 Markets Hub | `READ_ONLY_QA_APPROVED` | `MARKET-000-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；Canonical/308 P0 与旧三项均 CLOSED。10 Market child、APP、RFQ 与全站 route cleanliness 保持外部/全站发布门禁；Gate 10 未授权 |
| PRODUCT-000 Products Hub | `READ_ONLY_QA_APPROVED` | Gate 9 `PRODUCT-000-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；外部目标、生产 RFQ 与索引授权继续阻止发布 |
| ABOUT-001 About TiO2 Malaysia | `READ_ONLY_QA_APPROVED` | Gate 9 `ABOUT-001-G9-PCR-02 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；5 个下游必需路由未就绪，Gate 10/部署/DNS/发布/索引未授权 |
| 14 个产品信息架构 | 已确认 | 独立 URL、主关键词、主分类和页面职责已写入 PRD V0.4 |
| 产品页统一模板 / GRADE-M350 | `READ_ONLY_QA_APPROVED` | Gate 8 状态已行政补录；Gate 9 `GRADE-M350-G9-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`；M-350=`PREVIEW_ONLY`；M-510 另有独立 Gate 8 authority；发布与索引未授权 |
| GRADE-M510 | `READ_ONLY_QA_APPROVED` | Gate 9 `GRADE-M510-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；M-510=`PREVIEW_ONLY`；后续 12 个 Grade 均已独立通过 Gate 9；Gate 10/发布/索引未授权 |
| GRADE-M896 | `READ_ONLY_QA_APPROVED` | Gate 9 `GRADE-M896-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；M-896=`PREVIEW_ONLY`；Gate 10/发布/索引未授权 |
| GRADE-M895 | `READ_ONLY_QA_APPROVED` | `GRADE-M895-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M340 | `READ_ONLY_QA_APPROVED` | `GRADE-M340-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M886 | `READ_ONLY_QA_APPROVED` | `GRADE-M886-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M52 | `READ_ONLY_QA_APPROVED` | `GRADE-M52-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M108 | `READ_ONLY_QA_APPROVED` | `GRADE-M108-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M210 | `READ_ONLY_QA_APPROVED` | `GRADE-M210-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M200 | `READ_ONLY_QA_APPROVED` | `GRADE-M200-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M996 | `READ_ONLY_QA_APPROVED` | `GRADE-M996-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M2196 | `READ_ONLY_QA_APPROVED` | `GRADE-M2196-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-M2377 | `READ_ONLY_QA_APPROVED` | `GRADE-M2377-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；route=`PREVIEW_ONLY` |
| GRADE-CR901 | `READ_ONLY_QA_APPROVED` | `GRADE-CR901-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；commit=`2a2d9380eb717f4f6d1ff354371ec6b4b9ce9d14`；route=`PREVIEW_ONLY` |
| 根项目治理 | 范围边界已更新 | 根章程、状态、索引、目录说明和页面任务卡 V0.2 已统一为视觉、SEO、GEO、外部开发交付和只读验收 |
| 全站公共 Header / Footer 规格 | V0.5 `PROJECT_CONTROL_REVIEW_PASS / CLOSED` | 统一 Production SVG、Desktop/Mobile 导航、结构当前态、固定 RFQ 与 Deep Navy Footer；买家可见 `CURRENT` 词为 0 |
| PRODUCT V0.3 技术关系 | 用户批准 | 三份用户附件为当前有效技术资料；M-2377 的 Coatings/Plastics/Masterbatch/Printing Inks/Paper 与 Sulfate 已解冻并可中性映射；Rubber 仅登记证据；M-996/M-2196 比较冻结继续开放 |
| RES-000 Resources Hub | Gate 8 已完成并通过 Gate 9 只读验收 | `RES-000-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`; lifecycle=`READ_ONLY_QA_APPROVED`; disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；复验提交=`1d2aab975f4fe052f9982dd7ea20e4dedcc79e64`。H0 保持 inventory=0、Featured/Latest=0px、ItemList absent；RES-ORIGIN、Resource children、Trade 与关系门禁未解冻。Gate 10、部署、发布、DNS、生产写入和索引未授权 |
| RES-ORIGIN Non-China Titanium Dioxide Supply Guide | `READ_ONLY_QA_APPROVED` | `RES-ORIGIN-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；初审 Article P0=`VERIFIED_FIXED / CLOSED`；最终 reviewed ref=`53ec50213f806ed4a9995042c4431f8e4376d36d`，24项 Gate 7/9 验收合同全部关闭。disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；当前 Article metadata=null，页面不进入 RES-000 公共 inventory/sitemap。Gate 10、部署、发布、DNS、生产写入和索引未授权；当前指针=`pages/resources/07_qa/RES-ORIGIN_CURRENT_GATE9_BASELINE_MANIFEST_V0.11.md` |
| DOC-000 Documents & Compliance Hub | `READ_ONLY_QA_APPROVED / TARGETED_COPY_IMPLEMENTATION_OPEN` | Gate 8 implementation=`e1d7c761f65570722be5dad705c8c1780262fab0`；Gate 9 P0 cache correction=`51d2db23ccf03d0f5d5bbb7cb0ee90198f7c1fd5`；`DOC-000-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`。用户于2026-09-05批准FAQ #2改为“可先开始申请，但提交前必须选择Grade”；当前Buyer Clean authority=`DOC-000_CONTENT_ARCHITECTURE_V0.10.md`，外部实现与定向Gate 9复验仍开放并阻止发布。Gate 10、部署、发布、DNS和索引未授权；决定记录=`pages/documents/05_review/DOC-000_POST_GATE9_FAQ_GRADE_ALIGNMENT_DECISION_V0.1.md` |
| DOC-TDS TDS, SDS & COA | `READ_ONLY_QA_APPROVED` | 返修commit=`d1b15e253b1202d2e4639646845c7ca8155104a8`；四项原finding均`VERIFIED_FIXED / CLOSED`；`DOC-TDS-G9-PCR-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`；当前指针=`DOC-TDS_CURRENT_GATE9_BASELINE_MANIFEST_V0.3.md`；Gate 10、部署、发布、DNS和索引未授权 |
| DOC-REACH Titanium Dioxide REACH | `READ_ONLY_QA_APPROVED` | reviewed HEAD=`036ea7a8f838acd93ef2f68865b9d6683d123cff`；`DOC-REACH-G9-PCR-01=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；`DOC-REACH-G9-P1-DEP-01=VERIFIED_FIXED / CLOSED`；44 files/323 tests、37/37 build、25/25 integrated Playwright与八项指定依赖均PASS。disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`；APP-000 404及生产环境证据继续阻止发布；当前Manifest=`pages/documents/reach/06_handoff/DOC-REACH_CURRENT_GATE9_BASELINE_MANIFEST_V0.17.md`。Gate 10未授权 |
| DOC-COO Certificate of Origin | `APPROVED_FOR_DESIGN` | Gate 1=`USER_APPROVED / CLOSED`；Gate 2=`USER_AUTHORIZED / QUEUED_SERIAL_AFTER_DOC-REACH`。共享post-TDS执行清单已生效；preferential/non-preferential distinction与自然H1保持锁定。全站Malaysia-origin表达已获用户批准，但不自动证明证书可得性、特定装运原产地、优惠资格、关税结果或海关接受；Gate 3–10未授权 |
| CONV-DOC Request Documents | `READ_ONLY_QA_APPROVED` | `DOC-G9-P1-01=VERIFIED_FIXED / CLOSED`；Web3Forms Free browser-direct、共享Key接线、provider accepted测试及Privacy parity均已验证。邮箱实际出现仍待用户外部确认；生产WordPress应用/读回、生产账户/Key放置/收件绑定证据及Gate 10仍开放。无跨scope fallback，当前Manifest=`pages/conversion/05_review/CONV-DOC_CURRENT_GATE9_BASELINE_MANIFEST_V0.4.md` |
| CONV-SAMPLE Request a Sample | `READ_ONLY_QA_APPROVED` | `CONV-SAMPLE-G9-PCR-01=PROJECT_CONTROL_ACCEPTED / CLOSED`；四项 P1/P2 均 `VERIFIED_FIXED / CLOSED`；disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`。生产 receiver、WordPress seed、Legal/Privacy、完整站 shared dependencies 与 Gate 10 仍为发布门禁；当前 Manifest=`pages/conversion/request-sample/05_review/CONV-SAMPLE_GATE9_CURRENT_BASELINE_MANIFEST_V0.3.md` |
| CONV-RFQ Request a Quote | `HANDED_OFF`; Gate 8 `AUTHORIZED / EXTERNAL_DEVELOPMENT_IN_PROGRESS`; receiver blocker `OPEN` | commit `616193f` 协调探针：route=200，receiver unavailable；未加 production secret、未改 contract、未回退 Contact。Gate 9=`NOT_STARTED / WAITING_FOR_PRODUCTION_EQUIVALENT_RESULT`；部署、发布、DNS、索引未授权 |

“用户确认完成”记录用户在本项目对话中的批准，不等于本轮重新检查了生产代码、部署或线上页面。

页面映射中的 `PROVISIONAL_URL`、`PLANNED_*` 和 `NEW_PAGE_CANDIDATE` 继续保持原状态；它们没有因为进入登记册而升级为已批准或已完成。

## 3. 57 页组成

| 页面体系 | 数量 | 当前总体状态 |
|---|---:|---|
| Home | 1 | HOME-001 lifecycle=`READ_ONLY_QA_APPROVED`；Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。下游路由、RFQ receiver 与 Tablet `Start Here` 决策仍为发布/治理边界；Gate 10 未授权 |
| About / Contact | 2 | ABOUT-001 lifecycle=`READ_ONLY_QA_APPROVED`，Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；5 个必需下游路由仍为 release blockers。Contact 规划中，Gate 10/发布未授权 |
| Markets | 12 | MARKET-000 lifecycle=`READ_ONLY_QA_APPROVED`；Gate 9 disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`。Canonical/308 自身 P0 CLOSED；十个 child route 发布门禁继续 OPEN；Brazil PT-BR 暂定/DO_NOT_RENDER；Gate 10 未授权 |
| Products | 17 | PRODUCT-000 与全部 14 个 Grade 详情页均已达到 `READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`；14 个 Grade 均保持 `PREVIEW_ONLY`，Active Grade=`NONE`。2 个工艺页未开发；Gate 10、发布与索引未授权 |
| Applications | 6 | APP-000 已有 Gate 5 V0.12 视觉候选但未获最终批准；APP-MB 已进入 Gate 1，项目总控复审通过并等待用户确认 Page Intent Card，当前 Brief=`BRIEF_IN_REVIEW`、URL=`PROVISIONAL_URL`。其余 4 个详情页仍缺独立关键词—题材研究、证据池、完整正文与获批 Brief。2026-09-04 本地 production 探针确认 `/applications/` 为 404；未授权开发、未部署、未发布 |
| Documents | 4 | DOC-000原Gate 9基线保持关闭；Hub FAQ #2修正外部实现/复验开放。DOC-TDS与DOC-REACH均已通过Gate 9；DOC-REACH八项指定依赖PASS，APP-000 404与生产环境证据作为Gate 10发布阻塞保留，当前通用REACH答案与EG-006边界冻结。DOC-COO现在是下一串行页面；Malaysia-origin authority不自动证明证书/装运/优惠资格/海关结果。Gate 10、部署、生产写入与发布未授权 |
| Resources | 9 | RES-000 已通过 Gate 9 并保持 H0 公共 inventory=0。RES-ORIGIN 外部任务=`Implement RES-ORIGIN Gate 8` / `01a06f70-b99d-7a92-9def-196f2b21abd9`；初审 P0 Article 链路已由 `ee64dd7` 修正，最终 reviewed ref=`53ec50213f806ed4a9995042c4431f8e4376d36d`。`RES-ORIGIN-G9-ROQA-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`，lifecycle=`READ_ONLY_QA_APPROVED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RELEASE_BLOCKERS`，24项合同关闭；当前指针=`pages/resources/07_qa/RES-ORIGIN_CURRENT_GATE9_BASELINE_MANIFEST_V0.11.md`。页面仍不进入 RES-000 公共 inventory/sitemap，当前 Article metadata 仍为 null；Gate 10、部署、生产写入、公开、发布、DNS 与索引均未授权；其余为 3 个候选和 4 个贸易更新规划 |
| Conversion | 3 | CONV-DOC 与 CONV-SAMPLE 均已完成 Gate 9，lifecycle=`READ_ONLY_QA_APPROVED`，disposition=`READ_ONLY_QA_APPROVED_WITH_RECORDED_GATE_10_RELEASE_BLOCKERS`；CONV-RFQ Gate 8 仍为外部开发进行中。生产 receiver、Privacy/实际数据流、WordPress migration/seed、完整站 shared dependencies 与 Gate 10 发布条件继续阻止发布；Gate 10 未授权 |
| Legal / Privacy | 3 | 原Gate 9审查维持关闭，三页lifecycle=`READ_ONLY_QA_APPROVED`。Privacy EN/BM V0.2 runtime parity=`VERIFIED / CLOSED`，`LEGAL-PRIVACY-G9-CONV-DOC-PARITY-PCR-02=PROJECT_CONTROL_REVIEW_PASS / CLOSED`；当前指针V1.3。BM人工审校、最终法律复核、生产Web3Forms与主机技术清单、保留期操作、生产WordPress读回及邮箱收件确认仍为release controls；Gate 10、部署、生产写入、发布、DNS和索引未授权 |

## 4. 当前事实与质量冻结项

| 范围 | 状态 | 处理边界 |
|---|---|---|
| M-2377 工艺与应用 | `VERIFIED_FOR_PUBLIC_MAPPING` | Sulfate 及 Coatings、Plastics、Masterbatch、Printing Inks、Paper 已由 PRODUCT V0.3 批准；Specialty Materials 继续 `NO_PUBLIC_MAPPING`；Rubber 不扩展分类或页面 |
| M-996 与 M-2196 差异 | `TECHNICAL_VERIFICATION_REQUIRED` | 两个页面可独立建设；没有证据的差异化结论不发布 |
| About 制造、原产地与追溯事实 | `FACT_EVIDENCE_REQUIRED` | 通用 manufacturer 关系已获用户批准；具体工厂地点、Malaysia manufacturing、产品原产地、COO 和追溯仍逐项核验后发布 |
| REACH、TDS/SDS/COA、COO 页面 | `FACT_EVIDENCE_REQUIRED` | 可完成页面流程与受控申请设计；不得提前作合规承诺 |
| Trade Update | `OFFICIAL_SOURCE_UPDATE_REQUIRED` | 每次发布或更新必须使用官方来源并显示资料日期 |
| Brazil PT-BR | `LOCALIZATION_REVIEW_REQUIRED` | 可做研究和结构；最终 URL、语言和本地化文案需批准 |
| Contact | `CONTACT_DETAILS_REQUIRED` | 仅可使用已验证实体资料与域名邮箱 |

这些冻结只影响相关事实或发布字段，不阻塞公共页面结构、组件、已验证内容和其他页面的开发。

## 5. 当前页面建设顺序

1. PRODUCT-000 与 GRADE-M350 Gate 9 已关闭；先保留全部 release blockers，不进入 Gate 10。
2. `GRADE-M510` 与严格串行的 12 个 Grade 均已分别通过 Gate 9；连同 M-350，14 个 Grade 详情页全部完成只读验收，只保留 release blockers，不进入 Gate 10。当前没有 active 或 locked Grade。
3. 两个 Process 页、Applications、Documents、Markets 与 Conversion 继续由各自 owner 按独立 Gate 推进；Legal/Privacy 已关闭 Gate 9，只跟踪已登记的生产与法律 release blockers，不进入 Gate 10。
4. 每个具体页面开工前，从登记册生成并批准独立页面任务卡。
5. 视觉、SEO、GEO 与交付规格获批后，交给 `D:\16Wordpress_nextjs` 的独立开发任务实现。
6. 开发完成后由本项目进行只读视觉、SEO、GEO 验收；问题交回开发项目修正，发布需要用户另行批准。

建设顺序可由用户调整。调整优先级不等于改变页面职责、URL 或关键词归属。

### 5.1 当前跨页视觉修订

- 状态：`GLOBAL_CHROME_VISUAL_REVISION_IN_PROGRESS`。
- 范围：首页、03产品详情页统一模板、PRODUCT-000、MARKET-000、RES-000、APP-000。
- 页面主体、关键词、SEO/GEO、产品关系和事实门禁保持不变。
- 原页面任务只重导出含统一 Header / Footer 的视觉稿；不创建二级页面，不进入开发。
- 执行计划：`docs/superpowers/plans/2026-08-30-global-header-footer-visual-revision.md`。

## 6. 目录整理状态

- 目录重构 V0.1 已按批准映射执行。
- 根目录以 `brand`、`docs`、`research`、`pages`、`90_archive`、`99_workspace` 六个职责区管理资料。
- PRD V0.1–V0.3 和被新版替代的首页策划文件已进入 `90_archive/`。
- 临时脚本、预览和验证结果已进入 `99_workspace/`。
- 目录规则和旧路径映射见 `02_DIRECTORY_GUIDE.md`。
- 本次迁移未删除或覆盖任何文件；原 `.tmp` 在确认完全为空后移除。

## 7. 状态维护规则

- 每次用户批准页面、版本或架构变化后更新本文件。
- 只记录已经发生或已经批准的状态，不把计划写成完成。
- 页面生命周期、关键词映射状态和事实验证状态分别记录，不得合并成一个“完成”。
- 页面数量、URL、主关键词或职责变化时，必须同步更新 PRD 新版本、页面—关键词主表新版本、页面登记册和相关任务卡。
- 已发布状态文件不覆盖；重大基线变化复制为 V0.2、V0.3 等新版本，并在项目索引中更新“当前版本”入口。
