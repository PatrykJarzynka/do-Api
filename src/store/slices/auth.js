import { createSlice } from "@reduxjs/toolkit";
import { signOut } from "./authThunk";

const initialState = {
  token: null,
  loading: false,
  userData: [],
  error: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setData: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.userData = user;
      state.loading = false;
    },
  },
  extraReducers: {
    [signOut.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
  },
});

export const { setData } = authSlice.actions;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
