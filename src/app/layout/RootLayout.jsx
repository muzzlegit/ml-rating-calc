import PropTypes from "prop-types";
import { RootContainer } from "./RootLayout.styled";

const RootLayout = ({
  UnitsBar,
  RatingsTable,
  ResourcesBar,
  BuildingsList,
}) => {
  return (
    <RootContainer>
      <RatingsTable />
      <UnitsBar />
      <ResourcesBar />
      <BuildingsList />
    </RootContainer>
  );
};

export default RootLayout;

RootLayout.propTypes = {
  RatingsTable: PropTypes.func,
  UnitsBar: PropTypes.func,
  ResourcesBar: PropTypes.func,
  BuildingsList: PropTypes.func,
};
