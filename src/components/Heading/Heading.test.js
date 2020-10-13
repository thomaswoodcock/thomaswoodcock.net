import React from "react";
import { render, screen } from "@testing-library/react";

import Heading from "./Heading";

describe("<Heading />", () => {
  const allowedLevels = {
    1: "h1",
    2: "h2",
    3: "h3",
    4: "h4",
    5: "h5",
    6: "h6",
  };

  Object.keys(allowedLevels).forEach((key) => {
    it(`renders ${allowedLevels[key]} for level ${key}`, () => {
      // Arrange Act
      render(<Heading level={+key}>Test Heading</Heading>);

      // Assert
      expect(
        screen.getByRole("heading", { name: /test heading/i })
      ).toContainHTML(
        `<${allowedLevels[key]} class="Heading">Test Heading</${allowedLevels[key]}>`
      );
    });
  });

  it("renders h1 for invalid level", () => {
    // Arrange Act
    render(<Heading level={7}>Test Heading</Heading>);

    // Assert
    expect(
      screen.getByRole("heading", { name: /test heading/i })
    ).toContainHTML('<h1 class="Heading">Test Heading</h1>');
  });
});
