import React from "react";
import PropTypes from "prop-types";

import Box from "../Box";
import Button from "../Button";
import Heading from "../Heading";

import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  reset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box className={styles.ErrorBoundary}>
          <Heading level={1}>Error</Heading>
          <Heading level={2}>Something went wrong.</Heading>
          <Button onClick={this.reset}>Reload</Button>
        </Box>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
