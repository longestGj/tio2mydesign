# APP-MB Article-to-Application-Page Design Specification

## 0. Control

| Field | Value |
|---|---|
| Page ID | `APP-MB` |
| Page name | `TiO2 for Masterbatch` |
| Registered URL | `/applications/titanium-dioxide-for-masterbatch/` (`PROVISIONAL_URL`) |
| Page type | Application landing page |
| Selected approach | `APPLICATION LANDING PAGE + DEPTH ARTICLE` |
| Decision date | `2026-09-06` |
| Decision source | User approved the proposed direction and instructed the Controller to proceed under the project Gate 1–9 workflow |
| Current status | `DESIGN DIRECTION USER-APPROVED / GATE 1 ADMISSION` |
| Site scope | `tio2-my` |
| Publication status | `NOT_PUBLISHED` |

This specification records how the governed Masterbatch article will be converted into the APP-MB buyer-facing page. It authorizes Gate 1 work only. It does not approve the current full article copy, close Gate 1, authorize Gate 2–9, modify `D:\16Wordpress_nextjs`, or authorize development, deployment, publication, DNS or indexing.

## 1. Decision

APP-MB will be a complete Application landing page, not a blog post and not a raw rich-text rendering of the source article.

The article is the long-form evidence and explanation input. Project control owns its conversion into:

- Page Intent Card and buyer journey;
- Buyer Clean page copy;
- semantic module and HTML contract;
- CTA, prefill and internal-link contract;
- SEO, GEO and Schema contract;
- Desktop, Tablet and Mobile presentation;
- WordPress/Next.js development handoff specification;
- post-development read-only QA.

`00-Con-masterbatch` remains responsible for the governed article package and requested editorial corrections. The external development project remains responsible for CMS, WordPress, Next.js, component, style and test implementation.

## 2. Approaches considered

| Approach | Disposition | Reason |
|---|---|---|
| Raw article page | Rejected | Preserves prose but produces a long text wall, weakens application-page conversion, and cannot express decision tools or responsive transformations well |
| Existing template field fill | Rejected as the complete solution | Existing Site A Application fields provide a useful reference, but a direct field fill would inherit the wrong site identity and over-compress tables, workflows, evidence boundaries and source handling into generic rich text |
| Application landing page + depth article | `USER APPROVED` | Preserves the article's evidence-led value while turning it into a scannable technical evaluation and procurement path |

## 3. Source baseline

### 3.1 Current revised article candidate

| Artifact | Path | SHA-256 | Current use |
|---|---|---|---|
| Revised article | `D:\22文案写作分析\projects\titanium-dioxide-for-masterbatch\a05-editing-production\run-03-rqr-reader-quality-v1\article-edited.md` | `d6b21f1cf1e5f5e4e32d943776de2e114d895d62d0dee345c9cc56049d83f8ab` | Gate 1 research/content input; not yet user-approved full page copy |
| RQR decision | `D:\22文案写作分析\projects\titanium-dioxide-for-masterbatch\a06-rqr-production\run-02-corrected-v1-primary\rqr-primary-decision.md` | `8f7ea4f2d1bfec8b57a31c345e2e9dcb7ed09467e39eedbd295040b150393444` | Reader-quality review evidence |
| Final review | `D:\22文案写作分析\projects\titanium-dioxide-for-masterbatch\a00-final-review\run-01-rqr-ready-exact-package\final-review-decision.md` | `4bb44598aa0a1d7962a6d788ff20cec00ef383f6793ca0e000d33659c25d202a` | `ACCEPTED_WITH_NOTES`; Gate 1 input only |
| Controller closure | `D:\22文案写作分析\projects\titanium-dioxide-for-masterbatch\a00-final-review\run-01-rqr-ready-exact-package\controller-closure.md` | `532da59e37ed44535c47e77d498ea6f445bab40a4bbfcdf6e1d4995745db0f8` | Internal release-candidate status; not publication approval |

The earlier D23 acceptance record remains historical authority for the earlier A06 candidate. It does not silently control this revised article.

### 3.2 Required pre-Gate-2 corrections

The revised article may be researched in Gate 1, but the following items must be corrected or explicitly dispositioned before Gate 2 full-copy approval:

1. Replace the buyer-visible statement that no own-grade documents are available with buyer-centered document verification wording. A research-package evidence boundary must not be rendered as a company-wide absence claim.
2. Split the mixed citation paragraph so the ISO comparison boundary cites the ISO source and the morphology/study observation cites the LLDPE study.
3. Rewrite the economics close as a conditional buyer decision, avoiding the internal phrase `both absent here`.

## 4. Page identity and ownership

- Primary keyword: `titanium dioxide for masterbatch`.
- Secondary keywords: `tio2 for masterbatch`; `masterbatch grade titanium dioxide`; `titanium dioxide masterbatch pigment`.
- Search intent: Commercial / technical evaluation and supplier search.
- Buyer stage: Technical Evaluation / Supplier Search.
- Ownership: the generic Masterbatch use case and the technical evaluation path for TiO2 as a pigment input.
- Exclusions: exact Grade primary terms, country-supplier primary terms and chloride/sulfate process-category primary terms.
- Product identity boundary: TiO2 is a pigment input; the page must not describe TiO2 Malaysia as a finished masterbatch supplier.
- URL remains provisional until separately approved. The current path must not be treated as a live route, Canonical, sitemap or Schema URL merely because it is registered.

## 5. Article-to-page transformation

The article's nine H2 sections and source notes will be transformed by buyer decision rather than copied one-to-one as equal rich-text blocks.

| Order | Page module | Article input | Buyer decision | Preferred semantic form |
|---:|---|---|---|---|
| 1 | Breadcrumb | Page identity | Where am I? | `nav[aria-label=Breadcrumb]` |
| 2 | Hero | Title and opening decision | Is this page relevant to my Masterbatch evaluation? | `header` with one `h1`, direct answer and CTA |
| 3 | On-page navigation | Full article outline | Where can I find the answer I need? | anchor `nav` |
| 4 | Two-stage evaluation system | `The two-stage system behind a pigment evaluation` | Which variables belong to concentrate preparation and which belong to final let-down? | two-stage diagram plus declaration checklist |
| 5 | Fair comparison basis | `A fair comparison starts with the method` | Are two candidates being compared under an equivalent method and endpoint? | semantic comparison checklist/table |
| 6 | Evidence interpretation | `What complementary observations contribute` | What can flow, FPV, microscopy and final-specimen tests each establish? | four evidence cards plus limits |
| 7 | Processing/end-use boundary | `Where processing evidence ends...` | What still needs final-use verification? | prominent answer block / `aside` |
| 8 | Document checklist | `What the documents can answer` | Which document supports which decision and what still requires testing? | document-role matrix and controlled request CTA |
| 9 | Qualification workflow | `From evidence to a bounded qualification decision` | What is the next defensible qualification step? | ordered stepper and hold/progress outcomes |
| 10 | Grades to Review | Current approved product-application relation baseline | Which TiO2 Malaysia Grades may enter a neutral technical review? | unranked product cards/links, conditional on approved/live Grade routes |
| 11 | Economics at equal qualification | `Economics at an equal qualified endpoint` | When is an economic comparison meaningful? | concise decision note, not a savings claim |
| 12 | Focused qualification inquiry | `A focused qualification inquiry` | What information should I submit for a useful discussion? | CTA panel with explicit editable prefill contract |
| 13 | Buyer questions | Questions distilled from visible content | Can I retrieve a short answer without losing the evidence boundary? | disclosure list; Schema eligibility reviewed separately |
| 14 | Source notes | Article source notes | Where did the cited method and study statements come from? | accessible ordered references with backlink anchors |

Shared Global Header and Footer wrap the page but remain owned by Global Chrome.

## 6. Semantic HTML and content-model contract

The Gate 7 contract must express the page as structured content, not one opaque HTML blob. The minimum semantic hierarchy is:

```html
<main id="app-masterbatch">
  <nav aria-label="Breadcrumb">...</nav>
  <article>
    <header>...</header>
    <nav aria-label="On this page">...</nav>
    <section id="evaluation-system">...</section>
    <section id="comparison-basis">...</section>
    <section id="evidence-interpretation">...</section>
    <aside id="evaluation-boundary">...</aside>
    <section id="documents">...</section>
    <section id="qualification-workflow">...</section>
    <section id="grades-to-review">...</section>
    <section id="economics">...</section>
    <section id="qualification-inquiry">...</section>
    <section id="buyer-questions">...</section>
    <footer id="sources">...</footer>
  </article>
</main>
```

Exact CMS field types and Next.js components are Gate 7 development-interface decisions. D23 specifies required content, behavior, conditional rendering and acceptance criteria; D16 chooses and implements the technical mechanism under `site_scope=tio2-my` with no cross-scope fallback.

## 7. Grade relationship control

The current authoritative product relation input is `PRODUCT_GRADE_APPLICATION_PROCESS_MATRIX_V0.3.csv`, SHA-256 `8465e231545d3efc6333ec593441eef65e95173a4708097cec0d7a97a014e406`.

Its current neutral Masterbatch review set is:

`M-510`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-2377`.

The set is unranked. It does not establish best fit, recommendation, equivalence, availability, supply, performance or final-system qualification.

The older Applications Playbook M-2377 freeze is superseded for this relationship by the later user-confirmed Product V0.3 evidence decision. Gate 1 must document that authority chain explicitly; the Playbook itself must not be silently overwritten.

## 8. Gate 1–9 operating sequence

| Gate | APP-MB objective | Controller deliverable | Approval boundary |
|---:|---|---|---|
| 1 | Lock intent, buyer questions, keyword ownership and evidence limits | Page Brief, Page Intent Card, keyword/cannibalization audit, claim-evidence register, article input audit, grade-relation authority audit | User confirms actual content intent; `CONTENT_INTENT_CONFIRMED` |
| 2 | Lock Buyer Clean copy and content model | Content skeleton first; then complete real copy, tables, CTAs, internal links, SEO/GEO/Schema and conditions | User confirms full copy and module order; `FULL_COPY_AND_MODULE_ORDER_CONFIRMED` |
| 3 | Prove responsive structure | 1440, 768 and 390 wireframes using real copy; Mobile Menu and required states | Gate 3 approval only |
| 4 | Lock visual language | Application-page visual direction, diagrams, cards, tables, focus/error/empty rules and media boundaries | Gate 4 approval only |
| 5 | Prove complete intended experience | Full Buyer Clean 1440/768/390 designs, Mobile Menu, important states and one current Gate 1–5 Manifest | Gate 5 approval only; no development authorization |
| 6 | Independent project-control review | Blocking/important/advisory findings against Brief, evidence, copy, visual, SEO/GEO and accessibility | Total-control pass required before handoff |
| 7 | Freeze developer-executable contract | Page data, fields, semantic modules, conditional rules, route dependencies, CTA prefill, SEO/Schema, asset and QA acceptance contract | Separate handoff approval; no code in D23 |
| 8 | External development | D16 implements WordPress/Next.js/CMS and tests under its own governance | User/development authorization required; D23 does not code |
| 9 | Read-only quality acceptance | Visual, content, responsive, route, metadata, internal-link, Schema, GEO and accessibility evidence | Issues go back to D16; passing Gate 9 is not publication |

## 9. Gate-by-Gate interaction rule

- No Gate is auto-approved by approval of this design direction.
- Each user decision must show the actual copy, fields, modules or visual under review, the delta from the previous version, affected surfaces, remaining risks, the Controller recommendation and the next authorized action.
- The user is not asked to approve by filename or Review ID alone.
- Material copy changes after Gate 2 reopen only the affected content/SEO/GEO/visual surfaces; approved history remains preserved.
- Gate 8 and Gate 9 may iterate until implementation findings close, but Gate 10 remains outside this design and requires separate release authorization.

## 10. Buyer Clean rules

- No internal research-package, evidence-gap, review, Gate, blocker, pending-copy or release-status language enters visible HTML.
- Missing evidence becomes a concrete buyer action or a conditional rendering rule, not a self-discrediting statement.
- Limitations appear once, where they help the buyer interpret evidence or choose the next step.
- No raw source comments or statement IDs are rendered.
- References remain accessible and traceable without overwhelming the main decision path.
- Tables transform into labeled cards on narrow screens when necessary; relationships must remain explicit and no horizontal page overflow is allowed.

## 11. Current open items

| ID | Item | Gate effect | Current control |
|---|---|---|---|
| APP-MB-O01 | Revised article has three pre-Gate-2 editorial issues | Does not block Gate 1; blocks full-copy approval | Correct through governed D22 revision or explicit D23 disposition |
| APP-MB-O02 | APP-MB URL remains provisional | Does not block research; blocks final route/Canonical/Schema contract | Keep Page ID/route key authoritative until URL approval |
| APP-MB-O03 | Grade routes and related Documents/RFQ routes may not yet be approved/live | Does not block complete-site page planning; blocks Gate 7/9 release readiness | Register as Gate 7 dependencies and verify in Gate 9 |
| APP-MB-O04 | Application Playbook contains an older M-2377 freeze | Requires authority-chain record in Gate 1 | Use later user-confirmed Product V0.3 relation baseline without rewriting history |
| APP-MB-O05 | Revised full page copy is not user-approved | Blocks Gate 2 closure | Present actual Buyer Clean copy in Gate 2 |

## 12. Acceptance boundary

This specification records the user-approved page approach and opens Gate 1 admission. It does not claim that Gate 1 research is complete. The next user-facing decision is the APP-MB Gate 1 Page Intent Card and research/evidence summary, not an HTML implementation or a Gate 2 copy approval.
