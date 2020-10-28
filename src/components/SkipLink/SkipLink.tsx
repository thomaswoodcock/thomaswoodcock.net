/** @jsx jsx */
import { jsx } from "@emotion/core";
import { HashLink } from "react-router-hash-link";

import { createStyles } from "../../styles";

const useStyles = createStyles((theme) => ({
  backgroundColor: theme.colors.background.secondary,
  color: theme.colors.typography.secondary,
  display: "inline-block",
  padding: theme.sizing.getSize(-1),
  position: "absolute",
  top: "-10rem",
  "&:focus": {
    outline: "none",
    top: 0,
    zIndex: 1,
  },
}));

const SkipLink = () => {
  const styles = useStyles();

  return (
    <HashLink css={styles} to="#main">
      Skip to content
    </HashLink>
  );
};

export default SkipLink;
