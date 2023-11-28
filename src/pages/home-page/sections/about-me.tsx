import SectionIntroductionBanner from "@/components/section-Introduction-banner/section-Introduction-banner";
import { Box, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const SecctionObject = {
  title: "Sobre mí",
  subtitle: "Itzela Hernandez - Despacho Jurídico",
  description:
    "Soy un abogado especialista en derecho penal, con experiencia en el ejercicio de la profesión en el ámbito público y privado.",
  buttonText: "Conóceme",
};

export default function AboutMe() {
  return (
    <Stack flexDirection={"row"} sx={{ backgroundColor: "#FFFDF8" }} px={12}>
      <Stack width={"50%"}>
        <Image
          width={503}
          height={496}
          alt="Portrait of me"
          src={"/assets/images/portrait_bust2.webp"}
        />
      </Stack>
      <Stack width={"50%"} justifyContent={"center"}>
        <SectionIntroductionBanner SecctionObject={SecctionObject} />
      </Stack>
    </Stack>
  );
}
