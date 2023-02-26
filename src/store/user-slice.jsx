import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  token: {},
  items: [],
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    pending(state, action) {
      console.log(action);
      initialState = { ...state, loading: action.payload };
      console.log(initialState);
    },
    fulfilled(state, action) {
      console.log(action);
      initialState = { ...state, loading: action.payload };
      console.log(initialState);
    },
    error(state, action) {
      console.log(action);
      initialState = {
        ...state,
        loading: action.payload.Loading,
        error: action.payload.error,
      };

      console.log(initialState);
    },
    addItemToPanel(state, action) {
      console.log(action.payload.items);
      console.log(initialState);
      state.items.push(...action.payload.items);
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
