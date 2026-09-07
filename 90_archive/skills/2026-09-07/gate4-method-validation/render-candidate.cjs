const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {pathToFileURL}=require('url');
const {chromium}=require('C:/Users/longe/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const dir=path.resolve(process.argv[2]);
const out=path.resolve(process.argv[3]);
const hash=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
(async()=>{
fs.mkdirSync(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true});
const records=[],network=[];
for(const width of [1440,768,390]){
 const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});
 page.on('request',r=>{if(/^https?:/.test(r.url()))network.push(r.url())});
 const url=pathToFileURL(path.join(dir,'index.html')).href;
 const capture=async state=>{
  await page.mouse.move(0,0); await page.evaluate(()=>document.fonts.ready);
  const file=`${width}-${state}.png`;await page.screenshot({path:path.join(out,file),fullPage:true});
  records.push({width,state,file,sha256:hash(path.join(out,file)),bytes:fs.statSync(path.join(out,file)).size,
   observed:await page.evaluate(()=>({fontLoaded:document.fonts.check('16px Inter'),scrollWidth:document.documentElement.scrollWidth,clientWidth:document.documentElement.clientWidth,
    selected:document.querySelector('#record-value').textContent,question:document.querySelector('#question').value,
    errorVisible:!document.querySelector('#record-error').hidden,resultVisible:!document.querySelector('#result').hidden,active:document.activeElement.id,
    controlColor:getComputedStyle(document.querySelector('button.primary')).backgroundColor,
    betaNoteVisible:[...document.querySelectorAll('.record-card:nth-child(2) .pair:last-child')].some(e=>e.getBoundingClientRect().height>0),
    illustrationVisible:document.querySelector('#illustration').getBoundingClientRect().height>0,
    targets:[...document.querySelectorAll('a,button,textarea')].filter(e=>e.getBoundingClientRect().height>0).map(e=>({id:e.id,text:e.textContent.slice(0,45),width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height}))}))});
 };
 await page.goto(url);await capture('initial');
 await page.locator('#question').fill('How should I interpret the preparation condition?');
 await page.getByRole('button',{name:'Preview request',exact:true}).click();await capture('error');
 await page.getByRole('combobox').click();await page.getByRole('option',{name:/Sample Beta/}).click();await capture('beta');
 await page.getByRole('button',{name:'Preview request',exact:true}).click();await capture('success');
 await page.getByRole('button',{name:'Clear selection',exact:true}).click();
 const reset=await page.evaluate(()=>({question:document.querySelector('#question').value,selected:document.querySelector('#record-value').textContent,errorHidden:document.querySelector('#record-error').hidden,resultHidden:document.querySelector('#result').hidden}));
 records.push({width,state:'clear-check',observed:reset});
 await page.goto(url+'?media=absent');await capture('media-absent');await page.close();
}
await browser.close();
const source=['index.html','styles.css','app.js'].map(file=>({file,sha256:hash(path.join(dir,file))}));
fs.writeFileSync(path.join(out,'observations.json'),JSON.stringify({source,records,externalRequests:network},null,2));
console.log(JSON.stringify({out,pngs:records.filter(x=>x.file).length,externalRequests:network.length,source}));
})().catch(e=>{console.error(e);process.exit(1)});
