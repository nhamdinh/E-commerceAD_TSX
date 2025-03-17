import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend, { type HttpBackendOptions } from "i18next-http-backend";

import { LocalStorageKey, DEFAULT_LOCALE } from "@/utils";
import enLang from "./en/translations.json";
import viLang from "./kr/translations.json";

i18n.languages = [DEFAULT_LOCALE, "vi", "kr"];
let language = localStorage.getItem(LocalStorageKey.i18nextLng) || DEFAULT_LOCALE;
language = i18n.languages.includes(language) ? language : DEFAULT_LOCALE;
localStorage.setItem(LocalStorageKey.i18nextLng, language);

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    fallbackLng: language,
    lng: language,
    // debug: process.env.NODE_ENV !== "production",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translationsLOCALE: enLang,
      },
      vi: {
        translationsLOCALE: viLang,
      },
      kr: {
        translationsLOCALE: viLang,
      },
    },
    ns: ["translationsLOCALE"],
    defaultNS: "translationsLOCALE",
  })
  .then(() => {
    const language = localStorage.getItem(LocalStorageKey.i18nextLng) || DEFAULT_LOCALE;
    console.log("currentLanguage :::::", language);
    document.documentElement.setAttribute("lang", language);
  });

export default i18n;
