/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { IntroForm } from "./IntroForm";
import logoUrl from "./logo.png";

export function IntroScreen() {
  const theme = useTheme();

  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        gap: 32px;
        padding: 64px;
        background-color: ${theme.color.background.secondary};
        color: ${theme.color.text.secondary};
      `}
    >
      <h1
        css={css`
          font-weight: bold;
          font-size: 46px;
          text-align: center;
        `}
      >
        Welcome to the
        <img
          css={css`
            display: block;
            margin: 32px auto;
            max-width: 100%;
          `}
          src={logoUrl}
          alt="Trivia"
        />
      </h1>

      <IntroForm />
    </div>
  );
}
