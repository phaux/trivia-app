/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ComponentProps } from "react";

export const GameTitle = (props: ComponentProps<"div">) => (
  <h1
    {...props}
    css={css`
      font-weight: bold;
      font-size: 52px;
      text-align: center;
      @media (min-width: 600px) {
        font-size: 74px;
      }
    `}
  >
    {props.children}
  </h1>
);
