# 静态 Next.js 单站与 Google 收录决定 V1.0

日期：2026-09-21  
状态：`USER_DECIDED / ACTIVE`  
适用对象：`D:/32NextJS` 承接的 TiO2 Malaysia 静态网站及其正式页面。

## 用户决定

1. 当前网站采用单一静态 Next.js 架构，不再使用 WordPress、CMS、数据库或多站运行时内容系统。
2. 原多站架构中的 `site_scope=tio2-my` 查询、缓存、路由、菜单、SEO、表单和媒体隔离不再是本静态单站的开发或验收要求。
3. 所有开发完成并正式发布的页面都必须具备 Google 收录条件，并进入 Google 收录跟踪：使用正式 canonical，允许 `index, follow`，进入 sitemap，不被 robots 阻止。

## 影响

- Gate 6不再要求开发方证明跨scope查询、缓存或fallback隔离，也不要求公开或私有的scope字段。
- Gate 8仍需保证页面没有错误站点内容、错误canonical、错误链接或错误媒体；这些按普通内容、路由、SEO和回归问题验收。
- Gate 9验证“技术上可收录”：公开页面可访问、返回成功、canonical正确、robots允许、sitemap包含该URL、页面有实质初始HTML且无其他阻断信号。
- Google是否已经把URL加入实际索引只能在生产发布后由Google侧验证。发布责任方通过Search Console sitemap状态和URL Inspection/索引状态持续检查；未收录页面进入修复与复查，不能把“可收录”写成“已收录”。

## 边界

本决定批准全站最终索引目标及其技术合同，不单独执行代码修改、远端push、部署、DNS变更或Search Console提交。具体页面的Gate 8、Gate 9和Gate 10仍按各自授权和候选身份执行。

旧D16、WordPress或多站合同保留历史证据价值；其中与本决定冲突的scope隔离、`noindex, nofollow`和无sitemap要求，不适用于当前静态单站的新开发候选。

