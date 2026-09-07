# Chloride Gate 4 独立实际观察（作者报告读取前）

2026-09-07。冻结 CL-G4-V01-SOURCE-01。本记录在读取本轮作者方向报告/自检前保存，不是自动Gate批准。

身份71条（12源依赖、33输入、26正式PNG）的实际SHA/bytes匹配；26PNG头部尺寸匹配；source-freeze与export清单绑定正确。main源与交互script和批准G3相同。三端B归一化全文双向相等；16 main链接标签/href及顺序精确相等。全部实际8Grade名称/摘要/URL完整，没有新增文本。页面无横向溢出；目标在其Grade行内且相邻行不重叠；Desktop三列、Tablet左名称+入口/右摘要、Mobile自然块流一致。实际Inter字体和生产Logo已加载。

全部26正式PNG已通过view_image实际打开并阅读；未读取root检查结论。1440共7图：hero、directory-upper、directory-lower、evaluation、hero-browse-focus、anchor-focus、cookie-focus；768共7图：hero、directory-upper、directory-lower、evaluation、anchor-focus、menu-focus、cookie-focus；390共12图：comparison-hover、grade-hover、hero、directory-upper、directory-lower、evaluation、process、final-rfq、footer、anchor-focus、menu-focus、cookie-focus。

视觉观察：主锚点动作保持实心，Hero RFQ从属；没有因统一请求按钮而颠倒浏览优先级。连续八条摘要均可读，M-896最长摘要在三端都有完整的“demanding exterior coatings”；不带徽章/推荐色块/不同权重。Tablet摘要纵向居中但行分隔清楚，关联不跨行。Mobile名称→摘要→View，入口紧随所属摘要；M-895起至M-886下半目录同样完整。三步序号和完整解释连续，第一步应用例子保持普通段落，不形成适用矩阵。Process定义和限制同模块；最后未知Grade/人工联系完整。Header当前Products用粗体+标记；Footer法律与反白Logo齐全。浅底Teal、Navy标题、Deep Navy共享区符合角色，焦点不同于当前导航标记。

ACTUAL_RUNTIME：三端每个可见正文、Header/Footer控件及适用Menu/Cookie控件的normal、实际hover与键盘Shift+Tab/Tab focus；全部>=44px目标，无实际hover未命中、focus-visible缺失、普通文字对比<4.5或状态改变尺寸。最紧色对为#008078/#F5F8FB=4.5201，包含Hero次RFQ、长比较入口、八条Grade View、Applications/Documents、Cookie Policy；主锚点/最终RFQ hover白/Navy=13.9594。

锚点实际键盘Enter移至可见H2；directfragment相同；Tab到View M-350。关闭JavaScript仍正文完整、8Grade链接可用，点击/直接fragment到可见H2并Tab到首Grade。无真实外部访问。LOCAL_SIMULATION点击15条非锚点main链接，只在planningNavigation记录；仅RFQ/DOC有source_page_id，Grade入口无预填上下文。不能据此宣称生产接收成功。

Menu768/390：进入Home，循环到Close及末项；背景main/footer/logo/RFQ inert且实际背景focus被阻止；Escape、Close、Products选择后回Menu并释放。跨至1440隐藏菜单并释放inert/overflow，active变BODY（与批准共享script一致）；非本轮新回归/必修，保留边界。Cookie三端：进入Close、正反循环、背景focus被阻止、Escape与Close退出恢复trigger。

首次独立图像复现比较误把#cl-01（不含Header）与正式hero（含Header）比较，三端false仅为审查脚本取景差异，已保留runtime原值。补测用页面顶部至Hero底部的相同范围，三端531/522/689px高均逐字节相同；render-check-correction.json记录。不修改候选、不另存重复图片。

目前无明确必修发现。正式结论仍须核作者规则与复用映射、提交限制是否如实，保持Gate4代表样例范围。生产路由/接收、CMP、真实设备/读屏/UI缩放、其他引擎、真实visited和Gate5全页未验证；这些不能被断言数量代替。
