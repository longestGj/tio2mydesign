# SYN-G9 共同证据索引（forward）

建立日期：2026-09-07；本次采集者：方法应用Agent，仅亲自读取给定文本。所有案例证据唯一可读来源为 D:/23MySec/99_workspace/gate9-method-validation-v0.1/cases.md。下表“§”均为该文件的来源位置，非未取得原件的路径。候选默认rev-B；实际版本按行登记。原采集者与原日期全部未提供；09:10和09:25无对应日期。原件（图像、源码、浏览器记录、日志、服务端结果）全部未取得，无原件hash。证据类型是摘录所描述的类型，不表示亲自执行其采集或打开图像；本次没有LOCAL_SIMULATION。

| ID / 来源位置 | 证据类型与亲读范围 | 候选/实际版本；环境/数据；视口/状态/关联 | 可证明的范围及局限 |
|---|---|---|---|
| E00 §批准合同 | SOURCE_INSPECTION（合同文本摘录，非代码） | rev-B目标、rev-A基线；tio2-my/en；/resources/guide/ | AC01–07、R01/02及不许再提交/发布的授权；合同原件/版本号未知 |
| E01 §开发回执及材料摘录1 | SOURCE_INSPECTION（变更摘要） | rev-B相对rev-A，选择及公共缓存改变；API/静态视觉源未变；环境数据等价未知 | 工作区/变更声明，不证明实际部署身份或历史图可继承 |
| E02 §开发回执及材料摘录2 | ACTUAL_RUNTIME（探测摘录）及SOURCE_INSPECTION（测试摘要） | 09:10探测版本未记，端口标识rev-A；rev-B回执09:25；环境模式未知 | 仅HTTP200/H1及标识陈述，301 PASS没有逐条证据，无rev-B捕获 |
| E03 §开发回执及材料摘录3 | SOURCE_INSPECTION（SSR追踪摘录）及ACTUAL_RUNTIME（端点status摘录） | 版本未关联；articleProvider mode=fixture/local-article.json；WP仅status200 | 所示fixture路径与CMS要求不符；缺记录/scope/API/SSR关联，不能指认rev-B运行 |
| E04 §开发回执及材料摘录4 | ACTUAL_RUNTIME（测量摘录）及STATIC_VISUAL（截图文字说明，未看图） | rev-A；390选中状态，框180×44、完整文字210、overflow hidden；命中44×44；1440/768只有路径 | 历史裁切与触控测量；没有任何图像原件或rev-B三端证据 |
| E05 §开发回执及材料摘录5 | SOURCE_INSPECTION（源码摘录） | rev-B popstate/首次snapshot；运行环境未知；无操作记录 | 状态恢复代码偏差；构建通过不证明Back/Forward或接收URL结果 |
| E06 §开发回执及材料摘录6 | ACTUAL_RUNTIME（真实provider与UI捕获摘录） | rev-A，测试IDQ7，HTTP200/success:true/accepted；真实provider；rev-B环境/接收配置未知 | Q7旧F04接受通过可保留；不证明邮箱收件、rev-B适用性或全失败分支；原始捕获及旧审查原件不可读 |
| E07 §开发回执及材料摘录7 | ACTUAL_RUNTIME（rev-A null结果摘录）及SOURCE_INSPECTION（永久false源码/单测摘要） | rev-A null；完整分支源码版本未记；隐藏无记录；CMS/API/SSR链缺失 | null历史局部结果；源码阻断完整Article；单测不是链路证据，rev-B分支未验证 |
| E08 §开发回执及材料摘录8 | SOURCE_INSPECTION（缓存/组件摘录；正向测试仅摘要） | rev-B cacheKey=slug，双scope同slug；导航复用组件；环境数据身份未给 | key隔离偏差与复用声明；没有真实跨scope泄露、负向场景或共享页面回归证据 |
| E09 §开发回执及材料摘录9 | ACTUAL_RUNTIME（初始HTML/客户端对象摘录）及SOURCE_INSPECTION（rev-B未改声明） | rev-A Title/Canonical/noindex正确；客户端internal_review='pending'；rev-B序列化未改 | 历史公开字段违约，保留实现偏差；不证明rev-B当前head/HTML或客户端输出 |
| E10 §另一个候选rev-C | SOURCE_INSPECTION（文件列表/回执）及ACTUAL_RUNTIME（预览200摘要） | rev-C，更早baseline未具名；JSON/query adapter/shell.tsx；模式未知 | 只能定位待追踪处；无WP目录diff不证明缺能力，shell文件名不证明分叉；不支持选择或合并 |
| E11 §有效历史证据复用对照 | SOURCE_INSPECTION（身份等价记录摘录）及ACTUAL_RUNTIME（既有独立操作证据描述） | SYN-STABLE，提交标识未给；实现/依赖/数据/环境配置逐项相同，覆盖要求无反证 | 条件明确支持历史证据继承；保留原范围及原日期（具体日期未提供），不声称亲读既有证据原件 |

报告中的证据引用均为本索引以上摘录条目；无额外证据资产。已读取方法依据（不作案例运行证据）：

- D:/23MySec/skills/runtime-implementation-verification/SKILL.md（V0.1）
- D:/23MySec/skills/runtime-implementation-verification/references/gate9-method-integration.md（V0.1）
- D:/23MySec/skills/layout-interaction-verification/SKILL.md（V0.4）
- D:/23MySec/skills/layout-interaction-verification/references/core-risk-model.md
- D:/23MySec/skills/page-contract-consistency-review/SKILL.md（V0.2）

未读取同目录其他输出/evaluation、既有结论原件或项目页面。旧F04只是cases.md给定的一行事实。
