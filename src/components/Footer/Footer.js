import React from "react";

import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.Footer}>
    <p>
      <small>
        &copy; <a href="https://github.com/thomaswoodcock">Thomas Woodcock</a>{" "}
        2020
      </small>
    </p>
  </footer>
);

export default Footer;
