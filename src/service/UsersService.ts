// URL API из переменной окружения
const _apiUrl = import.meta.env.VITE_APP_API_URL;

// Функция для получения данных по заданному URL
const getResource = async (url: string) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Error');
    }
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

// Функция для получения всех пользователей
export const getAllUsers = (results: number) => {
  return getResource(`${_apiUrl}?results=${results}`);
};
