const sharp=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp');
const base='D:/23MySec/pages/resources/uk-trade/04_planning/gate4-v0.1/approval_core/';
(async()=>{const w=+process.argv[2],top=+process.argv[3],p=base+`RES-TRADE-UK_G4_${w}-full.png`,m=await sharp(p).metadata();await sharp(p).extract({left:0,top,width:w,height:Math.min(1850,m.height-top)}).toFile(__dirname+'/view-temp.png');})();
