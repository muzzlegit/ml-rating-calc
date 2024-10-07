import { TextInput } from "components/UI";
import { ImageComponent } from "components/common";
import PropTypes from "prop-types";
import { getBuildingsNames } from "shared/helpers";
import useBuilding from "../../useBuilding";
import { Container, FlexWrap, LevelWrap, Name } from "./Building.styled";

const Building = ({ buildingName }) => {
  const { building } = useBuilding(buildingName);
  if (!building) return null;

  return (
    <Container title={buildingName}>
      <ImageComponent imageName={buildingName} />
      <Name>{buildingName}</Name>
      {Object.entries(building).map(([level, buildingData]) => {
        if (!buildingData) return null;
        return (
          <FlexWrap key={buildingName + level}>
            <LevelWrap>
              {level === "8" ? (
                <ImageComponent imageName="perfect" />
              ) : (
                <div title="Уровень">{level}</div>
              )}
            </LevelWrap>
            <TextInput
              value={buildingData.quantity}
              handleChange={() => {
                console.log(level);
              }}
              styles={{ width: "40px" }}
            />
          </FlexWrap>
        );
      })}
    </Container>
  );
};

export default Building;

Building.propTypes = {
  buildingName: PropTypes.oneOf(getBuildingsNames()),
};
