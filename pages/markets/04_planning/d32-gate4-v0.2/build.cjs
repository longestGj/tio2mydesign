// D23 PROTOTYPE_ONLY projection of ROOT-NARROW-VISUAL-20260921 + controller common token ruling.
const fs=require('fs'),path=require('path'),crypto=require('crypto'),prior=path.resolve(__dirname,'../d32-gate4-v0.1');
const input=fs.readFileSync(path.join(prior,'market-visual.html'));
if(crypto.createHash('sha256').update(input).digest('hex')!=='2b9ba0dac6f6988e065b4b99a9be49d5e560b96f32c5a318abfa516dd1412f3c')throw Error('Prior reviewed HTML changed');
fs.writeFileSync(path.join(__dirname,'market-visual.html'),input.toString().replace('href="visual.css"','href="../d32-gate4-v0.1/visual.css"').replace('</head>','<link rel="stylesheet" href="root-narrow-projection.css"></head>'));
