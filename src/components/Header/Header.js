import React from "react";
import PropTypes from "prop-types";

import Container from "../Container";

import styles from "./Header.module.css";

const Header = ({ subtitle, title }) => (
  <header className={styles.Header}>
    <Container>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </Container>
  </header>
);

Header.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
