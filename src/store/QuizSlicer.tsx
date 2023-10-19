import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { QuizItem, QuizState } from "../interfaces";

const initialState: QuizState = {
  waiting: true,
  loading: false,
  questions: [],
  index: 0,
  correct: 0,
  error: false,
  quiz: {
    amount: 10,
    category: "general",
    difficulty: "easy",
  },
};
export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async (url: string) => {
    try {
      const response = await axios(url);
      return response.data.results as QuizItem[];
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
);

const quizSlicer = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setWaiting: (state, action: PayloadAction<boolean>) => {
      state.waiting = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setQuestions: (state, action: PayloadAction<QuizItem[]>) => {
      state.questions = action.payload;
    },
    setIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
    setCorrect: (state, action: PayloadAction<number>) => {
      state.correct = action.payload;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    },
    setQuiz: (state, action: PayloadAction<QuizState["quiz"]>) => {
      state.quiz = action.payload;
    },
    closeModal: (state) => {
      state.waiting = true;
      state.correct = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.waiting = false;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
        state.waiting = false;
        state.error = action.payload.length === 0;
      })
      .addCase(fetchQuestions.rejected, (state) => {
        state.waiting = true;
      });
  },
});

export const {
  setWaiting,
  setLoading,
  setQuestions,
  setIndex,
  setCorrect,
  setError,
  setQuiz,

  closeModal,
} = quizSlicer.actions;

export default quizSlicer.reducer;
