const fs=require('fs'),crypto=require('crypto');
const root='D:/23MySec/',out=root+'pages/resources/eu-trade/04_planning/gate4-v0.1/';
const old=root+'pages/resources/eu-trade/04_planning/gate3-v0.1/RES-TRADE-EU_GATE3_WIREFRAME_V0.1.html';
let html=fs.readFileSync(old,'utf8');
if(crypto.createHash('sha256').update(html).digest('hex')!=='e0dd1b936c5010a07b4f67b682e1c43ab8ec4ed283f7b1fc924ea6760be4b509')throw Error('upstream identity');
const css=`
*{box-sizing:border-box}body{margin:0;font-family:Inter,Arial,sans-serif;color:#334155;background:#fff}
main{max-width:1200px;margin:0 auto;padding:28px 40px 72px}
main .breadcrumb{max-width:960px;margin:0 auto 32px;color:#334155;font-size:14px;line-height:1.6}
main .module{max-width:960px;margin:0 auto;padding:44px 0;border-bottom:1px solid #D9E2EC}
main .module:first-of-type{padding-top:18px;border-top:4px solid #00A99D}
main .module:last-child{border:0;padding-bottom:0}
main h1,main h2,main h3{color:#062B5B;font-weight:700}
main h1{font-size:56px;line-height:1.12;letter-spacing:-1.8px;margin:0 0 28px}
main h2{font-size:36px;line-height:1.2;letter-spacing:-.8px;margin:0 0 26px;max-width:900px}
main h3{font-size:24px;font-weight:600;line-height:1.35;margin:30px 0 18px}
main p,main li{font-size:17px;line-height:1.65;margin:0 0 20px}
main strong{font-weight:600;color:#062B5B}main ul,main ol{padding-left:27px;margin:24px 0}main li{padding-left:7px}
main a{display:inline-flex;align-items:center;min-height:44px;min-width:44px;max-width:100%;color:#008078;font-weight:600;text-underline-offset:4px;overflow-wrap:anywhere}
main a:hover{color:#062B5B;text-decoration-thickness:2px}main a:focus-visible{outline:3px solid #008078;outline-offset:3px}
main code{font:inherit;font-variant-numeric:tabular-nums;color:#062B5B}
main table{border-collapse:collapse;table-layout:fixed;width:100%;margin:20px 0 26px;font-size:16px;line-height:1.55}
main th,main td{border:1px solid #D9E2EC;padding:18px 16px;vertical-align:top;text-align:left;overflow-wrap:break-word}
main th{background:#062B5B;color:#fff;font-weight:600}main tbody tr:nth-child(even){background:#F5F8FB}
main th:first-child{width:48%}main th:nth-child(2),main th:nth-child(3){width:26%}
main td:nth-child(2){font-variant-numeric:tabular-nums;font-weight:600;color:#062B5B}
main .module-1 p:nth-last-child(2),main .module-1 p:last-child{margin-bottom:12px}
main .module-1 p:nth-last-child(2) a,main .module-6>p:nth-of-type(2) a{padding:14px 22px;background:#008078;border:1px solid #008078;border-radius:6px;color:#fff;text-decoration:none;font-size:16px;line-height:1.5}
main .module-1 p:last-child a{padding:13px 22px;border:1px solid #008078;border-radius:6px;text-decoration:none;font-size:16px;line-height:1.5}
main .module-1 p:nth-last-child(2) a:hover,main .module-6>p:nth-of-type(2) a:hover{background:#062B5B;border-color:#062B5B}
main .module-1 p:last-child a:hover{background:#F5F8FB;color:#008078}
main .module-4 ol li{padding:14px 0 14px 9px;margin:0;border-bottom:1px solid #D9E2EC}main .module-4 ol li::marker{font-weight:600;color:#062B5B}
main .module-5 ul li{padding:18px 20px;margin:0 0 12px;background:#F5F8FB;border-left:3px solid #D9E2EC}
main .module-6 ul{padding-left:22px}main .module-6 ul li{font-size:15px;line-height:1.65;margin-bottom:12px}
main .module-6>p:last-child{padding-top:20px;border-top:1px solid #D9E2EC;font-size:14px;margin-bottom:0}
@media(max-width:1100px){main{padding:24px 32px 56px}main .module{padding:36px 0}main h1{font-size:44px;letter-spacing:-1.2px}main h2{font-size:32px}}
@media(max-width:600px){main{padding:22px 20px 44px}main .breadcrumb{margin-bottom:24px}main .module{padding:32px 0}main .module:first-of-type{padding-top:18px}main h1{font-size:34px;letter-spacing:-.8px;line-height:1.14;margin-bottom:24px}main h2{font-size:28px;letter-spacing:-.5px}main h3{font-size:22px}main p,main li{font-size:16px;line-height:1.65}main li{padding-left:1px}main .module-1 a,main .module-6>p:nth-of-type(2) a{width:100%;justify-content:center}main table{font-size:14px;line-height:1.55}main th,main td{padding:14px 8px}main .module-5 ul{padding-left:19px}main .module-5 ul li{padding:14px 12px}main .module-4 ol li{padding:12px 0 12px 4px}}
@media(prefers-reduced-motion:reduce){main *{animation:none!important;transition:none!important;scroll-behavior:auto!important}}
`;
html=html.replace(/\*\{box-sizing:border-box\}body\{[\s\S]*?<\/style>/,css+'</style>');
fs.writeFileSync(out+'RES-TRADE-EU_GATE4_COMPLETE_VISUAL_V0.1.html',html);
console.log('Built page-local visual from exact approved Gate3 source; shared payload unchanged.');
