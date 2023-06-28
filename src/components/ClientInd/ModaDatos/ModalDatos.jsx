import filterById from "../../../services/filterById";
import DatosClient from "../DatosClient";
import EstadoDatosClient from "../EstadoDatosClient";

const ModalDatos = ({ clientes, idClient, idAct, isOpen }) => {
  const cliente = filterById(clientes, idClient);
  return (
    <div>
      <DatosClient cliente={cliente} />
      <h4>Solicitud de Datos</h4>
      <EstadoDatosClient
        cliente={cliente}
        info="menu"
        idAct={idAct}
        isOpen={isOpen}
      />
      <EstadoDatosClient
        cliente={cliente}
        info="datos"
        idAct={idAct}
        isOpen={isOpen}
      />
      <EstadoDatosClient
        cliente={cliente}
        info="mapa"
        idAct={idAct}
        isOpen={isOpen}
      />
      <EstadoDatosClient
        cliente={cliente}
        info="imgStore"
        idAct={idAct}
        isOpen={isOpen}
      />
      <EstadoDatosClient
        cliente={cliente}
        info="imgProd"
        idAct={idAct}
        isOpen={isOpen}
      />
    </div>
  );
};

export default ModalDatos;
