import { ThemeProvider } from "@emotion/react";
import PropTypes from "prop-types";
import { theme } from "./theme.js";

const ThemeProviderComponent = ({ children }) => {
  console.log(theme);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;

ThemeProviderComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
