import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = loggedUserSlice.actions;
export default loggedUserSlice.reducer;
