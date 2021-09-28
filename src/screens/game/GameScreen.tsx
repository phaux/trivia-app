/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { htmlDecode } from "../../app/htmlDecode";
import { Button } from "../../app/ui/Button";
import { Progress } from "../../app/ui/Progress";
import { answerQuestion, selectQuestions } from "../../features/questions/questionsSlice";
import blob1Url from "../../img/blob-1.svg";
import blob2Url from "../../img/blob-2.svg";
import blob3Url from "../../img/blob-3.svg";
import blob4Url from "../../img/blob-4.svg";
import { AnswerList } from "./AnswerList";
import { GameSubtitle } from "./GameSubtitle";
import { GameTitle } from "./GameTitle";

export function GameScreen() {
  const theme = useTheme();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const questions = useAppSelector(selectQuestions);
  const [questionIdx, setQuestionIdx] = useState(0);

  const question = questions.questions[questionIdx];

  function handleAnswer(answer: string) {
    dispatch(answerQuestion(answer));
    if (questionIdx + 1 >= questions.questions.length) {
      navigate("../summary");
      return;
    }
    setQuestionIdx((idx) => idx + 1);
  }

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
        background-image: url("${blob1Url}"), url("${blob2Url}"), url("${blob3Url}"),
          url("${blob4Url}");
        background-position: top left, top right, bottom left, bottom right;
        background-repeat: no-repeat;
        color: ${theme.color.text.light.primary};
      `}
    >
      {questions.loading ? (
        // loading
        <GameTitle>Loading...</GameTitle>
      ) : questions.error != null ? (
        // error
        <Fragment>
          <GameTitle>Error: {questions.error}</GameTitle>
          <Button variant="secondary" onClick={() => navigate("..")}>
            Restart
          </Button>
        </Fragment>
      ) : question != null ? (
        // success
        <Fragment>
          <GameTitle>{question.category}</GameTitle>
          <GameSubtitle>level {questionIdx + 1}</GameSubtitle>
          <Progress value={questionIdx} max={questions.questions.length} />
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
            {htmlDecode(question.question)}
          </p>

          <AnswerList onAnswer={handleAnswer} />
        </Fragment>
      ) : (
        <Button variant="secondary" onClick={() => navigate("..")}>
          Restart
        </Button>
      )}
    </div>
  );
}
