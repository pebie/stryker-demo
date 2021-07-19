export const addition = (
  num1: number | undefined,
  num2: number | undefined
) => {
  return num1 && num2 ? num1 + num2 : undefined;
};
