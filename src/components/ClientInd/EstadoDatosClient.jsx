import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";

const EstadoDatosClient = ({
  info,
  ok,
  setOk,
  proxContacto,
  setProxContacto,
  setObs,
}) => {
  return (
    <div className="flex gap-2 align-items-center">
      <div>
        <h6>¿ El cliente envio {info} ?</h6>
        <Button
          label="No"
          severity="warning"
          size="small"
          onClick={() => setOk(false)}
        />
        <Button
          label="Si"
          severity="success"
          size="small"
          onClick={() => setOk(true)}
        />
      </div>

      {!ok && (
        <div>
          {" "}
          <Calendar
            className="w-full"
            value={proxContacto}
            onChange={(e) => setProxContacto(e.value)}
            showIcon
            placeholder="Fecha de proximo contacto"
          />
          <div className="p-inputgroup inputsForm  w-full md:w-4">
            <textarea
              placeholder="observaciones"
              id=""
              cols="80"
              rows="5"
              onChange={(e) => setObs(e.target.value)}
            ></textarea>
          </div>
        </div>
      )}
    </div>
  );
};

export default EstadoDatosClient;
