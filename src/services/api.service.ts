import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

import { LocalStorageKey, clearLocalStorage, getItemLocalStorage, API_LINK } from "@/utils";

export const API_REDUCER_KEY = "base-api";
export const QUERY_TAGS = {
  USER_QUERY_TAG: "user",
};
console.log("API_LINK ::::", API_LINK);

const authQueryHeader = fetchBaseQuery({
  baseUrl: API_LINK,
  prepareHeaders: (headers) => {
    const accessToken = getItemLocalStorage(LocalStorageKey.access_token);
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const authQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  const result = await authQueryHeader(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    clearLocalStorage();
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: API_REDUCER_KEY,
  baseQuery: authQuery,
  tagTypes: Object.values(QUERY_TAGS),
  endpoints: () => ({}),
});
