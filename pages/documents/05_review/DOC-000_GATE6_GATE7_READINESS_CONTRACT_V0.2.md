# DOC-000 Gate 6 — Gate 7 Readiness Contract V0.2

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Review ID | `DOC-000-G6-PCR-02` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Purpose | Define future Gate 7 inputs without authorizing handoff or implementation |
| Sole page-owned sources | Normalized Brief V0.6, then Content Architecture V0.9 |
| Development project | `D:\16Wordpress_nextjs` — not accessed or modified |
| Gate 7 | `NOT_AUTHORIZED` |

## 1. Content entity and isolation

Future delivery treats DOC-000 as a site-scoped singleton:

| Field | Required rule |
|---|---|
| `site_scope` | exact `tio2-my`; required for content, menu, media, route, form, SEO, schema and cache lookups |
| `page_id` | `DOC-000` |
| `route` | `/documents/` |
| `locale` | `en` |
| `page_type` | `navigation_hub` |
| `primary_keyword` | `NO_PRIMARY_KEYWORD`; governance only |
| `current_navigation_key` | `Documents`; passed to shared Chrome only |

No query may fall back to TIOVAR, another `site_scope`, a global default post, menu, media item, SEO record, schema payload or cached response. Missing Malaysia content fails closed.

## 2. Current-source consumption rule

Gate 7 reads exactly:

1. `DOC-000_DOCUMENTS_COMPLIANCE_BRIEF_V0.6.md` for page contract;
2. `DOC-000_CONTENT_ARCHITECTURE_V0.9.md` for exact complete visible copy and interaction.

It must not merge Brief V0.5, Content V0.8, separate Hero override text, SEO V0.6 or Documents Playbook V0.3 to reconstruct current behavior. Historical files remain traceability evidence only.

## 3. CMS/API fields

| Group | Field | Cardinality / rule |
|---|---|---|
| Hero | eyebrow, h1, body, language_note | exact normalized copy |
| Hero | cta_label | `Start a Document Request` |
| Hero | cta_route_key | `REQUEST_DOCUMENTS` → `/request-documents/`; no query |
| Hero | media_asset | optional evidence-neutral asset; omit cleanly when missing |
| Selector | heading, body, label, prompt, helper, error, selected_message | exact normalized copy |
| Selector | grade_options | ordered identifiers / exactly 14 |
| Selector | continue_label | `Continue to Request Documents` |
| Selector | products_help_label / products_route_key | approved sentence / `PRODUCTS_HUB` → `/products/` |
| Steps | how_it_works | ordered objects / exactly 3 |
| Scenarios | review_scenarios | ordered objects / exactly 3; no CTA/status |
| Categories | document_categories | ordered objects / exactly 4; no route/count/status |
| Info band | why_on_request_heading/body | exact normalized copy |
| FAQ | faq_items | ordered objects / exactly 6 |
| Closing | eyebrow, heading, body, no-selection label, selected label | exact normalized state copy |
| SEO | title, description, canonical path, robots, locale | Gate 6 SEO contract |
| Schema | faq_schema_eligible | boolean, default false; parity-gated |

No field represents file inventory, filename, revision, date, language coverage, availability, approval, download, certification, registration, market coverage or Grade-to-file applicability.

## 4. SEO and social delivery fields

| Delivery field | Source / rule |
|---|---|
| `seo_title` | approved SEO title |
| `meta_description` | approved Meta description |
| `canonical_url` | verified production canonical only |
| `robots` | `index,follow` only after release checks |
| `og:title` | derived from `seo_title`; no separate drifting copy |
| `og:description` | derived from `meta_description`; no separate drifting copy |
| `og:url` | derived from verified `canonical_url` |
| `og:type` | `website` |
| `twitter:title` | derived from `seo_title` |
| `twitter:description` | derived from `meta_description` |
| `social_image_asset_key` | optional; only an approved shared-owner key for `tio2-my` |

No factual social image is approved. If the shared owner has not supplied an approved key, omit social image tags and retain a Gate 8/9 acceptance item. Never fall back to another scope, preview media, a guessed file or a fact-bearing image.

## 5. Grade source, routes and prefill

Allowlist: `M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

| Entry | Required result |
|---|---|
| Hero | `/request-documents/`; no query; receiver Grade unselected |
| Selector without Grade | no navigation; exact error; focus select |
| Selector with valid Grade | `/request-documents/?product={url-encoded allowlisted Grade}` |
| Closing without Grade | focus upper select; no navigation |
| Closing with valid Grade | same Grade-only handoff |
| Explore Products | `/products/`; no suitability inference |

Unsupported, empty, repeated or malformed `product` values fail closed to an unselected editable field. DOC-000 passes no other request context.

## 6. Initial DOM and accessible behavior

- H1, Hero content, selector labels/options, all module content, six FAQ pairs and real links are in initial HTML/DOM.
- Hero and Explore Products are native links.
- Selector Continue and Closing no-selection actions are buttons.
- FAQ questions use stable disclosure relationships; answers remain in DOM; default is all collapsed and only one expands at a time.
- Hydration does not replace content with empty shells.
- JavaScript failure leaves native links usable and never permits unvalidated selector navigation.

## 7. Fail-closed rules

| Missing/invalid input | Public behavior |
|---|---|
| Hero media | omit/collapse; no placeholder or fact-bearing fallback |
| Grade list not exactly valid | do not expose partial/foreign data; block release |
| Request route unresolved | block release; do not redirect to Contact or RFQ |
| Products route unresolved | omit assistance link atomically; block dead link |
| Scenario/category cardinality invalid | omit invalid object and block release until 3/4 restored |
| FAQ answer missing | omit FAQ Schema and block release until six pairs restored |
| Canonical unresolved | omit unverified canonical/`og:url` in preview; block release |
| Social image key unresolved | omit image tags; no cross-scope fallback; verify at Gate 8/9 |
| Foreign-scope content/media found | reject; never render as fallback |

No public state shows internal tokens, fake file actions, empty action slots, guessed files, stale Terms links or Contact fallback.

## 8. Shared ownership and legal current authority

Global Chrome owner supplies Header, Mobile Header, navigation surfaces, Mobile Menu, Production SVG Logo, persistent RFQ, Footer and legal controls. DOC-000 supplies only `current_navigation_key=Documents`.

Legal authority chain:

1. `LEGAL_PRIVACY_NO_TERMS_TITAN_PATTERN_DECISION_V1.0.md`;
2. `PAGE_REGISTRY_V0.2.md`;
3. `GLOBAL_FOOTER_LEGAL_UTILITY_ADDENDUM_V1.0.md`.

Required future dependencies are Privacy Policy `/privacy-policy/`, Dasar Privasi `/ms/privacy-policy/`, Cookie Policy `/cookie-policy/`, Cookie Settings and CONV-DOC privacy acknowledgement. `/terms-of-use/` is not an approved route and must not be consumed, generated or validated as a release dependency.

## 9. Gate 8/9 future acceptance matrix

| Area | Required evidence |
|---|---|
| Routes | `/documents/`, `/products/`, `/request-documents/` and shared RFQ resolve within `tio2-my` |
| Prefill | all 14 valid values editable; invalid values fail closed |
| Content | exact normalized copy, 3 scenarios, 4 categories, 6 FAQ |
| Initial DOM | H1, copy, FAQ pairs and links present without post-click fetch |
| Schema | visible/machine parity; prohibited relation count zero |
| Social | title/description source parity; canonical=`og:url`; approved shared image key or intentional omission; no cross-scope fallback |
| Responsive | 1440, 768, 390, 200% zoom, long text, no horizontal overflow |
| Interaction | Selector initial/error/selected, Closing CTA and FAQ keyboard behavior |
| Accessibility | focus, labels, descriptions, active-nav semantics, 44px targets |
| Shared Chrome | current owner component, Production SVG, fixed RFQ and legal controls |
| Legal | three approved policy routes plus Cookie Settings; stale Terms count zero |
| Isolation | no content/media/route/cache/menu/SEO/form/schema leakage |
| Failure | no dead link, Contact fallback, fake file record, disabled download or false success |

## 10. Boundary

This is a Gate 6 review artifact only. It does not authorize Gate 7 handoff, implementation, tests, branch operations, D16 access, deployment, publication, DNS or indexing.
