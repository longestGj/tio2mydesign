# Netherlands Gate 4 V0.1 独立审查

2026-09-07 · gate4_review_a · **CHANGES_REQUIRED / 待定向返修**

实际查看全部42张正式图并完成三端文案、交互、来源链接和共享状态检查。**必修仅NL-G4-IR01：Documents中的quotation request与句号之间8px额外空白破坏正常句尾排版。** 其余已测部分没有新增实质缺陷。作者最终报告、自检和资产清单末核完成；本报告正式提交并冻结，等待新版本定向复验，不构成Gate批准。

## 范围与独立性

依据Manifest V0.6、已批准Brief V0.2、A V0.1/B V0.2/C V0.1、G3关闭组合、REVIEW_SCOPE和G4-8PAGE-SERIAL-01。原始读取及69条上游身份复算见input-preparation.md/input-identities.json。使用layout-interaction-verification V0.2、core-risk-model、brand-applied-visual-design V0.1与当前共享/品牌合同。旧Brief/Playbook的启动/缺证门禁不覆盖最新批准组合。

先看本页冻结源/图并独立运行，initial-observations.md先于作者报告读取保存。总控在本人已看桌面Documents正常图后提示标点间隔；随后用自己的三端图和浏览器字符框测量判断，不以总控意见替代证据。未读取总控检查JSON，不改候选、上游、Manifest、状态或共享实现。

冻结NL-G4-V01-SOURCE-01；HTML SHA256 9ffe164adbf63246a36601990d1841dbb6af24fb177fbf559dbdc616a1396be3，CSS b03258c20af99e79a40216e3655586bc81a74c57ce934ddd4b45d40076add610。source-freeze f8b891534e8e8199104bb1e6211c219f587a711ba47a3b42fe5997daf8172ce2；export-inventory 125fdf7e053efc13a369212ace7e686e7dc146d31de21d0c59a3245ecedd5ad7。

## NL-G4-IR01 — Required，局部标点排版

位置：NL-04 Documents的未知Grade说明段，最后链接quotation request后的句号。1440/768/390正常Documents图均呈现“quotation request .”，明确可见额外空白。实际源没有插入空格字符、句号仍同行；独立测得链接右边缘到下一句号字符框均为8 CSS px。原因是`main [data-module="NL-04"] .reading > p:not(.action) > a { margin:8px; vertical-align:middle }`统一把非链接句号推开。证据：三端documents.png、document-quote-source-hover/focus.png及本目录punctuation-check.json。

这是范围很小的正常排版问题，不是文案/URL丢失，也不是已证实的命中或无障碍失败。现有外部margin不扩大44px点击盒；它为3px outline+4px offset的外侧焦点包络避让，所以直接归零并不安全。可采用让原句号随同目标或其他等效布局，兼顾连续标点与焦点安全，不能把当前8px作为不可替代的触达要求。

接受条件：

- 三端normal、真实hover和keyboard focus中，句号自然紧随quotation request，没有句号前异常间隔或孤立句号，全部原句仍顺畅可读。
- 原文所有字符、标点数量/顺序、href与RFQ语义不变；若仅将现有句号归入anchor，须明确记录可访问名称的标点差异并核完整段落相等，不声称标签逐字未变。
- 实际连续≥44×44命中区域保留，hover背景/下划线/外环不遮字或侵入邻文；不通过缩小目标、去掉可见焦点或直接清除间隔造成新问题。
- 回归同段Product Hub、“Not sure / Need help”、后续额外Grade不映射文档类型段、两个文档按钮及三端相邻区域；保留五模块和完整合同。无需全页重做。

Product Hub周围有可见额外词间留白，但当前字词关联清楚且用于现有焦点避让，未单列必修；本项不是要求所有margin归零。返修应保留V0.1冻结历史，在新组合复验。

## 图像与文案实际检查

42张正式PNG均逐张实际打开，最大高1542px可原生读清：三端Hero、Applications、Products、Documents、RFQ、Footer共18图；三Cookie和两Menu共5图；1440主请求hover；VVVF、Documents Product Hub、Documents quotation request各三端hover/focus共18细图。不以G3缩放长图替代正式图阅读。18普通区域图独立同源、同clip、无焦点/空白指针渲染逐字节相等；三端Footer确为normal。18链接状态图同实际状态独立渲染逐字节相等。

标题、段落、列表、链接与独立解析批准B三端全部相等；无表格字段，不把空表格比较当成额外质量证据。三应用对象的标题和段落D三列、T标识行、M完整纵向块逐一核对，Coatings、Printing Inks、Plastics and Masterbatch的不同体系/评价信息没有交换、截断或变为推荐。

五模块顺序完整。Hero主体、Malaysia-origin与Netherlands采购/技术评估关系明确。VVVF长名称、会员企业segments→sections归属和完整领域列表保留，后接不据此决定TiO2 Grade的限制；没有市场份额、需求量或IKHLAS能力推导。Products完整保留不建立Netherlands推荐Grade的中性说明。

Documents保留单结构化Grade、多文档类型、未知Grade可开始但提交前必选、额外Grade仅补充且不单独映射类型、需要独立映射时分Grade申请。NL-D02已批准COO upon request精确句出现一次，没有把DOC-COO页的未批准边界错误套入。本页不扩展每批证书/海关优惠/签发保证。RFQ四bullet、数量MT、可选city/port、公司联系方式、提交后人工review/contact原句完整。

品牌判断：保留白底与浅底交替的工业说明层级；Navy标题、Teal可行动作、实心主RFQ与描边辅助路径区分明确。三应用对象同等呈现，没有认证图案、优选排序或国家Grade适用暗示。VVVF把“The”和长名称作为一个可换行组处理，阅读归属清楚；手机Breadcrumb升至14px。IR01之外未见需要以新图片/装饰/模块重排解决的问题。

## 实际触达、颜色与共享运行

Chrome152.0.7977.82、headless、本地file、DPR1；1440×900、768×900、390×844。所有可见Header/main/Footer及Menu/Cookie实际normal/hover/Shift+Tab→Tab焦点测量，文字最低4.520073:1，focus对实际表面最低4.520073:1；目标最低44×44。所有focus-visible和真实hover成立。文字比值与真实图分开评判，不能抵消IR01正常态排版问题。

VVVF及Documents两正文链接共三链接×三宽度×三状态27组：单client rect；连续44×44区域1936个CSS像素中心命中全部通过；另49近边缘/内部点在目标居中后全部通过。相邻段落非链接字符框与点击盒、focus向外7px包络无交叉，邻字符中心误命中0。VVVF桌面/平板431.640625×44.59375，手机303.40625×71.78125；Documents Product链接104.9375×44（手机99.515625×44），Quote147.1875×44（手机139.609375×44）。

首轮scrollIntoViewIfNeeded/Tab把部分VVVF底边停在视口边界，最下采样落到视口外产生miss；保留link-probe.json，不将其误报成页面缺陷。随后显式居中、重新维持hover或键盘focus测量，link-probe-centered.json无miss，正式clip图仍匹配。此补测是解决测量边界，不是修改页面或删除失败记录。

Menu在768/390的Home入口、正反循环、Escape/Close返Menu、选择关闭、背景inert/拒焦/滚动锁及断点恢复均实际运行。Cookie Close首焦、正反循环、背景拒焦、Escape/Close回触发器均通过。跨Desktop时activeElement=BODY作为共享继承观察保留，不声称该路径可见焦点完整。原G3内联CSS/脚本精确未变，生产Logo改包内相对引用，Markets当前状态正确，无CURRENT买家标签。

三端所有12个正文链接均实际点击；共享其他入口另有21/22/22条本地记录。所有RFQ包含source_page_id=MARKET-EU-NL及destination_country={value:'Netherlands',visible:true,editable:true}；Documents仅source_page_id，**没有origin_supplier_qualification或其他文档/Grade预选**。Products、Document Hub、VVVF和普通导航context=null。kind=LOCAL_SIMULATION_NOT_RECEIVED，不是生产表单已接收。

禁JS内容/原生href与批准B相等；本次未宣称JS菜单/弹窗禁JS可用。没有pageerror、外网请求、横向溢出。实际receiver可编辑/移除、持久化、提交/归因、实时VVVF可达性、其他浏览器/物理设备/原生缩放/辅助技术均未在本地范围验证，不称其已完成或尚未实现。代表样例不代替Gate5整页或生产批准。

## 身份、复现与最终末核

初次独立复算冻结输入/运行文件/42图共105身份记录零差异，42图尺寸一致，源freeze与派发SHA一致。源级变更为新增方向CSS、VVVF两span包裹及Logo相对路径；批准全文/链接/原内联样式/行为保持。身份一致不等于视觉批准。

可复现证据：verify.cjs / identity.json / runtime.json；link-probe.cjs / link-probe.json及centered版本；punctuation-check.cjs / punctuation-check.json；supplement.cjs / supplement.json；作者前发现initial-observations.md。候选及正式PNG全程只读，未重复保存整套PNG。

独立发现保存后，完整核对作者最终方向报告及执行自检。两者明确CHANGES_REQUIRED，承认Documents外margin的自然排版副作用，没有以自动检查全绿宣称通过；覆盖映射、局部模拟边界与本次独立检查一致。作者列举较广的额外词间/移动端行距问题，本审查必修仍以上述可重复的句尾8px间隔和相邻回归条件为准，不增加偏好项。作者对比数字按本报告自己的实际计算保留。

末核文件：方向报告SHA256 a52737de8c8c91fb26e66882b007f64c4098ff2bf287ce161cb6c2e9a52728ae；执行自检6f15288525aae02500f645043e783a037deeeeffbea691e454917957577bea97；实际资产清单位于`approval_core/asset-inventory.json`（派发文本漏写此子目录，实际文件与提供SHA完全相符）af9de9f6e8a4d99a6f49ac4808e097069fcac0ff41d03b6e080d6ff48d194cdd。final-check.cjs/final-check.json复算最终清单、freeze、export合计164条身份记录，161相符；三条差异仅为冻结后AGENTS.md、PROJECT_CONTEXT.md、02_DIRECTORY_GUIDE.md的上游治理更新。候选源、依赖、42正式PNG、最终作者报告/自检及证据身份均相符，没有候选冻结后变更。JSON保留每项原SHA与实测SHA，不把三项漂移隐藏成零差异。

冻结后规则漂移已独立重读：当前AGENTS SHA256 8a02fe1fc011a2dd069585a44fe7a95da1a5406e45f960846b7b28f068436b60、PROJECT_CONTEXT d0974912aa08559b7185d5b3043566154bec0bc6e3b961125199e625b90bf65f；以及Directory Guide、GATE_WORKFLOW_V2.0、PAGE_GATE_1_5_STANDARD_V1.2和治理细则V1.1适用章节。此次合并原Gate7交付至Gate6，历史目录/批准文件不回写；Gate4样例、证据与授权要求保持，不能进入Gate5。作为治理漂移记录，不增加视觉Finding，也不重写V0.1冻结清单；V0.2应绑定当前规则。

正式结论：**CHANGES_REQUIRED，NL-G4-IR01需定向返修；其他已测项无新增实质缺陷。** 保留上述明确未测范围，由总控协调新组合并在冻结后独立复验，本审查不自行批准或启动下一页。
