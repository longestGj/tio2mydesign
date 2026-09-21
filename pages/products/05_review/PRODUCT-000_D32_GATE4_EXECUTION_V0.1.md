# PRODUCT-000 D32 Gate4 完整视觉执行 V0.1

2026-09-20；作者 `/root/product_d32_gate3`；dispatch `PRODUCT-D32-G4-EXEC-01`；workset `PRODUCT-D32-G4-V0.1`。状态 `DRAFT_FOR_PROJECT_CONTROL_REVIEW`，本文件为自检，不是独立审查或批准。

## 4A：VISUAL_DIRECTION_CHECKED

按 Gate4 Complete Visual Agent V1.4、方法基线 Manifest V1.9，品牌应用 V0.4、完整页面制作 V0.4、布局交互核验 V0.8执行；三个方法共用 `../04_planning/d32-gate4-v0.1/` 唯一工作集、源、input-index和evidence-index。批准输入沿 Gate3 Controller Closure V0.1和当前页面Manifest，精确身份在input-index/source-freeze。完整文案以Brief V0.4、完整视觉规格V0.13、CMS mapping V0.3及产品关系V0.3为准，旧Playbook过时隐藏项不恢复。

方向判断：Gate3 V0.2已经包含批准完整正文和可用视觉，不重做首屏或另找风格。与首页V1.12/批准视觉及D32首页 `pages/home/07_qa/d32-gate9-v0.1/visual/runtime-390-top-readable.png` 对照，继承同一Inter、深蓝标题、功能Teal、开放白底RootPageHero、浅底内容区、克制圆角、正式Logo和共享Chrome。Products采用已批准信息卡，而非复制首页照片或业务HTML。首页旧截图次CTA边色不能覆盖最新功能色增补。

规则与实例：Hero为开放白底双列/单列，390px H1为36px/700、零字距自然四行；目录四组6/5/2/1，桌面两列、移动单列并保留型号/动作与完整摘要关系；五个评估步骤全部展开，桌面220×236、移动320×230；三张支持卡按可用路由减少；五FAQ初始一开四闭，答案全量在HTML。正文#334155，标题#062B5B，功能#008078，底#FFF/#F5F8FB，footer#031B3A。既有共享owner资产、菜单、RFQ、法律及cookie对话框原样消费。

唯一实际差额：选择器选中态14px文字#008078在#EDF7F6上对比度4.413，改为现有#F5F8FB得到4.520；粗体、勾选、2px边框和aria-pressed保持。仅此CSS字面值变化，正文/链接/结构/响应规则/行为与G3 V0.2相同。没有新增视觉装饰、事实、页面或URL。

## 4B：完整页面与状态自检

`visual-runtime.json`实际Chromium渲染48项记录，1440/768/390字体Inter均加载，横向溢出0、main可见目标小于44px数量0。全部六应用+Not Sure均键盘Enter操作，保持焦点/pressed；6结果集合8/8/7/4/2/1，型号动作名称保留G3 F01修复。FAQ通过Space逐个展开；focus、hover、cookie打开/Escape检查记录在同一原始文件。empty/failure及process/support路由2/1/0、3/2/1/0是明确LOCAL_SIMULATION，不代表CMS/API。

完整三端正式图为1440×5281、768×7734、390×10002，DPR1。全部14目录、5FAQ、正文至Footer完整。6应用、Not Sure、empty/failure、process-one、support-one/two、FAQ全开、cookie共14状态图。正式源先锁定(source-freeze)，随后导出；正式运行见formal-render。状态图最后重采与锁定源一致。普通完整图无非预期焦点；状态图焦点为操作证据。

CAPTURE_CHECK：实际打开三张完整图确认连续层次和到Footer覆盖；全图工具缩略不作为小字可读证据。未改区的可读分段/最终evaluation图继承G3 diagnostics，准确身份列入evidence-index，依据唯一CSS变化不改变几何或正文；发生变化的选择器全部状态已重新按可读宽度打开检查。process/support/FAQ/cookie图已实际打开；未变重采图由身份核对确认。目录摘要、最长评估步骤及移动端内容在G3可读检查和本轮无结构变化证明范围内继承，不虚称又做了一次全文内容审查。

对比度：功能Teal/白4.818，Teal/浅底4.520；正文/白10.355、正文/浅底9.715；标题/白13.959；footer白/深底17.189，淡字/深底12.819。焦点Teal相对白/浅底分别4.818/4.520，超过非文本3:1；按钮文字沿用对应表面，hover不改变色。原始计算在source-freeze。

继承有效自检：G3 execution V0.1、diagnostics/runtime.json、final-geometry.json、additional-behavior.json以及V0.2 targeted-recheck.json（内容/URL/几何一致及型号名称）。菜单开关、trap/Escape、resize关闭、noJS目录/FAQ退化、原始正文双向提取与约束不因背景色变化重复全部测量；它们不是D32真实运行证据。新版正式图和状态检查提供本轮视觉覆盖。

## 开放项与边界

本阶段自检剩余必修：无；需不同身份Gate5审内容与视觉后由总控关闭。G6继续登记D32共享RootPageHero实现扩展、首页回归、scope/路由/API/表单/SEO与预览ItemList依赖；canonical/OG/Schema正式域名为https://tio2products.com/products/。此HTML不证明D32实施、生产链接可用或发布。未测真实设备/读屏/原生缩放、真实CMS/API/提交；保留G9适用范围由总控按授权处理，不挪用首页豁免。没有Gate10发布授权。

运行：直接在本机浏览器打开工作集product-visual.html；需保留D23相对目录和source-freeze中的字体/Logo。复现实测使用`node pages/products/04_planning/d32-gate4-v0.1/visual-check.cjs`（会重写工作集记录，审查建议复制脚本后改输出），渲染器Playwright Chromium151，本机依赖位置见脚本。静态只读查看不需服务、网络或D32环境。
