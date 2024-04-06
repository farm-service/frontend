// import { type UserDto } from "@/entities/session/api/types";
// import { mapUser } from "@/entities/session/lib/mapUser";
import { type User } from "@/entities/user/model/types";
import { baseApi, SESSION_TAG } from "@/shared/api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // TODO: FSD: Move to entities/user/api/userApi.ts
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    me: build.query<User, void>({
      query: () => ({
        url: "api/v1/me",
      }),
      providesTags: [SESSION_TAG],
      // transformResponse: (response: UserDto) => mapUser(response),
    }),
  }),
});

export const { useMeQuery } = userApi;
