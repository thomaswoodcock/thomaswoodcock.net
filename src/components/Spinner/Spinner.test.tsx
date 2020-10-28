import React from "react";
import { render } from "@testing-library/react";

import Spinner from "./Spinner";

describe("<Spinner />", () => {
  it("matches snapshot", () => {
    // Arrange Act
    const { container } = render(<Spinner />);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      @keyframes animation-0 {
        0% {
          -webkit-transform: rotate(0deg);
          -ms-transform: rotate(0deg);
          transform: rotate(0deg);
        }

        100% {
          -webkit-transform: rotate(360deg);
          -ms-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      .emotion-1 {
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
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
      }

      .emotion-0 {
        -webkit-animation: animation-0 1s infinite linear;
        animation: animation-0 1s infinite linear;
        height: 50px;
        width: 50px;
      }

      <div
        class="emotion-1"
        role="progressbar"
      >
        <svg
          class="emotion-0"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            r="42"
            stroke="currentColor"
            stroke-dasharray="280"
            stroke-dashoffset="75"
            stroke-width="15"
          />
        </svg>
      </div>
    `);
  });
});
