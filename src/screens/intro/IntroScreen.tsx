/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import blob1Url from "../../img/blob-1.svg";
import blob2Url from "../../img/blob-2.svg";
import blob3Url from "../../img/blob-3.svg";
import blob4Url from "../../img/blob-4.svg";
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
        background-color: ${theme.color.background.dark.primary};
        background-image: url("${blob1Url}"), url("${blob2Url}"), url("${blob3Url}"),
          url("${blob4Url}");
        background-position: top left, top right, bottom left, bottom right;
        background-repeat: no-repeat;
        color: ${theme.color.text.dark.primary};
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
