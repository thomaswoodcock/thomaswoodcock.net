import React from "react";
import { render, screen } from "@testing-library/react";

import ErrorBoundary from "./ErrorBoundary";

describe("<ErrorBoundary />", () => {
  it("renders error message if error occurs", () => {
    // Arrange
    const ErrorComponent = () => {
      throw new Error();
    };

    // Act
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    // Assert
    expect(screen.getByRole("heading", { name: "Error" })).toBeVisible();
  });

  it("renders children if no error occurs", () => {
    // Arrange Act
    render(<ErrorBoundary>Test Child</ErrorBoundary>);

    // Assert
    expect(screen.getByText("Test Child")).toBeVisible();
  });
});
