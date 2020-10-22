import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading";

import styles from "./NotFound.module.css";

const NotFound = () => (
  <div className={styles.root}>
    <Heading level={1}>404</Heading>
    <Heading level={2}>Page not found.</Heading>
    <p className={styles.link}>
      <Link to="/">Back to thomaswoodcock.net</Link>
    </p>
  </div>
);

export default NotFound;
