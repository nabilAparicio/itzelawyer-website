"use client";

import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import theme from "./theme";

interface IndexProps {
  children: React.ReactNode;
}
export default function ThemeProvider({ children }: IndexProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
