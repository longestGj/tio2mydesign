from pathlib import Path

out = Path(__file__).resolve().parents[1]
source = out.parent / "gate3-en-v0.1" / "MARKET-BR-EN_GATE3_RESPONSIVE_WIREFRAME_V0.1.html"
target = out / "MARKET-BR-EN_GATE4_COMPLETE_VISUAL_V1.0.html"
html = source.read_text(encoding="utf-8")

head = '''<meta name="description" content="Explore Malaysia-origin industrial titanium dioxide Grades for coatings, plastics and masterbatch production in Brazil. Request documents or request a quote."><meta name="robots" content="noindex,nofollow"><link rel="canonical" href="https://tio2malaysia.com/markets/brazil/"><script type="application/ld+json">{"@context":"https://schema.org","@graph":[{"@type":"WebPage","@id":"https://tio2malaysia.com/markets/brazil/#webpage","url":"https://tio2malaysia.com/markets/brazil/","name":"Titanium Dioxide Supplier Brazil | TiO2 Malaysia","description":"Explore Malaysia-origin industrial titanium dioxide Grades for coatings, plastics and masterbatch production in Brazil. Request documents or request a quote.","inLanguage":"en"},{"@type":"BreadcrumbList","@id":"https://tio2malaysia.com/markets/brazil/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://tio2malaysia.com/"},{"@type":"ListItem","position":2,"name":"Markets","item":"https://tio2malaysia.com/markets/"},{"@type":"ListItem","position":3,"name":"Brazil","item":"https://tio2malaysia.com/markets/brazil/"}]}]}</script>'''
html = html.replace('</title>', '</title>' + head)
html = html.replace("url('dependencies/Inter-Variable.ttf')", "url('../gate3-en-v0.1/dependencies/Inter-Variable.ttf')")

css = r'''
<style id="gate4-complete-visual">
:root{--navy:#062b5b;--deep:#031b3a;--teal:#008078;--teal-dark:#006b65;--aqua:#dff5f2;--mist:#f2f7f8;--line:#d7e3e6;--ink:#263f55;--muted:#516174;--white:#fff;--yellow:#f5d36c}
body{background:#fff;color:var(--ink)}
.header{box-shadow:0 9px 28px rgb(3 27 58 / 8%)}
.headerRfq,.footerRfq,main .actions .primary{transition:background-color .18s ease,transform .18s ease,box-shadow .18s ease}
.headerRfq:hover,.footerRfq:hover,main .actions .primary:hover{background:var(--teal-dark);box-shadow:0 8px 20px rgb(0 128 120 / 22%);transform:translateY(-1px)}
main{overflow:hidden;font-size:17px;line-height:1.72}
main .breadcrumb{max-width:none;padding:24px max(32px,calc((100% - 1180px)/2));background:#fff}
main .module{position:relative;padding:88px max(32px,calc((100% - 1180px)/2));border:0}
main h1,main h2,main h3{color:var(--navy)}
main h1{max-width:780px;font-size:58px;line-height:1.06;letter-spacing:-.045em;font-weight:720}
main h2{max-width:760px;font-size:38px;line-height:1.15;letter-spacing:-.03em;font-weight:690}
main h3{font-size:21px;letter-spacing:-.015em}
main p{color:var(--ink)}
main .m1{min-height:570px;padding-top:104px;padding-bottom:104px;background:linear-gradient(116deg,#edf8f5 0%,#f5f9fa 56%,#fff 100%)}
main .m1::before{content:"";position:absolute;inset:0 0 0 57%;background:linear-gradient(145deg,rgb(0 128 120 / 13%),transparent 48%),repeating-linear-gradient(90deg,transparent 0 47px,rgb(6 43 91 / 6%) 48px 49px),repeating-linear-gradient(0deg,transparent 0 47px,rgb(6 43 91 / 6%) 48px 49px);clip-path:polygon(18% 0,100% 0,100% 100%,0 100%)}
main .m1::after{content:"BRAZIL  /  PROCUREMENT";position:absolute;right:max(32px,calc((100% - 1180px)/2));bottom:68px;color:var(--navy);font-size:12px;font-weight:780;letter-spacing:.18em;writing-mode:vertical-rl;opacity:.58}
main .m1 h1::before{content:"MARKET BRIEF";display:flex;width:max-content;margin-bottom:24px;padding:8px 12px;border:1px solid rgb(0 128 120 / 27%);border-radius:999px;color:var(--teal-dark);background:rgb(255 255 255 / 76%);font-size:12px;font-weight:780;letter-spacing:.13em}
main .m1 p{max-width:760px;font-size:20px;color:#36536a}
main .actions{margin-top:30px}
main .actions a{min-height:50px;padding:12px 22px;border-radius:5px;transition:color .18s ease,background-color .18s ease,border-color .18s ease,transform .18s ease}
main .actions a:not(.primary){background:#fff}
main .actions a:not(.primary):hover{border-color:var(--teal-dark);background:var(--aqua);color:var(--teal-dark);transform:translateY(-1px)}
main .m2{background:#fff}
main .m2>h2::before,main .m3>h2::before,main .m4>h2::before,main .m5>h2::before{display:block;margin-bottom:18px;color:var(--teal);font-size:14px;letter-spacing:.16em}
main .m2>h2::before{content:"01  /  APPLICATION REVIEW"}
main .applications{gap:20px;margin:42px 0 36px}
main .applications article{position:relative;min-height:332px;padding:34px 28px;border:1px solid var(--line);border-top:4px solid var(--teal);border-radius:8px;background:linear-gradient(180deg,#fff,#f8fbfc);box-shadow:0 13px 32px rgb(6 43 91 / 7%)}
main .applications article::after{position:absolute;right:24px;bottom:18px;color:rgb(6 43 91 / 9%);font-size:54px;font-weight:820;line-height:1}
main .applications article:nth-child(1)::after{content:"01"}main .applications article:nth-child(2)::after{content:"02"}main .applications article:nth-child(3)::after{content:"03"}
main .applications p{position:relative;z-index:1;color:#40586d}
main .application-link{position:relative;z-index:1}
main .m3{background:var(--navy);color:#fff}
main .m3>h2{color:#fff}
main .m3>h2::before{content:"02  /  DOCUMENT READINESS";color:#78ded4}
main .m3>p{max-width:770px;color:#e4eef4}
main .m3>p:nth-of-type(2){margin:30px 0;padding:20px 22px;border-left:4px solid #78ded4;background:rgb(255 255 255 / 9%);color:#fff;font-weight:680}
main .m3::after{content:"TDS\A SDS\A COA\A COO";white-space:pre;position:absolute;top:92px;right:max(32px,calc((100% - 1180px)/2));width:220px;padding:28px;border-radius:9px;background:#fff;color:var(--navy);font-size:28px;font-weight:740;line-height:1.52;letter-spacing:.08em;box-shadow:14px 14px 0 rgb(120 222 212 / 25%)}
main .m3>h2,main .m3>p,main .m3>.actions{padding-right:300px}
main .m3 a:not(.primary){color:#fff;border-color:#78ded4;background:transparent}
main .m3 a:not(.primary):hover{color:var(--deep);background:#78ded4}
main .m4{background:linear-gradient(118deg,#e7f4f1,#f7fafb)}
main .m4>h2::before{content:"03  /  DATED TRADE HANDOFF"}
main .m4>p{max-width:900px;padding-left:26px;border-left:4px solid var(--teal)}
main .m4 .actions a{max-width:100%;text-align:left}
main .m5{background:#fff}
main .m5>h2::before{content:"04  /  RFQ PREPARATION"}
main .m5>ul{max-width:760px;margin:34px 0 28px;padding:0;list-style:none;counter-reset:rfq}
main .m5>li,main .m5 ul li{position:relative;margin:0;padding:15px 0 15px 56px;border-bottom:1px solid rgb(6 43 91 / 14%);counter-increment:rfq}
main .m5 ul li::before{content:counter(rfq,decimal-leading-zero);position:absolute;left:0;color:var(--teal-dark);font-size:13px;font-weight:780;letter-spacing:.08em}
main .m5>p:last-of-type{max-width:760px;margin:34px 0;padding:26px 28px;border-radius:8px;background:var(--mist);border-left:4px solid var(--teal);color:var(--navy);font-weight:570}
@media(max-width:1100px){main .module{padding:68px 32px}main .m1{min-height:510px;padding-top:76px}main h1{font-size:48px;max-width:680px}main .m1::before{inset:0 0 0 72%}main .m1::after{display:none}main .applications{grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}main .applications article{display:block;min-height:388px;padding:27px 22px}main .m3::after{right:32px;width:190px;font-size:24px}main .m3>h2,main .m3>p,main .m3>.actions{padding-right:245px}}
@media(max-width:700px){main .breadcrumb{padding:16px 20px}main .module{padding:54px 20px}main .m1{min-height:0;padding-top:62px;padding-bottom:66px}main .m1::before{inset:0;opacity:.45;clip-path:none}main .m1 h1,main .m1 p,main .m1 .actions{position:relative;z-index:1}main h1{font-size:40px}main h2{font-size:31px}main .m1 p{font-size:18px}main .applications{grid-template-columns:1fr;margin-top:34px}main .applications article{min-height:0;padding:28px 24px}main .m3>h2,main .m3>p,main .m3>.actions{padding-right:0}main .m3::after{display:none}main .m4>p{padding-left:20px}main .m5>p:last-of-type{padding:22px}main .actions a{width:100%}}
@media(prefers-reduced-motion:reduce){.headerRfq,.footerRfq,main .actions a{transition:none}}
</style>
'''
html = html.replace('</head>', css + '</head>')
target.write_text(html, encoding='utf-8')
print(target)
