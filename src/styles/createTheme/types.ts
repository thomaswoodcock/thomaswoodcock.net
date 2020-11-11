/** Represents the minimum and maximum pixel values encompassed by a page breakpoint. */
type ThemeBreakpointRange = {
  /** The minimum pixel value in the breakpoint range. */
  min: number;
  /** The maximum pixel value in the breakpoint range. */
  max: number;
};

/** Represents the tiers of colors used for a specific purpose within the theme. */
type ThemeColorTiers = {
  /** The primary color used for a specific purpose. */
  primary: string;
  /** The secondary color used for a specific purpose. */
  secondary: string;
};

/** Represents the minimum configuration that can be used to create a theme. */
export type ThemeBase = {
  /** Theme options that regard page breakpoints. */
  breakpoints: {
    /** The pixel range for the extra-small breakpoint. */
    xs: ThemeBreakpointRange;
    /** The pixel range for the small breakpoint. */
    sm: ThemeBreakpointRange;
    /** The pixel range for the medium breakpoint. */
    md: ThemeBreakpointRange;
    /** The pixel range for the large breakpoint. */
    lg: ThemeBreakpointRange;
  };

  /** Theme options that regard colors used within the page. */
  colors: {
    /** The colors used for page and element backgrounds. */
    background: ThemeColorTiers;
    /** The colors used for borders within the page. */
    border: ThemeColorTiers;
    /** The colors used for typography within the page. */
    typography: ThemeColorTiers;
  };

  /** Theme options that determine element sizing and spacing. */
  sizing: {
    /** The base ratio with which sizes are calculated. */
    ratio: number;
    /** The unit value used as a base when calculating sizes. */
    unit: string;
  };

  /** Theme options that regard typography used within the page. */
  typography: {
    /** The sans-serif font used within the page. */
    sans: string;
    /** The serif font used within the page. */
    serif: string;
    /** The special font used within the page. */
    special: string;
  };
};

/** Represents a theme that can be used to customize the page. */
export interface Theme extends ThemeBase {
  breakpoints: ThemeBase["breakpoints"] & {
    /** Generates a media query for the specified breakpoint and below. */
    down: (breakpoint: "xs" | "sm" | "md" | "lg") => string;
    /** Generates a media query for the specified breakpoint and above. */
    up: (breakpoint: "xs" | "sm" | "md" | "lg") => string;
  };

  sizing: ThemeBase["sizing"] & {
    getSize: {
      /** Calculates a size using the base ratio, unit, and given number. */
      (size: number): string;
      /** Calculates a size using the base ratio, unit, and numbers for top and bottom, and left and right. */
      (topBottom: number, leftRight: number): string;
      /** Calculates a size using the base ratio, unit, and numbers for top, left and right, and bottom. */
      (top: number, leftRight: number, bottom: number): string;
      /** Calculates a size using the base ratio, unit, and numbers for top, right, bottom and left. */
      (top: number, right: number, bottom: number, left: number): string;
    };
  };
}
