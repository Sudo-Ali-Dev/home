# Home

A Vite + React app rendering ThreeUI's `KageLandingPage`, rebranded as **Home**.

Live: https://sudo-ali-dev.github.io/home/

```sh
npm install
npm run dev     # http://localhost:5173
npm run build   # static site in dist/, built for the /home/ base path
```

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.

## Source and licenses

The landing page document and its assets in `public/landing-pages/` come from
[`@designcodeio/threeui`](https://threeui.com) (MIT). `kage.html` has been edited to
replace the Kage brand with Home. Font files are under the SIL Open Font License 1.1.
License texts are in `licenses/`.
