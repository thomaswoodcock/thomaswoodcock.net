/* eslint-disable react/prop-types */
import React from "react";
import { renderHook } from "@testing-library/react-hooks";
import { ThemeProvider } from "@emotion/react";

import createStyles from "./createStyles";
import createTheme from "../createTheme";
import defaultTheme from "../createTheme/defaultTheme";

describe("createStyles()", () => {
  const theme = createTheme({
    colors: {
      ...defaultTheme.colors,
      background: { primary: "red", secondary: "white" },
    },
  });

  const wrapper: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  it("returns styles using ThemeProvider", () => {
    // Arrange
    const styles = { backgroundColor: "black" };
    const useStyles = createStyles(styles);

    // Act
    const { result } = renderHook(() => useStyles(), { wrapper });

    // Assert
    expect(result.current).toMatchObject(styles);
  });

  it("returns styles using default theme", () => {
    // Arrange
    const styles = { backgroundColor: "black" };
    const useStyles = createStyles(styles);

    // Act
    const { result } = renderHook(() => useStyles());

    // Assert
    expect(result.current).toMatchObject(styles);
  });

  it("passes theme into styles using ThemeProvider", () => {
    // Arrange
    const useStyles = createStyles((theme) => ({
      backgroundColor: theme.colors.background.primary,
    }));

    // Act
    const { result } = renderHook(() => useStyles(), { wrapper });

    // Assert
    expect(result.current).toMatchObject({ backgroundColor: "red" });
  });

  it("passes theme into styles using default theme", () => {
    // Arrange
    const useStyles = createStyles((theme) => ({
      backgroundColor: theme.colors.background.primary,
    }));

    // Act
    const { result } = renderHook(() => useStyles());

    // Assert
    expect(result.current).toMatchObject({
      backgroundColor: defaultTheme.colors.background.primary,
    });
  });
});
