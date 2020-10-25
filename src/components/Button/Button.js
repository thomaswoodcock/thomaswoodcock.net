/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { createStyles } from "../../styles";

const useStyles = createStyles((theme) => ({
  backgroundColor: theme.colors.background.secondary,
  borderColor: theme.colors.border.primary,
  borderWidth: theme.sizing.getSize(-5),
  color: theme.colors.typography.secondary,
  cursor: "pointer",
  display: "inline-block",
  fontFamily: theme.typography.special,
  fontSize: "inherit",
  fontWeight: 700,
  outlineColor: theme.colors.border.primary,
  padding: `${theme.sizing.getSize(-2)} ${theme.sizing.getSize(1)}`,
}));

const Button = ({ children, onClick, ...props }) => {
  const styles = useStyles();

  return (
    <button css={styles} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default Button;
