import { useState } from "react";
import { stateColors } from "../../data/colors";
import formatDate from "../../services/formatDate";
import ButtonsStates from "./ButtonsStates";
import InfoDatosClient from "./InfoDatosClient";
import { Button } from "primereact/button";

const EstadoClient = ({ cliente }) => {
  const [cancel, setCancel] = useState(false);
  const [obsCancel, setObsCancel] = useState(null);
  const datosEntragos =
    cliente.estado === "Faltan datos" &&
    cliente.menu.estado === "Entregado" &&
    cliente.mapa.estado === "Entregado" &&
    cliente.datos.estado === "Entregado" &&
    cliente.imgProd.estado === "Entregado" &&
    cliente.imgStore.estado === "Entregado";
  return (
    <>
      <div className="clientes-ind-item flex">
        <span className="clientes-ind-label">Estado:</span>
        <div className="w-full flex align-items-center gap-4">
          <span
            className={`clientes-ind-value bg-${
              stateColors[cliente.estado]
            } text-white p-2 border-round-xl text-center`}
          >
            {datosEntragos ? "Pendiente de despachar" : cliente.estado}
          </span>
        </div>
      </div>
      <div className="flex flex-column gap-4">
        <h5>Estado de los datos</h5>
        {cliente.estado === "Faltan datos" && (
          <div className="flex flex-wrap gap-2 align-items-center justify-content-around">
            <InfoDatosClient cliente={cliente} info="menu" />
            <InfoDatosClient cliente={cliente} info="datos" />
            <InfoDatosClient cliente={cliente} info="mapa" />
            <InfoDatosClient cliente={cliente} info="imgProd" />
            <InfoDatosClient cliente={cliente} info="imgStore" />
          </div>
        )}
        {datosEntragos && (
          <ButtonsStates
            cliente={cliente}
            label="Despachar Cliente"
            leyenda="Despachado"
            severity="success"
            obs="Cliente Despachado"
            proximoContacto={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)}
            dato="Estado del cliente"
            estadoAct="Cumplida"
            resultado="Cliente Despachado"
          />
        )}
        {cliente.estado === "Despachado" && (
          <ButtonsStates
            cliente={cliente}
            label="Intgrar Cliente"
            leyenda="Integrado"
            severity="success"
            obs="Cliente Integrado"
            proximoContacto={new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)}
            dato="Estado del cliente"
            estadoAct="Cumplida"
            resultado="Cliente Integrado"
          />
        )}
        <Button
          label="Cancelar integracion"
          severity="danger"
          size="small"
          onClick={() => setCancel(true)}
        />
        {cliente.estado !== "No lo quiere" && cancel && (
          <div className="p-inputgroup inputsForm  w-full md:w-4">
            <textarea
              placeholder="observaciones"
              id=""
              cols="80"
              rows="5"
              value={obsCancel}
              onChange={(e) => setObsCancel(e.target.value)}
            ></textarea>
          </div>
        )}
        {obsCancel && obsCancel && (
          <ButtonsStates
            cliente={cliente}
            label="Cancelar integracion"
            leyenda="No lo quiere"
            severity="danger"
            obs={obsCancel}
            proximoContacto={new Date()}
            dato="Estado del cliente"
            estadoAct="Cumplida"
            resultado="Cliente cancelo la integracion"
          />
        )}
      </div>
    </>
  );
};

export default EstadoClient;
