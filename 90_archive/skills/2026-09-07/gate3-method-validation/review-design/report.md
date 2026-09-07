# design-v1 独立方法核验

2026-09-07；首次检查。本次限定范围内未确认需要返修的内容、布局或交互缺陷。原始导出履历未能完全验证，其他浏览器及设备也未测，因此不作全面无问题或 Gate 批准结论。

依据原始 `input.md`、`copy.json` 和已完整读取的 layout-interaction-verification Skill，独立检查其他 Agent 创建的最终成果；没有读取设计者报告、自检、导出脚本或先前候选/审查结果来推导本候选结论。未修改候选、项目文件或任何批准状态。

本次沿用首次启动已完整读取的方法文件 `D:/23MySec/skills/layout-interaction-verification/SKILL.md`；SHA-256 `f8a0320a7c918537f46c110c93a2328103ba975a5e43562ddbe6f4d94ca58f59`。哈希在交回时实算，总控明确说明期间持有方法文件不变；并非另行加载新方法版本。

## 被审对象与资产

源码：`D:/23MySec/99_workspace/gate3-skill-validation-2026-09-07/design-v1/wireframe.html`，17,572 bytes，SHA-256 `f992ec407460b62f5ccb1c179ea44a657bba8984f99b664ce4e0ea2920fa1ee9`。此次按实际哈希识别版本；没有获得批准状态。

实际重新计算全部 9 张指定 PNG 的大小/哈希/像素尺寸，完整身份见 [identities.json](evidence/identities.json)。

| 逻辑宽度 / 1x | initial | expanded |
|---|---:|---:|
| 1440 | 1440×3545 | 1440×4766 |
| 768 | 768×3984 | 768×5413 |
| 390 | 390×5725 | 390×8141 |

另检查：mobile-menu-390 390×5725、invalid-submit-390 390×5975、simulated-success-390 390×5844。三个初始页面先看整体，再用 840px 高、760px 步长的重叠原比例切片覆盖全部模块到 Footer；展开态检查全部新增正文与后续表单/页尾，状态图检查菜单及表单变化区。

本地 Chromium 151.0.7922.34 / Playwright、DPR 1，主运行视口高 900。三种宽度 initial/expanded 重渲染与供图尺寸、模块及换行一致，但不逐像素相同，差异集中于文字边缘等细节；[差异记录](evidence/correspondence.json)、[像素差范围](evidence/pixel-range.json)、[顶端局部差图](evidence/diff-top.png)保留原始观察。未读取原导出参数，故不能确认差异原因，也不把这些 PNG 的确切生成履历判为已证实。未发现实质内容或布局错版迹象。菜单供图的垂直位置与900高视口重渲染不同，静态位置比较不代替下面的运行结论。

## 内容、关系与布局

DOM 中 Hero、三条记录的名称/18个值/6种指标/3条完整注释、六节阅读、表单标签/全部消息/隐私句、Privacy note 和 Footer 均与 JSON 精确一致；再对照实图确认可见性，而非只依赖字串。必填标签增加星号作为状态标记，没有改变业务含义。顺序为 Hero → Comparison → Reading → Request → Privacy note → Footer；壳中的导航及所有 href 指向正确页内对象，无额外排名、推荐或业务承诺。

最易发生关系歧义的是 768 的单卡双列指标，再变为 390 的单列指标。本候选保留每项标签与单位，测量条件有对应 note ID，三条完整脚注均在所属卡底部；没有发现数值、单位或限定对象串位。桌面长 Beta 标题占两行但指标行保持对齐；390 标题自然换为三行。[768 卡片证据](evidence/initial-768-y760.png)、[390 Beta 卡片](evidence/initial-390-y1520.png)。

最难读的长字段是移动选择框里的 Beta 名称：350×80 的实际控件内完整换行为两行，选择仍是单值，没有裁切尾部；[实际填写后的表单](evidence/success-form.png)。390 隐私句在 (20,5164.20) 为350×96.78，完整句与 Privacy note 链接保留在提交前；错误及成功图也保留这个位置关系。[初始提交区](evidence/initial-390-y4560.png)、[成功供图](evidence/simulated-success-390-y4560.png)。

三种宽度初始/展开的页面滚动宽度均等于视口宽；并检查了文字边界与图像，未发现隐藏裁切、重叠或固定空白。所有测得可见交互区宽、高均≥44 CSS px（初始态最小宽分别73.33、78.53、82，最小高均44）。390 页面较长由完整记录、注释、正文及表单产生，没有把长页本身报为缺陷。

## 实际运行与状态证据

- **阅读**：在1440/768/390真实点击五个 disclosure，五节均展开，Request 顶部依次由2322.31→3543.06、2808.83→4237.83、4301.95→6717.95；正文在正常流中推动后续模块。390另用 Enter 收起、Space 重新展开第一项，状态正确。可见三角保留展开入口；[移动展开中段](evidence/expanded-390-y4560.png)、[末节及表单连接](evidence/expanded-390-y6080.png)。
- **菜单**：390真实点击打开后 `:modal=true`、焦点进入 Close。连续8次 Tab 均留在对话框，Shift+Tab从Close回到最后链接；尝试把焦点移向背景 name 未成功。Escape和Close都关闭并还焦点给Menu。点击Comparison后关闭、到达#comparison，等待两帧完成关闭事件后焦点也返回Menu；即时事件采样中的临时空class不作为缺陷。见[供图菜单](evidence/mobile-menu-390-y0.png)、[稳定后焦点证据](evidence/menu-link-settled.json)。
- **验证与保留**：390测试空提交、纯空白姓名、无效邮箱、数量0及-2；分别聚焦首个无效 name/email/quantity，正确摘要与每字段消息有aria-describedby关联，已有值与多行context保留。[供图错误区](evidence/invalid-submit-390-y4560.png)、[独立运行错误表单](evidence/invalid-form.png)。
- **本地成功**：0.001 kg可成功；确认文案精确且声明未发送、未安排评审。选择Beta、再恢复Not sure yet均正常；成功保留全部输入。真实点击隐私链接到#privacy，再点Hero CTA到#request，context仍在。没有网络请求；不代表真实数据接收。[运行成功表单](evidence/success-form.png)。

原始内容比对、几何与行为观察在 [observations.json](evidence/observations.json)。没有确定性 Finding；不为了展示检查深度制造返修项。

## 限制与交回

未验证原导出环境/生成履历；invalid/success采用独立虚构值重现而非复刻供图输入。未做768菜单或1440/768完整表单状态循环、全站式逐链接点击、浏览器/设备矩阵、触屏实机、屏幕阅读器朗读、缩放/字体替换、极端超长自填值和原生选项弹层的跨平台外观。仅核对本地模拟，不存在外部接收者或发布验收。

本报告可用于判断这次合成设计方法的交付效果，不构成实际 TiO2 页面、Global Chrome、独立 Gate PASS 或用户批准。候选源码仍保持上述哈希。复现与取证脚本均仅写入本报告目录；未访问D16、外部服务或设计者内部资料。
