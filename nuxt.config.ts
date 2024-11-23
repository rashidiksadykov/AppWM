import { defineNuxtConfig } from 'nuxt'
import dotenv from 'dotenv'

// Загрузка переменных окружения из файла .env
dotenv.config()

// Экспорт конфигурации
export default defineNuxtConfig({
  publicRuntimeConfig: {
    telegramBotToken: process.env.TELEGRAM_BOT_TOKEN,
  },

})
