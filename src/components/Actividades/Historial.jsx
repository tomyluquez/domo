import React from "react";
import { stateColors } from "../../data/colors";
import formatDate from "../../services/formatDate";
import { headersTableAct } from "../../data/headersTable";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/slices/modal";

const Actividades = ({ cliente }) => {
  const dispatch = useDispatch();
  if (!cliente.actividades) {
    return <span>No hay actividades</span>;
  }
  return (
    <div className="table mt-4">
      <table className="tableClientes">
        <thead className="theadTable">
          <tr className="tr">
            {headersTableAct.map((header, i) => (
              <th key={i} className="th principal w-2 overflow-hidden">
                {header.field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="tbody cursor-pointer">
          {cliente &&
            cliente.actividades
              .slice()
              .reverse()
              .map((actividad) => (
                <React.Fragment key={cliente._id}>
                  <tr
                    onClick={() =>
                      dispatch(
                        openModal({
                          type: actividad.dato,
                          referencia: "estado",
                          id: cliente._id,
                          idAct: actividad._id,
                        })
                      )
                    }
                  >
                    <td className="td">
                      <span
                        className={`clientes-ind-value bg-${
                          stateColors[actividad.estadoAct]
                        } text-white p-2 border-round-xl w-full block text-center`}
                      >
                        {actividad.estadoAct}
                      </span>
                    </td>
                    <td className="td">{cliente.nombreLocal}</td>
                    <td className="td">{cliente.nombreCrm}</td>
                    <td className="td">{cliente.telContacto}</td>
                    <td className="td">
                      {formatDate(actividad.proximoContacto)}
                    </td>
                    <td className="td">{actividad.dato}</td>
                    <td className="td">{actividad.actividad}</td>
                  </tr>
                </React.Fragment>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default Actividades;
