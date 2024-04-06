import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "@/entities/user/api/userApi";
import { type User } from "@/entities/user/model/types";

type UserSliceState = {
  user: User | {};
};

const initialState: UserSliceState = {
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.me.matchFulfilled,
      (state: UserSliceState, { payload }) => {
        console.log(payload);
      }
    );
  },
});

export const { clearUserData } = userSlice.actions;
