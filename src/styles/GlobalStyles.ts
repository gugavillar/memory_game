import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'October Crow';
    src: url('../assets/fonts/OctoberCrow.ttf') format('truetype');
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: #0c0c0c;
  }

  h1 {
    text-align: center;
    font-family: 'October Crow';
    font-size: 72px;
    color: #ECC839;
    letter-spacing: 0.1em;
    margin-top: 15px;
  }

  .flip{
    animation: flip 1s linear;
  }

  .reverse-flip{
    animation: reverse-flip 1s linear;
  }

  @keyframes flip{
    from{
      transform: rotateY(180deg);
    }
    to{
      transform: rotateY(0deg);
    }
  }

  @keyframes reverse-flip{
    from{
      transform: rotateY(180deg);
    }
    to{
      transform: rotateY(0deg);
    }
  }

  .react-modal-overlay {
    background: rgba(14, 16, 21, 0.8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 500px;
    background: #15181F;
    padding: 24px 38px;
    position: relative;
    border-radius: 16px;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8)
    }
  }
`

export { GlobalStyles }
