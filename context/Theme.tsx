"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
// import { ThemeProviderProps } from "next-themes";
type ThemeProviderProps = React.ComponentProps<typeof NextThemesProvider>;

const ThemeProvider = ({ children, ...prop }: ThemeProviderProps) => {
  return <NextThemesProvider {...prop}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
