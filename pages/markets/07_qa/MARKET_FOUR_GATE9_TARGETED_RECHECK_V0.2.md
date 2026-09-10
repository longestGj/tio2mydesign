# Spain / India / Netherlands / Belgium Gate 9 Targeted Recheck V0.2

日期：2026-09-08。控制ID：`G9-MARKET-FOUR-TARGETED-RECHECK-02`。模式：`INDEPENDENT_READ_ONLY_TARGETED_RECHECK`。

## 1. 对象与结论

本轮沿用首轮原Finding ID复验D16 branch `codex/market-four-gate8`：代码commit `d764c36f17a8f90184bbbf12c9b703ec2fc7e4fc`，证据commit `b0d8cf04f932f8da0652274bb36ccdc979026130`，base `c2764e6138aa0dc37d1f6cab04bc1ae39f45aecb`，production Build ID `CniIF8B0T7ToCxd_PvQ2d`，只读运行`http://127.0.0.1:3029`。工作树在复验前后均clean。

总体结论：**`TARGETED_RECHECK_COMPLETE / CHANGES_AND_DEPENDENCIES_REMAIN / GATE9_NOT_PASS`**。

开发修订关闭了Spain精确排版、India键盘焦点、Belgium内联焦点、两页运行入口及四页共享交回问题。Spain Secondary action hover仍无下划线，`ES-G9-F01`未完整关闭；Spain四个批准目标和India Trade目标仍为404，`ES-G9-F03`与`IN-G9-F01`保持开放。VVVF、RFQ/DOC provider/最终收件、设备/AT/非Chromium/native zoom/forced-colors、生产及Gate 10依赖继续开放。

## 2. 独立复验方法与证据

- 独立锁定commit父链、build ID、3029监听进程的worktree命令行、工作树状态和D16证据hash。
- 对3029实际运行四条Country route，均取得200、准确H1/canonical/robots；对18088 GraphQL逐条读取四个Page ID，均为publish、准确path且scope仅`tio2-my`。
- 独立操作Spain computed states、India 11个main链接正反向键盘遍历、Belgium两条BE-04内联链接三视口focus几何。
- 独立执行10个目标Vitest文件，结果`10/10 files, 191/191 tests PASS`。
- 独立比较七个共享文件相对批准base，`git diff --exit-code`为0；候选专属共享字体helper不存在。
- 实际打开Spain 390整页、Belgium两张390 focus crop和India focus证据原图。未发现Next dev indicator；Belgium轮廓、标点与India焦点可见。

机器证据：

- [fresh-runtime-readback.json](market-four-gate9-recheck-v0.2/fresh-runtime-readback.json)
- [provenance-and-test-readback.json](market-four-gate9-recheck-v0.2/provenance-and-test-readback.json)
- [belgium-runtime-readback.json](market-four-gate9-recheck-v0.2/belgium-runtime-readback.json)

## 3. 原Finding ID复验结果

| Finding | 结果 | 独立依据与边界 |
|---|---|---|
| `ES-G9-F01` | **`RECHECK_FAIL / OPEN`** | Primary hover为白字/teal/underline，breadcrumb为teal/灰底/2px underline，focus为3px teal/offset 3px；但Hero Secondary `Explore Products` hover的computed `text-decoration-line`仍为`none`，只有`text-decoration-thickness:2px`。修订E2E只断言thickness，没有断言line，不能证明批准的2px下划线实际绘制。 |
| `ES-G9-F02` | **`CLOSED_FOR_D764C36`** | H1/H2均650；390正文/列表16px；action padding 13×24、min-height 50、实际55.1875px；三端新图和运行无横溢证据一致。 |
| `ES-G9-F03` | **`OPEN / ROUTE_DEPENDENCY`** | Coatings、Plastics、Masterbatch、EU Trade四个批准目标在3029跟随重定向后仍为404。href保持批准值，不得隐藏、改链或fallback。 |
| `ES-G9-F04` | **`CLOSED_FOR_D764C36`** | 七个共享文件与base `c2764e6`内容差异0，候选helper已删除；Home/Markets/Products及EN/BM共享消费者证据与独立运行抽查支持option (b)回退处置。 |
| `IN-G9-F01` | **`OPEN / ROUTE_DEPENDENCY`** | India Trade目标在3029仍为404；批准href保持。 |
| `IN-G9-F02` | **`CLOSED_FOR_D764C36_BUILD_CNIIF8B0`** | 3029为绑定该worktree的`next start`进程，四条Country route均200，checkout BUILD_ID准确匹配。 |
| `IN-G9-F03` | **`CLOSED_FOR_D764C36`** | 11个main链接正向和反向顺序完全互逆；每个实际焦点均为可见3px teal outline，目标几何未发现裁切。 |
| `IN-G9-F04` | **`CLOSED_FOR_D764C36`** | 与`ES-G9-F04`同一option (b)及相同共享文件等值证据。 |
| `NL-G9-F01` | **`CLOSED_FOR_D764C36`** | 与`ES-G9-F04`同一option (b)及相同共享文件等值证据；共享交回语义已由准确处置记录取代。 |
| `BE-G9-F01` | **`CLOSED_FOR_D764C36`** | `Product Hub`与`quotation request`在1440/768/390均为44px高、左右6px padding、3px teal inset outline/offset -3px；quotation request与句号nowrap成组，原图未见轮廓裁切或遮标点。 |
| `BE-G9-F02` | **`CLOSED_FOR_RUNTIME_AVAILABILITY_ON_D764C36`** | 3029准确候选可访问；Belgium SSR/head、12个main href最终响应、RFQ Belgium预填、Documents中立字段、Menu/Cookie dialog与Escape焦点恢复已独立读取/操作。provider、真实收件、七面完整反向矩阵和设备层仍按AC/依赖单列，不由本Finding扩大关闭。 |
| `BE-G9-F03` | **`CLOSED_FOR_D764C36`** | 与`ES-G9-F04`同一option (b)及相同共享文件等值证据。 |

## 4. 停止点

Gate 9保持未通过。Gate 8只需对`ES-G9-F01`剩余的Secondary hover实际下划线做定向修复并交回新commit；页面目标route由已授权的Application/Trade Resource开发线负责，完成后再沿`ES-G9-F03`与`IN-G9-F01`复验。其余未验证层按原AC和依赖保留。

本复验未修改D16代码/CMS，未真实提交表单，未授权Gate 10、合并、部署、生产写入、发布、DNS或索引。
