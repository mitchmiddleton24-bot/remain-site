# Remain LLC - Website

Official landing page for **Remain LLC** (remainllc.com), based in Holland, Michigan.

We help local trade businesses (plumbers, HVAC, electricians, auto shops, roofers) never miss another customer by providing:
1. **Missed-call text-back** (instant automated SMS response in <15 seconds)
2. **Automated question answering & appointment booking**
3. **Automated 5-star Google review requests**

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
