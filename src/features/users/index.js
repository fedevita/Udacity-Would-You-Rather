import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: { value: [] },
  reducers: {
    getUsers: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default usersSlice.reducer;
