import React from "react";
import { render, screen } from "@testing-library/react";

import Container from "./Container";

describe("<Container />", () => {
  it("renders children", () => {
    // Arrange Act
    render(<Container>Test Container</Container>);

    // Assert
    expect(screen.getByText("Test Container")).toBeVisible();
  });
});
