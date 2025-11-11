# Vercel Environment Variables Sozlash

## Qadam-baqadam yo'riqnoma:

### 1. Vercel Dashboard'ga kiring
https://vercel.com/dashboard

### 2. Loyihangizni tanlang
Dashboard'dan loyihangizni bosing (masalan: "capanna", "2-loyiha", yoki boshqa nom)

### 3. Settings bo'limiga o'ting
Loyiha sahifasida yuqoridagi navigatsiyadan **"Settings"** ni bosing

### 4. Environment Variables ga o'ting
Settings sahifasida chap menudan **"Environment Variables"** ni tanlang

### 5. Birinchi variable qo'shing
- **"Add New"** yoki **"+"** tugmasini bosing
- **Key**: `TELEGRAM_BOT_TOKEN`
- **Value**: `8468735985:AAGiQkjemedBTno44UYwG1lshyRLBfz8vRQ`
- **Environment**: 
  - ✅ Production
  - ✅ Preview  
  - ✅ Development
- **"Save"** ni bosing

### 6. Ikkinchi variable qo'shing
- **"Add New"** yoki **"+"** tugmasini bosing
- **Key**: `TELEGRAM_CHAT_ID`
- **Value**: `1571070022`
- **Environment**: 
  - ✅ Production
  - ✅ Preview
  - ✅ Development
- **"Save"** ni bosing

### 7. Redeploy qiling
- Yuqoridagi navigatsiyadan **"Deployments"** ni bosing
- Eng so'nggi deployment yonidagi **"..."** (uch nuqta) ni bosing
- **"Redeploy"** ni tanlang
- **"Redeploy"** ni tasdiqlang

### 8. Tekshirish
Redeploy qilgandan keyin, saytingizga kirib, buyurtma yuborishni sinab ko'ring. Telegram botga xabar kelishi kerak.

## Muhim eslatmalar:
- Environment variables qo'shgandan keyin **mutlaqo Redeploy qilish kerak**
- Har bir environment (Production, Preview, Development) uchun alohida sozlash mumkin
- Agar xatolik bo'lsa, browser console'ni ochib (F12) xatolik ma'lumotlarini ko'ring

