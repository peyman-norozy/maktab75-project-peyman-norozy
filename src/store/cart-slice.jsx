import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    searchItems: [],
    modalDisplay: false,
    deleteModalDisplay: false,
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
    deleteModalDisplay(state, action) {
      state.deleteModalDisplay = action.payload;
    },
    addSearchItem(state,action){
      state.searchItems = action.payload
    }
  },
});

export const productActions = cartSlice.actions;
export default cartSlice;
