/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "../../app/ui/Button";

export function AnswerList(props: { onAnswer: (answer: string) => void }) {
  const { onAnswer } = props;

  return (
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
      <Button variant="primary" onClick={() => onAnswer("True")}>
        True
      </Button>
      <Button variant="secondary" onClick={() => onAnswer("False")}>
        False
      </Button>
    </div>
  );
}
