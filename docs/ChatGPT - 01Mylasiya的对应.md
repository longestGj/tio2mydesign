---
title: "01Mylasiya的对应"
source: "https://chatgpt.com/g/g-p-6a9229f2814c8191b3743cce30a33b38-01mylasiyade-dui-ying/shared/c/6aa7981f-4eb8-83ee-b4eb-d807b6d0ad2a?owner_user_id=user-txCj3r8nPNEwMO864oplySla"
author: ''
published: ''
created: "2026-09-20"
description: "Use ChatGPT to answer questions, write, create images, complete work, and code—all in one place. Get started for free or download the app."
tags: [clippings]
---


> This clip is partial — some turns of the conversation are missing.

思考了 1m 32s

这一步属于 **Architectural** ：我们是在定义新项目的长期边界，而不是改一个页面或文件。所以我先把这一节定成设计合同， **仍然不写代码、不建仓库结构** 。我建议采用最严格的“策划/运行时分离”方案；旧项目那种 readiness 字段继续留一部分的折中方案，我不建议保留。

Planning → Development Handoff Boundary V0.1

## Planning → Development Handoff Boundary V0.1

## 1\. 核心原则

新项目必须遵守：

> **Planning state must never become runtime state unless the end user genuinely needs that state.**

即：

> 策划、审核、证据、开发进度和发布状态，不得因为“以后可能有用”而进入 WordPress、GraphQL 或 Next.js 业务数据模型。

旧项目的问题不是“状态太多”这么简单，而是把：

`规划状态 → CMS字段 → GraphQL字段 → TypeScript类型 → Resolver → 条件渲染`

变成了一条正式架构链。

新项目必须在第一层切断这条链。

* * *

## 2\. 交付信息只允许分成四类

| 类别  | 定义  | 可以进入运行时吗？ |
| --- | --- | --- |
| `CONTENT` | 用户真正要阅读、查询或使用的业务内容 | ✅   |
| `RUNTIME_BEHAVIOR` | 网站实际运行所必需的行为 | ✅   |
| `RELEASE_ACCEPTANCE` | 用于判断这次版本能否发布 | ❌   |
| `GOVERNANCE_ONLY` | 策划、审批、证据、项目管理状态 | ❌   |

其中只有前两类允许进入正式应用架构。

* * *

## 3\. CONTENT：允许进入 WordPress

例如 Product `M-350` 可以拥有：

| 数据  | 是否进入 WordPress |
| --- | --- |
| Product title | ✅   |
| slug | ✅   |
| summary | ✅   |
| description | ✅   |
| hero image | ✅   |
| process | ✅   |
| applications | ✅   |
| technical properties | ✅   |
| packaging information | ✅   |
| FAQ | ✅   |
| TDS / SDS 文件关系 | ✅   |
| SEO title | ✅   |
| SEO description | ✅   |

Application `Coatings` 可以拥有：

- 页面标题和正文；
    
- technical challenges；
    
- buyer evaluation criteria；
    
- recommended TiO₂ properties；
    
- FAQ；
    
- SEO；
    
- 与 Product 的业务关系。
    

这些都是：

> **Business facts / editorial content**

因此可以通过：

```markdown
WordPress
    ↓
GraphQL
    ↓
Next.js
```

进入网站。

* * *

## 4\. RUNTIME_BEHAVIOR：允许进入 Next.js

真正的 Runtime Behavior 包括：

```markdown
/products/[slug] 如何解析
不存在的 Product → 404
Selector 如何筛选 Product
表单如何验证
表单如何提交
Mobile menu 如何打开
Accordion 如何展开
Metadata 如何生成
Product → Application 如何查询
```

这些确实是网站运行行为。

例如：

```markdown
/products/m-350/
```

只需要：

```markdown
slug = m-350
        ↓
getProduct("m-350")
        ↓
找到 published Product
        ↓
render
```

找不到：

```markdown
notFound()
```

不需要：

```markdown
routeRegistry
routeReadiness
route_live
PRODUCT_ROUTE_AVAILABLE
publicationResolver
canonicalGraph
```

* * *

## 5\. RELEASE_ACCEPTANCE：不得进入 Runtime

这是旧项目最容易混进去的一类。

例如：

```markdown
这个链接是否真的返回 200？
RFQ 是否已经可以提交？
14 个 Product 是否都有页面？
是否存在死链？
Metadata 是否正确？
Sitemap 是否包含正确 URL？
Mobile 390px 是否正常？
```

这些问题非常重要。

但正确位置应该是：

```markdown
Test / QA / CI / Release checklist
```

而不是：

```markdown
WordPress field
GraphQL field
React runtime state
```

例如 Products 页面准备发布时：

```markdown
/products/
        ↓
release test
        ↓
检查14个产品链接
        ↓
有一个404
        ↓
FAIL RELEASE
```

而不是：

```markdown
WordPress:
m350_route_live = true
m510_route_live = true
m896_route_live = false

        ↓

React:
if (m896_route_live) {
   renderLink()
}
```

新项目明确选择前一种。

* * *

## 6\. GOVERNANCE_ONLY：永远不得进入业务模型

以下内容属于项目治理：

```markdown
Page ID
Gate 1 / Gate 2 / Gate 6
APPROVED
PLANNED
PROVISIONAL_URL
NOT_VERIFIED_LIVE
Evidence ID
Review ID
Finding ID
Approval date
Reviewer
Mapping Status
Verification Status
Release Authorization
Current Manifest
Schema Version
Relationship Version
Content Revision
```

这些东西可以继续存在于：

```markdown
设计文档
GitHub issue
PR
项目状态文档
测试报告
```

但不能进入：

```markdown
ACF
WordPress post meta
Custom GraphQL
Frontend DTO
React props
Runtime resolver
```

* * *

## 7\. WordPress 允许保留一种“状态”

这里要特别区分。

WordPress 原生：

```markdown
draft
published
```

可以保留。

因为这是正常的 CMS 内容生命周期：

```markdown
编辑人员正在写 M-350
→ Draft

批准公开
→ Publish
```

公开 GraphQL 查询只读取：

```markdown
published content
```

这是合理的。

但是不能再在上面叠：

```markdown
publication_status
approval_status
route_status
content_readiness
release_state
evidence_status
schema_version
```

也就是说：

> **WordPress native publish state 足够。**

* * *

## 8\. “未准备好的页面”怎么处理

这是整个边界最关键的实际问题。

假设：

```markdown
Applications / Coatings
```

还没有做好。

旧项目：

```markdown
APP-COAT
mapping approved
content approved
route_live false

→ runtime隐藏链接
```

新项目：

```markdown
Coatings 页面没有进入本次 Release
        ↓
Products 页面本次版本就不要交付依赖这个链接的设计
```

或者：

```markdown
Coatings 与 Products 一起完成
        ↓
Release QA 验证两个 route
        ↓
一起发布
```

换句话说：

> **版本范围解决“有没有这个页面”，Runtime 不解决项目进度。**

* * *

## 9\. 一个页面链接另一个页面时的规则

例如：

```markdown
M-350
→ Coatings
```

WordPress 可以保存业务关系：

```markdown
M-350 applications:
- Coatings
```

但是 WordPress 不保存：

```markdown
coatings_route_live = true
```

Next.js 根据关系生成：

```markdown
/applications/coatings/
```

Release Test 检查：

```markdown
该 URL 是否存在？
```

不存在：

> Release fail。

而不是让生产网站偷偷把链接隐藏掉。

* * *

## 10\. Product Hub 的实际效果

这样 `/products/` 数据链会从旧项目的：

```markdown
approved JSON
→ contract
→ Product Hub CPT
→ schema version
→ pageId
→ public_path
→ route registry
→ readiness
→ GraphQL JSON
→ JSON.parse
→ DTO
→ resolver
→ renderer
```

变成：

```markdown
Products Page
        +
Published Product CPT
        +
Application / Process relationships
        ↓
GraphQL
        ↓
getProducts()
        ↓
/products/page.tsx
        ↓
ProductHub
```

页面里的：

```markdown
14 Grades
Applications selector
Process navigation
Directory
```

全部来自真正的业务内容和关系。

不再来自项目治理状态。

* * *

## 11\. SEO 同样执行这个边界

WordPress 可以保存：

```markdown
seo_title
seo_description
```

Next.js 负责：

```markdown
Metadata
OpenGraph
JSON-LD
Canonical
```

但不能出现：

```markdown
if (FULL_ROUTE_COPY) ...
if (routeReadiness === READY) ...
if (evidenceStatus === APPROVED) ...
```

SEO 输出应该由：

```markdown
当前页面内容 + 当前路由
```

决定。

而不是由项目管理生命周期决定。

* * *

## 12\. 唯一允许进入 Runtime 的“状态”的判断标准

以后 AI 想增加任何：

```markdown
status
enabled
available
ready
approved
version
mode
```

字段之前，必须回答四个问题：

| 问题  | 要求  |
| --- | --- |
| 网站上线以后，这个值还会真实存在吗？ | 必须 Yes |
| 买家或业务流程真的需要根据它改变行为吗？ | 必须 Yes |
| 它会独立于代码部署发生变化吗？ | 通常应 Yes |
| 它是业务状态，而不是项目管理状态吗？ | 必须 Yes |

例如未来真的有：

```markdown
product_stock_status
```

而业务要求实时显示：

```markdown
Available / Out of stock
```

那它可能是合法 Runtime State。

但：

```markdown
route_live
review_approved
gate6_pass
evidence_verified
```

全部不满足。

* * *

## 13\. 新项目明确禁止的模式

新项目 Phase 1 不允许重新出现：

```markdown
Route Registry
Route Readiness Resolver
Page Runtime
Publication Resolver
Template Registry
Extension Registry
Page Graph
Schema Version Runtime
Relationship Version Runtime
Content Revision Runtime
*_AVAILABLE
FULL_ROUTE_COPY
CMS-driven component selection
CMS-driven template selection
```

除非将来出现一个 **已经发生的、具体的业务需求** ，证明其中某个机制确实不可替代。

不能因为：

> “以后可能需要”

提前建设。

* * *

## 14\. AI 开发约束

以后 AI 收到策划文件时：

策划写：

```markdown
Coatings 页面尚未完成。
```

AI不得翻译成：

```markdown
applicationRouteReady = false
```

而应该理解成：

```markdown
Not part of current release scope.
```

策划写：

```markdown
M-350 technical property 尚未确认。
```

AI不得创建：

```markdown
technicalPropertyStatus
```

而应该：

```markdown
不要把该字段写入已发布内容。
```

策划写：

```markdown
RFQ 尚未完成。
```

AI不得创建：

```markdown
RFQ_AVAILABLE
```

而应该：

```markdown
包含RFQ依赖的Release尚未ready。
```

这条翻译规则非常重要。

* * *

## 15\. 最终责任边界

新项目最终形成下面这条线：

```markdown
PLANNING
Page strategy
SEO strategy
Evidence
Approval
Release scope
        │
        │ 只输出已决定的业务需求
        ▼
────────────────────────────
        HANDOFF BOUNDARY
────────────────────────────
        ▼
PRODUCT
Content
Business relationships
Actual runtime behavior
        ▼
WordPress
        ↓
GraphQL
        ↓
Next.js
        ↓
PUBLIC WEBSITE
```

而：

```markdown
Gate
Review
Evidence
Readiness
Approval
Release status
```

全部停在边界上方。

* * *

## Boundary Rule

最后可以浓缩成一句以后给所有 AI 使用的规则：

> **Development receives approved business requirements, not the planning process that produced them.**

中文：

> **开发只接收已经确定的业务需求，不接收产生这些需求的策划过程。**

我建议把这版 **Planning → Development Handoff Boundary V0.1** 定下来。它和前面已经确定的“WordPress 管内容、Next.js 管展示/路由/交互”组合起来，基本能从根上阻止旧项目那套 `status → registry → resolver → runtime` 再生。

如果你认可这一节，下一步我会继续定 **ACF Boundary V0.1** ：具体到 Products Page、Product CPT、Application CPT，逐字段决定“哪些能进 WordPress，哪些坚决留在 React 里”。

继续

思考了 1m 4s

上一节通过后，我们现在把 **ACF Boundary** 定死。这里的目标不是“把 WordPress 做得功能强”，而是让它只保存真正需要长期维护的业务内容。

ACF Boundary V0.1

## ACF Boundary V0.1

## 1\. 总规则

判断一个字段能不能进入 WordPress，只问：

> **如果网站明天完全重新设计，这个字段还有业务意义吗？**

有：

```markdown
surface_treatment
technical_properties
applications
packaging
```

→ 可以进入 WordPress。

没有：

```markdown
hero_layout
card_variant
section_order
route_ready
template_version
```

→ 不进入 WordPress。

因此：

> **ACF = Business Content**
> 
> **React = Presentation**
> 
> **Next.js = Routing + Behavior**

* * *

## 2\. 优先使用 WordPress 原生字段

不要 ACF 重新造 WordPress 已经有的东西。

## Product

直接使用 WordPress：

```markdown
post_title
post_name / slug
post_status
excerpt
content
featured_image
```

对应：

| WordPress | 用途  |
| --- | --- |
| Title | `M-350` |
| Slug | `m-350` |
| Status | Draft / Publish |
| Excerpt | Product short summary |
| Content | 较长产品说明 |
| Featured Image | 主产品图片 |

因此禁止再建：

```markdown
product_title
product_slug
product_status
product_summary_duplicate
hero_image_duplicate
```

同一个事实只能有一个 owner。

* * *

## 3\. Product CPT：第一版字段

14 个 Grade 都使用同一个：

```markdown
Product CPT
```

例如：

```markdown
M-350
M-510
M-896
...
CR-901
```

## ACF 只增加这些业务字段

### A. Product identity / technical facts

```markdown
process
product_family
surface_treatment
```

其中：

```markdown
process
```

优先使用：

> Product Process Taxonomy

例如：

```markdown
Chloride
Sulfate
Vapor-phase oxidation
```

`product_family` 同样使用 Taxonomy：

```markdown
Coatings Grades
Plastics & Masterbatch Grades
Inks & Multi-Application Grades
Specialty Grade
```

因此它们不是普通 text field。

* * *

## 4\. Product → Application relationship

Product 保存：

```markdown
applications[]
```

例如：

```markdown
M-350
    ↓
Coatings
Printing Inks
Plastics
...
```

这个关系只有 **Product** 是 owner。

Application 不再保存：

```markdown
related_products[]
```

否则就产生：

```markdown
Product → Application
+
Application → Product
```

两个 Source of Truth。

正确方式：

```markdown
Application: Coatings
        ↓
Next.js 查询
        ↓
所有 applications 包含 Coatings 的 Product
```

因此继续执行我们之前确定的：

> **一种关系只有一个主人。**

* * *

## 5\. Technical Properties

第一阶段保持极简。

ACF Repeater：

```markdown
technical_properties
```

每行最多：

```markdown
label
value
unit
note (optional)
```

例如：

```markdown
TiO₂ content | ≥ 94 | %
pH           | 6.5–8.5 | -
Oil absorption | 18 | g/100g
```

注意故意不用：

```markdown
property_id
value_type
numeric_type
min
max
nominal
test_method_id
confidence
source_revision
approval_status
```

除非以后出现一个真正需要这些结构的业务系统。

第一阶段：

> 对买家正确展示参数即可。

不是建设化工数据平台。

* * *

## 6\. Packaging

第一版：

```markdown
packaging
```

使用：

> textarea / rich text

例如：

```markdown
25 kg paper bags.
Alternative packaging may be discussed for qualified orders.
```

不要马上设计：

```markdown
package_type
bag_material
weight_value
weight_unit
pallet_configuration
container_quantity
minimum_order_quantity
```

如果以后 CRM / ERP 真需要结构化包装数据，再升级。

* * *

## 7\. Product Documents

这里尤其要避免旧系统再次出现。

第一阶段只管理：

> **真正公开的文件。**

ACF：

```markdown
documents[]
```

每项：

```markdown
label
file
```

例如：

```markdown
Technical Data Sheet
M350-TDS.pdf
```

如果某个文件：

```markdown
需要申请
不是公开下载
尚未上传
```

就：

> 不把它作为 Product document record 保存。

用户依然可以通过：

```markdown
Request Documents
```

提交需求。

禁止出现：

```markdown
document_status
document_ready
document_approved
document_release_state
document_availability_contract
```

因为这些又会开始复制旧系统。

* * *

## 8\. Product FAQ

ACF Repeater：

```markdown
faq
```

只有：

```markdown
question
answer
```

结束。

不要：

```markdown
faq_id
faq_category
faq_priority
schema_enabled
schema_version
display_variant
reuse_scope
```

JSON-LD 是否生成：

> Next.js 决定。

WordPress只知道：

> 这里有一个问题和答案。

* * *

## 9\. Product SEO

第一版只需要：

```markdown
seo_title
seo_description
```

例如：

```markdown
M-350 Titanium Dioxide | TiO2 Malaysia
```

Next.js 再生成：

```markdown
<title>
meta description
canonical
OpenGraph
Twitter
JSON-LD
```

WordPress禁止保存：

```markdown
canonical_url
schema_type
schema_version
json_ld
robots_runtime
route_url
```

URL 已经由：

```markdown
/products/[slug]/
```

决定。

因此 canonical：

```markdown
baseUrl + /products/ + slug
```

Next.js 自己就能知道。

* * *

## 10\. 第一版 Product CPT 最终模型

所以一个 M-350 实际上非常简单：

```markdown
Product: M-350

WordPress native
├── title
├── slug
├── excerpt
├── content
├── featured image
└── publish status

Business relationships
├── applications[]
├── process
└── product_family

ACF
├── surface_treatment
├── technical_properties[]
├── packaging
├── documents[]
├── faq[]
├── seo_title
└── seo_description
```

大致就这些。

不是：

```markdown
50–100 fields
```

* * *

## 11\. Products Hub 不再是 CPT

`/products/` 对应一个普通：

```markdown
WordPress Page
```

名字：

```markdown
Products
```

它不保存产品目录。

它只保存这个页面自己的 editorial content。

建议字段：

```markdown
hero_eyebrow
hero_title
hero_intro

selector_heading
selector_intro

process_heading
process_intro

directory_heading
directory_intro

evaluation_heading
evaluation_intro
evaluation_items[]

buyer_questions[]

final_cta_heading
final_cta_body

seo_title
seo_description
```

* * *

## 12\. Products Hub 明确禁止保存的数据

这一部分很重要。

Products Page **绝对不要保存** ：

```markdown
product_count
product_ids
grade_directory
application_grade_mapping
process_grade_mapping
family_grade_mapping
product_urls

routeRegistry
routeReadiness
routeLive

pageId
reviewId
schemaVersion
relationshipVersion
contentRevision

LIVE_APPROVED
releaseState
```

为什么？

因为：

```markdown
14 Products
```

已经存在于：

```markdown
Product CPT
```

关系已经存在：

```markdown
Product → Application
Product → Process
Product → Family
```

Next.js 直接计算。

* * *

## 13\. Products Hub 的三个核心模块全部“派生”

### Application Selector

WordPress：

```markdown
M-350 → Coatings
M-510 → Coatings
M-200 → Plastics
...
```

Next：

```markdown
选择 Coatings
        ↓
filter products
        ↓
返回相关 grades
```

Products Page 不保存：

```markdown
Coatings = M350,M510,M896...
```

* * *

### Browse by Process

Product：

```markdown
M-350 → Chloride
M-996 → Sulfate
CR-901 → Vapor-phase oxidation
```

Next：

```markdown
groupBy(process)
```

结束。

Products Page 不保存 Process Matrix。

* * *

### Product Directory

Product：

```markdown
M-350
family = Coatings Grades
```

Next：

```markdown
groupBy(productFamily)
```

得到：

```markdown
Coatings Grades
Plastics & Masterbatch Grades
...
```

所以：

> **事实存在于 Product，目录只是事实的一个 View。**

这是非常重要的边界。

* * *

## 14\. Application CPT

Application 是真正的业务实体，因为：

```markdown
/applications/coatings/
/applications/plastics/
```

未来都有：

```markdown
SEO
独立内容
独立URL
独立采购任务
```

因此继续使用：

```markdown
Application CPT
```

* * *

## 15\. Application 使用 WordPress 原生字段

继续优先：

```markdown
title
slug
excerpt
content
featured_image
publish status
```

例如：

```markdown
Title:
Titanium Dioxide for Coatings

Slug:
coatings
```

Next route：

```markdown
/applications/coatings/
```

* * *

## 16\. Application ACF

第一版建议：

```markdown
technical_challenges[]
evaluation_criteria[]
recommended_properties[]
faq[]

seo_title
seo_description
```

其中前三个尽量简单：

```markdown
title
body
```

例如：

### technical_challenges

```markdown
Weather resistance
Maintaining appearance under exterior exposure.
```

### evaluation_criteria

```markdown
Dispersion
Evaluate compatibility with the target formulation and process.
```

### recommended_properties

```markdown
Opacity
Consider pigment properties appropriate to the formulation target.
```

这已经足够。

不要立刻设计复杂知识图谱。

* * *

## 17\. Application 不保存 Products

再次强调：

Application：

```markdown
Coatings
```

禁止字段：

```markdown
related_products[]
recommended_product_ids[]
product_matrix[]
```

因为关系 owner 是 Product。

应用页：

```markdown
getApplication("coatings")
+
getProductsByApplication("coatings")
```

得到相关 Product。

这样：

```markdown
M-350
```

如果从 Coatings 改成别的 Application，只修改：

> M-350 一处。

所有：

```markdown
Products Selector
Coatings Page
Product Detail
```

都会自动反映。

* * *

## 18\. CTA 也要严格控制

WordPress可以保存：

```markdown
final_cta_heading
final_cta_body
```

因为属于文案。

但稳定内部链接：

```markdown
/request-a-quote/
```

第一阶段不要每个页面都保存：

```markdown
cta_href
```

Next.js：

```markdown
Request a Quote
→ /request-a-quote/
```

自己知道。

否则以后又会变成：

```markdown
CTA Registry
Route Registry
Route Resolver
```

* * *

## 19\. ACF 中禁止的四大类字段

以后看到这些字段，要特别警惕。

### ① Presentation

```markdown
layout
variant
columns
background
theme
position
section_order
component_type
```

禁止。

### ② Runtime

```markdown
route_live
ready
available
runtime_state
resolver
cache_tag
revalidate_path
```

禁止。

### ③ Governance

```markdown
review_id
gate
approved_by
finding_id
evidence_status
content_revision
relationship_version
```

禁止。

### ④ Derived Data

```markdown
product_count
related_product_count
product_urls
application_product_map
process_product_map
```

禁止。

这些数据要么属于策划，要么属于 Next.js，要么可以从真实业务数据计算。

* * *

## 20\. 一个非常实用的 AI 检查规则

以后 AI 想新增 ACF 字段时，必须先判断：

```markdown
这个字段属于：

A. 原始业务事实？
B. 编辑文案？
C. 业务关系？
D. 页面展示配置？
E. 项目治理？
F. 可以计算出来的数据？
```

只有：

```markdown
A
B
C
```

默认允许。

而：

```markdown
D → React
E → Planning / QA
F → Next.js计算
```

* * *

## 最终 WordPress 内容模型

Phase 1 可以浓缩为：

```markdown
WordPress
│
├── Page
│   ├── Home
│   ├── Products
│   └── ...
│
├── Product
│   ├── M-350
│   ├── M-510
│   └── ...
│
├── Application
│   ├── Coatings
│   ├── Plastics
│   └── ...
│
├── Post
│
├── Media
│
└── Taxonomies
    ├── Product Process
    └── Product Family
```

数据关系：

```markdown
Product
├── Application
├── Process
└── Family
```

然后：

```markdown
WordPress
        ↓
WPGraphQL
        ↓
Next.js
        ↓
页面 / selector / directory / SEO / JSON-LD
```

没有第二套 CMS 平台。

这一版里我特别建议保留两个决定：

**第一，优先用 WordPress 原生 `title / slug / excerpt / content / featured image` ，不要什么都做成 ACF。**

**第二，Products Hub 绝不保存 14 个产品目录和各种 mapping；它们全部从 Product 关系派生。**

如果这部分你认可，下一步就进入一个同样关键、但更偏工程层的边界： **WordPress 插件到底允许做什么。** 我们会决定新项目是否还需要自定义插件、CPT/ACF 注册放哪里，以及怎样防止新的 `tio2-site-model` 再长出来。

这里我看三种方案。推荐 **B：一个极小的 Content Model 插件** 。它比“完全不用自定义插件”更可复现，又比旧项目那种业务平台插件简单得多。

| 方案  | 做法  | 优点  | 风险  |
| --- | --- | --- | --- |
| A   | CPT、Taxonomy、ACF 全用后台 UI | 最简单 | 配置主要留在数据库，Git 难以审查和恢复 |
| **B 推荐** | 一个极小 `tio2-content-model` 插件，只定义内容模型 | 可版本化、可审查、边界清楚 | 必须严格禁止它继续长业务逻辑 |
| C   | 自定义插件统一管理 CMS、GraphQL、发布、缓存等 | 灵活  | **就是旧 `tio2-site-model` 的重生** |

WordPress Plugin Boundary V0.1

## WordPress Plugin Boundary V0.1

## 1\. 核心决定

新项目允许存在一个自定义 WordPress 插件：

```markdown
tio2-content-model
```

但它的定位只有一句话：

> **定义 WordPress 里的业务内容模型，不运行网站。**

它不是：

```markdown
Headless CMS Platform
Site Runtime
Publication Engine
Route Manager
Release Manager
GraphQL Application Layer
```

它只是一个：

```markdown
Content Schema Plugin
```

* * *

## 2\. 为什么我不建议完全依赖后台 UI

完全通过：

```markdown
WordPress Admin
+
ACF UI
```

确实最简单。

但问题是 Content Model 会主要存在数据库里。

例如有人修改：

```markdown
Product applications field
```

Git 里不一定容易看出来：

```markdown
谁改了
什么时候改了
改了什么
```

以后服务器重装、测试环境恢复、新开发环境初始化，也比较麻烦。

所以我们保留一个非常小的代码边界，用来保证：

> **内容模型可以被版本控制。**

但绝不把业务运行逻辑带回来。

* * *

## 3\. 插件允许负责的事情

`tio2-content-model` 第一阶段最多负责：

```markdown
CPT registration
Taxonomy registration
ACF field-group registration / Local JSON integration
WPGraphQL exposure configuration
```

例如：

```markdown
Product CPT
Application CPT

Product Process taxonomy
Product Family taxonomy
```

以及对应 ACF 字段。

就这些。

* * *

## 4\. 推荐目录

这个插件甚至应该保持得非常小：

```markdown
tio2-content-model/
├── tio2-content-model.php
├── post-types.php
├── taxonomies.php
└── acf/
    └── ...
```

如果实际上三四个文件已经足够，就不要继续拆。

明确不创建：

```markdown
includes/
services/
runtime/
domain/
repositories/
resolvers/
contracts/
managers/
providers/
registries/
```

除非以后有真实需求。

* * *

## 5\. CPT registration 可以放这里

例如：

```markdown
Product
Application
```

这是合理的。

因为这是：

> “WordPress 存在什么业务实体？”

属于 CMS Content Model。

但插件不应该知道：

```markdown
/products/m-350/
```

这个前端 URL。

它只知道：

```markdown
Product
slug = m-350
```

Next.js 决定：

```markdown
/products/m-350/
```

* * *

## 6\. Taxonomy registration 可以放这里

例如：

```markdown
Product Process
Product Family
```

插件只定义：

```markdown
这个 taxonomy 存在
它可以关联 Product
它是否公开出现在 GraphQL
```

不定义：

```markdown
某个 taxonomy 对应哪个 Next.js template
某个 taxonomy 自动产生哪个 URL
某个 taxonomy 是否 route-ready
```

* * *

## 7\. ACF field definition 可以放这里

我们刚才定的：

```markdown
surface_treatment
applications
technical_properties
packaging
documents
faq
seo_title
seo_description
```

可以通过 ACF Local JSON 或 PHP registration 版本化。

这里我更推荐：

```markdown
ACF UI
+
Local JSON committed to Git
```

原因是：

编辑人员修改 Field Group 比较方便；

同时 Git 又可以看到 schema 变化。

所以不是必须把几十个 ACF 字段全部手写成 PHP 数组。

* * *

## 8\. WPGraphQL 尽量使用现成插件能力

标准组合优先：

```markdown
WordPress
+
ACF Pro
+
WPGraphQL
+
WPGraphQL for ACF
```

只要它们能够暴露：

```markdown
Products
Applications
Relationships
Taxonomies
ACF fields
```

就不要自己注册 Custom GraphQL API。

尤其不要重新出现：

```markdown
malaysiaProductHubRecordJson
```

这种：

```markdown
GraphQL field
→ 返回巨大 JSON string
```

结构化 CMS 数据应该直接暴露成：

```markdown
GraphQL typed fields
```

* * *

## 9\. 自定义 GraphQL Resolver 默认禁止

第一阶段：

```markdown
register_graphql_field()
```

默认视为异常操作。

只有当：

> WPGraphQL + ACF 真的无法表达一个已经存在的业务需求

才讨论增加。

而且首先问：

> 这个数据是不是 Next.js 自己可以计算？

例如：

```markdown
Product count
```

不要 WordPress Resolver：

```markdown
productCount
```

Next：

```markdown
products.length
```

就够了。

* * *

## 10\. 插件绝对禁止负责 Routing

不允许出现：

```markdown
public-routes.json
public_path
route_key
route registry
canonical route map
route readiness
target ready
approved route
```

这些全部不属于 WordPress Plugin。

Next.js 是 URL owner。

* * *

## 11\. 插件绝对禁止负责 Publication Governance

删除旧思想：

```markdown
发布 Product
↓
检查 route
↓
检查 Page ID
↓
检查 canonical
↓
检查 release state
↓
条件不满足则重新设为 draft
```

新系统：

```markdown
WordPress Publish
=
这个内容允许公开
```

如果必要字段真的是业务必填：

```markdown
ACF required
```

即可。

不要建立：

```markdown
PublicationGuard
ReleaseStateMachine
ApprovalEngine
```

* * *

## 12\. 插件绝对禁止负责 Preview Runtime

不要再出现 PHP 手写：

```markdown
GraphQL-like JSON serializer
```

Preview 以后如果需要：

```markdown
Next.js Draft Mode
+
authenticated WPGraphQL
```

插件最多做必要的认证配合。

不能创建第二套内容数据模型。

* * *

## 13\. 插件绝对禁止负责 Cache

不要：

```markdown
save_post
updated_post_meta
set_object_terms
updated_option
```

然后计算：

```markdown
affected pages
affected entities
affected sites
cache tags
dependency graph
```

Phase 1：

```markdown
Next.js revalidate
```

足够。

以后真有即时更新需求，再单独设计一个简单 webhook。

它也不属于 Content Model plugin 的核心职责。

* * *

## 14\. 插件绝对禁止负责 SEO Output

插件不生成：

```markdown
canonical
OpenGraph
Twitter metadata
JSON-LD
robots
sitemap
```

WordPress可以存：

```markdown
seo_title
seo_description
```

输出由 Next.js 完成。

* * *

## 15\. 插件绝对禁止保存策划治理数据

不能重新出现：

```markdown
page_id
review_id
gate
finding_id
schema_version
relationship_version
content_revision
release_state
route_state
evidence_status
approved_contract_hash
```

这些属于：

```markdown
tio2mydesign
Git
QA
Release process
```

不是 CMS Content Model。

* * *

## 16\. 插件绝对禁止拥有 Seed Framework

旧项目大量：

```markdown
seed product
seed editorial
seed homepage
seed representatives
seed Malaysia data
```

最后会形成：

```markdown
JSON
→ PHP seed
→ DB
→ GraphQL
```

多重 Source of Truth。

新项目 Phase 1 不做通用 Seed Framework。

初始 14 个 Product 数据迁移，可以一次性：

```markdown
migration/import script
```

完成。

迁移完成以后：

> WordPress DB 就是业务内容 Source of Truth。

迁移脚本不是运行时系统。

* * *

## 17\. Migration 和 Plugin 必须分开

非常重要。

一次性：

```markdown
从旧系统导入14个Product
```

这是：

```markdown
Migration
```

不是：

```markdown
Content Model Plugin runtime feature
```

所以不要因为一次导入需求，在插件里面永久保留：

```markdown
seed engine
migration registry
data version manager
restore system
```

需要迁移时写一次迁移工具。

完成以后结束。

* * *

## 18\. 插件不拥有跨实体“计算结果”

例如：

```markdown
Coatings 有多少 Product
Chloride 有哪些 Grades
Products Hub 有14个Product
```

都不要提前计算并保存。

因为：

```markdown
Product relationships
```

已经是真实数据。

Next.js 可以查询以后计算。

原则：

> **Store facts, derive views.**

* * *

## 19\. 插件大小本身可以成为治理信号

我建议新项目甚至设一个软规则：

> `tio2-content-model` 如果开始超过大约几千行，就必须重新审查职责。

不是说超过某个精确数字就一定错误。

而是：

如果一个“只定义内容模型”的插件出现：

```markdown
20 个 PHP modules
30 个 hooks
10 个 REST endpoints
自定义 GraphQL resolver
queue
webhook
route system
```

那边界一定已经开始失守。

* * *

## 20\. Hook 使用规则

第一阶段正常允许：

```markdown
init
acf/init
```

主要用于：

```markdown
register_post_type
register_taxonomy
register fields
```

如果开始新增：

```markdown
save_post
wp_after_insert_post
updated_post_meta
transition_post_status
shutdown
rest_pre_dispatch
graphql_*
```

必须解释：

> 为什么 Content Model Plugin 需要响应这个生命周期事件？

默认答案应该是：

> 不需要。

* * *

## 21\. 一个非常重要的禁止规则

以后任何 AI 如果提出：

> “为了保持 WordPress 和 Next.js 一致，我们应该在保存内容的时候验证前端合同。”

直接默认拒绝。

WordPress 和 Next.js 的一致性应该来自：

```markdown
ACF schema
+
WPGraphQL
+
generated GraphQL types
+
tests
```

不是：

```markdown
WordPress重新实现一份Next.js contract validator
```

* * *

## 22\. WordPress 的最终职责图

```markdown
WordPress Core
│
├── Users
├── Media
├── Draft / Publish
├── Revision
└── Native content behavior

ACF Pro
│
└── Business fields

WPGraphQL
│
└── Typed content API

WPGraphQL for ACF
│
└── ACF exposure

tio2-content-model
│
├── Product CPT
├── Application CPT
├── Product Process taxonomy
├── Product Family taxonomy
└── Content field schema
```

到这里停止。

* * *

## 23\. 不允许变成这样

```markdown
tio2-content-model
│
├── Content Model
├── Routes
├── Publishing
├── Preview
├── Webhooks
├── Cache
├── Seed
├── SEO
├── Runtime
├── GraphQL JSON contracts
├── Release state
├── Site scope engine
└── Validation framework
```

因为这就是：

> `tio2-site-model` 2.0。

* * *

## 24\. 最终插件原则

一句话：

> **The WordPress plugin defines content structure, not website behavior.**

中文：

> **WordPress 插件只定义内容结构，不定义网站行为。**

再加一条：

> **If a requirement can be implemented in Next.js without changing the CMS content model, it does not belong in the WordPress plugin.**

中文：

> **如果一个需求可以只在 Next.js 中完成，而不改变 CMS 的业务内容模型，就不应该修改 WordPress 插件。**

* * *

## 25\. Phase 1 插件允许 / 禁止清单

| 能力  | Phase 1 |
| --- | --- |
| CPT | ✅   |
| Taxonomy | ✅   |
| ACF fields | ✅   |
| ACF Local JSON | ✅   |
| WPGraphQL standard exposure | ✅   |
| Custom GraphQL JSON endpoint | ❌   |
| Route Registry | ❌   |
| Public Path | ❌   |
| Publication Guard | ❌   |
| Release State | ❌   |
| Route Readiness | ❌   |
| Preview Serializer | ❌   |
| Cache Dependency Graph | ❌   |
| Webhook Queue | ❌   |
| Seed Framework | ❌   |
| SEO Renderer | ❌   |
| Runtime Schema Version | ❌   |
| Contract Hash Validation | ❌   |
| Multi-site Scope Engine | ❌   |

## Boundary Rule

> `tio2-content-model` **may describe what content exists. It may not decide whether, where, or how that content appears on the public website.**

这一步还有一个重要结果： **我不建议完全放弃自定义插件** 。保留一个极小的 `tio2-content-model` 反而更安全，因为它让 Content Model 可以进入 Git；真正要禁止的是插件获得“网站运行权”。

下一步应该进入 **Next.js Repository Boundary V0.1** ：把 `app / components / lib/wordpress / graphql` 四层的依赖方向定死，尤其规定什么情况下允许 DTO、Zod、helper、shared component，防止复杂度从 WordPress 被删掉以后又在 Next.js 里重新长出来。