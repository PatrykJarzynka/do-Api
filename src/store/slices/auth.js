import { createSlice } from "@reduxjs/toolkit";
import { login, signOut } from "./authThunk";

const initialState = {
  token: null,
  loading: false,
  userData: [],
  location: null,
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
    setToken: (state) => {
      state.token = null;
      state.loading = false;
    },
  },
  extraReducers: {
    [signOut.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = {};
      state.token = null;
    },
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      const { token, user } = action.payload;
      state.token = token;
      state.userData = user;
      state.loading = false;
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
    },
    // [fetchUserData.pending]: (state, action) => {
    //   state.loading = true;
    // },
    // [fetchUserData.fulfilled]: (state, action) => {
    //   const { user } = action.payload;
    //   state.userData = user;
    //   state.loading = false;
    // },
    // [fetchUserData.rejected]: (state, action) => {
    //   state.loading = false;
    //   state.userData = {};
    // },
  },
});

export const { setData, setToken } = authSlice.actions;
export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;
