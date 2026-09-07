// PL-G4-IR01 targeted verification. Captures viewport without locator-induced re-scroll.
module.exports=async function targeted({page,width,check,ratio,recordCapture,preflight,cookieOnly=false}){
 const cases=cookieOnly?[['cookie-policy','.cookie-actions a',false]]:[
  ['pl-04-support','#pl-04 .body-action+.body-action a',true],
  ['pl-05-support','#pl-05 .body-action+.body-action a',true],
  ['hero-primary','#pl-01 .body-action:first-of-type a',false],
  ['final-primary','#pl-05 .body-action:first-of-type a',false],
  ['documents-primary','#pl-04 .body-action:first-of-type a',false],
  ['hero-products','#pl-01 .body-action+.body-action a',false],
  ['review-products','#pl-03 .body-action a',false]
 ];
 const state=loc=>loc.evaluate(e=>{const s=getComputedStyle(e),r=e.getBoundingClientRect();let p=e,bg=s.backgroundColor;while(bg==='rgba(0, 0, 0, 0)'&&p.parentElement){p=p.parentElement;bg=getComputedStyle(p).backgroundColor}return {label:e.textContent,href:e.getAttribute('href'),width:r.width,height:r.height,color:s.color,background:s.backgroundColor,effectiveBackground:bg,font:s.font,fontSize:s.fontSize,border:s.border,outline:s.outline,outlineOffset:s.outlineOffset,hover:e.matches(':hover'),focusVisible:e.matches(':focus-visible'),focused:document.activeElement===e}});
 for(const [name,selector,affected] of cases){
  const loc=page.locator(selector);await loc.scrollIntoViewIfNeeded();await page.mouse.move(0,0);await loc.evaluate(e=>e.blur());const normal=await state(loc);normal.contrast=ratio(normal.color,normal.effectiveBackground);check(normal.contrast>=4.5,width+' IR01 '+name+' normal',normal);
  await loc.hover();const hovered=await state(loc);hovered.contrast=ratio(hovered.color,hovered.effectiveBackground);check(hovered.hover&&hovered.contrast>=4.5&&hovered.width===normal.width&&hovered.height===normal.height&&hovered.label===normal.label&&hovered.href===normal.href,width+' IR01 '+name+' real hover',hovered);
  if(affected){check(hovered.background==='rgb(245, 248, 251)'&&hovered.color==='rgb(0, 128, 120)',width+' IR01 explicit pair '+name,hovered);if(!preflight)await recordCapture(name+'-hover');const after=await state(loc);check(after.hover&&after.background===hovered.background,width+' IR01 '+name+' hover retained after capture',after)}
  await page.mouse.move(0,0);await loc.focus();await page.keyboard.press('Tab');await page.keyboard.press('Shift+Tab');const focused=await state(loc);focused.contrast=ratio(focused.color,focused.effectiveBackground);check(focused.focused&&focused.focusVisible&&focused.outline.includes('3px')&&focused.contrast>=4.5&&focused.width===normal.width&&focused.height===normal.height,width+' IR01 '+name+' real keyboard focus',focused);
  if(affected&&width===390&&!preflight){await recordCapture(name+'-keyboard-focus');const after=await state(loc);check(after.focusVisible&&after.focused,width+' IR01 '+name+' focus retained after capture',after)}
 }
};
