/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { ComponentProps, ReactNode } from "react";

interface CardProps extends ComponentProps<"div"> {
  icon?: ReactNode;
  error?: boolean;
}

export function Card(props: CardProps) {
  const { children, icon, error, ...rootProps } = props;
  const theme = useTheme();

  return (
    <div
      {...rootProps}
      css={css`
        box-sizing: border-box;
        padding: 24px 32px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        background-color: ${error
          ? theme.color.accent.background
          : theme.color.background.light.primary};
        color: ${theme.color.text.light.primary};
      `}
    >
      <p
        css={css`
          flex-grow: 1;
        `}
      >
        {children}
      </p>
      {icon && (
        <div
          css={css`
            position: relative;
            left: 8px;
          `}
        >
          {icon}
        </div>
      )}
    </div>
  );
}
