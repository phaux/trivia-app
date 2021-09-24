/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Button } from "../../app/ui/Button";
import { Progress } from "../../app/ui/Progress";

export function GameScreen() {
  const theme = useTheme();

  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        align-items: stretch;
        justify-content: center;
        gap: 32px;
        padding: 64px;
        background-color: ${theme.color.background.light.primary};
        color: ${theme.color.text.light.primary};
      `}
    >
      <h1
        css={css`
          font-weight: bold;
          font-size: 72px;
          text-align: center;
        `}
      >
        Entertainment: Videogames
      </h1>

      <h2
        css={css`
          font-size: 28px;
          text-align: center;
          letter-spacing: 8px;
        `}
      >
        level 1
      </h2>

      <Progress value={8} max={10} />

      <p
        css={css`
          margin: 32px auto;
          width: 100%;
          max-width: 630px;
          font-size: 24px;
          line-height: 32px;
          text-align: center;
        `}
      >
        The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial
      </p>

      <div
        css={css`
          margin: 0 auto;
          width: 100%;
          max-width: 500px;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 32px;
        `}
      >
        <Button variant="primary">True</Button>
        <Button variant="secondary">False</Button>
      </div>
    </div>
  );
}
