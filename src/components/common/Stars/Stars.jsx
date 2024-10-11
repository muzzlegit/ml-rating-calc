import useCalcStore from "store/store";
import { ImageComponent } from "..";
import { Container } from "./Stars.styled";

const Stars = () => {
  const starsQuaontity = useCalcStore((state) => state.stars);

  const stars = Array.from({ length: starsQuaontity }, (_, index) => (
    <ImageComponent key={index + starsQuaontity} imageName="star" />
  ));
  return <Container>{stars}</Container>;
};

export default Stars;
