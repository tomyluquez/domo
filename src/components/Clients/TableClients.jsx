import React, { useState } from "react";
import formatDate from "../../services/formatDate";
import { stateColors } from "../../data/colors";
import { orderClients } from "../../services/orderClients";
import { useDispatch } from "react-redux";
import { headersTable } from "../../data/headersTable";
import "../../table.css";
import ButtonsStates from "../ClientInd/ButtonsStates";
import AcordeonClient from "../ClientInd/AcordeonClient";

export default function TableClients({ clientes }) {
  const dispatch = useDispatch();
  const [expandedClient, setExpandedClient] = useState(null);

  const expandClient = (index) => {
    if (expandedClient === index) {
      setExpandedClient(null); // Si ya está expandido, lo contraemos
    } else {
      setExpandedClient(index); // Si no está expandido, lo expandimos
    }
  };

  return (
    <>
      {clientes && (
        <div className="table">
          <table className="tableClientes">
            <thead className="theadTable">
              <tr className="tr">
                {headersTable.map((header, i) => (
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
              {clientes
                .slice()
                .reverse()
                .map((cliente, index) => (
                  <React.Fragment key={index}>
                    <tr onClick={() => expandClient(index)}>
                      <td className="td">
                        <span
                          className={`clientes-ind-value bg-${
                            stateColors[cliente.estado]
                          } text-white p-2 border-round-xl w-full block text-center`}
                        >
                          {cliente.estado === "Faltan datos" &&
                          cliente.menu.estado === "Entregado" &&
                          cliente.datos.estado === "Entregado" &&
                          cliente.mapa.estado === "Entregado" &&
                          cliente.imgStore.estado === "Entregado" &&
                          cliente.imgProd.estado === "Entregado"
                            ? "Despachar Cliente"
                            : cliente.estado}
                        </span>
                      </td>
                      <td className="td">{cliente.nombreLocal}</td>
                      <td className="td">{cliente.nombreCrm}</td>
                      <td className="td">{cliente.telContacto}</td>
                      <td className="td">
                        {formatDate(cliente.fechaSolicitud)}
                      </td>
                      {cliente.fechaContacto ? (
                        <td className="td">
                          {formatDate(cliente.fechaContacto)}
                        </td>
                      ) : (
                        <td className="td">Pendiente Contacto</td>
                      )}
                      <td className="td">{cliente.vendedor}</td>
                      {cliente.estado === "Faltan datos" &&
                        cliente.menu.estado === "Entregado" &&
                        cliente.datos.estado === "Entregado" &&
                        cliente.mapa.estado === "Entregado" &&
                        cliente.imgStore.estado === "Entregado" &&
                        cliente.imgProd.estado === "Entregado" && (
                          <ButtonsStates
                            cliente={cliente}
                            label="Despachar Cliente"
                            leyenda="Despachado"
                            severity="success"
                            obs="Cliente Despachado"
                            proximoContacto={
                              new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                            }
                            dato="Estado del cliente"
                            estadoAct="Cumplida"
                          />
                        )}
                    </tr>
                    {expandedClient === index && (
                      <tr key={`${index}-expanded`} className="expanded-row">
                        <td colSpan={headersTable.length + 1}>
                          <div className="expanded-content md:h-8rem gap-2 flex flex-column">
                            <AcordeonClient cliente={cliente} />
                          </div>
                        </td>
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
}
