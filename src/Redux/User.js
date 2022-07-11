import { createSlice } from "@reduxjs/toolkit";
import { users } from "../Mock/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: users,
    addingUser: null,
    realUser: {
      products: [],
      total: 0,
    },
    isSign: false,
  },
  reducers: {
    addUser: (state, { payload }) => {
      if (
        state.users
          .filter((item) => item.username === payload.username)
          .filter((item) => item.password === payload.password).length === 0
      ) {
        state.addingUser = true;
        console.log(state.users.length);
      } else {
        console.log(state.users.length);
        state.addingUser = false;
      }
      if (state.addingUser) {
        state.users = [
          ...state.users,
          { ...payload, id: state.users.length + 1 },
        ];
      }
    },

    findUser: (state, { payload }) => {},
    addProduct: (state, { payload }) => {
      state.realUser.products = [...state.realUser.products, payload];
      console.log(state.realUser.products);
    },
    removeOne: (state, { payload }) => {
      state.realUser.products.splice(payload, 1);
    },
    totalSumm: (state, action) => {
      let total = 0;
      state.realUser.products.forEach((item) => {
        total += item.price;
      });
      state.realUser.total = total;
    },
    removeAll: (state) => {
      state.realUser.products = [];
      state.realUser.total = 0;
    },
  },
});

export const {
  findUser,
  addUser,
  addProduct,
  totalSumm,
  removeAll,
  removeOne,
} = userSlice.actions;

export default userSlice.reducer;
