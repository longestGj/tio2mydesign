import fs from 'node:fs';
import path from 'node:path';

const d16='D:/16Wordpress_nextjs/.worktrees/de-it-su-r706-chemours-gate8';
const configDir=path.join(d16,'wordpress/plugins/tio2-site-model/config');
const output='D:/23MySec/docs/architecture/gate9-de-it-su-r706-chemours-v1.0/fresh-external-link-readback.json';
const names=['market-eu-de','market-eu-it','product-proc-su','res-r706','res-chemours'];
const rows=[];

for(const name of names){
  const contract=JSON.parse(fs.readFileSync(path.join(configDir,`tio2-my-editorial-${name}.json`),'utf8'));
  const urls=[...contract.bodyHtml.matchAll(new RegExp('href="(https?://[^"]+)"','g'))].map(match=>match[1]);
  for(const url of [...new Set(urls)]){
    try{
      const response=await fetch(url,{redirect:'follow',signal:AbortSignal.timeout(20000)});
      const contentType=response.headers.get('content-type');
      const body=await response.text();
      const title=body.match(/<title[^>]*>([^<]*)<\/title>/iu)?.[1]??null;
      rows.push({page:name,url,status:response.status,finalUrl:response.url,contentType,title});
    }catch(error){
      rows.push({page:name,url,error:error instanceof Error?error.message:String(error)});
    }
  }
}

fs.writeFileSync(output,JSON.stringify({checkedAt:new Date().toISOString(),rows},null,2));
console.log(JSON.stringify(rows,null,2));
