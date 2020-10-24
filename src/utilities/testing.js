import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "emotion-theming";
import { render } from "@testing-library/react";

import { createTheme } from "../themes";

const theme = createTheme();

const ProviderWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

ProviderWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

const customRender = (component, options) =>
  render(component, { wrapper: ProviderWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
