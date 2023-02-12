import { createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
  reducers: {
    activeUser: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

export const { activeUser } = userSlice.actions;

export default userSlice.reducer;
