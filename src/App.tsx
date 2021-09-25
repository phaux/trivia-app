import { ThemeProvider } from "@emotion/react";
import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { theme } from "./app/theme";
import { GameScreen } from "./screens/game/GameScreen";
import { IntroScreen } from "./screens/intro/IntroScreen";
import { SummaryScreen } from "./screens/summary/SummaryScreen";

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<IntroScreen />} />
              <Route path="game" element={<GameScreen />} />
              <Route path="summary" element={<SummaryScreen />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  );
}
