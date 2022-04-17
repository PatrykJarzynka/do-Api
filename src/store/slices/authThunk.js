import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

export const login = createAsyncThunk("auth/login", async (payload) => {
  const response = await api.post("/users/login", payload);
  return response.data;
});

export const signOut = createAsyncThunk("auth/signOut", async (token) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
  api.post("/users/logout")
});
