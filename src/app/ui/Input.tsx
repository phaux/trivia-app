/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";
import { ComponentProps, ReactNode } from "react";

type InputType = "input" | "select";

type InputProps<T extends InputType = "input"> = ComponentProps<T> & {
  as?: T;
  icon?: ReactNode;
  label?: ReactNode;
};

export function Input<T extends InputType = "input">(props: InputProps<T>) {
  const { as: Component = "input", className, label, icon, ...inputProps } = props;
  const theme = useTheme();

  return (
    <div
      className={className}
      css={css`
        display: flex;
        flex-direction: column;
        align-items: stretch;
      `}
    >
      {label != null && (
        <label
          css={css`
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 16px;
            color: ${theme.color.accent.light};
          `}
          htmlFor={inputProps.id}
        >
          {icon}
          {label}
        </label>
      )}

      <Component
        {...(inputProps as never)}
        css={css`
          display: block;
          box-sizing: border-box;
          height: 75px;
          padding: 16px;
          font-size: 18px;
          color: currentColor;
          border: 1px solid currentColor;
          border-radius: 10px;
          background-color: transparent;
          &:focus {
            border-color: ${theme.color.accent.light};
            outline: none;
          }
        `}
      />
    </div>
  );
}
