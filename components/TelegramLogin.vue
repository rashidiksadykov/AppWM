<template>
  <div id="telegram-login-button"></div>
</template>

<script setup>
const TELEGRAM_BOT_USERNAME = 'tokenrebate_bot'; // Имя твоего бота

onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://telegram.org/js/telegram-widget.js?10';
  script.async = true;
  script.setAttribute('data-telegram-login', TELEGRAM_BOT_USERNAME);
  script.setAttribute('data-size', 'large');
  script.setAttribute('data-userpic', 'true');
  script.setAttribute('data-radius', '10');
  script.setAttribute('data-auth-url', '/api/auth/telegram');
  script.setAttribute('data-request-access', 'write');
  document.getElementById('telegram-login-button').appendChild(script);
});
</script>
