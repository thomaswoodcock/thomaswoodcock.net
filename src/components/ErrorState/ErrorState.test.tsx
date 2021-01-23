import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ErrorState from "./ErrorState";

describe("<ErrorState />", () => {
  it("matches snapshot", () => {
    // Arrange Act
    const { container } = render(<ErrorState />);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        height: 100%;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        text-align: center;
      }

      .emotion-1 {
        font-size: calc(1rem * 1.4 * 1.4 * 1.4 * 1.4);
        font-family: "Lora","Palatino Linotype","Book Antiqua",Palatino,serif;
        font-weight: 700;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        line-height: calc(0.8 * 1.4);
        font-size: calc(1rem * 1.4 * 1.4 * 1.4 * 1.4 * 1.4);
      }

      .emotion-2 {
        font-size: calc(1rem * 1.4 * 1.4 * 1.4);
        font-family: "Lora","Palatino Linotype","Book Antiqua",Palatino,serif;
        font-weight: 700;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        line-height: calc(0.8 * 1.4);
      }

      .emotion-3 {
        background-color: #252525;
        border-color: #252525;
        border-width: calc(1rem / 1.4 / 1.4 / 1.4 / 1.4 / 1.4);
        color: #F5F5F5;
        cursor: pointer;
        display: inline-block;
        font-family: "Exo",Arial,Helvetica,sans-serif;
        font-size: inherit;
        font-weight: 700;
        outline-color: #252525;
        padding: calc(1rem / 1.4 / 1.4) calc(1rem * 1.4);
        margin-top: calc(1rem * 1.4);
      }

      <div
        class="emotion-0"
      >
        <h1
          class="emotion-1"
        >
          Error
        </h1>
        <h2
          class="emotion-2"
        >
          Something went wrong.
        </h2>
        <button
          class="emotion-3"
        >
          Reload
        </button>
      </div>
    `);
  });

  it("calls resetError on click", () => {
    // Arrange
    const resetError = jest.fn();
    render(<ErrorState resetError={resetError} />);

    // Act
    userEvent.click(screen.getByRole("button", { name: /reload/i }));

    // Assert
    expect(resetError).toHaveBeenCalledTimes(1);
  });
});
