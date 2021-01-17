/** @jsxImportSource @emotion/react */
import { DetailedHTMLProps, HTMLAttributes } from "react";

import { createStyles } from "../../styles";

type HeadingVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const levels: Record<number, HeadingVariant> = {
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

interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading = ({ children, level = 1, ...props }: HeadingProps) => {
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

export default Heading;
