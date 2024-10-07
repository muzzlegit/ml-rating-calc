import { getBuildingsNames } from "shared/helpers";
import { Container } from "./BuildingsList.styled";
import Building from "./atoms/Building/Building";

const BuildingsList = () => {
  return (
    <Container>
      {getBuildingsNames().map((building) => (
        <Building key={building} buildingName={building} />
      ))}
    </Container>
  );
};

export default BuildingsList;
