/** @jsxImportSource @emotion/react */
import { Component, ComponentType } from "react";

import ErrorState, { ErrorStateProps } from "../../components/ErrorState";

interface ErrorBoundaryProps {
  component?: ComponentType<ErrorStateProps>;
}

export type ErrorBoundaryState = {
  error: Partial<Error> | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state = {
    error: null,
  };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  resetError = () => {
    this.setState({ error: null });
  };

  render() {
    const Component = this.props.component || ErrorState;

    return this.state.error ? (
      <Component error={this.state.error} resetError={this.resetError} />
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
