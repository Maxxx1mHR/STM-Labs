export const debounce = <T extends string[]>(
  fn: (...args: T) => void,
  ms: number
) => {
  let timeout: ReturnType<typeof setTimeout>;
  return function (this: string, ...args: T) {
    const fnCall = () => {
      fn.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};
