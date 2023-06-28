const hitosInd = (cliente, info) => {
  const hitosIndividual = cliente.actividades.filter(
    (actividad) =>
      actividad.resultado !== undefined &&
      actividad.resultado !== "" &&
      actividad.dato === info
  );
  return hitosIndividual.reverse();
};

export default hitosInd;
