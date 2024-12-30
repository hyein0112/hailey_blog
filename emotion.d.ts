// emotion.d.ts
import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      md: string;
      lg: string;
      xl: string;
    };
    colors: {
      primary_light: string;
      primary_normal: string;
      primary_dark: string;
      //error
      error: string;
      //gray
      gray_50: string;
      gray_100: string;
      gray_200: string;
      gray_300: string;
      gray_400: string;
      gray_500: string;
      gray_600: string;
      gray_700: string;
      gray_800: string;
      gray_900: string;
      //black & white
      black: string;
      white: string;
    };
  }
}
