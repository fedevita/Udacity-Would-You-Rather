import { createSlice } from "@reduxjs/toolkit";

export const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState: {
    value: false,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
