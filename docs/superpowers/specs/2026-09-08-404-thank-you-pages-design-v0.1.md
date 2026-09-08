# TiO2 Malaysia 404 and Thank You Pages — Approved Design V0.1

## 1. Document control

| Field | Value |
|---|---|
| Date | `2026-09-08` |
| Scope | Add one global 404 system page and one shared form-success page |
| Design status | `USER_APPROVED_DESIGN / READY_FOR_GOVERNANCE_REGISTRATION` |
| Page execution status | `GATE_0_REGISTRATION_PENDING`; Gate 1 not started |
| Development | `NOT_AUTHORIZED` |
| Publication / indexing | `NOT_AUTHORIZED` |
| User decision source | Current conversation, approvals recorded on `2026-09-08` |

This design records the content, page identity, routing, success-state and acceptance decisions approved by the user. It does not authorize Gate 1, implementation in `D:\16Wordpress_nextjs`, deployment or publication.

## 2. Reason, impact, risk and rollback

### 2.1 Reason

- Give readers a useful recovery path when a URL does not exist.
- Complete the post-submission experience for Request a Quote, Request Documents and Request a Sample.
- Replace three separately maintained inline success destinations with one shared result-page pattern while preserving form-specific wording and actions.

### 2.2 Impact

The approved change adds two registered pages and increases the project page count from 57 to 59. Later governed work must update the Page Registry, keyword master, PRD page inventory, project Index/Status, the three form success contracts and each new page's current Manifest.

### 2.3 Risks and controls

| Risk | Control |
|---|---|
| A direct visitor sees a false submission confirmation | Show request-specific success only when a valid short-lived success marker exists |
| Personal data leaks through the destination URL | Store no name, email, phone, company, product or request text in the URL or marker |
| A visual 404 accidentally returns HTTP 200 | Gate 8 must use the framework's real not-found response; Gate 9 verifies the response status |
| Existing routes are intercepted by the not-found handler | Gate 9 verifies representative known routes and all unknown-route classes |
| Page views inflate conversion counts | Count success only after an explicit positive receiver response; a Thank You page view is not a success event |
| Existing form failure handling is lost | Failure remains on the source form, preserves values and supports retry |
| Shared Header/Footer is duplicated | Both pages consume the Home/Global Chrome owner implementation without a page-local fork |

### 2.4 Rollback

- The three form pages retain their historical inline-success contracts as rollback sources.
- If the shared Thank You route cannot be delivered safely, form success may temporarily return to the last approved inline state without changing submitted data.
- The 404 page can revert to the current global not-found implementation while preserving the registered design for later implementation.

## 3. Page identities

| Field | 404 page | Thank You page |
|---|---|---|
| Page ID | `SYS-404` | `CONV-THANK` |
| Name | Page Not Found | Thank You |
| Route | Runtime fallback for every unknown TiO2 Malaysia URL; no separate indexable `/404/` page | `/thank-you/` |
| Section | `SYSTEM` | `CONVERSION` |
| Page type | Global system recovery page | Shared form-result utility page |
| Language | EN | EN |
| Market | GLOBAL | GLOBAL |
| Primary keyword | `NO_PRIMARY_KEYWORD` | `NO_PRIMARY_KEYWORD` |
| Search ownership | None | None; RFQ, Documents and Sample pages retain their own intent |
| Site scope | `tio2-my` | `tio2-my` |

Neither page creates a new primary navigation item. Both consume the shared Header, Footer, production Logo, fixed RFQ and legal links.

## 4. 404 content contract

### 4.1 Exact reader-visible content

**Eyebrow**

`404 · PAGE NOT FOUND`

**H1**

`Let’s help you find what you need.`

**Body**

`The page you’re looking for may have moved or is no longer available. You can continue by exploring our titanium dioxide products, requesting technical documents, or contacting our team.`

**Primary actions**

1. `Explore Products` → `/products/`
2. `Go to Homepage` → `/`

**Supporting actions**

1. `Request Documents` → `/request-documents/`
2. `Contact Our Team` → `/contact/`
3. `Request a Quote` → `/request-a-quote/`

### 4.2 Scope

- No site-search field is added because the site has no approved shared search capability.
- No FAQ, form, long SEO copy, dynamic recommendations or internal governance language is added.
- The page must not accuse the visitor of entering an incorrect address.
- No navigation item is marked current on an unknown route.

## 5. Thank You content contract

### 5.1 Shared structure

1. Success icon and `REQUEST RECEIVED` eyebrow.
2. Request-specific H1 and body.
3. Two request-specific next actions.
4. Shared Footer.

The page does not repeat submitted personal or commercial information. It does not display a request number, restrictive outcome disclaimer, recommended product, marketing banner or another submit button.

### 5.2 Request a Quote variant

**H1**

`Thank you. We’ve received your quotation request.`

**Body**

`Our team will review the details and contact you using the information provided.`

**Actions**

1. `Explore Products` → `/products/`
2. `Go to Homepage` → `/`

### 5.3 Request Documents variant

**H1**

`Thank you. We’ve received your document request.`

**Body**

`Our team will review the requested documents and contact you using the information provided.`

**Actions**

1. `Return to Documents` → `/documents/`
2. `Explore Products` → `/products/`

### 5.4 Request a Sample variant

**H1**

`Thank you. We’ve received your sample request.`

**Body**

`Our team will review your application and sample requirements and contact you using the information provided.`

**Actions**

1. `Explore Products` → `/products/`
2. `View Applications` → `/applications/`

### 5.5 Direct or invalid access variant

This variant is displayed when the page has no valid success marker or has an unsupported request type.

**H1**

`How can we help?`

**Body**

`Choose the request you’d like to make, and our team will guide you through the next step.`

**Actions**

1. `Request a Quote` → `/request-a-quote/`
2. `Request Documents` → `/request-documents/`
3. `Request a Sample` → `/request-sample/`

The direct-access variant is not recorded as a submission or conversion.

## 6. Success-state and routing contract

### 6.1 Approved destinations

- `/thank-you/?request=quote`
- `/thank-you/?request=documents`
- `/thank-you/?request=sample`

The query value selects the eligible copy variant; it does not prove a successful submission by itself.

### 6.2 Success marker

After an explicit positive form-receiver response, the client stores only:

- approved request type: `quote`, `documents` or `sample`;
- success timestamp;
- a non-personal flow marker needed to validate the current browser session.

No personal, company, product, destination, application, document, sample or quotation data may appear in the URL, browser marker, analytics payload or rendered Thank You content.

The marker remains available for refresh within the same browser session and expires when the session ends. A later Gate 6/8 technical design may choose an equally private and more robust implementation, but it must preserve these observable rules.

### 6.3 State transitions

| Receiver result | Source form behavior | Destination behavior |
|---|---|---|
| Explicit positive acknowledgement | Record the form-specific success event, create the non-personal marker, then navigate to the matching Thank You variant | Show approved request-specific content |
| Validation error | Keep the visitor on the form and focus the error summary/control | No navigation |
| Network, provider or receiver failure | Keep entered values and offer retry | No navigation and no success marker |
| Duplicate activation while submitting | Prevent the duplicate request | No second navigation or success event |
| Direct Thank You visit, stale marker or invalid request value | No conversion event | Show the direct-access variant |

## 7. SEO, GEO and machine-readable behavior

### 7.1 SYS-404

- HTTP status: real `404`.
- Robots: `noindex, follow`.
- Sitemap: excluded.
- Canonical: no indexable canonical contract is created for arbitrary unknown URLs.
- Schema: no page-specific Schema is required.
- Suggested title: `Page Not Found | TiO2 Malaysia`.

### 7.2 CONV-THANK

- HTTP status: `200` only for the actual `/thank-you/` utility route.
- Robots: `noindex, nofollow`.
- Sitemap: excluded.
- Canonical: no query-variant canonical or indexable acquisition page is created.
- Schema: no conversion, order, quotation, document-delivery or sample-approval Schema is emitted.
- Suggested title: `Thank You | TiO2 Malaysia`.

No GEO answer target, acquisition keyword or social-sharing campaign is created for either page.

## 8. Analytics and privacy

- A success event is emitted only after an explicit positive receiver acknowledgement, before or during the controlled navigation.
- A Thank You page view is never used by itself as proof of successful submission.
- Event names remain distinct for Quote, Documents and Sample.
- Analytics remains subordinate to the approved GA4/GTM consent architecture.
- Remarketing remains disabled.
- No Turnstile or reCAPTCHA is introduced by this change.
- A 404 event may include a sanitized path but must remove query and fragment values that could contain personal or sensitive data.

## 9. Responsive, accessibility and shared-component requirements

- Gate 3 and Gate 4 must cover complete 1440 Desktop, 768 Tablet and 390 Mobile states.
- Shared Desktop Header, Mobile Header, Mobile Menu and Footer are consumed from Global Chrome; neither page creates a fork.
- All actions must be keyboard reachable, have visible focus and meet the shared logical 44×44px minimum at 390px.
- The main heading is the initial page landmark; request-specific success is expressed in text as well as with an icon.
- Layout must remain usable at 200% zoom and without horizontal overflow.
- The 404 page must retain recovery actions when text wraps or localization increases line length.
- The Thank You page must not flash a success variant before marker validation.

## 10. Acceptance conditions

### 10.1 Thank You flow

1. Quote, Documents and Sample each navigate only after a positive receiver response.
2. Each flow displays its exact approved H1, body and actions.
3. Failure preserves values and supports retry without navigation.
4. Duplicate submission is prevented.
5. Direct access, invalid request values and expired/new sessions display the direct-access variant.
6. Refresh in the same valid session preserves the correct request-specific variant.
7. No personal data appears in URL, marker, rendered page or analytics.
8. Page-view-only traffic does not count as conversion.

### 10.2 404 behavior

1. Representative unknown routes return HTTP 404.
2. The exact approved copy and all recovery links render.
3. Representative valid routes are not intercepted.
4. No current-navigation label is shown.

### 10.3 Shared and search behavior

1. Both pages use the production shared Header/Footer and Logo.
2. Fixed RFQ remains visible on all approved Global Chrome surfaces.
3. Both pages are absent from sitemap output.
4. Robots directives match Sections 7.1 and 7.2.
5. `site_scope=tio2-my` is enforced for content, route, cache, analytics and shared components with no cross-scope fallback.
6. 1440, 768 and 390 visual evidence plus keyboard, focus, zoom and overflow evidence is returned for Gate 9.

## 11. Governance registration and next stage

After the user reviews this written specification, governance registration may:

1. add `SYS-404` and `CONV-THANK` to the Page Registry;
2. add both as `NO_PRIMARY_KEYWORD` utility/system entries to the keyword master;
3. update the PRD page inventory from 57 to 59 and add their responsibilities;
4. create their page directories, Gate 0 records and unique current Manifests;
5. record the user-approved change to the three form success contracts without deleting historical approved sources;
6. update Project Index and Status pointers.

Gate 1 must then run independently for each page under the current workflow. This design does not skip Gate 1, authorize Gate 2+, or authorize implementation.

## 12. Approval record

| Date | User decision | Result |
|---|---|---|
| 2026-09-08 | One shared `/thank-you/` for Quote, Documents and Sample | Approved |
| 2026-09-08 | Thank You `noindex, nofollow`; excluded from sitemap | Approved |
| 2026-09-08 | No restrictive success copy; three request-specific messages | Approved |
| 2026-09-08 | Request-specific post-success actions | Approved |
| 2026-09-08 | 404 copy and recovery actions without site search | Approved |
| 2026-09-08 | Shared-page success marker and direct-access fallback | Approved |
| 2026-09-08 | Page IDs, routing, page-count impact and registration approach | Approved |
| 2026-09-08 | Data flow, error handling, analytics, privacy and acceptance requirements | Approved |

