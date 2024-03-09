import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface headerPops {
  ilustration: string | StaticImport;
}
export default function Header({ ilustration }: headerPops) {
  return (
    <Box width={"100%"} height={600} sx={{ position: "relative", mt: "-70px" }}>
      <Image
        alt="ilustracion de derecho Comercial"
        src={ilustration}
        layout="responsive"
        style={{ position: "fixed", zIndex: -1 }}
        width={400}
        height={300}
      />
      <Typography
        component={"h1"}
        fontSize={42}
        align="center"
        sx={{
          position: "absolute",
          zIndex: 2,
          color: "white",
          top: "calc(50% - 24px)",
          backgroundColor: "#e5b75a70",
          width: "100%",
        }}
      >
        Derecho Comercial
      </Typography>
    </Box>
  );
}
