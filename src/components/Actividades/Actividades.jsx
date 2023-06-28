import { useDispatch, useSelector } from "react-redux";
import { headersTableAct } from "../../data/headersTable";
import { orderClients } from "../../services/orderClients";
import formatDate from "../../services/formatDate";
import filterByAct from "../../services/filterByAct";
import React from "react";
import { stateColors } from "../../data/colors";
import { openModal } from "../../redux/slices/modal";

const Actividades = () => {
  const { clientes } = useSelector((state) => state.clientes);
  const actividadesPendientes = filterByAct(clientes);
  const dispatch = useDispatch();

  return (
    <>
      {clientes && (
        <div className="table mt-4">
          <table className="tableClientes">
            <thead className="theadTable">
              <tr className="tr">
                {headersTableAct.map((header, i) => (
                  <th
                    key={i}
                    className="th principal w-2 overflow-hidden"
                    onClick={() =>
                      orderClients(clientes, header.label, dispatch)
                    }
                  >
                    {header.field}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="tbody cursor-pointer">
              {actividadesPendientes &&
                actividadesPendientes.map((actividad) => (
                  <React.Fragment key={actividad.cliente._id}>
                    {actividad.actividad.estadoAct === "Pendiente" && (
                      <tr
                        onClick={() =>
                          dispatch(
                            openModal({
                              type: actividad.actividad.dato,
                              referencia: "estado",
                              id: actividad.cliente._id,
                              idAct: actividad.actividad._id,
                            })
                          )
                        }
                      >
                        <td className="td">
                          <span
                            className={`clientes-ind-value bg-${
                              stateColors[actividad.actividad.estadoAct]
                            } text-white p-2 border-round-xl w-full block text-center`}
                          >
                            {actividad.actividad.estadoAct}
                          </span>
                        </td>
                        <td className="td">{actividad.cliente.nombreLocal}</td>
                        <td className="td">{actividad.cliente.nombreCrm}</td>
                        <td className="td">{actividad.cliente.telContacto}</td>
                        <td className="td">
                          {formatDate(actividad.actividad.proximoContacto)}
                        </td>
                        <td className="td">{actividad.actividad.dato}</td>
                        <td className="td">{actividad.actividad.actividad}</td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Actividades;
