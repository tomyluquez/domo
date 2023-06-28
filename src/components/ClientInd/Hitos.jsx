import { Timeline } from "primereact/timeline";
import formatDate from "../../services/formatDate";

const Hitos = ({ hitos }) => {
  return (
    <div className="card">
      <Timeline
        value={hitos}
        opposite={(item) => item.resultado}
        content={(item) => (
          <small className="text-color-secondary">
            {formatDate(item.fechaCumplimiento)}
          </small>
        )}
      />
    </div>
  );
};

export default Hitos;
