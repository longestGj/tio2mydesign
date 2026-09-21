# APP-INK Current Gate Baseline Manifest V0.12

日期：2026-09-21。唯一当前入口，接替V0.11；此前文件保留为历史。

| 字段 | 当前值 |
|---|---|
| Page / route | `APP-INK` / `/applications/titanium-dioxide-for-printing-inks/` |
| Gate 1–6 | 已批准组合、有效独立审查及Gate 6关闭保持 |
| Gate 8首轮候选 | `0c117ee0941a3b307f761ff0db5ea67fc98b5a07` / tree `9033cf746f14154fc6895ed0d1357fcabbea07fa`；未合并、未部署 |
| Gate 9首轮 | `NOT_PASS / TARGETED_REPAIR_AND_EVIDENCE_RETURN_REQUIRED`；报告`../07_qa/APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_INDEPENDENT_ACCEPTANCE_V1.0.md`，SHA-256 `fbcd392c9f955487eb399f3b767dc6975c5bd19795fe939ccb3ba0fec806db1f` |
| 已通过范围 | 页面静态路由、批准正文、Grade关系、响应式视觉、来源、SEO/Schema、robots/sitemap、Hub与共享回归 |
| 开放Finding | `APP5-D32-G9-F01`：缺V1.1制品Manifest且记录HTML哈希与当前out不一致；`APP5-D32-G9-F02`：Cookie模态框首尾Tab边界焦点落到BODY |
| 当前动作 | 已定向退回`03开发`；只需修复F01/F02并返回绑定后的精确候选；下轮Gate 9范围收窄至F01/F02、G9-05/11/12及通过项差异保护 |
| 用户豁免 | 真实设备、人工命名读屏、原生浏览器缩放：`NOT_TESTED / NON_BLOCKING` |
| Gate 10 / 发布 | `NOT_AUTHORIZED` |

旧D16、多站scope及Google实际收录均不属于本轮Gate 9本地判定。
