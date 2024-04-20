import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "@/entities/user/api/userApi";
import { type User } from "@/entities/user/model/types";

interface UserSliceState extends User {}

const initialState: UserSliceState = {
  id: null,
  username: null,
  is_superuser: null,
  registered_at: null,
  email: null,
  role_id: null,
  is_active: null,
  is_verified: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearUserData: (state) => {
      state = { ...initialState };

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.me.matchFulfilled,
      (state, { payload }) => {
        return {
          ...state,
          ...payload,
        };
      }
    );
  },
});

export const selectUser = (state: RootState) => state.user;

export const { clearUserData } = userSlice.actions;
