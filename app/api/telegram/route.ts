import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, type } = await request.json()

    // Telegram Bot API configuration
    // Iltimos, .env.local faylida TELEGRAM_BOT_TOKEN va TELEGRAM_CHAT_ID ni o'rnating
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || ''
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || ''

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      console.error('Telegram bot token yoki chat ID topilmadi!')
      return NextResponse.json(
        { error: 'Telegram bot sozlanmagan' },
        { status: 500 }
      )
    }

    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`

    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    })

    if (!response.ok) {
      let errorData
      try {
        errorData = await response.json()
      } catch (e) {
        errorData = { description: await response.text() || 'Noma\'lum xatolik' }
      }
      console.error('Telegram API error:', errorData)
      return NextResponse.json(
        { 
          error: 'Telegram xabar yuborishda xatolik',
          details: errorData.description || errorData.error_description || 'Noma\'lum xatolik'
        },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error sending to Telegram:', error)
    return NextResponse.json(
      { error: 'Server xatoligi' },
      { status: 500 }
    )
  }
}

