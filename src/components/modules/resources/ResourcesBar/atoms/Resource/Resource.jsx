import { TextInput } from "components/UI";
import { ImageComponent } from "components/common";
import PropTypes from "prop-types";
import { RESOUCES_NAMES } from "shared/constants";
import useRocource from "../../useRocource";
import { Container } from "./Resource.styled";

const Resource = ({ resourceName }) => {
  const { resource, handleResourceQuantity } = useRocource(resourceName);

  return (
    <Container>
      <ImageComponent imageName={resourceName} />
      <TextInput
        value={resource.quantity}
        handleChange={handleResourceQuantity}
        styles={{ width: "100px" }}
      />
    </Container>
  );
};

export default Resource;

Resource.propTypes = {
  resourceName: PropTypes.oneOf(RESOUCES_NAMES),
};
