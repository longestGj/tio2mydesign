# RES-R706 Gate 2 Content Contract V0.3

## 0. Control

| Field | Value |
|---|---|
| Page ID | `RES-R706` |
| Candidate URL | `/resources/ti-pure-r-706-alternative/` |
| Gate | Gate 2 |
| Artifact | C — Stable page-specific content contract |
| Version | V0.3 |
| Status | `DRAFT_FOR_BUYER_REVIEW` |
| Date | 2026-09-07 |

This contract records only the stable page-specific rules needed downstream. Shared Product, Document, Sample, RFQ, chrome and governance contracts remain authoritative and are referenced rather than restated.

## 1. Identity and intent

| Field | Contract |
|---|---|
| Page type | Exact-reference-grade qualification guide |
| Buyer | Industrial coating technical/procurement reader with an existing Ti-Pure R-706 reference |
| Job | Convert the current R-706 use, source facts and acceptance criteria into inputs for an independent Grade qualification |
| Unique ownership | R-706-specific facts, source labels and test-planning context |
| Adjacent owner | `RES-CHEMOURS` owns the reusable brand-level supplier-evaluation method |
| Mapping | `NEW_PAGE_CANDIDATE`; page mapping remains independently undecided |
| Candidate URL | `/resources/ti-pure-r-706-alternative/`; direction only, not implementation or publication approval |
| Research keyword | The keyword-master phrase remains research/ownership metadata only; it does not authorize cross-supplier relationship language in visible or machine-readable content |

## 2. Fixed module and action contract

Order:

1. Hero.
2. Establish the R-706 Reference.
3. Build an R-706-Specific Evaluation Brief.
4. Plan Tests Around the R-706 Evaluation Dimensions.
5. Understand the Scope of the TS-6706 Announcement.
6. Continue with a Buyer-Selected Grade.

Actions:

| Priority | Label | Target | Receiver behavior |
|---|---|---|---|
| Primary | `Explore Titanium Dioxide Grades` | `/products/` | Neutral Product Hub; no R-706 context, product relationship, shortlist or Grade preselection |
| Secondary | `Build Your Evaluation Brief` | `#evaluation-brief` | Same-page anchor |
| Next step | `Request Documents` | `/request-documents/` | One structured IKHLAS Grade plus one or more document types; other Grades only as supplementary context; separate requests when Grade-specific document selections differ |
| Conditional next step | `Request a Sample` | `/request-sample/` | Used only after one IKHLAS Grade and intended test context are ready; submission begins human review and any arrangement is separate |

The global shared RFQ action remains part of chrome. This page must not prefill R-706, infer an IKHLAS Grade or promise a commercial outcome through that action.

## 3. Claim and source limits

- R-706 identity, chloride-process wording, coating applications, particle-size control, undertone, gloss-retention language and durability language require visible attribution to the Ti-Pure R-706 product page.
- The February 2020 Product Information sheet supports `93 wt% minimum` for titanium dioxide content and discusses wet-in, dispersibility and hiding. Remaining properties-table values are typical unless otherwise specified; their labels must remain attached to any value used.
- The 19 February 2025 announcement supports Chemours' stated TS-6706/R-706 relationship as one proposition and its reported evaluation of TS-6706 as a separate proposition. For that evaluation, viscosity stability, color, gloss, tint strength, hiding and mechanical strength belong to the water-based and solvent-based paint-system context; dry-pigment bulk flow belongs to a separate laboratory and silo-scale test context. Both keep TS-6706 as their subject. The source does not establish a two-Grade or head-to-head test program, and neither proposition can be transferred to an IKHLAS Grade or another supplier.
- Test categories may be used as planning prompts. Buyer methods, controls and acceptance criteria determine the qualification exercise; the page cannot predict results.
- Referential use of Ti-Pure and R-706 requires a concise independence statement. No Chemours design imitation, affiliation or endorsement signal is allowed.
- The visible guide must not name an IKHLAS candidate or express a cross-supplier product relationship, shortlist, ranking, recommendation, substitutability, assured compatibility or performance promise.
- `M996_VS_M2196_DIFFERENTIATION_FROZEN` remains active.

## 4. SEO, GEO and machine semantics

| Element | Direction |
|---|---|
| SEO title | `Ti-Pure R-706 Qualification Guide | TiO2 Malaysia` |
| Meta description | `Use Ti-Pure R-706 product facts, document labels and coating test dimensions to prepare an independent titanium dioxide qualification brief.` |
| H1 | `Qualify Another TiO2 Supply When Ti-Pure R-706 Is Your Reference` |
| Canonical | Candidate direction: `https://tio2malaysia.com/resources/ti-pure-r-706-alternative/`; implementation pending mapping approval |
| Indexing | No indexing or sitemap approval. Candidate remains outside publish-ready mapping until separately decided |
| Schema | `WebPage` + `BreadcrumbList` only at this stage |
| Excluded Schema | No `Product`, `Offer`, `Review`, `FAQPage`, comparison/replacement relation or hidden cross-supplier relationship |
| GEO | Answers must preserve source attribution, publication/review dates, minimum-versus-typical labels and the independent-testing boundary |

Machine-readable content must not expand beyond the visible copy or convert keyword phrasing into a product claim.

## 5. Freshness and open decisions

- Visible `Last reviewed`: 6 September 2026.
- The official Ti-Pure sources must be refreshed before first publication and at least within the Technical-guide freshness window or earlier after a relevant source event.
- Page mapping, final URL, canonical implementation, sitemap inclusion, indexing and publication remain separate decisions.
- A different agent must perform Buyer Review; project-control review and user approval remain pending.

## 6. Gate state

`A = DRAFT_FOR_BUYER_REVIEW / NOT_USER_APPROVED`

`B = DRAFT_FOR_BUYER_REVIEW`

`C = DRAFT_FOR_BUYER_REVIEW`

`GATE2 = OPEN`

`GATE3 = NOT_STARTED / NOT_AUTHORIZED`
