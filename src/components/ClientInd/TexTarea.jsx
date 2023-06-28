import { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";
import useMutations from "../../Hooks/useMutatios,js";

export default function TexTarea({ cliente }) {
  const toast = useRef(null);
  const mutationclient = useMutations();
  const { isLoading } = mutationclient;

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: form.getValues("description"),
    });
  };

  const defaultValues = { description: "" };
  const form = useForm({ defaultValues });
  const errors = form.formState.errors;

  const onSubmit = (data) => {
    data.description && show();
    mutationclient.mutate({
      id: cliente._id,
      obs: data.description,
    });
    form.reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="card flex justify-content-center">
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-column gap-2"
      >
        <Toast ref={toast} />
        <Controller
          name="description"
          control={form.control}
          rules={{ required: "No se puede agregar una observacion vacia." }}
          render={({ field, fieldState }) => (
            <>
              <label htmlFor={field.name}>Observacion</label>
              <InputTextarea
                id={field.name}
                {...field}
                rows={4}
                cols={60}
                className={classNames({ "p-invalid": fieldState.error })}
              />
              {getFormErrorMessage(field.name)}
            </>
          )}
        />
        <Button
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
          type="submit"
          icon="pi pi-check"
          severity="success"
        />
      </form>
    </div>
  );
}
