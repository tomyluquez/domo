import filterById from "../../../services/filterById";
import hitosInd from "../../../services/histosInd";
import Hitos from "../Hitos";

const ModalDatosHistorial = ({ clientes, idClient, reference }) => {
  const cliente = filterById(clientes, idClient);
  const hitosIndividual = hitosInd(cliente, reference);

  return (
    <div>
      <Hitos hitos={hitosIndividual} />
    </div>
  );
};

export default ModalDatosHistorial;
