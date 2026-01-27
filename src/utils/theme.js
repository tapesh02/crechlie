import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseColors = {
  brand: "#e01a4f",
  darkBase: "#0c090d",
  error: "#f15946",
  warning: "#f9c22e",
  secondary: "#53b3cb",
  success: "#22c55e",
};

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: baseColors.brand,
      contrastText: "#ffffff",
    },
    secondary: {
      main: baseColors.secondary,
      contrastText: "#ffffff",
    },
    error: { main: baseColors.error },
    warning: { main: baseColors.warning },
    info: { main: baseColors.secondary },
    success: { main: baseColors.success },
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: baseColors.darkBase,
      secondary: "rgba(12, 9, 13, 0.65)",
      disabled: "rgba(12, 9, 13, 0.38)",
    },
  },

  typography: {
    // Poppins as PRIMARY font for entire app
    fontFamily: 'var(--font-poppins), "Helvetica Neue", Arial, sans-serif',

    h1: { fontWeight: 700, fontSize: "2.5rem", lineHeight: 1.2 },
    h2: { fontWeight: 700, fontSize: "2rem", lineHeight: 1.3 },
    h3: { fontWeight: 600, fontSize: "1.75rem", lineHeight: 1.3 },
    h4: { fontWeight: 600, fontSize: "1.5rem", lineHeight: 1.3 },
    h5: { fontWeight: 600, fontSize: "1.25rem", lineHeight: 1.3 },
    h6: { fontWeight: 600, fontSize: "1rem", lineHeight: 1.4 },
    subtitle1: { fontSize: "1rem", fontWeight: 500 },
    subtitle2: { fontSize: "0.875rem", fontWeight: 500 },
    body1: { fontSize: "1rem" },
    body2: { fontSize: "0.875rem" },
    button: { textTransform: "none", fontWeight: 600 },
    caption: { fontSize: "0.75rem" },
    overline: { fontSize: "0.65rem" },
  },

  shape: {
    borderRadius: 14,
  },

  spacing: 8,

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 14,
          padding: "12px 20px",
        },
        containedPrimary: {
          backgroundColor: baseColors.brand,
          "&:hover": { backgroundColor: "#c01745" },
        },
      },
    },

    MuiTextField: {
      defaultProps: { fullWidth: true, variant: "outlined" },
    },

    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 14,
          backgroundColor: "#ffffff",
          padding: 0,
          [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
            "& input": { fontSize: "0.85rem", padding: "10px 12px" },
          },
          [`@media (min-width:${theme.breakpoints.values.sm}px)`]: {
            "& input": { fontSize: "0.9rem", padding: "12px 14px" },
          },
          [`@media (min-width:${theme.breakpoints.values.md}px)`]: {
            "& input": { fontSize: "1rem", padding: "14px 16px" },
          },
          [`@media (min-width:${theme.breakpoints.values.lg}px)`]: {
            "& input": { fontSize: "1.05rem", padding: "16px 18px" },
          },
          [`@media (min-width:${theme.breakpoints.values.xl}px)`]: {
            "& input": { fontSize: "1.1rem", padding: "18px 20px" },
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          [`@media (max-width:${theme.breakpoints.values.sm}px)`]: {
            fontSize: "0.75rem",
          },
          [`@media (min-width:${theme.breakpoints.values.sm}px)`]: {
            fontSize: "0.85rem",
          },
          [`@media (min-width:${theme.breakpoints.values.md}px)`]: {
            fontSize: "0.9rem",
          },
          [`@media (min-width:${theme.breakpoints.values.lg}px)`]: {
            fontSize: "0.95rem",
          },
          [`@media (min-width:${theme.breakpoints.values.xl}px)`]: {
            fontSize: "1rem",
          },
        }),
      },
    },

    MuiCard: {
      styleOverrides: { root: { borderRadius: 18, padding: "16px" } },
    },

    MuiChip: {
      styleOverrides: { root: { borderRadius: 10, fontWeight: 500 } },
    },

    MuiAppBar: {
      styleOverrides: {
        root: { boxShadow: "none", borderRadius: 0 },
      },
    },

    MuiIconButton: {
      styleOverrides: { root: { color: baseColors.brand } },
    },

    MuiTypography: {
      defaultProps: { gutterBottom: true },
    },
  },
});

const responsiveTheme = responsiveFontSizes(lightTheme);

export default responsiveTheme;
