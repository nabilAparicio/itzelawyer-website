import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";
import bgDecoration from "../../../../public/assets/decorations/Rectangle_3.svg";
import logoIH from "../../../../public/logos/logo-IH.svg";

export default function FooterBackground() {
  return (
    <Stack position={"absolute"} style={{ zIndex: -1 }}>
      <Image
        layout="responsive"
        src={bgDecoration}
        alt="footer background cuadrado"
      />
      <Image
        style={{
          zIndex: 1,
          position: "absolute",
          top: "25%",
          left: 50,
          opacity: 0.1,
        }}
        src={logoIH}
        alt="footer background IH logo"
      />
    </Stack>
  );
}
