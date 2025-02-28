import { useState } from "react";

import { UseFieldHook } from "@/interfaces";

export const useCurrencyField = (
  initial?: number,
  limit?: number
): UseFieldHook => {
  const initialFormattedValue =
    initial !== undefined ? `R$ ${initial.toFixed(2).replace(".", ",")}` : "";

  const [value, setValue] = useState<string | undefined>(
    initial !== undefined ? initialFormattedValue : undefined
  );

  const validCurrency =
    value !== undefined &&
    /^R\$ \d{1,3}(?:\.\d{3})*,\d{2}$/.test(value) &&
    value !== "R$ 0,00";

  const handleCurrencyChange = (rawValue: string): void => {
    if (rawValue) {
      let onlyNumbers = rawValue.replace(/\D/g, "");

      if (limit && onlyNumbers.length > limit + 2) {
        onlyNumbers = onlyNumbers.slice(0, limit + 2);
      }

      let integerPart = onlyNumbers.slice(0, -2);
      const decimalPart = onlyNumbers.slice(-2);

      if (!integerPart) {
        integerPart = "0";
      }

      integerPart = parseInt(integerPart, 10)
        .toString()
        ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

      const formattedValue = `${integerPart},${decimalPart}`;
      setValue(`R$ ${formattedValue}`);
    } else {
      setValue(undefined);
    }
  };

  return [value, handleCurrencyChange, validCurrency];
};
