# CONV-SAMPLE Gate 7 Acceptance and Blockers V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `CONV-SAMPLE-G7-HANDOFF-01` |
| Review ID | `CONV-SAMPLE-G7-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Handoff | `NO` |
| Gate 8 / development | `LOCKED / NOT_AUTHORIZED` |

## 1. Gate 8 Implementation Contract

If separately authorized after Gate 7 approval, the CONV-SAMPLE implementation owner must:

1. implement `/request-sample/` under `site_scope=tio2-my`;
2. reproduce approved V0.5 Buyer Clean content, layout and states;
3. implement the exact fields, enums, conditional logic, validation and accessible errors;
4. bind a real verified receiver with persistence, positive receipt acknowledgement and idempotency/deduplication;
5. preserve entries across validation, failure and retry;
6. implement allowlisted Products/Grade/Applications/Markets prefill without inferred relationships;
7. render the exact Privacy notice/link and provide actual sample-request data-flow facts to the Legal/Privacy owner;
8. consume shared Global Chrome, production SVG and shared legal/consent components without local forks;
9. implement approved metadata, canonical and WebPage/BreadcrumbList Schema while leaving indexing inactive until authorized;
10. meet responsive and accessibility acceptance at all required widths and states;
11. produce implementation evidence for Gate 9 without exposing personal data.

Gate 8 must not create or modify another page, shared Header/Footer/Menu, shared Privacy Policy body, Cookie/CMP platform, product taxonomy or PRODUCT mapping.

## 2. Ownership Matrix

| Surface/dependency | Implementation owner | CONV-SAMPLE responsibility | Failure classification |
|---|---|---|---|
| `/request-sample/`, local form and state UI | CONV-SAMPLE Gate 8 | implement and verify | CONV-SAMPLE Gate 9/release blocker |
| Receiver, persistence, positive acknowledgement, idempotency | CONV-SAMPLE + verified operational receiver owner | integrate, document and verify | CONV-SAMPLE Gate 9/release blocker |
| Privacy Policy route/body | independent Legal/Privacy owner | render exact short notice/link; supply actual data-flow facts; consume readiness | Cross-page Gate 9/release blocker |
| Header/Footer/Mobile Menu and production logos | Global Chrome/Brand owner | consume shared components/assets; no fork | Shared release blocker |
| Shared legal links and Cookie/CMP/consent | Legal/Consent shared owner | consume and verify; no local implementation | Shared Gate 9/release blocker |
| Products/Grade/Application/Market upstream controls | respective page owners | validate/consume approved explicit inputs | Cross-page Gate 9/complete-site blocker |
| Request a Quote route used by Global Chrome | CONV-RFQ/shared Chrome owners | preserve shared link and consume readiness | Shared release blocker |

## 3. Gate 9 Read-only QA Matrix

| Area | Required evidence |
|---|---|
| Route and identity | Clean `/request-sample/`, one H1, correct page ID/site scope and no cross-scope fallback |
| Visual parity | Screenshot comparison at 1440, 768 and 390 plus Mobile Menu and critical states |
| Responsive | 1440, 1280, 1024, 768, 430, 390, 375 and 320px; no horizontal overflow |
| Fields | Exact order, labels, helpers, required/optional logic, enums and maximum handling |
| Unknown/Other | Unknown Grade submits; Other reveals required description; buyer text stays unclassified |
| Prefill | Valid explicit inputs render/edit/remove; invalid inputs clear; query canonical remains clean |
| Validation/a11y | Keyboard-only completion; labels, required semantics, errors, summary focus, described-by, visible focus and announcements |
| Submitting | Disabled repeat activation, busy state and no duplicate ordinary browser submission |
| Receiver success | Positive acknowledgement and persistence evidence before success; no client-only success |
| Failure/retry | Network, timeout, server and ambiguous responses retain values and retry safely |
| Idempotency | Duplicate attempt/retry evidence; one logical request does not create uncontrolled duplicates |
| Privacy | Exact notice, working `/privacy-policy/`, actual data-flow/policy parity and no forced checkbox |
| Claims | No free sample, stock, availability, quantity, timing, freight, shipping, dispatch, delivery or regulatory promise |
| PRODUCT | M-2377, Specialty Materials, Rubber, M-996/M-2196 and `NO_PUBLIC_MAPPING` restrictions verified in visible and machine output |
| SEO/GEO/Schema | Exact Title/Meta/H1/canonical candidate; WebPage + BreadcrumbList only; no query/PII leakage |
| Global Chrome | Shared Header/Footer/Menu, permanent RFQ and production logos; zero page-private fork |
| Security/data leakage | No form values in URL, logs visible to buyers, analytics labels, metadata or Schema; server rejects forged scope/recipient |
| Service unavailable | No success, invented fallback or hidden shared navigation |

Gate 9 findings are returned to the external implementation owner. D23 remains read-only and does not fix code.

## 4. Release Blockers

Any of the following blocks Gate 10 release:

- route or `site_scope` isolation failure;
- missing/broken receiver, persistence or positive acknowledgement;
- uncontrolled duplicate submission risk;
- missing/inaccurate Privacy Policy route or data-flow disclosure;
- failure to retain values on unconfirmed submission;
- accessibility blocker or page-level horizontal overflow;
- Global Chrome fork, missing RFQ or broken shared legal/Cookie dependency;
- cross-scope fallback or personal-data leakage;
- incorrect metadata, canonical, Schema or premature indexing;
- any prohibited sample, availability, quantity, logistics, regulatory or product-relation claim.

These are Gate 9/release blockers, not reasons to insert internal placeholders into Buyer Clean output.

## 5. Analytics and Sensitive-data Rule

No page-local analytics event is authorized by this package. If analytics is separately approved later, it must consume shared consent, distinguish attempt/failure from confirmed receipt and exclude every form value, Grade/Application/Destination selection, email, company, error value and free-text field.

## 6. Rollback and Failure-safe Behavior

- If the receiver becomes unavailable, enter the approved service-unavailable or submission-unconfirmed state; never show success.
- If a shared dependency is unavailable, record its owner and block release; do not clone, hide, disable, relink or replace it with Contact/email/phone.
- If a prefill source is invalid, discard the unsafe value and retain a neutral editable form.
- If metadata/canonical/Schema parity fails, disable indexing/release rather than publish a conflicting variant.
- Rollback must preserve `site_scope=tio2-my` isolation and the approved Gate 5 Buyer Clean baseline.

## 7. Project-control Decision Set

| ID | Decision requested |
|---|---|
| `S-G7-D01` | Authority chain and approved Gate 5/Gate 6 roots are complete. |
| `S-G7-D02` | Exact page/content/composition contract is implementation-ready. |
| `S-G7-D03` | Fields, enums, maximums, validation and prefill mapping are executable and minimal. |
| `S-G7-D04` | Receiver/persistence/idempotency response contract preserves receipt-only success. |
| `S-G7-D05` | Privacy and shared-owner responsibility is correctly separated. |
| `S-G7-D06` | PRODUCT V0.3 and prohibited-claim boundaries are complete. |
| `S-G7-D07` | SEO/GEO/Schema/canonical/indexing contract is executable. |
| `S-G7-D08` | Responsive/accessibility and state acceptance is sufficient for Gate 8/9. |
| `S-G7-D09` | Global Chrome and cross-page prefill dependencies have correct owners and no local fork. |
| `S-G7-D10` | `site_scope`, security, Gate 8 implementation, Gate 9 QA, release blockers and rollback are complete. |

## 8. Boundary

Gate 7 remains `NOT_APPROVED`. This package is not handed off and does not authorize Gate 8, development, testing, deployment, publication, DNS, indexing or any operation in `D:\16Wordpress_nextjs`.

