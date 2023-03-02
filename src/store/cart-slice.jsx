import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    modalDisplay: false,
  },
  reducers: {
    addItemToCart(state, action) {
      console.log(action.payload);
      state.items = action.payload;
    },
    modalDisplayAction(state, action) {
      console.log(action);
      state.modalDisplay = action.payload;
    },
  },
});

export const productActions = cartSlice.actions;
export default cartSlice;
