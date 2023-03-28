import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("<Footer />", () => {
  it("matches snapshot", () => {
    // Arrange Act
    const { container } = render(<Footer />);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        padding: calc(1rem * 1.4 * 1.4 * 1.4);
        text-align: center;
      }

      .emotion-1 {
        margin-left: auto;
        margin-right: auto;
        max-width: 35rem;
        padding-left: calc(1rem * 1.4 * 1.4);
        padding-right: calc(1rem * 1.4 * 1.4);
      }

      <footer
        class="emotion-0"
      >
        <div
          class="emotion-1"
        >
          <p>
            <small>
              ©
               
              <a
                href="https://github.com/thomaswoodcock"
              >
                Thomas Woodcock
              </a>
               2023
            </small>
          </p>
        </div>
      </footer>
    `);
  });
});
