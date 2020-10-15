import React from "react";
import PropTypes from "prop-types";

import styles from "./Paragraph.module.css";

const Paragraph = ({ children }) => (
  <p className={styles.Paragraph}>{children}</p>
);

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Paragraph;
