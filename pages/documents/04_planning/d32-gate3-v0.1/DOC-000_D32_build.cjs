// PROTOTYPE_ONLY: page slot projection, not a production/shared component owner.
// Buyer copy is mechanically derived from approved V0.10; do not edit generated HTML.
const fs=require('fs'),path=require('path'),{pathToFileURL}=require('url');
const root=path.resolve(__dirname,'../../../..');
const {renderSharedChrome}=require(path.join(root,'docs/architecture/gate3-shared-consumer-v0.2/render-shared-chrome.cjs'));
const source=fs.readFileSync(path.join(root,'pages/documents/04_planning/DOC-000_CONTENT_ARCHITECTURE_V0.10.md'),'utf8');
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const section=n=>source.split(`### 3.${n} `)[1].split('\n### ')[0];
const tables=n=>section(n).split('\n').filter(l=>l.startsWith('|')).map(l=>l.split('|').slice(1,-1).map(x=>x.trim().replaceAll('`',''))).slice(2);
const row=(n,key)=>tables(n).find(r=>r[0]===key)[1];
const quoted=(n,label)=>section(n).match(new RegExp(label+': `([^`]+)`'))[1];
const grades=['M-350','M-510','M-896','M-996','M-2196','M-895','M-200','M-108','M-210','M-340','M-886','M-52','M-2377','CR-901'];
const p=s=>`<p>${esc(s)}</p>`;
const cards=(n,attr)=>tables(n).map(([h,b])=>`<article ${attr}><h3>${esc(h)}</h3>${p(b)}</article>`).join('');
const chrome=renderSharedChrome({currentPageId:'DOC-000',primaryLogoSrc:pathToFileURL(path.join(root,'brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg')).href,reverseLogoSrc:pathToFileURL(path.join(root,'brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg')).href});
const illustrationSource=fs.readFileSync(path.join(root,'pages/documents/04_planning/visual-designs/doc-root-page-hero-v1.0/doc-root-page-hero-preview-v1.0.html'),'utf8');
const illustration=illustrationSource.match(/<svg viewBox="0 0 310 220"[\s\S]*?<\/svg>/)[0];
const steps=section(3).split('\n').filter(l=>/^\d\. `/.test(l)).map(l=>{const values=[...l.matchAll(/`([^`]+)`/g)].map(m=>m[1]);return `<li><h3>${esc(values[0])}</h3>${p(values[1])}</li>`}).join('');
const faqs=tables(7).map(([q,a],i)=>`<div class="faq-item"><h3><button class="faq-question" id="faq-question-${i+1}" type="button" aria-controls="faq-answer-${i+1}" aria-expanded="false">${esc(q)}<span aria-hidden="true">+</span></button></h3><div class="faq-answer" id="faq-answer-${i+1}" role="region" aria-labelledby="faq-question-${i+1}" hidden>${p(a)}</div></div>`).join('');
const body=`<main id="main-content">
<nav class="doc-breadcrumb doc-width" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>Documents</span></nav>
<section class="root-hero doc-width" data-component="RootPageHero" data-variant="hub-light" aria-labelledby="page-title"><div class="root-hero-copy"><p class="doc-eyebrow">${esc(row(1,'Eyebrow'))}</p><h1 id="page-title">${esc(row(1,'H1'))}</h1><p class="root-hero-intro">${esc(row(1,'Body'))}</p><p class="doc-note">${esc(row(1,'Note'))}</p><a class="doc-primary" data-hero-action href="/request-documents/">${esc(row(1,'CTA'))}</a></div><div class="doc-illustration" aria-hidden="true">${illustration}</div></section>
<section class="doc-section doc-width doc-selector" id="grade-selector" aria-labelledby="selector-title"><div><h2 id="selector-title">${esc(quoted(2,'Heading'))}</h2>${p(quoted(2,'Body'))}</div><div class="doc-selector-controls"><label for="product-grade">${esc(row(2,'Field label'))}</label><select id="product-grade" aria-describedby="grade-help grade-error grade-selected"><option value="">${esc(row(2,'Prompt'))}</option>${grades.map(g=>`<option value="${g}">${g}</option>`).join('')}</select><p id="grade-help">${esc(row(2,'Helper'))}</p><p id="grade-error" role="alert"></p><p id="grade-selected" aria-live="polite"></p><a id="continue-request" class="doc-primary" href="#grade-selector">${esc(row(2,'Primary CTA'))}</a><a class="doc-assistance" href="/products/">Not sure which grade to select? Explore Products.</a></div></section>
<section class="doc-section doc-width" aria-labelledby="steps-title"><h2 id="steps-title">${esc(quoted(3,'Heading'))}</h2><ol class="doc-steps">${steps}</ol></section>
<section class="doc-section doc-width" aria-labelledby="scenarios-title"><h2 id="scenarios-title">${esc(quoted(4,'Heading'))}</h2>${p(quoted(4,'Intro'))}<div class="doc-scenarios">${cards(4,'data-scenario')}</div></section>
<section class="doc-section doc-width" aria-labelledby="groups-title"><h2 id="groups-title">${esc(quoted(5,'Heading'))}</h2>${p(quoted(5,'Intro'))}<div class="doc-groups">${cards(5,'data-group')}</div></section>
<section class="doc-section doc-width doc-band" aria-labelledby="why-title"><h2 id="why-title">${esc(quoted(6,'Heading'))}</h2>${p(quoted(6,'Body'))}</section>
<section class="doc-section doc-width" aria-labelledby="faq-title"><h2 id="faq-title">Buyer Questions</h2><div class="doc-faq">${faqs}</div></section>
<section class="doc-section doc-width doc-closing" aria-labelledby="closing-title"><p class="doc-eyebrow">${esc(row(8,'Eyebrow'))}</p><h2 id="closing-title">${esc(row(8,'Heading'))}</h2>${p(row(8,'Body'))}<a id="closing-action" class="doc-primary" href="#grade-selector">Select a Product Grade</a></section></main>`;
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Documents for Product &amp; Supplier Qualification | TiO2 Malaysia</title><style>${chrome.style}</style><link rel="stylesheet" href="DOC-000_D32_structure.css"></head><body>${chrome.header}${body}${chrome.footer}${chrome.dialog}<script>${chrome.behavior}</script><script src="DOC-000_D32_behavior.js"></script></body></html>`;
fs.writeFileSync(path.join(__dirname,'DOC-000_D32_structure.html'),html);console.log('Generated PROTOTYPE_ONLY consumer from approved V0.10 and shared Chrome V0.2.');
