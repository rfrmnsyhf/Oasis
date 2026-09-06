export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
    .format(n)
    .replace("Rp", "Rp ")
    .replace(/\s+/g, " ");

export const formatShort = (n: number) => {
  if (n >= 1000) {
    const k = Math.round(n / 1000);
    return `${k}K`;
  }
  return n.toString();
};
