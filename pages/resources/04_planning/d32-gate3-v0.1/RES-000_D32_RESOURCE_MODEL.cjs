// PROTOTYPE_ONLY: a planning expression of the approved eligibility contract.
// No CMS seed, production data, route readiness or publication authority is supplied here.
function projectInventory(records, now, origin='https://tio2products.com') {
  const validDate = value => typeof value==='string' && /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(Date.parse(value));
  const seen=new Set();
  const items=records.filter(r=>{
    if(r.scope!=='tio2-my'||r.language!=='en'||!r.pageId||seen.has(r.pageId))return false;
    if(!['mappingApproved','urlApproved','contentApproved','claimApproved','publicApproved','routeLive'].every(k=>r[k]===true))return false;
    if(!r.title||!r.summary||!/^\/resources\/[a-z0-9-]+\/$/.test(r.url)||r.canonical!==origin+r.url)return false;
    if(!validDate(r.lastReviewed)||!validDate(r.nextReviewDue)||r.lastReviewed>now||r.nextReviewDue<=now||r.eventReviewPending===true)return false;
    if(!['guide','technical','trade'].includes(r.type))return false;
    const maxDays=r.type==='guide'?180:r.type==='technical'||r.tradeStage==='stable'?90:30;
    if((Date.parse(now)-Date.parse(r.lastReviewed))/86400000>=maxDays)return false;
    if(r.type==='technical'&&(!r.technicalAudit||!r.nonEquivalenceAudit))return false;
    if(r.type==='trade'){
      if(r.freshness!=='CURRENT'||r.officialSource!==true)return false;
      if(!['market','topic','sourceName','sourceUrl','sourceDate','productOriginScope','statusCopy','factAnalysisLabel','freshnessOwner'].every(k=>typeof r[k]==='string'&&r[k].trim()))return false;
      if(!validDate(r.sourceDate)||r.sourceDate>now||!/^https:\/\//.test(r.sourceUrl))return false;
    }
    seen.add(r.pageId);return true;
  }).sort((a,b)=>(b.publishedAt||b.lastReviewed).localeCompare(a.publishedAt||a.lastReviewed));
  const featured=items.filter(r=>r.featured).slice(0,3);
  if(items.length===1&&featured.length===0)featured.push(items[0]);
  const latest=items.filter(r=>!featured.includes(r));
  const ordered=[...featured,...latest];
  return {state:!items.length?'H0_NO_QUALIFIED_RESOURCE':items.some(r=>r.type==='trade')?'H4_TRADE_ITEM':items.length===1?'H2_ONE_PUBLIC_RESOURCE':'H3_MULTIPLE_PUBLIC_RESOURCES',items,featured,latest,itemList:ordered.length?ordered.map((r,i)=>({position:i+1,name:r.title,url:r.canonical})):null,heroTarget:featured.length?'#featured-resources':'#research-paths'};
}
module.exports={projectInventory};
