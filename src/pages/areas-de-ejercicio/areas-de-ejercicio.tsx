import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ilustration from "public/assets/images/areas-de-ejercicio/commercial.jpg";

export default function AreasDeEjercicio() {
  return (
    <Stack>
      <Box
        width={"100%"}
        height={600}
        sx={{ position: "relative", mt: "-70px" }}
      >
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
    </Stack>
  );
}
