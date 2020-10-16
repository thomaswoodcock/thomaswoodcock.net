import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import NavBar from "./NavBar";

describe("<NavBar />", () => {
  it("renders links when provided", () => {
    // Arrange
    const history = createMemoryHistory();

    // Act
    render(
      <Router history={history}>
        <NavBar links={[{ title: "Test Link", url: "/test" }]} />
      </Router>
    );

    // Assert
    const link = screen.getByRole("link", { name: "Test Link" });

    expect(screen.getByRole("navigation")).toContainElement(link);
    expect(link).toBeVisible();

    userEvent.click(link);
    expect(history.location.pathname).toBe("/test");
  });
});
