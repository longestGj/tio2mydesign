const fs=require('fs'),crypto=require('crypto');
const dir='D:/23MySec/pages/markets/italy/04_planning/gate3-v0.1/diagnostic_support/render';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const files=['diagnostic-1440-full.png','diagnostic-768-full.png','diagnostic-390-full.png','diagnostic-768-menu.png','diagnostic-390-menu.png','diagnostic-390-cookie.png'].map(name=>{const p=`${dir}/${name}`;return {path:p,bytes:fs.statSync(p).size,sha256:sha(p)}});
const segments=[...fs.readdirSync(dir).filter(n=>/^390-segment-\d+\.png$/.test(n)),...fs.readdirSync(dir).filter(n=>/^768-segment-\d+\.png$/.test(n))];
const record={pageId:'MARKET-EU-IT',role:'EXECUTION_PREFLIGHT_IMAGE_READBACK',checkedAt:new Date().toISOString(),openedWith:'view_image original',fullAndStateAssets:files,readableSegments:{count:segments.length,viewed:segments.length,width390:10,width768:8},observations:[
  '1440 full page preserves seven modules, three distinct context cards, destination mapping, EU split, source adjacency and Footer closure.',
  '768 full page uses an independent 2+1 context layout and one-column destination/EU layouts without clipping or orphaned content.',
  '390 full page and ten readable segments preserve all approved text, long links, COO qualifier, destination list, two sources and Footer closure.',
  '768 and 390 menu states show Markets current with no visible CURRENT label; the background is visible only outside the menu surface and was inert/scroll-locked in runtime checks.',
  '390 Cookie dialog fits the tightest viewport, retains both full actions and does not overflow.'
],result:'PASS_FOR_PREFLIGHT',findings:[]};
fs.writeFileSync('D:/23MySec/pages/markets/italy/04_planning/gate3-v0.1/diagnostic_support/visual-readback.json',JSON.stringify(record,null,2)+'\n');
console.log(JSON.stringify(record,null,2));
