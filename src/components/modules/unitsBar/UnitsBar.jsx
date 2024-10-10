import { UNITS_NAMES } from "shared/constants";
import { Container } from "./UnitsBar.styled";
import Unit from "./atoms/unit/Unit";

const UnitsBar = () => {
  return (
    <Container>
      {UNITS_NAMES.map((unit) => {
        return <Unit key={unit} unitName={unit} />;
      })}
    </Container>
  );
};

export default UnitsBar;
