import { render } from "@testing-library/react";

import Box from "./Box";

describe("<Box />", () => {
  it("matches snapshot", () => {
    // Arrange Act
    const { container } = render(<Box>Test Box</Box>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="css-sne8hi-Box"
      >
        Test Box
      </div>
    `);
  });

  it("matches centralized variant snapshot", () => {
    // Arrange Act
    const { container } = render(<Box variant="centralized">Test Box</Box>);

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
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        text-align: center;
      }

      <div
        class="emotion-0"
      >
        Test Box
      </div>
    `);
  });

  it("matches contained variant snapshot", () => {
    // Arrange Act
    const { container } = render(<Box variant="contained">Test Box</Box>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        margin-left: auto;
        margin-right: auto;
        max-width: 35rem;
        padding-left: calc(1rem * 1.4 * 1.4);
        padding-right: calc(1rem * 1.4 * 1.4);
      }

      <div
        class="emotion-0"
      >
        Test Box
      </div>
    `);
  });
});
