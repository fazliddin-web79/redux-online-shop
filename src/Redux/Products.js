import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("getProducts", async () => {
  return fetch("https://fakestoreapi.com/products").then((res) => res.json());
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    fetchingStatus: "",
    newProducts: [],
    isFiltered: false,
  },
  reducers: {
    filterProducts: (state, { payload }) => {
      state.newProducts = state.products.filter((item) =>
        item.title.toLowerCase().includes(payload.toLowerCase())
      );
      state.isFiltered = true;
    },
  },
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.fetchingStatus = "loading";
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.newProducts = payload;
      state.fetchingStatus = "loaded";
    },
    [getProducts.rejected]: (state, action) => {},
  },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
