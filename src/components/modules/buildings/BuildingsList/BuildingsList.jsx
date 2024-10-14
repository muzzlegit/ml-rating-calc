import { getBuildingsNames } from "shared/helpers";
import { Container, ScrollBox } from "./BuildingsList.styled";
import Building from "./atoms/Building/Building";

const BuildingsList = () => {
  return (
    <Container>
      <ScrollBox>
        {getBuildingsNames().map((building) => (
          <Building key={building} buildingName={building} />
        ))}
      </ScrollBox>
    </Container>
  );
};

export default BuildingsList;
