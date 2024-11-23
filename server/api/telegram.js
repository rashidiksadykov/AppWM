export default defineEventHandler((event) => {
    try {
      // Извлечение GET-параметров из запроса
      const query = getQuery(event)
  
      // Логируем полученные данные
      console.log('Received query:', query)
  
      // Проверяем обязательные параметры
      if (!query.id || !query.username) {
        return {
          statusCode: 400,
          message: 'Missing required parameters (id, username)',
        }
      }
  
      // Формируем объект данных
      const userData = {
        id: query.id,
        first_name: query.first_name || '',
        last_name: query.last_name || '',
        username: query.username || '',
        photo_url: query.photo_url || '',
        auth_date: query.auth_date || '',
        hash: query.hash || '',
      }
  
      // Логируем объект для отладки
      console.log('Processed userData:', userData)
  
      // Возвращаем объект данных
      return {
        statusCode: 200,
        message: 'Success',
        data: userData,
      }
    } catch (error) {
      console.error('Error processing request:', error)
      return {
        statusCode: 500,
        message: 'Internal Server Error',
      }
    }
  })
  