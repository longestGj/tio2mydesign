const fs = require('fs');
const path = require('path');
const { renderSharedChrome } = require('../../../../docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs');

const out = __dirname;
const esc = (value) => String(value).replace(/[&<>\"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[character]));

const collections = [
  {
    key: 'coatings',
    name: 'Coatings',
    scope: 'For paint and coating formulations.',
    grades: ['M-350', 'M-510', 'M-896', 'M-996', 'M-2196', 'M-895', 'M-52', 'M-2377'],
    action: 'Explore Coatings',
    href: '/applications/coatings/'
  },
  {
    key: 'plastics',
    name: 'Plastics',
    scope: 'For plastic compounds and finished plastic applications.',
    grades: ['M-350', 'M-510', 'M-200', 'M-108', 'M-210', 'M-340', 'M-886', 'M-2377'],
    action: 'Explore Plastics',
    href: '/applications/plastics/'
  },
  {
    key: 'masterbatch',
    name: 'Masterbatch',
    scope: 'For evaluating titanium dioxide as a pigment input in masterbatch formulations.',
    grades: ['M-510', 'M-200', 'M-108', 'M-210', 'M-340', 'M-886', 'M-2377'],
    action: 'Explore Masterbatch',
    href: '/applications/masterbatch/'
  },
  {
    key: 'printing-inks',
    name: 'Printing Inks',
    scope: 'For printing-ink formulations.',
    grades: ['M-350', 'M-510', 'M-52', 'M-2377'],
    action: 'Explore Printing Inks',
    href: '/applications/printing-inks/'
  },
  {
    key: 'paper',
    name: 'Paper',
    scope: 'For paper-related applications.',
    grades: ['M-350', 'M-2377'],
    action: 'Explore Paper',
    href: '/applications/paper/'
  },
  {
    key: 'specialty-materials',
    name: 'Specialty Materials',
    scope: 'For reviewing CR-901 in specialty-material applications.',
    grades: ['CR-901'],
    action: null,
    href: null
  }
];

const steps = [
  {
    title: 'Choose your application.',
    body: 'Start with the category that matches what you make. Review more than one path if your work spans several applications.'
  },
  {
    title: 'Compare technical information.',
    body: 'Use current technical data to compare the grades under review against your requirements.'
  },
  {
    title: 'Validate in your own system.',
    body: 'Check the grade in your formulation and process before making a specification decision.'
  }
];

const procurement = [
  {
    name: 'Products',
    body: 'Already know the grade, or need a wider starting point? Use the product directory to review the portfolio and explore process information.',
    action: 'Explore Products',
    href: '/products/'
  },
  {
    name: 'Documents',
    body: 'Understand technical, quality and origin document types and how to request them.',
    action: 'Review Documents',
    href: '/documents/'
  },
  {
    name: 'Markets',
    body: 'Find procurement context for your destination market.',
    action: 'Explore Markets',
    href: '/markets/'
  }
];

const chrome = renderSharedChrome({
  currentPageId: 'APP-000',
  primaryLogoSrc: '../../../../brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg',
  reverseLogoSrc: '../../../../brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg',
  fontSrc: '../../../../docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf'
});

const gradeRoute = (grade) => `/products/${grade.toLowerCase()}/`;
const gradeMarkup = (grade) => `<li data-grade="${esc(grade)}"><a class="gradeChip" data-grade-link href="${esc(gradeRoute(grade))}">${esc(grade)}</a><span class="gradeChip gradeChipPlain" data-grade-plain hidden>${esc(grade)}</span></li>`;
const collectionMarkup = (collection) => `<article class="applicationCard" id="application-${esc(collection.key)}" data-application-anchor data-collection>
  <h3>${esc(collection.name)}</h3>
  <p>${esc(collection.scope)}</p>
  <p class="gradeLabel">${collection.grades.length === 1 ? 'Grade to Review' : 'Grades to Review'}</p>
  <ul class="gradeList">${collection.grades.map(gradeMarkup).join('')}</ul>
  ${collection.action ? `<a class="textAction applicationAction" data-application-action href="${esc(collection.href)}">${esc(collection.action)}</a>` : ''}
</article>`;

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow">
  <title>Applications | TiO2 Malaysia</title>
  <meta name="description" content="Explore titanium dioxide application paths for coatings, plastics, masterbatch, printing inks, paper and specialty materials.">
  <style>${chrome.style}\n${fs.readFileSync(path.join(out, 'planning.css'), 'utf8')}</style>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  ${chrome.header}
  <main id="main" tabindex="-1">
    <div class="wrap">
      <nav class="breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">›</span><span>Applications</span></nav>
      <section class="rootHero" data-component="RootPageHero" data-variant="hub-light" data-surface="open-white" data-module="M1-HERO" aria-labelledby="page-title">
        <div class="heroText">
          <p class="eyebrow">Applications</p>
          <h1 id="page-title">Explore Titanium Dioxide by Application</h1>
          <p data-copy="hero-body">This hub organizes titanium dioxide grades by application across coatings, plastics, masterbatch, printing inks, paper and specialty materials. Use each collection as a starting point for technical evaluation.</p>
          <div class="actions">
            <a class="primary" href="#application-selector">Explore Applications</a>
            <a class="secondary" data-body-rfq href="/request-a-quote/">Request a Quote</a>
          </div>
        </div>
        <aside class="heroIndex" aria-labelledby="hero-index-title">
          <h2 id="hero-index-title">Choose an Application</h2>
          <div class="heroLinks">${collections.map((collection) => `<a href="#application-${esc(collection.key)}">${esc(collection.name)}</a>`).join('')}</div>
        </aside>
      </section>
    </div>

    <section class="band" id="application-selector" data-module="M2-APPLICATION_PATHS">
      <div class="wrap section">
        <div class="sectionIntro">
          <p class="eyebrow">Application-first navigation</p>
          <h2>Choose by Application</h2>
          <p>Grades to Review are starting points for technical evaluation, not rankings or guarantees of suitability. <span data-route-sentence>Open a grade page for product information, or explore an application for guidance on what to evaluate.</span></p>
        </div>
        <div class="applicationGrid">${collections.map(collectionMarkup).join('')}</div>
      </div>
    </section>

    <section class="wrap section" data-module="M3-EVALUATION_GUIDE" aria-labelledby="evaluation-heading">
      <p class="eyebrow">Application review steps</p>
      <h2 id="evaluation-heading">How to Use This Application Hub</h2>
      <div class="steps">${steps.map((step, index) => `<article class="step" data-evaluation-step><span class="stepNumber">0${index + 1}</span><h3>${esc(step.title)}</h3><p>${esc(step.body)}</p></article>`).join('')}</div>
    </section>

    <section class="band" data-module="M4-PROCUREMENT_PATHS" aria-labelledby="procurement-heading">
      <div class="wrap section">
        <p class="eyebrow">Continue the review</p>
        <h2 id="procurement-heading">Continue Your Procurement Review</h2>
        <div class="procurementGrid">${procurement.map((card) => `<article class="procurementCard" data-procurement-card><h3>${esc(card.name)}</h3><p>${esc(card.body)}</p><a class="textAction" href="${esc(card.href)}">${esc(card.action)}</a></article>`).join('')}</div>
      </div>
    </section>

    <section class="finalBand" data-module="M5-FINAL-RFQ" aria-labelledby="final-heading">
      <div class="wrap finalCta">
        <div>
          <p class="eyebrow">Share your requirements</p>
          <h2 id="final-heading">Share Your Application Requirements</h2>
          <p>Share the intended application, destination market, required quantity and any technical or documentation requirements. Our team will review the request and identify the appropriate next step.</p>
          <p>If you have not selected a grade, choose “Not sure / Need help” on the quotation form. For an application that is still undecided, choose “Other / Not sure”.</p>
        </div>
        <a class="primary" data-body-rfq href="/request-a-quote/">Request a Quote</a>
      </div>
    </section>
  </main>
  ${chrome.footer}
  ${chrome.dialog}
  <script>${chrome.behavior}</script>
  <script>${fs.readFileSync(path.join(out, 'planning.js'), 'utf8')}</script>
</body>
</html>`;

const extraction = {
  page_id: 'APP-000',
  route: '/applications/',
  site_scope: 'tio2-my',
  module_order: ['M1-HERO', 'M2-APPLICATION_PATHS', 'M3-EVALUATION_GUIDE', 'M4-PROCUREMENT_PATHS', 'M5-FINAL-RFQ'],
  collections: collections.map(({ key, name, scope, grades, action }) => ({ key, name, scope, grades, action })),
  steps,
  procurement,
  excluded_obsolete_modules: ['Process Classification directory', 'FAQ module', 'complete 14-grade product directory']
};

fs.writeFileSync(path.join(out, 'application-planning.html'), html);
fs.writeFileSync(path.join(out, 'content-extraction.json'), JSON.stringify(extraction, null, 2));
console.log(JSON.stringify({ result: 'BUILT', source: path.join(out, 'application-planning.html'), collections: collections.length, relationships: collections.reduce((sum, collection) => sum + collection.grades.length, 0), steps: steps.length }, null, 2));
