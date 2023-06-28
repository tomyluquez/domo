import { Dropdown } from "primereact/dropdown";
import { vendedores } from "../../data/vendedores";
import { estados } from "../../data/estados";
import { Calendar } from "primereact/calendar";
import { useState } from "react";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import filterClients from "../../services/filteredClients";
import { filters } from "../../redux/slices/clientes";
import Autocomplete from "./Autocomplete";

const Filters = ({ clientes, toast }) => {
  const [vendedor, setVendedor] = useState(null);
  const [estado, setEstado] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const [dateEnd, setDateEnd] = useState(null);
  const [nombreLocal, setNombreLocal] = useState(null);
  const dispatch = useDispatch();

  const handlerFilters = (e) => {
    e.preventDefault();
    const filtroNombreLocal = nombreLocal
      ? { nombreLocal: nombreLocal.nombreLocal }
      : null;

    filterClients(
      clientes,
      vendedor,
      estado,
      filtroNombreLocal,
      dateStart,
      dateEnd,
      dispatch,
      toast
    );
  };
  const handlerReset = () => {
    setVendedor(null);
    setEstado(null);
    setDateStart(null);
    setDateEnd(null);
    setNombreLocal(null); //
    dispatch(filters(clientes));
  };
  return (
    <div className="flex flex-column align-items-center justify-content-center">
      <h2>FILTRAR</h2>
      <form
        onSubmit={handlerFilters}
        className="flex flex-wrap gap-4 align-items-center justify-content-center"
      >
        <Autocomplete
          nombreLocal={nombreLocal}
          setNombreLocal={setNombreLocal}
        />
        <div className="p-inputgroup_ w-full md:w-auto">
          <Dropdown
            value={vendedor}
            onChange={(e) => setVendedor(e.value)}
            options={vendedores}
            optionLabel="name"
            placeholder="Por vendedor"
            className="w-full"
          />
        </div>
        <div className="p-inputgroup_ w-full md:w-auto">
          <Dropdown
            value={estado}
            onChange={(e) => setEstado(e.value)}
            options={estados}
            optionLabel="name"
            placeholder="Por estado"
            className="w-full"
          />
        </div>
        <div className="p-inputgroup_ w-full md:w-auto">
          <Calendar
            className="w-full"
            value={dateStart}
            onChange={(e) => setDateStart(e.value)}
            showIcon
            placeholder="Desde"
          />
        </div>
        <div className="p-inputgroup_ w-full md:w-auto">
          <Calendar
            className="w-full"
            value={dateEnd}
            onChange={(e) => setDateEnd(e.value)}
            showIcon
            placeholder="Hasta"
          />
        </div>
        <Button
          type="button"
          label="Restablecer Filtros"
          onClick={handlerReset}
        ></Button>
        <Button type="submit" label="Filtrar" severity="success"></Button>
      </form>
    </div>
  );
};

export default Filters;
