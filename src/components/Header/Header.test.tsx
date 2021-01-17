import { render, screen } from "@testing-library/react";

import Header from "./Header";

describe("<Header />", () => {
  it("renders title and subtitle", () => {
    // Arrange Act
    render(<Header subtitle="Test Subtitle" title="Test Title" />);

    // Assert
    const banner = screen.getByRole("banner");

    expect(banner).toContainElement(
      screen.getByRole("heading", { name: "Test Title" })
    );

    expect(banner).toContainElement(screen.getByText("Test Subtitle"));
  });
});
