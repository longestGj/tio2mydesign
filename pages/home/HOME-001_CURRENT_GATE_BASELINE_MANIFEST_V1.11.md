# HOME-001 Current Gate Baseline Manifest V1.11

日期：2026-09-20。首页唯一当前入口；继承[V1.10](HOME-001_CURRENT_GATE_BASELINE_MANIFEST_V1.10.md)批准组合与D16历史。新增事实仅为用户授权D32 Gate9首次独立验收及以下结果。

| 字段 | 当前事实 |
|---|---|
| 页面/目标 | HOME-001 `/`；`D:/32Wordpress_new`；scope=tio2-my |
| Gate6 | V0.2包 APPROVED/CLOSED，批准组合不变 |
| 外部开发 | 00首页开发已交回精确候选；HANDED_OFF=YES |
| implementation | `a75572a36cc50e820b640fca663a3a60594029cb` |
| evidence HEAD | `9de5ef0e3409daf9c9cb675efb26f54d7c7ba6c6` |
| WP制品 | `wp-f576fa2d7a74ab057e5878765db4187ae7b2689aaf921f8c5d6f5ab0bac6fc3e` |
| 内容SHA | `ee6a324ea68ada21e9424f930ed52f87800cea9e982c0feb4fd9ef456b71a992` |
| 运行地址 | `http://127.0.0.1:8232/` |
| RECHECK_SCOPE_STATUS | INITIAL_REVIEW_COMPLETE / VERIFIED_SUBSET_PASS / A09_EVIDENCE_INCOMPLETE |
| PAGE_GATE9_STATUS | NOT_PASS / REQUIRED_EVIDENCE_REMAINS；未关闭 |
| INTEGRATION_STATUS | NOT_READY / 24目标依赖 |
| RELEASE_STATUS | NOT_AUTHORIZED |
| 当前实现必修 | 0；不请求无针对性代码返修 |
| 当前证据Finding | HOME-D32-G9-VF01 OPEN：物理AT、物理触控、原生UI200% |

唯一综合结论：[首轮独立验收](07_qa/HOME-001_D32_GATE9_INDEPENDENT_ACCEPTANCE_V0.1.md)。原验收条件不变：11项通过（含证据限定），A09浏览器部分通过但必要证据未验证。来源/机器/截图与三方专业报告均由综合报告导航；不以局部结果签页面通过。

原DEP-01/02对该候选有独立证据；DEP-03外部页面、DEP-04整体Gate9、DEP-05发布继续开放。用户若对VF01采用范围例外须明确记录，本入口不自行豁免。后续只补缺失证据或对实际变更定向复验，不重做未变批准设计。

本轮依现有Gate9角色向原开发任务发分项结论/补证通知，消息回执见 `07_qa/HOME-001_D32_GATE9_NOTICE_V0.1.json`。开发方不能据此合并、push、发布或执行包外页面。旧D16生产/验收历史仍按专题源解释，不被此记录重写。
