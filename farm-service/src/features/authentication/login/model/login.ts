import { createAsyncThunk } from "@reduxjs/toolkit";
import { sessionApi } from "@/entities/session";
import { type RequestLoginBody } from "@/entities/session/api/types";

export const loginThunk = createAsyncThunk<
  void,
  RequestLoginBody,
  { state: RootState }
>("authentication/login", async (body: RequestLoginBody, { dispatch }) => {
  try {
    await dispatch(sessionApi.endpoints.login.initiate(body));
  } catch (error) {
    throw new Error("error");
  }
});
