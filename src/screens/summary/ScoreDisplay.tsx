/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { ReactComponent as StarIcon } from "../../img/star.svg";
import avatarUrl from "./avatar.png";

export function ScoreDisplay(props: { score: number; maxScore: number }) {
  const { score, maxScore } = props;
  const theme = useTheme();

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 32px;
      `}
    >
      <h2
        css={css`
          font-weight: bold;
          font-size: 24px;
          text-align: center;
        `}
      >
        <img
          src={avatarUrl}
          alt="Avatar"
          css={css`
            vertical-align: middle;
            margin-right: 16px;
            width: 50px;
            height: 50px;
            border-radius: 100px;
            background-color: ${theme.color.background.light.primary};
            object-fit: cover;
          `}
        />
        <span>You scored</span>
        <span
          css={css`
            margin-left: 16px;
            font-weight: bold;
          `}
        >
          <span
            css={css`
              font-size: 1.4em;
              color: ${theme.color.accent.light};
            `}
          >
            {score}
          </span>
          /{maxScore}
        </span>
      </h2>

      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 4px;
        `}
      >
        {Array<null>(maxScore)
          .fill(null)
          .map((value, index) => (
            <StarIcon
              key={index}
              css={css`
                color: ${index < score
                  ? theme.color.accent.light
                  : theme.color.text.dark.secondary};
              `}
            />
          ))}
      </div>
    </div>
  );
}
