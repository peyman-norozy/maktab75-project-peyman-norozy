import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    searchItems: [],
    modalDisplay: false,
    deleteModalDisplay: false,
    loading: false,
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
    addSearchItem(state, action) {
      console.log(action);
      state.searchItems = action.payload;
    },
    loadingSpinnerCanger(state, action) {
      state.loading = action.payload;
    },
  },
});

export const productActions = cartSlice.actions;
export default cartSlice;
