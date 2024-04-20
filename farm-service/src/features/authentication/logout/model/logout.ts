import { createAsyncThunk } from "@reduxjs/toolkit";
import { sessionApi, clearSessionData } from "@/entities/session";
import { userApi } from "@/entities/user/api/userApi";
import { clearUserData } from "@/entities/user/model/slice";
import { SESSION_TAG } from "@/shared/api";
import { USER_TAG } from "@/shared/api/tags";
import { wait } from "@/shared/lib";

// Wrap the action in a function that returns a Promise
const asyncClearSessionData = () => async (dispatch: any) => {
  dispatch(clearSessionData());
  return await Promise.resolve();
};

const asyncClearUserData = () => async (dispatch: any) => {
  dispatch(clearUserData());
  return await Promise.resolve();
};

export const logoutThunk = createAsyncThunk<void, void, { state: RootState }>(
  "authentication/logout",
  async (_: unknown, { dispatch }) => {
    await dispatch(asyncClearSessionData());
    await dispatch(asyncClearUserData());

    // 👇 ATTENTION: This line clear all baseApi state instead of sessionApi
    dispatch(sessionApi.util.resetApiState());

    dispatch(sessionApi.util.invalidateTags([SESSION_TAG]));
    dispatch(userApi.util.invalidateTags([USER_TAG]));
  }
);
