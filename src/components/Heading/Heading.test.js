import { render, screen } from "@testing-library/react";

import Heading from "./Heading";

describe("<Heading />", () => {
  let initialError;

  beforeAll(() => {
    initialError = console.error;
  });

  afterEach(() => {
    console.error = initialError;
  });

  [
    [1, "H1"],
    [2, "H2"],
    [3, "H3"],
    [4, "H4"],
    [5, "H5"],
    [6, "H6"],
  ].forEach(([level, tag]) => {
    it(`renders ${tag} for level ${level}`, () => {
      // Arrange Act
      render(<Heading level={level}>Test Heading</Heading>);

      // Assert
      expect(
        screen.getByRole("heading", { name: "Test Heading" }).tagName
      ).toBe(tag);
    });
  });

  it("renders h1 for unspecified level", () => {
    // Arrange Act
    render(<Heading>Test Heading</Heading>);

    // Assert
    expect(screen.getByRole("heading", { name: "Test Heading" }).tagName).toBe(
      "H1"
    );
  });

  it("renders h1 for invalid level", () => {
    // Arrange
    console.error = jest.fn();

    // Act
    render(<Heading level={7}>Test Heading</Heading>);

    // Assert
    expect(screen.getByRole("heading", { name: "Test Heading" }).tagName).toBe(
      "H1"
    );
  });
});
