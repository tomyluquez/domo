import { Button } from "primereact/button";
import useMutations from "../../Hooks/useMutatios,js";
import useMutatioAct from "../../Hooks/useMutatioAct";
import useMutationNewAct from "../../Hooks/useMutationNewAct";
import { v4 as uuidv4 } from "uuid";

const ButtonsStates = ({
  cliente,
  label,
  leyenda,
  severity,
  disabled,
  proximoContacto,
  obs,
  idAct,
  dato,
  estadoAct,
  resultado,
}) => {
  const mutationclient = useMutations();
  const mutationAct = useMutatioAct();
  const mutationNewAct = useMutationNewAct();

  const { isLoading } = mutationclient;

  const handlerMutation = (estado) => {
    if (proximoContacto) {
      const newActOk = {
        _id: uuidv4(),
        actividad: obs,
        fecha: new Date(),
        proximoContacto,
        dato,
        estadoAct,
        resultado: resultado ? resultado : "",
        fechaCumplimiento: new Date(),
      };
      mutationNewAct.mutate({
        id: cliente._id,
        newActOk,
      });
    }

    mutationAct.mutate({
      actividadId: idAct,
      id: cliente._id,
      estado: "Cumplida",
      resultado,
      fechaCumplimiento: new Date(),
    });

    mutationclient.mutate({ id: cliente._id, estado: estado });
    if (obs) {
      mutationclient.mutate({ id: cliente._id, obs });
    }
  };
  return (
    <Button
      disabled={disabled}
      severity={severity}
      className="buttonState"
      size="small"
      onClick={() => handlerMutation(leyenda)}
    >
      {isLoading ? <i className="pi pi-spin pi-spinner" /> : label}
    </Button>
  );
};

export default ButtonsStates;
