import React from "react";

import styles from "./Spinner.module.css";

const Spinner = () => (
  <div className={styles.root} role="progressbar">
    <svg className={styles.icon} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        fill="none"
        r="42"
        stroke="currentColor"
        strokeDasharray="280"
        strokeDashoffset="75"
        strokeWidth="15"
      />
    </svg>
  </div>
);

export default Spinner;
