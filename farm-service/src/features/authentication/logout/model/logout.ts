import { createAsyncThunk } from "@reduxjs/toolkit";
import { sessionApi, clearSessionData } from "@/entities/session";
import { userApi } from "@/entities/user/api/userApi";
import { clearUserData } from "@/entities/user/model/slice";
import { SESSION_TAG } from "@/shared/api";
import { USER_TAG } from "@/shared/api/tags";
import { wait } from "@/shared/lib";

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
  "authentication/logout",
  async (_: unknown, { dispatch }) => {
    dispatch(clearSessionData());
    dispatch(clearUserData());

    // Wait 10ms to invalidateTags in next event loop tick.
    // Otherwise after invalidate related requests with SESSION_TAG
    // will be started, but isAuthorized will still be equal to true
    await wait(10);

    // 👇 ATTENTION: This line clear all baseApi state instead of sessionApi
    // dispatch(sessionApi.util.resetApiState())

    dispatch(sessionApi.util.invalidateTags([SESSION_TAG]));
    dispatch(userApi.util.invalidateTags([USER_TAG]));
  }
);
