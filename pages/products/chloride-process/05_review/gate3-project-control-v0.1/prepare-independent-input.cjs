const fs=require('fs'),path=require('path'),crypto=require('crypto');
const source='D:/23MySec/pages/products/chloride-process/04_planning/PRODUCT-PROC-CL_GATE2_FULL_BUYER_CLEAN_COPY_V0.2.md';
const out='D:/23MySec/pages/products/chloride-process/05_review/gate3-project-control-v0.1';
const raw=fs.readFileSync(source,'utf8');
const body=raw.split('--- BEGIN BUYER CLEAN COPY ---')[1].split('--- END BUYER CLEAN COPY ---')[0].trim();
const headings=[],paragraphs=[],links=[],blocks=[],grades=[];let sectionId=0,grade=null;
for(let b of body.split(/\r?\n\s*\r?\n/)){
 const m=b.match(/^## B-(\d+) — (.+)$/);if(m){sectionId=+m[1];grade=null;if(sectionId>=2){headings.push({level:2,text:m[2]});blocks.push(m[2])}continue;}
 if(b==='**Eyebrow**')continue;
 b=b.replace(/^\*\*(?:Primary|Secondary) action:\*\*\s*/,'');
 for(const a of b.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g))links.push({text:a[1],href:a[2],sectionId});
 const text=b.replace(/\[([^\]]+)\]\(([^)]+)\)/g,'$1');
 const h=text.match(/^(#{1,3}) (.+)$/);if(h){headings.push({level:h[1].length,text:h[2]});blocks.push(h[2]);if(sectionId===3){grade={name:h[2]};grades.push(grade)}continue;}
 blocks.push(text);
 if(!b.includes('](')&&!b.startsWith('CHLORIDE-PROCESS')){paragraphs.push(text);if(grade)grade.summary=text;}
 if(grade&&b.includes(']('))grade.href=links.at(-1).href;
}
fs.mkdirSync(out,{recursive:true});const data={source,sourceSha256:crypto.createHash('sha256').update(raw).digest('hex'),role:'Derived verification input only; approved B remains authority',headings,paragraphs,links,grades,fullText:blocks.join(' ')};
fs.writeFileSync(path.join(out,'input-check.json'),JSON.stringify(data,null,2));console.log(JSON.stringify({headings:headings.length,paragraphs:paragraphs.length,links:links.length,grades},null,2));
