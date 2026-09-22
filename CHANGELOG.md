# Changelog — Remain LLC Website

All notable changes to the Remain landing page project are documented in this file.

---

## [1.2.0] — 2026-09-22

### Fixed
- **Edge 60 FPS Performance Lock:**
  - Removed all `backdrop-filter: blur(...)` shaders across section headers, service cards, step cards, and forms. Replaced with high-performance solid dark fills (`rgba(14, 14, 14, 0.94)` / `#181818` to `#0d0d0d`).
  - Disabled fullscreen SVG `feTurbulence` `.grain` overlay that caused continuous compositor invalidations on Windows.
  - Removed real-time CSS `filter: brightness() contrast()` from `<video>` tags so the GPU can route frames directly to hardware DirectComposition overlay planes.
  - Set `preload="none"` on lower section videos to avoid triggering Edge's "Efficiency Mode" power throttling.
  - Reordered `<source>` elements so H.264 `wave.mp4` is evaluated before `wave.webm` for universal hardware decoding.

- **Typography & Wave Contrast:**
  - Enclosed `.section-header` in a dark container card with subtle borders to guarantee 100% text legibility over any wave animation crest.
  - Brightened italic serif titles (`.section-title em`) and description blurbs (`.section-desc`) to pure white (`#ffffff`) and off-white (`#e5e5e5`).

### Changed
- **Brand Copy Refinement:**
  - Removed all references to *"small businesses"*.
  - Updated `<title>` to `Remain - AI and Automation for Growing Businesses`.
  - Updated `<meta name="description">` to highlight systems for growing businesses.
  - Updated Hero H1 headline to *"AI and automation for growing businesses"*.
  - Updated contact form dropdown from *"Other Small Business"* to *"Other Business"*.

---

## [1.1.0] — 2026-09-21

### Added
- Cloudflare Workers Static Assets deployment configuration (`wrangler.jsonc`).
- Web3Forms client-side API contact form integration with instant validation.
- Responsive mobile navigation drawer with escape key and click-outside listeners.
- Self-hosted media assets and fallback poster images (`wave-poster.webp`).

---

## [1.0.0] — 2026-09-18

### Initial Release
- Brand launch landing page for Remain LLC.
- Hero, Services, How It Works, Audience, and Contact sections.
- Terms of Service (`terms.html`) and Privacy Policy (`privacy.html`).
