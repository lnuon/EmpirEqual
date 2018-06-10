import { css } from 'styled-components';


export const normalize = css`
  html,
  body {
    font-size: 100%;
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