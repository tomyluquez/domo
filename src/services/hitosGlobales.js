const hitosGlobales = (cliente) => {
  const defaultHito = [
    {
      resultado: "Cliente solicita la integracion",
      fechaCumplimiento: cliente.fechaSolicitud,
    },
  ];
  const filterHitos = cliente.actividades.filter(
    (actividad) =>
      actividad.resultado !== undefined && actividad.resultado !== ""
  );

  const hitosGlobal = [...defaultHito, ...filterHitos].reverse();
  return hitosGlobal;
};

export default hitosGlobales;
