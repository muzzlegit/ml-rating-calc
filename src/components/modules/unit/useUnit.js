import { useCallback } from "react";
import { getUnitData } from "shared/helpers";
import useCalcStore from "store/store";

const useUnit = (unitName) => {
  const unit = useCalcStore((state) => state.units?.[unitName]);
  const getUnit = useCalcStore((state) => state.getUnit);
  const increaseRating = useCalcStore((state) => state.increaseUnitsRating);
  const decreaseRating = useCalcStore((state) => state.decreaseUnitsRating);
  const changeUnit = useCalcStore((state) => state.changeUnit);

  const updateUnit = useCallback(
    (updatedFields) => {
      const currentUnit = getUnit(unitName);
      if (!currentUnit) return;
      const updatedUnit = { ...currentUnit, ...updatedFields };
      changeUnit(unitName, updatedUnit);
      const prevRating = currentUnit.rating * currentUnit.quantity;
      const newRating = updatedUnit.rating * updatedUnit.quantity;
      decreaseRating(prevRating);
      increaseRating(newRating);
    },
    [changeUnit, decreaseRating, getUnit, increaseRating, unitName]
  );

  const handleUnitQuantity = useCallback(
    (value) => {
      const quantity = Number(value);
      if (isNaN(quantity)) return 0;
      updateUnit({ quantity });
    },
    [updateUnit]
  );

  const handleUnitLevel = useCallback(
    (level) => {
      const unitData = getUnitData(unitName, level);
      if (!unitData) return;
      updateUnit({ level, rating: unitData.rating });
    },
    [unitName, updateUnit]
  );

  return { unit, handleUnitQuantity, handleUnitLevel };
};

export default useUnit;
