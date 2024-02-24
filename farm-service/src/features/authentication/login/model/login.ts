import { createAsyncThunk } from "@reduxjs/toolkit";
import { sessionApi } from "@/entities/session";

type Params = {
  email: Email;
  password: string;
};

export const loginThunk = createAsyncThunk<void, Params, { state: RootState }>(
  "authentication/login",
  async (body: Params, { dispatch }) => {
    try {
      await dispatch(sessionApi.endpoints.login.initiate(body)).unwrap();
    } catch (error) {
      throw new Error("error");
    }
  }
);
