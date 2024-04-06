// import { type UserDto } from "@/entities/session/api/types";
// import { mapUser } from "@/entities/session/lib/mapUser";
import { type User } from "@/entities/user/model/types";
import { baseApi } from "@/shared/api";
import { USER_TAG } from "@/shared/api/tags";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    me: build.query<User, void>({
      query: () => ({
        url: "api/v1/me",
      }),
      providesTags: [USER_TAG],
      // transformResponse: (response: UserDto) => mapUser(response),
    }),
  }),
});

export const { useMeQuery } = userApi;
