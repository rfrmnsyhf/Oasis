export type Lang = "id" | "en";

export const DEFAULT_LANG: Lang = "id";

export const pickLang = (input: string | null | undefined): Lang =>
  input === "en" ? "en" : "id";

export type Bilingual = { id: string; en: string };
export const t = (b: Bilingual, lang: Lang) => b[lang];
