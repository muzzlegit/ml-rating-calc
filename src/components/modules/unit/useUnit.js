import { useCallback } from "react";
import { getUnitData } from "shared/helpers";
import useCalcStore from "store/store";

const useUnit = (unitName) => {
  const unit = useCalcStore((state) => state.units?.[unitName]);
  const changeUnit = useCalcStore((state) => state.changeUnit);

  const handleUnitQuantity = useCallback(
    (e) => {
      const { id, value } = e.currentTarget;
      const quantity = Number(value);
      if (isNaN(quantity)) return 0;
      changeUnit(id, { quantity });
    },
    [changeUnit]
  );

  const handleUnitLevel = useCallback(
    (e) => {
      const { id: name, value: level } = e.currentTarget;
      console.log(name);
      const unitData = getUnitData(name, level);
      if (!unitData) return null;
      console.log(unitData);
      changeUnit(name, { level, rating: unitData.rating });
    },
    [changeUnit]
  );

  return { unit, handleUnitQuantity, handleUnitLevel };
};

export default useUnit;
