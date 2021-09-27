/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../app/hooks";
import { htmlDecode } from "../../app/htmlDecode";
import { Button } from "../../app/ui/Button";
import { Card } from "../../app/ui/Card";
import { selectQuestions } from "../../features/questions/questionsSlice";
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
