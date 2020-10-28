/** @jsx jsx */
import { jsx } from "@emotion/core";

import Box from "../Box";
import Heading from "../Heading";

import { createStyles } from "../../styles";

const useStyles = createStyles((theme) => ({
  heading: {
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.sizing.getSize(3),
    },
  },
  root: {
    backgroundColor: theme.colors.background.secondary,
    borderColor: theme.colors.border.secondary,
    color: theme.colors.typography.secondary,
    marginBottom: theme.sizing.getSize(3),
    outlineColor: theme.colors.border.secondary,
    paddingBottom: theme.sizing.getSize(1),
    paddingTop: theme.sizing.getSize(1),
  },
  subtitle: {
    marginTop: theme.sizing.getSize(-3),
  },
}));

interface HeaderProps {
  subtitle?: string;
  title: string;
}

const Header = ({ subtitle, title }: HeaderProps) => {
  const styles = useStyles();

  return (
    <header css={styles.root}>
      <Box variant="contained">
        <Heading css={styles.heading} level={1}>
          {title}
        </Heading>
        {subtitle && <p css={styles.subtitle}>{subtitle}</p>}
      </Box>
    </header>
  );
};

export default Header;
