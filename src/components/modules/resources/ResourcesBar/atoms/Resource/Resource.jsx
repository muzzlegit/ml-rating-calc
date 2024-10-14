import { TextInput } from "components/UI";
import { ImageComponent } from "components/common";
import PropTypes from "prop-types";
import { RESOUCES_NAMES } from "shared/constants";
import useRocource from "../../useRocource";
import { Container, inputStyles } from "./Resource.styled";

const Resource = ({ resourceName }) => {
  const { resource, handleResourceQuantity } = useRocource(resourceName);

  return (
    <Container>
      <ImageComponent imageName={resourceName} />
      <TextInput
        value={resource.quantity}
        handleChange={handleResourceQuantity}
        styles={inputStyles}
      />
    </Container>
  );
};

export default Resource;

Resource.propTypes = {
  resourceName: PropTypes.oneOf(RESOUCES_NAMES),
};
