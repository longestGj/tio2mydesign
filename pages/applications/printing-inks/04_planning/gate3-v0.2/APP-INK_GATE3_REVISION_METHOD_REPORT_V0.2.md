# APP-INK Gate 3 targeted revision method report V0.2

Status: `DRAFT_FOR_PROJECT_CONTROL_REREVIEW`。本次只处理 `APP-INK-G3-PCR-01` F01–F03。

V0.2 HTML 由历史冻结 V0.1（30,094 bytes，SHA-256 `8d67c9d3ec4b971c9ff5a91a320a6901df385d46ab4ab26812ad0880322492ef`）确定性生成。唯一候选源码差异是增加：

```css
main a:focus-visible {
  outline: 3px solid #008078;
  outline-offset: 3px;
}
```

该规则只作用于本页 `main` 中的链接，消费 CTA Accessibility Addendum V1.0 已批准的白色/浅色表面功能 Teal，不改变 Header、Footer、Cookie 或正文默认视觉。没有新增色彩探索、动效或视觉精修。

诊断在 1440×1000、768×1024、390×844、DPR 1 的 Microsoft Edge/Playwright 上运行。每端从 body 开始以实际 Tab 顺序走完全部 18 个可见正文链接；逐个检查 `:focus-visible`、`rgb(0,128,120)`、solid、3px、outline offset 与横向边界。三端另复验完整布局、批准正文 token 顺序、11 模块、对象数量、响应式关系和双 Hero 锚点。

共享证据分三层记录：原 Consumer V0.2 owner 报告只覆盖其脚本实际包含的 open/selection/Escape/breakpoint 行为，不包含 Tab/Shift+Tab 循环；V0.1 独立 Project Control 在审查时自行跑过完整循环；本次执行针对已变更的 V0.2 候选重新跑完 768/390 菜单与三端 Cookie 的前后向循环及退出/恢复。F01 CSS 选择器限定在 `main`，不会匹配共享 Chrome/Cookie；即便如此，受影响页面的共享操作仍全量复验。

F02 与 F03 只修订执行报告、候选 Manifest、自检和 handoff。所有数量关系从批准 B/C 和实际 DOM 复算；所有后置依赖沿用现有 owner 和阶段，只补可验证接受条件，不要求在 Gate 3 实现。
