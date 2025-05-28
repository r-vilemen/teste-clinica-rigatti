import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.primary}, Arial, sans-serif;
    background-color: ${({ theme }) => theme.colors.backgrounds.primary};
    color: ${({ theme }) => theme.colors.text.primary};
    -webkit-font-smoothing: antialiased;
    scroll-behavior: smooth;
  }

  button {
    font-family: ${({ theme }) => theme.fonts.primary};
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }
  }

  input, textarea, select {
    font-family: ${({ theme }) => theme.fonts.primary};
    outline: none;
  }

  /* Scrollbar personalizada */
  ::-webkit-scrollbar {
    width: 6px;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.backgrounds.secondary};
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(
      100deg,
      ${({ theme }) => theme.colors.backgrounds.secondary} 20%,
      ${({ theme }) => theme.colors.backgrounds.quaternary} 50%,
      ${({ theme }) => theme.colors.backgrounds.quaternary} 100%
    );
    border-radius: 20px;
  }

  /* Seleção de texto */
  ::-moz-selection {
    color: ${({ theme }) => theme.colors.text.quinary};
    background: ${({ theme }) => theme.colors.backgrounds.quaternary};
  }

  ::selection {
    color: ${({ theme }) => theme.colors.text.quinary};
    background: ${({ theme }) => theme.colors.backgrounds.quaternary};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
