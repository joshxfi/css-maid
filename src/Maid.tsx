/** @jsx jsx */
/** @jsxFrag */
import React from "react";
import { css, jsx, Global } from "@emotion/react";

const Maid: React.FC = () => {
  return (
    <>
      <Global
        styles={css`
          * {
            padding: 0;
            margin: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            -webkit-tap-highlight-color: transparent;
            font-family: inherit;
          }

          body {
            line-height: 1;
          }

          a {
            text-decoration: none;
          }

          ol,
          ul {
            list-style: none;
          }

          input,
          textarea {
            outline: none;
          }

          textarea {
            resize: none;
          }
        `}
      />
    </>
  );
};

export default Maid;
