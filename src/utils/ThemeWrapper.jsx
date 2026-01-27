"use client";

import PropTypes from "prop-types";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";

function ThemeWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

ThemeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

ThemeWrapper.defaultProps = {};

export { ThemeWrapper };
