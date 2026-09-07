# Shared Global Chrome Gate 3 Consumer Manifest V0.2

## 1. 身份与状态

| 项目 | 当前值 |
|---|---|
| Package ID | `TIO2MY-GATE3-SHARED-CONSUMER-002` |
| site_scope | `tio2-my` |
| 状态 | `PROJECT_CONTROL_VALIDATED / ACTIVE_FOR_FUTURE_GATE3_TASKS` |
| 用户来源 | 2026-09-07用户批准Gate 3 V0.2六项修订并要求测试V0.2；RES-CHEMOURS正式冻结前硬预检发现共享交互色偏差 |
| 适用范围 | D23 Gate 3本地规划源的Header、Footer、Mobile Menu与Cookie Settings组装 |
| Previous package | [V0.1](../gate3-shared-consumer-v0.1/SHARED_GLOBAL_CHROME_GATE3_CONSUMER_MANIFEST_V0.1.md)，完整保留 |
| 不包含 | 生产代码、Global Chrome新owner版本、页面正文、Gate授权、部署或发布 |

本包是页面中立的规划消费来源。事实和规则权威仍是[Global Chrome V0.5](../GLOBAL_HEADER_FOOTER_SPEC_V0.5.md)、[CTA增补V1.0](../../../brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md)、[生产Logo Manifest V1.0](../../../brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md)、[Footer法律增补V1.0](../GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md)、[法律当前Manifest V1.3](../../../pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md)和[共享Consent V1.1](../../../pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md)。本包不得覆盖这些owner。

## 2. V0.2修正

RES-CHEMOURS诊断候选在进入正式渲染前发现两处同类偏差：V0.1的Cookie Close/Cookie Policy文字与边框、Mobile Menu按钮边框都位于白色表面，却使用Navy `#062b5b`。后批准的CTA增补V1.0要求浅色表面的普通链接、焦点与交互边框使用Teal `#008078`。该问题归因于共享消费层，候选因此未冻结，正式导出保持0。

V0.2把`.cookie-actions > *`的文字与边框、`.menuButton`边框改为`#008078`。Menu标签仍按现行文字颜色使用Navy；焦点环继续使用`#008078`。Header、Footer、菜单行为、Cookie文案、字体和业务页面正文均未改变。该变更不回写V0.1，也不修改已批准的Poland或Chloride冻结源。

## 3. 当前包

[consumer-package.json](consumer-package.json)是机器可读入口，2,409 bytes，SHA-256 `1148a05fa12fdbf038f456a1cf40d3c1cf3f1c967fae1384616342faaa2fdf50`。它列出8项文件及各自SHA-256、六个owner入口、三个必传参数和七个允许的一级当前导航Page ID。

核心生成器为[render-shared-chrome.cjs](render-shared-chrome.cjs)。页面构建任务必须传入：

- `currentPageId`：七个一级导航Page ID之一；
- `primaryLogoSrc`：当前生产Manifest批准的浅色表面Logo实际路径；
- `reverseLogoSrc`：当前生产Manifest批准的深色Footer Logo实际路径。

生成器返回Header、Footer、Cookie dialog、共享CSS和行为脚本。页面构建器可在生成时嵌入返回内容；业务正文和页面专属CSS由页面源负责。本包不包含任何业务页正文，也不引用`pages/{business-page}`或`99_workspace`作为运行依赖。

## 4. 运行契约

- Desktop Header 84px；Tablet/Mobile Header 64px；断点为1101px进入Desktop导航。
- 当前一级导航只在当前可见导航表面出现，Footer不显示当前状态，也不显示买家可见`CURRENT`。
- 移动菜单打开后Menu→Close，首焦点进入Home，背景和固定Header操作被`inert`，body滚动锁定；Escape、选择链接或进入Desktop断点均关闭并恢复背景。
- Cookie Settings消费`no_optional_analytics`最小内容；Close首焦点，焦点在Close与Policy链接间循环，关闭后返回Footer触发器。
- 可见共享控件至少44×44；功能交互、浅色表面的交互文字/边框和焦点使用当前Teal合同，深色Footer焦点使用白色。

页面Agent仍须在当前冻结组合中实际核验共享行为，不能仅因本包已验证而自动写PASS。owner合同发生变化时先评估和升级本包；已批准页面不自动重生成。

## 5. 独立验证

验证脚本与原始结果保存在`D:/23MySec/99_workspace/gate3-v02-validation/shared-consumer-v0.2/`，属于诊断支持。[结果JSON](../../../99_workspace/gate3-v02-validation/shared-consumer-v0.2/shared-consumer-validation.json)为7,778 bytes，SHA-256 `373993fb476f86d454600c75d0a4b99ae4f9a9fa7547a6eb8ed099b05f477683`；[验证脚本](../../../99_workspace/gate3-v02-validation/shared-consumer-v0.2/validate-shared-consumer-v0.2.cjs)为8,059 bytes，SHA-256 `4417f30a235b8f15482f81aadc667501ad84c3f7a30cafbca46996d40eed11bf`。

最终运行覆盖七个当前导航参数和1440、768、390三个视口，共52项运行/静态断言、失败0。新增断言在三个视口逐一读取Cookie两个操作的computed color与border color，并在768/390读取Menu按钮computed border color，均为`rgb(0, 128, 120)`。8项包文件和6个owner路径也由同一结果重新读盘核对，缺失0、hash偏差0。

该结果证明当前规划包的身份、本地行为及本次颜色修正，不证明生产Global Chrome或任何页面已经实现。

## 6. 版本与使用

后续获授权Gate 3任务从本Manifest和`consumer-package.json`开始，禁止从最近完成的业务页面复制共享组装。页面可以保留生成时快照以冻结批准组合，但其`origin`必须指向本包和owner合同。

V0.1作为修正前历史完整保留。Agent V0.2与响应式线框Skill V0.2只更新当前共享包指针，其方法合同不变；修正前文件另存历史。RES-CHEMOURS必须从V0.2重新生成候选并重跑完整硬预检，不能沿用V0.1候选的冻结身份。
