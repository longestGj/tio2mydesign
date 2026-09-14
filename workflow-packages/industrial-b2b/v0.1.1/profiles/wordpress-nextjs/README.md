# WordPress＋Next.js开发接口

首版技术适配仅覆盖WordPress内容→API→Next.js呈现。其他栈需要自己的运行身份和实现适配，不能跳过现有Next检查后声称同等验证。

Gate6定义批准内容、行为、共享owner、数据语义、条件/空值/错误及可观察验收；Gate8读取实际仓库、已集成页面和共享能力，决定post type/API/组件等技术绑定。不得从旧或错误基线另建平行系统。原型代码按APPROVED_CONTRACT、REFERENCE_IMPLEMENTATION、PROTOTYPE_ONLY分类，默认PROTOTYPE_ONLY。

Gate8交回[机器交接合同](../../contracts/GATE8_GATE9_EVIDENCE_HANDOFF_CONTRACT_V1.0.md)及[证据schema](../../contracts/GATE8_EVIDENCE_MANIFEST_SCHEMA_V1.0.json)要求的实现、evidence HEAD、Build、runtime和文件身份。额外保留repository、实际worktree路径、branch、开发前HEAD、最终commit、交付工作区状态及基线来源；不用分支名代替commit。

适用功能/缺陷实现记录red/green：先运行对应测试，记录因预期缺陷失败的命令/输出，再实现并记录同条件通过及必要回归。已有代码的历史开发过程不能补造red记录；缺项由开发方如实说明。纯文档或非行为变化按开发规范记录适用性，不为了造红灯修改正确页面。自动Manifest验证不声称已经验证这些测试语义。

查询、CMS归属、路由、缓存、导航、SEO、表单接收、媒体和部署配置绑定本站site_scope；禁止跨scope fallback。正确/错误/缺失scope、同slug及共享消费者的适用回归均按合同验证。

运行对象须关联实现commit、Build、数据/配置及scope；保持至Gate9有效返回或释放。新环境、新端口、新Build不得自动继承旧通过。界面成功、provider接受、最终收件分别证明；模拟不等于真实收件，真实提交须明确授权。

[集成接口](integration.md)保留四层状态及串行写入原则。目标分支、main-only/no-worktree、develop策略由本站实际开发规范决定，不能照搬来源项目。QA不合并、不修代码。集成、预发布和发布分别需要相应权限与结果。

## 已有工具与边界

包内skills/runtime-implementation-verification/scripts含两个Python标准库脚本；命令从Skill目录执行，manifest/output用绝对路径。Node预检从responsive-wireframe-design/scripts定位。所需Python、Node和Git由接入环境提供，脚本存在不等于依赖已安装。

现有Python validator校验其实现的字段与Git/Build/证据关系，并非完整JSON Schema引擎或业务验收。runtime脚本使用Next Build marker；不证明CMS数据链或真实收件。它不负责批准允许列表/业务动作判断，运行前由Agent核对目标及重定向边界；未验证目标不请求。更严格机器允许列表及其他负例验证留在隔离工具验收中，不宣称当前脚本已具备。

Gate3脚本只检查既有记录和文件身份，允许NOT_APPLICABLE但不会判断理由，不验证共享证据资格。Agent必须按合同判断适用性。Gate4/6未实现统一validator，继续接受可追溯的等价批量校验，不虚报工具PASS。
