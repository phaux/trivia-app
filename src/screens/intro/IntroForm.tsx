/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "../../app/ui/Button";
import { Input } from "../../app/ui/Input";
import { ReactComponent as AmountIcon } from "../../img/amount.svg";
import { ReactComponent as DifficultyIcon } from "../../img/difficulty.svg";

export function IntroForm() {
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
        value="hard"
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
        value="10"
      />

      <Button
        css={css`
          margin-top: 32px;
        `}
      >
        Start
      </Button>
    </div>
  );
}
