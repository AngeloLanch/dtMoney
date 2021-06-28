import { createGlobalStyle } from 'styled-components';
import { responsive } from './responsive';

import 'keen-slider/keen-slider.min.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (min-width: ${responsive.md}) {
    html {
      font-size: 125%;
    }
  }

  @media (min-width: ${responsive.lg}) {
    html {
      font-size: 162%;
    }
  }

  body {
    -webkit-font-smoothing: antialiased;
    font-size: 1rem;
    background: ${({ theme }) => theme.colors.background};
  }

  body, input, textarea, button {
    font-family: SFProText, sans-serif;
  }

  h1, h2, h3 {
    font-size: inherit;
    font-family: Poppins, sans-serif;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .react-modal-overlay {
    background-color: rgba(112, 112, 112, 0.9);
    position: fixed;
    z-index: 1;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .react-modal-content {
    position: relative;
    max-height: 100vh;

    @media (min-width: ${responsive.sm}) {
      max-height: 90vh;
    }
  }

  .keen-slider, .keen-slider__slide {
    min-height: 160px;
  }
`;
