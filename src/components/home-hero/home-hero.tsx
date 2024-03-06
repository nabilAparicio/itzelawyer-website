import theme from "@/theme/theme";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function HomeHero() {
  return (
    <Stack
      component={"header"}
      justifyContent={"center"}
      width={"100%"}
      minHeight={"600px"}
      sx={{
        background: "linear-gradient(180deg, #FCF1D9 0%, #FFF 100%)",
        position: "relative",
      }}
    >
      {/* ==========FIGURA VERDE====== */}
      <Box
        width="auto"
        bottom={0}
        left={0}
        alt="figura verde"
        maxHeight={"100%"}
        component="img"
        src={"/assets/decorations/Rectangle_1.svg"}
        sx={{
          position: "absolute",
          objectFit: "contain",
          zIndex: 1,
        }}
      />
      {/* ==========FIGURA CREMA====== */}
      <Box
        width="auto"
        bottom={0}
        right={"6%"}
        maxHeight={"100%"}
        alt="figura crema"
        component="img"
        src={"/assets/decorations/Rectangle_2.svg"}
        sx={{
          position: "absolute",
          objectFit: "contain",
        }}
      />
      {/* ==========BUSTO ITZELA====== */}
      <Box
        width="auto"
        bottom={0}
        right={{ xs: 0, lg: "8%" }}
        maxHeight={{ xs: "90%", md: "100%" }}
        alt="busto itzela hernandez"
        component="img"
        src={"/assets/images/portrait_bust.webp"}
        sx={{
          position: "absolute",
          objectFit: "contain",
          zIndex: 2,
        }}
      />
      {/* ===================== HERO CONTENT ====================== */}
      <Stack
        maxWidth={{ xs: "100%", lg: "50%" }}
        mx={{ xs: "82px", lg: "139px" }}
        zIndex={3}
      >
        <Typography
          variant={"h1"}
          fontSize={{ xs: 48, lg: 64 }}
          fontWeight={700}
        >
          Servicio Honesto <br /> y Confiable
        </Typography>
        <Typography
          my={"24px"}
          fontSize={18}
          fontWeight={400}
          maxWidth={"600px"}
        >
          Defendiendo tus derechos con integridad, experiencia y compromiso,
          brindamos asesoría legal personalizada y representación jurídica de la
          más alta calidad.
        </Typography>
        <Button
          color="primary"
          variant={"contained"}
          sx={{ textTransform: "none", maxWidth: 140, fontWeight: 700 }}
        >
          Conóceme
        </Button>
        <Stack
          display={"flex"}
          mt={"96px"}
          gap={"96px"}
          flexDirection={"row"}
          alignItems={"center"}
        >
          {/* <Link target="_blank" href={"https://grupoguiapanama.com/"}>
            <Box
              width="96px"
              alt="logo grupo guia"
              component="img"
              src={"/logos/grupo_guia.png"}
              sx={{
                objectFit: "contain",
              }}
            />
          </Link>
          <Link target="_blank" href={"https://panamacna.com"}>
            <Box
              height="96px"
              alt="logo colegio nacional de abogados"
              component="img"
              src={"/logos/colegio_abogados.svg"}
              sx={{
                objectFit: "contain",
              }}
            />
          </Link>
          <Link
            target="_blank"
            href={
              "https://credencialesbid.openbadgepassport.org/app/badge/info/20534/pic/embed"
            }
          >
            <Box
              height="96px"
              alt="logo colegio nacional de abogados"
              component="img"
              src={"/logos/pm4r-agile.png"}
              sx={{
                objectFit: "contain",
              }}
            />
          </Link> */}
        </Stack>
      </Stack>
    </Stack>
  );
}
