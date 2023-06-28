import calculateDays from "../../services/calculateDays";

const Days = ({ fecha1, fecha2, desde, hasta }) => {
  return (
    <div className="clientes-ind-item">
      <span className="clientes-ind-label">
        Desde {desde} - Hasta {hasta}:
      </span>
      <span className="clientes-ind-value">
        <strong>{calculateDays(fecha1, fecha2)} Dias</strong>
      </span>
    </div>
  );
};

export default Days;
