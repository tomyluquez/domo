import Header from "./components/Header";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useEffect, useState } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import Clients from "./components/Clients/Clients";
import SliderMenu from "./components/SliderMenu";
import Modal from "./components/FormNewClient/Modal";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ClientInd from "./components/ClientInd/ClientInd";
import useGetClients from "./Hooks/useGetClients";
import { addClients } from "./redux/slices/clientes";
import Actividades from "./components/Actividades/Actividades";

function App() {
  const { isLoading, isError, data } = useGetClients();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { isOpen, reference, idClient, idAct } = useSelector(
    (state) => state.modal
  );

  useEffect(() => {
    dispatch(addClients(data));
  }, [dispatch, data]);

  return (
    <>
      <Router>
        <Header open={open} setOpen={setOpen} />
        {open && <SliderMenu open={open} setOpen={setOpen} />}
        {isOpen && (
          <Modal
            isOpen={isOpen}
            reference={reference}
            idClient={idClient}
            idAct={idAct}
          />
        )}
        <Routes>
          <Route
            exact
            path="/"
            element={<Dashboard isLoading={isLoading} isError={isError} />}
          />
          <Route
            exact
            path="/clientes"
            element={<Clients isLoading={isLoading} isError={isError} />}
          />
          <Route exact path="/clientes/:id" element={<ClientInd />} />
          <Route exact path="/actividades" element={<Actividades />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
