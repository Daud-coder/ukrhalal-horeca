/**
 * Обробник заявок з форми сайту → Telegram.
 * Розгортається як Cloudflare Worker (безкоштовний план вистачає з запасом).
 *
 * НАВІЩО ОКРЕМИЙ СЕРВЕР: токен Telegram-бота не можна класти у фронтенд —
 * усе, що потрапляє в код сайту, видно кожному відвідувачу через "Переглянути
 * код". Токен живе ТІЛЬКИ тут, у секретах Worker'а.
 *
 * Потрібні змінні (задаються в Cloudflare, НЕ в цьому файлі):
 *   TELEGRAM_BOT_TOKEN — токен бота від @BotFather
 *   TELEGRAM_CHAT_ID   — куди слати заявки (ваш id або id групи)
 *   ALLOWED_ORIGIN     — https://horeca-ukrhalal.com.ua
 */

const CORS_HEADERS = (origin) => ({
  'Access-Control-Allow-Origin': origin,
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
})

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

export default {
  async fetch(request, env) {
    const allowed = env.ALLOWED_ORIGIN || ''
    const origin = request.headers.get('Origin') || ''

    // Пре-запит браузера перед POST на інший домен.
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: CORS_HEADERS(allowed) })
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 })
    }

    // Приймаємо заявки лише з нашого сайту, щоб ендпоінт не спамили з інших місць.
    if (allowed && origin !== allowed) {
      return new Response('Forbidden', { status: 403 })
    }

    let lead
    try {
      lead = await request.json()
    } catch {
      return new Response('Bad request', { status: 400, headers: CORS_HEADERS(allowed) })
    }

    const name = String(lead?.name ?? '').trim().slice(0, 80)
    const company = String(lead?.company ?? '').trim().slice(0, 120)
    const address = String(lead?.address ?? '').trim().slice(0, 160)
    const phone = String(lead?.phone ?? '').trim().slice(0, 20)
    const email = String(lead?.email ?? '').trim().slice(0, 120)

    if (!name || !company || !address || !phone) {
      return new Response('Missing fields', { status: 400, headers: CORS_HEADERS(allowed) })
    }

    const lines = [
      '<b>Нова заявка з сайту</b>',
      '',
      `<b>Заклад:</b> ${escapeHtml(company)}`,
      `<b>Адреса:</b> ${escapeHtml(address)}`,
      `<b>Контакт:</b> ${escapeHtml(name)}`,
      `<b>Телефон:</b> ${escapeHtml(phone)}`,
      email ? `<b>Email:</b> ${escapeHtml(email)}` : null,
    ].filter(Boolean)

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: env.TELEGRAM_CHAT_ID,
          text: lines.join('\n'),
          parse_mode: 'HTML',
          disable_web_page_preview: true,
        }),
      },
    )

    if (!telegramResponse.ok) {
      return new Response('Telegram error', { status: 502, headers: CORS_HEADERS(allowed) })
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { ...CORS_HEADERS(allowed), 'Content-Type': 'application/json' },
    })
  },
}
