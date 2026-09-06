import { restaurant } from "../data/restaurant";
import type { Lang } from "./i18n";

const messages = {
  id: (d: { name: string; date: string; time: string; guests: string }) =>
    [
      "Halo OASIS, saya ingin melakukan reservasi.",
      "",
      `Nama: ${d.name || "-"}`,
      `Tanggal: ${d.date || "-"}`,
      `Jam: ${d.time || "-"}`,
      `Jumlah orang: ${d.guests || "-"}`,
      "",
      "Terima kasih.",
    ].join("\n"),
  en: (d: { name: string; date: string; time: string; guests: string }) =>
    [
      "Hello OASIS, I'd like to make a reservation.",
      "",
      `Name: ${d.name || "-"}`,
      `Date: ${d.date || "-"}`,
      `Time: ${d.time || "-"}`,
      `Guests: ${d.guests || "-"}`,
      "",
      "Thank you.",
    ].join("\n"),
};

export function buildReservationLink(
  details: { name: string; date: string; time: string; guests: string },
  lang: Lang,
): string | null {
  if (!restaurant.whatsapp) return null;
  const text = encodeURIComponent(messages[lang](details));
  const number = restaurant.whatsapp.replace(/[^0-9]/g, "");
  return `https://wa.me/${number}?text=${text}`;
}
