const fs=require('fs');
const path=require('path');
const {pathToFileURL}=require('url');

const chrome=JSON.parse(fs.readFileSync(path.join(__dirname,'shared-chrome-data.json'),'utf8'));
const consent=JSON.parse(fs.readFileSync(path.join(__dirname,'shared-consent-data.json'),'utf8'));
const cssSource=fs.readFileSync(path.join(__dirname,'shared-chrome.css'),'utf8');
const behavior=fs.readFileSync(path.join(__dirname,'shared-chrome-behavior.js'),'utf8');

function esc(value){return String(value).replace(/[&<>\"]/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[char]));}
function navigation(currentPageId,mobile=false){
  return chrome.navigation.map(item=>`<a href="${esc(item.href)}"${item.targetPageId===currentPageId?' aria-current="page"':''}><span>${esc(item.label)}</span></a>`).join('')+
    (mobile?`<a href="${esc(chrome.rfq.href)}">${esc(chrome.rfq.label)}</a>`:'');
}
function footerLinks(ids){return ids.map(id=>{const item=chrome.navigation.find(entry=>entry.targetPageId===id);return `<a href="${esc(item.href)}">${esc(item.label)}</a>`}).join('');}

function renderSharedChrome(options={}){
  const currentPageId=options.currentPageId;
  if(!chrome.navigation.some(item=>item.targetPageId===currentPageId))throw new Error(`Unknown currentPageId: ${currentPageId}`);
  if(!options.primaryLogoSrc||!options.reverseLogoSrc)throw new Error('Approved primaryLogoSrc and reverseLogoSrc are required');
  const fontSrc=options.fontSrc||pathToFileURL(path.join(__dirname,'Inter-Variable.ttf')).href;
  const header=`<header class="header" data-shared="${esc(chrome.contractId)}"><div class="headerInner"><a href="/" class="logoLink" aria-label="TiO2 Malaysia"><img class="logo" src="${esc(options.primaryLogoSrc)}" alt="TiO2 Malaysia"></a><nav class="desktopNav" aria-label="Primary navigation">${navigation(currentPageId)}</nav><a class="headerRfq" href="${esc(chrome.rfq.href)}"><span class="rfqFull">${esc(chrome.rfq.label)}</span><span class="rfqCompact">${esc(chrome.rfq.compactLabel)}</span></a><button class="menuButton" type="button" aria-expanded="false" aria-controls="malaysia-mobile-menu">Menu</button></div><nav class="mobileNav" id="malaysia-mobile-menu" aria-label="Mobile navigation" hidden>${navigation(currentPageId,true)}</nav></header>`;
  const legal=chrome.footer.legalUtilities.map(item=>item.action==='OPEN_COOKIE_SETTINGS'?`<button id="cookie-trigger" type="button">${esc(item.label)}</button>`:`<a href="${esc(item.href)}">${esc(item.label)}</a>`).join('');
  const footer=`<footer class="footer" data-shared="${esc(chrome.contractId)}"><div class="footerGrid"><div class="brandColumn"><img class="footerLogo" src="${esc(options.reverseLogoSrc)}" alt="TiO2 Malaysia"><p>${esc(chrome.footer.description)}</p></div><nav aria-label="Footer explore navigation"><h2>Explore</h2>${footerLinks(chrome.footer.explore)}</nav><nav aria-label="Footer information navigation"><h2>Information</h2>${footerLinks(chrome.footer.information)}</nav><div class="conversionColumn"><h2>Procurement</h2><a class="footerRfq" href="${esc(chrome.rfq.href)}">${esc(chrome.rfq.label)}</a></div></div><nav class="legalUtilities" aria-label="Legal and privacy navigation">${legal}</nav><p class="copyright">${esc(chrome.footer.copyright)}</p></footer>`;
  const dialog=`<dialog class="cookie-layer" aria-labelledby="cookie-title" aria-describedby="cookie-body"><h2 id="cookie-title">${esc(consent.title)}</h2><p id="cookie-body">${esc(consent.body)}</p><div class="cookie-actions"><button type="button" data-cookie-close>${esc(consent.primaryAction)}</button><a href="${esc(consent.policyAction.href)}">${esc(consent.policyAction.label)}</a></div></dialog>`;
  return {header,footer,dialog,style:cssSource.replace('{{FONT_SRC}}',fontSrc),behavior,contractIds:{chrome:chrome.contractId,consent:consent.contractId},currentPageId};
}

module.exports={renderSharedChrome};
