"use client";

import { Global, Theme, ThemeProvider } from "@emotion/react";
import globalStyle from "@/styles/global";
import theme from "@/styles/theme";
import Header from "@/components/common/header";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme as unknown as Theme}>
      <Global styles={globalStyle} />
      <Header />
      {children}
    </ThemeProvider>
  );
}
