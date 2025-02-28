export const convertCurrencyToNumber = (
  currency: string | undefined
): number => {
  if (!currency) {
    return 0;
  }

  const formattedCurrency = currency
    .replace("R$", "")
    .replace(".", "")
    .replace(",", ".");

  return parseFloat(formattedCurrency);
};
