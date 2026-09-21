# RES-000 Gate6 R01 定向复验 V0.1

2026-09-21。承接审查 `RES000-D32-G6-REVIEW-20260921-01`。原Reviewer `/root/res_root_d32`，新包作者 `/root/about_root_d32`，身份不同。模式 `TARGETED_RECHECK`。结论 **TARGETED_REVIEW_PASS**；`RES-D32-G6-R01` **ADDRESSED（交付映射）**；新必修0。不关闭Gate6，不外发，不启动开发。

## 1. 对象与范围

待审：[RES-000_D32_GATE6_HANDOFF_PACKAGE_V0.2.md](D:/23MySec/pages/resources/06_handoff/RES-000_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)，31871 bytes，SHA-256 `6adb908078ae3329ddbf99fbacd61361e4ba7f681a5589543dbd5a09e88ca989`。

原[独审V0.1](D:/23MySec/pages/resources/06_handoff/RES-000_D32_GATE6_INDEPENDENT_REVIEW_V0.1.md) SHA `d0a2a90db78508439d99b9204372adac688caf4c89385c0e33030cf593d09115`；旧包V0.1 SHA `86696dde0053a2c35269035b9d1b349b4a55f27fbac59d15d39e64aceaee2972` 保持不变。

按原Finding四项接受条件、当前Workflow V3.6、Gate6基线V1.3/执行复核V1.2/职责边界V1.0、5→6接收V1.1及8→9证据合同V1.2检查本轮差异。一致性方法V0.4和交付方法V0.5用于来源—映射—AC的定向双向核对；verification-before-completion用于先实际核验再报告。Reviewer原上游设计不在本轮独立自审范围，继续继承有效不同身份Gate5覆盖，不重制或复审整套视觉。

## 2. RES-D32-G6-R01 接受结果

已读取V0.1→V0.2完整diff、§3新增来源、AC-18、§5三条依赖和§5.1完整规则，并对照原接受条件与批准Finalization §1第3项/§4。该来源SHA独立重算仍为 `e28de105ba35628365c0c0dc3dac272c5f6fe2b19589f6888cade0a26ab09213`。

| 稳定依赖 | 必需发现路径 | 验收映射 |
|---|---|---|
| RES-D32-DEP-DOC-REACH | RES-000 → `/documents/reach/` | AC-18，DOC-REACH目标身份 |
| RES-D32-DEP-DOC-TDS | RES-000 → `/documents/tds-sds-coa/` | AC-18，DOC-TDS目标身份 |
| RES-D32-DEP-DOC-COO | RES-000 → `/documents/certificate-of-origin/` | AC-18，DOC-COO目标身份 |

三条路径均明确为已批准Required，而不是H0条件资源或仅机器关系；H0=0不豁免。每个ID都有批准来源、精确目标、现有证据边界、RES原内容/设计owner、目标内容/路由owner、Gate8消费和Gate9验收责任。Controller协调取得对应当前组合的文案、落位及适用响应式批准；不得把目标Title/H1自动充当本页链接文案。

AC-18与§5.1共同要求同一指定候选下逐ID提供入口批准引用、可见位置/href、键盘/指针操作、最终响应/HTTP 200及目标身份/主要内容证据，并核对适用五宽。隐藏或仅机器关系、假链接、只到Documents总页、错误通用壳、跨站或Contact fallback均不通过；截图、DOM隐藏href或HTTP 200单项不能替代整条接受链。

批准与运行阻断已分开：

- 未取得入口文案/落位批准：`OPEN / APPROVAL_DEPENDENCY`，返回RES原owner；不授权Gate8自行设计该入口，该关系实施、集成验收与相关发布判断被阻断。
- 已获入口批准但目标未就绪：`OPEN / TARGET_DEPENDENCY`，返回对应DOC/路由owner；不能用死链/占位/隐藏/fallback交付通过，集成及相关发布继续受阻。
- 双方输入具备后由Gate8实现批准结果，Gate9实测；三条任一未满足不能签全量发现关系完成。取消或降级必须有后续明确决定，当前没有该决定。

作者未新增未经Gate4批准的卡片、正文、模块、共享导航或生产代码，原冻结不变；实际变化只补交付映射。可见落位/设计增量及真实生产/路由依赖仍 **OPEN**。本结论仅确认R01交付缺口已处理，不证明路径已上线、设计已批准或Gate9已通过。原四项接受条件全部满足。

## 3. 相邻回归与证据身份

独立只读Node校验退出码0；8个身份/差异守卫全true：V0.1身份、V0.2身份、旧17项AC行、旧六行依赖、AC-05日期合同、§1–2准入/源章节、§6证据协议章节、Finalization源身份。完整diff未见超出R01及版本/状态/追溯说明的改动。

| 检查 | 实际结果 |
|---|---|
| D23 Markdown本地引用 | 26，缺失0 |
| AC / 依赖表 | 18项AC、9行依赖；新增AC-18及三个稳定ID，原ID不重编 |
| 原AC及依赖 | 17/17、6/6逐行相同 |
| 冻结文件bytes/SHA | 67/67相同，失配0 |
| 重算bundle | `f43aa865e50c2b8fe0ba422692c3a4c26552478433397e4362675357ddc611b0` |
| H0 source | `e40e582538b8411d2dbf1347d3faf939c472d95cbed90137d06399d4ee7e60ec` |
| freeze SHA | `396ebb33bbaa7053571f32bd6d40d6dc2e3fbcad38cb10e19bbff212388433b3` |

`RES-D32-G6-DATE-01`及AC-05未改：拒绝2026-02-30、2026-04-31、非法闰日和解析器归一化；真实闰日、缺失、未来/到期边界及可见/机器同步接受条件继续有效，**实现验证仍OPEN**。没有编写/测试日期实现或声称生产已修复。

原H0资格/原子移除、copy、Schema、canonical `https://tio2malaysia.com/resources/`、共享owner、静态单站、五宽和body carry、no_optional_analytics及共用证据协议均未回退。原首审其余合同覆盖和不同身份Gate5的569/569、20正式/16有效支持图按相同冻结继承；两张拒绝图仍不得作为通过依据。这些不是本轮重新运行的测试。

## 4. 未测与停止

未访问开发仓库或实现代码、运行作者脚本、浏览器/HTTP、真实资源资格、生产路由/SEO、原生设备/辅助技术或Google索引。三项发现依赖、日期实现及其他后置事项继续按实际证据关闭。新必修0，没有修改候选/共享源/冻结/Manifest/Status/Index。

交回 **TARGETED_REVIEW_PASS**，供Controller按原授权核对；不关闭Gate6、不外发、不进入Gate8。
