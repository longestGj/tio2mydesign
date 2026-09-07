# Reusable SOP — Raw-First B2B Keyword Research (Revision 1)

## Scope

Perform evidence-backed keyword research only. Stop before page planning, copywriting, code or deployment. Preserve the approved first-level architecture.

## 1. Append-only evidence

Save every online/tool response completely under a new dated raw batch before analysis. Include query, market, language, date, method, limitations, file list, byte sizes and SHA-256. Never overwrite earlier raw evidence. A pending batch is ineligible until a finalized manifest marks it COMPLETE and YES.

## 2. Source priority

Use exact-market Semrush for metrics; live SERPs for intent/page-type evidence; official government/legal sources for trade and compliance; manufacturer/distributor sources only for vocabulary and product context; the project brief for scope/seeds, not demand proof.

## 3. Local-only processing

Parse Semrush and SERP outputs into `processed/`. Every selected keyword must cite a registered source ID. Browser/tool memory is never a final source. Preserve Semrush raw intent in notes while classifying final intent with one required code: T, C, I, N or M.

## 4. Primary Cluster and off-scope handling

Primary Cluster must be exactly one of ORIGIN, MARKET, PRODUCT, APPLICATION, COMPLIANCE, TRADE, COMPARISON, RESOURCE or BRAND. Off-scope terms retain the nearest allowed Primary Cluster, `OFF_SCOPE` in secondary_cluster/notes, and `DO_NOT_TARGET`.

## 5. Commercial and competitor expansion

Search quote, quotation, sample, bulk, buy, wholesaler, distributor, sourcing, replacement, equivalent and grade-alternative structures directly. Save the unfiltered top results before selection. Cover brief-listed brands and common grade queries. SERP evidence never authorizes equivalence or replacement claims; require TDS, application tests and human technical/legal review.

## 6. Top-10 SERP rule

For each core/high-priority query, retain exactly the first ten captured result rows where accessible: rank, title, domain, URL, page type, entity role, market/country relevance and observation. Store the source ID in the observation or an explicit source field. If fewer than ten are accessible, mark the query incomplete in QA; do not claim SERP completion.

## 7. Missing metrics

Never infer Volume, KD, CPC or trend from SERP presence. Use **Unavailable**. Preserve measured zero as 0. Do not calculate a complete cluster volume when any member is unavailable.

## 8. Auditable priority scoring

Apply the brief weights: 30% commercial intent, 25% strategic relevance, 20% market relevance, 15% search demand and 10% feasibility. Recommended component mapping:

- Intent: T=5, C=4.5, M=3.5, N=2.5, I=1.5.
- Market: target market/country=5; GLOBAL=3.
- Demand: ≥100=5, 20–99=4, 1–19=2.5, measured zero=1, Unavailable=0.
- Feasibility: KD ≤14=5, 15–29=4, 30–49=3, 50–69=2, ≥70=1, Unavailable=0.

Calculate total = component/5 × weight. Tiers: P0 ≥80, P1 ≥70, P2 ≥58, P3 ≥45, P4 <45, EXCLUDE for DO_NOT_TARGET. Record component values and weighted total in notes. Do not impute missing demand or KD.

## 9. Clustering and architecture

One cluster represents one core intent, not one keyword/page. Map to existing architecture. New page candidates remain PENDING_HUMAN_REVIEW. Quote/sample/bulk modifiers generally strengthen existing product and conversion surfaces rather than justify separate pages.

## 10. Final QA and revision loop

Validate schemas, intent and Primary Cluster enums, source IDs, duplicates, top-10 counts, priority audit text, raw hashes and actual row counts. Update summary, QA and machine verification after every revision. Explicitly list partial evidence and unfinished regulatory work. Stop at Keyword Research Review.
