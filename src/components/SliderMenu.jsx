import { Sidebar } from "primereact/sidebar";
import "primeicons/primeicons.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/slices/modal";

const SliderMenu = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const handlerClick = () => {
    setOpen(!open);
  };

  const handlerModal = () => {
    setOpen(!open);
    dispatch(openModal());
  };
  return (
    <div className="card flex flex-column justify-content-center">
      <Sidebar visible={open} onHide={() => setOpen(!open)}>
        <h2 className="w-full text-center">Clientes Check Delivery</h2>
        <div className="containerMenues">
          <div className="containerOptions">
            <Link to="/">
              <i
                className="icons iconSlider pi pi-chart-line cursor-pointer"
                style={{ fontSize: "1rem" }}
                onClick={handlerClick}
              >
                <span>Tablero</span>
              </i>
            </Link>
            <Link to="/clientes">
              <i
                className="icons iconSlider pi pi-user cursor-pointer"
                style={{ fontSize: "1rem" }}
                onClick={handlerClick}
              >
                <span>Clientes</span>
              </i>
            </Link>
            <i
              className="icons iconSlider pi pi-user-plus cursor-pointer"
              style={{ fontSize: "1rem" }}
              onClick={handlerModal}
            >
              <span>Agregar Cliente</span>
            </i>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default SliderMenu;
