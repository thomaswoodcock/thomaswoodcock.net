import { render } from "@testing-library/react";

import Heading from "./Heading";

describe("<Heading />", () => {
  it("matches level 1 snapshot", () => {
    // Arrange Act
    const { container } = render(<Heading level={1}>Test Heading</Heading>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: calc(1rem * 1.4 * 1.4 * 1.4 * 1.4);
        font-family: "Lora","Palatino Linotype","Book Antiqua",Palatino,serif;
        font-weight: 700;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        line-height: calc(0.8 * 1.4);
      }

      <h1
        class="emotion-0"
      >
        Test Heading
      </h1>
    `);
  });

  it("matches level 2 snapshot", () => {
    // Arrange Act
    const { container } = render(<Heading level={2}>Test Heading</Heading>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: calc(1rem * 1.4 * 1.4 * 1.4);
        font-family: "Lora","Palatino Linotype","Book Antiqua",Palatino,serif;
        font-weight: 700;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        line-height: calc(0.8 * 1.4);
      }

      <h2
        class="emotion-0"
      >
        Test Heading
      </h2>
    `);
  });

  it("matches level 3 snapshot", () => {
    // Arrange Act
    const { container } = render(<Heading level={3}>Test Heading</Heading>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: calc(1rem * 1.4 * 1.4);
      }

      <h3
        class="emotion-0"
      >
        Test Heading
      </h3>
    `);
  });

  it("matches level 4 snapshot", () => {
    // Arrange Act
    const { container } = render(<Heading level={4}>Test Heading</Heading>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: calc(1rem * 1.4);
      }

      <h4
        class="emotion-0"
      >
        Test Heading
      </h4>
    `);
  });

  it("matches level 5 snapshot", () => {
    // Arrange Act
    const { container } = render(<Heading level={5}>Test Heading</Heading>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: 1rem;
      }

      <h5
        class="emotion-0"
      >
        Test Heading
      </h5>
    `);
  });

  it("matches level 6 snapshot", () => {
    // Arrange Act
    const { container } = render(<Heading level={6}>Test Heading</Heading>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: calc(1rem / 1.4);
      }

      <h6
        class="emotion-0"
      >
        Test Heading
      </h6>
    `);
  });

  it("matches unspecific level snapshot", () => {
    // Arrange Act
    const { container } = render(<Heading>Test Heading</Heading>);

    // Assert
    expect(container.firstChild).toMatchInlineSnapshot(`
      .emotion-0 {
        font-size: calc(1rem * 1.4 * 1.4 * 1.4 * 1.4);
        font-family: "Lora","Palatino Linotype","Book Antiqua",Palatino,serif;
        font-weight: 700;
        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
        line-height: calc(0.8 * 1.4);
      }

      <h1
        class="emotion-0"
      >
        Test Heading
      </h1>
    `);
  });
});
