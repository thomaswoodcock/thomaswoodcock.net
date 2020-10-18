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

    const button = screen.getByRole("button", { name: "Test Button" });
    userEvent.click(button);

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(button).toHaveAttribute("aria-expanded", "false");
  });

  [true, false].forEach((expanded) => {
    it(`sets aria-expanded to ${expanded}`, () => {
      // Arrange Act
      render(
        <Button ariaExpanded={expanded} onClick={() => {}}>
          Test Button
        </Button>
      );

      // Assert
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-expanded",
        expanded.toString()
      );
    });
  });
});
