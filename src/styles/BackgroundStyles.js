import { createGlobalStyle } from 'styled-components';

const BackgroundStyles = createGlobalStyle`
  body {
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/assets/img/cemetery-bg.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      z-index: -2;
    }

    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: -1;
    }
  }
`;

export default BackgroundStyles; 