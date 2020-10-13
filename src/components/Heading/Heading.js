import React from "react";
import PropTypes from "prop-types";

import styles from "./Heading.module.css";

const levels = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

const Heading = ({ children, level = 1 }) => {
  const Component = levels[level] || levels[1];

  return <Component className={styles.Heading}>{children}</Component>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
