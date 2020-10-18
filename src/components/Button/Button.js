import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ ariaExpanded = false, children, onClick }) => (
  <button
    aria-expanded={ariaExpanded}
    className={styles.Button}
    onClick={onClick}
  >
    {children}
  </button>
);

Button.propTypes = {
  ariaExpanded: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
