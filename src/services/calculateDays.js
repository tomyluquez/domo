const calculateDays = (fecha1, fecha2) => {
  let fechaUno = new Date(fecha1);
  let fechaDos = new Date(fecha2);
  let miliSegundosDia = 24 * 60 * 60 * 1000;
  let milisegundosTranscurridos = Math.abs(fechaUno - fechaDos);
  let diasTranscurridos = Math.round(
    milisegundosTranscurridos / miliSegundosDia
  );

  return diasTranscurridos;
};

export default calculateDays;
