import PropTypes from "prop-types";
import { FlexCol, RootContainer } from "./RootLayout.styled";

const RootLayout = ({
  Stars,
  UnitsBar,
  RatingsTable,
  ResourcesBar,
  ServerSelector,
  BuildingsList,
}) => {
  return (
    <RootContainer>
      <BuildingsList />
      <FlexCol>
        <Stars />
        <RatingsTable />
        <ServerSelector />
        <UnitsBar />
        <ResourcesBar />
      </FlexCol>
    </RootContainer>
  );
};

export default RootLayout;

RootLayout.propTypes = {
  Stars: PropTypes.func,
  RatingsTable: PropTypes.func,
  ServerSelector: PropTypes.func,
  UnitsBar: PropTypes.func,
  ResourcesBar: PropTypes.func,
  BuildingsList: PropTypes.func,
};
