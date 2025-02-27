import { useState } from "react";

import { UseFieldHook } from "@/interfaces/fieldsHook";

export const useCPFField = (initialValue: string = ""): UseFieldHook => {
  const [document, setDocument] = useState<string>(initialValue);
  const validCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(document);

  const handleDocumentChange = (value: string) => {
    const cleaned = value?.replace(/\D/g, "");

    const formattedCPF = cleaned
      ?.slice(0, 11)
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{2})$/, "$1-$2");
    setDocument(formattedCPF);
    return formattedCPF;
  };

  return [document, handleDocumentChange, validCPF];
};
