# 七页共享 RootPageHero Gate 9 Return-01 定向复验 V1.0

日期：2026-09-11  
Review ID：`ROOT-HERO-G9-RETURN-01-TARGETED-RECHECK-01`  
结论：`RETURN / F03_OPEN`

## 1. 精确候选与接单

| 字段 | 值 |
|---|---|
| Branch | `codex/root-hero-seven-gate8` |
| Baseline | `27f0a0da59df1e54cd01eab7d77eb7024b338d42` |
| Repair implementation | `5e4cf270a46e059345bfe2e07fde1a1402335efb` |
| Evidence HEAD / observed HEAD | `a7d31671ba60fe8797455aba5b6ea99538e73fd9` |
| Build dir / Build ID | `.next-root-hero-gate8` / `5HyOyxr4edPSEh1KtWPhH` |
| Runtime | `http://127.0.0.1:32000/` |

Gate 9 独立复跑 Evidence Manifest validation 与两轮 preflight，结果均为 `PASS`；14/14 runtime 请求通过，Git/Build/HEAD/clean 身份一致。Return-01 可以接单，后续结论属于实现验收。

## 2. Finding 处置

| Finding | 结果 | 独立复验证据 |
|---|---|---|
| `ROOT-HERO-G9-F01` | `CLOSED` | Applications 在 1440/768/390 均显示两条批准动作；RFQ 为干净 `/request-a-quote/`。390px 键盘顺序可到达两条动作，焦点轮廓可见，高度 49px。 |
| `ROOT-HERO-G9-F02` | `CLOSED` | About Hero 仅保留第一段；紧接的 `Who We Are` 含其余五段批准正文，随后保留七行事实。 |
| `ROOT-HERO-G9-F03` | `OPEN` | 行数表面达到 4/3/4/4，但 Documents/About 使用未批准的 `wide` 移动几何和 12px 内边距；Resources Shell 在实际 375px client width 下右边越界 2px并被裁切。 |
| `ROOT-HERO-G9-F04` | `CLOSED` | Resources CTA 精确指向唯一存在的 `#research-paths`。 |
| `ROOT-HERO-G9-F05` | `CLOSED` | Home/Product/About Hero URL、DOM、inline script与raw HTML均无相关 Page ID、`source_page_id`或`data-source-page`；四个本地私有归因请求为204，cookie为HttpOnly、SameSite=Strict且不含Page ID。 |

## 3. F03 未关闭的原因

Codex 内置浏览器配置为 390×844 时，实际为 `window.innerWidth=390`、`document.documentElement.clientWidth=375`。H1 行数为：Product 4、Documents 3、Resources 4、About 4；Product/Resources/About 为 36px/700、正常零字距。这一部分数值正确。

但实现新增了未批准的 `mobileHeadingFit="wide"` 页面配置：

- Documents：Hero `width=339px`，左右 padding 12px，安全边距 18px；
- About：Hero `width=339px`，左右 padding 12px，安全边距 18px；
- Resources：Hero 为 `content-box`，左右 padding 24px，但元素矩形为 `x=8 / right=377 / width=369`，超过 375px client width 2px。页面通过裁切隐藏该越界，所以 `scrollWidth` 无增长并不能证明安全边界通过。

批准组合要求移动端共享 Shell 保持左右 24px 内边距，不得建立页面私有响应式几何，并要求安全边缘、无裁切和零溢出。因此 Return-01 是通过缩小内边距／扩大 Shell 获得目标行数，没有满足 `RH7-AC-CORE-02`、`RH7-AC-CORE-04`、`RH7-AC-CORE-07`，`ROOT-HERO-G9-F03` 继续开放。

Return-02 关闭条件：在同一内置浏览器 390px 配置下，恢复共享移动 Shell 几何与 24px 内边距，Resources 元素矩形完全位于 client width 内；同时继续保持 Product/Documents/Resources/About 行数 4/≤3/4/4、Product/Resources/About 正常零字距、36px/700、无 transform/stretch/固定超宽/裁切/横滑。不得使用新的页面私有断点、宽度或内边距例外。

## 4. 回归结果

Return-01 没有破坏上一轮已通过范围：

- 1440 与 768 下七页 H1 分别保持 56px/700 与 44px/700；文档级 overflow 为0；每页一套有效 primary nav 和一个 `aria-current="page"`；Hero 左侧伪元素为 `none`；动作高度至少48px。
- Market 保留 `#destination-market` 与十个批准目的地链接。
- Documents 保留空默认值、14型号加占位项、可见 Continue 与直达 `/request-documents/`。
- Resources 媒体在配置901px可见、900px隐藏且零尺寸。
- 七页各一个H1、Canonical和预发布 `noindex,nofollow`保持，JSON-LD均可解析。

## 5. 四层状态与边界

- `RECHECK_SCOPE_STATUS=RETURN / F01_F02_F04_F05_CLOSED / F03_OPEN`
- `PAGE_GATE9_STATUS=NOT_PASS / GATE8_RETURN_02_REQUIRED`
- `INTEGRATION_STATUS=NOT_READY`
- `RELEASE_STATUS=NOT_AUTHORIZED`

用户已接受 Product 390px 自然四行，且本工作集不要求实体设备／具名辅助技术证据；两项均未重新打开。

本次只读复验没有修改 D16、提交真实表单、合并、push、部署或发布。Gate 8 收到本次 Return-02 通知后可以释放当前 32000 runtime；下一候选需提供新的精确 implementation/evidence HEAD/Build/runtime 和有效 Manifest。

## 6. 证据

- `docs/architecture/gate9-root-hero-seven-return-01-20260911/evidence-validation.json`
- `docs/architecture/gate9-root-hero-seven-return-01-20260911/preflight.json`
- `docs/architecture/gate9-root-hero-seven-return-01-20260911/independent-runtime-observation.json`
- Gate 8 Return-01 Manifest：`D:\16Wordpress_nextjs\.worktrees\root-hero-seven-gate8\.tmp\root-hero-gate8-return-01\gate8_evidence_manifest.json`

`ROOT-HERO-G9-RETURN-01-TARGETED-RECHECK-01 = RETURN / F03_OPEN`
