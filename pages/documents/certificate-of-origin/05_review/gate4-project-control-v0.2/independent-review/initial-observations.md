# DOC-COO V0.2 独立实际观察（作者报告前）

2026-09-07。全部45正式PNG已实际逐张打开，源及浏览器复验已完成；截至本记录尚未读取V0.2作者方向报告/自检。范围按初审IR01/IR02和COO-G4-REV-01。

IR01在实际视觉及运行中已满足接受条件：两来源链接各三宽度normal/真实hover/Shift+Tab→Tab focus共18状态，正式18状态PNG与独立同状态同clip渲染逐字节相同。实际链接为一个block矩形，桌面/平板guidance388.46875×44.890625、official453.125×44，手机两者350×70.375。每个状态均对其内部连续44×44区域的1936个CSS像素中心进行elementFromPoint检查，全部命中；另外49个覆盖近四边/内部的采样全部命中。每个状态的相邻非链接字符框和焦点外环扩张区域无交叉，字符中心无误命中。邻文、日期、限定句及链接自身多行均可读。hover文字#008078/#F5F8FB为4.520:1，普通及focus文字/白底4.818:1，focus环/实际白底4.818:1。无横向溢出或裁切。

IR02三端Footer图都实际没有hover/focus，runtime记录footer hoveredControls=0、focusVisibleControls=0、focusedInside=false。同clip普通态重渲染三图均逐字节相同。20张普通区域图及6张来源normal细图共26张normal全部匹配。

完整B标题、段落、列表、表格单元三端相等；links原样比对故意保留false，而非悄悄忽略差异：仅最后官方来源anchor末尾多包含原来紧接anchor的句号，段落完整文字/标点顺序未变、href全相同。还原两个officialSourceLink class、句号的标签归属及版本标记后整份HTML与V0.1完全相同。此变化满足批准原句且防止孤立句号，没有实质措辞或目标变化。禁JS的可见正文结构及链接与有JS相同。

45图包括原20区域、5共享状态、主hover/Hubfocus以及18来源细图。六模块、三类比较配对、四context、traceability区分、五准备、完整日期与限定、主请求层级保留，新增留白没有把记录拆坏或产生遮字。三端Hero、两Menu图和390比较前两图共7图与V0.1 hash相同，仍已实际查看。其他图全部实际重新读回，未只凭相似性承接。

源/输入/45图共118身份记录及图尺寸全部一致；freeze/export对派发SHA一致。共享Header/Footer、内联styles、行为scripts与V0.1完全相同。几何改变只在来源段落与后续纵向位置：coo-02增高D/T60.890625、M59.1875；coo-06增高D60、T32.8125、M32；无横向、字号或其他模块自身高度变化。局部增高已在REV-01范围授权。

必要回归实际运行两主请求、Product/Document Hub、Footer RFQ、Cookie触发器hover/focus；十个可见正文/共享主出口每宽度均实际点击仅本地模拟。两Request保持origin_supplier_qualification和hidden DOC-COO source，无Grade/destination/scheme；RFQ只有source_page_id。Cookie真实打开Close首焦、背景拒焦、Escape回触发器；Menu两窄端打开/背景inert、Documents键盘focus、Escape回Menu通过。无pageerror、外网请求。没有重复未改共享全导航/正反Tab全链路，承接V0.1已测且源一致的结论；本地不验证receiver提交/可编辑字段/生产。

当前未发现新增必修缺陷。接下来仅核作者报告、自检与最终清单，生成正式复验结论。
