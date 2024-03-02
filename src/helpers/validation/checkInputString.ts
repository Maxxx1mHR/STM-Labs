//английский, персидский, турецкий, хорватский
const regExp = /^[\p{L}]*$/u;

export const checkInputString = (inputString: string) => {
  return regExp.test(inputString);
};
