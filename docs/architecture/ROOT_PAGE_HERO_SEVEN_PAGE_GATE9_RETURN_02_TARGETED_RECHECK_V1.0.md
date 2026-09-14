# 七页共享 RootPageHero Gate 9 Return-02 定向复验 V1.0

日期：2026-09-11  
Review ID：`ROOT-HERO-G9-RETURN-02-TARGETED-RECHECK-01`  
对象：`HOME-001 / MARKET-000 / PRODUCT-000 / APP-000 / DOC-000 / RES-000 / ABOUT-001`  
结论：`PASS / ROOT_HERO_SEVEN_WORKSET_ACCEPTED`

## 1. 精确候选与接单

| 字段 | 值 |
|---|---|
| D16 worktree | `D:\16Wordpress_nextjs\.worktrees\root-hero-seven-gate8` |
| Branch | `codex/root-hero-seven-gate8` |
| Baseline | `27f0a0da59df1e54cd01eab7d77eb7024b338d42` |
| Repair implementation | `c91f5a9e2da7af46b18b0325b5d58d22c379ad19` |
| Evidence HEAD / observed HEAD | `0a4d8e679a206dc62fd5cf6d1206fb4e03ca28f3` |
| Build dir / Build ID | `.next-root-hero-gate8` / `O9v9ni00s3gk6I2C3PTqy` |
| Runtime | `http://127.0.0.1:32000/`，local production |

Gate 9 独立复跑 Evidence Manifest validation 与两轮 preflight，均为 `PASS`；14/14 runtime 请求通过，Git branch/HEAD/clean、implementation 祖先关系和 Build marker 一致。Return-02 候选可以接单，结论绑定上述精确身份。

## 2. Finding 关闭结果

| Finding | 结果 | 独立复验证据 |
|---|---|---|
| `ROOT-HERO-G9-F01` | `CLOSED` | Applications 在 1440/768/390 均保留 `#application-selector` 与干净 `/request-a-quote/` 两条动作；390px 动作高度 49px。 |
| `ROOT-HERO-G9-F02` | `CLOSED` | About Hero 仅一段批准简介；紧接 `Who We Are` 含其余五段支持正文和七行事实。 |
| `ROOT-HERO-G9-F03` | `CLOSED` | 390px 配置下共享 framed Shell 为 `border-box`、`x=20/right=355/width=335`、左右内边距24px；Documents/Resources/About 不再有页面私有 `wide` 属性。Product/Documents/Resources/About 行数为4/3/4/4，Product/Resources/About 为36px/700、正常字距，七页横向溢出均为0。 |
| `ROOT-HERO-G9-F04` | `CLOSED` | Resources CTA 精确为唯一 `#research-paths`；内置浏览器点击后 URL hash 正确，目标滚动到视口顶部。 |
| `ROOT-HERO-G9-F05` | `CLOSED` | Home/Applications/Product/About raw HTML 当前 Page ID、`source_page_id`、`data-source-page`计数均为0；四个独立本地归因请求均返回204，cookie为HttpOnly、SameSite=Strict，opaque值不含Page ID。 |

F01、F02、F04、F05在 Return-02 没有回归；五项必修 Finding 全部关闭。

## 3. 独立浏览器结果

Codex 内置浏览器在 390×844 配置下实际记录 `window.innerWidth=390`、`document.documentElement.clientWidth=375`。Market、Documents、Resources、About 四个 framed Hero 全部保持20px安全外边距、24px共享内边距，元素矩形没有超出 client width。所有移动 CTA 高度至少48px。

768px 下七页 H1 为44px/700、最多三行；1440px 下为56px/700、最多三行。两档均为零文档横向溢出、每页一套主导航和一个正确 `aria-current="page"`，Hero `::before` 为 `none`。

页面专属回归通过：

- Market 保留十个批准目的地链接及唯一 `#destination-market`；
- Documents 选择器默认值为空，含14个型号和一个占位项，Continue可见，Hero直达 `/request-documents/`；
- Resources Hero媒体在901px显示，在900px隐藏且为零尺寸；
- 七页各一个H1、一个Canonical、预发布 `noindex, nofollow`，JSON-LD全部可解析。

## 4. 四层状态与边界

- `RECHECK_SCOPE_STATUS=PASS / F03_CLOSED / F01_F02_F04_F05_REGRESSION_PASS`
- `PAGE_GATE9_STATUS=PASS / ROOT_HERO_SEVEN_WORKSET_ACCEPTED`
- `INTEGRATION_STATUS=READY_FOR_AUTHORIZED_NEXT_STEP`
- `RELEASE_STATUS=NOT_AUTHORIZED`

用户已接受 Product 在390px的自然四行 H1；实体设备／具名辅助技术证据不属于本工作集要求，两项均未重新打开。

本次只读验收没有修改 D16、提交真实表单、合并、push、部署、发布、DNS或索引。Gate 8 可以停止并释放本轮32000 runtime；Gate 10及任何集成或发布动作仍需另行授权。

## 5. 证据

- `docs/architecture/gate9-root-hero-seven-return-02-20260911/evidence-validation.json`
- `docs/architecture/gate9-root-hero-seven-return-02-20260911/preflight.json`
- `docs/architecture/gate9-root-hero-seven-return-02-20260911/independent-runtime-observation.json`
- `docs/architecture/gate9-root-hero-seven-return-02-20260911/independent-private-attribution.json`
- Gate 8 Manifest：`D:\16Wordpress_nextjs\.worktrees\root-hero-seven-gate8\.tmp\root-hero-gate8-return-02\gate8_evidence_manifest.json`
- Gate 8 receipt：`D:\16Wordpress_nextjs\.worktrees\root-hero-seven-gate8\docs\verification\root-page-hero-seven\gate8-return-02\ROOT_PAGE_HERO_SEVEN_GATE9_RETURN_02_RECEIPT_V1.0.md`

`ROOT-HERO-G9-RETURN-02-TARGETED-RECHECK-01 = PASS / ROOT_HERO_SEVEN_WORKSET_ACCEPTED`

`Gate 10 / merge / deployment / publication / DNS / indexing = NOT_AUTHORIZED`
