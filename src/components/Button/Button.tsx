/** @jsx jsx */
import { jsx } from "@emotion/core";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

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

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button = ({ children, ...props }: ButtonProps) => {
  const styles = useStyles();

  return (
    <button css={styles} {...props}>
      {children}
    </button>
  );
};

export default Button;
