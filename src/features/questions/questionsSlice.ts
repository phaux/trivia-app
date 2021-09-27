import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

type QuestionDifficulty = "easy" | "medium" | "hard";

type QuestionType = "boolean" | "multiple";

interface FetchQuestionsParams {
  amount: number;
  difficulty: QuestionDifficulty;
}

interface FetchQuestionsResult {
  response_code: number;
  results: Question[];
}

export interface Question {
  category: string;
  type: QuestionType;
  difficulty: QuestionDifficulty;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const fetchQuestions = createAsyncThunk(
  "questions/fetchQuestions",
  (params: FetchQuestionsParams): Promise<FetchQuestionsResult> =>
    fetch(
      "https://opentdb.com/api.php?" +
        new URLSearchParams({
          type: "boolean",
          amount: String(params.amount),
          difficulty: params.difficulty,
        }).toString()
    ).then((response) => response.json())
);

export interface QuestionsState {
  questions: Question[];
  answers: string[];
  loading: boolean;
  error?: string;
  currentDifficulty: QuestionDifficulty;
  currentAmount: number;
}

const initialState: QuestionsState = {
  questions: [],
  answers: [],
  loading: false,
  currentDifficulty: "easy",
  currentAmount: 10,
};

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    setQuestionDifficulty(state, action: PayloadAction<QuestionDifficulty>) {
      state.currentDifficulty = action.payload;
    },
    setQuestionAmount(state, action: PayloadAction<number>) {
      state.currentAmount = action.payload;
    },
    answerQuestion(state, action: PayloadAction<string>) {
      state.answers.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.questions = [];
        state.answers = [];
        state.error = undefined;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload.results;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setQuestionAmount, setQuestionDifficulty, answerQuestion } = questionsSlice.actions;

export const questionsReducer = questionsSlice.reducer;

export const selectQuestions = (state: RootState) => state.questions;
