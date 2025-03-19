import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { Select } from "antd";

import { LANGUAGES_OPTIONS } from "@/utils";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = useCallback(
    async (langCode: string) => {
      await i18n.changeLanguage(langCode);
      document.documentElement.setAttribute("lang", langCode === "kr" ? "kr" : langCode);
    },
    [i18n]
  );
  return (
    <Select
      value={i18n.language}
      style={{ width: 60 }}
      onChange={handleChangeLanguage}
      options={LANGUAGES_OPTIONS}
    />
  );
};
