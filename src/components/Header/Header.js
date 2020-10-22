import React from "react";
import PropTypes from "prop-types";

import Heading from "../Heading";

import styles from "./Header.module.css";

const Header = ({ subtitle, title }) => (
  <header className={styles.root}>
    <div className={styles.container}>
      <Heading level={1}>{title}</Heading>
      {subtitle && <p>{subtitle}</p>}
    </div>
  </header>
);

Header.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
