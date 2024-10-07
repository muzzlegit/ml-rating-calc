import PropTypes from "prop-types";
import { RootContainer } from "./RootLayout.styled";

const RootLayout = ({ UnitsBar, RatingsTable }) => {
  return (
    <RootContainer>
      <RatingsTable />
      <UnitsBar />
    </RootContainer>
  );
};

export default RootLayout;

RootLayout.propTypes = {
  RatingsTable: PropTypes.func,
  UnitsBar: PropTypes.func,
};
