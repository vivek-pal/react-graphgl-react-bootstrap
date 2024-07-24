import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IHomeState } from "./types";
const initialState: IHomeState = {
  userList: null,
};

const HomeSlice = createSlice({
  name: "Home",
  initialState,
  reducers: {
    setUserList(state, action) {
      state.userList = action.payload;
    },
  },
});

export const { setUserList } = HomeSlice.actions;
export default HomeSlice.reducer;
