import React from "react";
import PropTypes from "prop-types";

import styles from "./Container.module.css";

const Container = ({ children }) => (
  <div className={styles.Container}>
    <div>{children}</div>
  </div>
);

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
