const fs = require('node:fs');
const path = require('node:path');

const runtime = 'http://127.0.0.1:4391';
const cms = 'http://127.0.0.1:4390/graphql';
const htmlDecode = (s) => s.replace(/&quot;/g, '"').replace(/&amp;/g, '&');
const matches = (text, re) => [...text.matchAll(re)].map((m) => m[0]);

(async () => {
  const baseResponse = await fetch(`${runtime}/applications/`);
  const html = await baseResponse.text();
  const queryResponse = await fetch(`${runtime}/applications/?source_page_id=SHOULD_NOT_SURFACE`);
  const queryHtml = await queryResponse.text();
  const fragmentResponse = await fetch(`${runtime}/applications/#coatings`);
  const fragmentHtml = await fragmentResponse.text();
  const canonical = (body) => htmlDecode(body.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '');
  const robots = (body) => body.match(/<meta name="robots" content="([^"]+)"/)?.[1] ?? null;
  const edgeIds = [...new Set(matches(html, /APP000-EDGE-[A-Z0-9-]+/g))];
  const internalPatterns = {
    dataSiteId: matches(html, /data-site-id="[^"]+"/g),
    dataSiteScope: matches(html, /data-site-scope="[^"]+"/g),
    dataSourcePage: matches(html, /data-source-page="[^"]+"/g),
    dataGradeOccurrence: matches(html, /data-grade-occurrence="[^"]+"/g),
    dataSupportAction: matches(html, /data-support-action="[^"]+"/g),
    rscCurrentPageId: matches(html, /currentPageId/g),
    rscSourcePageId: matches(html, /sourcePageId/g),
    rscTargetPageId: matches(html, /targetPageId/g),
    rscSiteScope: matches(html, /siteScope/g),
    rscRouteReadiness: matches(html, /routeReadiness/g),
  };
  const cmsResponse = await fetch(cms, {
    method: 'POST', headers: {'content-type':'application/json'},
    body: JSON.stringify({query:'query Gate9ApplicationHub { malaysiaApplicationHubRecordJson }'}),
  });
  const cmsJson = await cmsResponse.json();
  const cmsRecord = JSON.parse(cmsJson.data.malaysiaApplicationHubRecordJson);
  const contract = JSON.parse(cmsRecord.malaysiaApplicationHubContractJson);

  const projection = {
    checkedAt: new Date().toISOString(),
    candidate: {implementation:'f0285f288e256ce0c48205931dd8edf4b802b285', evidenceHead:'ce3f4c5c21033e56472ec53586173279fb78c415', buildId:'jf9b1VFzbgKGSQMVOMMbU'},
    response: {status:baseResponse.status, finalUrl:baseResponse.url, canonical:canonical(html), robots:robots(html), htmlLang:html.match(/<html lang="([^"]+)"/)?.[1] ?? null},
    alternateRequests: {
      query: {status:queryResponse.status, finalUrl:queryResponse.url, canonical:canonical(queryHtml), robots:robots(queryHtml), injectedValueSurfaced:queryHtml.includes('SHOULD_NOT_SURFACE')},
      fragment: {status:fragmentResponse.status, finalUrl:fragmentResponse.url, canonical:canonical(fragmentHtml), robots:robots(fragmentHtml)},
    },
    internalPatterns: Object.fromEntries(Object.entries(internalPatterns).map(([key, value]) => [key, {count:value.length, examples:[...new Set(value)].slice(0,5)}])),
    edgeIds: {count:edgeIds.length, values:edgeIds, approvedSpecialtyIdPresent:edgeIds.includes('APP000-EDGE-SPEC-01'), runtimeSpecialtyIdPresent:edgeIds.includes('APP000-EDGE-SPECIALTY-01')},
    prohibitedPublicQueryTokenCount: matches(html, /source_page_id/g).length,
  };
  const cmsEvidence = {
    checkedAt: new Date().toISOString(), endpoint:cms, status:cmsResponse.status,
    evidenceMode:'LOCAL_SIMULATION_SCOPED_PROXY_READING_COMMITTED_WORDPRESS_PLUGIN_CONFIG',
    record:{id:cmsRecord.id,status:cmsRecord.status,modifiedGmt:cmsRecord.modifiedGmt,siteScopes:cmsRecord.siteScopes,publishingFields:cmsRecord.publishingFields,routeReadiness:cmsRecord.routeReadiness},
    contractSummary:{pageId:contract.pageId,siteScope:contract.siteScope,publicPath:contract.publicPath,moduleCount:contract.modules?.length,routeRegistryCount:contract.routeRegistry?.length,gradeOccurrenceCount:contract.gradeOccurrences?.length ?? contract.applicationGroups?.flatMap((g)=>g.grades??[]).length,keys:Object.keys(contract)},
    specialtyEdge: JSON.stringify(contract).match(/APP000-EDGE-(?:SPEC|SPECIALTY)-01/)?.[0] ?? null,
  };
  fs.writeFileSync(path.join(__dirname,'independent-public-projection-audit.json'), JSON.stringify(projection,null,2)+'\n');
  fs.writeFileSync(path.join(__dirname,'independent-cms-observation.json'), JSON.stringify(cmsEvidence,null,2)+'\n');
})().catch((error)=>{fs.writeFileSync(path.join(__dirname,'projection-cms-error.txt'),String(error.stack||error)+'\n');process.exitCode=1});
