import { Link, Stack, Typography } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import React from "react";
import NextLink from "next/link";

interface LabeledIconBoxProps {
  icon: React.ReactNode;
  urlLink: string;
  title: string;
  description: string;
}
export default function LabeledIconBox({
  icon,
  urlLink,
  title,
  description,
}: LabeledIconBoxProps) {
  return (
    <Stack flexDirection={"row"} alignItems="center">
      {icon}
      <Stack marginLeft={"24px"}>
        <Link component={NextLink} color={"#000"} href={urlLink}>
          <Stack direction="row" alignItems="center">
            <Typography fontWeight={600} fontSize={19} variant="h2">
              {title}
            </Typography>
            <LinkIcon style={{ fontSize: "19px" }} />
          </Stack>
        </Link>
        <Typography mt={"8px"} fontSize={16} variant="body1">
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
}
