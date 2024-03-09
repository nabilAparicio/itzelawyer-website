import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ilustration from "public/assets/images/areas-de-ejercicio/commercial.jpg";
import Header from "./sections/header/header";

export default function AreasDeEjercicio() {
  return (
    <Stack>
      <Header ilustration={ilustration} />
    </Stack>
  );
}
