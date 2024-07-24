import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
  name: "page",
  initialState: { value: 0 },
  reducers: {
    next: (state, action) => {
      state.value = state.value + 1;
    },
    back: (state, action) => {
      state.value = state.value - 1;
    },
    exit: (state, action) => {
        state.value = 0;
      },
  },
});
export const { back } = pageSlice.actions;
export const { next } = pageSlice.actions;
export const { exit } = pageSlice.actions;
export default pageSlice.reducer;
