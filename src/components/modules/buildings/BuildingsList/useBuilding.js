import { useCallback } from "react";
import useCalcStore from "store/store";

const useBuilding = (buildingName) => {
  const building = useCalcStore((state) => state.buildings?.[buildingName]);
  const setBuildingQuantity = useCalcStore(
    (state) => state.changeBuildingQuantity
  );
  const getBuilding = useCalcStore((state) => state.getBuilding);
  const increaseRating = useCalcStore((state) => state.increaseRating);
  const decreaseRating = useCalcStore((state) => state.decreaseRating);

  const handleBuildingQuantity = useCallback(
    (buildingName, level, quantity) => {
      const currentBuilding = getBuilding(buildingName, level);
      if (!currentBuilding) return;
      decreaseRating(
        "buildingsRating",
        currentBuilding.rating * currentBuilding.quantity
      );
      increaseRating("buildingsRating", currentBuilding.rating * quantity);
      setBuildingQuantity(buildingName, level, quantity);
    },
    [decreaseRating, getBuilding, increaseRating, setBuildingQuantity]
  );

  return { building, handleBuildingQuantity };
};

export default useBuilding;
