import { baseApi, SESSION_TAG } from "@/shared/api";
// import { mapSession } from "../lib/mapSession";
import { type Session } from "../model/types";
import { type RequestLoginBody } from "./types";

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
  }),
});

export const { useLoginMutation } = sessionApi;
