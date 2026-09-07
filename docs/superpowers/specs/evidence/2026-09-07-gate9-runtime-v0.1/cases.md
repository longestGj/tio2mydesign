# SYN-G9 合同与交付证据摘录

这是虚构案例，供验收方法评估。所有证据都是本文件给定的摘录，无实际浏览器、服务器、图片、日志原件或源码可访问。只读本文件；输出到调用者指定路径。不得联网、发送消息、修改项目或执行真实验收。给出逐条判断、证据局限、问题及下一步，保持可执行但简洁。

## 批准合同

页面SYN-G9，scope=tio2-my，en，/resources/guide/。本轮验收修复版本rev-B，修复前为rev-A。生产发布未授权。

- AC01：WordPress管理文章；API返回本scope的当前记录；SSR页面呈现该记录。CMS链路本轮必验。
- AC02：所有内容在1440/768/390完整可见。390选项须显示全名，实际命中区宽高至少44px。
- AC03：选择文档与Grade后，摘要和接收URL同步；Back/Forward恢复同一选择。
- AC04：仅在服务商正向接受请求后显示“Request received”。本轮只授权验证给定结果，不授权再次发请求。没有持久化/去重要求。邮箱实际收件单列发布条件R01。
- AC05：已批准完整Article元数据时输出Article；当前元数据=null时不输出；隐藏或不完整时不输出。三个分支均本轮必验。
- AC06：使用现有共享导航，缓存与查询隔离，正确/缺失/错误scope按合同返回本scope内容或空结果，不跨scope回退。受影响共享页面须回归。
- AC07：公开HTML和客户端数据不得带internal_review字段。Title精确值“Guide to TiO2”，Canonical=https://example.test/resources/guide/，预览noindex。
- R01：实际邮箱收到待用户确认，可后置发布；R02：生产CMS应用/读回可后置发布。本轮局部CMS链路AC01不能因此豁免。

## 开发回执及材料摘录

1. rev-B相对rev-A只修改选择状态代码和公共缓存key函数，工作区无未提交修改。回执称全部通过。API结构和静态视觉源未变；无运行环境、数据及图像仍等价的核对记录。
2. 测试摘要列“301 PASS”。页面探测记录于09:10、版本未记，HTTP200、H1可读；端口运行标识记录显示rev-A。rev-B回执时间09:25。无rev-B运行捕获。
3. 数据追踪摘录：SSR调用articleProvider，实际mode=fixture，返回local-article.json。WordPress端点记录只有status200，不包含记录、scope或内容关联。回执将R02用于解释CMS未接入。
4. rev-A测量记录：390无横向滚动；选中框width=180,height=44,overflow=hidden；完整选项210px，截图说明为末尾截断。触控区域44x44。1440/768截图只有路径，没有文件。rev-B没有新图。
5. rev-B源码摘录：popstate时只更新复选框，摘要由首次加载snapshot产生；构建测试通过，无Back/Forward操作记录。
6. 服务商捕获摘录：rev-A浏览器实际发请求，测试IDQ7，HTTP200，body={success:true, message:'accepted'}；提供者本次返回为真实响应。界面显示Request received，邮箱没有证据。rev-B未改表单代码，但没有环境和接收配置关联资料。旧审查F04仅针对Q7服务商接受，旧审查已通过。用户未批准额外提交。
7. rev-A null元数据页面无Article，记录为通过。完整元数据分支只给单元测试结果，未给CMS/API/SSR贯通证据；源码摘录中Article渲染被永久false包围。隐藏分支没有记录。
8. 公共缓存key原来含scope，rev-B摘录为cacheKey=slug。两个scope存在同slug记录。只跑tio2-my正向测试，缺失/错误scope及已有页面未测。共享导航复用已集成组件，当前没有另建shell的证据。
9. 给定rev-A初始HTML摘录含Title/Canonical/noindex正确值；客户端序列化对象含internal_review:'pending'。回执称字段不在可见正文，所以无泄露。rev-B未改序列化代码。

## 另一个候选rev-C

使用更早baseline，diff只给文件列表：新增local JSON、query adapter和shell.tsx，没有wordpress目录改动。现有WordPress插件可能已支持所需文章类型，回执未核对；shell.tsx是否转调原owner未知。预览200。没有源码或链路原件可检查。用户只授权比较，不授权选定、复制、合并或改代码。

## 有效历史证据复用对照

另一个无关页面SYN-STABLE仅README修改。提交前后实现、依赖、数据、环境配置身份逐项相同，已有独立操作证据覆盖当前要求且无反证，给定记录明确对应这组身份。只需判断这些历史证据是否可在声明原日期和范围后继承；不要求重新验收该页。
