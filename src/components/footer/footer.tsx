import { Stack, Typography } from "@mui/material";
import React from "react";
import FooterBackground from "./components/footer-background";
import FooterForm from "./components/footer-form";

export default function Footer() {
  return (
    <Stack pt={12} px={12} position={"relative"}>
      <Stack height={"605px"} flexDirection={"row"}>
        <FooterBackground />
        <Stack
          maxWidth={"50%"}
          height={"100%"}
          color={"white"}
          justifyContent={"center"}
          alignItems={"center"}
          pl={16}
        >
          <Typography fontSize={42} fontWeight={500} variant="h2">
            Danos un toque para más información
          </Typography>
          <Typography mt={2} variant="body1">
            Regístrate y disfruta de todas las ventajas que te ofrecemos,
            introduce tus platos y empieza la transformación de tu restaurante:{" "}
          </Typography>
        </Stack>
        <Stack maxWidth={"50%"}>
          <FooterForm />
        </Stack>
      </Stack>
    </Stack>
  );
}
