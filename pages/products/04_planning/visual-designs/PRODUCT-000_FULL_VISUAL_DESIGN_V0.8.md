# PRODUCT-000 Full Visual Design V0.8 — Buyer-Facing Final Directed Revision

## 1. Document Control

| Field | Value |
|---|---|
| Page ID | `PRODUCT-000` |
| Page | Titanium Dioxide Products |
| URL | `/products/` |
| Version | `V0.8` |
| Date | `2026-08-31` |
| Review ID | `PRODUCT-G5-BUYER-FINAL-01` |
| Directed revision review | `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED` |
| Current status | `PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| Relationship authority | `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv` / approved PRODUCT V0.3 relationship baseline |
| Visual input | `PRODUCT-000_G5_DESKTOP_FULL_ROUTE_BUYER_CLEAN_V0.9.png` |
| Output set | Two complete V0.12 buyer-facing pages: 1440px Desktop and 390px logical Mobile at 2× |
| Scope | Buyer-facing relationship accuracy, taxonomy consistency, copy, SEO, GEO, decision clarity and claim safety |
| Hard stop | No Gate 6/7, child pages, code, CMS, development handoff, deployment, publication or operation in `D:\16Wordpress_nextjs` |

This revision does not redesign the page or replace the approved global system. It retains the V0.9 full-route module order, preserves the V0.11 body and Header pixels, and applies the user-approved V0.3 Global Chrome wording `PROCUREMENT` in the Desktop and Mobile Footer. All other Footer pixels remain frozen. V0.10 remains an internal relationship proof and is not public page content; V0.11 remains revision history.

## A. Revised Buyer-Facing Product Center

### A1. Public module order

1. Global Header with Products current state and fixed Request a Quote.
2. Breadcrumb: `Home > Products`.
3. Hero.
4. Start with Your Application.
5. Browse by Production Process.
6. Browse All 14 Titanium Dioxide Grades.
7. How to Evaluate a Titanium Dioxide Grade.
8. Continue Your Procurement Review.
9. Buyer Questions.
10. Lightweight Request a Quote CTA.
11. Global Footer with fixed Request a Quote.

### A2. Hero contract

- H1: `Titanium Dioxide Pigment Grades for Industrial Applications`.
- Supporting copy: `Explore 14 titanium dioxide pigment grades using the application selector, production-process categories or complete grade directory, then continue to individual grade pages for technical evaluation.`
- Safe rutile sentence: `The portfolio includes rutile titanium dioxide pigment grades for multiple industrial applications.`
- Suitability boundary: `Listed grades are starting points for technical evaluation and do not guarantee suitability for a specific formulation or operating condition.`
- Primary CTA: `Start Grade Selection`.
- Secondary CTA: `Request a Quote`.
- Hero summary: `14-grade portfolio`; `6 Coatings`; `5 Plastics & Masterbatch`; `2 Inks & Multi-Application`; `1 Specialty`.
- The former `Find the Right Grade` CTA and `Additional Grades` taxonomy do not render.

### A3. Selector contract

- Step 1 presents six independent application controls plus `Not Sure`.
- Step 2 title is `Grades to Review — X` and lists every positive public relationship for the selected application.
- Every result receives the same neutral `Grade name + View Grade` treatment.
- No recommended, best match, top pick, preferred, score, percentage or visual ranking state exists.
- Buyer-facing disclaimer: `Listed grades are starting points for technical evaluation and do not guarantee suitability for a specific formulation or operating condition.`
- Default visual state is Coatings with eight results. The other five exact states are controlled by Section B and must use the same component treatment.

### A4. Process contract

- Two equal route cards remain: `Chloride Process Titanium Dioxide` and `Sulfate Process Titanium Dioxide`.
- Their CTAs remain `Explore Chloride Grades` and `Explore Sulfate Grades`.
- CR-901 appears in a separate lightweight row as `CR-901 · Vapor-phase oxidation · View Grade`.
- No third Process landing page, URL or primary keyword is created.

### A5. Directory and evaluation contract

- The complete directory uses four navigation groups and fourteen lightweight `View Grade` rows.
- Public disambiguation: `Portfolio groups are navigation categories. A grade may appear in more than one application result because application relationships can span multiple navigation groups.`
- The five evaluation steps remain unchanged in responsibility: application, process when relevant, grade-specific technical data, destination/documents and buyer validation.
- Missing technical values must not be inferred from another grade, an older source or an unrelated TDS.
- Final suitability remains a buyer-side formulation, processing, performance and qualification decision.

### A6. Procurement, FAQ and conversion contract

- Continue Your Procurement Review retains `Explore Applications`, `Explore Documents` and `Explore Markets`.
- Buyer Questions retains exactly five questions. One answer is expanded in the visual baseline; all five answers must exist in initial HTML/DOM.
- Accordion disclosure may change visibility only. Answers must not be fetched only after click and must not be generated only client-side.
- Bottom conversion remains a lightweight CTA, not an embedded form.
- RFQ copy: `Share your application, destination market, expected quantity and any grade you are evaluating.`
- RFQ boundary: `Quotation, availability and documentation remain subject to review.`

#### A6.1 Formal FAQ copy deck

The following five questions and answers are the formal, exact content source. They no longer depend on a temporary renderer.

1. **How do I choose a titanium dioxide pigment grade?**

   Start with the intended application, then use production-process classification if it is a required sourcing parameter. Review the relevant grade page and confirm the available product information against the formulation, processing conditions, destination and documentation requirements. A listed result is a starting point for evaluation, not a suitability guarantee.

2. **Which grades are listed in this product center?**

   The product center lists 14 grades: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.

3. **What is the difference between application and process selection?**

   Application selection groups grades by listed use-case relationships, while process selection groups grades by their production-process classification. A process classification does not determine application suitability on its own.

4. **What if no grade is shown for my application?**

   A missing result means that the selector has no listed grade for that application. It should not automatically be interpreted as a technical rejection of every grade. Buyers can contact the team when a requirement is not represented in the selector.

5. **Does a listed grade guarantee suitability?**

   No. A listed grade is a starting point for technical evaluation. Final suitability should be confirmed against the buyer's formulation, processing conditions, performance requirements, destination requirements and applicable documentation.

Collapsed state controls presentation only. All five exact answers must be present in the initial HTML/DOM, remain readable by search and AI systems, and must not be fetched only after interaction.

## B. Application Selector Matrix Check

| Application | Count | Final public result order |
|---|---:|---|
| Coatings | 8 | M-350, M-510, M-896, M-996, M-2196, M-895, M-52, M-2377 |
| Plastics | 8 | M-350, M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Masterbatch | 7 | M-510, M-200, M-108, M-210, M-340, M-886, M-2377 |
| Printing Inks | 4 | M-350, M-510, M-52, M-2377 |
| Paper | 2 | M-350, M-2377 |
| Specialty Materials | 1 | CR-901 |

Result: all six sets match PRODUCT V0.3. M-2377 appears neutrally in five application sets and does not appear under Specialty Materials. `NO_PUBLIC_MAPPING` remains a non-render rule and is not rewritten as technical unsuitability.

## C. Process Classification Check

| Process | Count | Final public set |
|---|---:|---|
| Chloride | 8 | M-350, M-510, M-896, M-895, M-200, M-210, M-340, M-886 |
| Sulfate | 5 | M-996, M-2196, M-108, M-52, M-2377 |
| Vapor-phase oxidation | 1 | CR-901 |

The page does not imply that all fourteen grades belong only to Chloride or Sulfate. CR-901 is classified without creating an unapproved process page.

## D. Portfolio Taxonomy Check

| Navigation group | Count | Directory members |
|---|---:|---|
| Coatings Grades | 6 | M-350, M-510, M-896, M-996, M-2196, M-895 |
| Plastics & Masterbatch Grades | 5 | M-200, M-108, M-210, M-340, M-886 |
| Inks & Multi-Application Grades | 2 | M-52, M-2377 |
| Specialty Grade | 1 | CR-901 |

`Additional Grades` has been removed from the revised public page. Portfolio groups, application relationships and production-process classifications are presented as three different relationship dimensions.

## E. Product Count Check

The exact fourteen-grade set is: M-350, M-510, M-896, M-996, M-2196, M-895, M-200, M-108, M-210, M-340, M-886, M-52, M-2377 and CR-901.

- Count: 14.
- Missing grades: 0.
- Additional grades: 0.
- Duplicate directory rows: 0.

## F. SEO Keyword Boundary Check

| Element | Final contract |
|---|---|
| Primary keyword | `titanium dioxide pigment` |
| Supported intent | titanium dioxide grades; titanium dioxide grade selection; rutile titanium dioxide; rutile titanium dioxide pigment |
| H1 | `Titanium Dioxide Pigment Grades for Industrial Applications` |
| Title candidate | `Titanium Dioxide Pigment Grades | TiO2 Malaysia` |
| Meta candidate | `Explore 14 titanium dioxide pigment grades by application, production process and portfolio group, then continue to grade pages for technical evaluation.` |
| Canonical | `https://tio2malaysia.com/products/` |

The Hub owns generic product-family, pigment, grade-list and selection intent. It does not become an exact-grade landing page, application landing page, process article, market sourcing page, document page or technical data sheet. Process and application references are navigational and concise.

## G. GEO Relationship Check

The visible page establishes this extractable graph:

`Titanium dioxide pigment → 14 grades → four portfolio navigation groups + six application-result sets + three process classifications → individual grade pages → Applications / Documents / Markets → technical evaluation → RFQ`.

| Buyer or machine question | Visible answer source |
|---|---|
| How many grades are listed? | Hero `14-grade portfolio`, directory H2 and FAQ answer 2 |
| How is the portfolio organised? | Hero summary, four directory groups and directory explanation |
| Which grades relate to each application? | Six Selector states controlled by Section B |
| How are grades classified by process? | Two process cards, CR-901 row and Section C state contract |
| Can one grade appear under more than one application? | Directory disambiguation sentence |
| What is the difference between application and process? | FAQ answer 3 |
| Does process determine suitability? | Process intro, Evaluation step 2 and FAQ answer 3: no |
| Does a listed grade guarantee suitability? | Hero boundary, Selector disclaimer and FAQ answer 5: no |
| How should a buyer evaluate a grade? | Five-step evaluation and FAQ answer 1 |
| Which exact grades are listed? | Complete directory and FAQ answer 2 |

FAQ answers are Technical SEO/GEO content and must be present in initial HTML/DOM even when visually collapsed. FAQ Schema, if used later in an authorized handoff, must match the same visible questions and answers exactly.

## H. Evidence / Claim Safety Check

- Best-grade claim: absent.
- Recommended-grade claim: absent.
- Match score or percentage: absent.
- Suitability guarantee: expressly disclaimed.
- Product ranking or comparative selection rationale: absent.
- Invented specification, performance, manufacturing, origin, capacity, inventory, availability or delivery claim: absent.
- Internal QA counts, conflict states, evidence-only labels and boundary notes: absent from Buyer Clean visuals.
- M-2377: present neutrally in the approved five Applications, Sulfate and its directory group; no warning or special emphasis.
- M-996/M-2196: individual Coatings/Sulfate facts may render; difference, ranking, superiority, equivalence, substitution and comparative choice logic remain frozen.
- Rubber: no application control, category, page, link, URL, keyword block or public Schema relation.

## I. Change Log

| Module | Original | Revised | Reason |
|---|---|---|---|
| Hero | Generic 14-grade introduction; `Find the Right Grade`; legacy taxonomy summary | Natural grade-selection copy; one safe rutile sentence; `Start Grade Selection`; 6/5/2/1 unified taxonomy | SEO, Evidence, Copy, Conversion |
| Application Selector | Coatings visual could imply one featured result | Coatings displays all eight neutral results; six exact states governed by Section B; strengthened non-guarantee | Product relationship, UX, Evidence |
| Process | Chloride and Sulfate were the only prominent classifications | Retains both route cards and adds a lightweight CR-901 Vapor-phase oxidation row | Product relationship, GEO, SEO |
| Product Directory | `Additional Grades — 2`; relationship dimensions could appear inconsistent | `Inks & Multi-Application Grades — 2`; concise public disambiguation of navigation groups and application results | Product relationship, GEO, Copy |
| Evaluation | Approved five-step procurement guidance | Retained; evidence inference and buyer validation boundaries remain explicit | Evidence, GEO |
| Procurement Review | Three approved downstream paths | Retained with concise Applications, Documents and Markets actions | SEO, GEO, UX |
| Buyer Questions | Five approved buyer questions | Direct answers cover the exact 14 grades, relationship dimensions, missing-result meaning and suitability; all answers required in DOM | GEO, SEO, Evidence, Copy |
| RFQ | Lightweight end CTA with internal-system wording risk | Buyer-facing requirements sentence plus one review boundary; no form fields | Conversion, Copy, Evidence |

## J. Final Gate

These are execution-task self-check results. They do not substitute for project-control or user approval.

| Gate | Result |
|---|---|
| Visual Gate | PASS |
| Product Relationship Gate | PASS |
| Product Taxonomy Gate | PASS |
| Process Classification Gate | PASS |
| English Editorial Gate | PASS |
| SEO Gate | PASS |
| Keyword Cannibalization Gate | PASS |
| GEO Gate | PASS |
| Evidence Gate | PASS |
| Conversion Gate | PASS |

## 11. V0.12 Asset Manifest

| File | Actual dimensions | Bytes | SHA-256 | Status |
|---|---:|---:|---|---|
| `assets/PRODUCT-000_G5_DESKTOP_BUYER_FACING_FINAL_V0.12.png` | 1440×5393 | 363463 | `6768B0CB5604DA0E0E9B349B9C368702E85635714263DF164F67D4935C89FCD8` | `CURRENT_BUYER_FACING_FINAL_CANDIDATE / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
| `assets/PRODUCT-000_G5_MOBILE_390_BUYER_FACING_FINAL_V0.12.png` | 780×12479; 390px logical at 2× | 584130 | `88E632FE68472DAC2F0CB816D4E29A1E300AC32156ABF01E024C614A182F9408` | `CURRENT_BUYER_FACING_FINAL_CANDIDATE / PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |

Both assets were reviewed at original detail and in cropped original-pixel views. The Desktop page has no Hero/CTA overlap and uses a compact two-column eight-result Selector. The Mobile page has independent two-column application controls, a full-width `Not Sure` control, one-column grade rows, no horizontal overflow and no cropped or overlapping final RFQ copy. Buyer-visible Footer labels are `CONVERSION = 0` and `PROCUREMENT = 1` in each asset.

## 12. Protected Inputs and Governance Boundary

- PRODUCT V0.3 matrix: 84 rows; 30 verified, 0 conflict, 54 no-public; SHA-256 `8465E231545D3EFC6333EC593441EEF65E95173A4708097CEC0D7A97A014E406`.
- V0.11 is the protected body and chrome source. The only V0.12 raster delta is the Footer title required by `GLOBAL_HEADER_FOOTER_SPEC_V0.3.md`: Desktop replaces `CONVERSION` with `PROCUREMENT`; Mobile adds one `PROCUREMENT` heading above the unchanged terminal RFQ.
- Desktop protected region `0,0,1440×4983` and Mobile protected region `0,0,780×11423` are RAW-identical to V0.11:

| Protected region | V0.11 RAW SHA-256 | V0.12 RAW SHA-256 | Result |
|---|---|---|---|
| Desktop `0,0,1440×4983` | `24BA2ED41008A43FB85D12009C59BA083F843ACF261AAEAE45FC7D558394C9FD` | `24BA2ED41008A43FB85D12009C59BA083F843ACF261AAEAE45FC7D558394C9FD` | Identical |
| Mobile `0,0,780×11423` | `F0E81CCA66AD3B0A13FB7D6C0444FB79D4A45ABBB063A4424AF5F450A779513A` | `F0E81CCA66AD3B0A13FB7D6C0444FB79D4A45ABBB063A4424AF5F450A779513A` | Identical |

- Footer pixels outside the title bounds are RAW-identical to V0.11. Desktop permitted delta is confined to footer-relative `x=1090–1319, y=46–83`; Mobile permitted delta is confined to footer-relative `x=32–747, y=730–769`.

| Footer comparison | Changed pixels | Observed changed bounding box | Pixels outside allowed title bounds |
|---|---:|---|---:|
| Desktop V0.11 → V0.12 | 871 | footer-relative `x=1103–1219, y=58–69` | 0 |
| Mobile V0.11 → V0.12 | 2701 | footer-relative `x=38–253, y=736–757` | 0 |

- V0.9 historical assets and V0.10 internal proof remain unchanged.
- V0.11 remains historical and is not overwritten.
- `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`.
- `PRODUCT-G5-BUYER-FINAL-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL`; V0.8 and both V0.12 assets are the current Buyer-Facing Final candidate baseline.
- Gate 5 remains unapproved. No user approval date is recorded.
- This package stops at project-control review. It does not authorize Gate 6/7, Process or Grade child-page work, code, CMS, development handoff, deployment, release or publication.

## 13. Version Record

| Version | Date | Change | Governance status |
|---|---|---|---|
| V0.5 / V0.9 | 2026-08-30 | Approved full-route, fixed-RFQ visual baseline | Approved historical baseline; unchanged |
| V0.6 / V0.10 | 2026-08-30 | Internal PRODUCT V0.3 relationship-impact proof | Project-control review pass pending user approval; not public page content |
| V0.7 / V0.11 | 2026-08-31 | Full buyer-facing relationship, taxonomy, process, editorial, SEO, GEO and claim-safety revision | Historical review input; superseded by V0.8/V0.12 without deletion |
| V0.8 / V0.12 | 2026-08-31 | Directed PCR-01 revision: Footer `PROCUREMENT` synchronization and formal five-question/five-answer copy deck | Current Buyer-Facing Final candidate baseline |
| V0.8 / project-control directed review | 2026-08-31 | Project control independently verified both V0.12 assets, protected RAW hashes, Footer deltas, formal FAQ copy, PRODUCT V0.3 boundaries and document hygiene | `PRODUCT-G5-BUYER-FINAL-PCR-01 = PROJECT_CONTROL_REVIEW_PASS / CLOSED`; `PRODUCT-G5-BUYER-FINAL-01 = PROJECT_CONTROL_REVIEW_PASS_PENDING_USER_APPROVAL` |
