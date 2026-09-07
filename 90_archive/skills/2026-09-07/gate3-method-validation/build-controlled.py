"""Build synthetic checking-method specimens; not production implementation."""
from pathlib import Path
import json, html

root = Path(__file__).resolve().parent
copy = json.loads((root / 'copy.json').read_text(encoding='utf-8'))
out = root / 'specimen-a'
out.mkdir(exist_ok=True)
e = html.escape
records = []
for i, record in enumerate(copy['records']):
    rows = ''.join(f'<div class="metric"><dt>{e(label)}</dt><dd>{e(value)}</dd></div>' for label, value in zip(copy['metrics'], record['values']))
    records.append(f'<article class="record"><h3>{e(record["name"])}</h3><dl>{rows}</dl><p class="record-note">{e(copy["notes"][i])}</p></article>')
reading = ''.join(f'<details><summary>{e(s["title"])}</summary><p>{e(s["text"])}</p></details>' if i else f'<article><h3>{e(s["title"])}</h3><p>{e(s["text"])}</p></article>' for i,s in enumerate(copy['sections']))
form = copy['form']
options = ''.join(f'<option>{e(r["name"])}</option>' for r in copy['records'])
links = ''.join(f'<a href="#{key}">{label}</a>' for key,label in [('overview','Overview'),('comparison','Comparison'),('reading','Reading'),('request','Request')])
source = f'''<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Evaluation exercise</title>
<style>
*{{box-sizing:border-box}}body{{margin:0;color:#222;background:white;font:17px/1.65 Arial,sans-serif}}main,footer{{max-width:1160px;margin:auto;padding:24px}}header{{display:flex;align-items:center;justify-content:space-between;gap:12px;border-bottom:1px solid #999;padding:16px 24px}}a,button,summary{{display:inline-flex;align-items:center;min-width:44px;min-height:44px;padding:10px;color:inherit}}button,input,select,textarea{{font:inherit;max-width:100%}}a:focus-visible,button:focus-visible,input:focus-visible,summary:focus-visible,select:focus-visible,textarea:focus-visible{{outline:3px solid #222;outline-offset:2px}}.brand{{font-weight:bold;line-height:1.25}}h1{{font-size:42px;line-height:1.15;max-width:850px}}h2{{font-size:28px}}h3{{line-height:1.4}}section{{margin:32px 0 56px}}.records{{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}}.record{{padding:18px;border:1px solid #777}}.metric{{border-bottom:1px solid #ccc;padding:8px 0}}dt{{font-size:15px}}dd{{margin:0;font-weight:bold}}details{{border-top:1px solid #aaa;padding:12px 0}}summary{{display:flex;cursor:pointer;font-weight:bold}}form{{max-width:760px;padding:24px;border:1px solid #555}}label{{display:block;font-weight:bold;margin-top:18px}}input,select,textarea{{width:100%;min-height:48px;padding:8px;border:1px solid #888}}textarea{{height:130px}}.error{{color:#111;font-weight:bold}}.error[hidden],#confirmation[hidden]{{display:none}}#form-summary{{border:2px solid #333;padding:10px}}.privacy-line{{margin:24px 0 10px}}footer{{border-top:1px solid #777}}#menu{{display:none}}#menu-dialog{{width:min(500px,100%);max-height:95vh;overflow:auto;border:2px solid #222}}#menu-dialog a{{display:block}}#close-menu{{float:right}}#menu-dialog::backdrop{{background:#0008}}@media(max-width:900px){{header nav{{display:none}}#menu{{display:inline-flex}}.records{{grid-template-columns:1fr}}h1{{font-size:34px}}}}@media(max-width:450px){{header{{padding:12px;gap:6px}}.brand{{font-size:14px;max-width:95px}}header>a{{font-size:14px}}main,footer{{padding:16px}}h1{{font-size:30px}}form{{padding:16px}}}}
</style><header><span class="brand">Example Evaluation Desk</span><nav>{links}</nav><a href="#request">Request review</a><button id="menu" type="button" aria-controls="menu-dialog" aria-expanded="false">Menu</button></header>
<dialog id="menu-dialog"><button id="close-menu" type="button">Close</button><nav aria-label="Mobile navigation">{links}<a href="#request">Request review</a></nav></dialog>
<main><section id="overview"><h1>{e(copy['hero']['title'])}</h1><p>{e(copy['hero']['text'])}</p><a href="#request">{e(copy['hero']['cta'])}</a></section><section id="comparison"><h2>{e(copy['comparisonTitle'])}</h2><div class="records">{''.join(records)}</div></section>
<section id="reading"><h2>{e(copy['readingTitle'])}</h2>{reading}</section><section id="request"><h2>{e(form['title'])}</h2><p>{e(form['intro'])}</p><form novalidate><div id="form-summary" class="error" hidden>{e(form['errorSummary'])}</div>
<label for="name">{e(form['name'])}</label><input id="name" required aria-describedby="name-error"><p id="name-error" class="error" hidden>{e(form['nameError'])}</p>
<label for="email">{e(form['email'])}</label><input id="email" type="email" required aria-describedby="email-error"><p id="email-error" class="error" hidden>{e(form['emailError'])}</p>
<label for="quantity">{e(form['quantity'])}</label><input id="quantity" type="number" min="0.01" step="any" required aria-describedby="quantity-error"><p id="quantity-error" class="error" hidden>{e(form['quantityError'])}</p>
<label for="record">{e(form['record'])}</label><select id="record"><option>{e(form['unsure'])}</option>{options}</select><label for="context">{e(form['context'])}</label><textarea id="context"></textarea>
<p class="privacy-line">{e(form['privacyPrefix'])}<a href="#privacy">{e(form['privacyLink'])}</a>{e(form['privacySuffix'])}</p><button id="submit" type="submit">{e(form['submit'])}</button><p id="confirmation" role="status" hidden>{e(form['success'])}</p></form></section>
<section id="privacy"><h2>{e(copy['privacy']['title'])}</h2><p>{e(copy['privacy']['text'])}</p></section></main><footer>{e(copy['footer'])}<a href="#privacy">Privacy note</a></footer>
<script>
const menu=document.querySelector('#menu'),dialog=document.querySelector('#menu-dialog');menu.onclick=()=>{{dialog.showModal();menu.setAttribute('aria-expanded','true');document.querySelector('#close-menu').focus()}};const close=()=>{{dialog.close();menu.setAttribute('aria-expanded','false');menu.focus()}};document.querySelector('#close-menu').onclick=close;dialog.addEventListener('cancel',event=>{{event.preventDefault();close()}});dialog.querySelectorAll('a').forEach(a=>a.onclick=close);
document.querySelector('form').onsubmit=event=>{{event.preventDefault();const fields=['name','email','quantity'].map(id=>document.getElementById(id));const invalid=fields.filter(el=>!el.checkValidity());fields.forEach(el=>{{const bad=invalid.includes(el);document.getElementById(el.id+'-error').hidden=!bad;el.setAttribute('aria-invalid',String(bad))}});document.getElementById('form-summary').hidden=!invalid.length;document.getElementById('confirmation').hidden=!!invalid.length;if(invalid.length)invalid[0].focus()}};
</script></html>'''
(out / 'source.html').write_text(source,encoding='utf-8')
# Controlled variant: preserve original source and leave exact injected changes in
# a scorer-only record, not in reviewer input.
variant = source.replace('</style>', '''
@media(max-width:450px){.record-note{display:none}.privacy-line{height:27px;overflow:hidden}.record dd{max-width:58px;overflow:hidden;white-space:nowrap}#quantity{width:28px}}
</style>''')
variant = variant.replace('dialog.showModal();','dialog.show();')
variant = variant.replace("if(invalid.length)invalid[0].focus()", "if(invalid.length)document.getElementById('submit').focus()")
variant = variant.replace("const invalid=fields.filter(el=>!el.checkValidity());", "const invalid=fields.filter(el=>!el.checkValidity());")
target=root/'specimen-b';target.mkdir(exist_ok=True)
(target/'source.html').write_text(variant,encoding='utf-8')
print('Wrote specimen-a/source.html and specimen-b/source.html')
