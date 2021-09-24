/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "accent" | "primary" | "secondary";
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", ...buttonProps } = props;
  const theme = useTheme();

  return (
    <button
      {...buttonProps}
      css={css`
        box-sizing: border-box;
        border: none;
        height: 75px;
        border-radius: 10px;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        ${variant === "accent"
          ? css`
              background-color: ${theme.color.accent.light};
              background-image: linear-gradient(
                90deg,
                ${theme.color.accent.light},
                ${theme.color.accent.dark}
              );
              box-shadow: 0 6px ${theme.color.accent.shadow};
              color: ${theme.color.text.dark.primary};
            `
          : variant === "primary"
          ? css`
              background-color: ${theme.color.text.light.primary};
              box-shadow: 0 6px ${theme.color.text.light.primary};
              color: ${theme.color.text.dark.primary};
            `
          : variant === "secondary"
          ? css`
              border: 1px solid ${theme.color.text.light.primary};
              background-color: transparent;
              color: ${theme.color.text.light.primary};
            `
          : null}
        &:focus {
          outline: 1px solid currentColor;
          outline-offset: -3px;
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
