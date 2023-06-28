import { filters } from "../redux/slices/clientes";

const filterClients = (
  clientes,
  vendedor,
  estado,
  nombreLocal,
  dateStart,
  dateEnd,
  dispatch,
  toast
) => {
  const filteredClients = clientes.filter((cliente) => {
    let matchesVendedor = true;
    let matchesEstado = true;
    let matchesFecha = true;
    let matchesNombre = true;

    if (vendedor) {
      matchesVendedor = cliente.vendedor === vendedor.name;
    }

    if (estado) {
      matchesEstado = cliente.estado === estado.name;
    }

    if (nombreLocal) {
      matchesNombre = cliente.nombreLocal === nombreLocal.nombreLocal;
    }

    if (dateStart && dateEnd) {
      const clientDate = new Date(cliente.fechaSolicitud);
      const dateDesde = new Date(dateStart);
      const dateHasta = new Date(dateEnd);

      matchesFecha = clientDate >= dateDesde && clientDate <= dateHasta;
    }

    return matchesVendedor && matchesEstado && matchesFecha && matchesNombre;
  });

  if (filteredClients.length === 0) {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: "No hay coincidencias en los filtros",
      life: 3000,
    });
    dispatch(filters(clientes));
  } else dispatch(filters(filteredClients));
};

export default filterClients;
