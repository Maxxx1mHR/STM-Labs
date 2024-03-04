// Функция для создания зодержки вызова функции, которая используется в качестве параметра
export const debounce = <T extends string[]>(
  fn: (...args: T) => void,
  ms: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  // Вызов функции после задарежки ms
  return function (...args: T) {
    const fnCall = () => {
      fn(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};
