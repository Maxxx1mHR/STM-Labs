export const debounce = <T extends any[]>(
  fn: (...args: T) => void,
  ms: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: T) {
    const fnCall = () => {
      fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};
