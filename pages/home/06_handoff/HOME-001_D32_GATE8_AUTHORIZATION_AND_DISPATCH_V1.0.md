# HOME-001 D32 Gate 8 授权与派发 V1.0

日期：2026-09-20。dispatch_id：`HOME-D32-G8-DISPATCH-20260920-01`。

用户原话：“我已经建立一个项目，并且开发了一个对话，叫做00首页开发，你先把首页开发的内容，交给他进行开发。”本决定授权向指定任务发送已批准首页组合并启动 Gate8，实现及测试归D32。覆盖此前仅因缺本批开发授权而停止的限制，不改变批准内容/验收条件或授予发布权限。

接收任务：**00首页开发**，thread_id `01a0bca9-1318-7022-aa49-8723850227f7`，host `local`，project_id `865fde93-36d2-4e6b-b50d-f37ea96bc358`，cwd `D:/32Wordpress_new`。已核对应用项目和任务身份；该任务已连接用户指定仓库 `https://github.com/longestGj/wordpress_tio2_my`。当前仓库/工作树/HEAD及环境须由接收方重新实际核对，不能沿用旧D16身份。

## 精确交付

- Page：HOME-001 `/`；`site_scope=tio2-my`。
- Handoff：`HOME-001-D32-G6-HANDOFF-01`。
- [唯一包V0.2](HOME-001_D32_GATE6_HANDOFF_PACKAGE_V0.2.md)，SHA-256 `EEB70B4D48753BBAF02D9CBEA1B6ADAD65B18D90CD6C6123A0F63C6063065A3A`。
- [来源与核验V0.2](HOME-001_D32_GATE6_INPUT_VERIFICATION_V0.2.json)，SHA-256 `2C8DC65F51829CB6120E05F4395B2956435DA004EAA043ECED28EDD3FF7F892F`。
- [关闭记录](../05_review/HOME-001_D32_GATE6_PROJECT_CONTROL_CLOSEOUT_V1.0.md)及其独立审查链赋予精确组合 `APPROVED_FOR_HANDOFF`；包内候选文字为提交时状态，不重启已关闭Gate6。

范围为WordPress直接管理内容并生成首页，唯一共享Header/Footer/Menu及未启用Analytics态Cookie Settings；固定设计、后台内容可编辑。继承完整批准正文/链接、整页V1.1及最新Hero V1.4覆盖、生产Logo、SEO五节点。14型号保持非链接标签。沿用HOME-VU-A01..A12及DEP-01..05。

不创建Next.js前端或复制D16审批与运行内容耦合；具体WordPress主题/必要功能/内容模型由Gate8按实际条件选择，普通文案编辑不要求改代码。原型可研究适配，不冒充生产CMS。外部目标缺失记录依赖，不擅造页面或改链接；产品集合页及其他完整页面不在本批开发范围。

## 接收与交回

接收方先读取本项目适用规则和上述关闭/包/实际批准源，核对精确身份，在D32原有文档目录保存简短接收记录并向本任务回报其绝对路径、接受范围、实际repo/branch/HEAD/工作区状态、缺口及开发启动状态；无提交的空仓库如实记录，不能伪造HEAD。

沿用用户在接收任务的“完成一个独立任务、验证后一个commit”要求。开发完成交回实际代码/内容/环境身份、预览地址、稳定AC映射、测试/编辑恢复证据、差异/未测/依赖和回退说明，并按包§7提供原Gate8→9证据Manifest与回执。工具兼容不足明确返回，不以Next占位指纹伪装通过。

D23只接收与协调，不实施D32代码。开发自检不代替独立Gate9；本派发不启动生产部署、DNS、索引、GTM/GA4生产配置、公开发布或Gate10。消息送达和开发方接收事实记录在附属回执，不预签开发完成。
