import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --bright-orange: hsl(31, 77%, 52%);
    --dark-cyan: hsl(184, 100%, 22%);
    --very-dark-cyan: hsl(179, 100%, 13%);
    --transparent-white: hsla(0, 0%, 100%, 0.75);
    --very-light-gray: hsl(0, 0%, 95%);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    width: 100%;
    height: 100%;
  }

  html {
    @media (max-wdth: 1440px) {
      font-size: 93.75%;  /*15px*/
    }

    @media (max-wdth: 720px) {
      font-size: 87.5%;   /*14px*/
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    border: 2px solid transparent;
    border-radius: 2.5rem;

    background: #F0F2F5;
    padding: 1rem 2.5rem;
    margin-top: 5rem;
    margin-bottom: 2rem;

    font-family: 'Lexend Deca', sans-serif;

    transition: 400ms;
  }
`