import { Divider } from "primereact/divider";
import TexTarea from "./TexTarea";

const Observaciones = ({ cliente }) => {
  return (
    <>
      <div>
        {cliente.observaciones ? (
          cliente.observaciones.map((obs, index) => <p key={index}>{obs}</p>)
        ) : (
          <p>No hay observaciones</p>
        )}
        <Divider />
      </div>
      <TexTarea cliente={cliente} />
    </>
  );
};

export default Observaciones;
