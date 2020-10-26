/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";

import { createStyles } from "../../styles";

const levels = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const useStyles = createStyles((theme) => ({
  h1: {
    fontSize: theme.sizing.getSize(4),
  },
  h2: {
    fontSize: theme.sizing.getSize(3),
  },
  h3: {
    fontSize: theme.sizing.getSize(2),
  },
  h4: {
    fontSize: theme.sizing.getSize(1),
  },
  h5: {
    fontSize: theme.sizing.getSize(0),
  },
  h6: {
    fontSize: theme.sizing.getSize(-1),
  },
  serif: {
    fontFamily: theme.typography.serif,
    fontWeight: 700,
    hyphens: "auto",
    lineHeight: `calc(0.8 * ${theme.sizing.ratio})`,
  },
}));

const Heading = ({ children, level = 1, ...props }) => {
  const styles = useStyles();

  const Component = levels[level] || levels[1];

  return (
    <Component
      css={[styles[Component], (level === 1 || level === 2) && styles.serif]}
      {...props}
    >
      {children}
    </Component>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
