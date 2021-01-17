import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

describe("<App />", () => {
  it("renders homepage by default", async () => {
    // Arrange
    const history = createMemoryHistory();

    // Act
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    expect(
      await screen.findByRole("heading", { name: "Thomas Woodcock" })
    ).toBeVisible();
  });

  it("renders 404 page when given invalid route", async () => {
    // Arrange
    const history = createMemoryHistory();
    history.push("/invalid/route");

    // Act
    render(
      <Router history={history}>
        <App />
      </Router>
    );

    // Assert
    expect(await screen.findByRole("heading", { name: "404" })).toBeVisible();
  });
});
