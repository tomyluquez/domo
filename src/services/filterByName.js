import { filters } from "../redux/slices/clientes";

const filterByName = (clientes, nombreLocal, dispatch) => {
  const filterClient = clientes.filter((cliente) => {
    let matchesNombre = true;

    if (nombreLocal) {
      matchesNombre = cliente.nombreLocal === nombreLocal;
    }

    return matchesNombre;
  });

  if (filterClient.length === 0) {
    dispatch(filters(clientes));
  } else dispatch(filters(filterClient));
};

export default filterByName;
