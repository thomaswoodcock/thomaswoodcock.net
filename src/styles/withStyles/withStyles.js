import React from "react";

import createStyles from "../createStyles";

const withStyles = (styles) => {
  const useStyles = createStyles(styles);

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
