# Spain Gate 4 独立实际检查记录（作者报告前）

2026-09-07，ES-G4-V01-SOURCE-01。记录保存时尚未读取本候选方向报告、自检、作者预检结果或 root 检查结论。

已实际打开正式清单全部 28 PNG：三端各 Hero/Applications/Documents/RFQ/Footer（15）、三端 Cookie focus（3）、768/390 Menu focus（2）、三端 Document Hub hover（3）、1440 primary hover、768 application focus、390 related hover、390 Document Hub focus、390 Footer focus。均按正式图实际打开；最长图为 390 Applications 1052 px，未用长页缩略图代替正文。图内跨区域截取自然可能在视口边沿裁断相邻段落；完整区域另有对应正式代表图。

目前未发现本范围必需返修项。三端字体和间距继承已批准 G3，应用两组在 1440/768 等宽，390 按 Coatings→Plastics & Masterbatch 堆叠。两条 Plastics/Masterbatch 链接及引导对应正确，COO 淡色左线只突出请求说明，无勋章/认证图形；实色 RFQ 与描边 Products/Documents 分工清楚。最终准备清单、未知 Grade 引导、一次人工后续和 EU 辅助链接完整。Footer 与主内容色彩区分明确，三个断点文字均可读，无观测到的溢出、覆盖或内容丢失。背景极简且保守，属于可复用当前品牌方向，不强加另一风格作为返修条件。

独立运行 verify.cjs、summarize.cjs：91 条冻结/导出身份均匹配（6 源依赖、57 输入、28 图）；28 PNG 实际尺寸符合清单；HTML 在检查后仍是提供的 SHA。15 张普通区域图按正式同宽同 clip 重新渲染，在内存逐字节匹配原图，没有保存重复图套件。Chrome 152.0.7977.82，1440×900、768×900、390×844，DSF1，本地 file；实际字体 Inter custom font；无运行错误和网络请求。

原始 B 全正文归一化后与三端 main innerText 一致，14 个链接的文本和目标逐项一致；G3→G4 main 全源、嵌入 CSS、交互脚本完全一致。Header/Footer 原始字符串不等，追查仅 Logo src 从批准上游绝对文件路径变为 dependencies 相对路径；忽略该本地路径后二者完全一致。冻结 Logo 文件身份有效、实际显示已检查。

三端所有可见 Header/main/Footer 控件及适用 menu/dialog 控件各做 normal、真实鼠标 hover、Shift+Tab/Tab 返回的 keyboard focus；所有被测 hover 均真实 :hover，所有返回目标均 focus-visible。最小控件 44×44；文字对真实背景最低 4.5200728131（Teal / hover Soft）；焦点对真实接触背景最低 4.8177493718；未发现 hover 宽高变化。外描边使用祖先承载底色，菜单内描边使用控件自身底色，未误拿 RFQ 自身 Teal 与外圈比较。

菜单实际 Enter 进入 Home；背景 main/footer/logo/headerRFQ inert、滚动锁定，程序尝试焦点不能进入背景；正向末尾→Close、反向 Close→RFQ；Escape 与 Close 回 Menu，Products 选择关闭并记录对应本地意图。跨到桌面关闭、恢复背景和滚动，焦点在 BODY（已批准共享包现有行为；不声称返回隐藏 Menu）。Cookie Enter 进入 Close，正反 Tab 循环、背景焦点隔离、Escape 和关闭返回 Cookie Settings 均实测通过。

三端 main 全部链接实际点击：RFQ 两次都是 source_page_id=MARKET-EU-ES、destination_country=Spain、destination_editable=true；Documents 只 source_page_id；其余 context=null。仅本地 LOCAL_NAVIGATION_INTENT_ONLY，不能证明生产接收、目标页可编辑字段及保留既有用户修改。禁用 JS 时三端正文与 14 条目标仍在；未声称无 JS 菜单/Cookie 可操作，也未访问不存在的 file 路由模拟生产成功。

验证脚本问题保留：首次脚本转换误匹配 PNG 读取变量导致 SyntaxError，改为精确正文读取入口后恢复；第一次区域 screenshot 因 clip 超出默认 viewport 报错（failure.txt 保留），加 fullPage:true 后 15 张区域全部精确匹配。二者是审查工具问题，不是候选缺陷；未使用错误结果作接受证据。

待完成：核对作者最终方向报告、执行自检及最终资产清单一致性，保存正式报告；最后复算源/图身份确认冻结未变。
