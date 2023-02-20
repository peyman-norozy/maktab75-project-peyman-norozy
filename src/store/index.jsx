import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import navigationAuth from "./navigationAuth-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, navAuth: navigationAuth.reducer },
});

export default store;
