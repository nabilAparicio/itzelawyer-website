import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import SecctionTitleUppercase from "../section-title-uppercase/section-title-uppercase";

interface SectionIntroductionBannerProps {
  SecctionObject: {
    title: string;
    subtitle: string;
    description: string;
    buttonText: string;
  };
}

export default function SectionIntroductionBanner({
  SecctionObject,
}: SectionIntroductionBannerProps) {
  const { title, subtitle, description, buttonText } = SecctionObject;
  return (
    <Stack spacing={3} justifyContent={"center"}>
      <SecctionTitleUppercase>{title}</SecctionTitleUppercase>
      <Typography fontSize={24} fontWeight={600} variant="h3">
        {subtitle}
      </Typography>
      <Typography variant="body1">{description}</Typography>
      <Button
        color="primary"
        variant={"contained"}
        sx={{ textTransform: "none", maxWidth: 140, fontWeight: 700 }}
      >
        {buttonText}
      </Button>
    </Stack>
  );
}
