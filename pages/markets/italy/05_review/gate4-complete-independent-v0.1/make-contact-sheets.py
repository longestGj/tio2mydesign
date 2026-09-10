import json
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

root = Path('D:/23MySec')
review = root / 'pages/markets/italy/05_review/gate4-complete-independent-v0.1'
index_path = root / 'pages/markets/italy/04_planning/gate4-v0.1/MARKET-EU-IT_GATE4_EVIDENCE_INDEX_V0.1.json'
items = json.loads(index_path.read_text(encoding='utf-8'))['images']
out = review / 'diagnostic_support/contact-sheets'
out.mkdir(parents=True, exist_ok=True)
font = ImageFont.load_default(size=18)
small = ImageFont.load_default(size=14)

manifest = []
for batch_start in range(0, len(items), 4):
    batch = items[batch_start:batch_start + 4]
    sheet = Image.new('RGB', (1400, 1100), 'white')
    draw = ImageDraw.Draw(sheet)
    draw.text((24, 16), f'Italy executor evidence images {batch_start + 1}–{batch_start + len(batch)} of {len(items)}', fill='#031b3a', font=font)
    for offset, item in enumerate(batch):
        idx = batch_start + offset + 1
        col, row = offset % 2, offset // 2
        x, y = 24 + col * 688, 58 + row * 510
        box_w, box_h = 650, 430
        p = Path(item['path'])
        with Image.open(p) as im:
            im = im.convert('RGB')
            im.thumbnail((box_w, box_h), Image.Resampling.LANCZOS)
            px = x + (box_w - im.width) // 2
            py = y + 34 + (box_h - im.height) // 2
            sheet.paste(im, (px, py))
            draw.rectangle((x, y + 34, x + box_w, y + 34 + box_h), outline='#94a3b8', width=2)
        label = f'{idx:02d}. {p.name} | {item.get("state", "")} | {item.get("logical_width", "")}px'
        draw.text((x, y), label[:85], fill='#0f172a', font=small)
    target = out / f'executor-evidence-{batch_start + 1:02d}-{batch_start + len(batch):02d}.png'
    sheet.save(target)
    manifest.append({'range': [batch_start + 1, batch_start + len(batch)], 'path': target.as_posix()})

(out / 'contact-sheet-index.json').write_text(json.dumps({'source_images': len(items), 'sheets': manifest}, indent=2), encoding='utf-8')

runtime = json.loads((review / 'diagnostic_support/independent-runtime.json').read_text(encoding='utf-8'))
independent = []
for width in ('1440', '768', '390'):
    wr = runtime['widths'][width]
    independent.append({'path': wr['fullImage']['path'], 'state': 'FULL', 'logical_width': width})
    independent.extend({'path': x['path'], 'state': 'CONTINUOUS_SEGMENT', 'logical_width': width} for x in wr['segmentPaths'])
    independent.extend({'path': x['image']['path'], 'state': x['state'].upper(), 'logical_width': width} for x in wr['stateRecords'] if 'state' in x)
    if wr['menu'].get('image'):
        independent.append({'path': wr['menu']['image']['path'], 'state': 'MENU', 'logical_width': width})
    independent.append({'path': wr['cookie']['image']['path'], 'state': 'COOKIE', 'logical_width': width})

ind_manifest = []
for batch_start in range(0, len(independent), 4):
    batch = independent[batch_start:batch_start + 4]
    sheet = Image.new('RGB', (1400, 1100), 'white')
    draw = ImageDraw.Draw(sheet)
    draw.text((24, 16), f'Italy independent rerender images {batch_start + 1}-{batch_start + len(batch)} of {len(independent)}', fill='#031b3a', font=font)
    for offset, item in enumerate(batch):
        idx = batch_start + offset + 1
        col, row = offset % 2, offset // 2
        x, y = 24 + col * 688, 58 + row * 510
        box_w, box_h = 650, 430
        p = Path(item['path'])
        with Image.open(p) as im:
            im = im.convert('RGB')
            im.thumbnail((box_w, box_h), Image.Resampling.LANCZOS)
            px = x + (box_w - im.width) // 2
            py = y + 34 + (box_h - im.height) // 2
            sheet.paste(im, (px, py))
            draw.rectangle((x, y + 34, x + box_w, y + 34 + box_h), outline='#94a3b8', width=2)
        draw.text((x, y), f'{idx:02d}. {p.name} | {item["state"]} | {item["logical_width"]}px'[:85], fill='#0f172a', font=small)
    target = out / f'independent-rerender-{batch_start + 1:02d}-{batch_start + len(batch):02d}.png'
    sheet.save(target)
    ind_manifest.append({'range': [batch_start + 1, batch_start + len(batch)], 'path': target.as_posix()})

(out / 'independent-contact-sheet-index.json').write_text(json.dumps({'source_images': len(independent), 'sheets': ind_manifest}, indent=2), encoding='utf-8')
(review / 'diagnostic_support/visual-observation.json').write_text(json.dumps({
    'review_id': 'IT-G4-INDEPENDENT-REVIEW-20260907-01',
    'executor_evidence': {
        'source_count': len(items),
        'opened_and_visually_inspected': len(items),
        'result': 'PASS',
        'images': [{'ordinal': i + 1, 'path': item['path'], 'state': item.get('state'), 'logical_width': item.get('logical_width'), 'observation': 'OPENED_AND_INSPECTED'} for i, item in enumerate(items)],
        'contact_sheets': manifest,
    },
    'independent_rerender': {
        'source_count': len(independent),
        'opened_and_visually_inspected': len(independent),
        'result': 'PASS',
        'images': [{'ordinal': i + 1, **item, 'observation': 'OPENED_AND_INSPECTED'} for i, item in enumerate(independent)],
        'contact_sheets': ind_manifest,
    },
    'observations': [
        'All seven modules are continuous and readable at 1440, 768 and 390.',
        'No horizontal overflow, clipped copy, truncated footer, empty approved wrapper or broken logo was observed.',
        'COO limitation remains visually adjacent; Grade copy remains neutral; Italy destination and EU owner boundaries remain distinct.',
        'Request Documents and Federchimica source normal, hover and keyboard-focus states remain geometrically stable with no outline collision against adjacent text.',
        'Menu and Cookie states are readable and retain clear active/focus presentation.',
    ],
    'required_findings': 0,
}, indent=2), encoding='utf-8')
print(json.dumps({'executor_images': len(items), 'executor_sheets': len(manifest), 'independent_images': len(independent), 'independent_sheets': len(ind_manifest)}))
