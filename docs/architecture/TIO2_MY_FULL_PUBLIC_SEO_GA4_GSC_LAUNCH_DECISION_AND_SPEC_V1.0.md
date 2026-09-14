# TiO2 Malaysia 全站公开、SEO、GA4 与 GSC 上线决定及规格 V1.0

## 1. 决定身份

- 决定日期：2026-09-13
- 决定来源：用户在当前 Codex 任务中明确要求“上线前所有页面都要公开的”，并要求部署完成后正式上线、进入 GSC、安装 GA4。
- 适用站点：`site_scope=tio2-my`，生产域名 `https://tio2malaysia.com/`。
- 适用登记：`research/keyword/11_page_keyword_master.csv` 中的 59 个登记对象。
- 目标矩阵：`docs/architecture/TIO2_MY_59_OBJECT_PUBLICATION_TARGET_MATRIX_V1.0.csv`。
- D23 责任：解决方案、页面事实与内容收口、SEO/GEO 规则、法律与分析披露、开发交付合同、只读验收。
- D16 责任：WordPress/Next.js/CMS/代码/测试/部署/发布实现。

本决定批准“上线前完成全部登记对象的公开实现”这一发布目标。它不授权捏造事实、越过现行证据限制，亦不把运行时 404 或提交后 Thank-you 页面变成搜索落地页。存在事实缺口的页面必须在上线前通过删除未经核实的具体主张、采用已批准的中性表达或取得用户事实确认来收口，不能通过隐藏整页规避本决定。

## 2. “全部公开”的精确定义

59 个登记对象都必须在生产环境具有可访问的公开实现，但搜索引擎目标分为两类：

1. 57 个标准页面：返回真实 `200`，允许匿名访问，输出 `index, follow`，使用唯一自引用 canonical，进入 XML Sitemap，并可从站内已批准的导航或上下文链接到达。
2. `SYS-404`：作为未知 URL 的真实 `404` 公开运行，输出 `noindex, follow`，不进入 Sitemap，不建立伪 `/404/` 索引页。
3. `CONV-THANK`：`/thank-you/` 可公开访问并返回 `200`，输出 `noindex, nofollow`，不进入 Sitemap；有效提交状态只来自短期浏览器会话标记，URL、页面和分析事件不得包含个人资料或请求正文。

因此，“59 个对象公开实现”与“57 个 URL 可索引并进入 Sitemap”同时成立，不构成删页或分阶段隐藏。

## 3. 当前问题与目标差距

### 3.1 索引与 Sitemap

- D16 当前页面合同中仍有多处 `releaseControls.indexingAuthorized=false` 与 `sitemapAuthorized=false`。
- 当前 `app/(en)/sitemap.ts` 只组装有限路由，尚未以 57 个标准页面的权威清单生成完整 Sitemap。
- `lib/seo/metadata.ts` 的生产环境判断不是本次根因；生产 Docker 已显式设置 `VERCEL_ENV=production`。
- 上线前必须把“页面已公开实现”“页面事实/内容已满足公开资格”“技术索引授权已开启”三类状态逐页核对，不得用全局开关掩盖单页缺口。

### 3.2 页面事实与内容

- `PROVISIONAL_URL`、`NEW_PAGE_CANDIDATE`、`PLANNED_*` 等当前状态要在 D23 关闭为实际发布合同；不能因用户要求全部公开而静默假定其事实或正文已批准。
- `FACT_EVIDENCE_REQUIRED`、`TECHNICAL_VERIFICATION_REQUIRED`、`OFFICIAL_SOURCE_UPDATE_REQUIRED` 页面必须只发布已证实或已获用户事实批准的命题。
- 贸易、监管、关税、反倾销等实时结论必须在发布前重新核对权威来源并显示来源日期；未知结果不得伪装成确定事实。
- 每个标准页面至少具备独有 Title、Meta Description、H1、正文主任务、CTA、canonical、页面级结构化数据和不侵占其他页面主关键词的内链。

### 3.3 GA4 与同意机制

- 当前 D16 已有 `tio2-my` 站点隔离、Consent Mode v2 状态模型和固定安全事件，但尚未加载 GA4 标签。
- 当前 Cookie Settings 文案仍声明没有可选 Analytics 激活；GA4 启用时必须同步更新可见法律文本与机器配置，不能先行宣称已启用。
- 当前代码实际 localStorage 键为 `tio2-my:consent:v1`，法律配置中记录为 `tio2_my_consent_v1`。上线实现必须选定一个权威键并提供旧键迁移，最终页面、配置和运行时证据完全一致。

## 4. D23 页面与法律收口合同

`01Gate1开发` 负责 D23 执行，范围仅限 D23：

1. 依据目标矩阵逐页定位当前 Manifest、Brief、事实状态与公开阻塞项。
2. 对 57 个标准页面给出可发布的唯一 URL、页面职责、Title、Meta Description、H1、canonical、robots、Sitemap 资格与至少一个站内入口。
3. 对事实缺口采用项目规则允许的三种闭环：补齐有效证据、取得用户事实确认、或删除/改写具体未证实主张并保留页面的真实买家任务。
4. 对 `SYS-404` 与 `CONV-THANK` 保留本规格第 2 节的搜索例外。
5. 更新 Cookie Policy、Privacy Notice 与 Cookie Settings 的批准文案，使其准确披露 GA4、Google 接收方、用途、同意状态、撤回方式、存储项与期限；马来语 Privacy 必须保持法律语义等价。
6. 将 D16 所需的最终发布矩阵、SEO 字段、分析事件、同意行为、法律文案和证据要求打包为 Gate 6 开发交付；不得直接修改 D16。

## 5. D16 技术实现合同

`01My开发1` 在当前部署任务完成后负责 D16 开发与测试，且不得与正在进行的发布并行改写同一生产状态。

### 5.1 全站公开与索引

- 以 D23 的 59 对象目标矩阵和最终页面合同为唯一发布输入，不从目录扫描或猜测路由生成 Sitemap。
- 57 个标准页面必须在生产主机名上返回 `200`，无认证墙、维护页、预览标记或 `noindex`，且 canonical 为同一生产 URL。
- XML Sitemap 只列 57 个标准页面，URL 唯一、状态 `200`、canonical 一致；不得包含重定向、404、`/thank-you/`、预览或 API URL。
- `robots.txt` 必须允许标准页面抓取，继续阻止非公开 API/预览路径，并声明生产 Sitemap。
- 页面合同中的 `indexingAuthorized` 与 `sitemapAuthorized` 必须逐页开启并有测试；不得用绕过合同的全局硬编码解决。
- 多语言 Brazil 与 Privacy 页面必须输出符合实际语言 URL 的 canonical/hreflang；只有真实存在并已审定的语言对应页才能互指。

### 5.2 GA4

- GA4 必须通过 Google Tag Manager 交付，并且只允许在 `site_scope=tio2-my`、存在合法 `NEXT_PUBLIC_TIO2_MY_GTM_CONTAINER_ID` 与 `NEXT_PUBLIC_TIO2_MY_GA4_MEASUREMENT_ID` 时加载，不得污染同仓其他站点。前者必须解析为本项目容器，后者必须与该容器实际发送的 GA4 destination 一致；不得用 Measurement ID 代替 GTM Container ID，也不得直接加载独立 gtag 作为旁路。
- Consent Mode v2 默认在任何 GA4 配置或测量命令之前执行：`analytics_storage=denied`、`ad_storage=denied`、`ad_user_data=denied`、`ad_personalization=denied`。
- 接受 Analytics 时只把 `analytics_storage` 更新为 `granted`；拒绝或撤回时恢复 `denied`。三个广告状态始终保持 `denied`。
- 采用 Advanced Consent Mode：标签可在 denied 默认状态下加载并发送受限的无 Cookie 测量信号；不得把这些信号描述为个性化广告或用户画像。
- 既有 RFQ、Documents、Sample 成功事件只能在后端确认成功、短期会话标记有效且 Analytics 同意为 granted 时发送；事件名固定，参数只允许枚举型 `site_scope`、`page_id`、`source`、`form_type` 等非个人字段。
- 不发送姓名、邮箱、电话、公司、自由文本、文件名、原始 URL 查询、表单正文、文档请求内容或其他可识别字段。
- SPA 导航不得重复发送 `page_view`；生产验证必须证明每次有效浏览只记一次预期页面浏览。
- GTM Container ID 与 GA4 Measurement ID 分别通过上述两个环境变量注入，禁止提交生产标识或把它们复制到其他站点范围。两者本身不是秘密，但仍必须保持环境和站点隔离。执行顺序固定为：建立 `dataLayer` 与 denied defaults → 注入本 scope 配置 → 加载该 scope 的 GTM 容器 → 由容器交付与 Measurement ID 一致的 GA4 tag。
- 同意存储键必须统一；若采用当前法律配置中的 `tio2_my_consent_v1`，实现需读取并迁移旧 `tio2-my:consent:v1`，成功写入新键后删除旧键。若开发选择保留旧键，则 D23 法律配置和可见文案必须在发布前统一改为该精确值。

### 5.3 GA4 属性建议

- 属性名称：`TiO2 Malaysia`。
- 报告时区：`Malaysia Time (GMT+08:00)`。
- 事件数据保留：`14 months`。
- 增强型衡量只启用与站点真实能力匹配的项目；站点搜索不存在时不得启用或伪造 `view_search_results`。
- 报告币种沿用用户批准的商业报告币种；若 Google 控制台必须选择而项目没有决定，暂停该控制台字段并只请求这一项用户决定，不阻塞代码、SEO 与法律实施。

## 6. GSC 正式上线流程

GSC 操作必须在生产发布和 Gate 9 只读验收通过后执行：

1. 使用用户已登录的 Google 账号创建或确认 Domain Property：`tio2malaysia.com`；优先 DNS 验证以覆盖协议与子域。
2. 提交 `https://tio2malaysia.com/sitemap.xml`。
3. 用 URL Inspection 验证首页、Markets、Products、Applications、Documents、Resources、About、一个市场页、一个产品页、一个法律页和 `/thank-you/`。
4. 只对首页及关键根页面请求首次索引，不逐个手工提交 57 个 URL；其余由 Sitemap 和站内链接发现。
5. 记录 Sitemap 接收状态、已发现 URL 数、代表 URL 的可索引判断、抓取结果和首次覆盖率基线。
6. GSC 验证所需 DNS 变更与 Google 登录由用户或获授权的执行任务完成；未登录时不得绕过账号验证。

## 7. 上线停止条件

出现任一条件时不得宣布正式上线完成：

- 任一标准页面未公开返回 `200`，或仍输出 `noindex`、错误 canonical、认证/维护页面。
- Sitemap 不等于 57 个标准 URL，或包含 `SYS-404`、`/thank-you/`、重定向、404、预览/API URL。
- 页面公开需要依赖尚未核实的具体产品、监管、关税、证书或对等替代声明。
- GA4 在 Consent 默认命令之前运行、跨站点加载、发送个人信息、广告状态被授予、或撤回同意后继续设置 Analytics Cookie。
- Cookie/Privacy 可见文案与生产 GA4 行为不一致。
- Gate 8 没有提供开发提交、自动化测试、可访问生产结果和证据 Manifest，或 Gate 9 只读验收未通过。

## 8. Gate 9 最低证据

- 59 对象逐项 HTTP/robots/canonical 清单；57 个标准页面全部 `200 + index, follow + self-canonical + sitemap`。
- Sitemap 解析结果与精确计数 57；无重复和例外 URL。
- 生产 `robots.txt`、代表性页面源代码、结构化数据、hreflang 与内链证据。
- GA4 加载仅限 `tio2-my`，默认同意顺序、拒绝/接受/撤回流程、Cookie 与网络请求证据。
- RFQ/Documents/Sample 成功事件的正向与负向测试，以及无个人信息负载证明。
- Cookie Policy、Privacy Notice、Cookie Settings 与实际 localStorage/Cookie 清单一致性。
- GSC 在发布后的 Property、Sitemap 与代表 URL Inspection 证据；GSC 的自然处理延迟不应被误判为技术发布失败。

## 9. 市场范围后续决定

当前登记仍覆盖 EU、UK、India 与 Brazil；用户最新商业目标为 EU、South America、Middle East、UK 与 Malaysia domestic。此次上线先完整公开现有 59 个登记对象，不静默删除 India，也不未经页面准入新增 Middle East 或 Malaysia 市场 URL。上线后由 D23 另行完成市场架构、关键词重叠与 URL 决定，再按 Gate 0 起步纳入新增或替换页面。
