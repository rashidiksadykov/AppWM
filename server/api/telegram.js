export default defineEventHandler(async (event) => {
    try {
      // Извлечение GET-параметров
      const query = getQuery(event)
  
      // Логируем полученные параметры
      console.log('Received query:', query)
  
      // Проверяем обязательные параметры
      if (!query.id || !query.username) {
        console.log('Missing required parameters')
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
  
      // Логируем объект данных
      console.log('Processed userData:', userData)
  
      // Возвращаем объект
      return {
        statusCode: 200,
        message: 'Success',
        data: userData,
      }
    } catch (error) {
      // Логируем ошибку
      console.error('Error in handler:', error.message, error.stack)
  
      // Возвращаем стандартный ответ 500
      return {
        statusCode: 500,
        message: 'Internal Server Error',
      }
    }
  })
  