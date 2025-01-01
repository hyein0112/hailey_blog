// emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fonts: {
      notoSansKr: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
    };
    colors: {
      background1: string;
      background2: string;
      background3: string;
      background4: string;
      background5: string;

      border1: string;
      border2: string;
      border3: string;
      border4: string;

      text1: string;
      text2: string;
      text3: string;
      text4: string;

      black: string;
      white: string;

      red50: string;
      red100: string;
      red200: string;
      red300: string;
      red400: string;
      red500: string;
      red600: string;
      red700: string;
      red800: string;
      red900: string;

      green50: string;
      green100: string;
      green200: string;
      green300: string;
      green400: string;
      green500: string;
      green600: string;
      green700: string;
      green800: string;
      green900: string;

      yellow50: string;
      yellow100: string;
      yellow200: string;
      yellow300: string;
      yellow400: string;
      yellow500: string;
    };
  }
}
