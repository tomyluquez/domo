const filterById = (clientes, id) => {
  const client = [...clientes].filter((cliente) => cliente._id === id)[0];
  return client;
};

export default filterById;
