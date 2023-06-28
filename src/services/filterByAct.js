const filterByAct = (clientes) => {
  const actividadesPendientes = [];

  clientes.forEach((cliente) => {
    cliente.actividades.forEach((actividad) => {
      if (actividad.estadoAct === "Pendiente") {
        actividadesPendientes.push({
          cliente: cliente,
          actividad: actividad,
        });
      }
    });
  });

  return actividadesPendientes.sort(
    (a, b) =>
      new Date(a.actividad.proximoContacto) -
      new Date(b.actividad.proximoContacto)
  );
};

export default filterByAct;
