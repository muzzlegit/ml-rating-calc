import { Select } from "components/UI";
import { getServersOptions } from "shared/helpers";
import useServer from "./useServer";

const ServerSelector = () => {
  const { server } = useServer();
  return (
    <div>
      <Select
        label="Сервер"
        value={server}
        options={getServersOptions()}
        onChange={() => {}}
        width="160px"
      />
    </div>
  );
};

export default ServerSelector;
