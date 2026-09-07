# DOC-000 Full Visual Design V0.7 — Mobile Targeted Repair

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Gate | Gate 5 |
| Review ID | `DOC-000-G5-MOBILE-REPAIR-01` |
| Returned parent review | `DOC-000-G5-FULL-VISUAL-01 = CONDITIONAL_RETURN / NOT_APPROVED` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Date | 2026-09-02 |
| Approved upstream | Gate 4 Manifest V0.1 SHA-256 `9F323287FDE5A1AA9B184FAF72965724D18D2BD0189525D928FF578B607CED00` |
| Gate 6/7 | `NOT_AUTHORIZED` |

V0.7 corrects only the project-control Mobile findings. V0.6 is preserved as the returned historical submission.

## 1. Current visual set

| Surface | Current asset | Dimensions | Disposition |
|---|---|---:|---|
| Desktop full Buyer Clean | V0.6 Desktop asset | 1440×3784 | Unchanged / hash preserved |
| Tablet full Buyer Clean | V0.6 Tablet asset | 768×5324 | Unchanged / hash preserved |
| Mobile full Buyer Clean | `gate5_v0.7/assets/DOC-000_G5_MOBILE_390_LOGICAL_2X_FULL_BUYER_CLEAN_V0.7.png` | 780×11708 (`390 logical @2x`) | Repaired |
| Mobile H1 / FAQ / Footer proof | `gate5_v0.7/assets/DOC-000_G5_MOBILE_H1_FAQ_FOOTER_REPAIR_PROOF_V0.7.png` | 780×1840 | New targeted proof |
| Selector / FAQ interaction board | V0.6 state asset | 1440×1260 | Unchanged |
| Mobile Menu open | V0.6 menu asset | 780×1360 | Unchanged |
| Global Chrome assembly | Approved Gate 4 proof | 1440×1680 | Inherited |

## 2. P0-01 Mobile H1 and page width

- H1 remains exactly `Documents for Product & Supplier Qualification`.
- It is rendered as two deliberate lines at 28px with 36px line height inside the 18–372px content area.
- Measured line widths are 309px and 315px.
- Measured right edges are 327px and 333px; both remain inside the 372px content boundary.
- A full-page scan measured all 109 visible text nodes; horizontal-bound violations: zero.
- The page is not globally scaled, clipped or hidden to obtain this result.

## 3. P1-01 Mobile FAQ

- All six approved questions remain present and collapsed by default.
- Each disclosure row reserves the fixed logical action slot `x=326..372`.
- Question copy begins at `x=36`; long labels wrap to two lines.
- Row heights are 66px for one-line questions and 84px for two-line questions.
- The three reported long questions have measured text right edges no greater than 225px, leaving at least 101px before the action-slot boundary.
- The plus control remains centred inside its own visual slot and never overlaps the label.

## 4. P0-02 Shared Mobile Footer

The V0.7 full Mobile page reassembles the shared Deep Navy Footer without a DOC-000-owned structural fork:

1. Brand: reverse Logo, operating entity and approved platform description.
2. Explore: Home, Markets, Products and Applications as individually distinguishable rows.
3. Information: Documents, Resources and About as individually distinguishable rows.
4. Procurement: persistent `Request a Quote` terminal action.
5. Copyright: `© 2026 TiO2 Malaysia. All rights reserved.`

Footer link pitch is 44px logical; the RFQ control is 50px high. No concatenated link strings, missing Information column, empty conversion slot or Contact fallback appears.

## 5. Frozen interaction and content contracts

- Hero `Start a Document Request` remains a direct accessible link to `/request-documents/`, without query, Selector focus or default Grade.
- The independent Grade-first Selector remains immediately below Hero.
- Initial `Continue to Request Documents` remains visible.
- `Explore Products` remains visible.
- Exactly 3 review scenarios, 4 documentation categories, 14 Grades and 6 FAQ questions remain.
- No View, Download, inventory, approval, direct-availability or regulatory-coverage promise is introduced.
- Shared Header and Mobile Menu remain inherited and unchanged.

## 6. Original-detail review

The complete 780px export was reviewed at original detail in three segments:

| Segment | Crop | Result |
|---|---:|---|
| Header / Hero / H1 | 780×760 | Full H1 visible; right margin retained |
| FAQ / action slots | 780×1450 | Six labels readable; zero label/action collision |
| Shared Footer | 780×1328 | Brand, Explore, Information, Procurement/RFQ and Copyright visible |

The temporary inspection crops and validation JSON are retained under `99_workspace/doc-000-gate5-v07/` and are not Buyer Clean deliverables.

## 7. Stage boundary

`DOC-000-G5-MOBILE-REPAIR-01 = DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`.

No Gate 6/7, child Document page, development, D16, testing, deployment, publication, DNS or indexing authority is created.

