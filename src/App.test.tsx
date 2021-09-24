import { render } from "@testing-library/react";
import { App } from "./App";

test("renders welcome screen", () => {
  const { getByText } = render(<App />);

  expect(getByText(/welcome/i)).toBeInTheDocument();
});
