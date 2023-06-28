import Skeletons from "../Skeletons";
import Filters from "./Filters";
import { useSelector } from "react-redux";
import { Toast } from "primereact/toast";
import { useRef } from "react";
import { Divider } from "primereact/divider";
import TableClients from "./TableClients";

const Clients = ({ isLoading, isError }) => {
  const { clientes, filteredClientes } = useSelector((state) => state.clientes);
  const toast = useRef(null);

  if (isLoading) {
    return <Skeletons />;
  }

  if (isError) {
    return <div>Huvo un problema por favor intentar nuevamente</div>;
  }

  return (
    <>
      <Toast ref={toast} position="top-center" />
      <Filters clientes={clientes} toast={toast} />
      <Divider />
      <div className="w-full mt-4 flex flex-wrap gap-4 justify-content-center overflow-y-scroll">
        <TableClients
          clientes={filteredClientes.length > 0 ? filteredClientes : clientes}
        />
      </div>
    </>
  );
};

export default Clients;
