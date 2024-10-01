import PropTypes from "prop-types";
import { RootContainer } from "./RootLayout.styled";

const RootLayout = ({ children }) => {
  return <RootContainer>{children}</RootContainer>;
};

export default RootLayout;

RootLayout.propTypes = {
  children: PropTypes.node,
};
