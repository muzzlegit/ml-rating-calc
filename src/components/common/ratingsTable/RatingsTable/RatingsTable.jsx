import useCalcStore from "store/store";

const RatingsTable = () => {
  const unitsRating = useCalcStore((state) => state.unitsRating);
  const resourcesRating = useCalcStore((state) => state.resourcesRating);

  return (
    <div>
      <div>Рейтинг ресурсов: {resourcesRating.toLocaleString("en-US")}</div>
      <div>Рейтинг армии: {unitsRating.toLocaleString("en-US")}</div>
    </div>
  );
};

export default RatingsTable;
