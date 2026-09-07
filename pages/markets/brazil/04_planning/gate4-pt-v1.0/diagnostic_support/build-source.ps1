$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$source = Join-Path $root 'gate3-pt-v0.1/MARKET-BR-PT_GATE3_RESPONSIVE_WIREFRAME_V0.1.html'
$targetRoot = Split-Path -Parent $PSScriptRoot
$target = Join-Path $targetRoot 'MARKET-BR-PT_GATE4_COMPLETE_VISUAL_V1.0.html'
$deps = Join-Path $targetRoot 'dependencies'
New-Item -ItemType Directory -Force -Path $deps, (Join-Path $targetRoot 'approval_core') | Out-Null
Copy-Item (Join-Path $root 'gate3-pt-v0.1/dependencies/Inter-Variable.ttf') (Join-Path $deps 'Inter-Variable.ttf') -Force
Copy-Item (Join-Path $root 'gate3-pt-v0.1/dependencies/Inter-OFL.txt') (Join-Path $deps 'Inter-OFL.txt') -Force
Copy-Item 'D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg' (Join-Path $deps 'tio2-malaysia-primary-horizontal-v0.1.svg') -Force
Copy-Item 'D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg' (Join-Path $deps 'tio2-malaysia-reverse-monochrome-v0.1.svg') -Force

$html = Get-Content -Raw -LiteralPath $source
$html = $html.Replace('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-primary-horizontal-v0.1.svg', 'dependencies/tio2-malaysia-primary-horizontal-v0.1.svg')
$html = $html.Replace('file:///D:/23MySec/brand/logo/candidates/v0.1/tio2-malaysia-reverse-monochrome-v0.1.svg', 'dependencies/tio2-malaysia-reverse-monochrome-v0.1.svg')
$visual = @'

/* MARKET-BR-PT Gate 4 visual layer — approved copy and Gate 3 relationships unchanged */
:root{--navy:#062b5b;--deep:#031b3a;--teal:#008078;--aqua:#00a99d;--ink:#26384d;--mist:#f3f7fa;--line:#d7e3ea;--sand:#f7f3ea}
body{color:var(--ink);background:#fff}.header{box-shadow:0 8px 24px rgb(3 27 58 / 6%)}
main{overflow:hidden}main .breadcrumb{color:#63768b}main .breadcrumb a{font-weight:650;color:#00756e}
main .module{position:relative;padding-top:88px;padding-bottom:88px;border-top:0}
main h1{font-size:clamp(48px,4.6vw,68px);max-width:1040px;letter-spacing:-.045em;line-height:1.04}
main h2{font-size:clamp(34px,3vw,46px);max-width:960px;letter-spacing:-.035em;line-height:1.08}
main h3{font-size:23px;letter-spacing:-.02em}
main p{max-width:900px}main .actions{margin-top:32px}
main .actions a{border-radius:999px;padding:13px 24px;transition:background .2s,color .2s,border-color .2s,transform .2s}
main .actions a:hover{background:#e5f4f2}main .actions .primary:hover{background:#006c66}
main .m1{isolation:isolate;padding-top:78px;padding-bottom:70px;color:#eaf3fa;background:linear-gradient(125deg,#031b3a 0%,#062b5b 58%,#075d68 100%)}
main .m1::after{content:"";position:absolute;z-index:-1;width:520px;height:520px;right:-150px;top:-220px;border:88px solid rgb(54 221 207 / 12%);border-radius:50%}
main .m1 h1{color:#fff;text-wrap:balance}main .m1>p{font-size:21px;max-width:920px;color:#dce9f3}
main .m1 .actions .primary{background:#00a99d;border-color:#00a99d;color:#fff;box-shadow:0 10px 28px rgb(0 0 0 / 18%)}
main .m1 .actions a:not(.primary){color:#fff;border-color:#7fd7d1;background:rgb(255 255 255 / 5%)}
main .m1 .actions a:not(.primary):hover{background:rgb(255 255 255 / 13%)}
main .m1 .language-notice{max-width:920px;margin-top:34px;padding:18px 20px;border:1px solid rgb(169 215 226 / 34%);border-left:4px solid #4cd5ca;border-radius:8px;background:rgb(255 255 255 / 7%);color:#dce9f3}
main .m2{background:#fff}main .m2>p:first-of-type{font-size:19px;color:#4a5f73}
main .applications{gap:20px;margin:38px 0 34px}
main .applications article{position:relative;padding:34px 28px 28px;border:1px solid var(--line);border-top:4px solid var(--teal);border-radius:14px;background:#fff;box-shadow:0 14px 34px rgb(3 27 58 / 7%)}
main .applications article::before{display:flex;align-items:center;justify-content:center;width:42px;height:42px;margin-bottom:24px;border-radius:50%;color:#fff;background:var(--navy);font-size:13px;font-weight:800;letter-spacing:.08em}
main .applications article:nth-child(1)::before{content:"01"}main .applications article:nth-child(2)::before{content:"02"}main .applications article:nth-child(3)::before{content:"03"}
main .application-link a{position:relative;font-weight:720;text-decoration:none}main .application-link a::after{content:"→";padding-left:8px}
main .m3{background:linear-gradient(180deg,#edf8f7,#f7fbfb)}
main .m3::before{content:"";position:absolute;top:0;left:max(32px,calc((100% - 1120px)/2));width:88px;height:6px;background:var(--aqua)}
main .m3>p:nth-of-type(2){max-width:780px;margin:30px 0;padding:22px 24px;border-left:5px solid var(--aqua);border-radius:0 10px 10px 0;background:#fff;color:var(--navy);font-size:20px;font-weight:760;box-shadow:0 10px 28px rgb(3 27 58 / 7%)}
main .m3 .actions a{background:#fff}
main .m4{color:#dce9f3;background:linear-gradient(110deg,#062b5b,#083f58)}
main .m4 h2{color:#fff}main .m4>p{font-size:18px}main .m4 .actions a{max-width:760px;border-color:#5fd4ca;color:#fff;background:rgb(255 255 255 / 6%)}main .m4 .actions a:hover{background:rgb(255 255 255 / 14%)}
main .m5{background:var(--sand)}main .m5 ul{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px 28px;max-width:980px;padding:0;list-style:none;counter-reset:req}
main .m5 li{counter-increment:req;position:relative;min-height:72px;margin:0;padding:17px 18px 17px 58px;border:1px solid #ded7c7;border-radius:10px;background:rgb(255 255 255 / 68%)}
main .m5 li::before{content:counter(req);position:absolute;left:17px;top:17px;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--navy);color:#fff;font-size:13px;font-weight:800}
main :is(a,button):focus-visible{outline:3px solid #ffd166;outline-offset:3px}
@media(max-width:1100px){main .module{padding-top:64px;padding-bottom:64px}main h1{font-size:48px}main .applications article{display:grid;grid-template-columns:56px 190px minmax(0,1fr);gap:0 20px;align-items:start;padding:26px}main .applications article::before{grid-column:1;grid-row:1/3;margin:0}main .applications h3{grid-column:2;grid-row:1/3;margin-top:8px}main .applications p{grid-column:3;grid-row:1}main .application-link{grid-column:3;grid-row:2}.m5 ul{grid-template-columns:1fr}}
@media(max-width:560px){main .module{padding:52px 20px}main h1{font-size:39px;line-height:1.06}main h2{font-size:31px}main .m1{padding-top:54px;padding-bottom:50px}main .m1>p{font-size:18px}main .m1::after{width:330px;height:330px;right:-190px;top:-110px;border-width:58px}main .m1 .language-notice{padding:16px}main .applications article{display:block;padding:25px 22px}main .applications article::before{margin-bottom:20px}main .m3::before{left:20px}main .m3>p:nth-of-type(2){font-size:18px;padding:18px 18px}main .m4>p{font-size:16px}main .m5 ul{display:block}main .m5 li{margin:12px 0}.legalUtilities{gap:4px 12px}}
'@
$html = $html.Replace('</style>', $visual + "`r`n</style>")
Set-Content -LiteralPath $target -Value $html -Encoding utf8 -NoNewline
Write-Output $target
