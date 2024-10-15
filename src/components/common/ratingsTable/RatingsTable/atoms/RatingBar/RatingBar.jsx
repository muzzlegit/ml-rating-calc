import PropTypes from "prop-types";
import { Bar, Progress } from "./RatingBar.styled";

const RatingBar = ({ rating, currentProgress }) => {
  const width = (currentProgress * 100) / rating;
  return (
    <Bar>
      {width > 0 ? <Progress width={width > 100 ? 100 : width} /> : null}
    </Bar>
  );
};

export default RatingBar;

RatingBar.propTypes = {
  rating: PropTypes.number.isRequired,
  currentProgress: PropTypes.number.isRequired,
};
