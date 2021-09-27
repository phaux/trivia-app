import { fireEvent, render } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import { App } from "./App";
import { Question } from "./features/questions/questionsSlice";

test("renders welcome screen", () => {
  const { getByText } = render(<App />);

  expect(getByText(/welcome/i)).toBeInTheDocument();
});

test("changes amount", () => {
  const root = render(<App />);
  const input = root.getByLabelText(/amount/i) as HTMLInputElement;
  fireEvent.change(input, { target: { value: "15" } });
  expect(input.value).toBe("15");
});

test("changes amount", () => {
  const root = render(<App />);
  const input = root.getByLabelText(/difficulty/i) as HTMLSelectElement;
  fireEvent.change(input, { target: { value: "hard" } });
  expect(input.value).toBe("hard");
  fireEvent.change(input, { target: { value: "easy" } });
  expect(input.value).toBe("easy");
});

test("plays game", async () => {
  fetchMock.resetMocks();
  const results: Question[] = [
    {
      category: "Test",
      type: "boolean",
      difficulty: "easy",
      correct_answer: "True",
      incorrect_answers: ["False"],
      question: "Test question 1",
    },
    {
      category: "Test",
      type: "boolean",
      difficulty: "easy",
      correct_answer: "False",
      incorrect_answers: ["True"],
      question: "Test question 2",
    },
  ];
  fetchMock.mockResponseOnce(JSON.stringify({ results }));
  const root = render(<App />);
  fireEvent.click(root.getByText(/start/i));
  await root.findByText(/level 1/i);
  fireEvent.click(root.getByText(/true/i));
  fireEvent.click(root.getByText(/true/i));
  const title = root.getByText(/you scored/i);
  expect(title.closest("h1,h2,h3")).toHaveTextContent("1/2");
});
