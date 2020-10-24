/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

const Button = ({ children, onClick, ...props }) => (
  <button
    css={(theme) => ({
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
    })}
    onClick={onClick}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

export default Button;
