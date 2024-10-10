import PropTypes from "prop-types";
import { RootContainer } from "./RootLayout.styled";

const RootLayout = ({
  UnitsBar,
  RatingsTable,
  ResourcesBar,
  ServerSelector,
  BuildingsList,
}) => {
  return (
    <RootContainer>
      <RatingsTable />
      <ServerSelector />
      <UnitsBar />
      <ResourcesBar />
      <BuildingsList />
    </RootContainer>
  );
};

export default RootLayout;

RootLayout.propTypes = {
  RatingsTable: PropTypes.func,
  ServerSelector: PropTypes.func,
  UnitsBar: PropTypes.func,
  ResourcesBar: PropTypes.func,
  BuildingsList: PropTypes.func,
};
