/** @jsxImportSource @emotion/core */
import React from "react";
import { keyframes } from "@emotion/core";

import Box from "../Box";

import { createStyles } from "../../styles";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const useStyles = createStyles({
  icon: {
    animation: `${spin} 1s infinite linear`,
    height: "50px",
    width: "50px",
  },
});

const Spinner = () => {
  const styles = useStyles();

  return (
    <Box role="progressbar" variant="centralized">
      <svg css={styles.icon} viewBox="0 0 100 100">
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
};

export default Spinner;
