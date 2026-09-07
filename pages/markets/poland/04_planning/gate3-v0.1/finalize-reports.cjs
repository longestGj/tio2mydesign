// Writes reporting artifacts only; never changes the frozen planning candidate.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec',out=__dirname.replaceAll('\\','/'),page=root+'/pages/markets/poland',ev=page+'/05_review/MARKET-EU-PL_GATE3_EXECUTION_EVIDENCE_V0.1';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const html=out+'/MARKET-EU-PL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html';
const expected='2828406c99e52a3cd3990a06014284b18242f71ae7913d17925df474b9fe160a';
if(sha(html)!==expected)throw Error('Frozen source changed');
const render=JSON.parse(fs.readFileSync(out+'/render-evidence.json','utf8'));
const measure=JSON.parse(fs.readFileSync(ev+'/measurements-and-actions.json','utf8'));
if(render.sourceSha256!==expected||measure.sourceSha256!==expected)throw Error('Evidence mismatch');
const snap=root+'/99_workspace/CONV-DOC/gate9-bc695d2-clean-20260904-0730';
const sources={
 'shared-chrome-data.snapshot.json':snap+'/wordpress/plugins/tio2-site-model/config/tio2-my-global-chrome.json',
 'shared-legal-data.snapshot.json':snap+'/wordpress/plugins/tio2-site-model/config/tio2-my-legal-pages.json',
 'shared-chrome-style.snapshot.css':snap+'/components/sites/tio2-my/malaysia-global-chrome.module.css',
 'Inter-Variable.ttf':root+'/99_workspace/PRODUCT-000_gate5_render_inputs/Inter-Variable.ttf',
 'Inter-OFL.txt':root+'/99_workspace/PRODUCT-000_gate5_render_inputs/Inter-OFL.txt'
};
const dependencies=Object.entries(sources).map(([name,origin])=>{const p=out+'/dependencies/'+name;if(sha(p)!==sha(origin))throw Error('Dependency drift');return {path:p,origin,bytes:fs.statSync(p).size,sha256:sha(p),originSha256:sha(origin),role:'read-only planning dependency snapshot; original owner authority retained'};});
const inputPaths=[page+'/MARKET-EU-PL_CURRENT_GATE_BASELINE_MANIFEST_V0.11.md',page+'/05_review/MARKET-EU-PL_GATE3_USER_AUTHORIZATION_V0.1.md',root+'/docs/page-briefs/MARKET-EU-PL_POLAND_BRIEF_V0.2.md',page+'/04_planning/MARKET-EU-PL_GATE2_CONTENT_SKELETON_V0.2.md',page+'/04_planning/MARKET-EU-PL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',page+'/04_planning/MARKET-EU-PL_GATE2_CONTENT_CONTRACT_V0.4.md',root+'/skills/responsive-wireframe-design/SKILL.md',root+'/skills/layout-interaction-verification/SKILL.md',root+'/agents/gate3-execution/agent.md'];
const identity=p=>({path:p,bytes:fs.statSync(p).size,sha256:sha(p)});
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(d+'/'+x.name):[d+'/'+x.name]);
const files=[...walk(out),...walk(ev)].filter(p=>!/(asset-inventory\.json|DESIGN_METHOD_REPORT|finalize-reports\.cjs)$/.test(p)&&!p.endsWith('.md'));
const assets=files.map(p=>{const x=identity(p);x.role=p.includes('/attempt-')||p.includes('before-')?'preserved superseded evidence':p.endsWith('.png')?'rendered planning / verification evidence':p.endsWith('.cjs')?'reproduction helper':'source / binding / measurement / dependency';if(p.endsWith('.png')){const b=fs.readFileSync(p);x.physical={width:b.readUInt32BE(16),height:b.readUInt32BE(20)};x.scale=p.includes('at2x')?2:1;x.logicalImage={width:x.physical.width/x.scale,height:x.physical.height/x.scale};x.state=p.includes('MENU')||p.includes('menu')?'menu open':p.includes('COOKIE')||p.includes('cookie')?'Cookie settings open':p.includes('hover')?'body CTA hover (focus remains)':p.includes('focus')?'body CTA focus':'initial/full-page or overlapping readable segment';}else{x.physical=null;x.logicalImage=null;x.scale=null;x.state='not applicable';}return x;});
for(const e of render.exports){if(sha(e.path)!==e.sha256||fs.statSync(e.path).size!==e.bytes)throw Error('Render mismatch');}
const logos=['tio2-malaysia-primary-horizontal-v0.1.svg','tio2-malaysia-reverse-monochrome-v0.1.svg'].map(n=>({...identity(root+'/brand/logo/candidates/v0.1/'+n),role:'referenced approved production SVG; not copied or edited'}));
fs.writeFileSync(out+'/asset-inventory.json',JSON.stringify({status:'DRAFT_FOR_PROJECT_CONTROL_REVIEW',candidate:identity(html),inputs:inputPaths.map(identity),dependencies,logos,exports:render.exports,assets,scope:'Asset inventory only, not page Manifest. Inventory and final reports do not record their own hashes.'},null,2));
const link=p=>'['+path.basename(p)+']('+p+')';
const design=`# MARKET-EU-PL · Gate 3 设计方法报告 V0.1

2026-09-07 · DRAFT_FOR_PROJECT_CONTROL_REVIEW · 执行 Agent，自检不是独立批准。

本次是实际波兰市场页首次 Gate 3。用户授权及当前组合为 ${link(inputPaths[0])} 与 ${link(inputPaths[1])}；完整 Brief V0.2、A V0.2、B V0.2、C V0.4 的精确路径、字节数及实算 SHA-256 见 ${link(out+'/asset-inventory.json')} 的 inputs。B 是唯一可见正文源，生成器直接读取并按批准块序映射；没有编辑 A/B/C、Brief、当前 Manifest 或共享源。

已按 ${link(inputPaths[8])} 启动并读取适用根规则、Context、登记/关键词本页及竞争归属、Market Playbook、治理与 Gate 标准、批准上游和当前共享合同。设计实际使用 ${link(inputPaths[6])}：映射内容、三端重排、离线渲染、整页及重叠分段查看、修正后重导。核验实际使用 ${link(inputPaths[7])}，输出单独的执行自检，不借方法名称提升审查身份。

## 内容至布局

| B 的模块位置 | 读者判断与保留关系 | 三端结构 |
|---|---|---|
| PL01 / H1、Hero、面包屑 | 确认波兰工业采购范围，进入报价或产品 | 1440 H1 54px、内容最大宽930；768 H1 44px；390 H1 36px、行动单列 |
| PL02 / Confirm the Material You Need | 原料 TiO2 与成品白色母粒区分，完整限定仍在同段 | Desktop 标题340px＋正文；Tablet/Mobile 标题先于正文 |
| PL03 / Prepare Your Product Review | 不知道牌号也可开始；Coatings 与 Plastics and masterbatch 各自解释不混合 | 1440 两列；768 独立采用两列、32px间距；390 按标题和解释完整单列 |
| PL04 / Documents for Product and Supplier Review | 文件类型、COO 可请求、未定牌号下一步及两条行动相邻 | Desktop 两区；768/390 自然流单列，三段及限定不折叠 |
| PL05 / Request a Quote for Delivery to Poland | 需求信息、多个牌号在 Additional Requirements、团队回复承诺和EU上级入口 | 完整三段后两行动；390 主行动全宽、上级链接自然换行 |

正文7个标题、11段正文、10个正文/面包屑链接保留准确文字和目标，五模块顺序不变。本页没有表单、FAQ、表格、条件选择、图片或提交状态；未添加以演示为目的的控件。B 中未知牌号与多牌号说明属于接收页合同，不转造本页表单。C 的 SEO/Schema 边界继续由批准合同控制，本规划稿不是 SEO/Schema 实现。

## 共享消费与结构取舍

优先复用 D23 CONV-DOC 只读共享组装源（路径及 hashes 在 source-binding.json 与 inventory.dependencies）。正式 HTML 读取随交付保存的 CSS/Inter，不依赖临时目录作为唯一显示依赖。JSON/CSS/字体及OFL五个快照与原文件逐字节 hash 一致；快照只是复现证据，不成为共享新权威。原组件 TSX 是行为/组装参考，未复制或改写 owner 实现；生产SVG仍直接引用批准正式资产路径，身份见 inventory.logos。

| 当前合同依据 | 对旧共享快照的本地正确消费 |
|---|---|
| GLOBAL_HEADER_FOOTER_SPEC_V0.5.md 及未替代的 V0.1 基线；固定 RFQ 与 Procurement 后续决定 | Markets 为当前导航，视觉粗体＋下划线/左线，不显示 CURRENT；固定RFQ，移动标签RFQ，Menu展开后Close；Footer中性原句与Procurement |
| brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md、品牌标准 | 功能色#008078；Inter；Header84/64；Logo180×60/120×40；控件实际命中区至少44×44；正文上下文行动采用描边/文本层级 |
| GLOBAL_HEADER_FOOTER_LOGO_ASSET_ADDENDUM_V1.0.md、PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md | 正版彩色与反白SVG，保留原路径、形状、比例，不另制Logo |
| GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md、LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md | Privacy Policy、Dasar Privasi (BM)、Cookie Policy、Cookie Settings及版权；BM准确路径/ms/privacy-policy/；不恢复Terms |
| LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md、SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md及其合同 | no_optional_analytics，沿用当前共享Cookie settings标题、正文和两操作；无可选分析开关或首访Banner |

上述依据位于 D:/23MySec/docs/architecture、D:/23MySec/brand 和 D:/23MySec/pages/legal-privacy/05_review 的对应正式文件，原文件已实际读取。最高版本号没有单独取代继承判断：V0.1未替代的尺寸/文字仍有效；旧CURRENT、RFQ-OFF、Conversion和无法律链接规则被后续批准覆盖。Market Playbook旧两端/Hub限制服从当前Brief、B/C与完整三端要求。

## 资产与复现

当前可编辑源：${link(html)}，SHA-256 ${expected}。生成与渲染辅助脚本位于同目录 build-pl-wireframe.cjs、render-design.cjs；打开HTML只需正式依赖目录与原生产SVG。重新生成另需批准B和source-binding列出的只读溯源文件。已有PNG无需脚本即可查看。

三张全页：1440×2387、768×2854、390×3810，均对应逻辑宽1440/768/390、DPR1。菜单768/390及Cookie1440/768/390五张状态均为逻辑高1000、DPR1。完整绝对路径、角色、逻辑视口、物理尺寸、比例、状态、字节和SHA-256在 ${link(out+'/render-evidence.json')} 与 ${link(out+'/asset-inventory.json')}；后者也列正式依赖、Logo、辅助脚本及自检证据身份，不登记自身hash、不替代页面Manifest。

使用已提供 Node/Playwright 与本地Chrome 152.0.7977.82，在字体ready及SVGdecode后导出。执行命令为提供的node.exe加相应cjs绝对路径；具体node/playwright/Chrome路径保存在render-design.cjs与verify-layout.cjs。没有网络请求、表单发送、生产访问、D16操作或付费工具。

## 实际查看、修正和限制

实际打开三端全页检查结构，并逐张看重叠分段（1440四张、768四张、390六张），覆盖正文全部、行动和Footer；菜单两端、Cookie三端、CTA focus/hover三端及200%等效reflow状态也已实际打开。最新Footer法律行与相邻区域复验，三端图和适用状态均重导且身份一致。

保留 attempt-1 和 attempt-2 的前版HTML/source-binding/render-evidence，以及自检目录的前轮测量和 before-legal-row-alignment.png。前版缺陷不是最终结果：PL-G3-D01临时唯一依赖已随正式快照修复；PL-G3-D02菜单链接只记录意图未关闭，已改为选择后关闭并复原背景；PL-G3-SC01法律button与链接纵向对齐不统一，已统一44px内垂直居中。菜单左对齐与展开背景滚动锁定也完成。旧记录未覆盖，旧PNG未全部另存，不能据旧记录重建每张旧图。

本地实际操作与精确结果在 ${link(ev+'/measurements-and-actions.json')}，结论及四项风险在 ${link(page+'/05_review/MARKET-EU-PL_GATE3_EXECUTION_SELF_CHECK_V0.1.md')}。所有链接准确保留href，但点击仅在本地记录导航意图；未证明目的页、预填、提交、收件、生产Cookie运行或法律合规。200%证据是CSS720×500、DPR2模拟1440×1000物理画面的reflow，不是浏览器UI缩放或真实设备。没有语音读屏/真实触屏检验。

已完成本授权范围内交付，没有已知未解决的Gate3布局缺陷；需总控独立审查和用户决定，本执行方不予批准、不进入Gate4。
`;
fs.writeFileSync(out+'/MARKET-EU-PL_GATE3_DESIGN_METHOD_REPORT_V0.1.md',design);
const check=`# MARKET-EU-PL · Gate 3 执行自检 V0.1

2026-09-07 · DRAFT_FOR_PROJECT_CONTROL_REVIEW · EXECUTION_SELF_CHECK_NOT_INDEPENDENT_REVIEW

本报告由设计执行者按 ${link(inputPaths[7])} 完成。原始完整B、A/C/Brief、当前Manifest V0.11和授权记录均实际读取；当前共享Chrome/品牌/Logo/法律/接收合同亦直接读取。初次检查后，对发现的本地消费和布局问题定向修正并复验；未编辑批准输入或他人审查结论。

被审候选 ${link(html)}，SHA-256 ${expected}。原始输入、全部资产实算身份、依赖快照来源见 ${link(out+'/asset-inventory.json')}；设计取舍与共享继承依据见 ${link(out+'/MARKET-EU-PL_GATE3_DESIGN_METHOD_REPORT_V0.1.md')}。本次核验只读候选，开始/结束hash一致；导出源hash与8张当前PNG逐一实算一致。

## 核验范围与实见

实际本地浏览器运行记录：${link(ev+'/measurements-and-actions.json')}。复现辅助：${link(ev+'/verify-layout.cjs')}。完整图见设计目录，原比例重叠分段及运行状态图见 ${ev}。

- 1440/768/390三端逐个比较B与DOM顺序，双向精确7标题、11段、10正文/面包屑链接；5模块，没有正文form/input/table/details。再查看完整图和分段可见性，文字没有因截断、固定高度或条件隐藏而丢失。
- 全页宽实测1440/768/390与scrollWidth一致，并检查可见元素边界、样式和截图，未发现裁切/碰撞/异常固定空白。真实长文产生页高2387/2854/3810。Header84/64、Logo180×60/120×40，Inter完成加载；各可见控制实际宽和高均达到44px。
- 每端实际点击全部10条正文/面包屑链接，准确记录批准href，无擅加查询参数。动作只证明本地导航意图，目的页未打开。
- 768/390实际打开菜单：Close标签、焦点进入Home、当前Markets标识；背景main/footer/logo/headerRFQ无法聚焦，菜单展开滚动锁定已作源检查；Tab/ShiftTab循环；Escape/Close返回Menu。逐条选中8个菜单链接后关闭并解除背景inert。跨桌面断点自动关闭逻辑已作源检查，但未另行执行跨断点关闭测试。深蓝菜单可滚动，没有复制新菜单正文。
- Cookie三端实际点开，Close首焦点，模态背景不能聚焦；两控件Tab循环；Escape/Close关闭后返回Footer触发器。当前no_optional_analytics正文完整，没有虚构可选开关或存储选择。
- 首个正文CTA三端focus/hover截图已查看，hover证据保留原焦点，不能据此声称独立鼠标无焦点状态。200%等效CSS720×500/DPR2下5模块保留、无横向溢出；菜单和Cookie状态实图已查看；reduced-motion为true。

全部三端先看整页再逐张看分段，范围为 full-1440-segment-1…4、full-768-segment-1…4、full-390-segment-1…6（重叠约100px）；首屏、PL02原料关系、PL03两应用、PL04三段、PL05三段及Footer均覆盖。菜单两端与Cookie三端的focus-close实图、三端CTA focus/hover及reflow两图已打开。最终受影响法律行1440段4、768段4、390段5再逐张查看。自动当前findings/errors为空，这是执行自检观察，不是独立PASS。

## 修正记录与接受条件

| ID / 位置 | 原实见及影响 | 接受条件与本次结果 |
|---|---|---|
| PL-G3-D01 / HTML依赖 | 首版CSS/Inter只指临时区，正式产物缺耐久显示依赖；总控早期观察 | 正式目录保存所需依赖、原来源hash可追溯；五快照逐字节一致，HTML无临时唯一显示依赖，生产Logo引用原批准资产。已满足 |
| PL-G3-D02 / 768、390菜单链接选择 | 首版只拦截记录，菜单未关闭，背景未复原；总控早期观察 | 八项逐条选择后关闭、aria-expanded=false、背景inert=false，保留正确导航意图；当前运行记录已满足 |
| PL-G3-SC01 / Footer法律行 | button文字与相邻链接纵向不一致，影响同组扫描；执行视觉改进建议 | 统一inline-flex居中且44px命中区不变；三端当前图已查看，已满足 |

早期菜单行曾受继承flex方向影响居中，已明确左对齐；展开时追加背景滚动锁定。所有布局变动后重导三端与相关状态，再跑内容/几何/交互回归。旧HTML/source绑定/渲染记录保存在设计目录attempt-1、attempt-2；前轮测量和法律对齐前图在本证据目录，原记录不覆盖。当前没有须执行方再修改的已知缺陷。

## 四项风险结论

1. 最难阅读位置为PL04长标题及三段文件/未知牌号说明，PL05多条件需求次之。Desktop分开标题和正文，Tablet/Mobile回到自然流，段落和两个行动紧邻。三端完整与分段图确认COO单句、未知牌号指引及回复句全部显示。
2. 最易失败操作为共享移动菜单选中后关闭和键盘背景隔离。当前两端实际点击/键盘验证满足关闭、返回和复原；Cookie三端也实际运行。正文没有不完整输入/提交反馈状态可测，未知牌号与多牌号语义由B说明引导接收页，不虚构本页表单。
3. 最有风险响应转换为PL03两应用两列转一列；768采用独立两列密度，390按Coatings完整块再Plastics完整块。标题与解释保留对应、顺序一致，未复制/截短或将产品关系改为新承诺。
4. 已知Gate3布局开放缺陷为零；未验证生产目的路由、Poland可编辑上下文/未知牌号/多牌号接收、真实发送/收件、生产Cookie技术状态、真实设备及语音读屏。其责任为相应接收页/共享owner与后续外部开发只读验收。200%仅等效reflow，不冒充实际浏览器UI缩放；这些边界不由本自检转为生产通过。

设计与本地证据已耐久保存，停止于提交总控；不更新当前Manifest、不授予Gate3批准、不启动Gate4。最终报告和清单保存后已从同路径读回，核对引用及文件身份；独立结论由总控另外形成。
`;
fs.writeFileSync(page+'/05_review/MARKET-EU-PL_GATE3_EXECUTION_SELF_CHECK_V0.1.md',check);
console.log(JSON.stringify({candidate:identity(html),reports:[out+'/MARKET-EU-PL_GATE3_DESIGN_METHOD_REPORT_V0.1.md',page+'/05_review/MARKET-EU-PL_GATE3_EXECUTION_SELF_CHECK_V0.1.md'],assetCount:assets.length,dependencies:dependencies.length,renderCount:render.exports.length}));
