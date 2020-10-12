import React from "react";

import Container from "../Container";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.Footer}>
    <Container>
      <p>
        <small>
          &copy; <a href="https://github.com/thomaswoodcock">Thomas Woodcock</a>{" "}
          2020
        </small>
      </p>
    </Container>
  </footer>
);

export default Footer;
