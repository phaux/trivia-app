import { answerQuestion, questionsReducer, QuestionsState } from "./questionsSlice";

describe("questions reducer", () => {
  const initialState: QuestionsState = {
    questions: [
      {
        category: "Test",
        type: "boolean",
        difficulty: "easy",
        correct_answer: "True",
        incorrect_answers: ["False"],
        question: "Test 1",
      },
      {
        category: "Test",
        type: "boolean",
        difficulty: "easy",
        correct_answer: "False",
        incorrect_answers: ["True"],
        question: "Test 2",
      },
    ],
    answers: [],
    loading: false,
    currentDifficulty: "easy",
    currentAmount: 10,
  };

  it("should handle answers", () => {
    let actual = questionsReducer(initialState, answerQuestion("True"));
    actual = questionsReducer(actual, answerQuestion("True"));
    expect(actual.answers.length).toEqual(2);
  });
});
