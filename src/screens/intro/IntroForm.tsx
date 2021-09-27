/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChangeEvent } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { Button } from "../../app/ui/Button";
import { Input } from "../../app/ui/Input";
import {
  fetchQuestions,
  selectQuestions,
  setQuestionAmount,
  setQuestionDifficulty,
} from "../../features/questions/questionsSlice";
import { ReactComponent as AmountIcon } from "../../img/amount.svg";
import { ReactComponent as DifficultyIcon } from "../../img/difficulty.svg";

export function IntroForm() {
  const navigate = useNavigate();
  const questions = useAppSelector(selectQuestions);
  const dispatch = useAppDispatch();

  function handleStartClick() {
    dispatch(
      fetchQuestions({
        amount: questions.currentAmount,
        difficulty: questions.currentDifficulty,
      })
    );
    navigate("game");
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 32px;
        align-items: stretch;
        width: 100%;
        max-width: 450px;
      `}
    >
      <Input
        as="select"
        id="input-difficulty"
        icon={<DifficultyIcon />}
        label="Difficulty"
        value={questions.currentDifficulty}
        onChange={(event: ChangeEvent<HTMLSelectElement>) =>
          dispatch(setQuestionDifficulty(event.target.value as never))
        }
      >
        <option>easy</option>
        <option>medium</option>
        <option>hard</option>
      </Input>

      <Input
        id="input-amount"
        type="number"
        min={1}
        max={20}
        icon={<AmountIcon />}
        label="Amount"
        value={questions.currentAmount}
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          dispatch(setQuestionAmount(Number(event.target.value)))
        }
      />

      <Button
        variant="accent"
        css={css`
          margin-top: 32px;
        `}
        onClick={handleStartClick}
      >
        Start
      </Button>
    </div>
  );
}
