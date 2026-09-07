# RES-TRADE-EU · Search Intent Evidence Analysis V0.1

## Document Control

| Field | Value |
|---|---|
| Page ID | `RES-TRADE-EU` |
| Page | EU Titanium Dioxide Trade Update |
| URL | `/resources/eu-titanium-dioxide-anti-dumping-duty/` |
| Primary keyword | `eu titanium dioxide anti dumping duty` |
| Secondary keywords | `titanium dioxide import duty eu`; `titanium dioxide customs duty eu` |
| Market / language | European Union / English |
| Analysis date | 2026-09-06 |
| Method status | `METHOD_REPORT_COMPLETE` |
| Decision authority | Gate 1 Agent; this Skill report supplies observations and alternatives only |

## 1. Method and tools

The analysis used:

1. exact-phrase web search to observe result types around the target query;
2. expanded discovery restricted to EU official sources;
3. official-page retrieval for European Commission context;
4. download and visual inspection of the full Official Journal PDFs for Regulation (EU) 2025/4 and Notice C/2026/4533;
5. a raw-evidence index with bytes, SHA-256 values, capture dates, authority and usable scope.

No authenticated Google ranking dataset, Google Search Console, Google Ads Keyword Planner or Semrush dataset was available in this run. Search volume, keyword difficulty, CPC and trend are `Unavailable`, not zero. The displayed web-search set is not represented as a stable Google ranking.

## 2. Search observations

### 2.1 Exact-query result mix

The exact query returned a mixed set of:

- official or government references to the EU measure;
- current procedural updates;
- trade press and industry interpretation;
- supplier commentary;
- avoidance- or circumvention-adjacent commentary unsuitable for buyer guidance.

The mix indicates that a useful page must resolve current status and scope from primary sources, not repeat snippets or news summaries.

### 2.2 Official-source pattern

The authoritative source chain is:

1. Regulation (EU) 2025/4 for the definitive measure, rates, product and origin scope, company categories, invoice condition, exemption and entry into force;
2. Notice C/2026/4533 for the reopening and status of the absorption reinvestigation;
3. European Commission trade-defence and importing guidance to explain that anti-dumping, ordinary customs tariff and VAT are separate questions;
4. current TARIC or Access2Markets checks at transaction time, without asserting a transaction-specific result in Gate 1.

### 2.3 Current-status observation

Regulation (EU) 2025/4 remains the current definitive measure. Notice C/2026/4533 reopens an absorption reinvestigation and identifies those measures as in force. It creates a process that could change the duty later; it does not itself replace the current fixed EUR/kg duty table.

## 3. Intent hypotheses

### H1 — Current legal and operational status (`strongest support`)

The reader wants to know what EU anti-dumping measure currently applies to titanium dioxide, when it took effect, which product/origin/company scope it covers and whether a later proceeding has changed it.

### H2 — Import-cost and customs preparation (`strong support`)

The reader wants the duty unit and producer-group categories, plus the inputs needed for a compliant customs check: origin, classification, producer/additional code, commercial invoice and end-use condition.

### H3 — General TiO2 supplier selection (`secondary / owned elsewhere`)

Some readers may ultimately be sourcing titanium dioxide for the EU. Detailed supplier and procurement evaluation belongs to `MARKET-EU-001`, not this policy-update page.

### H4 — Duty avoidance (`rejected`)

The page must not serve avoidance, circumvention, transshipment or reclassification tactics. Those result types are excluded rather than converted into page advice.

## 4. Reader and question leads

Likely readers are EU procurement, import, compliance and technical-sourcing teams. The Gate 1 Agent should decide how the page answers these tasks:

- What is the current EU measure, and from what date is it effective?
- What TiO2 product definition and CN/TARIC codes does the regulation state?
- Which origin does the measure cover?
- What fixed EUR/kg amounts apply to which producer categories?
- What valid-invoice condition affects the individual category rate?
- What is the conditional white-graphic-ink end-use exemption?
- What did the 25 August 2026 notice reopen?
- Does the reopening change today's rate, or only create a possible future change?
- Which information must an importer verify for a transaction?
- How are anti-dumping duty, ordinary customs duty and import VAT different?
- Where can a buyer continue into EU procurement rather than legal-status research?

## 5. Evidence quality and freshness observations

- The decisive sources are official and current as checked on 2026-09-06.
- Because an absorption reinvestigation is active, a maximum 30-day internal recheck interval plus event-triggered review within two business days is appropriate.
- Event triggers include a Commission or EUR-Lex notice, amendment, reinvestigation result, court judgment or TARIC change affecting the page's stated measure.
- The buyer-facing page should show a plain-language `Last reviewed` date and link to controlling official sources.
- If freshness expires, stale rates or procedural status should not continue feeding Hub cards, GEO answers or Schema as current facts.

## 6. Boundaries and limitations

- `Malaysia-origin titanium dioxide` is an approved marketing fact, but it does not itself determine the customs origin or anti-dumping result of a particular shipment.
- No ordinary customs-duty rate, destination-specific VAT rate or shipment-specific origin conclusion was verified here.
- The page must distinguish the PRC-origin scope written in the legal measure from any marketing-origin statement.
- This analysis does not provide legal advice.
- Search metrics and authenticated local rank observations remain unavailable.

## 7. Agent handoff

1. **Report path:** `pages/resources/eu-trade/01_research/RES-TRADE-EU_SEARCH_INTENT_EVIDENCE_V0.1.md`
2. **Evidence-led summary:** the strongest supported task is a dated, official-source explanation of the current definitive PRC-origin TiO2 anti-dumping measure and the still-pending 2026 absorption reinvestigation, followed by a compliance-check list and a separate path to EU procurement.
3. **Unfinished / Agent decision required:** choose the final page promise, module boundary and CTA hierarchy; decide which supported claims enter the Gate 1 claim set; record search metrics as unavailable; do not infer transaction-specific customs results.
