import { useCallback } from "react";

import { LocalStorageKey } from "@/utils";
import { useLocalStorage } from "./useLocalStorage";

export const useAuth = () => {
  const { storedValue: token, setValue } = useLocalStorage(LocalStorageKey.access_token, "");
  const handleLogout = useCallback(() => {
    setValue("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isLogin: !!token, token, setToken: setValue, logout: handleLogout };
};
