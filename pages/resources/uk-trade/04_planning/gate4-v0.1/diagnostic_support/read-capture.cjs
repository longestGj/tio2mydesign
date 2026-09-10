const sharp=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const out='D:/23MySec/pages/resources/uk-trade/04_planning/gate4-v0.1/approval_core';
(async()=>{const w=Number(process.argv[2]),p=out+'/RES-TRADE-UK_G4_'+w+'-full.png',m=await sharp(p).metadata();for(let top=0;top<m.height;top+=1750){let image=await sharp(p).extract({left:0,top,width:w,height:Math.min(1850,m.height-top)}).png().toBuffer();console.log(JSON.stringify({width:w,y:top,source:p,image:image.toString('base64')}))}})();
