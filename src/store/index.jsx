import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import uiSlice from "./ui-slice";
import userSlice from "./user-slice";
import panelSlice from "./panel-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    user: userSlice.reducer,
    panel: panelSlice.reducer,
  },
});

export default store;
