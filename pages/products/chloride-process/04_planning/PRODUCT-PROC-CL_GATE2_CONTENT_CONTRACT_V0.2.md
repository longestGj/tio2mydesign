# PRODUCT-PROC-CL Gate 2 Content and Operation Contract V0.2

## 0. Control

| Field | Value |
|---|---|
| Page ID / URL | `PRODUCT-PROC-CL` / `/products/chloride-process-titanium-dioxide/` |
| Gate / phase | Gate 2 / Step 1 Content Skeleton |
| Version / date | V0.2 / 2026-09-06 |
| Status | `REVISED_FOR_BUYER_RE_REVIEW` |
| Buyer-copy source | `PRODUCT-PROC-CL_GATE2_CONTENT_SKELETON_V0.2.md` §3 |
| Previous contract | V0.1; preserved unchanged with the initially reviewed Skeleton |
| Revision basis | `BR-CL-01` in Buyer Review `PRODUCT-PROC-CL-G2-SKELETON-BR-01` |
| Full Buyer Clean Copy | Not created in this phase |

This contract defines what the revised Skeleton's words and actions mean. V0.2 changes only the CL-03 scan treatment required by `BR-CL-01`; it does not create layout, code, CMS fields, receiver behavior, route readiness, publication or indexing authority.

## 1. Identity, responsibility and content ownership

| Item | Contract |
|---|---|
| Page type | Process aggregation page |
| Language / scope | English / `tio2-my` |
| Primary keyword | `chloride process titanium dioxide` |
| Secondary terms | `chloride tio2`; `chloride process tio2 supplier` |
| Search task | Commercial investigation with a concise process-definition entry point |
| Page responsibility | Explain the Chloride route at buyer-relevant depth, aggregate the eight current Chloride Grades and move the buyer to Grade evidence, Applications, Documents or RFQ |
| Excluded ownership | Full Chloride-vs-Sulfate comparison; exact-model keyword ownership; generic Application education; document-family explanation; form behavior |
| Current Grade set | M-350, M-510, M-896, M-895, M-200, M-210, M-340 and M-886, in that order |

Buyer Copy is maintained only in Skeleton §3 during this phase. This C file references those labels and paragraphs rather than maintaining a second editable copy deck.

## 2. Actions, links and context

All routes describe the intended complete-site experience. Route implementation and same-scope availability must be verified before release; internal readiness text never appears on the page.

| Skeleton position / visible action | Target | Context and behavior | Downstream owner boundary |
|---|---|---|---|
| CL-01 / `Explore Chloride Grades` | Same-page CL-03 anchor | Scroll/focus moves to the visible Grade-section heading | This page owns the anchor; no selection or stored state |
| CL-01 and CL-05 / `Request a Quote` | CONV-RFQ `/request-a-quote/` | Pass `source_page_id=PRODUCT-PROC-CL` as internal attribution only; no Grade, Application, quantity or destination prefill | CONV-RFQ owns fields, visible/editable values, validation, receiver and states |
| CL-02 / `Compare Chloride and Sulfate Routes` | RES-PROC `/resources/chloride-vs-sulfate-titanium-dioxide/` | Normal navigation to the dedicated comparison guide | RES-PROC owns all versus/comparison content; no comparison content is imported here |
| CL-03 / eight `View {Grade}` actions | Corresponding registered Grade URL | Normal navigation to the exact Grade owner; no Application or RFQ selection | Each Grade page owns model facts, technical tables, sample/document/quote choices |
| CL-04 / `Explore Applications` | APP-000 `/applications/` | Normal navigation with no auto-filter or Grade relationship inferred from click location | Applications Hub owns use-case navigation and child Application routes |
| CL-04 / `Request Documents` | CONV-DOC `/request-documents/` | Pass source attribution only; no Grade or document type is preselected because this page contains no buyer selection control | CONV-DOC owns the Grade selector, multi-document selection, validation, receiver and states |

The Skeleton's Grade summaries are informational links, not selectable controls. Clicking or reading a card does not silently prefill an RFQ or document request. If future interaction design adds an explicit Grade-selection action, its visible/editable downstream behavior must be reviewed as a separate contract change.

## 3. Breadcrumb and shared content

| Position | Label | Target / behavior |
|---:|---|---|
| 1 | `Home` | `/` |
| 2 | `Products` | `/products/` |
| 3 | `Chloride Process Titanium Dioxide` | Current page text; no link |

Navigation current key is `Products`. Header, Mobile Header/Menu, fixed global RFQ, Footer, production logo and legal/consent content consume their shared current authorities. This page does not maintain a private Header/Footer variant and shows no buyer-visible `CURRENT` label.

## 4. Grade content and fact-source mapping

| Visible content | Current authority | Public limit |
|---|---|---|
| Eight-Grade Chloride set and order | PRODUCT V0.3 matrix and unified audit; page Claim IDs PROC-CL-008 through 016 | Neutral Process classification only |
| Eight exact Grade summaries | `PRODUCT-000_FULL_VISUAL_DESIGN_V0.13.md` §A5.1, current approved Product Hub Gate 5 baseline | Preserve exact strings; individual facts only; no ranking, equivalence or recommendation |
| Continuous eight-Grade list and concise M-350/M-510 overlap clarification | PRODUCT V0.3 Application relationships and the approved Product Hub application-result sets | Neutral visible relationship context; no exhaustive application set, recommendation, ranking or formulation-suitability claim |
| General Chloride-route definition | PROC-CL Claim 005; UNIDO and EU BREF extracts in the current raw representative-page record | General industrial context; no IKHLAS plant, feedstock or operating-configuration claim |
| Process label is not a complete Grade decision | PROC-CL Claim 006; Gate 1 approved direction | No universal Process winner; no performance inferred from Process label |
| Malaysia-origin titanium dioxide | Site-wide publication authority / EG-001 | Does not imply plant ownership, certificate provision, customs treatment or shipment facts |

M-2377, M-996, M-2196, M-108, M-52 and CR-901 are absent because they are not in the approved Chloride set. The page does not publish negative suitability statements about those Grades. `NO_PUBLIC_MAPPING`, evidence status and other internal control terms never render.

## 5. SEO and social direction

These are exact Skeleton-stage candidates for review. They are not production metadata until Gate 2 content is approved and later release authorization is completed.

| Field | Candidate / behavior | Visible support |
|---|---|---|
| SEO title | `Chloride Process Titanium Dioxide | TiO2 Malaysia` | CL-01 H1 and shared site brand |
| Meta description | `Explore eight Malaysia-origin chloride-process titanium dioxide grades, understand what the process label means, and review product information or request a quote.` | CL-01 through CL-05 |
| Canonical | `https://tio2malaysia.com/products/chloride-process-titanium-dioxide/` | Registered route and breadcrumb |
| HTML language | `en` | English Buyer Copy |
| Hreflang | None for the current English-only page | Current Brief |
| Open Graph title | Same exact value as SEO title | Same source |
| Open Graph description | Same exact value as Meta description | Same source |
| Open Graph URL | Same exact value as Canonical | Clean route |
| Open Graph type | `website` | Process aggregation page |
| Social image | No page-specific image is specified at Gate 2 Skeleton | Gate 4–5 must bind a real approved asset or omit the field |

Indexing direction remains `index, follow` only after release QA and separate publication/indexing authorization. Preview and staging remain non-indexable. Query and attribution values cannot create Canonical, metadata, Schema or sitemap variants.

Cannibalization controls:

- do not optimize the H1 or main narrative for `chloride vs sulfate titanium dioxide`;
- do not use exact Grade terms as this page's primary topic;
- do not expand CL-04 into generic Coatings, Plastics or Masterbatch landing-page content; and
- do not use country-supplier terms on this global Process page.

## 6. GEO and Schema direction

### 6.1 Visible answer locations

| Buyer question | Visible answer location |
|---|---|
| What does chloride-process TiO2 mean? | CL-02 first paragraph |
| Does the Process label determine Grade performance? | CL-02 second paragraph |
| Which Chloride Grades are in the current range? | CL-03 intro and eight linked entries |
| What should a buyer evaluate next? | CL-04 three-part sequence |
| What if the buyer does not know the Grade? | CL-01 path statement and CL-05 copy |
| Where is the direct Process comparison? | CL-02 supporting link to RES-PROC |

No separate FAQ module or FAQ-only duplicate answers are proposed.

### 6.2 Entity and machine-readable relationship direction

- Primary visible entity: chloride-process titanium dioxide pigment category.
- Related visible entities: TiO2 Malaysia; Malaysia-origin titanium dioxide; the eight named Grade pages; Products; Applications; Request Documents; Request a Quote; RES-PROC.
- Proposed page-level Schema: `WebPage` plus `BreadcrumbList`.
- Proposed visible-list representation: `ItemList` with eight `ListItem` entries in the exact displayed order, each pointing to its Grade URL. This does not create eight `Product` offers or availability records.
- `WebPage.isPartOf` and `publisher` should reference the shared same-scope `WebSite` and approved Organization entities; this file does not mint duplicate entity IDs.
- H1, description, Grade names, order, URLs and breadcrumb names must derive from the same approved visible sources.

Do not output `Product`, `Offer`, `AggregateOffer`, price, inventory, availability, shipping, rating, review, certification, plant/manufacturing operation, process superiority, FAQPage or QAPage facts from this Skeleton. No hidden relationship may state that a Grade is suitable for a buyer's formulation.

## 7. Normal experience and dependencies

| Situation | Intended buyer experience | Later owner / verification |
|---|---|---|
| Normal page | All five page-owned modules, eight Grade links and accurate actions render in reading order | Gate 3–5 design; Gate 7–9 implementation and QA |
| Buyer does not know Grade | Review the Grade list/Applications or enter RFQ via `Not sure / Need help` | CONV-RFQ existing option contract |
| Buyer needs documents | Open `Request Documents`, then select the Grade and needed document types | CONV-DOC existing request contract |
| Comparison guide or downstream route not yet implemented | Treat the missing same-scope route as an internal release dependency; do not expose placeholder, dead link, disabled action or readiness explanation | Downstream owner, Gate 7 handoff, Gate 8 implementation and Gate 9 QA |
| No approved page image | Text-led content remains complete; no factory, mine, certificate or stock image is inserted to imply facts | Gate 4–5 media decision |
| Grade relationship baseline changes | Recheck the exact set, order, visible list and ItemList together | PRODUCT relationship owner plus page re-review |

This page has no form, filter, selector, local submission or dynamic recommendation state. It does not copy any receiver's success or failure messages.

## 8. Internal exclusions and open items

The following remain internal and do not appear in Buyer Copy:

- no numeric keyword-volume, KD or CPC data is available;
- the general Process sources do not prove IKHLAS plant operations;
- Grade-card descriptions are approved individual statements and cannot be turned into comparisons;
- RFQ receiver readiness remains a later external implementation/release matter;
- route and same-scope integration must be verified before release; and
- no page-specific social image has been selected.

There is no new enterprise-fact decision required for this Skeleton. Full Copy, exact transition copy and any later media remain outside this phase. The same independent Buyer Review role must verify `BR-CL-01` against Skeleton V0.2 before total-controller review or user confirmation.

## 9. V0.2 narrow revision record

| Changed location | V0.1 | V0.2 | Contract effect |
|---|---|---|---|
| CL-03 intro | Described two application-oriented groups only as navigation/non-ranking aids | States that application relationships overlap and names the approved cross-application M-350/M-510 relationships | Prevents exhaustive or mutually exclusive group interpretation |
| CL-03 subheadings | `Coatings and Multi-Application Grades`; `Plastics and Masterbatch Grades` | Removed; eight Grades form one continuous ordered list | Prevents application-led scan omission while preserving every Grade and position |
| All other content and actions | V0.1 baseline | Unchanged | No new Page Intent, module, CTA, URL, summary, fact, metadata or Schema decision |
