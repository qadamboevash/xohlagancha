# Capanna Restaurant Website

Capanna restorani uchun veb-sayt. Next.js va TypeScript bilan yaratilgan.

## Funksiyalar

- 🏠 Bosh sahifa
- 📋 To'liq menu
- 🛒 Dastafka (Savat)
- 📅 Stol bron qilish
- 📱 Telegram bot integratsiyasi

## Texnologiyalar

- Next.js 14
- React 18
- TypeScript
- CSS Modules

## Mahalliy ishga tushirish

```bash
# Dependencies o'rnatish
npm install

# Development server ishga tushirish
npm run dev
```

Sayt `http://localhost:3000` da ochiladi.

## Environment Variables

Vercel'da quyidagi environment variables sozlash kerak:

- `TELEGRAM_BOT_TOKEN` - Telegram bot token
- `TELEGRAM_CHAT_ID` - Telegram chat ID

## Deploy

Vercel'ga deploy qilish uchun:

1. GitHub'ga push qiling
2. Vercel'da yangi loyiha yarating
3. GitHub repository'ni ulang
4. Environment variables sozlang
5. Deploy qiling
