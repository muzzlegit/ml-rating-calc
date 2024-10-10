import useCalcStore from "store/store";

const useServer = () => {
  const server = useCalcStore((state) => state.server);

  return { server };
};

export default useServer;
