import React from "react";
import { render, screen } from "@testing-library/react";

import Paragraph from "./Paragraph";

describe("<Paragraph />", () => {
  it("renders children", () => {
    // Arrange Act
    render(<Paragraph>Test Paragraph</Paragraph>);

    // Assert
    expect(screen.getByText("Test Paragraph")).toBeVisible();
  });
});
