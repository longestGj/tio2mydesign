# PRODUCT-000 D32 Gate 3执行与自检 V0.1

日期2026-09-20。执行者 `/root/product_d32_gate3`。状态 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`，不是独立审查或Gate关闭。

## 输入卡与身份

范围 `/products/`、PRODUCT-000、tio2-my，仅D23规划。用户连续授权由[控制记录](PRODUCT-000_D32_GATE3_GATE9_CONTROL_V0.1.md)保存；停止于本关提交。后续明确依次Gate4制作→Gate5内容与视觉独立审查→Gate6→D32“01开发”Gate8→Gate9。

批准A/B/C等价映射：Brief V0.4 §7为顺序/职责；完整视觉规格V0.13 A2–A6及CMS映射V0.3为准确正文和14摘要、五步、五FAQ；CMS映射与响应式验收V0.3为行为合同。旧Content Architecture V0.1未被改写部分仅补充Process和Not Sure/failure精确文案，V0.3关系增补及Brief覆盖其中过时门禁。权威仍为这些原件，content-extraction.json只是机器提取快照。输入实际hash见[input-identities.json](../04_planning/d32-gate3-v0.1/input-identities.json)。

指定视觉基准为HOME-001当前V1.12及其已批准共享合同；来源不是首页业务HTML。Products Hero binding原件DRAFT被七页Approved Baseline V1.0正式锁定；后续Current Gate9 Manifest V1.0 §1和独立验收§4的用户决定接受390自然四行、36px/700、正常零字距。本次实测3/2/4行，不继承旧D16运行通过。

候选：[product-planning.html](../04_planning/d32-gate3-v0.1/product-planning.html)，39157 bytes，SHA256 `f05e59a8cb3739987209600c9d98bc40fa6f47c020d8e22431b41d11d9067dd3`。
生成源build.cjs、planning.css、planning.js及提取数据都在同一正式目录；运行仅依赖页面中立字体及生产Logo。冻结[freeze.json](../04_planning/d32-gate3-v0.1/freeze.json)、[预检](../04_planning/d32-gate3-v0.1/preflight.json)、[正式资产清单](../04_planning/d32-gate3-v0.1/asset-index.json)。

## 基准继承和差异

| 基准规则 | 本页应用与继承 | 差异依据/责任 |
|---|---|---|
| Global Chrome V0.5、Logo、法律行 | 中立consumer V0.2生成，Products current、固定RFQ、无CURRENT | 不复制Home HTML；本页所有菜单/Cookie均实测，不借首页PASS |
| Home与Products共享RootPageHero | 1200容器、56/44/36与700、开放白底、无装饰竖线 | Products已批准information-card 14/4/6/5/2/1，不能用首页照片替换；390四行按后续用户决定 |
| 品牌Inter/Navy/浅背景与CTA增补 | 基础字体、层级、按钮和功能Teal #008078共用合同 | 不把旧Product截图中早期交互色或压缩字距当现行权威 |
| 本页内容密度 | 应用选择、目录、评估步骤按Products源 | 不复制Home模块数/卡片数；Gate4完善视觉，不重写正文 |
| 旧Playbook冲突 | 保留用途/关键词分工，采用V0.3 8/8/7/4/2/1关系 | 旧M2377禁止、旧Hero CTA、旧可见CURRENT和D16开发归属不执行 |

## 三端结构与真实状态

1440：Hero文本/信息卡，选择器左右两区，结果两列，Process两列；目录2×2且高度跟随6/5/2/1，摘要桌面326px，88px行高；五步220px×236px单行/25px间距；Support三列。
768：Hero媒体顺延Actions后；选择器上下/结果两列；目录单列但保留型号/摘要/行动三栏；评估2列3行；Support单列。
390：Hero四行无字距压缩；选择控件两列+Not Sure全宽，结果单列；目录型号与行动在首行、摘要完整置下；五步320×230单列；Process、Support、RFQ重排，无横滑。

所有路由链接是完整站规划，不声称目标已实现。Process 2/1/0、Support3/2/1/0及CR未就绪为显式LOCAL_SIMULATION；父Process/CR文本保留，0目标网格高度0，Support0整段移除。原生按钮Enter选择六组，Not Sure与failure/no-result有完整目录出口。五FAQ初始HTML齐全，JS默认一开四闭，无JS全部可读。未执行业务请求或真实表单。

## 核验、自检与修正

工具：本地Playwright Chromium 151.0.7922.34，DPR1，1440/768/390×1000；agent-browser CLI不可用，使用已存在本地渲染器。运行原件[diagnostics/runtime.json](../04_planning/d32-gate3-v0.1/diagnostics/runtime.json)、[补充行为](../04_planning/d32-gate3-v0.1/diagnostics/additional-behavior.json)、[最终几何](../04_planning/d32-gate3-v0.1/diagnostics/final-geometry.json)。

- 三端全页5281/7734/10002px，全部分段至Footer实际查看；文案、型号与完整摘要/5问答/5步骤对应。横溢出0，已加载Logo/字体，所有可见a/button至少44×44。屏幕截图不是生产实现证据。
- 最难读区域是14摘要与步骤2长文；桌面326px摘要实测完整。诊断步骤2贴近/越过边界已在固定高度内统一调整padding与字体参数，并逐端重新查看，最终文字底边均在卡片内；不更改文字或顺序。
- 最易失败操作是菜单退出：两窄端实际打开、Escape和点击链接关闭、main inert/滚动锁恢复、返回Menu；补测Tab正反循环和跨桌面断点关闭。Cookie实际打开、Shift+Tab/Tab循环、Escape与焦点返回。
- 响应风险为目录三栏到型号/行动首行+摘要次行，所有14行关系保留；Tablet没有机械缩小Desktop。
- 预检检查器已运行，`PASS_FOR_FORMAL_RENDER`，failures0；先冻结再生成三端/菜单/Not Sure/Process0正式图共6张。执行自检不代替独立审查。

## 未测与后续

Gate4仍需完整视觉质量与首页并排对照、全部状态最终图；Gate5独立核验完整内容/视觉。此处没有生产CMS、SEO JSON-LD、真正route resolver、表单接收或设备读屏测试；由Gate8/9实际候选承担。页面子路由/RFQ依赖仍开放，规划结果不变成已上线声明。最新正式域名tio2products.com由总控决定记录，规划采用相对路由，Gate6同步机器输出。首页设备豁免不擅自扩张。

已知本关未解决必修：无作者确认项；最终由独立审查判定。纯视觉精细度交Gate4。未改D32/D16、Manifest/Status/Index。
