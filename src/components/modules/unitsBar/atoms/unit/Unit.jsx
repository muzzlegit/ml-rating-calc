import { Select, TextInput } from "components/UI";
import { ImageComponent } from "components/common";
import PropTypes from "prop-types";
import { LEVELS_SELECT, UNITS_NAMES } from "shared/constants";
import useUnit from "../../useUnit";
import { Container, inputStyles } from "./Unit.styled";

const Unit = ({ unitName }) => {
  const { unit, handleUnitQuantity, handleUnitLevel } = useUnit(unitName);

  if (!unit) return null;

  const { id, name, quantity, level } = unit;

  return (
    <Container key={id}>
      <ImageComponent imageName={name} />
      <TextInput
        id={name}
        value={quantity}
        handleChange={handleUnitQuantity}
        styles={inputStyles}
      />
      <Select
        title="Уровень"
        options={LEVELS_SELECT}
        value={level}
        onChange={handleUnitLevel}
        width="40px"
      />
    </Container>
  );
};

export default Unit;

Unit.propTypes = {
  unitName: PropTypes.oneOf(UNITS_NAMES),
};
