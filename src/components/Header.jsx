import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/slices/modal";
import { useRef } from "react";
import { Toast } from "primereact/toast";

const Header = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const toast = useRef(null);

  return (
    <header className="w-full bg-white flex align-items-center justify-content-between shadow-2 px-2 md:px-8">
      <Toast ref={toast} position="top-center" />
      <i
        className="pi pi-align-left cursor-pointer md:hidden"
        style={{ fontSize: "1.5rem" }}
        onClick={() => setOpen(!open)}
      ></i>
      <div className="flex align-items-center">
        <img className="logo" src="/checkDelivery.jpg" alt="" />
        <h1 className="text-base">Clientes Check Delivery</h1>
      </div>
      <div className="flex align-items-center justify-content-center gap-4">
        <Link to="/">
          <i
            className="icons md:flex hidden gap-2 pi pi-chart-line cursor-pointer flex-column align-items-center"
            style={{ fontSize: "1rem" }}
          >
            <span>Tablero</span>
          </i>
        </Link>
        <Link to="/clientes">
          <i
            className="icons md:flex hidden gap-2 pi pi-user cursor-pointer flex-column align-items-center"
            style={{ fontSize: "1rem" }}
          >
            <span>Clientes</span>
          </i>
        </Link>
        <Link to="/actividades">
          <i
            className="icons md:flex hidden gap-2 pi pi-calendar
            cursor-pointer flex-column align-items-center"
            style={{ fontSize: "1rem" }}
          >
            <span>Actividades</span>
          </i>
        </Link>
        <i
          className="icons md:flex hidden gap-2 pi pi-user-plus cursor-pointer flex-column align-items-center"
          style={{ fontSize: "1rem" }}
          onClick={() => dispatch(openModal({ type: "Agregar Cliente" }))}
        >
          <span>Agregar Cliente</span>
        </i>
      </div>
    </header>
  );
};

export default Header;
