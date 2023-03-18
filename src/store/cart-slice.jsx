import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    searchItems: [],
    modalDisplay: false,
    deleteModalDisplay: false,
    loading: false,
    buttonState: false,
    totalPrice: 0,
    checked: false,
    viewOrderModalDisplay: false,
    deliveredButton: false,
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
    addFormButtonState(state, action) {
      state.buttonState = action.payload;
    },
    newTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    newCheckedOrders(state, action) {
      state.checked = action.payload;
    },
    newViewOrderDisplay(state, action) {
      state.viewOrderModalDisplay = action.payload;
    },
    deliveredButtonHandle(state, action) {
      state.deliveredButton = action.payload;
    },
  },
});

export const productActions = cartSlice.actions;
export default cartSlice;
