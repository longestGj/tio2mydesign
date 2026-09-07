# HOME-001 Gate 7 P0 Tablet Evidence V0.2

## 0. Document control

| Field | Value |
|---|---|
| Page | `HOME-001` / `/` |
| Evidence revision | `HOME-TABLET-EVIDENCE-V0.2` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
| Revision type | P0 evidence correction; not content, architecture or visual-direction change |
| Date | 2026-08-31 |
| Superseded for current Gate input | Tablet 768/1024 V0.1 evidence only |
| Historical files | V0.1 PNG files retained unchanged |

## 1. Correction decision

The written Gate 7 contract requires Desktop and Tablet to retain the page-level structured RFQ Section after Resources / Buyer Answers. The 390px Home intentionally omits that page-level RFQ Section, while Global Chrome RFQ remains permanently visible in Header, Mobile Menu and Footer.

The prior Tablet V0.1 evidence stopped after Documents and continued directly to Footer. It therefore did not demonstrate the complete written Tablet contract. V0.2 corrects only that evidence omission:

```text
Header
→ Hero
→ Markets
→ Products
→ Applications
→ Company
→ Documents
→ Resources / Buyer Answers
→ Page-level RFQ
→ Footer with Global RFQ
```

No approved module, copy direction, product group, grade, CTA rule, Header, Footer, SEO/GEO decision or fact boundary is removed or redefined.

## 2. Formal V0.2 evidence

| Viewport | Formal file | Dimensions | Bytes | SHA-256 |
|---|---|---:|---:|---|
| Tablet 768 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.2.png` | 768×6844 | 444731 | `E642EA33FD0755884529AB35E3A80062A7F44F8A9D31E209F271176CCC5EA357` |
| Tablet 1024 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.2.png` | 1024×5220 | 448760 | `F81110344F7946185504D7A5D37E50CA0AC1E4DF72826F67F40EC528E8E3897C` |

## 3. Historical evidence retained

| Viewport | Historical file | Dimensions | Bytes | SHA-256 | Status |
|---|---|---:|---:|---|---|
| Tablet 768 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-768-evidence-v0.1.png` | 768×5364 | 351499 | `A7A54820A2C12061CE5EEC97C0694F6E31C867DA31B80018F6E7225EAD9849C6` | Retained; superseded for current Gate input |
| Tablet 1024 | `pages/home/04_planning/visual-designs/responsive-evidence/homepage-tablet-1024-evidence-v0.1.png` | 1024×4070 | 346382 | `3B1D0D334F1FD18719CC67C648DAF5E253C0F1F9E96B300A21E3644A0DC9C7BB` | Retained; superseded for current Gate input |

## 4. Evidence construction and boundary

The local in-app browser security policy blocked direct `file:///` page navigation. No bypass or alternate browser-control surface was used. The V0.2 PNGs were produced through deterministic local visual composition:

1. retain every pixel above the V0.1 Footer;
2. insert the approved Gate 7 Resources / Buyer Answers visual block;
3. insert the approved Tablet page-level RFQ visual block;
4. retain the original V0.1 Footer, including its Global RFQ;
5. record dimensions, bytes and SHA-256 in a machine-readable local audit.

Build/audit workspace:

- `99_workspace/home-gate7-p0-revision/build-home-tablet-evidence-v0.2.mjs`
- `99_workspace/home-gate7-p0-revision/home-tablet-evidence-v0.2-audit.json`

This is Gate visual evidence, not a production browser screenshot and not implementation proof. External development must still demonstrate rendered DOM order, breakpoint behavior, links, keyboard behavior, overflow, accessibility and responsive implementation during the applicable external development and Gate 9 QA stages.

## 5. Directed checks

| Check | 768 | 1024 |
|---|---|---|
| Width exact | PASS | PASS |
| V0.1 historical source retained | PASS | PASS |
| Existing Header through Documents retained | PASS | PASS |
| Resources / Buyer Answers visible | PASS | PASS |
| Page-level RFQ visible | PASS | PASS |
| Footer retained | PASS | PASS |
| Global Chrome RFQ visible | PASS | PASS |
| 390px contract modified | NO | NO |
| Content/architecture modified | NO | NO |

## 6. Version record

| Version | Date | Change | Status |
|---|---|---|---|
| V0.1 | 2026-08-31 | Initial Tablet responsive evidence; omitted Resources / Buyer Answers and page-level RFQ | Historical; retained |
| V0.2 | 2026-08-31 | Adds the two contract-required Tablet modules while preserving all prior modules and Footer | `DRAFT_FOR_PROJECT_CONTROL_REVIEW` |
