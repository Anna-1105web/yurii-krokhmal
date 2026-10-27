# Yurii Krokhmal — portfolio site

Static site: `index.html`, `style.css`, `script.js` and the `assets/` folder. No build step, no dependencies.

## Run locally

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```
(Or use the VS Code "Live Server" extension. Opening `index.html` directly also works, but a local server is closer to production.)

## Contact links (already set)

The real links are written directly in `index.html` (so they work even without JavaScript):

| Network | Link |
|---|---|
| Instagram | `https://www.instagram.com/yura.krokhmal/` |
| Telegram | `https://t.me/YURII_KLL` |
| WhatsApp | `https://wa.me/48538921215` |

`CONFIG` at the top of `script.js` can override them; `formEndpoint` is `/api/lead` (the Telegram function below).

## Contact form → Telegram (Vercel)

Requests from the form are sent straight to Yurii's Telegram by the function in `api/lead.js`.
The bot token lives only in Vercel's settings, never in the page.

1. In Telegram open **@BotFather** → `/newbot` → choose a name → copy the **token**.
2. From Yurii's account, open the new bot and press **Start** (otherwise the bot cannot write to him).
3. Get Yurii's chat id: open **@userinfobot** in Telegram and press Start — it replies with your **Id**.
4. Vercel → Project → **Settings → Environment Variables**, add:
   - `TELEGRAM_BOT_TOKEN` = the token from step 1
   - `TELEGRAM_CHAT_ID` = the id from step 3
5. Redeploy. Send a test request from the live site — it arrives in Telegram within a second.

Until the variables are set (or when the page is opened as a local file), the form does not pretend to send:
it copies the request text and shows an "Open Telegram" button so the visitor can send it to @YURII_KLL manually.

## Placeholders to replace before going live

- No placeholder content is left in the page.
- `canonical` / `og:url` in `index.html` → your real domain

## Deploy to Vercel

**Option A — dashboard:** push the `site` folder to a GitHub repo → vercel.com → **Add New → Project** → import the repo → Framework preset **Other**, no build command, output directory `.` → Deploy.

**Option B — CLI:**
```bash
npm i -g vercel
cd site
vercel          # preview
vercel --prod   # production
```
Add your domain under Project → Settings → Domains, then update `canonical` and `og:url`.

## Testing checklist

- [ ] EN / UA / PL switch changes every section, the case dialogs and form messages; choice is remembered on reload
- [ ] `?lang=uk` / `?lang=pl` in the URL opens that language
- [ ] Mobile (360–430px): no sideways scroll, menu opens/closes, Esc closes it
- [ ] Keyboard only: Tab reaches every link/button with a visible focus ring; dialogs close with Esc
- [ ] "Read case study" opens each case; slide arrows work
- [ ] Reviews: arrows, dots, swipe, "Original" screenshot opens
- [ ] Both videos play with sound on tap
- [ ] Form: empty submit shows field errors; valid submit shows demo notice (or success once connected); turn off network → error message
- [ ] Service / package "Discuss" links pre-select the service in the form
- [ ] Reduced motion (OS setting) → no tape scrolling, no auto-rotating reviews
- [ ] Social preview: paste the live URL into opengraph.xyz
- [ ] Lighthouse (Chrome DevTools) — performance, accessibility, SEO
