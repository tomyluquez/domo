import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";
import InfoDatosClient from "./InfoDatosClient";

const AcordeonClient = ({ cliente }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-center h-full w-full">
      <>
        {cliente.estado === "Faltan datos" && (
          <div className="flex flex-row flex-wrap space-x-1 gap-1 md:gap-2 align-items-center justify-content-center md:h-full ">
            <InfoDatosClient cliente={cliente} info="menu" />
            <InfoDatosClient cliente={cliente} info="datos" />
            <InfoDatosClient cliente={cliente} info="mapa" />
            <InfoDatosClient cliente={cliente} info="imgProd" />
            <InfoDatosClient cliente={cliente} info="imgStore" />
          </div>
        )}
      </>
      <Button
        label="Ver cliente"
        severity="success"
        size="small"
        onClick={() => navigate(`/clientes/${cliente._id}`)}
      />
    </div>
  );
};

export default AcordeonClient;
