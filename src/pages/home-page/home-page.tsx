import HomeHero from "@/components/home-hero/home-hero";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import LabeledIconBox from "@/components/labeled-icon-box/labeled-icon-box";
import React from "react";
import { Stack } from "@mui/material";

export default function HomePage() {
  return (
    <main>
      <HomeHero />
      <Stack marginLeft={"50%"}>
        <LabeledIconBox
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nibh viverra sollicitudin sed faucibus elit enim amet faucibus. "
          icon={<PublicRoundedIcon style={{ fontSize: "55px" }} />}
          title="Derecho Migratorio"
          urlLink="/travel"
        />
      </Stack>
    </main>
  );
}
