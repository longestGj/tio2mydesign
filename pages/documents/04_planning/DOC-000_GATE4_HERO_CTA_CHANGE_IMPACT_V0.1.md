# DOC-000 Gate 4 Hero CTA Change Impact V0.1

## 0. Control

| Field | Value |
|---|---|
| Decision ID | `DOC-000-G4-HERO-CTA-02` |
| Date | 2026-09-02 |
| Status | `USER_DECISION_RECORDED / TARGETED_OVERRIDE_ACTIVE` |
| Scope | Hero CTA copy and behavior only |

## 1. Conflict being resolved

The approved Gate 3 baseline contains the earlier Hero behavior:

- Content Architecture V0.8 lines 55–58: `Select a Product Grade`, scroll to Selector and focus the Grade field.
- Wireframe V0.6 line 44: Hero CTA targets the adjacent Selector.
- Responsive / Interaction Contract V0.2 line 22: Hero link uses an in-page anchor and focus transfer.

The user's later explicit decision `DOC-000-G4-HERO-CTA-02` supersedes those Hero-CTA-only statements for Gate 4 and all forward specifications. The Gate 3 files remain byte-preserved as the approved historical upstream; the conflict is not silently rewritten.

## 2. New forward authority

| Item | New authority |
|---|---|
| Hero CTA copy | `Start a Document Request` |
| Hero CTA destination | `/request-documents/` |
| Hero query | None |
| Hero interaction | Native accessible link; no Selector anchor/scroll/focus |
| Direct-entry Grade state | Unselected; no automatic default |

## 3. Unaffected Gate 3 decisions

- Selector remains directly after Hero.
- One dropdown retains all 14 Grades.
- Initial `Continue to Request Documents` stays visible and operable.
- Exact no-selection validation and focus return remain unchanged.
- Valid Grade-only handoff remains `/request-documents/?product={GRADE}` with editable receiver prefill.
- Closing CTA, four categories, six FAQ questions and shared Global Chrome remain unchanged.

## 4. Files affected in Gate 4

- Visual Direction V0.5.
- Desktop / Tablet / Mobile key visual assets.
- Hero / Selector CTA Interaction Contract V0.1.
- Gate 4 Validation V0.1.
- Gate 4 Project-Control Review Submission V0.2.
- Current Gate 4 Manifest V0.1.

Selector/FAQ state board and Global Chrome assembly proof require no pixel change.

## 5. SEO/GEO/Schema impact

No new file entity, availability relationship, structured `potentialAction` or Product-to-document relationship is created. SEO/GEO/Schema V0.6 remains unchanged. The direct link is a visible navigation relationship only.

## 6. Stage impact

The Hero CTA decision closes the targeted content hold and authorizes revision within Gate 4. It does not approve Gate 4 or authorize Gate 5, child pages, development, D16, deployment or publication.
