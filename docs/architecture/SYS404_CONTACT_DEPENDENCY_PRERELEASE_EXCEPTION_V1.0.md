# SYS-404 Contact依赖预发布例外 V1.0

日期：2026-09-08  
决定ID：`SYS404-CONTACT-PRERELEASE-EXCEPTION-20260908-01`  
来源：用户明确回复“这个作为例外处理。先进行预发布测试。”

## 决定

`SCT-G9-F02-CONTACT-TARGET`从本轮预发布启动阻塞项改为：

`USER_APPROVED_PRERELEASE_EXCEPTION / NON_BLOCKING_FOR_PRERELEASE_TEST_START`

适用范围仅为：

- `CONTACT-001`仍按原决定延后，不因本轮创建、补页或跳过自身Gate流程；
- SYS-404保留已批准的`Contact Our Team → /contact/`，预发布测试如实记录其当前404结果；
- `/contact/`当前不可达不再阻止Repair 02集成本地`main`、重建预发布或执行本轮全站测试。

## 不扩展

本例外不关闭或豁免`SCT-G9-F01`、`F03–F09`，不把未完成的真实receiver、设备/AT、scope/cache、运行或证据条件记为PASS；不授权隐藏、删除或改写Contact链接。

本决定只允许先进行本地预发布测试。它不自动批准带失效`/contact/`链接的正式发布；Gate 10、远程Preview、Production、DNS和索引仍需各自权限与决定。

本轮预发布范围为原56页，加`CONV-THANK`和`SYS-404`两个页面对象，共58个登记对象；`SYS-404`通过`/404/`及代表性未知根/嵌套URL验证，`CONTACT-001`不计入本轮完成页。
