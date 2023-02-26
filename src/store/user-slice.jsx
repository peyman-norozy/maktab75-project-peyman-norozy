import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: { items: [], loading: false, error: 0 },
  reducers: {
    pending(state, action) {
      console.log(action);
      state = { ...state, loading: action.payload };
    },
    fulfilled(state, action) {
      console.log(action);
      state = { ...state, loading: action.payload };
    },
    error(state, action) {
      console.log(action);
      console.log(action.payload.Loading);
      console.log(action.payload.error);
      console.log(state.loading);
      console.log(state.error);
      state.error = action.payload.error;
      state.loading = action.payload.Loading;
      // state = {
      //   ...state,
      //   Loading: action.payload.Loading,
      //   error: action.payload.error,
      // };
    },
    addItemToPanel(state, action) {
      console.log(action.payload.items);

      state.items.push(...action.payload.items);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
