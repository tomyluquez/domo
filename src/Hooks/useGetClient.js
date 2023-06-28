import { useSelector } from "react-redux";

const useGetClient = (id) => {
  const clientes = useSelector((state) => state.clientes.clientes);
  const cliente = clientes.filter((cliente) => cliente._id === id)[0];

  return cliente;
};

export default useGetClient;
