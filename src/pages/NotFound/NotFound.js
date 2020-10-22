import React from "react";
import { Link } from "react-router-dom";

import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";

import styles from "./NotFound.module.css";

const NotFound = () => (
  <div className={styles.root}>
    <Heading level={1}>404</Heading>
    <Heading level={2}>Page not found.</Heading>
    <Paragraph>
      <Link to="/">Back to thomaswoodcock.net</Link>
    </Paragraph>
  </div>
);

export default NotFound;
