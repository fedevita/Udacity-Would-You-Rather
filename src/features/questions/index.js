import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getQuestionsApi from "../../api/questionsApi/getQuestions";
import saveQuestionsApi from "../../api/questionsApi/saveQuestions";

export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async () => {
    const response = await getQuestionsApi();
    return response;
  }
);
export const saveQuestions = createAsyncThunk(
  "questions/saveQuestions",
  async (params) => {
    const response = await saveQuestionsApi(params);
    console.log(response);
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
    saveQuestions: (state, action) => {
      state.value.push(action.payload);
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
    [saveQuestions.pending]: (state, action) => {
      state.status = "loading";
    },
    [saveQuestions.fulfilled]: (state, action) => {
      state.value.push(action.payload);
      state.status = "success";
    },
    [saveQuestions.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

export default questionsSlice.reducer;
