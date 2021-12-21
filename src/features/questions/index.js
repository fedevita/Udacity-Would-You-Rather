import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getQuestionsApi from "../../api/questionsApi/getQuestions";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async () => {
    const response = await getQuestionsApi();
    return response;
  }
);

export const questionsSlice = createSlice({
  name: "questions",
  initialState: { value: [], status: null },
  reducers: {
    getQuestions: (state, action) => {
      state.value = action.payload;
    },
  },
  extraReducers: {
    [getQuestions.pending]: (state, action) => {
      state.status = "loading";
    },
    [getQuestions.fulfilled]: (state, action) => {
      state.value = action.payload;
      state.status = "success";
    },
    [getQuestions.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default questionsSlice.reducer;
