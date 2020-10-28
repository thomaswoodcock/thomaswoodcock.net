/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Component } from "react";
import PropTypes from "prop-types";

import Box from "../Box";
import Button from "../Button";
import Heading from "../Heading";

import { createStyles, withStyles } from "../../styles";

const styles = createStyles((theme) => ({
  button: {
    marginTop: theme.sizing.getSize(1),
  },
  heading: {
    fontSize: theme.sizing.getSize(5),
  },
}));

class ErrorBoundary extends Component {
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
    return this.state.hasError ? (
      <Box variant="centralized">
        <Heading css={this.props.styles.heading} level={1}>
          Error
        </Heading>
        <Heading level={2}>Something went wrong.</Heading>
        <Button css={this.props.styles.button} onClick={this.reset}>
          Reload
        </Button>
      </Box>
    ) : (
      this.props.children
    );
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
  styles: PropTypes.shape({
    button: PropTypes.object,
    heading: PropTypes.object,
  }),
};

export default withStyles(styles)(ErrorBoundary);
