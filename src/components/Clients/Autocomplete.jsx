import { AutoComplete } from "primereact/autocomplete";
import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Toast } from "primereact/toast";

const Autocomplete = ({ nombreLocal, setNombreLocal }) => {
  const [optionsClients, setOptionsClients] = useState(null);
  const clientes = useSelector((state) => state.clientes.clientes);
  const toast = useRef(null);

  const search = (event) => {
    // Timeout to emulate a network connection
    setTimeout(() => {
      let _filteredClients;
      if (event.query) {
        _filteredClients = clientes.filter((cliente) =>
          cliente.nombreLocal.toLowerCase().includes(event.query.toLowerCase())
        );
      }

      setOptionsClients(_filteredClients);
    }, 250);
  };

  return (
    <>
      <Toast ref={toast} position="top-center" />
      <div className="card flex justify-content-center">
        <AutoComplete
          field="nombreLocal"
          value={nombreLocal}
          suggestions={optionsClients}
          completeMethod={search}
          onChange={(e) => setNombreLocal(e.value)}
          placeholder="Por nombre del local"
        />
      </div>
    </>
  );
};

export default Autocomplete;
