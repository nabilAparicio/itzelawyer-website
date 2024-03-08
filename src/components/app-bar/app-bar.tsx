"use client";

import theme from "@/theme/theme";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

const pages = ["Home", "About", "Contact", "Products", "Pricing", "Blog"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#FFFDF8", zIndex: 9 }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* ==================== MENU MOBILE ==================== */}
          <Stack sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            <Link href="/">
              <Box
                width="auto"
                top={0}
                left={0}
                maxHeight={48}
                component="img"
                src={"/logos/itzelawyer_logo_exto.svg"}
                sx={{
                  objectFit: "contain",
                }}
              />
            </Link>
          </Stack>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* ==================== MENU DESKTOP ==================== */}
          <Stack
            sx={{
              width: "100%",
              alignItems: "center",
              display: { xs: "flex", md: "none" },
              mr: 1,
            }}
          >
            <Link href="/">
              <Box
                width="auto"
                top={0}
                left={0}
                maxHeight={48}
                component="img"
                src={"/logos/itzelawyer_logo_exto.svg"}
                sx={{
                  objectFit: "contain",
                }}
              />
            </Link>
          </Stack>
          <Box
            sx={{
              flexGrow: 1,
              justifyContent: "flex-end",
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 1, display: "block", textTransform: "none" }}
              >
                <Typography
                  fontSize={14}
                  textAlign="center"
                  color="black"
                  sx={{ "&:hover": { color: theme.palette.secondary.dark } }}
                >
                  {page}
                </Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
