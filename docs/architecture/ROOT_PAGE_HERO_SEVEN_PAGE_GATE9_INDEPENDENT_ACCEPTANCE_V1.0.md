# 七页共享 RootPageHero Gate 9 独立验收 V1.0

日期：2026-09-11  
Review ID：`ROOT-HERO-G9-INDEPENDENT-ACCEPTANCE-01`  
对象：`HOME-001 / MARKET-000 / PRODUCT-000 / APP-000 / DOC-000 / RES-000 / ABOUT-001`  
结论：`RETURN / GATE8_REPAIR_REQUIRED`

## 1. 结论

Gate 8 的机器交接有效，候选可访问且身份一致，但实际实现不满足批准组合。Gate 9 对本工作集登记五项 P1 必修 Finding，整组不得通过，也不得进入集成或发布。

四层状态：

- `RECHECK_SCOPE_STATUS=RETURN / 5_REQUIRED_FINDINGS_OPEN`
- `PAGE_GATE9_STATUS=NOT_PASS / GATE8_REPAIR_REQUIRED`
- `INTEGRATION_STATUS=NOT_READY`
- `RELEASE_STATUS=NOT_AUTHORIZED`

用户已明确取消本工作集的实体设备／具名辅助技术证据要求；本次退回与该项无关。`PRODUCT-000` 在 390px 的自然四行 H1 也按用户当前决定接受，本报告没有以四行本身退回 Product。

## 2. 精确候选身份

| 项目 | 身份 |
|---|---|
| D16 worktree | `D:\16Wordpress_nextjs\.worktrees\root-hero-seven-gate8` |
| Branch | `codex/root-hero-seven-gate8` |
| Baseline | `27f0a0da59df1e54cd01eab7d77eb7024b338d42` |
| Implementation | `25f7e89d4d41c0e821581757717acf05156335ce` |
| Evidence HEAD / observed HEAD | `a8e7d3f0447cc05c1c3161e9204372f806168557` |
| Build dir / Build ID | `.next-root-hero-gate8` / `fhXPekoseOA_c5UmA1zpT` |
| Runtime | `http://127.0.0.1:32000/`，local production |

正式预检复跑结果：Evidence Manifest validation `PASS`；两轮 Gate 9 preflight `PASS`；14/14 runtime 请求通过；Git、Build marker、HEAD 与 clean 状态一致。因此本次分类是实现返修，不是环境失败或证据不完整。

## 3. 独立验收方法与通过范围

Gate 9 使用 Codex 内置浏览器检查七条实际路由，并在 1440、768、390 三个宽度核对 Hero、DOM、动作、导航、响应式与内容边界。390px 配置下实际记录为 `window.innerWidth=390`、`document.documentElement.clientWidth=375`；这是本次内置浏览器的真实可用内容宽度。

以下范围通过并需在返修后保持：

- 七页都消费同一生产 `RootPageHero`；没有发现第二套共享 Hero 实现。
- 1440/768/390 的 H1 字号为 56/44/36px，字重 700；七页三档均无水平溢出。
- Mobile Hero action 高度至少 48px；Home 键盘顺序可到达两条 Hero CTA，焦点轮廓可见。
- Market 保留十个正常可爬取目的地链接及批准顺序；没有 PT-BR 或 Trade 子链接扩张。
- Documents 保留无有效默认值的 14 型号选择器及可见 Continue；Hero 直达 `/request-documents/`。
- Resources 媒体在 901px 可见、900px 隐藏且不留空白。
- 七页 Schema 可解析；每页当前视口只有一套主导航和一个 `aria-current="page"`。
- Market 的 `CURRENT INFORMATION` 是已批准的正文眉题；Global Chrome 没有把 `CURRENT` 当作导航状态标签。

## 4. 必修 Findings

### ROOT-HERO-G9-F01 · P1 · Applications 缺少批准的询价动作

实际 `/applications/` Hero 在 1440、768、390 都只有 `Explore Applications → #application-selector`。批准绑定还要求始终显示 `Request a Quote → /request-a-quote/`。源码将该按钮绑定到 `rfqReady`，当前 false 时直接不渲染。

违反：`RH7-AC-APP-01`、`RH7-DEP-02`。  
关闭条件：三档实际浏览器均出现两条批准动作；RFQ 使用干净公开 URL，保持私有归因边界、键盘可达、焦点可见和不小于 44px。

### ROOT-HERO-G9-F02 · P1 · About 的 Hero／Who We Are 内容边界错误

实际 `/about/` 把六段正文全部放入 Hero，1440px Hero 高度约 761.86px；紧接的 `Who We Are` 只剩七行事实。批准组合只把 Source Map 第一段简介放在 Hero，其余五段支持正文必须位于紧接的 `Who We Are`，再接七行事实。

违反：`RH7-AC-ABOUT-01`、`RH7-AC-CORE-10`。  
关闭条件：Hero 仅保留第一段批准简介；五段支持正文移回紧接的 `Who We Are`；七行事实、两条 CTA、媒体和后续模块语义保持。

### ROOT-HERO-G9-F03 · P1 · 390px H1 行数与字距不符合批准边界

内置浏览器在配置 390px 时记录：Documents 为四行，超过默认三行；About 为五行，超过其四行例外。Product、Resources、About 的 H1 计算字距均为 `-1.26px`（`-.035em`），而这些已接受的移动端几何要求正常／零字距。共享 CSS 当前在所有断点持续施加负字距。

违反：`RH7-AC-CORE-03`、`RH7-AC-CORE-04`。  
关闭条件：同一内置浏览器 390px 配置下 Documents 不超过三行、About 不超过四行；Product 保留用户接受的自然四行；Product、Resources、About 在该断点均为 36px/700、字距 0、无 transform/stretch/固定超宽/裁切/横滑。不得通过压缩字体来减少行数。

### ROOT-HERO-G9-F04 · P1 · Resources CTA 目标漂移

实际 `Explore Procurement Resources` 指向 `#browse-resources`，且页面没有 `#research-paths`。批准 V1.2 精确目标为 `#research-paths`。

违反：`RH7-AC-RES-01`、`RH7-AC-CORE-10`。  
关闭条件：Hero CTA 精确指向存在且唯一的 `#research-paths`；点击、键盘激活和首模块边界在三档浏览器中通过。

### ROOT-HERO-G9-F05 · P1 · Hero 重新暴露内部 Page ID

实际公共 Hero DOM 暴露 `data-source-page=HOME-001`、`PRODUCT-000`、`ABOUT-001`。Product 的 RFQ URL 还公开为 `/request-a-quote/?source_page_id=PRODUCT-000`，与批准的干净 `/request-a-quote/` 不一致。当前批准组合继承 APP Gate 9 已关闭的私有归因边界：内部 Page ID 只能留在服务器／receiver 侧，不能进入公开 URL、HTML、DOM、RSC 或浏览器脚本状态。

违反：`RH7-AC-CORE-11`、`RH7-AC-CORE-12`。  
关闭条件：七页 Root Hero 的公开 URL、HTML、DOM、RSC、Schema、内联状态和已加载客户端脚本不含内部 Page ID 或 `source_page_id`；需要的归因继续采用已批准的 opaque/private receiver 机制，并证明 Home、Product、About 及其他共享消费者没有回归。

## 5. 返修与复验边界

Gate 8 只需修复 F01–F05，并回归本报告第 3 节已通过范围。返修必须提供新的精确 implementation/evidence HEAD/Build/runtime 身份和有效 Evidence Manifest；旧 Build 不得复用为返修通过证据。

本报告没有修改 D16 源码、提交表单、合并、push、部署、发布、DNS 或索引。Gate 8 收到退回通知后可以停止并释放本轮 32000 runtime；返修完成后再保持新的精确 runtime 供定向 Gate 9 复验。

## 6. 证据

- `docs/architecture/gate9-root-hero-seven-20260911/evidence-validation.json`
- `docs/architecture/gate9-root-hero-seven-20260911/preflight.json`
- `docs/architecture/gate9-root-hero-seven-20260911/independent-runtime-observation.json`
- Gate 8 Manifest：`D:\16Wordpress_nextjs\.worktrees\root-hero-seven-gate8\.tmp\root-hero-gate8-evidence\gate8_evidence_manifest.json`
- Gate 8 receipt：`D:\16Wordpress_nextjs\.worktrees\root-hero-seven-gate8\docs\verification\root-page-hero-seven\gate8\ROOT_PAGE_HERO_SEVEN_GATE8_RECEIPT_V1.0.md`

`ROOT-HERO-G9-INDEPENDENT-ACCEPTANCE-01 = RETURN / GATE8_REPAIR_REQUIRED`

`Gate 10 / merge / deployment / publication / DNS / indexing = NOT_AUTHORIZED`
