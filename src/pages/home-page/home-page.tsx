import HomeHero from "@/components/home-hero/home-hero";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import LabeledIconBox from "@/components/labeled-icon-box/labeled-icon-box";
import React from "react";
import { Stack } from "@mui/material";
import AreasDeEjercicio from "./sections/areas-de-ejercicio";
import AboutMe from "./sections/about-me";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <AreasDeEjercicio />
      <AboutMe />
    </main>
  );
}
