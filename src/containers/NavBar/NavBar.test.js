import React from "react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { fireEvent, render, screen } from "../../utilities/testing";

import NavBar from "./NavBar";

describe("<NavBar />", () => {
  let innerWidth;

  beforeAll(() => {
    ({ innerWidth } = window);
  });

  afterEach(() => {
    window.innerWidth = innerWidth;
  });

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

  it("renders expandable menu at small resolution", () => {
    // Arrange
    const history = createMemoryHistory();

    window.innerWidth = 600;
    fireEvent(window, new Event("resize"));

    // Act Assert
    render(
      <Router history={history}>
        <NavBar links={[{ title: "Test Link", url: "/test" }]} />
      </Router>
    );

    const button = screen.getByRole("button", { name: /menu/i });
    expect(button).toBeVisible();
    expect(button).toHaveAttribute("aria-expanded", "false");

    userEvent.click(button);
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
