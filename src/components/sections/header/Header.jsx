"use client";

import PropTypes from "prop-types";
import { Box, AppBar, Toolbar, Typography, Container } from "@mui/material";
import { FaChild } from "react-icons/fa";

function Header() {
  return (
    <AppBar position="static" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexGrow: 1,
            }}>
            <FaChild size={28} />
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                letterSpacing: "-0.5px",
              }}>
              Crechlie
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              alignItems: "center",
            }}>
            <Typography
              component="a"
              href="#"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 500,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "opacity 0.2s",
                "&:hover": {
                  opacity: 0.7,
                },
              }}>
              Home
            </Typography>
            <Typography
              component="a"
              href="#"
              sx={{
                textDecoration: "none",
                color: "inherit",
                fontWeight: 500,
                fontSize: "0.95rem",
                cursor: "pointer",
                transition: "opacity 0.2s",
                "&:hover": {
                  opacity: 0.7,
                },
              }}>
              About
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {};
Header.defaultProps = {};

export default Header;
