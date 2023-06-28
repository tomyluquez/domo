import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";
import { vendedores } from "../../data/vendedores";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import { Message } from "primereact/message";
import useNewMutation from "../../Hooks/useAddMutation";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { antiguedades } from "../../data/antiguedad";

const FormAddClient = ({ selectedVendedor, setSelectedVendedor }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutation, isLoading, setIsLoading } = useNewMutation();
  const [date, setDate] = useState(Date.now());
  const [obs, setObs] = useState(null);
  const [antiguedad, setAntiguedad] = useState(null);

  const onSubmit = (data) => {
    const { fechaSolicitud, nombreCrm, nombreLocal, telContacto } = data;
    const newUser = {
      fechaSolicitud,
      nombreCrm,
      nombreLocal,
      telContacto: +telContacto,
      vendedor: selectedVendedor.name,
      antiguedad: antiguedad.label,
      observaciones: obs ? [obs] : [],
    };
    setIsLoading(true);
    mutation.mutate(newUser);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="formAdd flex flex-wrap w-full gap-4 align-items-center justify-content-center"
    >
      <div className="card flex justify-content-center w-full md:w-4">
        <Calendar
          className="w-full"
          value={date}
          onChange={(e) => setDate(e.value)}
          showIcon
          placeholder="Fecha de solicitud"
          {...register("fechaSolicitud", { required: true })}
        />
      </div>
      <div className="p-inputgroup inputsForm  w-full md:w-4">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Nombre Cliente"
          {...register("nombreCrm", { required: true })}
        />
      </div>
      {errors.nombreCrm && (
        <Message
          className="error"
          severity="error"
          text="Username is required"
        />
      )}

      <div className="p-inputgroup inputsForm   w-full md:w-4">
        <span className="p-inputgroup-addon">
          <i className="pi pi-user"></i>
        </span>
        <InputText
          placeholder="Nombre Local"
          {...register("nombreLocal", { required: true })}
        />
      </div>
      {errors.nombreLocal && (
        <Message
          className="error"
          severity="error"
          text="Username is required"
        />
      )}

      <div className="p-inputgroup inputsForm  w-full md:w-4">
        <span className="p-inputgroup-addon">
          <i className="pi pi-whatsapp"></i>
        </span>
        <InputText
          placeholder="Tel contacto"
          {...register("telContacto", { required: true, pattern: /^\d+$/ })}
        />
      </div>
      {errors.telContacto?.type === "required" && (
        <Message
          className="error"
          severity="error"
          text="Username is required"
        />
      )}
      {errors.telContacto?.type === "pattern" && (
        <Message
          className="error"
          severity="error"
          text="ingresa solo numeros"
        />
      )}

      <div className="p-inputgroup inputsForm  w-full md:w-4">
        <Dropdown
          value={selectedVendedor}
          onChange={(e) => setSelectedVendedor(e.value)}
          options={vendedores}
          optionLabel="name"
          placeholder="Selecciona un vendedor"
        />
      </div>

      <div className="p-inputgroup inputsForm  w-full md:w-4">
        <Dropdown
          value={antiguedad}
          onChange={(e) => setAntiguedad(e.value)}
          options={antiguedades}
          optionLabel="label"
          placeholder="Selecciona una antiguedad"
        />
      </div>

      <div className="p-inputgroup inputsForm  w-full md:w-4">
        <textarea
          placeholder="observaciones"
          id=""
          cols="80"
          rows="5"
          value={obs}
          onChange={(e) => setObs(e.target.value)}
        ></textarea>
      </div>

      <Button
        className=" w-full md:w-2"
        disabled={antiguedad === null}
        type="submit"
        label={
          isLoading ? (
            <i
              className="pi pi-spin pi-spinner"
              style={{ fontSize: "2rem" }}
            ></i>
          ) : (
            "Agregar"
          )
        }
        severity="success"
      />
    </form>
  );
};

export default FormAddClient;
