const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec',out=path.resolve(__dirname,'..').replaceAll('\\','/');
const g3=root+'/pages/documents/certificate-of-origin/04_planning/gate3-v0.1',source=g3+'/DOC-COO_GATE3_RESPONSIVE_WIREFRAME_V0.1.html';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
if(sha(source)!=='04b65172bf9fbebce42c3cdc122e5f9f018f466e11a849a23113f7c214b82105')throw Error('Approved G3 mismatch');
for(const d of ['dependencies','approval_core','diagnostic_support/preflight'])fs.mkdirSync(out+'/'+d,{recursive:true});
const mappings=[['Inter-Variable.ttf',g3+'/dependencies/Inter-Variable.ttf'],['Inter-OFL.txt',g3+'/dependencies/Inter-OFL.txt'],['tio2-malaysia-primary-horizontal-v0.1.svg',root+'/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg'],['tio2-malaysia-reverse-monochrome-v0.1.svg',root+'/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg']];
let html=fs.readFileSync(source,'utf8');for(const [name,from]of mappings){fs.copyFileSync(from,out+'/dependencies/'+name);if(name.endsWith('.svg'))html=html.replace('file:///'+from,'dependencies/'+name);}
html=html.replace('</head>','<link rel="stylesheet" href="visual-direction.css"></head>');let inverse=html.replace('<link rel="stylesheet" href="visual-direction.css">','');for(const [name,from]of mappings.filter(x=>x[0].endsWith('.svg')))inverse=inverse.replace('dependencies/'+name,'file:///'+from);
const target=out+'/DOC-COO_GATE4_VISUAL_SAMPLES_V0.1.html';fs.writeFileSync(target,html);
fs.writeFileSync(out+'/diagnostic_support/source-derivation.json',JSON.stringify({original:{path:source,sha256:sha(source)},candidate:{path:target,sha256:sha(target)},inverseExact:inverse===fs.readFileSync(source,'utf8'),allowedChanges:['Two unchanged production SVGs made package-relative','Append page-only visual-direction.css; no G3 main/style/script changes'],dependencies:mappings.map(([name,origin])=>({path:out+'/dependencies/'+name,origin,bytes:fs.statSync(out+'/dependencies/'+name).size,sha256:sha(out+'/dependencies/'+name),originSha256:sha(origin)}))},null,2));
console.log(JSON.stringify({path:target,bytes:fs.statSync(target).size,sha256:sha(target)}));
