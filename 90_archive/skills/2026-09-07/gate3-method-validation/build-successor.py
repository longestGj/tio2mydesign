from pathlib import Path
root=Path(__file__).resolve().parent
source=(root/'specimen-c/source.html').read_text(encoding='utf-8')
source=source.replace('menu.focus({preventScroll:true})','')
source=source.replace('</script>', "dialog.addEventListener('close',()=>menu.focus({preventScroll:true}));\n</script>")
source=source.replace('</style>', '@media(max-width:450px){select{white-space:normal;min-height:80px}}\n</style>')
out=root/'specimen-d';out.mkdir(exist_ok=True)
(out/'source.html').write_text(source,encoding='utf-8')
print('Wrote specimen-d; A/B/C preserved')
