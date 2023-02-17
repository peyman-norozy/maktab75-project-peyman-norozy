import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      state.items = action.payload.items;
    },
  },
});

export const productActions = cartSlice.actions;
export default cartSlice;
