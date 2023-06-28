import { vendedores } from "../data/vendedores";

const getClientsBySell = (clientes, estado) => {
  const data = {
    labels: vendedores.map((vendedor) => vendedor.name),
    datasets: [
      {
        label: estado
          ? `Clientes Integrados`
          : `Clientes Solicitados(${clientes.length})`,
        data: vendedores.map((vendedor) => {
          if (estado) {
            return clientes.filter(
              (cliente) =>
                cliente.vendedor === vendedor.name && cliente.estado === estado
            ).length;
          } else {
            return clientes.filter(
              (cliente) => cliente.vendedor === vendedor.name
            ).length;
          }
        }),
        backgroundColor: [
          "rgba(255, 159, 64, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgb(239, 148, 148, 0.2)",
          "rgb(148, 239, 159, 0.2)",
          "rgb(238, 148, 239, 0.2)",
          "rgb(233, 239, 148, 0.2)",
          "rgb(137, 135, 132, 0.2)",
        ],
        borderColor: [
          "rgba(255, 159, 64, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgb(239, 148, 148, 0.5)",
          "rgb(148, 239, 159, 0.5)",
          "rgb(238, 148, 239, 0.5)",
          "rgb(233, 239, 148, 0.5)",
          "rgb(137, 135, 132, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return data;
};

export default getClientsBySell;
