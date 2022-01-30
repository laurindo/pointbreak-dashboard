export function sizeDecimal(value: string, size: string) {
  const prepareSize = String(Number(size)).split('.')[1].length;
  const prepareValue = Number(value);

  return String(prepareValue.toFixed(prepareSize));
}
