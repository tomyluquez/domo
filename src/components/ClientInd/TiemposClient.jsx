import formatDate from "../../services/formatDate";
import Days from "./Days";
import { Divider } from "primereact/divider";

const TiemposClient = ({ cliente }) => {
  return (
    <>
      <div className="w-full flex mb-8 gap-4">
        <div>
          <span className="clientes-ind-label">
            Fecha de Solicitud: {formatDate(cliente.fechaSolicitud)}
          </span>
        </div>
        {cliente.fechaContacto && (
          <div>
            <span className="clientes-ind-label">
              Fecha de Contacto: {formatDate(cliente.fechaContacto)}
            </span>
          </div>
        )}
        {cliente.fechaDespachado && (
          <div>
            <span className="clientes-ind-label">
              Fecha de Despacho: {formatDate(cliente.fechaDespachado)}
            </span>
          </div>
        )}
        {cliente.fechaIntegrado && (
          <div>
            <span className="clientes-ind-label">
              Fecha de Integrado: {formatDate(cliente.fechaIntegrado)}
            </span>
          </div>
        )}
      </div>
      {cliente.fechaContacto && (
        <>
          <Days
            fecha1={cliente.fechaSolicitud}
            fecha2={cliente.fechaContacto}
            desde="Solicitud del Cliente"
            hasta="Primer Contacto"
          />
          <Divider />
        </>
      )}
      {cliente.menu.fechaSolicitado && (
        <>
          <Days
            fecha1={cliente.fechaContacto}
            fecha2={cliente.menu.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Menu"
          />
          <Divider />
        </>
      )}

      {cliente.datos.fechaSolicitado && (
        <>
          <Days
            fecha1={cliente.fechaContacto}
            fecha2={cliente.datos.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Datos"
          />
          <Divider />
        </>
      )}

      {cliente.imgStore.fechaSolicitado && (
        <>
          <Days
            fecha1={cliente.fechaContacto}
            fecha2={cliente.img.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Imagenes"
          />
          <Divider />
        </>
      )}

      {cliente.imgProd.fechaSolicitado && (
        <>
          <Days
            fecha1={cliente.fechaContacto}
            fecha2={cliente.img.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Imagenes"
          />
          <Divider />
        </>
      )}

      {cliente.mapa.fechaSolicitado && (
        <>
          <Days
            fecha1={cliente.fechaContacto}
            fecha2={cliente.mapa.fechaSolicitado}
            desde="Primer Contacto"
            hasta="Solicitud de Mapa"
          />
          <Divider />
        </>
      )}

      {cliente.fechaDespachado && (
        <>
          <Days
            fecha1={cliente.fechaSolicitud}
            fecha2={cliente.fechaDespachado}
            desde="Solicitud del Cliente"
            hasta="Despachado"
          />
          <Divider />
        </>
      )}

      {cliente.fechaIntegrado && (
        <>
          <Days
            fecha1={cliente.fechaSolicitud}
            fecha2={cliente.fechaIntegrado}
            desde="Solicitud del Cliente"
            hasta="Integrado"
          />
          <Divider />
        </>
      )}
    </>
  );
};

export default TiemposClient;
