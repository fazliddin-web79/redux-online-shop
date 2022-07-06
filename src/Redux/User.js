import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("getUser", async () => {
  return fetch("https://fakestoreapi.com/users").then((res) => res.json());
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    realUser: {
      products: [],
    },
    isSign: false,
  },
  reducers: {
    addUser: (state, { payload }) => {
      getUser();
      state.users = [
        ...state.users,
        { ...payload, id: state.users.length + 1 },
      ];
      console.log(state.users, "STATE add user");
      console.log(payload, "payload");
    },
    findUser: (state, { payload }) => {
      console.log(payload, "finduser");
    },
    addProduct: (state, { payload }) => {
      state.realUser.products = [...state.realUser.products, payload];
      console.log(state.realUser.products);
    },
  },
  extraReducers: {
    [getUser.pending]: (state, action) => {},
    [getUser.fulfilled]: (state, action) => {
      state.users = action.payload;
    },
    [getUser.rejected]: (state, action) => {},
  },
});

export const { findUser, addUser, addProduct } = userSlice.actions;

export default userSlice.reducer;
