"use client";

import { Global, Theme, ThemeProvider } from "@emotion/react";
import globalStyle from "@/styles/global";
import theme from "@/styles/theme";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme as unknown as Theme}>
      <Global styles={globalStyle} />
      {children}
    </ThemeProvider>
  );
}
