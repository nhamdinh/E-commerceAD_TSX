import { QUERY_TAGS, baseApi } from "./api.service";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<unknown, { page: number; limit: number }>({
      query: (params) => ({
        url: "user",
        method: "GET",
        params,
      }),
      providesTags: [QUERY_TAGS.USER_QUERY_TAG],
    }),
    updateUser: builder.mutation<unknown, { id: string | number; body: FormData }>({
      query: ({ id, body }) => ({
        url: `user/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: [QUERY_TAGS.USER_QUERY_TAG],
    }),
  }),
});

export default userApi;

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
