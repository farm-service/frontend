import { baseApi, SESSION_TAG } from "@/shared/api";
import { mapSession } from "../lib/mapSession";
import { mapUser } from "../lib/mapUser";
import { type User, type Session } from "../model/types";
import { type UserDto, type RequestLoginBody, type SessionDto } from "./types";

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      invalidatesTags: [SESSION_TAG],
      transformResponse: (response: SessionDto) => mapSession(response),
    }),
    // TODO: FSD: Move to entities/user/api/userApi.ts
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    me: build.query<User, void>({
      query: () => ({
        url: "/me",
      }),
      providesTags: [SESSION_TAG],
      transformResponse: (response: UserDto) => mapUser(response),
    }),
  }),
});

export const { useLoginMutation, useMeQuery } = sessionApi;
