import { createSlice } from "@reduxjs/toolkit";

const navigationAuth = createSlice({
  name: "navAuth",
  initialState: { showNavBar: true },
  reducers: {
    addOrRemoveNavBar(state, action) {},
  },
});

export const navigationAuthActions = navigationAuth.actions;
export default navigationAuth;
