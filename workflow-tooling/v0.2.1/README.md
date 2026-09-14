# 项目级工作流转换 0.2.1

当前推荐入口。在0.2.0原生布局上增加W1–W5固定成果目录、统一保存合同及五角色/总控/交接/实例绑定/交回模板引用。沿用industrial-b2b 0.1.1发行快照，原发行和0.2.0保持不变。

`project_native.render(package)`验证原始包，返回全部项目级路径→字节，不写磁盘。新站接入按此输出建立目录；已有项目仅合并差额，保留已有README、事实、用户决定和审查。不得用空白母版覆盖业务内容。

业务README不是不可变方法文件，初始化后不纳入方法Manifest逐字节锁定；角色/合同/Skill继续锁定。更新project-manifest及workflow.lock的projection_version为0.2.1，记录原包身份、当前文件身份；不改变模型、权限或阶段授权。

验证：`python -B -m unittest discover -s workflow-tooling/v0.2.1 -v`。0.1.x bootstrap只完成发行接入，不能替代原生投影。转换器依赖同级v0.2.0；复制工具时一并保留，或按当前工具目录使用。
