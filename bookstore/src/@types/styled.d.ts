import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      highLight: string;
      gray: {
        200: string;
        250: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
      };
      white: string;
      black: string;
      link: string;
    };
    shadow: string;
  }
}
