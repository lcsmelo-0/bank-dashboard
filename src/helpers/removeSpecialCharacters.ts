export const removeSpecialCharacters = (str: string): string =>
  str.replace(/[^a-zA-Z0-9\s]/g, "");
