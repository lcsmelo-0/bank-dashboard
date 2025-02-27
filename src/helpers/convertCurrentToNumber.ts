export const convertCurrencyToNumber = (currency: string): number => {
  const formattedCurrency = currency
    .replace("R$", "")
    .replace(".", "")
    .replace(",", ".");

  return parseFloat(formattedCurrency);
};
