const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec',out=path.resolve(__dirname,'..').replaceAll('\\','/');
const g3=root+'/pages/markets/spain/04_planning/gate3-v0.1';
const source=g3+'/MARKET-EU-ES_GATE3_RESPONSIVE_WIREFRAME_V0.1.html';
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
if(sha(source)!=='d2fb26ae9ee230886d9cb31c401cc47d0deba3f030d578f16697c97a79a1ca64')throw Error('G3 identity mismatch');
for(const d of ['dependencies','approval_core','diagnostic_support/preflight'])fs.mkdirSync(out+'/'+d,{recursive:true});
const mappings=[
 [g3+'/dependencies/Inter-Variable.ttf','dependencies/Inter-Variable.ttf'],
 [g3+'/dependencies/Inter-OFL.txt','dependencies/Inter-OFL.txt'],
 [root+'/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg','dependencies/tio2-malaysia-primary-horizontal-v0.1.svg'],
 [root+'/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg','dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg']
];
for(const [from,to]of mappings)fs.copyFileSync(from,out+'/'+to);
let html=fs.readFileSync(source,'utf8');
for(const [from,to]of mappings.slice(2))html=html.replace('file:///'+from,to);
html=html.replace('</head>','<link rel="stylesheet" href="visual-direction.css"></head>');
const target=out+'/MARKET-EU-ES_GATE4_VISUAL_SAMPLES_V0.1.html';
fs.writeFileSync(target,html);
fs.writeFileSync(out+'/diagnostic_support/source-derivation.json',JSON.stringify({original:{path:source,sha256:sha(source)},candidate:{path:target,sha256:sha(target)},allowedChanges:['Two production logo references made package-relative; SVG bytes unchanged','One visual-direction.css link appended; base G3 content, inline CSS, shared Consumer V0.2 and behavior retained'],dependencies:mappings.map(([origin,relativePath])=>({origin,relativePath,path:out+'/'+relativePath,bytes:fs.statSync(out+'/'+relativePath).size,sha256:sha(out+'/'+relativePath),originSha256:sha(origin)})),inverseExact:html.replace('<link rel="stylesheet" href="visual-direction.css">','').replace(mappings[2][1],'file:///'+mappings[2][0]).replace(mappings[3][1],'file:///'+mappings[3][0])===fs.readFileSync(source,'utf8')},null,2));
console.log(JSON.stringify({source:target,sha256:sha(target)}));
