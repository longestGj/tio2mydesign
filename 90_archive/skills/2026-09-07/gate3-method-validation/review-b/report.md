# specimen-b 布局与交互核验

2026-09-07；首次检查；离线合成方法试验。结论：发现 7 项合同偏差，需修订后定向复验。本报告不是实际页面 QA、总控 PASS 或 Gate 批准；未修改候选文件。

## 对象、范围与证据身份

- 权威输入：本试验 `input.md`、`copy.json`；方法：`D:/23MySec/skills/layout-interaction-verification/SKILL.md`。已读根 AGENTS 与 PROJECT_CONTEXT，但没有把合成共用壳当成 TiO2 Global Chrome。
- 候选：`D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/specimen-b/source.html`，13,475 bytes，SHA-256 `3d134cdb500918d17fc1514567efb4b388d75352ea17401e8b11df08392c7f4d`。未给语义版本或批准状态，以实际哈希锁定本次对象。
- 实际重新计算了输入、源码、清单及全部 7 张 PNG 的字节数/哈希，均与候选清单所列身份一致；详见 [asset-identity.json](evidence/asset-identity.json)。图片尺寸依次为：1440 initial 1440×3233；768 initial 768×4482；390 initial 390×4915；expanded 390×7440；invalid 390×7684；success 390×7531；menu 390×900。逻辑宽与图像宽相同，1x。
- 本地 Chromium 151.0.7922.34、Playwright、file URL、DPR 1。初始态三个宽度、390 expanded/menu 的重新渲染与供图逐像素一致，见 [render-correspondence.json](evidence/render-correspondence.json)。invalid/success 供图已实看，并以自有虚构输入重现行为；它们不是原始输入的逐像素复刻，不据此声称完整生成履历被证明。
- 全部初始页面先总览，再以 840px 高、760px 步长的重叠原尺寸切片检查到 Footer。expanded 检查完整阅读增量与下游表单；invalid/success 检查各自错误/确认及下游区域；menu 检查整张状态图。所有切片、运行截图及测量在 [evidence](evidence/) 内。

## 实际选择与检查结果

布局采用桌面三列记录卡、768/390 单列卡；阅读首节展开、后五节原生 disclosure；表单随后进入 Privacy note 和 Footer。Hero、记录名/全部数值/指标/脚注及六篇标题正文的 DOM 文本与 JSON 精确一致；标签、反馈、隐私和导航也回查了原始输入。模块顺序正确，无额外排名、产品选择或业务承诺。文字完整存在并没有避免以下可见性缺陷。

三个初始视口都满足页面 scrollWidth = 视口宽，但 390 内部仍有裁切。最难比较的位置是 390 的密度、比表面积和测量条件；最危险的响应变化发生在 450px 媒体查询内。桌面 Beta 长标题使指标行比相邻卡下移约一行，但每项重复标签仍清楚，没有把这一点判为关系错配。长页面由真实卡片、正文和表单产生，未发现表单后任意固定大块空白。

实际在 390 点击五个阅读标题后，五节均展开，Request 顶部从 y=3626.84 移至 y=6152.78，全文在正常流中显示。空提交显示三个正确且有 aria-describedby 关联的错误与摘要；已有 context 保留。填写有效姓名、邮箱和 1.25 kg 后出现精确的本地确认句，全部值保留；可选记录可选择 Beta，再恢复 Not sure yet。没有网络请求，确认仅为本地模拟。

## Findings

输入未提供严重度分级词典；下列“高/中”仅表示读者影响，供归属判断，不是项目 Gate 状态。位置均为逻辑 CSS px，页面 y 以初始态为准，除非另注明。

| ID / 影响 | 位置、预期与实见 | 证据与接受条件 |
|---|---|---|
| LIV-B-01 / 高 | 390，Comparison 三卡 `.record dd`。要求数值、完整单位与条件不歧义；实际统一限宽 58px、nowrap、overflow hidden，9 个值裁切。Alpha 在 (35,821.58) 的 `1.25 g/cm³` 需 83px；(35,891.38) 的 `18.4 m²/g` 需 74px；(35,1100.77) 的 `Condition A; see note 1` 需 189px。读者看到残缺单位和 `Conditi`，丢失比较上下文。 | [供图局部 y760](evidence/390-initial-y760.png)、[y1520](evidence/390-initial-y1520.png)；[运行测量 views[2].values](evidence/runtime-observations.json)。接受：390 三卡所有 18 项完整可读，数值与单位和条件仍属于正确记录，无隐藏截断；复验 768/1440。 |
| LIV-B-02 / 高 | 390，Comparison 三卡尾部。合同要求完整脚注保留且对应；三个 `.record-note` 均 display:none，没有可发现入口或替代呈现。即使修好条件文字，限定范围仍缺失。 | 同上两张局部图，运行 `views[2].notes` 全为零尺寸/display none。接受：三条 exact note 在 390 可读或有明确可操作展开入口及展开证据，逐条对应 Alpha/Beta/Gamma；不能仅恢复字串。 |
| LIV-B-03 / 高 | 390，Request 隐私段落 (33,4417.83)，提交按钮正上方。应展示完整句及可用 Privacy note 链接；实际高度 27px，内容高 104px，overflow hidden，只见第一行，链接和句尾不可见。 | [供图表单 y3800](evidence/390-initial-y3800.png)、运行 `views[2].privacy`。接受：初始/错误/成功状态均展示完整句与链接，链接有至少 44×44 命中区且位于表单内、Submit 上方，点击进入 #privacy。 |
| LIV-B-04 / 中 | 390，数量输入 (33,4066.69)。要求交互区至少 44×44；实测 28×48。填入 1.25 后截图仍看不到可读数值，既难触控又难确认输入。 | [供图表单](evidence/390-initial-y3800.png)、[填写后的运行表单](evidence/runtime-390-success-form.png)、运行 `smallTargets`/success.values。接受：实际输入命中区宽高均≥44px，并能读出合理十进制数量；初始/错误/成功状态复验。 |
| LIV-B-05 / 高 | 390，菜单打开。要求模态、焦点限制、Escape 与背景不可达；实际 `dialog.show()`，`:modal=false`。打开焦点进入 Close；Tab 第6次进入背景 Request review，第7/8次进入正文 disclosure；在 Close 上按 Escape 后仍 open=true。Close 按钮可关闭并把焦点还给 Menu。 | [供图菜单](../specimen-b/390-menu.png)、[运行菜单](evidence/runtime-390-menu.png)、运行 `interactions.menu`。接受：390/768 菜单打开后鼠标/键盘不可访问背景，Tab/Shift+Tab 留在菜单；Escape、Close、菜单链接均正确关闭并遵守焦点返回合同。 |
| LIV-B-06 / 中 | 390，表单空值提交。应聚焦第一个无效字段 Your name；实际完成错误呈现后主动 focus 到 Submit，读者没有被带回需要修正的位置。 | [错误状态供图](evidence/390-invalid-y6080.png)只证明外观；行为证据为运行 `interactions.emptyInvalid.focus = submit`。接受：空提交聚焦 name；name 有效而 email 无效时聚焦 email；前两项有效时聚焦 quantity；错误关联及已有值保留。 |
| LIV-B-07 / 中 | Request `#quantity`，跨视口同一验证逻辑；实际在390验证。合同允许正十进制 kg，未限定最小 0.01。有效姓名/邮箱配 0.001 kg 被拒绝：min=0.01、rangeUnderflow=true，提示却称必须大于零，与已输入正数冲突。 | 运行 `interactions.positiveDecimal`；源码 `<input id="quantity" min="0.01">`。接受：0.001 等正十进制值可进入本地成功；0、负数和空值仍按 exact error 拒绝，无新增未经批准的最小值。 |

## 建议与未验证项

- 建议：恢复 disclosure 的展开/收起可见提示。当前 summary 使用 display:flex 后没有原生三角，静态上近似普通分节标题，首次读者不易知道可点击；实际点击已证明内容存在。可在保留 exact 标题与键盘语义的同时添加状态标记，不需改写正文。
- 未覆盖：768 菜单完整键盘循环；1440/768 展开、错误和成功状态的逐项运行测试；其他浏览器、实体移动设备、屏幕阅读器朗读、缩放/字距变化；极端超长自填 context 和可选列表展开后的系统弹层；CTA 实际逐个点击与锚点到达（本轮核对了所有 href 及目标存在）。没有外部接收方，故不存在真实发送/接收的通过结论。
- 此次检查没有实际站点、批准 Manifest 或 Gate 归属；不据合成结果推进任何项目批准。返修应针对上述接受条件，保持原候选历史。本轮没有修改或关闭任何 Finding，也没有进行真实提交、外部服务访问或发布操作。

原始观察：[runtime-observations.json](evidence/runtime-observations.json)。复现脚本：[runtime.cjs](runtime.cjs)、[inspect.py](inspect.py)，均在本报告目录内；候选源码只读。
