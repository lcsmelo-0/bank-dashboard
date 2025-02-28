export const formatToCPF = (value: string | number): string => {
  if (!value) {
    return "";
  }
  return value
    ?.toString()
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{2})$/, "$1-$2");
};
