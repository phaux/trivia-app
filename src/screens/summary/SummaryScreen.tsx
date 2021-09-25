/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { Button } from "../../app/ui/Button";
import { Card } from "../../app/ui/Card";
import { ReactComponent as CheckIcon } from "../../img/check.svg";
import { ReactComponent as CrossIcon } from "../../img/cross.svg";
import { ReactComponent as StarIcon } from "../../img/star.svg";
import avatarUrl from "./avatar.png";

export function SummaryScreen() {
  const theme = useTheme();
  const navigate = useNavigate();

  const score = 8;
  const maxScore = 10;

  return (
    <div
      css={css`
        box-sizing: border-box;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        align-items: stretch;
        justify-content: space-between;
        gap: 32px;
        padding: 64px;
        background-color: ${theme.color.background.dark.primary};
        color: ${theme.color.text.dark.primary};
      `}
    >
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
                css={css`
                  color: ${index < score
                    ? theme.color.accent.light
                    : theme.color.text.dark.secondary};
                `}
              />
            ))}
        </div>
      </div>

      <div
        role="listbox"
        css={css`
          width: 100%;
          max-width: 650px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 24px;
        `}
      >
        <Card role="listitem" icon={<CheckIcon aria-label="good" />}>
          Test test test teset etset set etes test etsetset
        </Card>
        <Card role="listitem" error icon={<CrossIcon aria-label="bad" />}>
          Test test test teset etset set etes test etsetset
        </Card>
      </div>

      <div
        css={css`
          width: 100%;
          max-width: 650px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 24px;
        `}
      >
        <Button variant="accent" onClick={() => navigate("..")}>
          Restart
        </Button>
      </div>
    </div>
  );
}
