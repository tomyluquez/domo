import { Dialog } from "primereact/dialog";
import { useState } from "react";
import FormAddClient from "./FormAddClient";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../redux/slices/modal";
import ModalDatos from "../ClientInd/ModaDatos/ModalDAtos";
import ModalContacto from "../ClientInd/ModaDatos/ModalContacto";
import useMutatioAct from "../../Hooks/useMutatioAct";
import { Button } from "primereact/button";
import ModalDatoInd from "../ClientInd/ModaDatos/ModalDatoInd";
import ModalDatosHistorial from "../ClientInd/ModaDatos/ModalDatosHistorial";

const Modal = ({ isOpen, reference, idClient, idAct }) => {
  const [selectedVendedor, setSelectedVendedor] = useState(null);
  const clientes = useSelector((state) => state.clientes.clientes);
  const dispatch = useDispatch();
  const mutationAct = useMutatioAct();
  const datoInd =
    isOpen === "menu" ||
    isOpen === "datos" ||
    isOpen === "mapa" ||
    isOpen === "imgProd" ||
    isOpen === "imgStore";
  const datoHistorial =
    isOpen === "menu Historial" ||
    isOpen === "datos Historial" ||
    isOpen === "mapa Historial" ||
    isOpen === "imgProd Historial" ||
    isOpen === "imgStore Historial";

  const handlerUpdate = () => {
    mutationAct.mutate({
      actividadId: idAct,
      id: idClient,
      estado: "Cumplida",
    });
  };
  return (
    <div>
      <Dialog
        header={isOpen}
        visible={isOpen}
        onHide={() => dispatch(closeModal())}
        style={{ width: "80vw" }}
        breakpoints={{ "960px": "75vw", "641px": "100vw" }}
      >
        {isOpen === "Agregar Cliente" && (
          <FormAddClient
            selectedVendedor={selectedVendedor}
            setSelectedVendedor={setSelectedVendedor}
          />
        )}
        {isOpen === "Datos" && (
          <>
            <ModalDatos
              clientes={clientes}
              reference={reference}
              idClient={idClient}
              idAct={idAct}
            />
            <Button
              on
              label="Cumplir Actividad"
              severity="success"
              size="small"
              onClick={handlerUpdate}
            />
          </>
        )}
        {isOpen === "Contactar" && (
          <ModalContacto
            clientes={clientes}
            reference={reference}
            idClient={idClient}
            idAct={idAct}
          />
        )}
        {datoInd && (
          <ModalDatoInd
            clientes={clientes}
            isOpen={isOpen}
            idClient={idClient}
            idAct={idAct}
          />
        )}
        {datoHistorial && (
          <ModalDatosHistorial
            clientes={clientes}
            idClient={idClient}
            reference={reference}
          />
        )}
      </Dialog>
    </div>
  );
};

export default Modal;
