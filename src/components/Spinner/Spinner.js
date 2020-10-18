import React from "react";

import Box from "../Box";

import styles from "./Spinner.module.css";

const Spinner = () => (
  <Box className={styles.Spinner} role="progressbar">
    <svg viewBox="0 0 100 100">
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
  </Box>
);

export default Spinner;
