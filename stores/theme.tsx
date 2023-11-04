"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export default function ThemeProviderContext({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
