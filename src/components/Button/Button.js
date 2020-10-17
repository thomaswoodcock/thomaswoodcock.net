import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.css";

const Button = ({ children, onClick }) => (
  <button className={styles.Button} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
