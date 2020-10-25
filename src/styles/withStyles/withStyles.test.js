/* eslint-disable react/prop-types */
import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "emotion-theming";

import defaultTheme from "../createTheme/defaultTheme";
import withStyles from "./withStyles";

describe("withStyles()", () => {
  const wrapper = ({ children }) => (
    <ThemeProvider theme={{ colors: { background: { primary: "red" } } }}>
      {children}
    </ThemeProvider>
  );

  it("injects styles using ThemeProvider", () => {
    // Arrange
    const Component = (props) => props.styles.backgroundColor;
    const ComponentWithStyles = withStyles({ backgroundColor: "black" })(
      Component
    );

    // Act
    render(<ComponentWithStyles />, { wrapper });

    // Assert
    expect(screen.getByText("black")).toBeInTheDocument();
  });

  it("injects styles using default theme", () => {
    // Arrange
    const Component = (props) => props.styles.backgroundColor;
    const ComponentWithStyles = withStyles({ backgroundColor: "black" })(
      Component
    );

    // Act
    render(<ComponentWithStyles />);

    // Assert
    expect(screen.getByText("black")).toBeInTheDocument();
  });

  it("passes theme into injected styles using ThemeProvider", () => {
    // Arrange
    const Component = (props) => props.styles.backgroundColor;
    const ComponentWithStyles = withStyles((theme) => ({
      backgroundColor: theme.colors.background.primary,
    }))(Component);

    // Act
    render(<ComponentWithStyles />, { wrapper });

    // Assert
    expect(screen.getByText("red")).toBeInTheDocument();
  });

  it("passes theme into injected styles using default theme", () => {
    // Arrange
    const Component = (props) => props.styles.backgroundColor;
    const ComponentWithStyles = withStyles((theme) => ({
      backgroundColor: theme.colors.background.primary,
    }))(Component);

    // Act
    render(<ComponentWithStyles />);

    // Assert
    expect(
      screen.getByText(defaultTheme.colors.background.primary)
    ).toBeInTheDocument();
  });
});
