/** @jsxImportSource @emotion/react */
import { DetailedHTMLProps, HTMLAttributes } from "react";

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

interface BoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  variant?: "centralized" | "contained";
}

const Box = ({ children, variant, ...props }: BoxProps) => {
  const styles = useStyles();

  return (
    <div css={variant && styles[variant]} {...props}>
      {children}
    </div>
  );
};

export default Box;
