# D16 本地main串行集成队列规则 V1.0

日期：2026-09-08  
状态：`D23_INTERFACE_RULE / D16_ADOPTED_AT_3ec98f3`。

## 1. 四层状态

每批Gate8实现分别维护：

1. `RECHECK_SCOPE_STATUS`：Gate9本轮指定范围；
2. `PAGE_GATE9_STATUS`：页面整体Gate9；
3. `INTEGRATION_STATUS`：D16本地main集成；
4. `RELEASE_STATUS`：Gate10、push、部署和发布。

`INTEGRATION_READY`只表示该实现已满足进入本地main队列的资格。它不等于已经合并，也不自行授予合并权限。实际本地main集成须遵守用户当前确定的D16流程，由单一集成任务执行。

## 2. 进入队列

Gate9接受本次Gate8交回范围、发送通过通知并明确Gate8可停止对应返修后，该批可以登记为`INTEGRATION_READY`。页面其他外部依赖和后续Finding继续保留，不要求已接受代码长期停在旧开发分支。

不得因局部Finding仍开放却与本次实现无关，就重复修改已验收代码；也不得用`INTEGRATION_READY`覆盖页面整体`GATE9_NOT_PASS`。

## 3. 串行集成

- 同一时间只允许一个D16集成任务更新本地`main`。
- 集成前重新读取本地main HEAD、工作树状态、目标分支HEAD和Gate9接受的implementation/evidence/Build身份。
- 目标分支自Gate9验收后发生实质代码变化时，原`INTEGRATION_READY`失效；需说明差异并按影响重新复验。
- 合并冲突交回原实现owner；集成任务不得静默改写批准语义。
- 合并后记录main前后commit、合入对象、冲突处理和受影响批次组合回归。
- 组合回归失败时状态为`CONFLICT_RETURNED`或`INTEGRATION_BLOCKED`，不把单页旧PASS扩张为main通过。

建议状态值：`NOT_READY / INTEGRATION_READY / QUEUED / INTEGRATING / INTEGRATED_LOCAL_MAIN / INTEGRATION_BLOCKED / CONFLICT_RETURNED`。

## 4. 发布边界

本地main集成不授权远端push、Vercel部署、生产WordPress写入、DNS、sitemap、索引或发布。这些继续由Gate10或单独明确授权控制。

本文件只定义D23与D16的集成接口。D16已在commit `3ec98f34a8ee8dbb4cdca1ff7be6c5f25c32260b`将唯一当前规则写入`docs/development-workflow.md`第6节，并让`docs/d23-gate-handoff.md`引用该节；D16实际集成以其当前开发流程为准。
