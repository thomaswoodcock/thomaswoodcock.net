import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../utilities/testing";

import Button from "./Button";

describe("<Button />", () => {
  it("matches snapshot", () => {
    // Arrange Act
    const { container } = render(
      <Button onClick={() => {}}>Test Button</Button>
    );

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        background-color: #252525;
        border-color: #252525;
        border-width: calc(1rem / 1.4 / 1.4 / 1.4 / 1.4 / 1.4);
        color: #F5F5F5;
        cursor: pointer;
        display: inline-block;
        font-family: "Exo",Arial,Helvetica,sans-serif;
        font-size: inherit;
        font-weight: 700;
        outline-color: #252525;
        padding: calc(1rem / 1.4 / 1.4) calc(1rem * 1.4);
      }

      <button
        class="emotion-0"
      >
        Test Button
      </button>
    `);
  });

  it("calls onClick on click", () => {
    // Arrange
    const onClick = jest.fn();

    // Act
    render(<Button onClick={onClick}>Test Button</Button>);
    userEvent.click(screen.getByRole("button", { name: "Test Button" }));

    // Assert
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
