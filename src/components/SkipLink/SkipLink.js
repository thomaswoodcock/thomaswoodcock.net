import React from "react";
import { HashLink } from "react-router-hash-link";

import styles from "./SkipLink.module.css";

const SkipLink = () => (
  <HashLink className={styles.root} to="#main">
    Skip to content
  </HashLink>
);

export default SkipLink;
