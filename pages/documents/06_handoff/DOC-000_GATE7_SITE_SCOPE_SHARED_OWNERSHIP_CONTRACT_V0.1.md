# DOC-000 Gate 7 Site-Scope Isolation and Shared Ownership Contract V0.1

## 0. Control

| Field | Value |
|---|---|
| Page | `DOC-000` / `/documents/` |
| Package ID | `DOC-000-G7-HANDOFF-01` |
| Status | `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED` |
| Required scope | `tio2-my` |
| Shared owner | Global Chrome / Brand / Legal-Privacy owners as applicable |

## 1. Isolation key

Every page-data operation requires exact `site_scope=tio2-my`. This applies to:

- content records and revisions;
- page identity and route resolution;
- menus and current-navigation state;
- media and asset references;
- request-form route and prefill configuration;
- SEO metadata and Canonical records;
- Schema graph and entity IDs;
- social metadata and asset keys;
- cache keys, revalidation and generated HTML;
- form endpoints/configuration exposed to this scope.

Missing scope or scope mismatch fails closed. It never widens to a global/default lookup.

## 2. Cross-scope fallback prohibition

DOC-000 must not read or render fallback data from:

- TIOVAR or any frozen/other site scope;
- a global default page/post;
- another site's menu or Footer array;
- another site's media attachment or social-image record;
- another site's SEO, Schema or cache entry;
- another site's form endpoint, receiver configuration or route map;
- an unscoped query result.

Foreign-scope detection rejects the response and blocks release. It is not repaired by substituting a generic public value.

## 3. Cache and generation contract

| Surface | Required cache key dimensions |
|---|---|
| Page HTML/data | `site_scope`, route/page ID, locale and current content revision |
| Navigation/Footer | shared owner version plus `site_scope` and locale |
| SEO/Schema | `site_scope`, route, locale and content revision |
| Social metadata | `site_scope`, route and approved shared asset binding/version |
| Route configuration | `site_scope` and route-map version |

Purge/revalidation for another scope must not replace, expose or invalidate TiO2 Malaysia content incorrectly. A stale foreign response is a release blocker.

## 4. Shared Global Chrome ownership

Global Chrome owner supplies:

- Desktop Header and navigation;
- Mobile Header and navigation;
- Mobile Menu behavior;
- shared Footer;
- Production SVG Logo binding;
- persistent Request a Quote;
- shared legal utility row and Cookie Settings control.

DOC-000 supplies only:

`current_navigation_key=Documents`

DOC-000 does not create page-local copies of navigation items, Footer columns, Logo assets, RFQ labels/routes, legal links or Cookie Settings configuration.

## 5. Shared Chrome required behavior

- Desktop Header remains 84px according to current shared authority.
- Mobile Header remains 64px.
- Navigation order, labels and owner-defined routes remain unchanged.
- Documents is current only on the active navigation surface.
- Persistent Request a Quote remains visible on Desktop Header, Mobile Header, Mobile Menu and Footer, pointing to `/request-a-quote/`.
- Footer remains the shared Deep Navy assembly.
- Missing RFQ route blocks release; no hidden, disabled, empty or Contact-fallback state is allowed.

## 6. Logo and media ownership

Use the shared Production SVG Logo through its approved owner binding. Do not copy a Logo into a DOC-000 media field or borrow a media record from another scope.

Hero media is optional and evidence-neutral. Its asset key must be allowed for `tio2-my`. If missing, omit it cleanly. It must not imply file existence, factory capacity, certificate, origin or compliance.

## 7. Legal current authority

Shared legal utilities are:

| Label/control | Route/behavior |
|---|---|
| Privacy Policy | `/privacy-policy/` |
| Dasar Privasi (BM) | `/ms/privacy-policy/` |
| Cookie Policy | `/cookie-policy/` |
| Cookie Settings | reopens shared Consent Manager; no page route |

There is no `/terms-of-use/` route or Footer item. Do not generate, query, cache, sitemap, link or validate one for `tio2-my`.

## 8. Request Documents ownership

CONV-DOC owns the receiver form, document types, Product Grade field, validation, privacy acknowledgement, submission, error and receipt states. DOC-000 owns only the optional Grade selection and route handoff. A valid prefill remains editable/removable.

Form configuration and receiver behavior must resolve within `tio2-my`; no other scope's receiver or credentials may be used as fallback.

## 9. Social image ownership

An optional default social image is supplied only by the shared Brand/SEO owner as an approved asset key. DOC-000 must not upload/copy a page-local factual image solely to satisfy metadata. Without an approved key, omit image tags and record the Gate 8/9 acceptance outcome.

## 10. Isolation acceptance

- all content/menu/media/route/form/SEO/schema/cache lookups show exact scope filtering;
- negative tests for missing/wrong scope fail closed;
- no fallback query omits the scope predicate;
- cache keys cannot collide across scopes;
- route, canonical and structured IDs stay on TiO2 Malaysia host/path;
- social image either resolves through the approved shared key or is absent;
- source inspection and runtime evidence show no cross-scope leakage.

## 11. Boundary

Status remains `SUBMITTED_FOR_PROJECT_CONTROL_REVIEW / NOT_APPROVED`. This is a future implementation contract only; no D16 access or implementation is authorized in this task.
