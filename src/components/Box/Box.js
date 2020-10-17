import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import styles from "./Box.module.css";

const Box = ({ children, className, role }) => (
  <div className={clsx(styles.Box, className)} role={role}>
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  role: PropTypes.string,
};

export default Box;
