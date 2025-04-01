import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    sizes: {
      adBarHeight: string;
      adBarHeightMobile: string;
    };
    screens: {
      mobile: string;
      tablet: string;
      laptop: string;
      laptopL: string;
    };
    colors: {
      main: string;
      secondary: string;
      secondary2: string;
      secondary3: string;
      secondary4: string;
      text: string;
      background: string;
      error: string;
    };
  }
}
