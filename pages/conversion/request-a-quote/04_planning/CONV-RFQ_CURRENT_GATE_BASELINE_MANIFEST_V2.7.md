# CONV-RFQ Current Gate Baseline Manifest V2.7

## 0. Identity and status

| Field | Value |
|---|---|
| Page | `CONV-RFQ` / `/request-a-quote/` |
| Version | V2.7 |
| Current gate | Gate 5 — complete visual design |
| Review ID | `CONV-RFQ-G5-VIS-01` |
| Gate 4 | `USER_APPROVED / CLOSED` |
| Gate 5 | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Gate 6 | `LOCKED / NOT_AUTHORIZED` |
| Development / release | `NO / OUT_OF_SCOPE` |

This is the only current Gate 1–5 Manifest. Submission to project control is not approval.

## 1. Current control documents

| File | Bytes | SHA-256 | Role |
|---|---:|---|---|
| `04_planning/visual-designs/CONV-RFQ_GATE5_FULL_VISUAL_SPEC_V1.0.md` | 8,458 | `183799DFAA10000CFF95EED28D67392831D8DCEFDF6D752D937471FDA82EC0EE` | complete visual, responsive and state contract |
| `04_planning/visual-designs/CONV-RFQ_GATE5_FULL_VISUAL_VALIDATION_V1.0.md` | 5,507 | `409B55BEC09DAB36C772D9979DB4D572AE9EDAD1E80601F678EDFB940C771639` | asset, copy, responsive and scope validation |
| `05_review/CONV-RFQ_GATE5_PROJECT_CONTROL_REVIEW_SUBMISSION_V1.0.md` | 4,195 | `CA398A1B1B8FD0DCDBC6EE425FBC80E07821D2A8BD09DA68E0542CE17774F3E0` | current review entry |
| `05_review/CONV-RFQ_GATE4_USER_APPROVAL_CLOSURE_V1.0.md` | 2,327 | `EF3DD7B0948BBB1BA9987045BF20317B82020099EA1A713EF345427D25E0F058` | Gate 4 closure and Gate 5 authority |

## 2. Frozen visual assets

Asset root: `04_planning/visual-designs/gate5_v1.0/`

| File | Bytes | SHA-256 | Canvas / role |
|---|---:|---|---|
| `CONV-RFQ_GATE5_DESKTOP_1440_BUYER_CLEAN_V1.0.png` | 216,243 | `9E81EC4D6E96C710646EC29212B71276282B5CFBA2AD0DA2032BBB06B78B3B06` | 1440 × 2615 Buyer Clean |
| `CONV-RFQ_GATE5_DESKTOP_1440_BUYER_CLEAN_V1.0.svg` | 23,986 | `A907CBE1B4D80CEC32A6DA4938A1C2065D57C421A4A0DEDA4764AC9E54201FC1` | matching vector proof |
| `CONV-RFQ_GATE5_TABLET_768_BUYER_CLEAN_V1.0.png` | 191,638 | `548F7966021FBD020A74C2DAA43942B5E4BF4008349504D67B674F6358E9973F` | 768 × 3026 Buyer Clean |
| `CONV-RFQ_GATE5_TABLET_768_BUYER_CLEAN_V1.0.svg` | 23,160 | `0AEFABA655A16C9C6038B0E1AA8E64C1E503D094C2FB5905577CB9D7034C7A83` | matching vector proof |
| `CONV-RFQ_GATE5_MOBILE_390_LOGICAL_AT2X_BUYER_CLEAN_V1.0.png` | 367,793 | `8598AD96E86BC422E89552327E07673F3E5B12FCC4B030A506EEB077CBE5A126` | 390 × 3257 logical, @2x |
| `CONV-RFQ_GATE5_MOBILE_390_LOGICAL_AT2X_BUYER_CLEAN_V1.0.svg` | 24,287 | `2DE7C50FACD6A6BB855FC1789A8EA8F524A2076AF475706C469FF1814A70EEAD` | 390 × 3257 vector proof |
| `CONV-RFQ_GATE5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.png` | 42,275 | `A47B439AEEC365415F773A722658A3B419494784D59FA089946F50A6CBC4C164` | 390 × 844 logical, @2x |
| `CONV-RFQ_GATE5_MOBILE_MENU_OPEN_390_LOGICAL_AT2X_V1.0.svg` | 8,879 | `4067EFD487C8D95F33FFB533B6AF18A8BE1D725519733186EA103FDE03D81D03` | matching vector proof |
| `CONV-RFQ_GATE5_STATE_BOARD_1440_V1.0.png` | 219,971 | `5B9FCBDEC189CF583652B9648F809891B6C8E8E2517944255CCD0BD176E7CC7E` | 1440 × 2600 state proof |
| `CONV-RFQ_GATE5_STATE_BOARD_1440_V1.0.svg` | 13,508 | `65F59F4C94156E03F1EBF76D4B47221F27A493C19B750C21D711DFF78C32A057` | matching vector proof |
| `CONV-RFQ_GATE5_MOBILE_STATE_BOARD_390_LOGICAL_AT2X_V1.0.png` | 169,348 | `BDD94D452017B5070C76B7D34536CE19F0698027C4415B632380CAFC99A47100` | 390 × 2100 logical, @2x |
| `CONV-RFQ_GATE5_MOBILE_STATE_BOARD_390_LOGICAL_AT2X_V1.0.svg` | 5,719 | `B1F572F03FBB2A30A7D751D22C51DD34BC4ABF9501DAB9CF8409505AB6C1451F` | matching vector proof |

## 3. Inherited approved baselines

- Gate 2 copy and module order: `CONV-RFQ_GATE2_FULL_COPY_V1.1.md` and its user-confirmed Hero override.
- Gate 3 responsive structure: `CONV-RFQ_GATE3_WIREFRAME_SPEC_V1.1.md`, `USER_APPROVED / CLOSED`.
- Gate 4 visual direction: `CONV-RFQ_GATE4_VISUAL_DIRECTION_V1.0.md`, `USER_APPROVED / CLOSED` through the Gate 4 user approval closure.
- Shared Header/Footer: `docs/architecture/GLOBAL_HEADER_FOOTER_SPEC_V0.5.md`.
- Product/application/process relation authority: `pages/products/01_research/PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` and the three named V0.3 audits.

## 4. Frozen decisions

- Original Hero body is retained; the rejected grade-first replacement is absent.
- Desktop page body is a single centred vertical composition; no page-level left/right split.
- Form field/data boundary, Privacy Policy link, receipt-only success semantics and CTA routes remain unchanged.
- M-2377 uses neutral approved V0.3 prefill only. Specialty Materials, Rubber public taxonomy and M-996/M-2196 comparisons remain frozen.
- Fixed Request a Quote surfaces remain visible in every shared Chrome assembly.

## 5. Open review item

Project-control review of G5-D01–D07 is pending. If passed, the package may be presented directly to the user for Gate 5 visual approval. It may not be marked `APPROVED`, `CLOSED` or advanced to Gate 6 without the required decisions.

## 6. Historical disposition

`CONV-RFQ_CURRENT_GATE_BASELINE_MANIFEST_V2.6.md` is `HISTORICAL GATE5-IN-PROGRESS / SUPERSEDED_BY_V2.7`. V2.5 and earlier Manifests and V0.x Gate 5 submissions remain historical and do not control the current package. No history was deleted or rewritten.

## 7. Stop boundary

No Gate 6/7, development, WordPress, Next.js, CMS, code, testing, branch, deployment, publication, DNS or indexing operation is authorized or included.

