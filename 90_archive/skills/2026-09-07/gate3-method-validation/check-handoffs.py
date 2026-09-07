from pathlib import Path
import hashlib, json, re, struct
root=Path(__file__).resolve().parent
report=root/'design-v1/design-report.md'
text=report.read_text(encoding='utf-8')
checks=[]
for line in text.splitlines():
    cols=[s.strip() for s in line.split('|')[1:-1]]
    if cols and cols[0].startswith('D:/') and len(cols)==7:
        p=Path(cols[0]); b=p.read_bytes()
        checks.append({'file':str(p),'bytesMatch':len(b)==int(cols[5]),'hashMatch':hashlib.sha256(b).hexdigest()==cols[6], 'pngDimensionsMatch':not p.suffix=='.png' or ' × '.join(map(str,struct.unpack('>II',b[16:24])))==cols[2]})
for name,expected in [('input.md','3a7d856264b56b0c5d49557acd0719469d90c07dda82ee1ba0d6c51ab457a658'),('copy.json','4a066f92593a3b09a90ca3f35cb8638c921dab8280e2822e719c468dd5cf8f65'),('specimen-a/source.html','aff16e9c7dc95e2ede9810be191a0bd651883a6de7e95647a2fd620a5c8cb21a'),('specimen-b/source.html','3d134cdb500918d17fc1514567efb4b388d75352ea17401e8b11df08392c7f4d')]:
    checks.append({'file':name,'unchanged':hashlib.sha256((root/name).read_bytes()).hexdigest()==expected})
(root/'controller-evidence/handoff-check.json').write_text(json.dumps(checks,indent=2),encoding='utf-8')
fail=[c for c in checks if any(v is False for v in c.values())]
print(json.dumps({'designInventoryItems':len(checks)-4,'unchangedInputsAndCandidates':4,'failures':fail},indent=2))
