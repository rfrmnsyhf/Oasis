import { restaurant } from "../data/restaurant";

export function buildReservationLink(details: {
  name: string;
  date: string;
  time: string;
  guests: string;
}): string | null {
  if (!restaurant.whatsapp) return null;
  const text = encodeURIComponent(
    [
      "Halo OASIS, saya ingin melakukan reservasi.",
      "",
      `Nama: ${details.name || "-"}`,
      `Tanggal: ${details.date || "-"}`,
      `Jam: ${details.time || "-"}`,
      `Jumlah orang: ${details.guests || "-"}`,
      "",
      "Terima kasih.",
    ].join("\n"),
  );
  const number = restaurant.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${text}`;
}
