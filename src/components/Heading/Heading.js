import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Heading.module.css";

const levels = {
  1: ["h1", styles.level1],
  2: ["h2", styles.level2],
  3: ["h3", styles.level3],
  4: ["h4", styles.level4],
  5: ["h5", styles.level5],
  6: ["h6", styles.level6],
};

const Heading = ({ children, className, level = 1 }) => {
  const [Component, levelClass] = levels[level] || levels[1];

  return (
    <Component className={clsx(levelClass, className)}>{children}</Component>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
