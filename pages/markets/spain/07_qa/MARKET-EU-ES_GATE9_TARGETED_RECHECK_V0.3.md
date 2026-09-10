# MARKET-EU-ES Gate 9 Targeted Recheck V0.3

日期：2026-09-08。Review ID：`MARKET-EU-ES-G9-ROQA-01`。Recheck ID：`ES-G9-RECHECK-03`。模式：`INDEPENDENT_READ_ONLY_TARGETED_RECHECK`。

## 对象与结论

本轮只复验原Finding `ES-G9-F01`。对象为branch `codex/market-four-gate8`、code commit `47307b8f7e7c4b8a706aed08f91738462fae3a6f`、evidence commit `ad31fd82b8f00aa87da6acdb9ed2367d172dca76`、production Build ID `ax1NgfzN5PFVyPceTtKsF`及`http://127.0.0.1:3029`。

结论：**`ES-G9-F01 CLOSED_FOR_47307B8 / TARGETED_RECHECK_PASS`**。Spain Gate 9仍为**`GATE9_NOT_PASS`**，因为`ES-G9-F03`四个目标route仍为404，且其他接收、设备和生产依赖没有由本轮关闭。

## 独立证据

- commit父链为`b0d8cf0 → 47307b8 → ad31fd8`；代码commit相对父提交只改变Spain country page CSS与对应E2E两个文件。
- 3029 Spain route实际返回200；H1、canonical和robots保持准确。
- 独立pointer hover计算值：
  - Primary：白字、teal背景、`underline / 2px`；
  - Secondary `Explore Products`：teal字、`#f5f8fb`背景、`underline / 2px`；
  - Breadcrumb：teal字、`#f5f8fb`背景、`underline / 2px`。
- Secondary仍为`padding:13px 24px`、`min-height:50px`、实际55.1875px；键盘focus仍为3px teal outline、offset 3px。
- 实际打开production-mode新截图，`Explore Products`下划线清晰可见；SHA-256 `34f468a6901ff8dc3e2b4062e2a144cd505ee1f1e80cda172fefea2efeb1ab25`与回执一致。
- E2E源码现同时断言`text-decoration-line: underline`及`text-decoration-thickness:2px`，覆盖Primary、Secondary和Breadcrumb。
- fresh Vitest：5 files / 45 tests PASS；目标E2E文件ESLint PASS；七个共享文件相对批准base `c2764e6`的diff exit 0；worktree clean。

机器证据：[fresh-readback.json](gate9-es-f01-recheck-v0.3/fresh-readback.json) / [provenance.json](gate9-es-f01-recheck-v0.3/provenance.json)。

## 保持开放

`ES-G9-F03`继续为`OPEN / ROUTE_DEPENDENCY`：Coatings、Plastics、Masterbatch与EU Trade四个批准目标在3029跟随重定向后仍为404。批准href保持，不得隐藏、改链或fallback。RFQ/Documents provider与最终收件、native device/AT、非Chromium、native zoom、forced-colors、生产scope及Gate 10继续按原AC和依赖保持。

本轮未修改D16代码/CMS、未真实提交表单，也不授权Gate 10、合并、部署、生产写入、发布、DNS或索引。
