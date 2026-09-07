from pathlib import Path
import shutil,hashlib,json
r=Path(__file__).resolve().parent
src=r/'candidate-b';dst=r/'candidate-c'
assert not dst.exists()
for name in ['index.html','styles.css','app.js','assets/Inter-Variable.ttf']:
    target=dst/name;target.parent.mkdir(parents=True,exist_ok=True);shutil.copy2(src/name,target)
p=dst/'index.html';text=p.read_text(encoding='utf-8')
badge='<p class="authority-mark">Certified supplier</p>'
assert text.count(badge)==1;p.write_text(text.replace(badge,''),encoding='utf-8')
p=dst/'styles.css';text=p.read_text(encoding='utf-8')
injection='\n:root{--teal:#00A99D}\n.authority-mark{display:inline-block;padding:10px 16px;border:2px solid #008078;border-radius:8px;color:#008078;font-weight:700;margin-bottom:20px}\n@media(max-width:600px){.record-card:nth-child(2) .pair:last-child{display:none}}\n'
assert text.count(injection)==1;p.write_text(text.replace(injection,''),encoding='utf-8')
checks=[]
for name in ['index.html','styles.css','app.js','assets/Inter-Variable.ttf']:
    sha=hashlib.sha256((dst/name).read_bytes()).hexdigest()
    checks.append({'path':name,'sha256':sha,'matches_original_designer_source':sha==hashlib.sha256((r/'design-v1'/name).read_bytes()).hexdigest()})
(r/'controller-evidence/c-repair-identity.json').write_text(json.dumps(checks,indent=2),encoding='utf-8')
print(json.dumps(checks,indent=2))
