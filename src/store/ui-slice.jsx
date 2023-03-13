import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "navAuth",
  initialState: { showNavBar: true, myBasketLength: 0 },
  reducers: {
    addOrRemoveNavBar(state, action) {
      console.log(action);
      state.showNavBar = action.payload;
    },
    basketBalance(state, action) {
      state.myBasketLength = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
