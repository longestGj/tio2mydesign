# MARKET-IN-001 Gate 4 独立复审 V1.1

日期：2026-09-07。独立审查人：`/root/gate4_review_a`，与执行者不同。最终结论：**PASS — IN-G4-IR01–05 均满足原接受条件；无剩余 required finding。** 本结论仅适用于下列最终冻结组合，不是用户批准、Gate 4 关闭或 Gate 6 授权。

## 最终对象与过程留痕

- 当前页面入口：`D:/23MySec/pages/markets/india/MARKET-IN-001_CURRENT_GATE_BASELINE_MANIFEST_V0.9.md`。
- 工作集：`IN-G4-WORKSET-V11R2`；冻结：`IN-G4-V11R2-SOURCE-01`。
- 源：`D:/23MySec/pages/markets/india/04_planning/gate4-v1.1/MARKET-IN-001_GATE4_COMPLETE_VISUAL_V1.1.html`，29,205 bytes，SHA-256 `fbad54492a465484a7a4eac05e5a402a8d399722b79d814b369d70a9c6032efe`。
- 唯一工作集/证据索引：同目录 `approval_core/export-inventory.json`，SHA-256 `88997c03cd3eee538ae76789c3f7b1b8b1b947b174ceaeae6b91549cc75aa555`。
- 接受条件沿用独立 V1.0 报告，SHA-256 `f705c2a570018e2a86c4dc32f66882a1c3362b10ee02287bcca1a485f5ee5ec0`。原报告与 V1.0 候选未由本审查修改。当前方法仍为合并完整 Gate 4，非旧代表样例范围；未扩张到其他页或生产验收。

首次收到的 V1.1 源 `2d127147…11631d`（29,218 bytes）在本轮独立检查中仍未通过 IR03：实际焦点薄荷底只有 4.239784:1，并新增句号前空隙。已先通知总控，未将作者 PASS 当作通过。总控随后明确通知改用最终源并重建 R2 冻结身份。旧观察及机器结果保存在本目录 `interim/`，不作最终通过证据。最终三端已重新运行，最终全页图与全部 17 段已重新读回。此报告没有抹去中间失败。

## 五项裁决

| Finding | 独立复验结果 | 裁决 |
|---|---|---|
| **IN-G4-IR01** 响应式关系 | IN-02 和 IN-05 实际 `display:block`，恢复标题/正文、列表→人工后续说明→行动的线性关系。1440 的三应用并列；768 恢复一行一对象，标题列 175px、正文列 505px；390 为单列、卡片内部 block。实图长文完整、关系及行动顺序正确。CSS 残留但不生效的 grid-template 声明不当作实际网格。 | **RESOLVED** |
| **IN-G4-IR02** 移动装饰块裁切 | 文件索引伪元素已 border-box。390 内容容器 350px、块宽 342px，右侧 8px 阴影有预留；实际图两侧边缘/圆角和阴影完整，未被 main 的 hidden overflow 截断。1440/768 与下一 RFQ 模块连接正常。 | **RESOLVED** |
| **IN-G4-IR03** 正文链接 | 两链接三宽度 normal、真实 hover、真实 Tab 焦点均为 `#008078` 配实际白底，**4.817749:1**。焦点是内部 2px teal 框，未穿邻文；文字仍可读。六个连续 44×44 命中图均 **1936/1936**，邻文本字符中心未误命中对应链接；链接高度约 47.594px（D/T）、51px（M）。`quotation request` 与后继句号 Range 间距三端均 **0px**、同一行，恢复自然标点。批准的字词、引号、句号、顺序、href 和 context 保留，后续补充 Grade 段与两个 Documents 动作正常。 | **RESOLVED** |
| **IN-G4-IR04** 共享外观分叉 | Header 阴影及 Header/Footer RFQ 的额外 hover 背景、位移、阴影、过渡已有效恢复。独立对比 G3 消费输出，三宽度下 Header 的 normal/hover，以及两个共享 RFQ 的 normal/hover/focus，所核颜色、背景、阴影、transform、transition、边框、适用焦点、字体和高度均一致。源采用后置复位规则；不将“不删旧 CSS 声明”误判为仍有实际视觉分叉。共享组装及键盘回归通过。 | **RESOLVED** |
| **IN-G4-IR05** 工作集/冻结缺失 | 最终索引明确新 workset/freeze、21 项精确上游输入、4 项本地依赖、源、3 个渲染条件、8 正式图、运行/接受条件证据及 17 可读分段。独立复算 **54 项索引身份记录全部匹配**；17 分段的解码像素也与各自正式整图中的声明裁切区域一致。作者响应及自检已使用最终身份。最终索引不是此前不完整的九项清单。 | **RESOLVED** |

## 实际核验与证据

**STATIC_VISUAL：**最终 1440/768/390 整页从 Header 到 Footer 已看清全部正文、模块连接及正常 Footer；长页使用作者已绑定的 17 个原生分段（4/4/9），没有另存重复全套图。最终 768/390 Menu 和三宽度 Cookie 状态均查看。1440 Cookie、768 Menu/Cookie 与已实际读过的中间版本逐字节相同，因此相同静态外观结论可承接；当前 390 Menu/Cookie 已直接查看。全部正式图共 8 张，未把缩小的长页总览当作完整可读性证据。另实际查看独立生成的两个 390 Tab 焦点局部图。

**ACTUAL_RUNTIME：**离线 Chrome 152.0.7977.82；1440×900/DPR1、768×900/DPR1、390×844/DPR2。重新运行全页 normal/hover/keyboard focus、两正文链接连续命中/邻文安全、共享样式对比及相关交互。三张最终完整页面重新渲染均与正式 PNG **逐字节相同**。当前 source、依赖及图的身份通过，页面错误为 0，HTTP(S) 请求尝试为 0，文档无横向溢出；IR02 另以实际绘制范围和读图证明，不依赖 scrollWidth 一个值。

Menu 实测：键盘开启及首焦点、正反 Tab 循环、背景不可聚焦、Escape 返回、切换按钮关闭、选择 Products 后关闭、切回桌面断点恢复。Cookie 实测：键盘进入 Close、正反 Tab 循环、背景焦点隔离、Escape/Close 关闭和 Cookie Settings 焦点返回。已检查本页正常 Footer 没有把返回焦点状态误标为 normal。正式状态图片只证明所示外观，操作结论来自本地实际运行。

**SOURCE_INSPECTION：**最终 main 与批准 G3 main 逐字节相同；三端标题、15 段正文、5 个 bullet、11 个 href/标签及顺序均与 B 对应；无 JS 内容与 href 仍完整。核对 C 的 Malaysia-origin、pigment/finished white masterbatch 区别、三买家语境、neutral Product、单 Grade 多文件、COO 一次、unknown/supplementary Grade 限定、贸易信息 owner 出口、MT/India/人工联系边界，均无回归。S01 为原非阻塞观察，本次作者将相关支持标签/计数提高到 14px，不增加关闭门槛。

**LOCAL_SIMULATION：**三宽度逐个点击全部 11 个 main 出口。RFQ 仍携带 India 可见可编辑目的地意图和 MARKET-IN-001 来源；Documents 只有来源；Products、Document Hub、面包屑、贸易 Resources 出口无自动预选。未证明生产接收或真实表单编辑。

独立机器文件：`identity.json`、`runtime.json`、`targeted.json`、`supplement.json`、`review-checks.json`；脚本均只读候选并写本复审目录。`runtime.json` 中通用 B 解析器的 `paragraphs:false` 是把独立行动链接分组为段落造成的既知类别差异；`targeted.json.copyReconciliation` 已按批准结构核对实际段落全部相同。几何判定采用 `supplement.json` 中实际 display；不会因 block 上残留不生效的 grid-template 文本得出错误布局结论。颜色判定使用 `runtime.json` 的真实最近不透明背景。

## 作者材料末核与限制

完整读取当前修订响应、自检、formal-runtime-and-export、ir-acceptance 和工作集索引。最终声称的布局恢复、命中与白底焦点已得到独立支持；此前中间候选漏检 focus 背景的失败保留在 `interim/observation.md`。作者 Finding 0 本身不是本报告的通过依据。

未测边界继承 V1.0：生产路由、receiver 序列化/目的地字段可编辑性、实际表单提交/验证、CMS、同意状态持久化、实时贸易信息、真实触控设备、屏幕阅读器及其他浏览器引擎。当前页没有实体表单、上传、错误或空结果面板，不制造不存在的状态。自动颜色辅助不声称穷尽全部装饰渐变像素；本次 IR03 的实际白底配色已直接确认。

最终推荐按 **PASS** 提交总控及用户决定。五项原 finding 在当前冻结组合下均已解决，没有新增 required finding；用户批准、Gate 4 正式关闭、Gate 6 和后续页面启动仍由各自授权决定，本审查不执行这些操作。
