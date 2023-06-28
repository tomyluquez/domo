const formatDate = (date) => {
  // Obtén la fecha actual del servidor o base de datos
  const fechaCreacion = new Date(date);

  // Obtiene el día, mes y año de la fecha de creación
  const dia = fechaCreacion.getDate();
  const mes = fechaCreacion.getMonth() + 1; // Los meses en JavaScript comienzan desde 0, por lo que se suma 1
  const anio = fechaCreacion.getFullYear();

  // Formatea la fecha en el formato "DIA/MES/AÑO"
  const fechaFormateada = `${dia}/${mes}/${anio}`;

  return fechaFormateada;
};

export default formatDate;
