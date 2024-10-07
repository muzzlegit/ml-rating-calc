import { RESOUCES_NAMES } from "shared/constants";
import { Container } from "./ResourcesBar.styled";
import Resource from "./atoms/Resource/Resource";

const ResourcesBar = () => {
  return (
    <Container>
      {RESOUCES_NAMES.map((resource) => (
        <Resource key={resource} resourceName={resource} />
      ))}
    </Container>
  );
};

export default ResourcesBar;
