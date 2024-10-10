import { ImageComponent } from "components/common";
import PropTypes from "prop-types";
import { getBuildingsNames } from "shared/helpers";
import useBuilding from "../../useBuilding";
import LevelInput from "../LevelInput/LevelInput";
import { Container, FlexCenterWrap, Head, Name } from "./Building.styled";

const Building = ({ buildingName }) => {
  const { building, handleBuildingQuantity } = useBuilding(buildingName);
  if (!building) return null;

  return (
    <Container title={buildingName}>
      <Head>
        <ImageComponent imageName={buildingName} />
        <Name>{buildingName.replaceAll(" ", "\n")}</Name>
      </Head>
      <FlexCenterWrap>
        {Object.entries(building).map(([level, buildingData]) => {
          if (!buildingData) return null;
          return (
            <LevelInput
              key={level + buildingData.rating}
              building={buildingName}
              level={level}
              handleQuantity={handleBuildingQuantity}
            />
          );
        })}
      </FlexCenterWrap>
    </Container>
  );
};

export default Building;

Building.propTypes = {
  buildingName: PropTypes.oneOf(getBuildingsNames()),
};
