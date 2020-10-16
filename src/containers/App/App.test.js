import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import App from "./App";

describe("<App />", () => {
  it("displays 404 page when given invalid route", async () => {
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
