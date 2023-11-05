"use client";

import React from "react";
import { Box, ThemeProvider as MuiThemeProvider, Stack } from "@mui/material";
import theme from "./theme";

interface IndexProps {
  children: React.ReactNode;
}
export default function ThemeProvider({ children }: IndexProps) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
