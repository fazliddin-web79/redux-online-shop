import { configureStore } from "@reduxjs/toolkit";
import Products from "./Products";
import User from "./User";

const store = configureStore({
  reducer: {
    products: Products,
    users: User,
  },
});

export default store;
