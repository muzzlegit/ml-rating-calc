import useCalcStore from "store/store";

const RatingsTable = () => {
  const unitsRating = useCalcStore((state) => state.unitsRating);
  return (
    <div>
      <div>Рейтинг армии: {unitsRating.toLocaleString("en-US")}</div>
    </div>
  );
};

export default RatingsTable;
