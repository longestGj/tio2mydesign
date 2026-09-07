// Report/inventory writer only. Frozen candidate and prior-page sources stay unchanged.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec',out=__dirname.replaceAll('\\','/'),page=root+'/pages/products/chloride-process',ev=page+'/05_review/PRODUCT-PROC-CL_GATE3_EXECUTION_EVIDENCE_V0.1';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex'),ident=p=>({path:p,bytes:fs.statSync(p).size,sha256:sha(p)});
const html=out+'/PRODUCT-PROC-CL_GATE3_RESPONSIVE_WIREFRAME_V0.1.html',frozen='2887150f659ceec3de26feb9a41fa961da22e0fcc705cb538f085d0615ae2f91';
if(sha(html)!==frozen)throw Error('Candidate changed');
const render=JSON.parse(fs.readFileSync(out+'/render-evidence.json','utf8')),check=JSON.parse(fs.readFileSync(ev+'/measurements-and-actions.json','utf8')),bind=JSON.parse(fs.readFileSync(out+'/source-binding.json','utf8'));
if(render.sourceSha256!==frozen||check.sourceSha256!==frozen||check.errors.length)throw Error('Evidence incompatible');
const prior=root+'/pages/markets/poland/04_planning/gate3-v0.1',priorInventory=JSON.parse(fs.readFileSync(prior+'/asset-inventory.json','utf8'));
const dependencies=bind.dependencies.map(d=>{if(sha(d.path)!==d.sha256||sha(d.origin)!==d.sha256)throw Error('Dependency mismatch');const source=priorInventory.dependencies.find(x=>path.basename(x.path)===path.basename(d.path));if(sha(source.origin)!==d.sha256)throw Error('Owner snapshot mismatch');return {...d,originalSource:source.origin,originalSourceSha256:sha(source.origin)};});
const inputs=[
 page+'/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.13.md',page+'/PRODUCT-PROC-CL_CURRENT_GATE_BASELINE_MANIFEST_V0.12.md',page+'/05_review/PRODUCT-PROC-CL_GATE3_USER_AUTHORIZATION_V0.1.md',page+'/05_review/PRODUCT-PROC-CL_GATE2_FULL_COPY_USER_APPROVAL_AND_CLOSURE_V0.1.md',root+'/docs/page-briefs/PRODUCT-PROC-CL_CHLORIDE_PROCESS_TITANIUM_DIOXIDE_BRIEF_V0.2.md',page+'/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_SKELETON_V0.4.md',page+'/04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md',page+'/04_planning/PRODUCT-PROC-CL_GATE2_CONTENT_CONTRACT_V0.6.md',root+'/agents/gate3-execution/agent.md',root+'/skills/responsive-wireframe-design/SKILL.md',root+'/skills/layout-interaction-verification/SKILL.md',root+'/docs/page-playbooks/PRODUCT_PLAYBOOK_V0.1.md',root+'/pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv',root+'/pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_UNIFIED_AUDIT_V0.3.md',root+'/pages/products/04_planning/visual-designs/PRODUCT-000_FULL_VISUAL_DESIGN_V0.13.md',root+'/docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md',root+'/brand/visual/TIO2_MALAYSIA_PRIMARY_CTA_ACCESSIBILITY_ADDENDUM_V1.0.md',root+'/brand/logo/production/PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md',root+'/docs/architecture/GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md',root+'/pages/legal-privacy/05_review/LEGAL_PRIVACY_CONV_DOC_POST_GATE9_CURRENT_AUTHORITY_MANIFEST_V1.3.md',root+'/pages/legal-privacy/05_review/SHARED-CONSENT_CURRENT_GATE9_BASELINE_MANIFEST_V1.1.md'
].map(ident);
const logos=['tio2-malaysia-primary-horizontal-v0.1.svg','tio2-malaysia-reverse-monochrome-v0.1.svg'].map(n=>({...ident(root+'/brand/logo/candidates/v0.1/'+n),role:'Original approved production asset referenced directly; not copied/modified'}));
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(x=>x.isDirectory()?walk(d+'/'+x.name):[d+'/'+x.name]);
const assets=[...walk(out),...walk(ev)].filter(p=>!p.endsWith('.md')&&!p.endsWith('asset-inventory.json')&&!p.endsWith('finalize-reports.cjs')).map(p=>{const v=ident(p),r=render.exports.find(e=>e.path.replaceAll('\\','/')===p),s=check.snapshots.find(e=>e.path.replaceAll('\\','/')===p);v.role=r?'Formal Gate 3 rendered asset':s?'Execution verification evidence':p.endsWith('.html')?'Editable offline planning source':p.endsWith('.cjs')?'Reproduction helper':'Binding/measurement/read-only dependency';if(r||s)Object.assign(v,{logicalViewport:(r||s).logicalViewport,physical:(r||s).physical,scale:(r||s).scale,state:r?r.state:path.basename(p,'.png')});else Object.assign(v,{logicalViewport:null,physical:null,scale:null,state:'not applicable'});return v;});
for(const a of render.exports)if(sha(a.path)!==a.sha256||fs.statSync(a.path).size!==a.bytes)throw Error('PNG mismatch');
const inventory={status:'DRAFT_FOR_PROJECT_CONTROL_REVIEW',candidate:ident(html),inputs,sharedAssemblyOrigin:bind.sharedAssemblyOrigin,dependencies,derivedAssembly:bind.derivedAssembly,logos,exports:render.exports,assets,note:'Inventory and reports omit own hashes. This is an asset index, not page Manifest or approval. Original owner contracts remain authoritative.'};
fs.writeFileSync(out+'/asset-inventory.json',JSON.stringify(inventory,null,2));
const L=p=>'['+path.basename(p)+']('+p+')';
const design=`# PRODUCT-PROC-CL Gate 3 设计方法报告 V0.1

2026-09-07 · DRAFT_FOR_PROJECT_CONTROL_REVIEW · 执行方制作记录。

本次为氯化法产品聚合页首次真实Gate3，授权入口 ${L(inputs[0].path)}、${L(inputs[2].path)}。批准组合为Brief V0.2、A V0.4、B V0.2、C V0.6，Gate2批准记录为 ${L(inputs[3].path)}。准确路径与实算身份见 ${L(out+'/asset-inventory.json')} 的inputs。B仅BEGIN/END BUYER CLEAN COPY之间参与生成；B-xx、Eyebrow/Primary action/Secondary action等编辑标签不显示。没有改写正文、URL、模块、事实或动作语义。

执行已读取 ${L(inputs[8].path)}，根AGENTS/Context及适用入口、登记/关键词本页和竞争归属、Product Playbook、完整Brief/A/B/C/Manifest与批准记录。共同治理、品牌、Logo、Chrome及法律继承前一页已完整读取且未变的同轮源，并核对当前入口；新增Product类型治理、产品关系V0.3与Hub A5.1八项精确摘要已读取。Product Playbook旧M-2377 Hold、两端与路由未就绪隐藏规则服从当前V0.3、完整三端规则及本页B/C；C的source_page_id覆盖Brief旧source_page写法，未来路由依赖不隐藏本页已批准链接。

实际使用 ${L(inputs[9].path)}，按内容映射→三端独立结构→字体/素材ready后渲染→整页与可读分段查看流程执行。另用 ${L(inputs[10].path)} 对原输入和候选运行执行自检；这两项方法不是审批人。

## 内容与结构映射

| B位置 | 保留的判断/关系 | 结构 |
|---|---|---|
| B00/B01 Hero | 三层面包屑、eyebrow、工艺H1、范围段落、目录锚点与RFQ | 1440宽1200内容框；H1为54px，768为44px，390为36px；Mobile主要动作全宽 |
| B02 工艺解释 | 两段定义和工艺标签限制，比较文章为独立链接 | Desktop标题340px/正文分列，Tablet/Mobile标题先于正文 |
| B03 八牌号目录 | 连续一个无排名列表，M-350→M-510→M-896→M-895→M-200→M-210→M-340→M-886；各摘要和专属URL | Desktop名称160px/摘要弹性/链接150px；Tablet名称与链接在左116px，完整摘要在右；Mobile名称→摘要→链接逐条完整单列 |
| B04 三步评估 | 每步标题与解释相邻，五应用举例不扩成逐牌号矩阵；两支持行动在最后 | Desktop标题与解释分列；Tablet/Mobile三步连续自然流，不设等高卡片 |
| B05 需求沟通 | 完整未知牌号路径、需求信息与团队联系预期 | 标题/正文两区转单列，RFQ为最终主行动 |

目录行高由真实摘要驱动；没有分页、横向滑动、筛选、隐藏条目或替代短文。最长M-896摘要与B04首步长段在三端完整显示。文本主导，不添加工厂、证书或产品图片。没有页面表单、FAQ、技术表或结果状态。

## 共享与动作消费

Products为当前项；当前Chrome V0.5保留八项顺序、84/64px Header、固定RFQ、移动RFQ/Menu→Close、当前项粗体与标线、无可见CURRENT。Footer仍为原中性句/Procurement及当前四法律控件，无Terms；生产彩色与反白SVG直接引用原批准路径，见inventory.logos。

复用已核准的共享本地组装（原页面main内容未带入），在本页保存五项字节相等的JSON/CSS/Inter/OFL依赖和一个仅含共享Header/Footer/Cookie/样式/行为的派生组装快照。原共享来源、批准消费源及本地副本hash见source-binding和inventory.dependencies；快照不是新owner或共享基线。可打开HTML的显示依赖均在正式目录，另引用D23原生产SVG，不依赖唯一临时资产。生成脚本的溯源输入仍为只读批准源。

正文功能链接、焦点环和交互边框采用CTA增补的#008078，Hero Explore与最终RFQ填充同色白字；共享导航继续消费Chrome专属颜色。没有机械复制原页面的正文Navy链接规则。Cookie消费当前法律Manifest V1.3及SHARED-CONSENT V1.1的no_optional_analytics最小标题/正文/Close/Read Cookie Policy，未新增可选分析或存储选择。

首屏href准确为#explore-chloride-process-grades，对应B03可见H2的id和tabindex=-1。本地点击/Enter及直接fragment通过滚动与移焦到达标题；无JS时保留普通文档fragment，浏览器亦实测可滚动聚焦。外跳链接保留批准href，但在本地仅记录导航意图；RFQ/DOC记录只含source_page_id=PRODUCT-PROC-CL，不携带牌号、应用、数量、目的地、文件类型或query。普通Grade链接没有隐式选择。生产接收仍由相应owner负责。

## 交付与实际查看

${L(html)}，SHA-256 ${frozen}，22,064 bytes。首版完成后没有候选修订或渲染失败，不制造旧失败记录。源、三端图与11张正式导出身份相同；三端全页物理尺寸1440×3301、768×4238、390×5781，逻辑视口各宽度×1000、DPR1。两端菜单、三端Cookie、三端锚点状态均为同宽×1000、DPR1。

正式资产清单 ${L(out+'/asset-inventory.json')} 与 ${L(out+'/render-evidence.json')} 包含绝对路径、角色、逻辑/物理尺寸、比例、状态、字节和SHA-256；不登记自身hash、不替代页面Manifest。Node/Playwright采用提供的bundled runtime，Chrome152.0.7977.82，字体ready/SVGdecode后导出。复现脚本 ${L(out+'/build-wireframe.cjs')}、${L(out+'/render-design.cjs')}、${L(ev+'/verify-layout.cjs')}；将提供的node.exe路径与脚本绝对路径传给PowerShell即可。本地无网络/真实发送/D16或付费工具操作。

已打开三张全页先看整体，再实际逐张查看19张原比例重叠分段：1440段1–5、768段1–6、390段1–8，覆盖所有模块与Footer，重叠约100px。另实际打开两端菜单focus-close、三端Cookiefocus-close、三端anchor-click，以及200%等效锚点/菜单/Cookie三张图。Enter/direct/no-JS和CTA focus/hover的附加图已导出并记录身份与运行结果，没有逐张重复做像素查看，不将其称为独立视觉复审。

已知未解决Gate3布局缺陷为零。未测真实设备、语音读屏、实际浏览器UI缩放、生产目标路由/接收/归因/Cookie技术状态；200%证据是CSS720×500、DPR2的1440×1000等效reflow，不能冒充上述环境。执行自检 ${L(page+'/05_review/PRODUCT-PROC-CL_GATE3_EXECUTION_SELF_CHECK_V0.1.md')} 独立保存；等待总控审查与用户决定，不进入Gate4。
`;
fs.writeFileSync(out+'/PRODUCT-PROC-CL_GATE3_DESIGN_METHOD_REPORT_V0.1.md',design);
const report=`# PRODUCT-PROC-CL Gate 3 执行自检 V0.1

2026-09-07 · DRAFT_FOR_PROJECT_CONTROL_REVIEW · EXECUTION_SELF_CHECK_NOT_INDEPENDENT_REVIEW

由本页设计执行者按 ${L(inputs[10].path)} 对实际批准输入及本地候选核验，不是独立审查或Gate批准。原始A/B/C/Brief与授权、共享合同见 ${L(out+'/PRODUCT-PROC-CL_GATE3_DESIGN_METHOD_REPORT_V0.1.md')} 及 ${L(out+'/asset-inventory.json')} 的精确输入身份。

被审源 ${L(html)}；冻结SHA-256 ${frozen}，22,064 bytes。三端全页和8个正式状态共11张PNG，尺寸/字节/hash已重新实算并与render-evidence对应；核验前后源hash不变。报告保存后从同一路径读回，资产引用存在并实算相等。

## 本地运行、内容及图像

原始测量 ${L(ev+'/measurements-and-actions.json')}，复现 ${L(ev+'/verify-layout.cjs')}。首轮就绪后运行完成，27组结果、48张支持证据、errors=0；没有失败记录被覆盖，没有通过数量代替实际查看。

- 三端双向核对正文16标题/16段/16链接和eyebrow完全相等。只解析B正文边界，五模块顺序正确；八牌号分别核对名称、完整摘要、目标和显示顺序，没有多出或省略条目。编辑标签、表单、FAQ、表格/选择控件未进入正文。
- 三端滚动宽度等于1440/768/390；可见元素边界、实际命中区与截图联合检查，无横向越界、小于44×44的控件或可见裁切。字号、Inter加载、84/64 Header、Products当前项均实测。未依赖仅scrollWidth判断文字完整性。
- 三端分别执行锚点点击、键盘Enter、直接fragment；每次hash准确、scrollY>0、目标H2成为activeElement且整个标题落在视口内。三端禁用JS后再次点击锚点、直接fragment，同样实测焦点/滚动/标题边界；全部正文链接仍为准确普通href，八条目录可读。未通过实际外跳验证目的页。
- 三端实际点击15个非fragment正文链接，结果严格等于批准目标。只有RFQ/DOC有内部source_page_id归因，其他无context，全部无query和隐式选牌号。记录只代表本地意图，不代表真实接收或真实归因存储。
- 两端菜单实际开/关、Close标签、Home首焦点、反向/正向循环、Escape返回、背景拒绝焦点，逐项选择8个链接后关闭并恢复背景；body overflow值实际检查锁定/复原，跨Desktop断点实际检查关闭/解除inert。轮滚/触摸物理行为未在本自检额外测量。
- 三端Cookie最小共享层实际点开，Close首焦点、背景拒绝焦点、Tab循环，Escape/Close返回Footer触发器；没有Optional Analytics选择或新增提交结果。生产技术/存储状态不是本页测得事实。
- CTA focus与无焦点hover分别运行截图。200%等效reflow在720×500 CSS、DPR2且reduced-motion下，无横向溢出；锚点/菜单/Cookie均实际运行并查看对应截图，未称为真实UI缩放。

视觉覆盖：先打开1440/768/390全页，再逐张看全部19张重叠分段（5/6/8），从Hero至Footer无漏段。最长M-896、全部八行及B04三步均看过原比例图；三端锚点标题焦点、两端菜单和三端Cookie状态另逐张打开。附加Enter/direct/no-JS、CTA focus/hover截图保存为运行证据，未逐张重复像素复审；没有将静态图用于推断真实接收。

## 四项风险结论与Finding

1. **最难读/比较：B03八条目录与B04首步长段。** Desktop一行固定名称/完整摘要/专属入口，Tablet将名称与入口放同侧、摘要独立宽列，Mobile每牌号完整单列。19张分段确认最长摘要、全部限定和三步全文可见，目录不变成排名或推荐。
2. **最易操作失败：B01至B03锚点、共享菜单和Cookie焦点。** 点击/Enter/direct及无JS fragment均实际达到标题并聚焦；菜单与Cookie的打开、循环、背景隔离和返回已运行。无页面表单/不完整输入/发送结果可测，不新增此类状态。
3. **最有风险的响应转换：八牌号三列→平板两区→手机单列。** 名称、摘要、View链接始终属于同一li，DOM序与视觉连续顺序一致；无横向表格、隐藏卡片、摘要截短或部分应用矩阵。
4. **未解决和未测：** 已知Gate3布局/交互缺陷为零，没有需要上游改正文的Finding。真实路由、RFQ/DOC接收及source归因、Cookie生产技术、真实设备/语音读屏/浏览器UI缩放未测，责任在对应owner与后续外部开发/验收。本地无JS证明范围是本文与普通文档链接，未声称共享菜单/Cookie无JS运行。

本轮首次候选无实质Finding，不为形式制造问题；源未修订，11张图不重复覆盖。输入与页面正式文件仅在本次许可目录新增，未编辑波兰、共享owner、A/B/C、Brief、Manifest、状态或根入口。独立审查结论由总控另写；本报告停止于DRAFT_FOR_PROJECT_CONTROL_REVIEW，Gate4未启动。
`;
fs.writeFileSync(page+'/05_review/PRODUCT-PROC-CL_GATE3_EXECUTION_SELF_CHECK_V0.1.md',report);
console.log(JSON.stringify({candidate:ident(html),assetCount:assets.length,formalExports:render.exports.length,evidenceImages:check.snapshots.length,reports:[out+'/PRODUCT-PROC-CL_GATE3_DESIGN_METHOD_REPORT_V0.1.md',page+'/05_review/PRODUCT-PROC-CL_GATE3_EXECUTION_SELF_CHECK_V0.1.md']}));
