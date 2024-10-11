import { useEffect, useState } from "react";
import { getRatingData, getServerCoefficient } from "shared/helpers";
import useCalcStore from "store/store";
import {
  CommonRating,
  Container,
  FlexWrap,
  Label,
  Rank,
  Rating,
} from "./RatingsTable.styled";

const RatingsTable = () => {
  const unitsRating = useCalcStore((state) => state.unitsRating);
  const resourcesRating = useCalcStore((state) => state.resourcesRating);
  const buildingsRating = useCalcStore((state) => state.buildingsRating);
  const setStars = useCalcStore((state) => state.setStars);
  const [rank, setRank] = useState("Эсквайер");

  const server = useCalcStore((state) => state.server);
  const serverCoefficient = getServerCoefficient(server);

  const rating =
    resourcesRating + unitsRating * serverCoefficient + buildingsRating;

  useEffect(() => {
    const ratingData = getRatingData(rating, server);
    setStars(ratingData.level);
    setRank(ratingData.rank);
  }, [rating, server, setStars]);

  return (
    <Container>
      <FlexWrap>
        <Rank>{rank}</Rank>
        <CommonRating>{rating.toLocaleString("en-US")}</CommonRating>
      </FlexWrap>
      <FlexWrap>
        <FlexWrap>
          <Label>Рейтинг армии:</Label>
          <Rating> {unitsRating.toLocaleString("en-US")}</Rating>
        </FlexWrap>
        <FlexWrap>
          <Label>Общий рейтинг: </Label>
          <Rating>
            {(resourcesRating + buildingsRating).toLocaleString("en-US")}
          </Rating>
        </FlexWrap>
        <FlexWrap>
          <Label>Рейтинг зданий: </Label>
          <Rating> {buildingsRating.toLocaleString("en-US")}</Rating>
        </FlexWrap>
        <FlexWrap>
          <Label>Рейтинг ресурсов: </Label>
          <Rating>{resourcesRating.toLocaleString("en-US")}</Rating>
        </FlexWrap>
      </FlexWrap>
    </Container>
  );
};

export default RatingsTable;
