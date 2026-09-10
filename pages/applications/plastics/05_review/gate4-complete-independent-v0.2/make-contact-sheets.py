from pathlib import Path
from PIL import Image, ImageDraw

root = Path('D:/23MySec/pages/applications/plastics/05_review/gate4-complete-independent-v0.2')
out = root / 'contact-sheets'
out.mkdir(parents=True, exist_ok=True)


def sheet(paths, target, columns, cell=(420, 300)):
    rows = (len(paths) + columns - 1) // columns
    canvas = Image.new('RGB', (columns * cell[0], rows * cell[1]), 'white')
    draw = ImageDraw.Draw(canvas)
    for index, path in enumerate(paths):
        with Image.open(path) as image:
            image = image.convert('RGB')
            image.thumbnail((cell[0] - 16, cell[1] - 34))
            x = (index % columns) * cell[0] + (cell[0] - image.width) // 2
            y = (index // columns) * cell[1] + 22
            canvas.paste(image, (x, y))
            draw.text(((index % columns) * cell[0] + 8, (index // columns) * cell[1] + 5), path.name, fill='black')
    canvas.save(target)


sheet(sorted((root / 'rerender/full').glob('*.png')), out / 'full-pages.png', 3, (420, 640))
sheet(sorted((root / 'rerender/grade').glob('*.png')), out / 'grade-contexts.png', 3, (440, 340))
sheet(sorted((root / 'rerender/states').glob('*.png')), out / 'target-states.png', 3, (440, 220))
print({'full': 3, 'grade': 3, 'states': 27, 'sheets': 3})
