# 四页内链专项实测 V0.1

Review ID：IL-MARKET-FOUR-20260908-01。日期：2026-09-08。
结论：**CHANGES_REQUIRED，链接依赖仍开放；不是四页Gate 9整体结论。**

## 实测对象与范围

用户批准Spain、India、Netherlands、Belgium四页批次实测；当前根任务执行，未参与被审开发实现。沿用[本轮控制](CONTROL.md)，使用内链Agent/Skill V0.2。

运行：`http://127.0.0.1:3029`；code `47307b8f7e7c4b8a706aed08f91738462fae3a6f`，HEAD/evidence `ad31fd82b8f00aa87da6acdb9ed2367d172dca76`，Build `ax1NgfzN5PFVyPceTtKsF`。监听进程指向`C:/Users/longe/.codex/worktrees/bfe8/16Wordpress_nextjs`的next start，采集前工作区clean。本次结论只适用该开发环境，不宣称生产已可用。

实际检查四页1440/768/390，共12个页面视口；768/390分别打开每页菜单，共20个页面状态，记录805条链接实例观察（包含重复视口和隐藏实例，不是805条独立链接）。对可见同源目标去重后核验25个准确URL，保留国家/来源参数差异：19个200、6个404。四页main链接分别14/11/12/12；Netherlands其中1条VVVF外链不访问。实际逐项点击其余48个正文/面包屑链接，结果见运行记录；不提交表单。

证据：[链接清单](links.csv)、[运行及逐项点击记录](runtime.json)、[结束身份与文件核验](verification.json)。

## 问题与责任

| ID | 本轮实见 | 处置及关闭条件 |
|---|---|---|
| ES-G9-F03（沿用） | Spain的Coatings、Plastics、Masterbatch三个Application目标及EU Trade目标仍404；href与批准路径一致 | 保留原路由依赖；统一交总控协调目标开发与集成，不能要求Spain改链。目标交回后核验同一环境的路径、内容身份及点击落点 |
| IN-G9-F01（沿用） | India Trade目标仍404；href保持批准路径 | 保留原依赖，交总控协调；准确目标交回后定向复验 |
| IL-MARKET-FOUR-F01 | 四页共享导航/页脚的`/applications/`在本环境返回404；与三个子页是不同目标 | 共享入口问题统一交总控，关联既有Application依赖，不能拆成四个页面缺陷。确认APP-000当前交付/集成状态，提供本环境准确目标后复验共享入口及消费者组装 |

本轮没有据此要求Gate 2改正文或Gate 6重写合同。404目标属于尚未完成/未集成的页面依赖，当前证据不足以判断为四个Market页面自身代码写错；总控应定位实际目标交付情况后安排Gate 8处理。新增ID仅表示本专项首次记录该共享目标，不声称这是新引入回归；不重开已关闭的共享样式Finding。

## 已取得的局部判断

- 四页本身均200，H1及canonical与相应国家一致；普通产品/文件/市场/法律目标的最终URL、标题与H1没有表现为错误页或首页fallback。没有在四页可见链接中发现其他站点内链；VVVF按既有外部来源单列。
- 四页RFQ参数导航得到对应国家初值，产品、应用和数量字段未因国家自动选择；这里只证明初始导航，不代替完整接收业务验收。
- Request Documents导航后公司Country/Region及Grade为空，逐次点击记录核对Document Type无已选项；`market_id`参数本身不是文件资格或筛选事实，本轮不宣称接收业务层已通过。
- Markets Hub实际含四个国家入口，四页具备回到Markets的面包屑；本批未见这四页成为无入口页面。EU页未观察到直接国家链接，但Markets入口已存在，不能据此新增强制互链要求。
- 主体锚文本“Explore Products”“View Document Hub”“EU Procurement Overview”等与目标职责一致；Application及Trade落点404时不能宣称目标内容语义已验证。未发现需要新建国家型号关系的依据。

## 继承、局限及交回

原[四页Gate 9复验V0.2](../MARKET_FOUR_GATE9_TARGETED_RECHECK_V0.2.md)及[Spain复验V0.3](../../spain/07_qa/MARKET-EU-ES_GATE9_TARGETED_RECHECK_V0.3.md)用于恢复原Finding与既有结论，不重新做视觉、焦点或业务接收验收。其他三页旧Manifest关闭身份保持，本次是当前运行专项观察，不把旧整体结论挂到新commit。

本次不涵盖全站全部登记页面、全发布集合孤立页、目标全文事实审查、所有scope反向用例、真实设备、表单提交、provider或邮箱接收。父入口仅作指定批次入口核对，不递归爬全站。外部网络请求被阻断，动态页面缺失或外部服务受阻不推导为批准事实错误。

总控接收处置：三组问题均为共享/目标依赖，进入总控协调；提供给Gate 9作为同版本范围内证据。没有向外部开发任务发送消息，没有修改代码、CMS、页面Manifest或Gate状态，没有关闭任何既有Finding。下一步是取得目标页在本验收环境的集成回执，再沿原ID定向复验；不得删链、换目标或以别的端口200冒充本环境通过。

技术核验注：部分路径由服务器重定向移除尾斜杠。首次精确字符串检查把原href与最终地址直接比较，产生记录校验失败；已依据实际重定向链和H1逐一对照48次点击，不用无条件URL归一化，未发现点击落点与独立目标导航不一致。初次诊断保留于verification-initial.json。
