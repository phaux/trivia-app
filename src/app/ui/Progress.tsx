/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { ComponentProps } from "react";

interface ProgressProps extends ComponentProps<"div"> {
  value: number;
  max: number;
}

export function Progress(props: ProgressProps) {
  const { value, max, ...rootProps } = props;
  const theme = useTheme();

  return (
    <div
      {...rootProps}
      css={css`
        margin: 16px auto;
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 16px;
      `}
    >
      <p
        css={css`
          font-size: 20px;
          font-weight: bold;
        `}
      >
        <span
          css={css`
            color: ${theme.color.accent.dark};
            font-size: 1.5em;
          `}
        >
          {value}
        </span>
        /{max}
      </p>
      <div
        css={css`
          height: 5px;
          border-radius: 5px;
          background-color: ${theme.color.text.light.secondary};
        `}
      >
        <div
          css={css`
            height: 5px;
            border-radius: 5px;
            background-color: ${theme.color.accent.dark};
          `}
          style={{
            width: `${(value / max) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}
