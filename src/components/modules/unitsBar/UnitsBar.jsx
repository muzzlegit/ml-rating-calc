import { Fragment } from "react";
import { UNITS_NAMES } from "shared/constants";
import { Container } from "./UnitsBar.styled";
import Unit from "./atoms/unit/Unit";

const UnitsBar = () => {
  return (
    <Container>
      {UNITS_NAMES.map((unit) => {
        return (
          <Fragment key={unit}>
            <Unit unitName={unit} />
          </Fragment>
        );
      })}
    </Container>
  );
};

export default UnitsBar;
