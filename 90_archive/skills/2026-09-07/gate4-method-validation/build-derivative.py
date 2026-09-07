from pathlib import Path
import hashlib, json, shutil
root=Path(__file__).resolve().parent
src=root/'design-v1'
dst=root/'candidate-b'
assert not dst.exists()
dst.mkdir()
baseline=[]
for name in ['index.html','styles.css','app.js','assets/Inter-Variable.ttf']:
    origin=src/name
    data=origin.read_bytes()
    baseline.append({'path':name,'bytes':len(data),'sha256':hashlib.sha256(data).hexdigest()})
    target=dst/name
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_bytes(data)
html=(dst/'index.html').read_text(encoding='utf-8')
needle='<div class="orientation-copy">'
assert html.count(needle)==1
html=html.replace(needle,needle+'<p class="authority-mark">Certified supplier</p>')
(dst/'index.html').write_text(html,encoding='utf-8')
css=(dst/'styles.css').read_text(encoding='utf-8')
css+='\n:root{--teal:#00A99D}\n.authority-mark{display:inline-block;padding:10px 16px;border:2px solid #008078;border-radius:8px;color:#008078;font-weight:700;margin-bottom:20px}\n@media(max-width:600px){.record-card:nth-child(2) .pair:last-child{display:none}}\n'
(dst/'styles.css').write_text(css,encoding='utf-8')
mutated=[{'path':p.relative_to(dst).as_posix(),'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in sorted(dst.rglob('*')) if p.is_file()]
record={'baseline_identity_at_copy':baseline,'mutated_identity':mutated,'not_final_designer_baseline':True,
 'expected_deviations':[
 {'id':'INJECT-01','location':'styles.css final --teal override','expected':'Primary/light functional UI uses decorative #00A99D; white label contrast below exercise 4.5:1.'},
 {'id':'INJECT-02','location':'index.html .authority-mark','expected':'Certified supplier is an unsupported, unallowed visible factual/certification claim.'},
 {'id':'INJECT-03','location':'390 .record-card:nth-child(2) .pair:last-child','expected':'Beta associated note hidden despite explicit complete visible content requirement; DOM still contains text.'}],
 'purpose':'controlled diagnostic derivative, not a production candidate or Skill-generated independent result'}
(root/'controller-mutations.json').write_text(json.dumps(record,indent=2),encoding='utf-8')
print(json.dumps(record,indent=2))
