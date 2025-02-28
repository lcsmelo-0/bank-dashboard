export const removeSpecialCharacters = (str: string | undefined): string => {
  if (!str) {
    return "";
  }

  return str.replace(/[^a-zA-Z0-9\s]/g, "");
};
