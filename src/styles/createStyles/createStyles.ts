import { useMemo } from "react";
import { Interpolation, Theme, useTheme } from "@emotion/react";

import createTheme from "../createTheme";

/**
 * Creates styles used for customizing a component.
 * @param style An object or function that defines style options.
 * @returns A `useStyles` React hook used to access the styles
 * from within a component.
 */
const createStyles = <T extends Partial<Interpolation<Theme>>>(
  style: T | ((theme: Theme) => T)
): (() => T) => {
  const useStyles = () => {
    const emotionTheme = useTheme();

    const styles = useMemo(() => {
      if (typeof style === "function") {
        const theme =
          (Object.keys(emotionTheme).length === 0 && createTheme()) ||
          emotionTheme;

        return style(theme);
      }

      return style;
    }, [emotionTheme]);

    return styles;
  };

  return useStyles;
};

export default createStyles;
