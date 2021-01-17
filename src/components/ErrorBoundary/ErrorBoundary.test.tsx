import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ErrorBoundary from "./ErrorBoundary";

describe("<ErrorBoundary />", () => {
  let initialError: any;

  beforeAll(() => {
    initialError = console.error;
  });

  afterEach(() => {
    console.error = initialError;
  });

  it("renders error message with reload button if error occurs", () => {
    // Arrange
    console.error = jest.fn();

    const ErrorComponent = jest
      .fn()
      .mockImplementation(() => "Test Child")
      .mockImplementationOnce(() => {
        throw new Error();
      });

    // Act Assert
    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>
    );

    expect(screen.getByRole("heading", { name: "Error" })).toBeVisible();

    userEvent.click(screen.getByRole("button", { name: /reload/i }));
    expect(screen.getByText("Test Child")).toBeVisible();
  });

  it("renders children if no error occurs", () => {
    // Arrange Act
    render(<ErrorBoundary>Test Child</ErrorBoundary>);

    // Assert
    expect(screen.getByText("Test Child")).toBeVisible();
  });
});
