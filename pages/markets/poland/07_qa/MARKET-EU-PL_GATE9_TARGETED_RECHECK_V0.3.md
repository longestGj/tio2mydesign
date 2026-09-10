# Poland Gate 9 定向复验 V0.3

2026-09-07。Review ID：**PL-G9-RECHECK-03**。用户要求“已经改好了。在审查一次。”本轮结论：**E03 的缩放图像缺口已补齐；E02 当前本地配置与运行输出关联已独立验证；新增 F03 菜单末尾 RFQ 可见焦点缺陷待修，真实接收与 Applications 依赖仍开放。Gate 9 未整体通过/关闭。**

## 1. 准确对象及本轮范围

沿用 [Manifest V0.23](../MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.23.md)的批准组合、[前轮复验](MARKET-EU-PL_GATE9_TARGETED_RECHECK_V0.2.md)及当前工作流 V3.2。D16 V0.3 只补证和新增测试，未改变生产源码/构建。D23 独立重新核对原51文件，全部相符；当前 Poland HTTP中 Build ID 为 `GjJdupnweqs0MK5nxZvnV`，14项引用资源与 `.next-poland-g9` 磁盘构建逐字节相同。五模块 CMS→API→初始 HTML 全文和动作仍与批准源一致，query SEO检查保持一致。

运行地址 `http://127.0.0.1:3015/markets/poland/`；base `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb`加已登记51文件未提交组合，不把基础commit单独当实现版本。新增 `poland-g9-native-zoom-v03.spec.ts` 是开发证据采集程序，不是新的生产实现。开发未重建，D23未执行开发测试、CMS写入或真实提交。

## 2. E03 缩放证据：图像缺口关闭，焦点另列

实际阅读开发新测试源码、诊断和原始JSON，查看新完整页、Cookie、菜单上下状态及视口帧0/3/6/8。13张PNG哈希全部与采集记录一致。新原图非裁切拼接；九帧连续重叠覆盖完整文档。原生 `chrome.tabs.setZoom(2)` 保持外窗口1440×1000，CSS viewport1424×905→712×452，DPR1→2，visualScale1；逐图采集前后维持同一几何与zoom。

新 compositor 原始图为1424物理像素宽，不能把它误读为1424 CSS视口。完整图1424×6101覆盖五模块与Footer，Cookie1424×905清楚显示标题、正文与两按钮。菜单高于452 CSS px时允许内部纵向滚动，末尾RFQ在滚动后完整可达。原图和text Range/元素边界相互支持，未见前轮半宽或纯白问题。

接受开发对本机旧截图clip与native zoom坐标不匹配的解释：同一会话旧截法仍半宽/纯白，原始CDP画面正常。只认定本次采集异常得到解释，不推广为所有Playwright版本缺陷。开发仍保留旧图与旧测试，撤回其“完整视觉通过”的解释。

**PL-G9-E03_CAPTURE_GAP=CLOSED**（独立审阅同一实现的开发ACTUAL_RUNTIME原件，不声称D23亲自运行200%扩展）。键盘可达不等于可见焦点全部通过，新增F03见下。真机、其他引擎、屏幕阅读器仍未测，沿用合同适用范围说明，不新增无依据设备矩阵。

## 3. PL-G9-F03：菜单末尾 RFQ 无可区分的键盘焦点

严重度 **P2 / 本轮必修**；关联 **PL-G9-03、09、12**；owner **Home/Global Chrome开发负责人**。这不是新的视觉偏好，而是既有可见焦点要求未满足。

复现：在768 CSS px宽的实际Poland页，用键盘打开Menu，初始焦点Close；连续两次Shift+Tab，经顶部RFQ到菜单末尾Request a Quote。本轮独立DOM显示 `:focus-visible=true`，但outline为 `rgb(0,128,120) solid 3px`、offset `-4px`，与按钮背景 `rgb(0,128,120)` 完全同色；无box-shadow或文字装饰提供替代提示。实际截图看不到可区分焦点。开发200%菜单底图也有同一反证。

证据：[独立DOM](gate9-v0.3/menu-rfq-focus.json)、[独立截图](gate9-v0.3/menu-rfq-focus.png)。范围不限200%：本轮普通768视口已复现。

关闭要求：共享owner在保留批准功能色和共享复用前提下，使该填充按钮获得清晰可区分且不被容器裁切的焦点标识；例如通过焦点环位置、间隔或其他既有可访问性手段实现，具体实现交开发判断。提供未聚焦/键盘聚焦两状态对照，核对compact两端及200%菜单底部、循环/退出/恢复；回归相邻共享控件。不要求重做已通过全文、CMS或视觉方案。

F01共享外观和F02指定色值纠正保持已完成。前轮对“所有共享可见焦点”的局部结论过宽：当时确认了Close和Cookie，却未独立聚焦末尾RFQ；本轮以F03纠正覆盖缺口，不能用前轮关闭拒绝处理新反证，也不将其说成D16本轮新增回退。

## 4. E02：当前接线已验证，真实账户/接收尚未验证

D23独立仅读取指定本地配置变量并GET接收页及其实际资源：当前配置指纹与D16回执一致；RFQ在HTML/RSC包含相同路由值，DOC在一个已送达客户端资源内包含相同值；两页Build ID一致，引用资产全部匹配磁盘。本轮只保存指纹、路径及相等性，不保存配置原值或完整receiver响应。

因此 **CURRENT_LOCAL_CONFIG_TO_RECEIVER_RUNTIME=VERIFIED**；不能再笼统说当前本地环境与运行输出未关联。参见[独立关联证据](gate9-v0.3/receiver-independent-association.json)。

仍为 **NOT_VERIFIED**：当前provider账户与批准接收目的地的绑定、历史DOC路由值等于当前值、RFQ真实服务商接受及实际邮箱。历史DOC一次provider接受保持，不重发已用完的一次授权。当前配置非空或与代码相同不能证明上述外部事实。

接收owner下一步可先提供账户/目的地的只读关联确认和历史DOC收件证据；确需RFQ实发时，先准备准确构建、单次标记测试payload及接收范围，再取得该次发送授权。不得用本轮审查请求推导真实发送授权，不让用户再次批准已有效的内容或已验证的本地接线。

## 5. 全部接受条件与继承去向

| 条件 | 本轮状态与依据 |
|---|---|
| PL-G9-01 | PASS；CMS/全文/动作本轮重新核对 |
| PL-G9-02 | 指定三端PASS继承未变源码/同构建；新增200%完整可读证据可接受 |
| PL-G9-03 | 缩放图像缺口关闭；F03可见焦点FAIL，未测设备范围保持 |
| PL-G9-04 | 导航/字段语义保持；RFQ真实接收NOT_VERIFIED |
| PL-G9-05 | 导航/基数保持；DOC当前本地接线PASS，历史provider接受保留，外部账户/收件未验证 |
| PL-G9-06 | 当前13目标12个正确200；Applications仍404，用户确认开发中依赖 |
| PL-G9-07 | PASS；当前HTML及query metadata/Schema再次一致 |
| PL-G9-08 | 本地索引保护PASS；生产配置/发布控制保持 |
| PL-G9-09 | 共享组装/法律/Cookie保持；菜单可见焦点F03待修 |
| PL-G9-10 | 前轮本地三站定向矩阵按未变源码和同构建继承；本轮未重复修改异常CMS |
| PL-G9-11 | 当前本地环境关联已补；外部receiver/账户证据NOT_VERIFIED |
| PL-G9-12 | 前轮受影响共享回归按未变组合继承；F03修复后须提供对应新版本/相邻回归 |

## 6. 交付与停止点

证据目录 `gate9-v0.3/`：独立HTTP/CMS、receiver关联和焦点运行证据；`developer/`保存D16 V0.3原件副本；[证据索引](gate9-v0.3/evidence-index.json)记录类别、采集方及hash。开发缩放是ACTUAL_RUNTIME原件审阅，方法源码为SOURCE_INSPECTION；非D23亲自运行，未混同真实接收。

本轮交回D16仅F03定向修复及E02剩余外部证据处理；不要继续返修已关闭的缩放采集问题或重做F01/F02。Applications按原任务继续，Gate9保持READ_ONLY_QA_IN_REVIEW，Gate10未授权。

发送记录：依据用户既有发送授权，本轮已成功发送至D16 **00Con**（`01a07a66-3c4a-75a2-9df4-648942742f9e`）；send_message_to_thread返回同一任务ID、isError=false。待F03修正及剩余外部证据，不能以消息发送代替结果。
