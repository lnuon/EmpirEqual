import { css } from 'styled-components';

export const normalize = css`
  html,
  body {
    font-size: 100%;
    margin: 0;
    height: 100%;
  }

  #root {
    width: 100%;
  }

  .Select-control {
    height: 59px;
    background-color: #eaeaea;
    border: 2px solid black;
    border-radius: 0;
    width: 102%;
    margin-left: -1%;
    margin-top: -3px;
  }

  .Select-placeholder {
    margin-top: 10px;
    font-family: 'myraid pro', sans-serif;
    color: black;
  }

  .Select-arrow {
    border-color: black;
  }

  body {
    font-family: 'Crete Round', serif;
    position: relative;
    -webkit-font-smoothing: antialiased;
    font-smooth: antialiased;
    -moz-font-smoothing: antialiased;
  }

  button {
    border: 0;
    border-radius: 0;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    background: transparent;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  a,
  a:link {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default css`
  ${normalize};

  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: ${20 / 14};
  }
`;
