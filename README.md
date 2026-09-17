# Remain LLC - Website

Official landing page for **Remain LLC** (remainllc.com), based in Holland, Michigan.

We help local trade businesses (plumbers, HVAC, electricians, auto shops, roofers) never miss another customer by providing:
1. **Missed-call text-back** (instant automated SMS response in <15 seconds)
2. **Automated question answering & appointment booking**
3. **Automated 5-star Google review requests**

---

## 🛠 Local Development & Preview

You can preview the website locally using any lightweight static web server:

### Option 1: Using Node (npx serve)
```bash
npx serve .
# Or specify a port:
npx serve . -p 3000
```

### Option 2: Using Python
```bash
python -m http.server 3000
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

## ☁️ Deploying on Cloudflare Pages (100% Free)

Cloudflare Pages provides unlimited bandwidth, global CDN speeds, custom domains, and free SSL:

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com/) and navigate to **Workers & Pages**.
2. Click **Create Application** > **Pages** > **Connect to Git**.
3. Select your GitHub repository (`remainllc`).
4. Set the build configuration:
   - **Framework preset**: None (HTML/Static)
   - **Build command**: (leave empty)
   - **Build output directory**: `/` (root)
5. Click **Save and Deploy**.
6. In **Custom Domains**, add `remainllc.com` to connect your live domain in seconds!
