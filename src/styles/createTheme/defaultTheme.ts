import { ThemeBase } from "./types";

const COLOR_DARK = "#252525";
const COLOR_LIGHT = "#F5F5F5";

const defaultTheme: ThemeBase = {
  breakpoints: {
    xs: {
      min: 0,
      max: 600,
    },
    sm: {
      min: 601,
      max: 1024,
    },
    md: {
      min: 1025,
      max: 1440,
    },
    lg: {
      min: 1441,
      max: 1920,
    },
  },
  colors: {
    background: {
      primary: COLOR_LIGHT,
      secondary: COLOR_DARK,
    },
    border: {
      primary: COLOR_DARK,
      secondary: COLOR_LIGHT,
    },
    typography: {
      primary: COLOR_DARK,
      secondary: COLOR_LIGHT,
    },
  },
  sizing: {
    ratio: 1.4,
    unit: "1rem",
  },
  typography: {
    sans: '"Lato", Arial, Helvetica, sans-serif',
    serif: '"Lora", "Palatino Linotype", "Book Antiqua", Palatino, serif',
    special: '"Exo", Arial, Helvetica, sans-serif',
  },
};

export default defaultTheme;
