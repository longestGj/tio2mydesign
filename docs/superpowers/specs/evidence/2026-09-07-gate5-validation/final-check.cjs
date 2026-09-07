const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../../../../..');
const report='docs/superpowers/specs/2026-09-07-gate5-skill-validation-v0.1.md';
const files=['agents/README.md','skills/README.md','01_PROJECT_INDEX.md',report,'docs/superpowers/specs/2026-09-07-gate5-design-user-approval-v0.1.md'].map(p=>path.join(root,p));
function scan(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){if(['source','exports','diagnostic','snapshots'].includes(entry.name))continue;const p=path.join(dir,entry.name);if(entry.isDirectory())scan(p);else if(p.endsWith('.md'))files.push(p);}}
scan(__dirname);
const output=path.join(__dirname,'final-check.json');
if(!fs.existsSync(output)) fs.writeFileSync(output,JSON.stringify({status:'IN_PROGRESS'})+'\n');
const missing=[], links=[];
for(const file of files){const s=fs.readFileSync(file,'utf8');for(const m of s.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)){let t=m[1].replace(/^<|>$/g,'').split(/[?#]/)[0];if(!t || /^(https?:|app:|codex:|mailto:)/i.test(t))continue;t=t.replace(/:\d+$/,'');const target=path.resolve(path.dirname(file),t);const r={file:path.relative(root,file),target,pathExists:fs.existsSync(target)};links.push(r);if(!r.pathExists)missing.push(r);}}
const identities=files.map(p=>({path:path.relative(root,p),bytes:fs.statSync(p).size,sha256:crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex')}));
const result={checkedAt:new Date().toISOString(),scope:'Final Markdown local links and document identities; source/assets verified separately by controller-check.json.',files:identities,linkCount:links.length,missing,pass:!missing.length};
fs.writeFileSync(output,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify({files:files.length,links:links.length,missing,pass:result.pass},null,2));
