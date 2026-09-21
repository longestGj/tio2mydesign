# Gate 8规则同步与验证记录 V1.0

2026-09-21。批准来源：用户“不需要独立的Gate8 agent，其他方面进行修改。”本轮不新增Agent。

## 改动与身份

统一入口为[Gate 8当前规则](GATE8_CURRENT_RULES_V1.0.md)。工作流V3.5、治理细则V1.6、证据合同/静态Schema V1.1、Gate 9基线V1.2、总控生效V1.15与根入口同步。旧批准源保留；原件快照和前后hash见[清单](../../90_archive/project-governance/2026-09-21-gate8-rules/file-changes.json)。规则更新不迁移页面Manifest、不改写历史验收。

开发仓库仅改4份文档：AGENTS、README、CONTRIBUTING及docs/gate8-handoff.md。工作树`D:/32NextJS-gate8-rules`从develop建立codex/gate8-rules，文档提交`ac6d076d6c2e40d53f5a801178f13fcf00d77242`已快进合入本地develop；main仍为`53280559074eab582aecabea6e2593aaf9ccd8ed`。无网站代码修改，未推进main、push或部署。原D:/32NextJS工作区仍在main，所以其文件保持旧发布快照；后续新开发从develop获取新规范。

## 工具验证

先加入静态制品测试，旧工具的2项正向场景因缺少site_scope失败（RED）。增加V1.1后发现测试夹具仍按工作树哈希，改为按新合同读取Git blob原字节；这保留了Windows换行差异测试价值，没有放宽校验。

最终执行`python -X utf8 -m unittest discover -s skills/runtime-implementation-verification/tests`：14/14通过，包括8项V1.0兼容、6项静态测试。覆盖当前HEAD推进且工作区有后续修改、无scope/BUILD_ID、制品篡改、漏文件、越界路径/空运行检查、错误实现绑定、两轮正确HTTP响应及错误候选响应拒绝。

运行Skill quick_validate通过；D32文档暂存及集成差异检查通过。文档改动未运行网站构建/浏览器测试，不把这些检查记为通过。V1.1工具依赖Python 3和jsonschema，缺依赖返回明确证据不完整。

## 局限与回退

本次为规则、只读验收工具及合成测试，不是新网站候选的Gate 9验收。未做真实页面V1.1试跑，未更改页面robots、sitemap、canonical或生产配置；正式索引目标仍需获授权开发和发布落实。静态响应hash模式适用于响应原样静态字节，服务端改写HTML的目标须另明确身份机制。

回退须对应有效决定，按清单定向恢复原段落和版本指针；工具保留V1.0历史入口，无需改写既有证据。开发文档回退采用后续提交，不重写已存在Git历史。机器同步检查见[verification.json](../../90_archive/project-governance/2026-09-21-gate8-rules/verification.json)。
