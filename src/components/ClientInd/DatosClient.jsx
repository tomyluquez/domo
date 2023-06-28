import formatDate from "../../services/formatDate";

const DatosClient = ({ cliente }) => {
  return (
    <div className="clientes-ind-header">
      <div className="clientes-ind-title flex flex-column ">
        <h2>{cliente.nombreLocal}</h2>
        <span>Nombre Contacto: {cliente.nombreCrm}</span>

        <span>
          Tel Contacto:{" "}
          <a
            href={`https://wa.me/${cliente.telContacto}`}
            target="blank"
            className="text-blue-600 underline"
          >
            {cliente.telContacto}
          </a>
        </span>
        <div>
          <span className="clientes-ind-label">
            Vendedor: {cliente.vendedor}
          </span>
        </div>
        <div>
          <span className="clientes-ind-label">
            Fecha de Solicitud: {formatDate(cliente.fechaSolicitud)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DatosClient;
