/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { ComponentProps } from "react";

export function Button(props: ComponentProps<"button">) {
  const { children, ...buttonProps } = props;
  const theme = useTheme();

  return (
    <button
      {...buttonProps}
      css={css`
        box-sizing: border-box;
        height: 75px;
        border: none;
        border-radius: 10px;
        background-color: ${theme.color.accent.light};
        background-image: linear-gradient(
          90deg,
          ${theme.color.accent.light},
          ${theme.color.accent.dark}
        );
        box-shadow: 0 6px ${theme.color.accent.shadow};
        color: ${theme.color.text.secondary};
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        &:focus {
          outline: 1px solid ${theme.color.accent.light};
          outline-offset: 1px;
        }
        &:active {
          transform: translateY(6px);
          box-shadow: 0 0 ${theme.color.accent.shadow};
        }
      `}
    >
      {children}
    </button>
  );
}
