import { NextResponse } from 'next/server'
import { getBotConfig } from '@/lib/supabase'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log('Telegram update received:', JSON.stringify(body))

    // 1. جلب توكن البوت تلقائياً من Supabase
    const botToken = await getBotConfig('telegram_bot_token')
    
    if (!botToken) {
      console.error('No Telegram Bot Token found in Supabase!')
      return NextResponse.json({ error: 'Bot token missing in Supabase' }, { status: 500 })
    }

    // 2. التحقق من الرسالة الواردة
    const message = body.message
    if (message && message.chat) {
      const chatId = message.chat.id
      const text = message.text || ''

      // الرد على أمر /start
      if (text.startsWith('/start')) {
        const welcomeText = `💎 **أهلاً بك في تطبيق RUBY EARN!** 💎\n\nاضغط على الزر أدناه لفتح التطبيق وبدء كسب جوائز الياقوت و USDT!`
        
        const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

        await fetch(telegramUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: welcomeText,
            parse_mode: 'Markdown',
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: '💎 فتح تطبيق RUBY EARN',
                    web_app: { url: 'https://ruby-earn.vercel.app/' }
                  }
                ],
                [
                  {
                    text: '📢 قناة السحوبات الرسمية',
                    url: 'https://t.me'
                  }
                ]
              ]
            }
          })
        })
      }
    }

    return NextResponse.json({ ok: true })
  } catch (error: any) {
    console.error('Error handling Telegram webhook:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ status: 'Ruby Earn Telegram Bot Webhook API is active' })
}
