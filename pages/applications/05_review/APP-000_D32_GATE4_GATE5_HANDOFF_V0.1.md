# APP-000 D32 Gate 4 → Gate 5 唯一视觉交接入口 V0.1

2026-09-20；制作作者 `/root/app_gate4_execution`。
状态 `COMPLETE_VISUAL_FROZEN / READY_FOR_REVIEW`；生命周期 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`。

## 接收身份

Page `APP-000`，workset `APP-000-D32-G4-V0.1`，执行 dispatch 为 `.superpowers/sdd/2026-09-20-app-000-d32-gate3-to-gate8/task-4-brief.md`。原始授权、Gate 3 关闭与源组合由该 brief、`pages/applications/APP-000_D32_CURRENT_GATE_BASELINE_MANIFEST_V0.2.md` 和 `APP-000_D32_GATE3_TO_GATE4_HANDOFF_V0.1.md` 取得。

Gate 4 Agent V1.5 / 基线 Manifest V1.10 / 共同合同 V1.3 / 品牌应用 V0.5 / 全页构成 V0.5 / 布局交互验证 V0.8。唯一当前 authority_manifest 不改；本文不是第二个 Manifest。制作自检不替代独立审查。

以下工作集相对路径统一以 `D:/23MySec/pages/applications/04_planning/d32-gate4-v0.1/` 为根：

| 字段 | 精确入口 |
|---|---|
| input_index / 依赖 owners | `input-index.json`；批准文案/结构、品牌/CTA、RootPageHero、Global Chrome/法律区、生产 Logo、Home 身份均指向原件 |
| 设计/源码入口 | `application-visual.html` + `visual.css`，实际内嵌共享样式/脚本与 Gate 3 相同；外部 Inter/SVG 等见 `source-lock.json` |
| source_identity | HTML SHA `1575cfed2fd93857a4ad0a49421099cef24ed34cc22e78cf49dad7c0f69c3cb4`；CSS SHA `1393717126ededfceac9f44e6d66b62376104433cd6dc5959275471d5357088a` |
| bundle_id | `sha256:8275ccefa106ffca6186651b705f9a77bee9fe2a17a90981a3ecd2182a5ad618` |
| freeze | `freeze.json`，30 成员；只读，变更不得覆盖 |
| evidence_index | `evidence-index.json` + `formal-render.json`；14 张正式图逐张映射源锁、宽、状态、DPR、尺寸、bytes、SHA |
| 视觉规则 / 4A | `4A-direction.md`，VISUAL_DIRECTION_CHECKED；实际规则为 `visual.css` |
| self-check / CAPTURE_CHECK | `runtime-observations.json` 120/120，`supplemental-observations.json` 15/15；`preflight.json`；`capture-check.md` PASS |
| 完整执行报告 | `D:/23MySec/pages/applications/05_review/APP-000_D32_GATE4_EXECUTION_V0.1.md` |

## 查看、复核与边界

直接用 Chromium 打开 `D:/23MySec/pages/applications/04_planning/d32-gate4-v0.1/application-visual.html`。无需服务、build 或第三方网络；须保留 D23 相对目录以加载共享 Inter/生产 SVG。实际渲染浏览器为 Playwright Chromium 151.0.7922.34，DPR1，1000px 逻辑 viewport 高度，reduced-motion；五宽 1440/1024/768/390/320 均为原生 PNG。该 Windows 本机路径不是跨机器已验证的可用路径；换机需完整保留输入/依赖关系。

本机脚本依赖 `C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright`；可读切片另用同目录的 sharp。不得为审查重造平台。无 browser/依赖时先报告环境缺项，不伪称运行成功。身份复核只需 Node 标准库：

`node pages/applications/04_planning/d32-gate4-v0.1/finalize.cjs --verify`

实际复核 PASS：135 项结果有效，14 正式资产，0 identity drift。不要运行会写回冻结记录的制作脚本；必要交互可在只读原型中运行。四个本地状态通过 `window.appPlanning.setScenario('full'|'grade-only'|'application-only'|'none')` 观察，均为 `LOCAL_PLANNING_SIMULATION_ONLY`。五个应用动作 owner Page ID/注册路径继承批准源，不表示对应页面已上线。

正式批准核心含五个完整页（1440/768/390 必备，1024/320 同时保留），三张变化 route 全页、Menu390、Cookie390/320、focus390/768、hover1440。长页可直接以原尺寸查看 PNG 或按 `capture-check.md` 的偏移使用 `inspect-image.cjs` 只读输出原宽切片；不要将缩略图当完整核验。四张 4A 样例和 RED JSON 为诊断，排除在正式批准图片之外。

## 开放项与审查派发字段

必修 Finding `[]`；无 Gate 4 未完成宽度/状态，无纯视觉审批冲突。未测范围和后续 D32 owner/接受条件见执行报告末节：生产链路、实体设备/原生 zoom/AT、其他浏览器不冒充通过；本阶段已完成逻辑重排、正文放大、实际本地键盘行为。没有 FAQ/Process/表单状态可审，不得从历史计划恢复。

本次为首审，`review_stage=GATE5_INDEPENDENT_VISUAL_REVIEW`，不是另一轮 Gate 4 内部最终审查。审查 dispatch_id、实际 Reviewer/独立性、可写报告/必要证据路径由总控另行明确；不得把本制作作者当独立 Reviewer。Reviewer 只读冻结原件，输出准入核对+同一次独立审查报告，止于 REVIEW_PASS / CHANGES_REQUIRED / INPUT_INCOMPLETE / FAILED；不自行关闭 Gate 4。无触发缺陷时不要求复制完整资产或重拍有效图片。总控再按常设授权关闭同一组合一次。

当前无复审增量。发现缺陷由执行者创建明确新修订源/索引/组合，沿用未变有效原件并标记受影响回归；不得原地更改本 freeze。
