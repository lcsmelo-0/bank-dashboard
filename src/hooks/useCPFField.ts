import { useState } from "react";

import { UseFieldHook } from "@/interfaces/fieldsHook";
import { formatToCPF } from "@/helpers/formatToCPF";

export const useCPFField = (initialValue: string = ""): UseFieldHook => {
  const [document, setDocument] = useState<string>(initialValue);
  const validCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(document);

  const handleDocumentChange = (value: string) => {
    const cleaned = value?.replace(/\D/g, "");

    const formattedCPF = formatToCPF(cleaned);

    setDocument(formattedCPF);
    return formattedCPF;
  };

  return [document, handleDocumentChange, validCPF];
};
