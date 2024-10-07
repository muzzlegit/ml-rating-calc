import PropTypes from "prop-types";
import { getImageData } from "shared/helpers";
import { Container } from "./ImageComponent.styled";

/**
 * @param {images} imageName
 */

const ImageComponent = ({ imageName }) => {
  const imageData = getImageData(imageName);
  if (!imageName || !imageData) return null;

  const { imageUrl, width, height } = imageData;

  return <Container background={imageUrl} height={height} width={width} />;
};

export default ImageComponent;

ImageComponent.propTypes = {
  imageName: PropTypes.string,
};
