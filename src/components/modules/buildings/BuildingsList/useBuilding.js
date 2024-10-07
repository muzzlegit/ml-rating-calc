import useCalcStore from "store/store";

const useBuilding = (buildingName) => {
  const building = useCalcStore((state) => state.buildings?.[buildingName]);

  return { building };
};

export default useBuilding;
