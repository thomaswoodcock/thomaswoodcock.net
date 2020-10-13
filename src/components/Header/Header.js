import React from "react";
import PropTypes from "prop-types";

import Container from "../Container";
import Heading from "../Heading";

import styles from "./Header.module.css";

const Header = ({ subtitle, title }) => (
  <header className={styles.Header}>
    <Container>
      <Heading level={1}>{title}</Heading>
      {subtitle && <p>{subtitle}</p>}
    </Container>
  </header>
);

Header.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
