import { useSelector } from "react-redux";
import VentasByVendedor from "./VentasByVendedor";
import { Skeleton } from "primereact/skeleton";

const Dashboard = ({ isLoading, isError }) => {
  const { clientes } = useSelector((state) => state.clientes);

  if (isLoading) {
    return (
      <div className="w-full flex flex-wrap gap-4 justify-content-center mt-4">
        <Skeleton shape="circle" size="20rem" />
        <Skeleton shape="circle" size="20rem" />
      </div>
    );
  }

  if (isError) {
    return <div>Huvo un problema por favor intentar nuevamente</div>;
  }
  return (
    <div className="w-full mt-4">
      {<VentasByVendedor clientes={clientes} />}
    </div>
  );
};

export default Dashboard;
