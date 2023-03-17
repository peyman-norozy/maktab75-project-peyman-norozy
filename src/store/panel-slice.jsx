import { createSlice } from "@reduxjs/toolkit";

const panelSlice = createSlice({
  name: "panelAuth",
  initialState: { showPanelPage: true },
  reducers: {
    showPanelPage(state, action) {
      console.log(action);
      console.log(state);
    },
  },
});

export const panelAction = panelSlice.actions;
export default panelSlice;
