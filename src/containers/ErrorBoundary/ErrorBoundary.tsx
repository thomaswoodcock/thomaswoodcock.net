/** @jsxImportSource @emotion/react */
import { Component, ComponentType } from "react";

import ErrorState, {
  ErrorStateProps,
} from "../../components/ErrorState/ErrorState";

interface ErrorBoundaryProps {
  component?: ComponentType<ErrorStateProps>;
}

class ErrorBoundary extends Component<ErrorBoundaryProps> {
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
