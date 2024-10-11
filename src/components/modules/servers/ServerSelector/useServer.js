import useCalcStore from "store/store";

const useServer = () => {
  const server = useCalcStore((state) => state.server);
  const setServer = useCalcStore((state) => state.setServer);

  const handleServesSelect = (server) => {
    setServer(server);
  };

  return { server, handleServesSelect };
};

export default useServer;
