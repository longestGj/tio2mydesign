# 实例绑定与权限合同

这是包内所有角色和方法的共同接入合同。母版版本、方法检查通过、文件内的历史版本名均不表示本站已批准、已注册或已运行。包内路径以锁定包根目录解析；实例路径以project_root解析，工具调用使用实际绝对路径。不得回到母版来源项目寻找运行必需文件。

## rules

通过本站配置bindings.rules找到本站AGENTS及适用子目录规则，尊重原有工作区、分支和写入约束。配置只导航，不覆盖规则。新站初始化不要求已有完整PRD，先建立最小规则和来源入口；已有站点入口须比较后合并，不覆盖。

## context

bindings.context指向本站背景及原始批准来源；W1–W5按实际缺口逐步建立。摘要不代替企业资料原件，不继承其他站产品、认证、市场、联系信息或批准。

## index

bindings.index指向唯一资料导航。包内角色、Skill、阶段合同身份由release-manifest.json维护；页面输入则由本站当前Manifest及批准源决定。导航变化不自动使页面冻结失效。

## status

bindings.status指向唯一进度入口；existing project优先映射已有状态文件，不再生成第二套Status或RUNS台账。恢复须读取原控制记录、当前组合、原批准和在途实例。

## directory

bindings.directory指向本站文件放置约定。正式成果、源及唯一证据须在耐久位置；方法目录不是页面输出目录。写入前核对指定范围和并发变化，不清理用户或其他任务的修改。

## authority

bindings.decisions和bindings.authority指向本站原始决定和授权记录。授权须明确对象、范围、动作、停止点及来源；不得从本包、空配置、路径存在或其他站决定推导。

Gate 3/4/6的常设关闭是一种支持的机制，不是母版授予的权限：本站有有效委托时，总控在独立审查、必修关闭和身份核对后直接关闭；没有委托则保留可审结果并按本站实际批准规则处理。USER_STANDING_AUTHORITY及NOT_REQUIRED_BY_STANDING_AUTHORITY仅在有对应本站授权时记录。Gate 1/2/9/10按本站有效用户决定；授权内连续执行不重复询问。

专业PASS、Gate关闭、下一阶段启动、外发、实现、合并、部署和发布分别记录。实质作者不能独立自审；总控已接收同范围有效独立结论不再重做。对外/跨任务消息只有明确授权才发送，否则保存可发送内容并交总控。任何“通知”要求均受此条约束。

## brief

bindings.briefs与bindings.page_registry定位本站完整Brief和页面资格；可映射现有目录/章节。Brief至少包含身份/语言/URL资格、Page Intent Card八项、关键词职责、批准事实来源、主要行动/接收、共享依赖、阶段标准、验收和授权停止点。各字段按其实际阶段成熟，不要求W1先提供页面或W5完成Gate2全文。

已批准Brief继承；新候选不冒充批准。页面执行须有对应准入。现有项目禁止提前编制正式Brief等约束保留，在具体接入时解决差异，包不自动废止它们。

## playbooks

bindings.playbooks按本站页型定位批准作业标准；bindings.keywords定位关键词/意图归属，bindings.facts及bindings.relations定位企业产品命题及关系。W5盘点缺失标准、消费阶段和owner；总控安排建立。不能把找不到标准标为不适用，也不要求后期标准提前阻断早期准备。

本包不附原站Product SOP、产品清单或任何固定产品矩阵。需要企业专属模块、技术表达或页面合同则在本站建立，不能静默采用某行业样例。

## shared

bindings.brand、bindings.logo、bindings.shared_contracts和bindings.shared_consumer分别定位本站批准品牌、Logo、共享owner合同及页面中立消费源。导航栏目、固定CTA、法律页面、Hero骨架/variant均来自本站，不继承原站七个栏目、RFQ或取消Terms的决定。

同一共享owner维护一个权威源。页面只做内容/导航绑定和实际组装检查；共享证据须满足身份、范围、无影响覆盖条件才能继承。没有共享消费源时由总控协调建立，不能复制上一业务页面充当母版，也不能虚报共享PASS。

## quality

本包保留[质量基线](quality-baseline.md)：1440/768/390完整逻辑视口、44×44px命中区和适用状态。它们是母版质量要求，不是企业事实。本站可增加更严格要求；降低或替换基线必须有明确变更决定及配套方法/工具适配，不能仅改JSON跳过检查。

## development

配置development_root、development_rules、runtime及site_scope指向本站开发项目/规范与指定运行对象；不保存凭据。首版选择[WordPress＋Next.js适配](../profiles/wordpress-nextjs/README.md)。策划角色不在开发项目实现、测试、修复或发布；Gate9仅只读验收。

## binding-resolution

启动具体工作时，总控在既有dispatch中交付bindings_resolved：键→实际路径/章节→身份→用途/消费阶段→有效批准或缺口。允许同一文件提供多种信息，禁止一个模糊Index代替全部原件。

初始化只需站点ID、项目根目录、入口映射及包版本；阶段任务按上述实际消费要求加载。缺失键返回具体INPUT_INCOMPLETE及影响，继续无关获准工作；不伪造空模板PASS。schema/受控初始化工具由配套工具0.1.1提供；工具只检查初始化结构与身份，本文的阶段输入仍由总控解释，不是自动语义解析器。
