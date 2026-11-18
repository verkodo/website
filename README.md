# verkodo – website

One static page for **verkodo**: no build step, no framework, no external resources, no cookies, no tracking.
A [falkOSS](https://falkoss.org) project.

| Path | What |
|---|---|
| `index.html`, `style.css`, `404.html` | the page (English) |
| `favicon.*`, `apple-touch-icon.png`, `icon-*.png`, `site.webmanifest`, `social.png` | head icons – **generated** by `brand/generate.py` in `verkodo/verkodo` (`brand/web/`), copied here |
| `assets/` | lockup and mark on dark and on light (from `brand/svg/`) |
| `theme.js` | light, dark or the system's choice; kept in the browser only (localStorage) |
| `fonts/` | Crimson Pro, the brand's typeface (SIL OFL 1.1, `fonts/OFL.txt`) – served from here, never from a font service |

Imprint and privacy policy are falkoss.org's – same operator, one place to keep them current.

Preview locally:

```sh
python3 -m http.server 8091
```

## Publishing

GitHub Pages via `.github/workflows/pages.yml` on every push to `main`. One-time setup: Repo → Settings → Pages →
Source: **GitHub Actions**.

The site is at https://verkodo.org (custom domain of this repository's Pages, HTTPS enforced); the documentation
and the web editor are at https://verkodo.dev, the knowledge (sciaro) at https://sciaro.verkodo.org.

## Licence

The site's code is **AGPL-3.0-or-later** (`LICENSE`); the brand's artwork (favicons, icons, `assets/`) is copied from
`verkodo/brand` under CC BY-ND 4.0, the fonts in `fonts/` are under the SIL OFL 1.1, and the brand itself (name, logo, marks) is not covered by any licence.
