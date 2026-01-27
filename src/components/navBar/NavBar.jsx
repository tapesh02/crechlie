"use client";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { IoMenu as MenuIcon} from "react-icons/io5";
import { useState } from "react";

const MAIN_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Programs", href: "/#programs" },
  { label: "Why Crechlie", href: "/#why-crechlie" },
  { label: "Availability", href: "/#availability" },
];

const PARENT_FOCUSED_LINKS = [
  { label: "News & updates", href: "/#news" },
  { label: "Parent login", href: "/login/parents" },
];

const STAFF_PORTALS = [
  { label: "Creche login", href: "/login/creche" },
  { label: "Staff login", href: "/login/staff" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  const toggleDrawer = (value) => () => {
    setOpen(value);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "background.paper",
          borderBottom: "1px solid #E2E8F0",
          color: "text.primary",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 72 }}>
          {/* Brand - always visible */}
          <Box display="flex" alignItems="center" gap={1.5}>
            <Box
              sx={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                bgcolor: "primary.main",
              }}
            />
            <Typography variant="h6" component="div">
              Crechlie
            </Typography>
          </Box>

          {/* DESKTOP: Clean, parent-focused (4 main + 2 login + CTA) */}
          <Box
            sx={{
              display: { xs: "none", lg: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {/* Main navigation (4 items max) */}
            <Stack direction="row" spacing={2}>
              {MAIN_NAV_LINKS.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  color="inherit"
                  size="small"
                >
                  {item.label}
                </Button>
              ))}
            </Stack>

            {/* Parent CTAs only */}
            <Stack direction="row" spacing={1.5} alignItems="center">
              <Button href="/login/parents" size="small" color="inherit">
                Parent login
              </Button>
              <Button
                href="/#availability"
                size="small"
                variant="contained"
                color="primary"
              >
                Check availability
              </Button>
            </Stack>
          </Box>

          {/* TABLET: Minimal nav + hamburger */}
          <Box
            sx={{
              display: { xs: "none", lg: "none", md: "flex" },
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button href="/#availability" size="small" color="inherit">
              Check availability
            </Button>
          </Box>

          {/* MOBILE: Only hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton edge="end" onClick={toggleDrawer(true)} size="large">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile/Tablet FULL MENU DRAWER */}
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { 
            width: { xs: "85%", sm: 340 },
            maxWidth: 360 
          },
        }}
        ModalProps={{ keepMounted: true }}
      >
        <Box
          sx={{ 
            height: "100vh",
            pt: 2, 
            pb: 3, 
            px: 2.5,
            display: "flex",
            flexDirection: "column"
          }}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Header + Primary CTA */}
          <Box sx={{ mb: 4 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>
              Crechlie
            </Typography>
            <Button
              fullWidth
              href="/#availability"
              variant="contained"
              color="primary"
              size="large"
              onClick={toggleDrawer(false)}
            >
              Check availability
            </Button>
          </Box>

          {/* Main navigation */}
          <List sx={{ mb: 2, flexGrow: 1 }}>
            {MAIN_NAV_LINKS.map((item) => (
              <ListItemButton 
                key={item.label} 
                component="a" 
                href={item.href}
                onClick={toggleDrawer(false)}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>

          {/* Parent-focused links */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
              For parents
            </Typography>
            <List>
              {PARENT_FOCUSED_LINKS.map((item) => (
                <ListItemButton 
                  key={item.label} 
                  component="a" 
                  href={item.href}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
          </Box>

          {/* Staff portals (hidden by default, secondary) */}
          <Box>
            <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
              Staff portals
            </Typography>
            <List>
              {STAFF_PORTALS.map((item) => (
                <ListItemButton 
                  key={item.label} 
                  component="a" 
                  href={item.href}
                  onClick={toggleDrawer(false)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
