import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import SkipLink from "./SkipLink";

describe("<SkipLink />", () => {
  it("matches snapshot", () => {
    // Arrange
    const history = createMemoryHistory();

    // Act
    const { container } = render(
      <Router history={history}>
        <SkipLink />
      </Router>
    );

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        background-color: #252525;
        color: #F5F5F5;
        display: inline-block;
        padding: calc(1rem / 1.4);
        position: absolute;
        top: -10rem;
      }

      .emotion-0:focus {
        outline: none;
        top: 0;
        z-index: 1;
      }

      <a
        class="emotion-0"
        href="/#main"
      >
        Skip to content
      </a>
    `);
  });

  it("navigates to anchor on click", () => {
    // Arrange
    const history = createMemoryHistory();

    // Act
    render(
      <Router history={history}>
        <SkipLink />
      </Router>
    );

    userEvent.click(screen.getByRole("link", { name: /skip to content/i }));

    // Assert
    expect(history.location.pathname).toBe("/");
    expect(history.location.hash).toBe("#main");
  });
});
