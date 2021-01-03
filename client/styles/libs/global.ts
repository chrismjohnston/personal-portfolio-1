import { css } from "styled-components";

const GlobalStyle = css`
  * {
    box-sizing: border-box;
    transition: ${({
      isPageLoaded,
      theme: {
        transitions: { short },
      },
    }) =>
      isPageLoaded
        ? `background-color ${short}, color ${short}, fill ${short}, stroke ${short}, border-color ${short}`
        : "none"};
  }

  html {
    font-size: 62.5%;
    /* scroll-behavior: smooth; */
  }

  html,
  body {
    background-color: ${({ theme }) => theme.colors.bodyBackground};
    font-family: "Work Sans", -apple-system, BlinkMacSystemFont, Segoe UI,
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    color: ${({ theme }) => theme.colors.text};
    font-display: swap;
    line-height: 1.8;
  }

  h1 {
    font-family: "Nanum Pen Script", cursive;
    font-size: 7rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    color: ${({ theme }) => theme.colors.textAccent};
    font-size: 1.6rem;
    margin-bottom: ${({ theme }) => theme.spaces.medium};
    text-transform: uppercase;
  }

  h4 {
    font-size: 2rem;
  }

  p,
  span,
  ul,
  ol {
    font-display: swap;
    font-size: 1.6rem;
    line-height: 2;
    overflow: break-word;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
  }

  span {
    color: ${({ theme }) => theme.colors.text};
    color: inherit;
  }

  li {
    color: ${({ theme }) => theme.colors.text};
    list-style: circle inside;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    font-display: swap;
    font-size: 1.6rem;
    text-decoration: none;
  }

  button {
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.6rem;
  }

  img {
    height: auto;
    width: 100%;
  }
`;

export default GlobalStyle;
