# Shared Global Chrome Gate 3 Consumer Manifest V0.1

## 1. 身份与状态

| 项目 | 当前值 |
|---|---|
| Package ID | `TIO2MY-GATE3-SHARED-CONSUMER-001` |
| site_scope | `tio2-my` |
| 状态 | `PROJECT_CONTROL_VALIDATED / ACTIVE_FOR_FUTURE_GATE3_TASKS` |
| 用户来源 | 2026-09-07用户明确要求“建立页面中立的共享组件消费来源”并授权V0.2定向修订 |
| 适用范围 | D23 Gate 3本地规划源的Header、Footer、Mobile Menu与Cookie Settings组装 |
| 不包含 | 生产代码、Global Chrome新owner版本、页面正文、Gate授权、部署或发布 |

本包是页面中立的规划消费来源。事实和规则权威仍是[Global Chrome V0.5](../GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[CTA增补V1.0](../../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md)、[生产Logo Manifest V1.0](../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)、[Footer法律增补V1.0](../GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)、[法律当前Manifest V1.3](../../../pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md)和[共享Consent V1.1](../../../pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md)。本包不得覆盖这些owner。

## 2. 当前包

[consumer-package.json](consumer-package.json)是机器可读入口，2,310 bytes，SHA-256 `f955c5f32bf175a4a19fee45e5025d83c604dee29b1e282499f528abc9581cd3`。它列出8项文件及各自SHA-256、六个owner入口、三个必传参数和七个允许的一级当前导航Page ID。

核心生成器为[render-shared-chrome.cjs](render-shared-chrome.cjs)。页面构建任务必须传入：

- `currentPageId`：七个一级导航Page ID之一；
- `primaryLogoSrc`：当前生产Manifest批准的浅色表面Logo实际路径；
- `reverseLogoSrc`：当前生产Manifest批准的深色Footer Logo实际路径。

生成器返回Header、Footer、Cookie dialog、共享CSS和行为脚本。页面构建器可在生成时嵌入返回内容；业务正文和页面专属CSS由页面源负责。本包不包含Poland、Chloride或其他业务页正文，不引用任何`pages/{business-page}`或`99_workspace`作为运行依赖。

Inter字体与OFL许可证作为共享规划资产保存在本目录，hash分别为`29160a80…59031`与`5b9321a4…58c57`。二者与两个已批准页面使用的字节相同；今后页面不需再从业务页面复制字体。

## 3. 运行契约

- Desktop Header 84px；Tablet/Mobile Header 64px；断点为1101px进入Desktop导航。
- 当前一级导航只在当前可见导航表面出现，Footer不显示当前状态，也不显示买家可见`CURRENT`。
- 移动菜单打开后Menu→Close，首焦点进入Home，背景和固定Header操作被`inert`，body滚动锁定；Escape、选择链接或进入Desktop断点均关闭并恢复背景。
- Cookie Settings消费`no_optional_analytics`最小内容；Close首焦点，焦点在Close与Policy链接间循环，关闭后返回Footer触发器。
- 可见共享控件至少44×44；功能交互与浅色背景焦点使用当前Teal合同，深色Footer焦点使用白色。

页面Agent仍须在当前冻结组合中实际核验共享行为，不能仅因本包已验证而自动写PASS。owner合同发生变化时先评估和升级本包；已批准页面不自动重生成。

## 4. 独立验证

验证脚本与原始结果保存在`D:/23MySec/99_workspace/gate3-v02-validation/`，属于诊断支持。最终[shared-consumer-validation.json](../../../99_workspace/gate3-v02-validation/shared-consumer-validation.json)为3,491 bytes，SHA-256 `c6db6537472ed2a2b10370ed33b5c8969114488b6d7bec02aab8d5c9b8e9ca62`。

最终运行覆盖七个当前导航参数和1440、768、390三个视口，共47项断言、失败0：Header高度、横向溢出、当前项所在表面、菜单断点、菜单打开/选择关闭/Escape/背景恢复/跨断点关闭，以及Cookie打开和焦点返回。前两次测试编排/预期问题如实保存在[验证历史](../../../99_workspace/gate3-v02-validation/VALIDATION_HISTORY.md)，没有被改写成共享包缺陷或静默删除。

`consumer-package.json`所列8个文件及六个owner路径均重新读盘核对，文件缺失0、hash不一致0。这个结果证明当前规划包的身份和本地行为，不证明生产Global Chrome或任何页面已经实现。

## 5. 版本与使用

后续Gate 3任务从本Manifest和`consumer-package.json`开始，禁止从最近完成的业务页面复制共享组装。页面可以保留包的生成时快照以冻结批准组合，但其`origin`必须指向本包和owner合同，而不是另一个页面。

本包变化时保留旧目录并建立新版本目录；不覆盖已批准页面的冻结依赖。当前V0.1只用于后续新任务或明确授权的返修，不回写Poland或Chloride Process已批准源。
