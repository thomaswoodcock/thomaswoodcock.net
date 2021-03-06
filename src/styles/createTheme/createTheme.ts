import { Theme } from "@emotion/react";

import { ThemeBase } from "./types";
import defaultTheme from "./defaultTheme";

const getSize = (theme: ThemeBase, args: number[]) =>
  args
    .slice(0, 3)
    .map((size) => {
      if (size === 0) {
        return theme.sizing.unit;
      }

      const operator = size > 0 ? "*" : "/";
      const operation = ` ${operator} ${theme.sizing.ratio}`;

      return `calc(${theme.sizing.unit}${operation.repeat(Math.abs(size))})`;
    })
    .join(" ");

/**
 * Creates a theme, used to customize the page, by combining provided theme
 * options and a base theme.
 * @param theme The theme options with which to create the theme.
 * @param baseTheme The base theme on which to build the new theme.
 * @returns A `Theme` that can be used to customize the page.
 */
const createTheme = (
  theme: Partial<ThemeBase> = {},
  baseTheme: ThemeBase = defaultTheme
): Theme => {
  const combinedTheme = {
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
      getSize: (...args: number[]) => getSize(combinedTheme, args),
    },
  };
};

export default createTheme;
