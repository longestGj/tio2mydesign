# Poland Gate 9 定向复验 V0.4

2026-09-07，Review ID：**PL-G9-RECHECK-04**。用户“已经完成了，”承接上一轮修复复验。结论：**F03 在新构建独立复验关闭，当前已发现的实现必修 F01/F02/F03 全部关闭；Gate 9 仍等待外部接收证据与跨页依赖，未整体批准/关闭。**

## 对象与变更

批准组合沿用 [Manifest V0.24](../MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.24.md)，原问题为 [PL-G9-RECHECK-03 / F03](MARKET-EU-PL_GATE9_TARGETED_RECHECK_V0.3.md)。当前工作流及权限不变。

D16 `codex/poland-development`，base `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb`加未提交**53文件快照**；D23重算全部匹配。当前本地URL `http://127.0.0.1:3015/markets/poland/`，构建 `.next-poland-g9-f03`，Build ID **51GHGEaKhS8jeu855WrXQ**；实际响应ID和14项引用静态资源与磁盘匹配。

生产修复仅共享 Global Chrome CSS 的末尾 RFQ `:focus-visible`：白色6px内侧分隔与绿色3px outline、offset -6px。原51文件组合除共享CSS外的50文件保持，新增/变化测试按新快照登记。正文、CMS模型、receiver和非聚焦视觉不改。新版重新核验五模块CMS→API→初始HTML全文/动作、metadata/query及导航；A/B未重建，本次纯Malaysia焦点样式不改变原隔离通路，不重演异常CMS。

## F03 关闭证据

**CLOSED — 指定本地新实现验证**，关联 PL-G9-03/09/12。

D23在768和390实际键盘打开Menu，Close→Shift+Tab顶部RFQ→Shift+Tab末尾RFQ；分别保存未聚焦/聚焦图。实际 `:focus-visible=true`，绿色outline与白色内侧分隔清楚可辨，按钮仍52px高，无观察到焦点标识裁切；Tab回顶部RFQ、再Tab回Close，Escape回Menu。证据：[独立操作/样式](gate9-v0.4/focus-independent.json)、[768聚焦](gate9-v0.4/focused-768.png)、[390聚焦](gate9-v0.4/focused-390.png)。

另独立核对Home/390同一共享RFQ焦点及Cookie反向循环/Escape恢复，结果正常；证据 `home-focus-regression.json`、`home-cookie-regression.json`。开发提供Home三端导航及Home/UK/Privacy Cookie回归，保留开发执行者身份，不冒充D23全部重跑。

审核新构建的原生200%测试记录及菜单底部未聚焦/聚焦原图：同一固定窗口、CSS712×452/DPR2，RFQ经菜单内部滚动完整可达，左右边缘从绿色转为白色分隔，DOM与像素支持修复；哈希与新Build绑定。不把旧Build图挂新版，也不把本次开发原生zoom写成D23亲自执行。

## 接受条件与剩余项

| 条件 | 当前结论 |
|---|---|
| PL-G9-01 | PASS，当前CMS全文/五模块动作再次独立一致 |
| PL-G9-02 | 指定三端视觉局部PASS沿用未变布局/正文及定向新样式证据；未聚焦外观保持 |
| PL-G9-03 | F03关闭，指定compact焦点/循环及原生200%证据通过；未测真机/其他引擎/屏幕阅读器范围仍如实保留 |
| PL-G9-04 | RFQ入口/字段语义保持；真实服务商接收NOT_VERIFIED |
| PL-G9-05 | DOC入口/基数保持；当前本地接线已验，历史provider接受保留；账户与收件证据未齐 |
| PL-G9-06 | 当前13目标12个正确200，Applications仍404；用户确认开发中依赖 |
| PL-G9-07 | PASS，当前精确metadata、Schema及query再次一致 |
| PL-G9-08 | 本地索引保护PASS；最终生产配置与Gate10控制保持 |
| PL-G9-09 | 共享消费、法律、Cookie保持；F01/F02/F03全部关闭 |
| PL-G9-10 | 继承原本地定向隔离矩阵；仅共享焦点CSS变更，CMS/query/路由/cache/表单逻辑未变，不扩展为全仓/生产证明 |
| PL-G9-11 | E02本地配置→当前运行输出关联保持并绑定新Build；当前provider账户/批准目的地、RFQ真实接收及邮箱证据NOT_VERIFIED |
| PL-G9-12 | F03关联共享回归已核对；保留E02和Applications等依赖，不签整体关闭 |

**下一步无需再给Poland增加页面修复。** provider/接收owner提供当前路由指纹与批准账户、启用状态、目的地的只读关联；DOC收件owner核对既有一次测试记录；RFQ如确需真实外发，先准备准确版本与单次测试payload，再取得对应一次发送授权。当前未获得新的真实发送授权，不能自动重试或重发DOC。Applications按原owner继续开发。

原生产CMS/账户、Privacy/Consent、最终索引与发布条件保持各owner责任；允许后置事项不改称页面代码缺陷。当前状态为READ_ONLY_QA_IN_REVIEW，等待接收/依赖证据，不是等待更多无依据页面打磨。验收局部通过不代表发布授权。

## 证据与记录

[独立HTTP/CMS/版本](gate9-v0.4/http-content-identity-evidence.json)、[证据索引](gate9-v0.4/evidence-index.json)；`developer/`为D16 V0.4原件副本，保留开发回执、快照、测试和原生zoom原日期。独立浏览器/HTTP为ACTUAL_RUNTIME，开发原生zoom为ACTUAL_RUNTIME原件审阅，源码为SOURCE_INSPECTION。D23未执行开发测试、CMS写入、真实提交或部署。

已依既有用户发送授权，将本轮关闭结果成功反馈D16 **00Con**（任务ID `01a07a66-3c4a-75a2-9df4-648942742f9e`）。工具返回同一ID、isError=false。消息明确停止重复页面返修，剩余条件归对应owner，不授权真实提交或发布。
