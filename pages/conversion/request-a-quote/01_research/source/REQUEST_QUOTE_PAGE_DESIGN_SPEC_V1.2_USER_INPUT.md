# Request Quote 页面设计规范 V1.1

**Project:** 01Mylasiya的对应  
**Website Positioning:** Malaysia-origin Titanium Dioxide  
**Operating Entity:** IKHLAS TITANIUM (MALAYSIA) SDN. BHD.  
**Priority Markets:** European Union, United Kingdom, India, Brazil  
**Page Type:** Commercial Conversion / RFQ  
**Version:** V1.2  
**Status:** Visual + Conversion Design Baseline  

---

## 1. 页面定位

Request Quote 是网站的核心商业转化页面之一。

它不是普通的 Contact Us 页面，也不是一个孤立的表单页。

它承接来自以下页面的高意向访客：

- Product 页面
- Application 页面
- Header / Footer CTA
- Resources / Document Hub
- Search / Direct Entry

核心转化路径：

> Product / Application Interest → Request Quote → Qualified RFQ → Sales Follow-up

Request Quote 在网站整体转化体系中的位置：

- **Request Sample** → 产品测试 / Evaluation
- **Request Documents** → 技术与合规评估 / Qualification
- **Request Quote** → 商业询价 / Commercial Intent

---

## 2. 最重要的视觉原则：必须与首页和产品页统一

Request Quote 页面不得重新建立一套独立视觉风格。

页面必须完全继承当前网站已经确定的视觉系统。

### 2.1 必须继承的全站元素

包括但不限于：

- Header
- Logo 使用方式
- 主导航结构
- Header CTA 样式
- 页面最大内容宽度
- Grid / Column 规则
- H1 / H2 / H3 字号体系
- 正文排版
- 按钮样式
- 卡片圆角
- 边框颜色
- 背景颜色
- Section 间距
- Icon 风格
- Footer
- Mobile Header 逻辑

不得因为该页面是表单页，就切换成另一套 SaaS / Dashboard / CRM 风格。

---

## 3. 页面视觉气质

Request Quote 应继续保持首页与产品页已经建立的品牌感：

- Clean
- Industrial
- Technical
- International
- Professional
- Credible
- Malaysia-origin focused

页面应该看起来属于同一个网站，而不是嵌入了一个第三方询价系统。

---

## 4. 不采用独立“后台表单”式布局

上一版提出的：

> 左侧长说明 + 右侧独立大型 RFQ Form Card

不作为默认方案。

原因：

- 容易形成与首页、产品页不同的页面骨架
- 视觉上更像 SaaS / Dashboard
- 会削弱网站整体品牌一致性
- 表单自身成为孤立组件，而不是网站内容体系的一部分

新版采用：

> **标准网站 Page Hero + 标准 Content Container + RFQ Form Section**

即：

```text
Global Header
↓
Page Hero
↓
Selected Product / Application Context（如有）
↓
RFQ Form
↓
Alternative CTA
↓
Global Footer
```

---

## 5. 页面整体结构

### Section 1 — Standard Page Hero

Hero 必须使用与首页、产品页一致的：

- 页面宽度
- 左右留白
- 标题结构
- 字号体系
- 背景处理
- CTA / 标签视觉语言

推荐：

**Eyebrow**

REQUEST A QUOTE

**H1**

Request a Quote for Malaysia-Origin Titanium Dioxide

**Description**

Tell us the product, application, quantity and destination you are evaluating. Our team will review your requirements and prepare the appropriate commercial response.

Hero 不应该做成大面积表单。

Hero 的职责是：

1. 明确页面任务
2. 强化 Malaysia-origin 定位
3. 告诉访客需要提供哪些基本信息

---

## 6. Product / Application Context

如果访客从 Product 页面或 Application 页面进入 Request Quote，页面应保留并自动带入上下文，但**不再单独显示 Selected Product / Selected Application 区块**。

例如：

> M-2377 → Request Quote

进入页面后：

- Product / Grade 自动预选为 M-2377
- 用户仍然可以通过下拉框修改产品

例如：

> Plastics → Request Quote

进入页面后：

- Application 自动预选为 Plastics
- 用户仍然可以修改 Application

这样可以减少重复信息，并让页面更紧凑。

---

## 7. RFQ Form 结构

表单放入标准网站 Content Container 中。

### 7.1 Your Requirement

#### Product / Grade *
Dropdown

- 支持全部 active product grades
- 从产品页进入时自动预选
- 用户可以修改

#### Application *
Dropdown

推荐：

- Paints & Coatings
- Plastics
- Masterbatch
- PVC
- Printing Ink
- Paper
- Other

#### Required Quantity *
Input + Unit

推荐单位：

- MT
- KG

#### Destination Country *
Country Dropdown

不使用：

- EU
- UK
- India
- Brazil

这种 Market Selector。

应直接选择实际目的国家。

#### Destination Port / City
Optional text input

---

## 8. Company Details

字段：

- Company Name *
- Your Name *
- Business Email *
- Phone / WhatsApp
- Website（Optional）

第一阶段询价不要要求：

- Company Turnover
- Tax Number
- Full Registered Address
- Existing Supplier
- Target Price
- Annual Consumption
- Payment Terms
- Incoterm

除非未来销售流程证明这些字段必须在首次 RFQ 时收集。

---

## 9. Additional Requirements

保留一个 Optional Textarea。

Label：

> Additional Requirements

Helper Copy：

> Tell us about your application, specifications, packaging requirements, purchasing schedule or other commercial requirements.

目标：

允许专业采购或技术用户补充信息，但不增加普通用户的填写压力。

---

## 10. Primary CTA

按钮：

> **REQUEST QUOTE**

必须继续使用全站 Primary CTA 样式。

不要为该页面单独发明新的按钮颜色、渐变、圆角或阴影。

禁止使用：

- Submit
- Send
- Contact Us
- Learn More

---

## 11. 表单布局原则

桌面端可以使用两列字段布局，但不是“页面左右两栏”。

推荐：

```text
-----------------------------------------
YOUR REQUIREMENT
-----------------------------------------

Product / Grade        Application

Required Quantity      Destination Country

Destination Port / City

-----------------------------------------
COMPANY DETAILS
-----------------------------------------

Company Name           Your Name

Business Email         Phone / WhatsApp

Website

-----------------------------------------
ADDITIONAL REQUIREMENTS
-----------------------------------------

[ Full-width textarea ]

[ REQUEST QUOTE ]
```

即：

> **页面本身保持标准单一内容流，表单内部使用两列 Grid。**

这可以同时做到：

- 保持与首页/产品页一致的 Page Layout
- 控制表单高度
- 提高桌面端效率
- 避免形成 Dashboard 感

---

## 12. Form Container

RFQ Form 可以使用一个轻量容器，但必须继承全站视觉系统。

推荐：

- 与产品页 Card 相同或接近的 Border
- 相同圆角
- 相同背景体系
- 相同 Shadow 原则
- 相同 Section Padding

不要使用：

- 巨大的悬浮白色面板
- 重阴影
- SaaS Dashboard 风格
- 独立蓝色背景表单
- 不属于现有网站的 UI Kit

---

## 13. 页面宽度

Request Quote 页面必须直接沿用：

> 首页 / 产品页已经使用的 Global Container Width

不要单独建立 1200 / 1280 / 1440 的新规则。

设计稿与前端都应调用现有 Container Token。

---

## 14. Trust Content

不建议单独增加大块：

- Why Choose Us
- Testimonials
- Company Story
- Factory Story

Request Quote 是一个高意图页面。

可以保留极少量信任信息，但必须使用网站已有的视觉组件。

推荐最多三条：

- Malaysia Origin
- Industrial Supply
- Application Support

如果首页已经建立了类似 Trust / Proof 组件，应直接复用。

---

## 15. Alternative Conversion

表单提交区域之后：

### Not ready for a commercial quote?

提供两个次级入口：

#### Request a Sample
适合仍处在产品测试阶段的访客。

#### Request Documents
适合正在进行技术或合规评估的访客。

这两个 CTA 必须：

- 使用 Secondary / Text CTA
- 视觉权重低于 Request Quote
- 沿用网站现有 CTA 样式

---

## 16. Desktop 页面推荐骨架

```text
┌──────────────────────────────────────────────┐
│ GLOBAL HEADER                                │
│ 与首页 / 产品页完全一致                      │
└──────────────────────────────────────────────┘


┌──────────────────────────────────────────────┐
│ STANDARD PAGE HERO                           │
│                                              │
│ REQUEST A QUOTE                              │
│                                              │
│ Request a Quote for Malaysia-Origin          │
│ Titanium Dioxide                             │
│                                              │
│ Short commercial introduction               │
│                                              │
└──────────────────────────────────────────────┘


┌──────────────────────────────────────────────┐
│ YOUR REQUIREMENT                             │
│                                              │
│ Product / Grade       Application            │
│ [ M-2377      ▼ ]      [ Plastics      ▼ ]   │
│                                              │
│ Required Quantity     Destination Country    │
│ [ 20 ] [ MT ▼ ]       [ Germany       ▼ ]   │
│                                              │
│ Destination Port / City                      │
│ [ Hamburg                                  ] │
│                                              │
│ ------------------------------------------   │
│                                              │
│ COMPANY DETAILS                              │
│                                              │
│ Company Name          Your Name              │
│ [____________]        [____________]         │
│                                              │
│ Business Email        Phone / WhatsApp       │
│ [____________]        [____________]         │
│                                              │
│ Website (Optional)                           │
│ [________________________________________]   │
│                                              │
│ ------------------------------------------   │
│                                              │
│ ADDITIONAL REQUIREMENTS                      │
│                                              │
│ [________________________________________]   │
│ [________________________________________]   │
│                                              │
│ [              REQUEST QUOTE             ]   │
│                                              │
└──────────────────────────────────────────────┘


┌──────────────────────────────────────────────┐
│ NOT READY FOR A COMMERCIAL QUOTE?            │
│                                              │
│ Request a Sample →     Request Documents →   │
└──────────────────────────────────────────────┘


┌──────────────────────────────────────────────┐
│ GLOBAL FOOTER                                │
│ 与首页 / 产品页完全一致                      │
└──────────────────────────────────────────────┘
```

---

## 17. Hero 与表单之间的关系

Request Quote 不需要像普通营销 Landing Page 那样加入很多中间 Section。

推荐顺序：

1. Header
2. Page Hero
3. RFQ Form
4. Alternative Conversion
5. Footer

从 Hero 到 Form 的距离应该较短。

用户进入该页面的主要目的就是询价。

---

## 18. 与产品页的联动

产品页 CTA：

> Request Quote

点击后：

```text
/request-quote?product=M-2377
```

页面读取 Product 参数并自动预填。

同时显示：

> Selected Product: M-2377

用户可以 Change Product。

不要让用户再次从 14 个产品中寻找刚刚点击的产品。

---

## 19. 与 Application 页的联动

例如：

```text
/applications/plastics
```

点击 Request Quote：

```text
/request-quote?application=plastics
```

页面自动：

> Application = Plastics

如果未来已经建立：

> Application → Recommended Grade

则 Product Dropdown 可以优先展示推荐型号。

---

## 20. Direct Entry

如果用户直接访问：

```text
/request-quote
```

不显示 Selected Context。

用户正常填写：

- Product
- Application
- Quantity
- Destination
- Company Details

---

## 21. Mobile 原则

虽然当前阶段先做 Desktop，但桌面设计不能阻碍后续 Mobile。

Mobile：

- 继续使用全站 Header
- 所有字段单列
- Selected Context 单列
- Primary CTA Full Width
- Section 顺序保持不变

Header Mobile Menu 继续由全站 Header 系统统一解决，不在本页面单独设计。

---

## 22. 不应该出现的设计

以下情况应直接判定为不符合本项目视觉标准：

### 页面骨架问题

- 左侧固定营销栏 + 右侧后台表单
- Dashboard 式 RFQ 页面
- 与首页/产品页不同的 Max Width
- 不同 Header
- 不同 Footer

### 视觉问题

- 新的按钮样式
- 新的圆角体系
- 新的 Icon 体系
- 新的阴影体系
- SaaS 风格表单组件
- 过度 Gradient
- 大量 Stock Factory Image

### 内容问题

- 大段公司介绍
- Why Choose Us 长模块
- Testimonials
- 长 FAQ
- 在表单前堆叠大量营销内容

### UX 问题

- 产品页进入后丢失型号
- Application 页面进入后丢失 Application
- 使用 Market 替代 Destination Country
- 表单字段过多
- CTA 使用 Submit

---

## 23. Desktop Visual Draft Acceptance Criteria

下一版桌面视觉稿必须满足：

### Global Consistency

- Header 与首页一致
- Footer 与首页一致
- Container Width 与首页/产品页一致
- Typography 与首页/产品页一致
- Button 与现有系统一致
- Card 与现有系统一致
- Section spacing 与现有系统一致

### Conversion

用户进入页面后 3–5 秒内应理解：

1. 这是 Request Quote 页面
2. 这是 Malaysia-origin Titanium Dioxide 的商业询价
3. 如果从 Product 页面进入，Product / Grade 已经自动带入
4. 只需要填写核心 RFQ 信息
5. 主操作是 REQUEST QUOTE

### Visual Hierarchy

视觉顺序必须是：

> Page Identity → RFQ → Submit

而不是：

> Marketing → Marketing → Marketing → Form

---

## 24. 页面最终定位

> **Request Quote is a standard website conversion page within the existing IKHLAS TITANIUM visual system—not a standalone form application.**

它的设计目标不是创造新的视觉语言，而是：

> **在现有首页与产品页设计体系中，以最低摩擦完成商业询价转化。**
