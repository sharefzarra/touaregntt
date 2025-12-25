# Touareg NTT Website (Bilingual)

This folder contains a ready-to-deploy static website:

- `/index.html` → language chooser
- `/ar/index.html` → Arabic (RTL)
- `/en/index.html` → English (LTR)
- `/assets/css/style.css`
- `/assets/js/main.js`
- `/assets/img/` and `/assets/video/` for media

## Add your logo (PDF → SVG/PNG)
1) Export your logo to **SVG** or **PNG**.
2) Put it into: `assets/img/logo.svg` (or `logo.png`)
3) Update the `<img src="...">` if needed.

## Add images/video
- `assets/video/hero-video.mp4` (optional)
- `assets/img/hero-poster.jpg`
- `assets/img/gallery-1.jpg` ... `gallery-5.jpg`

## Deploy on GitHub Pages
- Create a repo (e.g. `touaregntt`)
- Upload all files
- GitHub → Settings → Pages → Deploy from Branch → `main` / root
- Your site will open at: `https://<username>.github.io/<repo>/`

## Contact form behavior
The form opens WhatsApp with a pre-filled message to +218 91 008 1613.


## Logo
Your uploaded PDF logo was exported to `assets/img/logo.png` and the pages now reference it.
