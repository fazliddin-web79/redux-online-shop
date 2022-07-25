import { createSlice } from "@reduxjs/toolkit";
import { users } from "../Mock/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: users,
    addingUser: null,
    realUser: {
      userInfo: {},
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
      } else {
        state.addingUser = false;
      }
      if (state.addingUser) {
        state.users = [
          ...state.users,
          {
            ...payload,
            id: state.users.length + 1,
            address: {
              city: "",
              street: "",
              number: "",
              zipcode: "",
            },
            name: { firstname: "", lastname: "" },
          },
        ];
      }
    },

    findUser: (state, { payload }) => {
      const { username, password } = payload;
      const newUser = state.users.find(
        (item) => item.username === username && item.password === password
      );

      if (newUser) {
        state.realUser.userInfo = newUser;
        state.isSign = true;
      }
    },
    addProduct: (state, { payload }) => {
      if (state.isSign) {
        state.realUser.products = [...state.realUser.products, payload];
      } else alert("please, sign-in after buy product");
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
