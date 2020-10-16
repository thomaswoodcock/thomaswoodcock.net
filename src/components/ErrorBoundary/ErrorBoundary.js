import React from "react";
import PropTypes from "prop-types";

import Heading from "../Heading";

import styles from "./ErrorBoundary.module.css";

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className={styles.ErrorBoundary}>
          <Heading level={1}>Error</Heading>
          <Heading level={2}>Something went wrong.</Heading>
        </div>
      );
    }

    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ErrorBoundary;
