# 开发侧 配置的集成分支串行集成队列规则 V1.0

母版版本：0.1.0（提取候选，尚未安装/发布验证）。运行前读取[实例绑定合同](../../contracts/instance-bindings.md)；本站事实、授权与进度不随方法复制。

## 1. 四层状态

每批Gate8实现分别维护：

1. `RECHECK_SCOPE_STATUS`：Gate9本轮指定范围；
2. `PAGE_GATE9_STATUS`：页面整体Gate9；
3. `INTEGRATION_STATUS`：开发侧配置的集成分支集成；
4. `RELEASE_STATUS`：Gate10、push、部署和发布。

`INTEGRATION_READY`只表示该实现已满足进入配置的集成分支队列的资格。它不等于已经合并，也不自行授予合并权限。实际配置的集成分支集成须遵守用户当前确定的开发侧流程，由单一集成任务执行。

## 2. 进入队列

Gate9接受本次Gate8交回范围、发送通过通知并明确Gate8可停止对应返修后，该批可以登记为`INTEGRATION_READY`。页面其他外部依赖和后续Finding继续保留，不要求已接受代码长期停在旧开发分支。

不得因局部Finding仍开放却与本次实现无关，就重复修改已验收代码；也不得用`INTEGRATION_READY`覆盖页面整体`GATE9_NOT_PASS`。

## 3. 串行集成

- 同一时间只允许一个开发侧集成任务更新配置的集成分支。
- 集成前重新读取配置的集成分支 HEAD、工作树状态、目标分支HEAD和Gate9接受的implementation/evidence/Build身份。
- 目标分支自Gate9验收后发生实质代码变化时，原`INTEGRATION_READY`失效；需说明差异并按影响重新复验。
- 合并冲突交回原实现owner；集成任务不得静默改写批准语义。
- 合并后记录main前后commit、合入对象、冲突处理和受影响批次组合回归。
- 组合回归失败时状态为`CONFLICT_RETURNED`或`INTEGRATION_BLOCKED`，不把单页旧PASS扩张为main通过。

建议状态值：`NOT_READY / INTEGRATION_READY / QUEUED / INTEGRATING / INTEGRATED_LOCAL_MAIN / INTEGRATION_BLOCKED / CONFLICT_RETURNED`。

## 4. 发布边界

配置的集成分支集成不授权远端push、Vercel部署、生产WordPress写入、DNS、sitemap、索引或发布。这些继续由Gate10或单独明确授权控制。

实际目标分支、是否使用worktree与集成顺序由本站开发治理绑定决定。本适配不创建分支、不覆盖main-only约束，也不授予合并权。