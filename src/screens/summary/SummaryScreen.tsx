/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { htmlDecode } from "../../app/htmlDecode";
import { Button } from "../../app/ui/Button";
import { Card } from "../../app/ui/Card";
import { selectQuestions } from "../../features/questions/questionsSlice";
import blob1Url from "../../img/blob-1.svg";
import blob2Url from "../../img/blob-2.svg";
import blob3Url from "../../img/blob-3.svg";
import blob4Url from "../../img/blob-4.svg";
import { ReactComponent as CheckIcon } from "../../img/check.svg";
import { ReactComponent as CrossIcon } from "../../img/cross.svg";
import { ScoreDisplay } from "./ScoreDisplay";

export function SummaryScreen() {
  const theme = useTheme();
  const navigate = useNavigate();
  const questions = useAppSelector(selectQuestions);

  function isAnswerCorrect(idx: number) {
    return questions.questions[idx].correct_answer === questions.answers[idx];
  }

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
        background-image: url("${blob1Url}"), url("${blob2Url}"), url("${blob3Url}"),
          url("${blob4Url}");
        background-position: top left, top right, bottom left, bottom right;
        background-repeat: no-repeat;
        color: ${theme.color.text.dark.primary};
      `}
    >
      <ScoreDisplay
        score={questions.answers.filter((answer, idx) => isAnswerCorrect(idx)).length}
        maxScore={questions.answers.length}
      />

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
        {questions.answers.map((answer, idx) => {
          const isCorrect = isAnswerCorrect(idx);
          return (
            <Card
              key={idx}
              role="listitem"
              icon={isCorrect ? <CheckIcon aria-label="good" /> : <CrossIcon aria-label="bad" />}
              error={!isCorrect}
            >
              {htmlDecode(questions.questions[idx].question)}
            </Card>
          );
        })}
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
