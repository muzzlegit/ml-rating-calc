import PropTypes from "prop-types";
import { RootContainer } from "./RootLayout.styled";

const RootLayout = ({ UnitsBar, RatingsTable, ResourcesBar }) => {
  return (
    <RootContainer>
      <RatingsTable />
      <UnitsBar />
      <ResourcesBar />
    </RootContainer>
  );
};

export default RootLayout;

RootLayout.propTypes = {
  RatingsTable: PropTypes.func,
  UnitsBar: PropTypes.func,
  ResourcesBar: PropTypes.func,
};
