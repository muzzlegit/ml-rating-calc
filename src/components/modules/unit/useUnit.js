import { useCallback } from "react";
import { getUnitData } from "shared/helpers";
import useCalcStore from "store/store";

const useUnit = (unitName) => {
  const unit = useCalcStore((state) => state.units?.[unitName]);
  const changeUnit = useCalcStore((state) => state.changeUnit);

  const handleUnitQuantity = useCallback(
    (value) => {
      const quantity = Number(value);
      if (isNaN(quantity)) return 0;
      changeUnit(unitName, { quantity });
    },
    [changeUnit, unitName]
  );

  const handleUnitLevel = useCallback(
    (level) => {
      const unitData = getUnitData(unitName, level);
      if (!unitData) return null;
      console.log(unitData);
      changeUnit(unitName, { level, rating: unitData.rating });
    },
    [changeUnit, unitName]
  );

  return { unit, handleUnitQuantity, handleUnitLevel };
};

export default useUnit;
