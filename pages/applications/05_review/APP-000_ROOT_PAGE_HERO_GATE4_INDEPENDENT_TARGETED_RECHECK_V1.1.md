# APP-000 Root Page Hero 定向 Gate 4 独立复审 V1.1

## 结论

**Review ID：** `APP-ROOT-HERO-G4-IR-02`

**审查对象：** `APP-ROOT-HERO-G4-CANDIDATE-02`

**审查状态：** `PROJECT_CONTROL_REVIEW_PASS`

**Required findings：** `0`
**独立性：** 复审者未参与 V1.0 或 V1.1 候选的制作、捕获与冻结。

V1.1 已关闭 V1.0 独立审查的两项 P0 和两项 P1，且在 1440、768、390 三断点重跑原共同检查未见回归。此结论仅证明 APP-000 当前的局部 Root Page Hero 定向 Gate 4 候选可通过项目控制复审；它不关闭七页整组、任何后续 Gate、APP 当前 Manifest 或 Gate 9，亦不授权开发、发布或变更 SEO/Schema。

## 审查范围

- V1.1 binding：`pages/applications/04_planning/APP-000_ROOT_PAGE_HERO_GATE4_BINDING_V1.1.md`
- V1.1 candidate：`pages/applications/04_planning/APP-000_ROOT_PAGE_HERO_GATE4_CANDIDATE_V1.1.md`
- 冻结源与证据：`pages/applications/04_planning/visual-designs/app-root-page-hero-v1.1/`
- 对照基线：V1.0 独立审查报告、共享 `RootPageHero`/open-white/Global Chrome 合同，以及 APP 批准的 Gate 2 文案与 M2 路由边界。

只读执行；未触碰 `D:\16Wordpress_nextjs`，未修改候选、冻结资产、Manifest 或共享进度，未提交 Git。

## V1.0 返工项关闭核对

| 原发现 | 结果 | 独立复核证据 |
|---|---|---|
| `APP-RH-G4-IR-01` P0：桌面 Global Chrome 缺少 Home | CLOSED | 桌面主导航精确为 `Home / Markets / Products / Applications / Documents / Resources / About`；Applications 是唯一激活项；无买家可见 `CURRENT`。 |
| `APP-RH-G4-IR-02` P0：无条件应用子路由/存在 Specialty route | CLOSED | M2 六个集合为非交互 DOM 锚点；`previewRouteLinks=0`、子应用路由数为 `0`，没有 `/applications/specialty-materials/`。 |
| `APP-RH-G4-IR-03` P1：Hero 卡锚点不精确 | CLOSED | 六项依次精确为 `#application-coatings`、`#application-plastics`、`#application-masterbatch`、`#application-printing-inks`、`#application-paper`、`#application-specialty-materials`，且每一个解析到同名 M2 id。 |
| `APP-RH-G4-IR-04` P1：H1 weight 非 700 | CLOSED | 1440/768/390 computed H1 weight 均为 `700`；尺寸依次 56/44/36px，均两行。 |

## 原共同检查与视觉复看

独立验证器在三断点全部 PASS：

- 候选 HTML 和三张冻结 PNG SHA-256 均匹配冻结记录；作者只读 verify 亦为 PASS。
- 批准 H1、引言、`Explore Applications → #application-selector`、`Request a Quote → /request-a-quote/`、六项信息卡顺序，以及 `Choose by Application` 首模块/资格说明均精确匹配。
- Header 高度为 84/64/64px；可见交互目标最小 44px；无横向 overflow。
- `CURRENT=0`；Hero 为 open-white：无整体边框、圆角、背景、阴影或 `::before` 装饰，未见左侧绿色竖线或巨大外框。

1440、768、390 三张 PNG 均以 `original` detail 复看。桌面图现可见完整 Home 起始导航与 Applications 激活下划线；平板与移动端保留 Logo/RFQ/Menu、正确 CTA 堆叠与 Hero 后 M2 过渡。三图未见裁切、隐藏动作或上述视觉回归。

## 可复现测试证据

作者只读验证：

```powershell
node D:\23MySec\pages\applications\04_planning\visual-designs\app-root-page-hero-v1.1\verify-app-root-page-hero-v1.1.cjs
```

结果：`PASS`。

独立验证：

```powershell
node D:\23MySec\pages\applications\05_review\APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_RECHECK_VALIDATOR_V1.1.cjs
```

结果：`PROJECT_CONTROL_REVIEW_PASS`，退出码 `0`；机器可读明细：

`pages/applications/05_review/APP-000_ROOT_PAGE_HERO_GATE4_INDEPENDENT_RECHECK_EVIDENCE_V1.1.json`

## 哈希与状态边界

| 项目 | SHA-256 |
|---|---|
| Binding V1.1 | `2459EF9083BBE0591DDDB18E122F22871B9EE7A2BFA16F65A7130914996C0A3C` |
| Candidate V1.1 | `B093AE80D384A228013E0D0117605CEA5A8C878BCB3A10D8A5372AB2F1D0B6B2` |
| V1.1 HTML | `E918EE91286E4697986F56F0C397922A55523AC2D946802425695BD1E3864D9D` |
| V1.1 freeze record | `E66D18F4BFD7C260BD61AD9B4A595ABF5D9F6D816D45ADAAED46D3599C438469` |
| 1440 PNG | `8A5B06EDA91F0B11D2C4DF739F5B7A2832CE92AC187F2A9B72C3B62D54528878` |
| 768 PNG | `AF8C3D555A8BE32435823D65F150A6A494D9828ED741B16DA32551DE05C5955C` |
| 390 PNG | `A0846012BF069762D8E635655DD02A3197FB0EA6EA86275A74FCDAB203B4FFD8` |
| 独立验证器 | `4FD9104FA82472A55AD3E88E82238ADDD7F48162014EF9CFBE34DB6B707584EA` |
| 独立证据 JSON | `0D64F33C70FFD86AFDA914B3394E24CB9DEA2FAD83FF3BC34973C50B6E19E7B1` |

本复审不会自行更新任何页面状态。项目控制可在本局部 PASS 及现有授权范围内决定下一步；七页整组仍按其独立控制/进度记录管理。
