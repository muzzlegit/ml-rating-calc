import useCalcStore from "store/store";

const useRocource = (resourceName) => {
  const resource = useCalcStore((state) => state.resources?.[resourceName]);
  const setResourceQuantity = useCalcStore(
    (state) => state.changeResourceQuantity
  );
  const increaceRating = useCalcStore((state) => state.increaseRating);
  const decreaseRating = useCalcStore((state) => state.decreaseRating);
  const getResource = useCalcStore((state) => state.getResource);

  const handleResourceQuantity = (value) => {
    const quantity = Number(value);
    if (isNaN(quantity)) return 0;
    const currentResource = getResource(resourceName);
    const currentRating =
      currentResource.quantity * currentResource.coefficient;
    const updatedRating = currentResource.coefficient * quantity;
    decreaseRating("resourcesRating", currentRating);
    increaceRating("resourcesRating", updatedRating);
    setResourceQuantity(resourceName, quantity);
  };

  return { resource, handleResourceQuantity };
};

export default useRocource;
