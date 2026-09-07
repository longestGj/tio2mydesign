# APP-INK Gate 2 Full Copy Revision Response V0.1

## 1. Control

| Field | Value |
|---|---|
| Page ID | `APP-INK` |
| Date | `2026-09-07` |
| Review | `APP-INK-G2-BR-01` |
| Review SHA-256 | `935445855CFFE928FA9E0F02C2569BEFF98A7132470AFF2E349D61524C523736` |
| Findings | `APP-INK-G2-BR-F01`–`F04` |
| A decision | Retain V0.1; no structural change |
| B decision | Create V0.2; source identity/title, ISO predicate, Grade introduction and cost sentence revised |
| C decision | Create V0.2; stable source identity/title and ISO 1524 predicate updated |
| Gate effect | None; Gate 2 remains open |

## 2. Finding responses

### F01 — source identity and exact ISO title

**B Source 1 before**

> Tomerlin, Banić, Mahović Poljaček and Anić.

**B Source 1 after**

> Renata Tomerlin, Dean Valdec, Mario Tomiša and Damir Vusić.

The four authors now match the linked MDPI article. C `INK-G2-C02` records the same source identity. The existing article link, 2023 date precision and bounded use are unchanged.

**B Source 3 before**

> Graphic technology — Laboratory preparation test prints — Part 2: Liquid printing inks

**B Source 3 after**

> Graphic technology — Laboratory preparation of test prints — Part 2: Liquid printing inks

The official title is reproduced exactly, including `of`. C `INK-G2-C07` now locks the same exact title. The ISO destination and substantive scope are unchanged.

**Acceptance check:** PASS. All six source notes identify the linked source accurately; no new result, Grade predicate or publication-date claim was added.

### F02 — ISO 1524 predicate

**Before**

> A gauge result reports the largest particles or agglomerates detected under that method.

**After**

> A fineness-of-grind gauge reading is taken under specified conditions at the groove depth where discrete solid particles become readily discernible.

The unsupported `largest particles or agglomerates` interpretation was removed. The adjacent limits remain: the reading is not primary particle size, a complete particle-size distribution, or proof of nozzle, screen or filtration performance. C `INK-G2-C05` carries the same stable predicate and public-definition boundary.

**Acceptance check:** PASS. B and C stay within the official gauge/discrete-solid-particle predicate and reproduce no procedure or threshold.

### F03 — natural Grade use

**Before**

> These current TiO2 Malaysia Grade pages are equal starting points for a Printing Inks review. Their inclusion does not establish suitability, availability, equivalence, comparative performance or acceptance in your system.

> Open the Grade page for a candidate you are considering, or compare the relevant pages if you have several candidates. Keep each candidate's documents and trial results separate. If you do not know the Grade, continue with your ink system and the context you already have.

**After**

> Open the Grade page for a candidate you are considering and review its public information against your defined ink and print system. If you have several candidates, compare the relevant pages and keep each candidate's documents and trial results separate. The order is not a ranking; determine fit from evidence in your own system and your stated acceptance requirements. If you do not know the Grade, continue with your ink system and the context you already have.

The relationship-governance explanation was removed. The revised sentence tells the buyer how to use one or several links and keeps the unknown-Grade path. All four rows remain in the same order. No Grade fact, process label, recommendation or application result was added; C's stable relationship contract did not change for F03.

**Acceptance check:** PASS. Buyer language is action-led; one, several and unknown-Grade paths remain; all four relationships remain neutral.

### F04 — cost comparison object

**Before**

> Price per kilogram, nominal TiO2 content and ink loading create a meaningful comparison only when the incumbent and candidate printing inks reach the same accepted technical endpoint in the declared print and finished result.

**After**

> Price per kilogram, nominal TiO2 content and ink loading form a meaningful cost comparison only after both the incumbent and candidate inks reach the same accepted endpoint in the declared printed output.

The overlapping `print and finished result` objects were replaced by one clear comparison object. The common accepted-endpoint prerequisite remains; no price, saving, performance or winner claim was added. C `INK-G2-C08` already expressed this stable meaning and required no semantic change for F04.

**Acceptance check:** PASS. The sentence reads naturally and conditions the comparison on both inks reaching the same accepted printed-output endpoint.

## 3. Adjacent and full-page regression

| Check | Result |
|---|---|
| B version diff | Header version plus only the F01–F04 target text changed |
| A structure | V0.1 retained; SHA unchanged |
| Module structure | One visible H1 and ten H2 sections; eleven modules including Hero |
| Sources | Six remain; destinations, dates and bounded uses unchanged except the required identity/title/predicate corrections |
| Grade rows | Four remain in order: M-350, M-510, M-52, M-2377 |
| M-2377 boundary | No process field or process classification renders |
| Grade paths | One, several and unknown Grade remain; no rank, recommendation, equivalence, performance or availability fact |
| Technical sequence | Evaluation, matched trial and accepted-endpoint economics remain before Grade review; actions remain after it |
| CTA contracts | Documents, Sample and RFQ wording and outcomes unchanged |
| RFQ incomplete path | `Not sure / Need help`, required or estimated MT, destination and `Additional Requirements` remain |
| Meta / SEO / Schema | Unchanged |
| Private/internal content | No Gate, readiness, internal SOP, evidence ID or private article comment in Buyer Copy |

## 4. Handoff

F01–F04 are `REVISED / PENDING_INDEPENDENT_REREVIEW`. Independent Review should verify the actual B V0.2 and C V0.2 against each acceptance condition and complete an adjacent six-source, four-Grade, M-2377, CTA and Meta rereview.

This response does not approve Gate 2, authorize Gate 3, start APP-PAPER or authorize development or publication.
