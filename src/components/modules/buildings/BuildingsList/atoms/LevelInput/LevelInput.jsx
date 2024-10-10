import { theme } from "app/styles/theme/theme";
import { TextInput } from "components/UI";
import { AdvancedValue, ImageComponent } from "components/common";
import useAdvancedValue from "components/common/AdvancedValue/useAdvancedValue";
import PropTypes from "prop-types";
import { useState } from "react";
import { checkForNumber, getBuildingsNames } from "shared/helpers";
import { FlexWrap, LevelWrap } from "./LevelInput.styled";

const LevelInput = ({ building, level, handleQuantity }) => {
  const { values, handleValue, handleClearValues } = useAdvancedValue();

  const [totalValue, setTotalValue] = useState(0);

  const handleBuildingQuantity = (value) => {
    const quantity = checkForNumber(value);
    handleQuantity(building, level, quantity);
    setTotalValue(quantity);
    handleClearValues();
  };

  const handleAdvancedValue = (value, valueKey) => {
    const quantity = checkForNumber(value);
    handleValue(quantity, valueKey);
    const totalQuantity = Object.entries(values).reduce((acc, [key, value]) => {
      return (acc += key === valueKey ? quantity : value);
    }, 0);
    handleQuantity(building, level, totalQuantity);
    setTotalValue(totalQuantity);
  };

  return (
    <FlexWrap>
      <LevelWrap isActive={totalValue}>
        {level === "8" ? (
          <ImageComponent imageName="perfect" />
        ) : (
          <div title="Уровень">{level}</div>
        )}
      </LevelWrap>
      <TextInput
        value={totalValue}
        handleChange={handleBuildingQuantity}
        styles={{
          width: "40px",
          padding: "0 4px",
          color: theme.colors?.secondary[100],
          backgroundColor: `${
            totalValue ? theme.colors?.orange[60] : theme.colors?.text[100]
          }`,
        }}
      />
      <AdvancedValue values={values} handleValue={handleAdvancedValue} />
    </FlexWrap>
  );
};

export default LevelInput;

LevelInput.propTypes = {
  building: PropTypes.oneOf(getBuildingsNames()),
  level: PropTypes.oneOf(["1", "2", "3", "4", "5", "6", "7", "8"]),
  handleQuantity: PropTypes.func,
};
