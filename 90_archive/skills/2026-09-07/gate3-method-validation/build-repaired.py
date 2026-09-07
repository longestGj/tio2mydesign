from pathlib import Path
root=Path(__file__).resolve().parent
# Preserve A and B. C restores the non-injected baseline and fixes the two
# independently observed baseline discrepancies in the synthetic exercise.
source=(root/'specimen-a/source.html').read_text(encoding='utf-8')
source=source.replace('min="0.01"','min="0"')
source=source.replace("fields.filter(el=>!el.checkValidity())", "fields.filter(el=>el.id==='quantity'?(!el.value||!Number.isFinite(Number(el.value))||Number(el.value)<=0):!el.checkValidity())")
source=source.replace('</script>', '''
dialog.addEventListener('keydown',event=>{if(event.key!=='Tab')return;const nodes=[...dialog.querySelectorAll('button,a')];if(event.shiftKey&&document.activeElement===nodes[0]){event.preventDefault();nodes.at(-1).focus()}else if(!event.shiftKey&&document.activeElement===nodes.at(-1)){event.preventDefault();nodes[0].focus()}});
</script>''')
# Focus restoration must not undo in-page destination scrolling.
source=source.replace('menu.focus()','menu.focus({preventScroll:true})')
out=root/'specimen-c';out.mkdir(exist_ok=True)
(out/'source.html').write_text(source,encoding='utf-8')
print('Wrote new specimen-c/source.html; A and B unchanged')
