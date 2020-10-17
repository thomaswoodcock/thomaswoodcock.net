import React from "react";
import { Link } from "react-router-dom";

import Box from "../../components/Box";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

import styles from "./NotFound.module.css";

const NotFound = () => (
  <Box className={styles.NotFound}>
    <Heading level={1}>404</Heading>
    <Heading level={2}>Page not found.</Heading>
    <Paragraph>
      <Link to="/">Back to thomaswoodcock.net</Link>
    </Paragraph>
  </Box>
);

export default NotFound;
