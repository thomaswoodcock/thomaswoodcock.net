import { useMemo } from "react";
import { useTheme } from "emotion-theming";

import createTheme from "../createTheme";

const createStyles = (style) => () => {
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

export default createStyles;
