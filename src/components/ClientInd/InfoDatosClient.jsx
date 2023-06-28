import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modal";
import { stateColors } from "../../data/colors";
import useMutationNewAct from "../../Hooks/useMutationNewAct";
import useMutations from "../../Hooks/useMutatios,js";
import { v4 as uuidv4 } from "uuid";

const InfoDatosClient = ({ cliente, info }) => {
  const dispatch = useDispatch();
  const mutationclient = useMutations();
  const mutationNewAct = useMutationNewAct();
  const { isLoading } = mutationclient;

  const handlerUpdate = async (infoEstado) => {
    await new Promise((resolve, reject) => {
      mutationclient.mutate(
        {
          id: cliente._id,
          datoClient: info,
          estadoClient: infoEstado,
        },
        {
          onSuccess: resolve,
          onError: reject,
        }
      );
    });

    const newActOk = {
      _id: uuidv4(),
      actividad: `${info} Solicitado`,
      fecha: new Date(),
      proximoContacto: new Date(),
      dato: info,
      estadoAct: "Cumplida",
      resultado: `${info} Solicitado`,
      fechaCumplimiento: new Date(),
    };

    await new Promise((resolve, reject) => {
      mutationNewAct.mutate(
        {
          id: cliente._id,
          newActOk,
        },
        {
          onSuccess: resolve,
          onError: reject,
        }
      );
    });

    const newActPen = {
      _id: uuidv4(),
      actividad: `Realizar seguimiento para confirmar que entrego ${info}`,
      fecha: new Date(),
      proximoContacto: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
      dato: info,
      estadoAct: "Pendiente",
    };

    await new Promise((resolve, reject) => {
      mutationNewAct.mutate(
        {
          id: cliente._id,
          newActPen,
        },
        {
          onSuccess: resolve,
          onError: reject,
        }
      );
    });
  };
  return (
    <div className="estadoInd flex flex-column align-items-center justify-content-center gap-1 h-full">
      <span>{info}</span>
      <span
        className={`spanEstado bg-${
          stateColors[cliente[info].estado]
        } text-white p-2 border-round-xl text-center`}
      >
        {isLoading ? (
          <i className="pi pi-spin pi-spinner" />
        ) : (
          cliente[info].estado
        )}
      </span>
      <div className="flex gap-4">
        <span>
          <i
            className="pi pi-eye cursor-pointer hover:text-blue-500"
            onClick={() =>
              dispatch(
                openModal({
                  type: `${info} Historial`,
                  referencia: info,
                  id: cliente._id,
                })
              )
            }
          ></i>
        </span>

        {cliente[info].estado === "Pendiente de solicitar" && (
          <span>
            <i
              className="pi pi-check cursor-pointer hover:text-green-500"
              onClick={() => handlerUpdate("Solicitado")}
            ></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default InfoDatosClient;
