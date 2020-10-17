import React from "react";
import { render, screen } from "@testing-library/react";

import Box from "./Box";

describe("<Box />", () => {
  it("renders children", () => {
    // Arrange Act
    render(<Box>Test Child</Box>);

    // Assert
    expect(screen.getByText("Test Child")).toBeVisible();
  });

  it("passes down classes", () => {
    // Arrange Act
    render(<Box className="test-class">Test Child</Box>);

    // Assert
    expect(screen.getByText("Test Child")).toHaveClass("test-class");
  });

  it("passes down role", () => {
    // Arrange Act
    render(<Box role="progressbar">Test Child</Box>);

    // Assert
    expect(screen.getByRole("progressbar")).toHaveTextContent("Test Child");
  });
});
