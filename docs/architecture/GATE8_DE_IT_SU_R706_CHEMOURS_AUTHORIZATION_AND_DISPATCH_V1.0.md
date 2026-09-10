# Gate 8 Germany / Italy / Sulfate / R-706 / Chemours Authorization and Dispatch V1.0

日期：2026-09-08。控制ID：`G8-DE-IT-SU-R706-CHEMOURS-20260908-01`。

## 1. 用户授权

用户明确要求把以下五个已经关闭Gate 6、处于`APPROVED_FOR_HANDOFF`的任务交给既有Codex任务“00my开发2”执行Gate 8。该授权覆盖读取精确交付包、开发实现、自检和形成可供Gate 9接收的交回证据。

## 2. 唯一输入

| Page ID | 页面 | 唯一Gate 6包 | Package ID | SHA-256 |
|---|---|---|---|---|
| `MARKET-EU-DE` | Germany | `pages/markets/germany/06_handoff/MARKET-EU-DE_GATE6_HANDOFF_PACKAGE_V0.2.md` | `MARKET-EU-DE-G6-HANDOFF-02` | `75e184dfe89d9acbbb28da100dc8271c7c1a84f89c85f71d11b5ca1bc4d885c2` |
| `MARKET-EU-IT` | Italy | `pages/markets/italy/06_handoff/MARKET-EU-IT_GATE6_HANDOFF_PACKAGE_V0.1.md` | `MARKET-EU-IT-G6-HANDOFF-01` | `2a21d8bea4c9647ec58a64a085c973ac8f42b159f603c9faa3439b00bae3c6af` |
| `PRODUCT-PROC-SU` | Sulfate Process | `pages/products/sulfate-process/06_handoff/PRODUCT-PROC-SU_GATE6_HANDOFF_PACKAGE_V0.1.md` | `PRODUCT-PROC-SU-G6-HANDOFF-01` | `343a220cb92d058a6c8914c4e30af405d619076b14ec96eb06a2e59ef0b7f192` |
| `RES-R706` | R-706 Alternative | `pages/resources/r706-alternative/06_handoff/RES-R706_GATE6_HANDOFF_PACKAGE_V0.2.md` | `RES-R706-G6-HANDOFF-02` | `6b94e44cd514edee1adb6ab09bd2d45950509cffd3c6282e79ca3cb05ebd110c` |
| `RES-CHEMOURS` | Chemours Alternatives | `pages/resources/chemours-alternatives/06_handoff/RES-CHEMOURS_GATE6_HANDOFF_PACKAGE_V0.2.md` | `RES-CHEMOURS-G6-HANDOFF-02` | `708568bb8c03585856a66e48fc9f98ec53a359564d697f021d5c613c2105bd9c` |

所有实现必须保持`site_scope=tio2-my`，遵守包内URL、正文、视觉、SEO/Schema、共享owner、Grade/产品关系、证据边界、Gate 9条件和开放依赖。不得跨scope fallback，不得从其他站复制未批准正文或扩张事实。

## 3. 交回要求

Gate 8应逐页提供代码commit、证据commit、production build ID、准确运行入口、CMS/route/scope证据、三端视觉与交互证据、定向测试和完整测试结果、工作树状态及未满足依赖。五页可以在同一隔离候选中实现，但必须保持逐Page ID可追溯。

本授权不代表Gate 9通过，也不授权Gate 10、合并、部署、生产写入、发布、DNS或索引。D23只做接收、协调和只读验收，不修改D16代码或CMS。

## 4. 派发目标

- 目标任务：`00my开发2`
- Codex thread ID：`01a07e6a-546d-7532-aa06-02d2bffd5eed`
- 派发状态：`SENT / RECEIVED / GATE8_DEVELOPMENT_STARTED`
- 接收分支：`codex/de-it-su-r706-chemours-gate8`
- 接收base：`84db14ee35fe118415bff8327f202ee712e7599c`
- 接收记录：[V1.0](GATE8_DE_IT_SU_R706_CHEMOURS_DISPATCH_RECEIPT_V1.0.json)
