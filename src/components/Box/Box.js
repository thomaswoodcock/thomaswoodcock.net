/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { createStyles } from "../../styles";

const useStyles = createStyles((theme) => ({
  centralized: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    textAlign: "center",
  },
  contained: {
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "35rem",
    paddingLeft: theme.sizing.getSize(2),
    paddingRight: theme.sizing.getSize(2),
  },
}));

const Box = ({ children, variant, ...props }) => {
  const styles = useStyles();

  return (
    <div css={variant && styles[variant]} {...props}>
      {children}
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["centralized", "contained"]),
};

export default Box;
