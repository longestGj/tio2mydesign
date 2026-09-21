# APP-000 D32 Gate 3→8 控制记录 V0.1

## 1. 决定与对象

| 字段 | 值 |
|---|---|
| Page ID / route | `APP-000` / `/applications/` |
| Language / scope | `EN` / `site_scope=tio2-my` |
| 当前开发归属 | `D:\32Wordpress_new`（D32） |
| D23职责 | Gate 3结构、Gate 4完整视觉、新Gate 5独立审查、Gate 6开发交付规格与只读接收 |
| Gate 8执行任务 | `03开发` / `01a0be2a-838b-76c0-b116-6677b9cadb70` |
| 记录日期 | 2026-09-20 |
| 状态 | `USER_APPROVED / GATE3_IN_PROGRESS` |

用户决定保留APP-000已批准Gate 1–2，从Gate 3重新制作；完成Gate 3、Gate 4、独立Gate 5和Gate 6的有效审查与关闭后，再由既有任务`03开发`在D32执行Gate 8。用户同时要求APP页面视觉与当前D32首页保持同一产品家族。

本决定取代本轮先前考虑的“直接准备Gate 6”路径。该先前路径未制作、未关闭、未派发，也未修改D32代码。

## 2. 执行顺序与授权边界

唯一顺序为：

`Gate 1–2 approved inputs → Gate 3 restart → Gate 4 complete visual → new Gate 5 independent review → Gate 6 D32 handoff → 03开发 Gate 8`

- Gate 3、4、6按当前项目工作流、独立审查和总控常设关闭授权执行，不跳Gate。
- 新Gate 5是Gate 4冻结组合的唯一最终独立内容/视觉审查，不增加重复批准轮次。
- Gate 8外发授权仅在Gate 6独立审查通过和总控关闭后生效。
- Gate 9、Gate 10、PR/push/merge、部署、DNS、索引和发布不由本记录授权。
- `GRADE-M350`和其他页面不属于本控制记录，不得修改其状态或任务。

## 3. 内容与事实冻结

APP-000继续消费以下已批准Gate 2输入，不重做Gate 1–2：

| 角色 | 路径 | SHA-256 |
|---|---|---|
| Buyer Clean全文 | `pages/applications/04_planning/APP-000_GATE2_FULL_BUYER_CLEAN_COPY_V1.0.md` | `c57db3f8e1afb9b4d33a1498843cf8228b7faddeccdaa79c7e6a6d76c1a234b1` |
| 内容合同 | `pages/applications/04_planning/APP-000_GATE2_CONTENT_CONTRACT_V1.0.md` | `6f7ef60c6bc6cbe5398f9f1cf4e2e713fcfb48ce65bc28fe49d699ca61b26f6e` |
| PRODUCT V0.3关系增量 | `pages/applications/04_planning/APP-000_PRODUCT_V0.3_RELATION_CONTENT_DELTA_V0.1.md` | `c5a0c4f96e1bd5411c4e1ec3b488901cebbb1adb894e06b46e3670817c34a308` |

完整输入身份见`pages/applications/04_planning/d32-gate3-v0.1/input-identities.json`。`APP-000_CURRENT_GATE_BASELINE_MANIFEST_V1.12.md`及其D16实现/验收身份仅保留历史追溯，不证明D32已实现APP-000。

## 4. “与首页视觉一致”的锁定解释

一致范围：

- 同一共享Header、Footer、Mobile Menu、Cookie Settings和生产Logo；
- 同一1200px主网格、Inter字体、Deep Navy标题、Malaysia Teal功能动作；
- 同一开放白底`RootPageHero`，无整个Hero外框、渐变、圆角、阴影或左侧装饰线；
- 同一按钮、焦点、留白、白色/浅底表面节奏和响应式质量；
- 正式宽度1440/768/390，Gate 4及Gate 8补测1024/320。

不一致范围：不得复制首页照片、正文、业务模块、模块顺序或页面密度。APP保留`hub-light`信息卡、六个应用集合、关系内容、步骤、工艺分类、采购路径、问答及最终RFQ。Gate 3记录结构关系，最终列数、视觉参数和响应式布局由Gate 4决定。

## 5. 当前停止点

当前只启动D23中的Gate 3策划执行。D32生产开发仍为`NOT_STARTED`；在Gate 6关闭前不得给`03开发`发送开发包。D23不修改D32代码。
