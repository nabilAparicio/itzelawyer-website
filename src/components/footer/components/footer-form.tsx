"use server";

import Checkbox from "@mui/material/Checkbox";
import { Button, Card, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";
import { paths } from "@/utils/routes";
import { submitForm } from "./form-action";

export default async function FooterForm() {
  return (
    <Card sx={{ width: "568px", borderRadius: 5 }}>
      <form action={submitForm}>
        <Stack spacing={2} p={"40px"}>
          <TextField type="text" name="name" required placeholder="Nombre" />
          <TextField
            type="email"
            name="email"
            placeholder="Correo electrónico"
          />
          <TextField type="tel" name="phone" required placeholder="Teléfono" />
          <TextField
            type="text"
            name="message"
            placeholder="Mensaje"
            required
            multiline
            rows={4}
          />
          <Stack direction="row" spacing={1} alignItems="center">
            <Checkbox required name="check" />
            <Typography>
              He leído y acepto la{" "}
              <Link style={{ color: "#9C6B0B" }} href={paths.politicalPrivacy}>
                política de privacidad.
              </Link>
            </Typography>
          </Stack>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "none" }}
          >
            Enviar
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
