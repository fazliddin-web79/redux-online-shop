import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", async () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    fetchingStatus: "",
  },
  reducers: {},
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.fetchingStatus = "loading";
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.fetchingStatus = "loaded";
    },
    [getProducts.rejected]: (state, action) => {},
  },
});

export default productsSlice.reducer;
