import dotenv from 'dotenv'

// Загружаем переменные окружения
dotenv.config()

export default {
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }, // Не забываем запятую!

  runtimeConfig: {
    public: {
      telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '',
    },
    apiKey: process.env.API_KEY || '',
  },
}
