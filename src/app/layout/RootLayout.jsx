import PropTypes from "prop-types";
import { RootContainer } from "./RootLayout.styled";

const RootLayout = ({ UnitsBar }) => {
  return (
    <RootContainer>
      <UnitsBar />
    </RootContainer>
  );
};

export default RootLayout;

RootLayout.propTypes = {
  UnitsBar: PropTypes.func,
};
