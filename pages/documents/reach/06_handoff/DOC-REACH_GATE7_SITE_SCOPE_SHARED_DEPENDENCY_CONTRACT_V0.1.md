# DOC-REACH Gate 7 Site-Scope and Shared-Dependency Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Package ID | `DOC-REACH-G7-HANDOFF-01` |
| Required site scope | `tio2-my` |
| Gate 8–10 | `NOT_AUTHORIZED` |

## 1. Scope isolation

Every page, WordPress record, CMS query, API response, server render, route lookup, cache key, revalidation tag, metadata lookup, Schema graph, media lookup and request integration must include or derive exactly `site_scope=tio2-my`.

Required negative behavior:

- missing scope does not return a TIOVAR or other-site DOC-REACH record;
- wrong scope does not return Malaysia content;
- an empty Malaysia field does not fall back to another scope or historical record;
- a stale cache entry cannot cross scopes;
- preview and production route resolution preserve the same scope identity;
- error handling does not silently substitute another site's Header, Footer, Logo, content, metadata or form.

## 2. Shared dependencies

| Dependency | Authority / required behavior | Page-owned input |
|---|---|---|
| Global Chrome | `GLOBAL_HEADER_FOOTER_SPEC_V0.5.md` | current navigation key `Documents` |
| Production Logo | `PRODUCTION_SVG_LOGO_MANIFEST_V1.0.md` | none; consume approved keys |
| Footer legal utilities | `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md` | none |
| Consent / Cookie Settings | shared Legal/Consent authority | none |
| Documents Hub | DOC-000 current authority | eligible `/documents/` relationship only |
| EU Market | MARKET-EU-001 current route/content authority | eligible related card only |
| Request Documents | CONV-DOC Gate 7 contract + current Gate 9 state | semantic request context only |
| RFQ | shared Global Chrome / CONV-RFQ owner | no DOC-REACH fallback behavior |

DOC-REACH may not fork, duplicate or locally override shared owner behavior.

## 3. Dependency readiness rules

### Documents Hub

Render the Hub links only when `/documents/` resolves to the approved Malaysia Hub with correct Canonical and no scope fallback. Because the complete website plans this route, Gate 5 may show it; runtime release still requires proof.

### European Union Market

Render the related EU card only when `/markets/european-union/` is approved, eligible and returns the Malaysia page/Canonical. Omission is preferred to a 404, wrong-scope or stale destination.

### Request Documents

The primary action is eligible only when the Malaysia CONV-DOC page, field contract, route parser, privacy/data flow, receiver configuration and failure behavior are all ready for the release environment. Eligibility is one shared state for visible action and machine relation.

### Legal and consent

Privacy EN/BM, Cookie Policy and Cookie Settings are shared website dependencies. DOC-REACH does not duplicate their text or consent mechanics. A missing required legal/consent dependency is a release blocker, not permission to insert an internal placeholder.

## 4. Cache and fallback acceptance

Gate 8 tests must prove:

1. correct `tio2-my` page and metadata resolve;
2. wrong and missing scopes fail safely;
3. query/prefill variants share the clean scoped page Canonical without poisoning caches;
4. receiver-eligible and receiver-ineligible representations do not share stale action/Schema cache state;
5. source freshness changes invalidate visible and machine-readable derivatives together;
6. no route or API reads from TIOVAR or another project as fallback.
7. no cross-scope fallback.

## 5. Evidence and current-answer dependency

The current answer decision comes from the Evidence Gap User Decision Register and page decision record. Gate 8 must not revive historical blocker wording or the excluded EG-006 proposition. If future evidence changes the decision, D23 change control must issue a new content authority before implementation changes.

## 6. Release ownership

Gate 7 specifies expected behavior only. The external D16 project owns technical architecture, implementation and tests after Gate 8 authorization. D23 later performs Gate 9 read-only QA and cannot repair implementation. Gate 10 separately controls deployment, DNS, publication and indexing.
