import filterById from "../../../services/filterById";
import { stateColors } from "../../../data/colors";
import ButtonsStates from "../ButtonsStates";
import { useState } from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import DatosClient from "../DatosClient";

const ModalDatos = ({ clientes, idClient, idAct }) => {
  const cliente = filterById(clientes, idClient);
  const [proximoContacto, setProximoContacto] = useState(null);
  const [obs, setObs] = useState(null);
  const [optionSelect, setOptionSelect] = useState(null);

  return (
    <div>
      <DatosClient cliente={cliente} />
      {cliente && (
        <>
          <h4>Cumplir Actividad</h4>
          <div>
            <span>Estado</span>
            <span
              className={`clientes-ind-value bg-${
                stateColors[cliente.estado]
              } text-white p-2 border-round-xl w-full block text-center`}
            >
              {cliente.estado}
            </span>
          </div>
          <div>
            <span>Nuevo Estado</span>
            {cliente.estado === "Pendiente" && (
              <>
                <ButtonsStates
                  cliente={cliente}
                  label="Cliente contactado"
                  leyenda="Faltan datos"
                  severity="success"
                  idAct={idAct}
                  obs="Cliente contactado"
                  dato="Datos"
                  estadoAct="Cumplida"
                  resultado="Cliente contactado"
                  proximoContacto={new Date()}
                />
                <Button
                  severity="warning"
                  size="small"
                  label="No contesta"
                  onClick={() => setOptionSelect("No contesta")}
                />
                <Button
                  severity="danger"
                  size="small"
                  label="No lo quiere"
                  onClick={() => setOptionSelect("No lo quiere")}
                />
              </>
            )}
            {cliente.estado === "No contesta" && (
              <>
                <ButtonsStates
                  cliente={cliente}
                  label="Cliente contactado"
                  leyenda="Faltan datos"
                  severity="success"
                  idAct={idAct}
                  obs="Cliente contactado"
                  dato="Datos"
                  estadoAct="Cumplida"
                  resultado="Cliente contactado"
                  proximoContacto={new Date()}
                />
                <Button
                  severity="warning"
                  size="small"
                  label="No contesta"
                  onClick={() => setOptionSelect("No contesta")}
                />
                <Button
                  severity="danger"
                  size="small"
                  label="No lo quiere"
                  onClick={() => setOptionSelect("No lo quiere")}
                />
              </>
            )}
            {optionSelect === "No contesta" && (
              <>
                <div className="card flex justify-content-center w-full md:w-4">
                  <Calendar
                    className="w-full"
                    value={proximoContacto}
                    onChange={(e) => setProximoContacto(e.value)}
                    showIcon
                    placeholder="Fecha de Proximo Contacto"
                  />
                </div>
                <div className="p-inputgroup inputsForm  w-full md:w-4">
                  <textarea
                    placeholder="observaciones"
                    id=""
                    cols="80"
                    rows="5"
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                  ></textarea>
                </div>
                {optionSelect && obs && (
                  <ButtonsStates
                    cliente={cliente}
                    label="Cumplir actividad"
                    leyenda={optionSelect}
                    severity="success"
                    proximoContacto={proximoContacto}
                    obs={obs}
                    idAct={idAct}
                    dato="Contactar"
                    estadoAct="Pendiente"
                    resultado="Cliente contactado pero no contesto"
                  />
                )}
              </>
            )}
            {optionSelect === "No lo quiere" && (
              <>
                <div className="p-inputgroup inputsForm  w-full md:w-4">
                  <textarea
                    placeholder="observaciones"
                    id=""
                    cols="80"
                    rows="5"
                    value={obs}
                    onChange={(e) => setObs(e.target.value)}
                  ></textarea>
                </div>
                {obs && (
                  <ButtonsStates
                    cliente={cliente}
                    label="Cumplir actividad"
                    leyenda={optionSelect}
                    severity="success"
                    obs={obs}
                    idAct={idAct}
                    dato="Contactar"
                    estadoAct="Pendiente"
                    resultado="Cliente contactado pero no lo quiere"
                  />
                )}
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ModalDatos;
