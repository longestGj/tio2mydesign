// Read-only, in-memory native-pixel inspection of immutable original PNGs.
// Emits a crop to the review tool; never writes or modifies an image.
const sharp=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const path=require('path');
(async()=>{const file=path.join(__dirname,process.argv[2]);const m=await sharp(file).metadata();const top=Number(process.argv[3]||0);const out=await sharp(file).extract({left:0,top,width:m.width,height:Math.min(1800,m.height-top)}).jpeg({quality:85}).toBuffer();console.log(out.toString('base64'));})().catch(e=>{console.error(e);process.exit(1)});
