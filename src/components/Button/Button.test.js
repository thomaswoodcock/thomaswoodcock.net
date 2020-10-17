import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./Button";

describe("<Button />", () => {
  it("renders button and calls onClick when clicked", () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    render(<Button onClick={onClick}>Test Button</Button>);

    userEvent.click(screen.getByRole("button", { name: "Test Button" }));

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
