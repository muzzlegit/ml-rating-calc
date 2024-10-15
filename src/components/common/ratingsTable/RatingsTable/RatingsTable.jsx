import { useEffect, useState } from "react";
import {
  getRankRating,
  getRatingData,
  getServerCoefficient,
} from "shared/helpers";
import useCalcStore from "store/store";
import {
  CommonRating,
  Container,
  FlexCol,
  FlexWrap,
  Label,
  Rank,
  Rating,
} from "./RatingsTable.styled";
import RatingBar from "./atoms/RatingBar/RatingBar";

const RatingsTable = () => {
  const unitsRating = useCalcStore((state) => state.unitsRating);
  const resourcesRating = useCalcStore((state) => state.resourcesRating);
  const buildingsRating = useCalcStore((state) => state.buildingsRating);
  const setStars = useCalcStore((state) => state.setStars);
  const [rank, setRank] = useState("Эсквайр");

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
      <div>
        <Rank>{rank}</Rank>
        <CommonRating>{rating.toLocaleString("en-US")}</CommonRating>
      </div>
      <RatingBar
        rating={getRankRating(rank, server)}
        currentProgress={rating}
      />
      <FlexCol>
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
      </FlexCol>
    </Container>
  );
};

export default RatingsTable;
