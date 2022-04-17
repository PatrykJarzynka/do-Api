import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchContacts, postContacts, deleteContact } from "./contactAPI";
import { useSelector } from "react-redux";
import { selectToken } from "../store/slices/auth";
import api from "../services/api";

const initialState = {
  contacts: {
    items: [],
    filter: "",
    status: "idle",
  },
};

export const deleteAsync = createAsyncThunk(
  "contacts/deleteContacts",
  async (id, thunkAPI) => {
    debugger
    const token = thunkAPI.getState().auth.token;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    await deleteContact(id);
    const response = await fetchContacts();
    return response.data;
  }
);

// export const postAsync = createAsyncThunk('contacts/addContacts', async contact => {
//   const response = await postContacts(contact);
//   return response.data;
// });

export const fetchAsync = createAsyncThunk(
  "contacts/fetchContacts",
  async (thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    api.defaults.headers.Authorization = `Bearer ${token}`;
    const response = await fetchContacts();
    return response.data;
  }
);


// export const fetchUserData = createAsyncThunk(
//   "auth/fetchUserData",
//   async (payload) => {
//     const accessToken = payload.token;
//     api.defaults.headers.Authorization = `Bearer ${accessToken}`;
//     const response = await api.get("/contacts");
//     return response.data;
//   }
// );

export const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    filterContacts: (state, action) => {
      state.contacts.filter = action.payload;
    },
    addContact: (state, action) => {
      state.contacts.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAsync.fulfilled, (state, action) => {
        state.status = "idle";
        action.payload.map((contact) => state.contacts.items.push(contact));
      })
      // .addCase(postAsync.fulfilled, (state, action) => {
      //   state.contacts.items.push(action.payload);
      // })
      .addCase(deleteAsync.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
      });
  },
});

export const { filterContacts, addContact } = contactSlice.actions;

export const selectContacts = (state) => state.data.contacts.items;
export const selectFilter = (state) => {
  return selectContacts(state).filter((contact) =>
    contact.name
      .toLowerCase()
      .includes(state.data.contacts.filter.toLowerCase())
  );
};

export const postAsync = (contact) => async (dispatch, getState) => {
  const token = getState().auth.token;
  api.defaults.headers.Authorization = `Bearer ${token}`;
  const response = await postContacts(contact);
  dispatch(addContact(response.data));
};

export default contactSlice.reducer;
