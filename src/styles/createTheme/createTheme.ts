import { Theme, ThemeBase } from "./types";

import defaultTheme from "./defaultTheme";

const getSize = (theme: ThemeBase, size: number) => {
  if (size === 0) {
    return theme.sizing.unit;
  }

  const operator = size > 0 ? "*" : "/";
  const operation = ` ${operator} ${theme.sizing.ratio}`;

  return `calc(${theme.sizing.unit}${operation.repeat(Math.abs(size))})`;
};

/**
 * Creates a theme, used to customize the page, by combining provided theme
 * options and a base theme.
 * @param theme The theme options with which to create the theme.
 * @param baseTheme The base theme on which to build the new theme.
 */
const createTheme: (
  theme?: Partial<ThemeBase>,
  baseTheme?: ThemeBase
) => Theme = (theme = {}, baseTheme = defaultTheme) => {
  const combinedTheme: ThemeBase = {
    ...baseTheme,
    ...theme,
  };

  return {
    ...combinedTheme,
    breakpoints: {
      ...combinedTheme.breakpoints,
      down: (breakpoint) =>
        `@media (max-width: ${combinedTheme.breakpoints[breakpoint].max}px)`,
      up: (breakpoint) =>
        `@media (min-width: ${combinedTheme.breakpoints[breakpoint].min}px)`,
    },
    sizing: {
      ...combinedTheme.sizing,
      getSize: (size) => getSize(combinedTheme, size),
    },
  };
};

export default createTheme;
