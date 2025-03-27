import { parseJSON } from "@/utils/functions/json.func";

export enum LocalStorageKey {
  access_token = "access_token",
  refresh_token = "refresh_token",
  i18nextLng = "i18nextLng",
}

export const getItemLocalStorage = <T>(key: LocalStorageKey): T | null | undefined => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }
  return parseJSON<T>(itemStr);
};
export const removeItemLocalStorage = (key: LocalStorageKey) => {
  localStorage.removeItem(key);
  window.dispatchEvent(new Event("local-storage"));
};

export const clearLocalStorage = () => {
  const locales = localStorage.getItem(LocalStorageKey.i18nextLng);
  localStorage.clear();
  if (locales) localStorage.setItem(LocalStorageKey.i18nextLng, locales);
  window.dispatchEvent(new Event("local-storage"));
};
