# DOC-000 Gate5 定向独立复验 V0.1

日期：2026-09-21。审查者：`/root/res_root_d32`，非候选作者。结论：**TARGETED_REVIEW_PASS**。范围仅为 `DOC-D32-G5-R01/R02`、精确返修边界与必要继承回归；不是 Gate 关闭、Gate6 启动、开发或生产验收。

## 1. 被审对象与实际身份

唯一返修入口：`pages/documents/04_planning/d32-gate4-v0.2/DOC-000_D32_GATE4_GATE5_HANDOFF_V0.2.1.md`。它将迟到的共享协调绑定加入既有 V0.2 组合，没有改写此前冻结或图片。

| 身份 | 独立重算结果 |
|---|---|
| 最终 bundle | `bd12263d164a68b97f0095b311f2dc092f5662342d7c4ebc7f4a53589c010ed9` |
| freeze-return.json SHA256 | `5db8a438c1f60776d53e243a9223075415e07b50c7965582ad5dff325b76f722` |
| HTML | `2fa09d30d87870645752cde4f085d5113b63c97ef333534d184416d8cb6f0723` |
| CSS | `cffdd929cffb9446319ab3ca39426e4fc1659be993cfff76f01e4a72d0d2ce03` |
| behavior JS | `c689d037e2592ba2d743972856bc4f6ae0d76783c1eda9d01f92ac492df1674e` |
| 批准决定 SHA256 | `6ff4253b56936ccf9838f27d7532053a501de82aec99b9ab1518b38de667f1a9` |

核对最终79项、原 V0.2 快照76项、V0.1原冻结74项、source-lock23项，以及43张有效新/继承图片，共295条身份记录，全数匹配字节数和 SHA256。三个 bundle 均按各自 `SHA256(UTF8(JSON.stringify(files)))` 重算一致。测试后再次校验当前79项未变。

HTML、JS 与 V0.1 字节完全相同。CSS 仅附加已批准的 `<=340px` 页面反馈区两行预留；无 Hero、共享 Chrome、标题、字距、padding、链接或行为变化。正式决定与作者锁定身份一致。

## 2. Finding 处置

### DOC-D32-G5-R01 — ADDRESSED

依据 `docs/architecture/ROOT_PAGE_NARROW_VISUAL_AND_DOC_FEEDBACK_DECISION_V1.0.md`，决定 `ROOT-NARROW-VISUAL-20260921`，状态 USER_APPROVED / ACTIVE / DESIGN_CONTRACT_ONLY，§2 明确仅 DOC / 320px 自然四行例外。

实际320 H1保持全文 `Documents for Product & Supplier Qualification`、36px / 700 / 四行，未缩写、缩字或改变共享几何。原 Finding 是缺少批准，而非裁切或遮挡；该授权缺口已由有效用户决定解决。1024及其他断点不得继承320例外。390既有批准范围不扩张。

### DOC-D32-G5-R02 — ADDRESSED

决定§4批准 `<=340px` 两行错误反馈预留。独立浏览器实测初始→空选报错→M-2196有效选择→清空四态：

| 宽度 | 四态 Continue document Y（四态相同） | 反馈区高度 | 最大位移 |
|---:|---:|---:|---:|
|1440|876.203125|24|0|
|1024|944.96875|24|0|
|768|1185.4375|24|0|
|390|1282.828125|24|0|
|341|1377|24|0|
|340|1398.46875|46.1875|0|
|320|1434.671875|46.1875|0|

旧320初始1412.484375→报错1434.671875的22.1875px跳动已消除。完整错误文案 `Select a product grade to continue.`、14px/23.1px、原红色、焦点返回原生 select、aria-invalid / aria-describedby、无导航错误状态均保持。有效选择确认、清空后的中性状态、14个 grade-only Continue/closing 目标、空选 closing 聚焦、已打开FAQ状态全部通过。未见横向溢出、反馈裁切/重叠或小于44px的目标。

## 3. 有效覆盖与图片继承

运行独立脚本 `pages/documents/05_review/d32-gate5-targeted-v0.1/targeted-audit.cjs`：**226/226 assertions PASS**，退出码0。它只写审查者目录；未执行任何作者生成/捕获脚本，未修改候选。

- 七宽包含五个必需宽度及340/341边界；28个四态观测；98个 grade-target 对照。
- 对比新旧页面全部 main 元素：>340px几何逐项相同；320/340仅反馈高度、祖先高度及正常文流下移22.1875px，文字/宽度/其余尺寸不变。
- 七张新图（六正式、一可读支持）逐张实际打开；PNG尺寸/字节/SHA/DPR核对。14正式和22可读继承图保留原身份。合计20适用正式图，覆盖五宽及必要状态；不是将新CSS冒充旧截图来源。
- 原独审 `DOC-000_D32_GATE5_INDEPENDENT_REVIEW_V0.1.md` 的410有效通过覆盖，可按上述对象/条件映射继承，包括批准正文与结构、SEO title、三scenario/四group/14grades/六FAQ、共享家族/Chrome、Buyer Clean、menu/cookie/FAQ操作。它们不是本轮新跑410项。旧320图片只承担未变内容/组件形态；当前全局坐标由新full320和四态/flow图负责。
- 原18张正式图中的 FULL320/ERROR320/SELECTED320/ERROR390已由本轮组合替代；旧冻结74项仍完整，不删除或回写。

作者401项声明与 reviewer226项明确区分。审查脚本首次因将 superseded 文件名数组当图片记录而中止，修正仅发生在审查者脚本；最终完整运行226/226，未造成候选变化。

## 4. 共享与生命周期边界

V0.2.1已登记总控的共同Eyebrow协调值及DOC既已单行、不添加私有override的定向说明；本次没有将其他页的projection值写进DOC，也不把DOC当前值宣称为四页共同新默认。后续共享实现由owner按批准结果合同处理，不能以本报告为共享代码分叉授权。

当前静态单站决定优先于旧D32/WordPress/CMS历史说明。原文件名只作lineage追溯。未进入任何开发仓库，未测试接收器/真实提交/部署/Google索引，也未把这些后置依赖当本关设计缺陷。

**New breakage：NONE OBSERVED。R01/R02均ADDRESSED。无本轮未关闭的必修Finding。** 将本报告交总控处理阶段关闭；本审查者不关闭Gate、不改变Manifest/Status/Index、不进入Gate6。

## 5. 可复核证据

- `pages/documents/05_review/d32-gate5-targeted-v0.1/targeted-audit.cjs` SHA256 `a4c7d71ba43ea537b741cfb4c56f97e34b959a43d6537a354237a1d7251e69ab`
- `pages/documents/05_review/d32-gate5-targeted-v0.1/observations.json` SHA256 `37a019f929bfa82f8c82294a9680edf526094a35e9513dd4261deb2d26aceabc`
- 同目录 `visual-observations.md`：七张新图的实际观察与缩图限制。
- 原独审报告 SHA256 `642db2d758bab2f1be43728562f84f0ba5b7391546605c2c39bdcc6b9a0edd82`，作者返修报告 `.superpowers/sdd/2026-09-21-four-root-pages-d32-gate3-gate9/doc-gate4-fix-r1-report.md`。
