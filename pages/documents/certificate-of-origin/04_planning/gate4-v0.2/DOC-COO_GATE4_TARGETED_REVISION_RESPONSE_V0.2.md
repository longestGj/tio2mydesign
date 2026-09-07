# DOC-COO Gate4 定向返修回应 V0.2

2026-09-07 · COO-G4-REV-01 · COO-G4-V02-SOURCE-01 · DRAFT_FOR_PROJECT_CONTROL_REVIEW

| Finding | 执行回应 | 自检证据 | 状态 |
|---|---|---|---|
| COO-G4-IR01 / AUTHOR-01 | 两来源从重叠inline片段改成一个连续流式矩形，min44×44、上下padding8px/margin8px；coo-06原句号随anchor尾部，不改B字符/句序/href。hover浅底保留，focus边界独立，记录局部段高变化。 | 18个真实三状态/三宽度PNG，formal-source-probe18条、450命中点全真，邻字相交/误命中0；全部图实际读回。 | AUTHOR_VERIFIED_FIX_PENDING_INDEPENDENT_REVIEW |
| COO-G4-IR02 / AUTHOR-02 | 仅修采集，等待浏览器完成焦点返回后清除并移开指针；正常图后实际断言无focus-visible/hover。共享源不改，旧Footer误标签历史保留。 | 三端footer新图，normal-state-after-capture为BODY、空focus/hover；预检也重演Cookie关闭后清洁捕获。 | AUTHOR_VERIFIED_FIX_PENDING_INDEPENDENT_REVIEW |

原漏检：中心命中/矩形尺寸/对比未检测相邻绘制；预检未先看状态图。本版先完整看28张预检再冻结，45张正式图再全部实际打开。没有把V0.1变成通过记录，没有创建其他页。完整角色、保留范围和局部高度见同目录方向报告，细测和逐图观察在diagnostic_support。Finding正式关闭由总控依据独立复验决定。
