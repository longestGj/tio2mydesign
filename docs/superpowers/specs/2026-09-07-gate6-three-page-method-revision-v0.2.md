# Gate 6 三页经验修订与验证 V0.2

日期：2026-09-07。Decision ID：`G6-METHOD-REVISION-20260907`。

## 授权、范围及现行组合

用户先确认 Gate 4 原型源可交 Gate 8 使用、是否复用由开发方结合现有项目决定；随后认可本任务提出的六点经验修订方案，明确“同意你的意见，开始修正。”。本轮授权更新一个 Gate 6 Agent 及两个方法，执行限定范围验证并同步相关导航。方案全文已在对话展示，未要求新建岗位或额外Gate。

目标组合为 Gate 6 Agent V0.4、页面合同一致性核验 V0.2、开发交付规格整理 V0.2。本记录是定向修订和验证来源，不自动批准全部历史候选细节或未验证页面类型，不进行运行安装/注册，不改变任何页面批准、实施或发布权限。当前源在原稳定路径；旧源保存在[快照映射](../../../90_archive/project-governance/2026-09-07-gate6-three-page-method-revision/snapshot-map.json)。所有快照为写入前读回的原字节，保留原有链接语境，不作为当前执行入口。

## 经验怎样落入角色与方法

| 经验及依据 | 角色/方法落点 | 避免的误判 |
|---|---|---|
| 跨合同差异：[Spain 独立复核](../../../pages/markets/spain/05_review/MARKET-EU-ES_GATE6_DELIVERY_INDEPENDENT_REVIEW_V0.1.md)确认示例head与C精确字段不同 | 一致性方法核对字段实际值、语义和批准阶段；Agent明确关闭对象 | 字段存在或视觉PASS等于生产Schema已完成 |
| 唯一引用组合：[Poland 包](../../../pages/markets/poland/06_handoff/MARKET-EU-PL_GATE6_HANDOFF_PACKAGE_V0.1.md)继续引用B/C/冻结源 | 交付方法保持一个入口和唯一正文，派生数据确有需要才生成 | 复制新正文或强制每页JSON |
| 原型复用：[India 包§4](../../../pages/markets/india/06_handoff/MARKET-IN-001_GATE6_HANDOFF_PACKAGE_V0.1.md)有“Reuse them for comparison, not as production code.” | 交付方法明确源码/依赖/查看方式与适配说明，允许开发评估复用 | 把“不承诺直接合并”写成“禁止复用” |
| 有效上游继承：三页Gate6独立报告保留已批准视觉 | Agent按变化、缺口及矛盾证据确定实际复核范围 | 为新包无理由重画全页，或以同hash忽视实际缺陷 |
| 后续依赖：Spain/India继承较后RFQ环境、DOC和Consent合同 | 方法保留来源日期、责任、阻断位置和接受条件 | 旧Manifest覆盖较新实施事实，或历史200冒充本次接收 |
| 执行与独立复核分开：[India 独立复核](../../../pages/markets/india/05_review/MARKET-IN-001_GATE6_DELIVERY_INDEPENDENT_REVIEW_V0.1.md)及Spain报告 | Agent限定作者/审查者对象范围，新增合同独立核对 | 自检升级为独立PASS，或每页强制并行 |

India旧措辞是本次已观察到的交付表达缺陷；本轮通过方法防止后续重复，不回写已有交付包及其冻结hash。三页实际案例用于经验来源，不能冒充新版已经执行过这三页。

## 风险、回退及同步边界

- 本轮保持角色/方法分工，细节集中在两个SKILL.md；未新增通用阈值、字段、截图数量或生产功能。
- 关键风险是把真实上游缺陷推给Gate8后提前关闭。方法明确区分已批准后置接入和本阶段违约；只有交付映射缺口可由新包澄清，真实缺陷必须回原owner修订复验。
- 同步仅限三个源文件、Index的Gate6行、agents/README的Gate6行及本记录；页面当前Manifest和项目Status不因方法修订升版。
- 如新方法出现回归，保留新记录与页面事实，以快照内容恢复方法并登记后续版本；不回退页面批准或覆盖其他任务的导航更新。

## 验证范围和实际结果

使用[合成局部合同夹具](../../../99_workspace/gate6-methods-v0.2/cases.md)检查批准继承、实际缺陷、示例head、源码依赖、复用、运行依赖及局部结论。夹具只提供给定摘录和文件清单，未提供浏览器/CMS/receiver；测试不能证明真实视觉或运行行为。

基线：独立子代理`gate6_v02_baseline`只读夹具，不加载本次角色/方法，保存[实际输出](../../../99_workspace/gate6-methods-v0.2/baseline-result.md)。总控已全文读回：基线正确保留原产地批准、识别窄屏裁切和缺失字体、不把示例head或receiver OPEN一律当作Gate4失败；完整输入的另一组素材也没有被错误阻断。基线的交付切片未给稳定接受条件ID，对原型代码复用的表述仍主要是参照/迁移输入，没有明确写出开发可评估复用代码。前者属于可追踪性遗漏，后者属于表达不足；不把这些结果夸大成基线全错。

已观察到的真实失败来源是India旧包过严的复用措辞；其余规则多属已批准方法的定向显式化。此轮采用一份无指导对照和一次独立前向应用，不做统计对照或声称新版必然优于基线，也不为制造失败反复改变测试。基线正确处理的部分作为回归检查。

新版前向验证：另一个无前文上下文的子代理`gate6_v02_forward`实际读取Agent V0.4、两个Skill V0.2和同一夹具，不读基线输出或本记录。结果保存为[forward-result.md](../../../99_workspace/gate6-methods-v0.2/forward-result.md)，总控已全文读回84行并逐项对照夹具。

| 检查对象 | 实际结果 |
|---|---|
| 有效批准及历史状态 | 保留较后原产地授权，未恢复旧Hold；引用09-06环境记录时保留日期与receiver OPEN，没有推断实时成功 |
| 同身份下的实际反证 | N-F01保留为上游必修，要求新冻结身份及定向复验；没有用DOM存在或旧PASS消除裁切 |
| 示例head与关闭对象 | N-F02只在交付切片澄清生产规则并待独立复核；不声称原型或生产已经修好，不强制返工获批示例 |
| 源依赖完整性 | N-F03识别清单未含Italic字体；没有把清单缺项夸大为亲测404，也未要求系统字体文件或拆出内嵌JS |
| 原型复用及既有组件 | N-F04及适配条款明确Gate8先核对现有项目，再评估代码复用/改造；共享Chrome按owner消费，邮件不是实际repo证据 |
| 依赖及验收追踪 | 四类依赖保留阻断位置，N-A01–06为稳定ID，回执按ID绑定实现、环境和证据；不生成无必要payload |
| 局部范围与独立性 | 无差异素材可局部继承；不宣称整包就绪。新切片是作者自检，未冒充独立包PASS或用户批准 |

此限定应用未观察到需要再次修改方法源的实质失败。它支持本轮目标判断，不证明视觉、浏览器操作、真实CMS/API/receiver或全部页面类型已验证；也未实际执行原作者返修和重冻结闭环。

两个Skill分别以`python -X utf8 .../quick_validate.py`校验通过；全部三个源及本记录的本地链接、旧快照hash和导航定向修改由[实际核验输出](../../../99_workspace/gate6-methods-v0.2/verification.json)记录。写入前锁定的三页879个文件逐字节身份保持一致，无新增页面文件；Index及agents/README各只变更Gate6一行。方法完成与页面批准/交出状态分开，未改Status或页面Manifest。

## 修订后源身份

| 当前源 | 版本 | SHA-256 |
|---|---|---|
| [Gate 6 Agent](../../../agents/gate6-review-delivery/agent.md) | V0.4 | `c24328e2dd0d78daf01f01c53c97d44d7cca226890903d7b7233661df97e1547` |
| [页面合同一致性核验](../../../skills/page-contract-consistency-review/SKILL.md) | V0.2 | `08ea70ef7c0561dd2bd55147347caddd3b5626d6b4c9be89f583e0bdf4461799` |
| [开发交付规格整理](../../../skills/development-delivery-specification/SKILL.md) | V0.2 | `78918915c6f7605dbf0195413ed44b2b0429128a4c1b161275fd4b75f918a4f6` |

本记录保存三项源身份，源文件只链接本记录路径，不以相互hash产生循环。旧页面仍绑定其原方法/治理证据；下次获授权的页面任务从当前入口读取新版，不能把旧审查改记成V0.2执行结果。
