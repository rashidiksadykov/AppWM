// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt'



export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },


  runtimeConfig: {
    public: {
      telegramBotToken: process.env.TELEGRAM_BOT_TOKEN || '',
    },

})
