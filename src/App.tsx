import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { theme } from "./app/theme";
import { IntroScreen } from "./screens/intro/IntroScreen";

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <IntroScreen />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}
