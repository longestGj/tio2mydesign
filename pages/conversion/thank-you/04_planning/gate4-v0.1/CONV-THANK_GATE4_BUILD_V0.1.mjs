import fs from 'node:fs';

const root = 'D:/23MySec';
const gate3 = `${root}/pages/conversion/thank-you/04_planning/gate3-v0.2/CONV-THANK_GATE3_RESPONSIVE_WIREFRAME_V0.2.html`;
const out = `${root}/pages/conversion/thank-you/04_planning/gate4-v0.1`;
const target = `${out}/CONV-THANK_GATE4_EDITABLE_SOURCE_V0.1.html`;

fs.mkdirSync(`${out}/approval_core`, { recursive: true });
fs.mkdirSync(`${out}/diagnostic_support`, { recursive: true });

let html = fs.readFileSync(gate3, 'utf8');
const visualCss = `
:root{color-scheme:light;--navy:#062b5b;--deep:#031b3a;--teal:#008078;--teal-dark:#006b65;--body:#334155;--muted:#64748b;--soft:#f4f7fa;--line:#d7e1eb;--white:#fff}
*{box-sizing:border-box}body{margin:0;color:var(--body);background:#fff;font-family:Inter,Arial,sans-serif;font-size:16px;line-height:1.65}.resultMain{position:relative;isolation:isolate;min-height:570px;padding:88px 32px;background:linear-gradient(145deg,#f7fafc 0%,#eef4f7 100%);display:grid;place-items:center;overflow:hidden}.resultMain:before,.resultMain:after{content:"";position:absolute;z-index:-1;border-radius:50%;pointer-events:none}.resultMain:before{width:480px;height:480px;right:-190px;top:-250px;background:radial-gradient(circle,rgba(0,128,120,.12),rgba(0,128,120,0) 69%)}.resultMain:after{width:420px;height:420px;left:-180px;bottom:-250px;background:radial-gradient(circle,rgba(6,43,91,.10),rgba(6,43,91,0) 70%)}.resultPanel{position:relative;width:min(920px,100%);padding:64px 64px 60px;border:1px solid rgba(6,43,91,.14);border-radius:16px;background:rgba(255,255,255,.98);box-shadow:0 24px 60px rgba(3,27,58,.10),0 3px 10px rgba(3,27,58,.05);text-align:center;overflow:hidden}.resultPanel:before{content:"";position:absolute;inset:0 0 auto;height:5px;background:linear-gradient(90deg,var(--navy),var(--teal))}.resultPanel[hidden]{display:none}.successCue{display:flex;align-items:center;justify-content:center;gap:13px;color:var(--teal-dark);font-size:13px;font-weight:780;letter-spacing:.12em}.successIcon{width:52px;height:52px;border:2px solid var(--teal);border-radius:50%;display:inline-grid;place-items:center;color:#fff;background:var(--teal);box-shadow:0 0 0 7px rgba(0,128,120,.09);font-size:25px;font-weight:700;line-height:1}.resultPanel h1{max-width:760px;margin:26px auto 18px;color:var(--navy);font-size:clamp(42px,4.15vw,58px);font-weight:730;line-height:1.1;letter-spacing:-.034em;text-wrap:balance}.resultPanel p{max-width:690px;margin:0 auto;color:var(--body);font-size:18px;line-height:1.7;text-wrap:pretty}.directState{padding-top:72px}.directState h1{max-width:620px;margin-top:0}.resultActions{margin-top:36px;display:flex;justify-content:center;flex-wrap:wrap;gap:12px}.resultAction{min-width:176px;min-height:50px;padding:12px 22px;border:1.5px solid var(--teal);border-radius:8px;display:inline-flex;align-items:center;justify-content:center;color:var(--teal-dark);background:#fff;font-size:15px;font-weight:720;line-height:1.35;text-decoration:none;transition:background-color .16s ease,border-color .16s ease,color .16s ease,transform .16s ease}.resultAction.primary{border-color:var(--teal);color:#fff;background:var(--teal)}.resultAction:hover{border-color:var(--navy);color:var(--navy);background:#f3f7fa}.resultAction.primary:hover{border-color:var(--teal-dark);color:#fff;background:var(--teal-dark)}.resultAction:focus-visible{outline:3px solid var(--navy);outline-offset:3px}.threeActions .resultAction{min-width:196px}
@media(max-width:1100px){.resultMain{min-height:540px;padding:68px 24px}.resultPanel{padding:54px 42px 52px}.resultPanel h1{font-size:46px}.directState{padding-top:62px}}
@media(max-width:560px){.resultMain{min-height:560px;padding:44px 18px}.resultPanel{padding:42px 20px 34px;border-radius:12px}.resultPanel:before{height:4px}.successCue{flex-direction:column;gap:12px;font-size:12px}.successIcon{width:50px;height:50px}.resultPanel h1{margin-top:24px;font-size:35px;line-height:1.13}.resultPanel p{font-size:16px;line-height:1.65}.directState{padding-top:48px}.directState h1{margin-top:0}.resultActions{display:grid;grid-template-columns:1fr;margin-top:30px;gap:11px}.resultAction,.threeActions .resultAction{width:100%;min-width:0;min-height:50px}.resultMain:before{right:-300px}.resultMain:after{left:-280px}}
@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important;transition:none!important}}
`;

const start = html.indexOf(':root{color-scheme:light;');
const endToken = '@media(prefers-reduced-motion:reduce){*{scroll-behavior:auto!important}}';
const end = html.indexOf(endToken, start);
if (start < 0 || end < 0) throw new Error('Gate 3 page CSS boundary not found');
html = html.slice(0, start) + visualCss.trim() + html.slice(end + endToken.length);
html = html.replaceAll('gate3ResultState', 'gate4ResultState');
fs.writeFileSync(target, html);
console.log(JSON.stringify({ source: target, bytes: fs.statSync(target).size, derivedFrom: gate3 }, null, 2));
