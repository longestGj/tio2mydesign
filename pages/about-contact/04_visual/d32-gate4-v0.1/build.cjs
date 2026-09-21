// PROTOTYPE_ONLY: controlled derivation from ABOUT's approved strings and media.
// This does not define a D32 PHP component or a competing content authority.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../../../..'),out=__dirname;
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const clean=s=>s.replaceAll('`','').trim();
const source='pages/about-contact/06_handoff/ABOUT-001_GATE7_CONTENT_SEO_GEO_SCHEMA_SOURCE_MAP_V0.1.md';
const sm=read(source);
function rows(n){return sm.split(`### 2.${n} `)[1].split('\n### ')[0].split('\n## ')[0].split('\n').filter(l=>l.startsWith('|')).slice(2).map(l=>l.split('|').slice(1,-1).map(clean));}
const hero=Object.fromEntries(rows(1).map(r=>[r[0],r[1]]));
function linkText(s){let t=esc(s).replace('Malaysia-based rutile titanium dioxide manufacturer and supplier','<a href="/products/">Malaysia-based rutile titanium dioxide manufacturer and supplier</a>').replace('titanium dioxide supplier in Malaysia','<a href="/">titanium dioxide supplier in Malaysia</a>');if(s===hero['Paragraph 2'])for(const phrase of ['paints and coatings','plastics','masterbatch','printing inks','paper'])t=t.replace(phrase,`<a href="/applications/">${phrase}</a>`);return t;}
const actions='<div class="about-actions"><a class="about-button" href="/request-a-quote/">Request a Quote</a><a class="about-button secondary" href="/contact/">Contact Us</a></div>';
const section=(id,title,body)=>`<section id="${id}" class="about-section" aria-labelledby="${id}-title"><h2 id="${id}-title">${esc(title)}</h2>${body}</section>`;
const old=read('pages/about-contact/04_visual/visual-designs/about-root-page-hero-v1.0/about-root-page-hero-preview-v1.0.html');
const composite=old.match(/<div class="about-composite" aria-hidden="true">[\s\S]*?<div class="container"><\/div><\/div>/)[0];
const compositeCss=old.slice(old.indexOf('.about-composite{'),old.indexOf('.who-we-are{')).replaceAll('.container{','.about-composite .container{').replaceAll('.bag{','.about-composite .bag{').replaceAll('.powder{','.about-composite .powder{');
const picture='../../04_visual/pcr02_assets/ABOUT-001_G6_PCR02_DESKTOP_1440_MINIMAL_EDIT_V0.3.png';
function crop(key,box,alt=''){return `<svg class="about-crop" data-asset-key="${key}" viewBox="${box}" preserveAspectRatio="xMidYMid slice" role="${alt?'img':'presentation'}" ${alt?`aria-label="${alt}"`:'aria-hidden="true"'}><image href="${picture}" width="1440" height="3113"/></svg>`;}
let body=`<nav class="about-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span>About</span></nav><section class="about-hero" data-component="RootPageHero" data-variant="corporate-light" data-ownership="PROTOTYPE_ONLY" aria-labelledby="about-title"><div class="about-hero-layout"><div><p class="about-eyebrow">${hero.Eyebrow}</p><h1 id="about-title">${hero.H1}</h1><p class="about-intro claim">${hero['Paragraph 1']}</p>${actions}</div>${composite}</div></section>`;
body+=section('who','Who We Are',`<div class="about-support">${[2,3,4,5,6].map(i=>`<p${i===5?'':' class="claim"'}>${linkText(hero['Paragraph '+i])}</p>`).join('')}</div><dl class="about-facts">${rows(2).map((r,i)=>`<div${[3,4,5].includes(i)?' data-scale="true"':i===1||i===6?' class="claim"':''}><dt>${esc(r[0])}</dt><dd>${i===2?`<a href="/products/">${esc(r[1])}</a>`:esc(r[1])}</dd></div>`).join('')}</dl>`);
for(const [n,id,title] of [[3,'why','Why Malaysia Matters'],[4,'what','What We Do']])body+=section(id,title,`<div class="about-grid">${rows(n).map(r=>`<article><h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></article>`).join('')}</div>`);
const flagBoxes=['540 2115 70 43','762 2115 72 43','973 2115 72 43','1190 2115 72 43'];
body+=section('markets','Markets We Serve',`<div class="about-market-layout">${crop('about.markets.map','65 2135 410 180')}<div class="about-grid">${rows(5).slice(0,4).map((r,i)=>`<article>${crop('about.markets.flag.'+['eu','uk','india','brazil'][i],flagBoxes[i])}<h3><a href="/markets/">${esc(r[0])}</a></h3><p>${esc(r[1])}</p></article>`).join('')}</div></div><a class="about-button secondary" href="/markets/">View All Markets</a>`);
const appBoxes=['67 2381 294 70','388 2381 294 70','711 2381 294 70','1032 2381 294 70'];
const alts=['White coating being applied with a brush.','White plastic pipes.','Open containers of coloured printing ink.','A stack of white paper.'];
body+=section('applications','Applications We Support',`<div class="about-grid">${rows(6).slice(0,4).map((r,i)=>`<article>${crop('about.application.'+['coatings','plastics','printing_inks','paper'][i],appBoxes[i],alts[i])}<h3><a href="/applications/">${esc(r[0])}</a></h3><p>${esc(r[1])}</p></article>`).join('')}</div><a class="about-button secondary" href="/applications/">View All Applications</a>`);
body+=section('how','How We Work',`<ol class="about-grid about-steps">${rows(7).map(r=>`<li><h3>${esc(r[0])}</h3><p>${esc(r[1])}</p></li>`).join('')}</ol>`);
const docs=rows(8);body+=section('documentation','Documentation & Transparency',`<p>${esc(docs[0][1])}</p><p>${esc(docs[1][1])}</p><div class="about-grid documents">${docs.slice(2).map((r,i)=>{const t=r[1].match(/^(.*?) \/ (.*?) → (.*)$/);return `<article><h3><a href="${i===2?'/request-documents/':'/documents/'}">${esc(t[1])}</a></h3><p>${esc(t[2])}</p></article>`}).join('')}</div>`);
body+=section('company','Company Facts',`<dl class="about-facts">${rows(9).map(r=>`<div><dt>${esc(r[0])}</dt><dd>${esc(r[1])}</dd></div>`).join('')}</dl>`);
const final=Object.fromEntries(rows(10).map(r=>[r[0],r[1]]));body+=section('final',final.Heading,`<div class="about-final-copy"><p>${esc(final.Body)}</p>${actions}</div>${crop('about.final_cta.background','1140 3010 290 80')}`);
const sharedPath='docs/architecture/gate3-shared-consumer-v0.2';
const {renderSharedChrome}=require(path.join(root,sharedPath,'render-shared-chrome.cjs'));
const shared=renderSharedChrome({currentPageId:'ABOUT-001',primaryLogoSrc:'../../../../brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg',reverseLogoSrc:'../../../../brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg',fontSrc:'../../../../'+sharedPath+'/Inter-Variable.ttf'});
fs.writeFileSync(path.join(out,'shared-snapshot.css'),shared.style);
fs.writeFileSync(path.join(out,'shared-snapshot.js'),shared.behavior);
fs.writeFileSync(path.join(out,'media-projection.css'),compositeCss);
const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex,nofollow"><meta name="description" content="Learn about IKHLAS TITANIUM (MALAYSIA) SDN. BHD., a Malaysia-based rutile TiO2 manufacturer with product documentation and export coordination through Port Klang."><link rel="canonical" href="/about/"><title>Malaysia Titanium Dioxide Manufacturer | TiO2 Malaysia</title><link rel="stylesheet" href="shared-snapshot.css"><link rel="stylesheet" href="media-projection.css"><link rel="stylesheet" href="about.css"></head><body data-page-id="ABOUT-001" data-site-scope="tio2-my">${shared.header}<main>${body}</main>${shared.footer}${shared.dialog}<script src="shared-snapshot.js"></script><script src="about.js"></script></body></html>`;
fs.writeFileSync(path.join(out,'ABOUT-001_D32_GATE4.html'),html);
console.log('Controlled derivation complete; no stage approval.');
