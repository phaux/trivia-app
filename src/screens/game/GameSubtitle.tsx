/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentProps } from "react";

export const GameSubtitle = (props: ComponentProps<"div">) => (
  <h2
    {...props}
    css={css`
      font-size: 28px;
      text-align: center;
      letter-spacing: 8px;
    `}
  >
    {props.children}
  </h2>
);
