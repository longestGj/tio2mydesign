# Spain / India Gate 9 Route Dependency Targeted Recheck V0.3

日期：2026-09-08。控制ID：`G9-MARKET-ROUTE-DEPENDENCY-RECHECK-03`。模式：`INDEPENDENT_READ_ONLY_TARGETED_RECHECK`。

## 1. 对象与结论

本轮只复验`ES-G9-F03`和`IN-G9-F01`。对象为D16 branch `codex/country-editorial-integration`，运行代码commit `4fa585bc125c7b8fa926ab66059f4fc6887877f4`，证据commit `58af74dbe44b4ccaafe517d592ecae5d5ff37ef2`，production Build ID `1AwBNw0A1szLVVlTyLyQU`，只读运行`http://127.0.0.1:3226`。工作树复验前后均clean。

结论：**`ES-G9-F03 CLOSED / IN-G9-F01 CLOSED FOR EXACT CANDIDATE / GATE9_NOT_PASS`**。

Spain批准的Coatings、Plastics、Masterbatch、EU Trade四个目标和India Trade目标均已在同一候选中实际返回200。五条来源链接均按批准href完成真实点击、目标Page ID核对及浏览器返回；两条Trade页的明确返回入口也实际到达200。关闭只绑定上述commit/build，不扩大为两页整体Gate 9通过。

## 2. 独立复验结果

| Finding | 结果 | 独立依据 |
|---|---|---|
| `ES-G9-F03` | **`CLOSED_FOR_4FA585B_BUILD_1AWBNW0`** | 从`/markets/spain/`分别点击Coatings、Plastics、Masterbatch及EU Trade批准链接；四个目标均200，渲染Page ID分别为`APP-COAT`、`APP-PLAS`、`APP-MB`、`RES-TRADE-EU`，history back均回到Spain；EU Trade明确返回入口到`/markets/european-union/`为200。 |
| `IN-G9-F01` | **`CLOSED_FOR_4FA585B_BUILD_1AWBNW0`** | 从`/markets/india/`点击批准的India Trade链接；目标200，渲染Page ID为`RES-TRADE-IN`，history back回到India；页面明确返回入口到`/markets/india/`为200。 |

逐条CMS实时读取确认五条记录均为`publish`，scope精确且仅为`tio2-my`，合同Page ID/path与运行目标一致；错误scope读取被拒绝。EU/India freshness均为`verified / no_open_trigger`，`nextReviewDue=2026-10-07`。五条带查询参数的目标访问仍输出批准canonical，未发生跨scope fallback。

独立执行5个editorial integration/unit测试文件，结果`5/5 files, 78/78 tests PASS`。五张独立1440整页截图已逐张检查，未见404、错误模板、内容缺失或明显横向裁切。

机器证据：

- [fresh-runtime-and-cms-readback.json](market-four-route-dependency-recheck-v0.3/fresh-runtime-and-cms-readback.json)
- [provenance-and-test-readback.json](market-four-route-dependency-recheck-v0.3/provenance-and-test-readback.json)
- [复验脚本](market-four-route-dependency-recheck-v0.3/recheck.mjs)

## 3. 保留边界

本轮仅关闭两个route dependency Finding。RFQ/DOC provider、最终收件、完整设备/AT/非Chromium/native zoom/forced-colors、生产环境及其他原AC仍按原记录开放，因此Spain和India整体均保持`GATE9_NOT_PASS`。

本复验未修改D16代码或CMS，未真实提交表单，未授权Gate 10、合并、部署、生产写入、发布、DNS或索引。

Gate 8已接收本复验结论并以D16 docs commit `84db14ee35fe118415bff8327f202ee712e7599c`登记回执；该回执位于运行/证据commit之后且不改变已复验代码或Build。
