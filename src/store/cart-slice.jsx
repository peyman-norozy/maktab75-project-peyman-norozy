import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart(state, action) {
      console.log(action.payload);
      state.items = action.payload;
      // state.items.push(...action.payload);
    },
  },
});

export const productActions = cartSlice.actions;
export default cartSlice;
