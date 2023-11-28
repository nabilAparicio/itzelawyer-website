import { Typography } from "@mui/material";
import React from "react";

interface Props {
  children: string;
}
export default function SecctionTitleUppercase({ children }: Props) {
  return (
    <Typography fontSize={14} fontWeight={600} variant="h2">
      {children.toUpperCase()}
    </Typography>
  );
}
