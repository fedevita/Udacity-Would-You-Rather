import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getUsersApi from "../../api/usersApi/getUsers";
export const getUsers = createAsyncThunk("users/getUsers", async () => {
  const response = await getUsersApi();
  return response;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: { value: [], status: null },
  reducers: {
    getUsers: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "success";
    },
    [getUsers.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default usersSlice.reducer;
