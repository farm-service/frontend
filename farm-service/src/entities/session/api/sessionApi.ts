import { baseApi, SESSION_TAG } from "@/shared/api";
// import { mapSession } from "../lib/mapSession";
import { mapUser } from "../lib/mapUser";
import { type User, type Session } from "../model/types";
import { type UserDto, type RequestLoginBody, type SessionDto } from "./types";

function objectToFormData(obj: any) {
  const formData = new FormData();

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      formData.append(key, obj[key]);
    }
  }

  return formData;
}
export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<Session, RequestLoginBody>({
      query: (body) => ({
        url: "/auth/jwt/login",
        method: "POST",
        body: objectToFormData(body),
      }),
      invalidatesTags: [SESSION_TAG],
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
