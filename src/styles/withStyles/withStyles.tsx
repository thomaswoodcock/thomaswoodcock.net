import React from "react";

import createStyles from "../createStyles";

/**
 * Creates a high-order component that can be used to pass given styles
 * into children.
 * @param styles An object or function that defines style options.
 */
const withStyles = (
  useStyles: ReturnType<typeof createStyles>
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
