import { Button } from "primereact/button";
import filterById from "../../../services/filterById";
import useMutatioAct from "../../../Hooks/useMutatioAct";
import EstadoDatosClient from "../EstadoDatosClient";
import { useState } from "react";
import useMutations from "../../../Hooks/useMutatios,js";
import { v4 as uuidv4 } from "uuid";
import useMutationNewAct from "../../../Hooks/useMutationNewAct";
import { useNavigate } from "react-router-dom";
import DatosClient from "../DatosClient";

const ModalDatoInd = ({ clientes, isOpen, idClient, idAct }) => {
  const cliente = filterById(clientes, idClient);
  const [ok, setOk] = useState(true);
  const [proxContacto, setProxContacto] = useState(null);
  const [obs, setObs] = useState(null);
  const mutationAct = useMutatioAct();
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const navigate = useNavigate();

  const handlerUpdate = () => {
    mutationAct.mutate({
      actividadId: idAct,
      id: idClient,
      estado: "Cumplida",
      resultado: ok
        ? `Cliente entrego ${isOpen}`
        : `Cliente aplazo la entrega de ${isOpen}`,
      fechaCumplimiento: new Date(),
    });

    mutationclient.mutate({
      id: cliente._id,
      datoClient: isOpen,
      estadoClient: ok ? "Entregado" : "Solicitado",
    });

    if (!ok) {
      const newActOk = {
        _id: uuidv4(),
        actividad: ` ${ok ? `${isOpen} Entregada` : `${obs}`}`,
        fecha: new Date(),
        proximoContacto: proxContacto || new Date(),
        dato: isOpen,
        estadoAct: ok ? "Cumplida" : "Pendiente",
        resultado: ok ? `Cliente entrego ${isOpen}` : "",
        fechaCumplimiento: new Date(),
      };
      mutationNewAct.mutate({
        id: cliente._id,
        newActOk,
      });
    }
    navigate(`/clientes/${cliente._id}`);
  };

  return (
    <div>
      <DatosClient cliente={cliente} />
      <h4>Solicitud de {isOpen}</h4>
      <EstadoDatosClient
        info={isOpen}
        ok={ok}
        setOk={setOk}
        proxContacto={proxContacto}
        setProxContacto={setProxContacto}
        setObs={setObs}
      />
      <Button
        on
        label="Cumplir Actividad"
        severity="success"
        size="small"
        onClick={handlerUpdate}
      />
    </div>
  );
};

export default ModalDatoInd;
