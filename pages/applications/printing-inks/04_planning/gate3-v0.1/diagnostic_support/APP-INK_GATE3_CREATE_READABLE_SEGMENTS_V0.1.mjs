import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';

const require=createRequire(import.meta.url);
const sharp=require('sharp');

const base='D:/23MySec/pages/applications/printing-inks/04_planning/gate3-v0.1/diagnostic_support';
const segmentDir=path.join(base,'readable_segments');
fs.mkdirSync(segmentDir,{recursive:true});
const inputs=[
  {key:'1440',file:path.join(base,'APP-INK_GATE3_1440_DIAGNOSTIC_FULL_V0.1.png'),height:1600,overlap:100},
  {key:'768',file:path.join(base,'APP-INK_GATE3_768_DIAGNOSTIC_FULL_V0.1.png'),height:1600,overlap:100},
  {key:'390',file:path.join(base,'APP-INK_GATE3_390_DIAGNOSTIC_FULL_V0.1.png'),height:1200,overlap:100}
];
const inventory=[];
for(const input of inputs){
  const metadata=await sharp(input.file).metadata();
  let top=0,index=1;
  while(top<metadata.height){
    const height=Math.min(input.height,metadata.height-top);
    const output=path.join(segmentDir,`APP-INK_GATE3_${input.key}_SEGMENT_${String(index).padStart(2,'0')}_V0.1.png`);
    await sharp(input.file).extract({left:0,top,width:metadata.width,height}).toFile(output);
    inventory.push({viewport:input.key,index,top,height,path:output.replaceAll('\\','/')});
    if(top+height>=metadata.height)break;
    top+=input.height-input.overlap;
    index+=1;
  }
}
fs.writeFileSync(path.join(segmentDir,'segment-inventory.json'),JSON.stringify(inventory,null,2));
console.log(JSON.stringify({count:inventory.length,directory:segmentDir},null,2));
