import { css } from "@emotion/react";

const globalStyle = css`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  label,
  table {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }

  html,
  body {
    background-color: #f2f2f2;
    font-family: var(--font-noto-sans-kr);
    font-size: 16px;
    font-weight: 300;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    width: fit-content;
    height: fit-content;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body:has(.modal-open) {
    overflow: hidden;
  }
`;

export default globalStyle;
