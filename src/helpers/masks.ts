export const formatWhatsApp = (value: string) => {
  const numericValue = value.replace(/\D/g, "");
  const limitedValue = numericValue.slice(0, 13);

  let formatted = "";
  if (limitedValue.length > 0) formatted += "+" + limitedValue.substring(0, 2);
  if (limitedValue.length > 2) formatted += " (" + limitedValue.substring(2, 4);
  if (limitedValue.length > 4) formatted += ") " + limitedValue.substring(4, 9);
  if (limitedValue.length > 9) formatted += "-" + limitedValue.substring(9, 13);

  return formatted;
};
