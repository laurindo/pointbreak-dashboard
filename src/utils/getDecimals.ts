// Esta função pega um "value" e restringe a quantidade de casas decimais de "size", arredondando
export function reduceToFixedSizeWithRound(
  value: string,
  size: string,
): string {
  const prepareSize = String(Number(size)).split('.')[1].length;
  const prepareValue = Number(value);

  return String(prepareValue.toFixed(prepareSize));
}

// Retorna o número de casas decimais de um value
export function nSizeDecimal(value: string): number {
  return String(Number(value)).split('.')[1].length;
}

// Esta função pega um "value" e restringe a quantidade de casas decimais de "size", sem arredondar
export function reduceToFixedSize(value: string, size: string): string {
  const expo = Math.pow(10, nSizeDecimal(size));
  return String(Math.floor(Number(value) * expo) / expo);
}
