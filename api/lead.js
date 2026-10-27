// Vercel serverless function: receives the contact form and forwards it to Telegram.
// Set these in Vercel → Project → Settings → Environment Variables, then redeploy:
//   TELEGRAM_BOT_TOKEN  — token from @BotFather
//   TELEGRAM_CHAT_ID    — Yurii's chat id (send /start to the bot first)
// The token stays on the server and is never exposed in the page.

const clean = (value, max = 1500) => String(value ?? "").replace(/\s+$/g, "").slice(0, max);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method_not_allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  let body = req.body || {};
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = Object.fromEntries(new URLSearchParams(body)); }
  }
  // A plain HTML form post (no JavaScript on the page) gets a readable page back instead of JSON.
  const wantsHtml = !String(req.headers?.accept || "").includes("application/json");
  const reply = (status, ok) => {
    if (!wantsHtml) return res.status(status).json({ ok });
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(status).send(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${ok ? "Дякую!" : "Помилка"}</title>
<body style="margin:0;min-height:100vh;display:grid;place-items:center;background:#0D0B0C;color:#F6F2F2;font-family:system-ui,sans-serif;text-align:center;padding:24px">
<div><h1 style="font-size:26px">${ok ? "Дякую! Заявку надіслано." : "Не вдалося надіслати заявку."}</h1>
<p style="color:#BFB5B7">${ok ? "Юрій відповість вам найближчим часом. / Thank you, Yurii will reply soon." : "Будь ласка, напишіть напряму в Telegram: @YURII_KLL"}</p>
<p><a href="/#contact" style="color:#E2626C">← Повернутися на сайт</a> · <a href="https://t.me/YURII_KLL" style="color:#E2626C">Telegram</a></p></div></body>`);
  };
  if (!token || !chatId) return reply(503, false);
  if (body._gotcha) return reply(200, true); // honeypot: silently ignore bots

  const name = clean(body.name, 80);
  const contact = clean(body.contact, 120);
  const message = clean(body.message, 2000);
  if (name.length < 2 || contact.length < 3 || message.length < 10) {
    return reply(400, false);
  }

  const text = [
    "🆕 Нова заявка з сайту",
    "",
    `👤 Ім'я: ${name}`,
    `📱 Зв'язок: ${clean(body.method, 20)} — ${contact}`,
    `🧩 Послуга: ${({ white: "Стандартні ніші (White) — 450 €", grey: "Ніші з обмеженнями (Grey) — 550 €", black: "Ніші з високим ризиком (Black) — 700 €", unsure: "Ще не визначився" })[body.service] || clean(body.service, 80)}`,
    `🌐 Мова сайту: ${({ uk: "UA", en: "EN", pl: "PL" })[clean(body.language, 5)] || "—"}`,
    "",
    `💬 ${message}`,
  ].join("\n");

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text, disable_web_page_preview: true }),
    });
    if (!tg.ok) return reply(502, false);
    return reply(200, true);
  } catch (err) {
    return reply(502, false);
  }
}
