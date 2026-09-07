# DOC-000 Gate 6 — Gate 7 Readiness Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Review ID | `DOC-000-G6-PCR-01` |
| Status | `DRAFT_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Purpose | Define future Gate 7 inputs without authorizing handoff or implementation |
| Development project | `D:\16Wordpress_nextjs` — not accessed or modified |
| Gate 7 | `NOT_AUTHORIZED` |

## 1. Content entity and isolation key

Future delivery must treat DOC-000 as a site-scoped singleton:

| Field | Required value / rule |
|---|---|
| `site_scope` | exact `tio2-my`; required in every content, menu, media, route, form and cache lookup |
| `page_id` | `DOC-000` |
| `route` | `/documents/` |
| `locale` | `en` |
| `page_type` | `navigation_hub` |
| `primary_keyword` | `NO_PRIMARY_KEYWORD`; governance field, not visible copy |
| `current_navigation_key` | `Documents`; passed to shared Chrome only |

No query may fall back to TIOVAR, another `site_scope`, a global default post, menu, media item, SEO record or cached response. Missing Malaysia content fails closed.

## 2. CMS/API content fields

| Group | Field | Type / cardinality | Rule |
|---|---|---|---|
| Hero | `eyebrow` | string / 1 | `DOCUMENT HUB` |
| Hero | `h1` | string / 1 | exact approved H1 |
| Hero | `body` | rich text / 1 | approved paragraph; no file claim |
| Hero | `language_note` | string / 1 | approved English statement |
| Hero | `cta_label` | string / 1 | `Start a Document Request` |
| Hero | `cta_route_key` | enum / 1 | `REQUEST_DOCUMENTS`; resolve to `/request-documents/` |
| Hero | `media_asset` | optional asset ref | evidence-neutral decorative asset; missing asset does not create placeholder copy |
| Selector | `heading`, `body`, `label`, `prompt`, `helper`, `error`, `selected_message` | strings / 1 each | exact approved copy |
| Selector | `grade_options` | ordered identifier list / exactly 14 | approved allowlist only, no cross-scope fallback |
| Selector | `continue_label` | string / 1 | `Continue to Request Documents` |
| Selector | `products_help_label` | string / 1 | approved Explore Products sentence |
| Selector | `products_route_key` | enum / 1 | `PRODUCTS_HUB` → `/products/` |
| Steps | `how_it_works` | ordered objects / exactly 3 | number, title, body |
| Scenarios | `review_scenarios` | ordered objects / exactly 3 | title, body, optional decorative icon key; no CTA/status |
| Categories | `document_categories` | ordered objects / exactly 4 | title, body, optional decorative icon key; no route/count/status |
| Info band | `why_on_request_heading`, `why_on_request_body` | strings / 1 each | exact approved copy |
| FAQ | `faq_items` | ordered objects / exactly 6 | stable ID, question, answer, order |
| Closing | eyebrow, heading, body, no-selection label, selected label | strings / 1 each | exact approved state copy |
| SEO | title, description, canonical path, robots, locale | singleton | Gate 6 SEO contract |
| Schema | `faq_schema_eligible` | boolean / default false | may become true only after parity and release verification |

No DOC-000 content model field should represent file inventory, filename, revision, date, language coverage, availability, approval, direct download, certification, registration, market coverage or Grade-to-file applicability.

## 3. Grade source and validation

The ordered Grade allowlist is:

`M-350`, `M-510`, `M-896`, `M-996`, `M-2196`, `M-895`, `M-200`, `M-108`, `M-210`, `M-340`, `M-886`, `M-52`, `M-2377`, `CR-901`.

Future implementation may read this from an approved Malaysia product master or a page-scoped configuration, but it must validate exact membership, uniqueness and order. Missing, duplicate or foreign-scope values fail closed and block release; the interface must not silently borrow another site's Grade list.

## 4. Route and prefill behavior

| Entry | Required result |
|---|---|
| Hero link | `/request-documents/`; no query; receiver Grade is unselected |
| Selector without Grade | no navigation; exact error; focus select |
| Selector with valid Grade | `/request-documents/?product={url-encoded allowlisted Grade}` |
| Closing without Grade | focus upper select; no navigation |
| Closing with valid Grade | same Grade-only handoff as Selector |
| Explore Products | `/products/`; no selected Grade or document inference |

Receiver rules:

- query parameter key is `product` unless a later approved equivalent is documented on both pages;
- value must match the 14-Grade allowlist;
- valid prefill remains editable/removable;
- unsupported, empty, repeated or malformed values fail closed to an unselected editable field without negative suitability copy;
- DOC-000 never passes document type, category, scenario, market, destination, language, availability or approval values.

## 5. Component and initial-DOM behavior

- H1, Hero body, selector labels, all module headings, all six FAQ questions and answers, Footer assembly and primary links are available in initial HTML/DOM.
- Hero and Explore Products are native links with real href values.
- Selector Continue and Closing no-selection actions are buttons.
- FAQ questions are disclosure buttons with stable IDs, `aria-expanded` and `aria-controls`; answers have matching labelled regions.
- Collapsed answers may be programmatically hidden but remain in DOM; no answer requires a network request after click.
- Only one FAQ is expanded at a time; default is all collapsed.
- State updates must not replace server-visible content with empty shells during hydration.
- JavaScript failure must leave the Hero and Explore Products links usable; the Selector cannot navigate without validated state.

## 6. Fail-closed rendering

| Missing/invalid input | Required public behavior |
|---|---|
| Hero media | omit/collapse media region; no placeholder or fact-bearing fallback |
| Grade list not exactly valid | do not expose a misleading partial/foreign list; block release and render a neutral request path only if separately approved |
| Request route unresolved | keep final design contract but block release; do not redirect to Contact or RFQ |
| Products route unresolved | omit the assistance link atomically; do not create a dead link |
| Scenario/category object incomplete | omit the invalid object; block release if cardinality no longer matches approved 3/4 contract |
| FAQ answer missing | omit FAQ Schema; block release until six visible pairs are restored |
| Canonical host/path unresolved | omit unverified absolute canonical in preview; block release |
| Foreign `site_scope` content found | reject response; never render as fallback |

No public state may display internal tokens, disabled fake file actions, empty action slots, guessed files or Contact fallback.

## 7. SEO/GEO/Schema delivery fields

- SEO title and description must match the Gate 6 review contract.
- Canonical is self-referential only after host/path verification.
- Robots release value is `index,follow` only when the route, page body and canonical are production-equivalent.
- JSON-LD may include `WebPage`, `BreadcrumbList`, verified site `WebSite` relationship and conditional `FAQPage`.
- FAQ JSON-LD is generated from the same six CMS FAQ objects used for visible rendering; no parallel copy field.
- No file entities, file actions, counts, certifications, compliance coverage, Product-document relations or `potentialAction` before receiver verification.

## 8. Shared ownership

The Global Chrome owner supplies:

- Header and Mobile Header;
- Desktop and Mobile navigation surfaces;
- Mobile Menu behavior;
- Production SVG Logo bindings;
- persistent Request a Quote;
- shared Footer and legal controls.

DOC-000 supplies only `current_navigation_key=Documents`. It must not fork navigation arrays, Footer links, Logo assets, RFQ state or legal links into page-specific CMS fields.

## 9. Complete-site privacy and legal dependencies

Register these future delivery dependencies without placing internal placeholders in Buyer Clean:

| Dependency | Owner / timing |
|---|---|
| `/privacy-policy/` | Legal/Privacy page owner; real link verified before release |
| `/ms/privacy-policy/` | Legal/Privacy page owner; real link verified before release |
| `/cookie-policy/` | Legal/Privacy page owner; real link verified before release |
| `Cookie Settings` | shared consent control; behavior verified before release |
| Request Documents privacy acknowledgement | CONV-DOC owner; exact link/purpose/receiver verified before form release |

There is no approved independent Terms page. Parallel legal completion does not block Gate 6 but must be included in Gate 7 dependencies and Gate 8/9 QA.

## 10. Gate 8/9 acceptance matrix for future handoff

| Area | Required future evidence |
|---|---|
| Route | `/documents/`, `/products/`, `/request-documents/` and shared RFQ resolve within `tio2-my` |
| Prefill | all 14 valid values prefill and remain editable; invalid values fail closed |
| Content | exact approved copy, 3 scenarios, 4 categories, 6 FAQ |
| Initial DOM | H1, copy, FAQ pairs and links present without post-click fetch |
| Schema | visible/machine parity; prohibited relation count zero |
| Responsive | 1440, 768, 390, 200% zoom, long text, no horizontal overflow |
| Interaction | initial/error/selected Selector; Closing CTA; FAQ keyboard behavior |
| Accessibility | focus, labels, descriptions, current navigation, hidden-surface exclusion, 44px targets |
| Shared Chrome | current V0.5 owner component, Production SVG, fixed RFQ, legal Footer dependencies |
| Isolation | no content, media, route, cache, menu, SEO, form or schema leakage across `site_scope` |
| Failure | no dead links, Contact fallback, fake file records, disabled downloads or false success |
| Privacy | real policies, consent control and CONV-DOC acknowledgement verified before release |

## 11. Boundary

This readiness contract is a Gate 6 review artifact only. It does not authorize Gate 7 handoff, implementation, tests, branch operations, D16 access, deployment or release.

