import crypto from 'crypto';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);

  // Проверка данных от Telegram
  const secret = crypto.createHash('sha256').update('<YOUR_BOT_TOKEN>').digest();
  const checkString = Object.keys(query)
    .filter((key) => key !== 'hash')
    .sort()
    .map((key) => `${key}=${query[key]}`)
    .join('\n');

  const hash = crypto
    .createHmac('sha256', secret)
    .update(checkString)
    .digest('hex');

  if (hash !== query.hash) {
    throw createError({ statusCode: 401, statusMessage: 'Invalid Telegram data' });
  }

  // Если проверка успешна, возвращаем данные
  return { user: query };
});
