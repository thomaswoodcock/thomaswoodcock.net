import React from "react";
import { Interpolation } from "@emotion/react";

import { Theme } from "../createTheme/types";

/**
 * Creates a high-order component that can be used to pass given styles
 * into children.
 * @param styles An object or function that defines style options.
 */
const withStyles = <T extends Partial<Interpolation<Theme>>>(
  useStyles: () => T
): ((component: React.ElementType) => React.ForwardRefExoticComponent<any>) => {
  return (component) => {
    const Component = component;

    const WithStyles = React.forwardRef(function WithStyles(props, ref) {
      const styles = useStyles();

      return <Component styles={styles} ref={ref} {...props} />;
    });

    return WithStyles;
  };
};

export default withStyles;
