import { type BaseQueryFn } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import {
  type FetchArgs,
  type FetchBaseQueryError,
  type FetchBaseQueryMeta,
} from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { config } from "@/shared/lib";

export const baseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError,
  {},
  FetchBaseQueryMeta
> = fetchBaseQuery({
  baseUrl: config.API_ENDPOINT,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as any).session;

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});
