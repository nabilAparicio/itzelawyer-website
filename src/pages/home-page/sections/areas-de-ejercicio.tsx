import LabeledIconBox from "@/components/labeled-icon-box/labeled-icon-box";
import { Stack } from "@mui/material";
import PublicRoundedIcon from "@mui/icons-material/PublicRounded";
import React from "react";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SectionIntroductionBanner from "@/components/section-Introduction-banner/section-Introduction-banner";
import MovingIcon from "@mui/icons-material/Moving";

const SecctionObject = {
  title: "Áreas de Ejercicio",
  subtitle: "Especialidades Profesionales a su Disposición",
  description:
    "Nuestro despacho le brinda una asesoría legal de primer nivel, garantizando una representación efectiva en diversas ramas del Derecho.",
  buttonText: "Conóceme",
};

export default function AreasDeEjercicio() {
  return (
    <Stack flexDirection={"row"} paddingX={12} paddingY={12}>
      <Stack width={"50%"}>
        <SectionIntroductionBanner SecctionObject={SecctionObject} />
      </Stack>
      <Stack width={"50%"} spacing={3}>
        <LabeledIconBox
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nibh viverra sollicitudin sed faucibus elit enim amet faucibus. "
          icon={<PublicRoundedIcon style={{ fontSize: "55px" }} />}
          title="Derecho Migratorio"
          urlLink="/travel"
        />
        <LabeledIconBox
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nibh viverra sollicitudin sed faucibus elit enim amet faucibus. "
          icon={<AccountBalanceIcon style={{ fontSize: "55px" }} />}
          title="Derecho Civil"
          urlLink="/civil"
        />
        <LabeledIconBox
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet nibh viverra sollicitudin sed faucibus elit enim amet faucibus. "
          icon={<MovingIcon style={{ fontSize: "55px" }} />}
          title="Derecho Comercial"
          urlLink="/comertial"
        />
      </Stack>
    </Stack>
  );
}
