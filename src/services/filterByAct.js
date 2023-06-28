const filterByAct = (clientes) => {
  const clientesWithAct = clientes.filter((cliente) => {
    return cliente.actividades?.length > 0;
  });
  console.log(clientesWithAct);
  return clientesWithAct;
};

export default filterByAct;
