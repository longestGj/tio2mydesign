# APP-000 D32 Gate 4 — 完整视觉执行 V0.1

日期：2026-09-20。实际作者：`/root/app_gate4_execution`，Gate 4 执行子代理。

技术状态：`COMPLETE_VISUAL_FROZEN / READY_FOR_REVIEW`。
生命周期：`DRAFT_FOR_PROJECT_CONTROL_REVIEW`。未作 Gate 5 独立审查，未批准/关闭 Gate 4，未实施 D32。

## 身份与输入

- Page：APP-000，`/applications/`，EN，`site_scope=tio2-my`。
- Workset：`APP-000-D32-G4-V0.1`，`pages/applications/04_planning/d32-gate4-v0.1/`。
- 执行派发：`.superpowers/sdd/2026-09-20-app-000-d32-gate3-to-gate8/task-4-brief.md`；原始权限为用户批准连续计划，经总控本次派发执行 Gate 4。
- 当前权威：`pages/applications/APP-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md`。
- Gate 3 关闭：`APP000-D32-G3-PC-CLOSURE-20260920-01`；输入 bundle `sha256:dbc8e41f809388fae83fe5b75b2b8421e2aa808b68e0e8f54331b0b26645e41e`。原源/冻结包只读。
- 方法：Gate 4 基线 V1.10、Agent V1.5、共同合同 V1.3；品牌应用 V0.5、全页构成 V0.5、布局交互验证 V0.8；Gate3→4 V0.5、Gate4→Gate5 V1.0。
- 完整输入与共享依赖身份：工作集 `input-index.json`、`source-lock.json`。批准文案 B/C、关系增量、Brief、Playbook、品牌/CTA、RootPageHero、Global Chrome/法律区、生产 SVG、Home D32 证据均引用原件。

## 4A 决定及 4B 结果

同一工作集内完成 `VISUAL_DIRECTION_CHECKED`，详见 `4A-direction.md`。实际比较 Home D32 V1.12 引用证据（实现 a75572a36cc50e820b640fca663a3a60594029cb / 证据 HEAD 9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6）与 APP Gate 3 结构。

保留 Inter、1200px 网格、Navy/Teal、开放白底 Hero、浅灰/白分区、克制圆角阴影、共享 Header/Footer 和生产 Logo。APP 使用应用导航信息卡，不复制 Home 照片、业务模块、文案或密度。批准正文和动作 DOM 保持逐字相同，五模块、六集合、30 条关系（8/8/7/4/2/1）、三步、零 Process、零 FAQ 不变。无新事实、路由、责任归属或审批冲突。

| 宽度 | Hero / 集合 / 三步 / 采购列数 | H1 | 全页证据高度 |
|---|---|---|---|
| 1440 | 2 / 2 / 3 / 3 | 56px / 700 | 3794 |
| 1024 | 2 / 2 / 3 / 3 | 56px / 700 | 4106 |
| 768 | 1 / 2 / 3 / 3 | 44px / 700 | 4613 |
| 390 | 1 / 1 / 1 / 1 | 36px / 700 | 6756 |
| 320 | 1 / 1 / 1 / 1 | 36px / 700 | 7166 |

H1 均不超过三行；所有可见控制至少 44×44。无横向溢出、文案截断或省略。不可用牌号为中性非交互文字，无 pill/hover/focus/click 暗示。

## 执行与验证证据

先写 120 项断言并在 Gate 3 基线确认预期 RED（8 项视觉差异），再实施样式。正式源运行 `visual-assertions.cjs` 为 120/120 PASS；补充对比度、实际 hover/primary focus、六锚点、菜单点击关闭与桌面 resize 为 15/15 PASS。不是统一 validator 的虚拟结果，使用本工作集真实脚本与 Playwright Chromium 151.0.7922.34。

`INITIAL → preflight → source/dependency lock → formal render → CAPTURE_CHECK → identity verification → freeze` 已完成。`formal-render.json` 保留捕获时的 PENDING 事件；后续 `capture-check.md` 为正式捕获核对 PASS。4A 记录的诊断说明补充属于纯记录修正，preflight 已同步其身份，无视觉重拍要求。

实际运行覆盖五宽四个 route states（full / grade-only / application-only / none）、Menu、Cookie 的焦点进入/循环/退出/返回、锚点、focus；其他补充见运行 JSON。状态切换为 `LOCAL_PLANNING_SIMULATION_ONLY`，不代表 live-ready。未触发真实提交或联系生产端点。

正式 PNG 共 14 张：五个宽度完整页；Cookie 390/320、Menu 390；三张非 full route 全页（full 复用 390 完整页）；primary focus 390、grade focus 768、导航 hover 1440。全部实际打开，长页以原宽无缩放重叠切片逐段核对至 Footer；偏移和结果在 `capture-check.md`。4A 四张样例及 RED 结果仅为诊断，不列入正式批准图片。临时排错脚本已移除。

冻结前发现并关闭：浅青 hover 文字对比度由 4.3896:1 修为 5.7340:1；捕获等待两绘制帧消除 stale Skip-link 残影。后者确认是截图时序，不改变共享行为。最终正式图已复看，必修为空。

## 冻结身份

- Bundle：`sha256:8275ccefa106ffca6186651b705f9a77bee9fe2a17a90981a3ecd2182a5ad618`。
- `application-visual.html`：32821 bytes；SHA-256 `1575cfed2fd93857a4ad0a49421099cef24ed34cc22e78cf49dad7c0f69c3cb4`。
- `visual.css`：4317 bytes；SHA-256 `1393717126ededfceac9f44e6d66b62376104433cd6dc5959275471d5357088a`。
- `freeze.json` 绑定 30 成员；`evidence-index.json` 是正式证据入口。依赖/输入、图片尺寸/bytes/SHA、真实 DPR1 与源组合均已机器核验。
- 冻结后只读命令：`node pages/applications/04_planning/d32-gate4-v0.1/finalize.cjs --verify`。实际结果 PASS，135 项结果有效，14 资产，identity drift 0。

## 开放范围与停止点

Gate 4 必修 Finding：`[]`。无视觉待决或未完成的合同宽度/状态。未測且不伪称通过：原生浏览器 UI zoom、实体设备、屏幕阅读器、其他浏览器引擎；已做的是 200% 逻辑重排等效和正文放大压力检查。生产 route readiness、RFQ 接收/提交、optional consent 技术、WordPress/site scope 实现、SEO/发布运行时由后续 D32 Gate 8/9 在真实实现核验；依据任务 brief 和共同交接合同的阶段分工，不把规划模拟当实施成果。

仅请求总控派发同一组合的 Gate 5 独立审查。冻结原件不得原地修改；返修须新修订工作集。未改 Manifest/Status/Index、D32 或任何其他页面，未 commit。
