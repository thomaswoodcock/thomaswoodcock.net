import React from "react";
import { Link } from "react-router-dom";

import styles from "./NotFound.module.css";

const NotFound = () => (
  <div className={styles.NotFound}>
    <h1>404</h1>
    <h2>Page not found.</h2>
    <p>
      <Link to="/">Back to thomaswoodcock.net</Link>
    </p>
  </div>
);

export default NotFound;
