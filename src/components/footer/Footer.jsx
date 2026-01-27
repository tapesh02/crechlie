"use client";
// components/Footer.jsx
import { Box, Container, Stack, Typography, Divider, Link } from "@mui/material";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        bgcolor: "background.paper",
        borderTop: "1px solid #E2E8F0",
        pt: { xs: 3, md: 4 },
        pb: { xs: 3, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        {/* Top section - 4 even columns on desktop */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 3, md: 4, lg: 6 }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", lg: "flex-start" }}
        >
          {/* Brand */}
          <Box sx={{ maxWidth: { xs: "100%", md: 300 } }}>
            <Typography variant="h6" sx={{ mb: 1.5, color: "text.primary" }}>
              Crechlie
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.5 }}>
              Premium childcare services across Ireland with real-time 
              availability and qualified early years educators.
            </Typography>
          </Box>

          {/* 4 perfectly balanced columns */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 0, md: 5, lg: 12 }}
            sx={{ flex: 1 , width: '100%', justifyContent: "space-between"}}
          >
            {/* Company (3 links) */}
            <Box>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
              >
                Company
              </Typography>
              <Stack spacing={1}>
                <Link href="/about" underline="hover" color="text.secondary" variant="body2">
                  About Crechlie
                </Link>
                <Link href="/centres" underline="hover" color="text.secondary" variant="body2">
                  Our centres
                </Link>
                <Link href="/programs" underline="hover" color="text.secondary" variant="body2">
                  Programs
                </Link>
              </Stack>
            </Box>

            {/* Legal (3 links) */}
            <Box>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
              >
                Legal
              </Typography>
              <Stack spacing={1}>
                <Link href="/terms-of-use" underline="hover" color="text.secondary" variant="body2">
                  Terms of use
                </Link>
                <Link href="/privacy-policy" underline="hover" color="text.secondary" variant="body2">
                  Privacy policy
                </Link>
                <Link href="/cookies" underline="hover" color="text.secondary" variant="body2">
                  Cookies
                </Link>
              </Stack>
            </Box>

            {/* Portals (3 links) */}
            <Box>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
              >
                Portals
              </Typography>
              <Stack spacing={1}>
                <Link href="/login/parents" underline="hover" color="text.secondary" variant="body2">
                  Parent login
                </Link>
                <Link href="/login/creche" underline="hover" color="text.secondary" variant="body2">
                  Creche login
                </Link>
                <Link href="/login/staff" underline="hover" color="text.secondary" variant="body2">
                  Staff login
                </Link>
              </Stack>
            </Box>

            {/* Support (3 links) */}
            <Box>
              <Typography 
                variant="subtitle2" 
                sx={{ mb: 2, fontWeight: 600, color: "text.primary" }}
              >
                Support
              </Typography>
              <Stack spacing={1}>
                <Link href="/child-safeguarding" underline="hover" color="text.secondary" variant="body2">
                  Child safeguarding
                </Link>
                <Link href="/complaints-procedure" underline="hover" color="text.secondary" variant="body2">
                  Complaints
                </Link>
                <Link href="/accessibility" underline="hover" color="text.secondary" variant="body2">
                  Accessibility
                </Link>
              </Stack>
            </Box>
          </Stack>
        </Stack>

        {/* Divider + bottom row */}
        <Divider sx={{ my: { xs: 2, md: 3 } }} />

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 2 }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
        >
          <Typography variant="caption" color="text.secondary">
            © {year} Crechlie. All rights reserved.
          </Typography>

          <Typography variant="caption" color="text.secondary">
            Subject to Irish law
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
