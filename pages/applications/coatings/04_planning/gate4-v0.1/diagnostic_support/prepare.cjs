const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root='D:/23MySec';
const out=path.resolve(__dirname,'..').replaceAll('\\','/');
const g3=root+'/pages/applications/coatings/04_planning/gate3-v0.3/APP-COAT_GATE3_RESPONSIVE_WIREFRAME_V0.3.html';
const target=out+'/APP-COAT_GATE4_COMPLETE_VISUAL_V0.1.html';
const deps=out+'/dependencies';
fs.mkdirSync(deps,{recursive:true});fs.mkdirSync(out+'/approval_core',{recursive:true});fs.mkdirSync(out+'/diagnostic_support/4a',{recursive:true});fs.mkdirSync(out+'/diagnostic_support/readable-segments',{recursive:true});
for(const [src,name] of [
  [root+'/docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf','Inter-Variable.ttf'],
  [root+'/docs/architecture/gate3-shared-consumer-v0.2/Inter-OFL.txt','Inter-OFL.txt'],
  [root+'/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg','tio2-malaysia-primary-horizontal-v0.1.svg'],
  [root+'/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg','tio2-malaysia-reverse-monochrome-v0.1.svg']
]) fs.copyFileSync(src,deps+'/'+name);
let html=fs.readFileSync(g3,'utf8')
 .replaceAll("file:///D:/23MySec/docs/architecture/gate3-shared-consumer-v0.2/Inter-Variable.ttf","dependencies/Inter-Variable.ttf")
 .replaceAll("file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg","dependencies/tio2-malaysia-primary-horizontal-v0.1.svg")
 .replaceAll("file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg","dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg")
 .replace('</head>','<link rel="stylesheet" href="visual-direction.css"></head>');
fs.writeFileSync(target,html);
const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
const id=p=>({path:p,bytes:fs.statSync(p).size,sha256:sha(p)});
fs.writeFileSync(out+'/diagnostic_support/source-derivation.json',JSON.stringify({
  date:new Date().toISOString(),worksetId:'COAT-G4-COMPLETE-V01',source:id(g3),target:id(target),visualLayer:id(out+'/visual-direction.css'),dependencies:fs.readdirSync(deps).sort().map(n=>id(deps+'/'+n)),transformation:[
    'Preserve G3 document, main, inline style and behavior verbatim.',
    'Localize only approved font and production SVG URLs into the Gate4 package.',
    'Append one page-only visual-direction stylesheet after the inherited inline style.'
  ]
},null,2));
console.log(JSON.stringify({target:id(target),dependencies:fs.readdirSync(deps).length}));
