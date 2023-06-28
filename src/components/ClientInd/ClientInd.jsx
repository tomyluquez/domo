import { useParams } from "react-router-dom";
import useGetClient from "../../Hooks/useGetClient";
import Skeletons from "../Skeletons";
import "../../ClientesInd.css";
import EstadoClient from "./EstadoClient";
import TiemposClient from "./TiemposClient";
import { TabView, TabPanel } from "primereact/tabview";
import Observaciones from "./Observaciones";
import DatosClient from "./DatosClient";
import Actividades from "../Actividades/Historial";
import Hitos from "./Hitos";
import hitosGlobales from "../../services/hitosGlobales";

const ClientesInd = () => {
  const clientId = useParams();
  const cliente = useGetClient(clientId.id);
  const hitosGlobal = hitosGlobales(cliente);

  if (!cliente) {
    return <Skeletons />;
  }

  return (
    <>
      <DatosClient cliente={cliente} />
      <TabView className="mt-4">
        <TabPanel header="Estado Integracion">
          <div className="clientes-ind flex flex-column">
            <EstadoClient cliente={cliente} />
          </div>
        </TabPanel>
        <TabPanel header="Tiempos de Integracion">
          <div className="clientes-ind flex flex-column">
            <TiemposClient cliente={cliente} />
          </div>
        </TabPanel>
        <TabPanel header="Observaciones">
          <div className="clientes-ind flex flex-column">
            <Observaciones cliente={cliente} />
          </div>
        </TabPanel>
        <TabPanel header="Actividades">
          <div className="clientes-ind flex flex-column">
            <Actividades cliente={cliente} />
          </div>
        </TabPanel>
        <TabPanel header="Hitos">
          <div className="clientes-ind flex flex-column">
            <Hitos hitos={hitosGlobal} />
          </div>
        </TabPanel>
      </TabView>
    </>
  );
};

export default ClientesInd;
