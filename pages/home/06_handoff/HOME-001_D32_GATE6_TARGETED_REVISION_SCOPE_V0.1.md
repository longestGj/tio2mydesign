# HOME-001 / Global Chrome：D32 Gate 6 定向修订范围 V0.1

日期：2026-09-20。状态：`DRAFT_SCOPE / NOT_INDEPENDENTLY_REVIEWED / NOT_HANDED_OFF`。

本文件是现有 Gate 6 包的修订范围分析，不是新交接流程、完整开发包、当前 Manifest 或 Gate 6 关闭记录。未修改批准源、D16 或 D32；未实施或派发开发。

## 1. 本轮用户决定与范围

来源为当前会话：用户选择 D32 新项目、保留 WordPress；首批首页及 Header/Footer，下一批产品集合页；采用固定设计、后台编辑内容；明确沿用现有 Gate 1–9 交接。当前授权工作是核对并整理 Gate 6 定向修订范围。

本批对象为 HOME-001 `/` 及共享 Header/Footer/Menu。固定设计与可编辑内容属于已确定方向，具体字段、存储、主题及插件选型归 Gate 8。其他页面、表单接收服务及产品集合页不因此进入本批开发。

## 2. 依据及有效范围

- [首页当前入口 V1.6](../HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.6.md)及其继承链：历史批准和开发结果来源，不表示 D32 已通过验收。
- [原 Gate 6 包](HOME-001_APPLICATIONS_ALIGNED_GATE6_HANDOFF_PACKAGE_V1.0.md)与[接受条件](HOME-001_APPLICATIONS_ALIGNED_GATE6_ACCEPTANCE_AND_BLOCKERS_V1.0.md)：本次逐项适配对象；原包是 D16 presentation-only 变更，不能原样作为全新 WordPress 实现合同。
- [旧内容交付包](HOME-001_GATE7_HANDOFF_PACKAGE_V0.1.md)：只在当前组合继承的范围内使用正文、顺序和链接；不是恢复旧 Gate 7。
- [Global Chrome V0.5](../../../docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[Footer 法律区](../../../docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)：共享呈现与行为来源。
- [Hero 开放白底增补](../../../docs/architecture/ROOT_PAGE_HERO_OPEN_WHITE_SURFACE_ADDENDUM_V1.0.md)：覆盖旧包外层边框/卡片表述；保留内容、照片和 CTA。
- [透明菜单背景决定](../07_qa/HOME-001_GATE9_MOBILE_MENU_BACKDROP_USER_DECISION_V1.0.md)：透明 backdrop 已接受，不重新要求加暗；键盘、焦点及模态行为仍继承。
- [Gate 6 执行合同](../../../docs/architecture/GATE6_EXECUTION_REVIEW_CONTRACT_V1.1.md)及[Gate 8→9 合同](../../../docs/architecture/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md)：沿用阶段、独立性、接受条件和证据交接。

## 3. 原接受条件的定向处理

沿用 HOME-VU-A01..A12，修订时记录版本和差异，不另编一套竞争清单。

| 原 ID | 保留的结果要求 | D32 必须适配的条款 |
|---|---|---|
| A01 | 批准正文、模块顺序、URL、型号顺序、单一 H1，无内部信息泄露 | 以批准内容与实际 WordPress 输出比对，替代 D16 CMS JSON 文件前后不变；新增后台编辑内容的验证 |
| A02 | 品牌色、1200px 网格、页面层级和既有视觉 | 移除 React/CSS Module 实现假设；Hero 例外按最新增补 |
| A03 | 原材料照片、装饰性 alt、两项 CTA 和响应式关系 | 原文“rounded bordered outer surface”已被白底增补覆盖，不按旧截图恢复外框和绿色竖线 |
| A04 | Start Here 的位置、三个入口及各宽度布局 | 继承结果，不规定前端框架 |
| A05 | 四组十四型号、顺序、工艺表达和移动展开行为 | 技术数据存储由 Gate 8 决定；首批承接首页已批准清单，不扩大到产品集合页或详情页 |
| A06 | 页面 RFQ 在 768px 及以上显示，390/320 隐藏；共享 RFQ 保留 | 保留 CTA 模块性质，不将它误作本批需开发的真实表单 |
| A07 | Header/Footer/Menu 唯一共享实现、导航、尺寸、Logo、法律按钮 | 将“只能消费现有 D16 组件/禁止改共享代码”改为本批建立 D32 共享实现；后续页面复用；原资产可受控复制并核对字节，不能要求 D32 依赖 D16 路径 |
| A08 | 原五宽度及布局完整性 | 保留实际结果与适用证据，测试工具由开发适配 |
| A09 | 菜单、焦点、键盘、展开、触控尺寸及无障碍 | 继承透明背景决定；旧设备/读屏未测记录不能充当新实现通过证据 |
| A10 | 可见内容与元数据、canonical、语言、实体关系一致 | 用输出语义和批准源验证替代 D16 SEO 文件哈希不变；隔离测试环境不得机械输出生产 index,follow，需在包中明确环境条件 |
| A11 | Malaysia 网站内容、媒体、SEO、菜单等不混用其他站 | 保留隔离目标；WordPress 单站如何实现及证明归 Gate 8，不预设复制 D16 多站查询/缓存框架，也不直接删除现有 scope 要求 |
| A12 | 准确实现身份、回执、证据、可访问候选及恢复说明 | 替换 D16 路径、任务 ID、Next Build 标识与旧运行地址；在既有 Manifest/预检接口内明确 WordPress 候选身份，不能伪造 Next Build ID 或跳过预检 |

## 4. 包章节与依赖同步

原包 §0/§4/§5/§8/§9 需要适配项目身份、开发范围、技术约束、测试命令和证据。§6/§7 保留结果要求并合并最新 Hero/Menu 决定。原“冻结 CMS/SEO/共享代码”“禁止 CMS 模型变更”只适用于旧视觉返修，不适用于本批新建。

沿用原依赖 ID，修订含义及依据：DEP-01 改为 D32 实际仓库/环境身份核对；DEP-02 保留内容与视觉来源固定、允许新技术映射；DEP-03 继续登记其他页面链接依赖；DEP-04 保留新候选独立 Gate 9；DEP-05 保留另行发布授权。D16 旧回滚版本保留历史，不标成 D32 可执行回滚。

首批首页链接目标尚未开发，不增建占位页、不改链接、不推导统一隐藏策略。按原 DEP-03 记录实际缺口及对应 owner；不影响允许开展的首页开发，未满足的必验条件不得签整体通过。

Cookie Settings 已是共享功能要求，需交接实际偏好界面、关闭/焦点返回与持久化语义的批准来源。当前已读 Footer 增补不足以定义完整 Consent Manager；正式包还需核对其现行共享合同，不能自行发明同意类别或启用分析脚本。

## 5. 后续正式修订的必要动作

1. 从首页 Manifest 补齐完整 Brief、Playbook、正文/SEO 后续决定、共享 Hero、Logo/字体/媒体和 Consent Manager 的适用来源；本次不是整页准入或冻结资产完整性审查。
2. 在现有 Gate 6 包结构内完成 D32 适配版：引用原件、写清上述差异与责任，沿用接受条件 ID；不复制第二份正文或新建页面 Manifest。
3. 与 Gate 8/9 接口 owner 定向核对现有 evidence Schema 和预检的 WordPress 适配。Schema 当前要求 build.directory/build_id/implementation_commit，runtime.require_build_marker 默认 true；本轮仅识别依赖，未修改 Schema 或预检，未证明兼容。
4. 新增/修改的映射由不同身份复核；总控按原常设授权和准入条件维护唯一 Manifest、关闭 Gate 6。旧包有效审查仅继承未变范围，不代替本次审查。
5. 按现有派发机制确认实际 D32 Gate 8 接收任务和回执；不向旧 D16 任务自动发送。开发完成后同一接受条件交 Gate 9。

## 6. 本轮检查与限制

方法：实际文档读取和条款对照。输出为修订范围草稿；没有视觉重制、运行测试、独立 PASS、阶段关闭或外发。原 D23 批准文件、状态和 Manifest 保持不变。正式修订尚须解决共享功能来源、环境索引条件及 WordPress 证据身份适配，不能把本文件直接视为开发就绪包。
