const express = require('express');
const crypto = require('crypto');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обработки JSON и данных формы
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Маршрут для отображения страницы авторизации
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Telegram Login</title>
        </head>
        <body>
            <h1>Авторизация через Telegram</h1>
            <script async src="https://telegram.org/js/telegram-widget.js?19"
                    data-telegram-login="tokenrebate_bot"
                    data-size="large"
                    data-radius="5"
                    data-auth-url="/auth"
                    data-request-access="write"></script>
        </body>
        </html>
    `);
});

// Маршрут для обработки данных после авторизации
app.get('/auth', (req, res) => {
    const { hash, ...data } = req.query;

    // Проверка подписи (Telegram API)
    const secret = crypto.createHash('sha256').update(process.env.TELEGRAM_BOT_TOKEN).digest();
    const checkString = Object.keys(data)
        .sort()
        .map(key => `${key}=${data[key]}`)
        .join('\n');
    const hmac = crypto.createHmac('sha256', secret).update(checkString).digest('hex');

    if (hmac === hash) {
        // Успешная авторизация
        res.send(`Добро пожаловать, ${data.first_name}!`);
    } else {
        // Неуспешная авторизация
        res.status(403).send('Ошибка авторизации!');
    }
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
