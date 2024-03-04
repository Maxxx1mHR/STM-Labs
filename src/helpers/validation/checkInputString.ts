const regExp = /^[\p{L}\s]*$/u;

export const checkInputString = (inputString: string) => {
  return regExp.test(inputString);
};
