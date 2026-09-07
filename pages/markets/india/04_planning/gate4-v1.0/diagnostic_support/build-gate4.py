from pathlib import Path

root = Path(__file__).resolve().parents[1]
html_path = root / "MARKET-IN-001_GATE4_COMPLETE_VISUAL_V1.0.html"
html = html_path.read_text(encoding="utf-8")

html = html.replace(
    "<title>Titanium Dioxide Supplier India | TiO2 Malaysia</title>",
    '<title>Titanium Dioxide Supplier India | TiO2 Malaysia</title>'
    '<meta name="description" content="Explore Malaysia-origin industrial titanium dioxide Grades for coatings, plastics and masterbatch production in India. Request documents or request a quote.">'
    '<meta name="robots" content="noindex,nofollow">'
    '<link rel="canonical" href="https://tio2malaysia.com/markets/india/">'
    '<script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://tio2malaysia.com/markets/india/#webpage","url":"https://tio2malaysia.com/markets/india/","name":"Titanium Dioxide Supplier India | TiO2 Malaysia","description":"Explore Malaysia-origin industrial titanium dioxide Grades for coatings, plastics and masterbatch production in India. Request documents or request a quote.","inLanguage":"en"},{"@type":"BreadcrumbList","@id":"https://tio2malaysia.com/markets/india/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://tio2malaysia.com/"},{"@type":"ListItem","position":2,"name":"Markets","item":"https://tio2malaysia.com/markets/"},{"@type":"ListItem","position":3,"name":"India","item":"https://tio2malaysia.com/markets/india/"}]}]}</script>'
)
html = html.replace(
    "file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg",
    "dependencies/tio2-malaysia-primary-horizontal-v0.1.svg",
).replace(
    "file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg",
    "dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg",
)

visual_css = r'''
<style id="gate4-complete-visual">
:root{--navy:#062b5b;--deep:#031b3a;--teal:#008078;--teal-dark:#006b65;--mint:#dff5f2;--ice:#f3f7fa;--line:#d9e2ec;--ink:#253b55;--muted:#516174;--white:#fff}
body{background:#fff;color:var(--ink)}
.header{box-shadow:0 10px 28px rgb(6 43 91 / 7%)}
.headerRfq,.footerRfq,main .actions .primary{transition:background-color .18s ease,transform .18s ease,box-shadow .18s ease}
.headerRfq:hover,.footerRfq:hover,main .actions .primary:hover{background:var(--teal-dark);box-shadow:0 8px 20px rgb(0 128 120 / 20%);transform:translateY(-1px)}
main{overflow:hidden;font-size:17px;line-height:1.72}
main .breadcrumb{position:relative;z-index:2;padding:24px max(32px,calc((100% - 1180px)/2));max-width:none;background:#fff}
main .module{padding:88px max(32px,calc((100% - 1180px)/2));border:0}
main .content{position:relative;max-width:1180px;margin:auto}
main h1,main h2,main h3{color:var(--navy)}
main h1{max-width:760px;font-size:58px;line-height:1.06;letter-spacing:-.045em;font-weight:700}
main h2{font-size:38px;line-height:1.15;letter-spacing:-.03em;font-weight:680}
main h3{font-size:21px;letter-spacing:-.015em}
main p{color:var(--ink)}
main .module-1{position:relative;min-height:560px;padding-top:104px;padding-bottom:104px;background:linear-gradient(112deg,#eef8f7 0%,#f5f9fc 54%,#fff 100%)}
main .module-1::before{content:"";position:absolute;inset:0 0 0 58%;background:linear-gradient(145deg,rgb(0 128 120 / 10%),transparent 52%),radial-gradient(circle at 68% 30%,rgb(0 169 157 / 18%) 0 3px,transparent 4px),radial-gradient(circle at 38% 58%,rgb(6 43 91 / 13%) 0 3px,transparent 4px);background-size:auto,44px 44px,44px 44px;clip-path:polygon(18% 0,100% 0,100% 100%,0 100%)}
main .module-1::after{content:"INDIA  /  INDUSTRIAL PROCUREMENT";position:absolute;right:max(32px,calc((100% - 1180px)/2));bottom:70px;color:var(--navy);font-size:12px;font-weight:750;letter-spacing:.18em;writing-mode:vertical-rl;opacity:.58}
main .module-1 .content::before{content:"MARKET BRIEF";display:inline-flex;margin-bottom:24px;padding:8px 12px;border:1px solid rgb(0 128 120 / 25%);border-radius:999px;color:var(--teal-dark);background:rgb(255 255 255 / 72%);font-size:12px;font-weight:750;letter-spacing:.13em}
main .module-1 p{max-width:735px;font-size:20px;color:#38516d}
main .actions{margin-top:30px}
main .actions a{min-height:50px;padding:12px 22px;border-radius:5px;transition:color .18s ease,background-color .18s ease,border-color .18s ease,transform .18s ease}
main .actions a:not(.primary){background:#fff}
main .actions a:not(.primary):hover{border-color:var(--teal-dark);background:var(--mint);color:var(--teal-dark);transform:translateY(-1px)}
main .module-2{background:var(--navy);color:#fff}
main .module-2 .content{display:grid;grid-template-columns:minmax(260px,.75fr) minmax(0,1.25fr);gap:92px;align-items:start}
main .module-2 h2{grid-row:1/3;color:#fff}
main .module-2 h2::before{content:"01";display:block;margin-bottom:20px;color:#73d8cf;font-size:14px;letter-spacing:.16em}
main .module-2 p{grid-column:2;color:#e3edf5}
main .module-2 p:first-of-type{font-size:20px;line-height:1.65}
main .module-3{background:#fff}
main .module-3 h2::before,main .module-4 h2::before,main .module-5 h2::before{display:block;margin-bottom:18px;color:var(--teal);font-size:14px;letter-spacing:.16em}
main .module-3 h2::before{content:"02  /  APPLICATION CONTEXT"}
main .contexts{gap:20px;margin:40px 0 36px}
main .contexts article{position:relative;min-height:300px;padding:32px 28px;border:1px solid var(--line);border-top:4px solid var(--teal);border-radius:8px;background:linear-gradient(180deg,#fff,#f8fbfc);box-shadow:0 12px 30px rgb(6 43 91 / 7%)}
main .contexts article::after{position:absolute;right:24px;bottom:20px;color:rgb(6 43 91 / 9%);font-size:54px;font-weight:800;line-height:1}
main .contexts article:nth-child(1)::after{content:"01"}main .contexts article:nth-child(2)::after{content:"02"}main .contexts article:nth-child(3)::after{content:"03"}
main .contexts p{position:relative;z-index:1;color:#40566e}
main .module-4{background:var(--ice)}
main .module-4 h2::before{content:"03  /  DOCUMENT READINESS"}
main .module-4 .content{padding-right:300px}
main .module-4 .content::after{content:"TDS\A SDS\A COA\A COO";white-space:pre;position:absolute;top:6px;right:0;width:220px;padding:28px;border-radius:10px;background:var(--deep);color:#fff;font-size:28px;font-weight:720;line-height:1.55;letter-spacing:.08em;box-shadow:14px 14px 0 var(--mint)}
main .module-4 p:nth-of-type(2){max-width:760px;margin:28px 0;padding:18px 20px;border-left:4px solid var(--teal);background:#fff;color:var(--navy);font-weight:650}
main .module-4 .actions:last-child a{font-size:14px}
main .module-5{position:relative;background:linear-gradient(120deg,#e7f4f2,#f6f9fb)}
main .module-5 h2::before{content:"04  /  RFQ PREPARATION"}
main .module-5 .content{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(320px,.9fr);column-gap:76px}
main .module-5 h2,main .module-5> .content>p:first-of-type{grid-column:1/-1}
main .module-5 ul{grid-column:1;margin:16px 0 24px;padding:0;list-style:none;counter-reset:rfq}
main .module-5 li{position:relative;margin:0;padding:15px 0 15px 54px;border-bottom:1px solid rgb(6 43 91 / 14%);counter-increment:rfq}
main .module-5 li::before{content:counter(rfq,decimal-leading-zero);position:absolute;left:0;color:var(--teal-dark);font-size:13px;font-weight:750;letter-spacing:.08em}
main .module-5> .content>p:nth-of-type(2){grid-column:2;grid-row:3;align-self:start;margin-top:16px;padding:28px;border-radius:8px;background:var(--navy);color:#fff;box-shadow:14px 14px 0 rgb(0 128 120 / 16%)}
main .module-5 .actions{grid-column:2;grid-row:4;margin-top:-108px;align-self:start;padding:0 28px}
@media(max-width:1100px){main .module{padding:64px 32px}main .module-1{min-height:500px;padding-top:72px}main h1{font-size:48px;max-width:670px}main .module-1::before{inset:0 0 0 70%}main .module-1::after{display:none}main .module-2 .content{gap:52px}main .contexts{grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}main .contexts article{display:block;min-height:345px;padding:26px 22px}main .module-4 .content{padding-right:250px}main .module-4 .content::after{width:190px;font-size:24px}main .module-5 .content{grid-template-columns:1fr;column-gap:0}main .module-5 h2,main .module-5> .content>p:first-of-type,main .module-5 ul,main .module-5> .content>p:nth-of-type(2),main .module-5 .actions{grid-column:1;grid-row:auto}main .module-5> .content>p:nth-of-type(2){margin-top:14px}main .module-5 .actions{margin:12px 0 0;padding:0}}
@media(max-width:700px){main .breadcrumb{padding:16px 20px}main .module{padding:52px 20px}main .module-1{min-height:0;padding-top:60px;padding-bottom:64px}main .module-1::before{inset:0;opacity:.48;clip-path:none}main .module-1 .content{z-index:1}main h1{font-size:40px}main h2{font-size:31px}main .module-1 p{font-size:18px}main .module-2 .content{display:block}main .module-2 h2{margin-bottom:32px}main .module-2 p{display:block}main .contexts{grid-template-columns:1fr;margin-top:32px}main .contexts article{min-height:0;padding:28px 24px}main .module-4 .content{padding-right:0}main .module-4 .content::after{position:relative;display:block;top:auto;right:auto;width:100%;margin:34px 0 24px;padding:22px 24px;font-size:22px;line-height:1.35;box-shadow:8px 8px 0 var(--mint)}main .module-5> .content>p:nth-of-type(2){padding:24px}main .actions a{width:100%}}
@media(prefers-reduced-motion:reduce){.headerRfq,.footerRfq,main .actions a{transition:none}}
</style>
'''
html = html.replace("</head>", visual_css + "</head>")
html_path.write_text(html, encoding="utf-8")
