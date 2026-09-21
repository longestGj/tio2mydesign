# Applications 五个子页面 D32 静态 Next.js Gate 9 总控关闭 V1.0

日期：2026-09-21  
决定ID：`APP5-D32-STATIC-G9-PC-CLOSEOUT-20260921-01`  
状态：`APPROVED / CLOSED FOR BOUND CANDIDATE`

## 1. 关闭对象

- `APP-COAT`：`/applications/titanium-dioxide-for-coatings/`
- `APP-PLAS`：`/applications/titanium-dioxide-for-plastics/`
- `APP-MB`：`/applications/titanium-dioxide-for-masterbatch/`
- `APP-INK`：`/applications/titanium-dioxide-for-printing-inks/`
- `APP-PAPER`：`/applications/titanium-dioxide-for-paper/`

## 2. 接受身份

| 字段 | 固定值 |
|---|---|
| Baseline returned candidate | `0c117ee0941a3b307f761ff0db5ea67fc98b5a07` |
| Implementation | `ede0e32c2c73477589447344921c34370307206a` |
| Implementation tree | `7d1280ef53cf5f3f53fb6abd6148b8552edd0cd9` |
| Evidence head | `57a333ed31d6cded722533ab9ff2525742c6f939` |
| Evidence tree | `e45b4f9810c175a74b799f817a3b5203263222c1` |
| Manifest | `D:/32NextJS/.worktrees/applications-child-5-gate8/docs/verification/applications-child-5-gate8/gate8_evidence_manifest.json` |
| Manifest SHA-256 | `b024118ed931b71fc03db93d6581dfaa1495665cdf8dbc10aa80984d0f27866c` |
| Bound artifact | 93-file static export |

承载Manifest、validator和preflight说明的后续文档提交为`21e2ef7b01f29b95cef4730b6891fed5b3033130`；它不改变上述被接受的implementation、evidence head或93项制品。

## 3. 独立验收链

1. 首轮独立验收：`APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_INDEPENDENT_ACCEPTANCE_V1.0.md`，SHA-256 `fbcd392c9f955487eb399f3b767dc6975c5bd19795fe939ccb3ba0fec806db1f`；发现F01证据链与F02 Cookie焦点循环。
2. Gate 8定向返修：共享Cookie首尾双向焦点循环修复；V1.1静态制品Manifest、完整清单、构建绑定及测试证据补齐。
3. Return 1独立复验：`APPLICATIONS-CHILD-5_D32-STATIC-NEXTJS_GATE9_TARGETED_RECHECK_RETURN1_V1.0.md`，SHA-256 `8a29f8063be7abb7e044095e4de26f91cfa687f604008f0cf9d90766c827b7f2`。
4. 机器证据：Manifest validator `PASS`（208 checks）；两轮preflight `PASS`（10/10请求、0 artifact mismatch）；独立静态/HTTP差异保护165项通过；Cookie键盘双向焦点循环、Escape关闭及焦点返回通过。
5. `APP5-D32-G9-F01`与`APP5-D32-G9-F02`均`CLOSED`；`APP5-G9-01..12`最终全部`PASS`。

## 4. 四层状态

| 状态层 | 关闭值 |
|---|---|
| `RECHECK_SCOPE_STATUS` | `PASS / CLOSED` |
| `PAGE_GATE9_STATUS` | `PASS_FOR_BOUND_CANDIDATE / CLOSED` |
| `INTEGRATION_STATUS` | `INTEGRATION_READY / NOT_MERGED` |
| `RELEASE_STATUS` | `NOT_AUTHORIZED` |

真实设备、人工辅助技术和原生浏览器200%缩放按用户决定为`USER_EXCEPTED / NOT_TESTED / NON_BLOCKING`，不声称这些环境已测试。单站静态架构不适用旧多站scope隔离。五页技术可索引性已通过；Google真实收录和Search Console逐URL跟踪属于发布后责任。

Gate 8已停止`http://127.0.0.1:8342`并由Gate 9确认端口不再监听；工作树保持clean。没有执行合并、push、部署、发布、DNS或Search Console操作。
