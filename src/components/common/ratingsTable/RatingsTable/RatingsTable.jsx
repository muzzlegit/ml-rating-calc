import useCalcStore from "store/store";

const RatingsTable = () => {
  const unitsRating = useCalcStore((state) => state.unitsRating);
  const resourcesRating = useCalcStore((state) => state.resourcesRating);
  const buildingsRating = useCalcStore((state) => state.buildingsRating);

  return (
    <div>
      <div>Рейтинг ресурсов: {resourcesRating.toLocaleString("en-US")}</div>
      <div>Рейтинг армии: {unitsRating.toLocaleString("en-US")}</div>
      <div>Рейтинг зданий: {buildingsRating.toLocaleString("en-US")}</div>
      <div>
        Общий рейтинг:
        {(resourcesRating + buildingsRating).toLocaleString("en-US")}
      </div>
      <div>
        РЕЙТИНГ:
        {(resourcesRating + unitsRating * 80 + buildingsRating).toLocaleString(
          "en-US"
        )}
      </div>
    </div>
  );
};

export default RatingsTable;
