import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
  name: "toggle",
  initialState: {
    isActive: false,
  },
  reducers: {
    toggleHandler: (state) => {
      state.isActive = !state.isActive;
    },
  },
});

export const { toggleHandler } = appslice.actions;

export default appslice.reducer;
