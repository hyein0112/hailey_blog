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
    font-weight: 400;
  }

  ol,
  ul {
    list-style: none;
  }

  button {
    font-family: var(--font-noto-sans-kr);
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

  .text-overflow-1 {
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 1; // 원하는 라인 수
    -webkit-box-orient: vertical;
  }
`;

export default globalStyle;
