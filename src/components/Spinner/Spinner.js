import React from "react";

import styles from "./Spinner.module.css";

const Spinner = () => (
  <div className={styles.Spinner}>
    <svg viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="42" />
    </svg>
  </div>
);

export default Spinner;
