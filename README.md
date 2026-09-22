# Remain LLC - Website

Official landing page for **Remain LLC** (remainllc.com), based in Holland, Michigan.

We build the systems that solve real operational bottlenecks, capture missed revenue, and give growing businesses clarity:
1. **Websites** — Fast, modern sites built to convert (quote forms, booking, payments)
2. **Lead Capture & Follow Up** — Instant missed-call text-back, automated appointment booking, and Google review requests
3. **Internal Tools** — Custom tools replacing manual spreadsheets and paper
4. **Dashboards & Reporting** — Live operational and financial visibility

---

## ⚡ Performance & Browser Compatibility Guidelines

To ensure locked 60 FPS performance and crisp contrast across all browsers (Microsoft Edge on Windows, Google Chrome, and iOS/macOS Safari):

1. **Video Codec Priority (`H.264 MP4` First):**
   - Always place `<source src="wave.mp4" type="video/mp4">` before `.webm`. Windows Direct3D11/DXVA2 hardware-accelerates H.264 natively, preventing CPU decoding fallbacks on Edge.
2. **Avoid `backdrop-filter: blur()` Over Live Video:**
   - Real-time Gaussian blur shaders layered over animating `<video>` force GPU rasterization thread lock on Windows DirectX and trigger Edge's "Efficiency Mode" frame rate throttling.
   - Use solid, dark opaque fills (`rgba(14, 14, 14, 0.94)` or `#0e0e0e`) with thin borders (`rgba(255, 255, 255, 0.12)`) instead.
3. **No CSS Video Shaders:**
   - Avoid `filter: brightness(...) contrast(...)` on `<video>` elements so frames can be routed directly to hardware overlay planes.
4. **Selective Preload:**
   - Only the Hero background video uses `preload="auto"`. Lower sections use `preload="none"` and are lazily initialized via `IntersectionObserver` to preserve network bandwidth and prevent concurrent video decoding stalls.
5. **High-Contrast Section Header Cards:**
   - Section titles and blurbs are contained within dedicated dark header cards to guarantee 100% typographic legibility regardless of wave movement.

---

## 🛠 Local Development & Preview

All public site assets live in `/public`. You can preview the website locally using any lightweight static web server:

### Option 1: Using Python
```bash
python -m http.server 3000 --directory public
```

### Option 2: Using Node (npx serve)
```bash
npx serve public -p 3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 GitHub Repository

The site is pushed to:
**[https://github.com/mitchmiddleton24-bot/remain-site](https://github.com/mitchmiddleton24-bot/remain-site)**

To push future updates:
```bash
git add .
git commit -m "Update site"
git push
```

---

## ☁️ Deploying on Cloudflare Workers (Static Assets)

The project is configured for Cloudflare Workers Static Assets using `wrangler.jsonc`.

Deploy with a single command:
```bash
npx wrangler deploy
```

No build command is needed. The static assets in `./public` are deployed directly to Cloudflare's global edge network with instant SSL, CDN caching, and custom domain support for `remainllc.com`.
