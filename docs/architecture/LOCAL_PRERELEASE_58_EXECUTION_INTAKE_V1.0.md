# TiO2 Malaysia 58对象本地预发布执行接收 V1.0

日期：2026-09-09。状态：`EXECUTION_EVIDENCE_ACCEPTED / OVERALL_NOT_PASS`。

## 1. 授权与范围

用户批准将`CONTACT-001`作为本轮预发布启动例外，先对原56页加`SYS-404`、`CONV-THANK`共58个登记对象执行本地预发布测试。该决定不把Contact依赖变成发布豁免，不授权Gate 10、远程Preview、Production、push、DNS或索引。

## 2. 固定运行身份

| 项目 | 身份 |
|---|---|
| local main | `98c2c573dd090048352fa12415a9cc8eeefc485b`，clean |
| run | `20260908T162630Z-98c2c573dd09` |
| Build | `QmeAVzHgLILD56DVWgAww` |
| source archive SHA-256 | `da2be6f830e04f46693f921e44fd5d2f125f37ff1ab7342ca9abda12a1786089` |
| CMS SHA-256 | `b1d425d1bd2d291e816cc54581dce5ae02070d945f34f2f55c10bde5c17dd2bd` |
| runtime | Next `http://127.0.0.1:3100`; isolated WordPress `http://127.0.0.1:8180`; final status `HEALTHY` |

开发回执为`D:\16Wordpress_nextjs\.local-evidence\prerelease-58\20260908T162630Z-98c2c573dd09\RESULT.md`，SHA-256 `EB9EAF08568CB895BCB07F50A7E96B3798439EB8DC7314F671C2325FB0EB06B7`。223项证据的`evidence-hashes.json` SHA-256为`57AC6324D8C10EF227F64799D39E65B25FFAFE8C5678386CC175B6DFE6C7F164`。

## 3. 接收结论

| 范围 | 结果 |
|---|---|
| 58登记对象 | HTTP、合同、H1/title、scope、robots、JSON-LD格式、图片、三宽溢出、重复访问和适用导航检查通过 |
| Editorial | 首轮14页因预发布私有token映射缺失而404；修复并重建后14页全部恢复，鉴权拒绝缺失/错误token与错误scope |
| Canonical | 初扫7项为统一判据误报；按5个provisional应用页及2个未批准公开canonical/schema资源页的冻结合同纠正，并保留初扫证据 |
| 内链与CTA | 81条内部URL中80条可用；唯一404为已批准预发布例外`/contact/`。31条带上下文CTA的导航与适用预填通过；不等于表单接收通过 |
| 交互与视觉 | 27项Chromium/Firefox交互通过；174张三宽截图经15张总览检查及Brazil细节检查，未见新增布局阻断；Brazil链接对比度修复后Axe通过 |
| `SYS-404` | 多种未知URL、直接404、恢复动作、布局和Axe证据通过；`/contact/`按例外保留实际404 |
| `CONV-THANK` | 直接访问、八类负态、Consent、键盘与当前可执行状态通过；三种真实成功来源尚未形成阳性状态 |

## 4. 未关闭项

完整预发布结论仍为`NOT_PASS`：

1. RFQ为HTTP 200但无接收确认，Sample为502，Documents为400；没有provider确认、实际inbox确认或三个阳性Thank状态。宿主与容器访问provider出现403 HTML challenge，浏览器出现`net::ERR_FAILED`。这些证据只能证明外部访问/挑战阻断，不能证明key无效或邮箱绑定正确。
2. 原生浏览器200%缩放因Computer Use无法可靠识别当前Windows浏览器URL而停止；实体设备和屏幕阅读器AT未执行。Axe与CDP缩放不能替代这些检查。
3. `CONTACT-001`仍未完成；`/contact/`只对本轮预发布启动非阻塞，发布前仍须按用户后续决定处理。
4. 本轮浏览器证据来自合入后的local main预发布候选，不能倒写为修复版本合并前的独立develop浏览器E2E证据。

## 5. 下一步

保持上述运行身份供独立内链`RUNTIME_REVIEW`使用。外部receiver由账户/服务商侧核对访问限制、现有key及收件绑定后定向复验；原生200%与AT另行补证。内链专项结果只判断链接关系与路径，不替代上述预发布开放项或Gate 9生命周期。
