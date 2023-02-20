import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "navAuth",
  initialState: { showNavBar: true },
  reducers: {
    addOrRemoveNavBar(state, action) {
      console.log(action);
      state.showNavBar = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
