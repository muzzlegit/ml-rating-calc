import { Select } from "components/UI";
import { getServersOptions } from "shared/helpers";
import useServer from "./useServer";

const ServerSelector = () => {
  const { server, handleServesSelect } = useServer();

  return (
    <div>
      <Select
        label="Сервер"
        value={server}
        options={getServersOptions()}
        onChange={handleServesSelect}
        width="140px"
      />
    </div>
  );
};

export default ServerSelector;
