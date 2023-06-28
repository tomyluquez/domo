import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import getClientsBySell from "../../services/getClientsBySell";

const VentasByVendedor = ({ clientes }) => {
  const [clSolicitados, setClSolicitados] = useState();
  const [clIntegrados, setClIntegrados] = useState();
  const [chartOptions, setChartOptions] = useState();
  const totalIntegrados =
    clIntegrados &&
    clIntegrados.datasets[0].data.reduce((acc, val) => acc + val, 0);

  useEffect(() => {
    setClSolicitados(getClientsBySell(clientes));
    setClIntegrados(getClientsBySell(clientes, "Integrado"));
    const options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
          },
        },
      },
    };
    setChartOptions(options);
  }, [clientes]);

  if (!clSolicitados || !clIntegrados) return null;

  return (
    <>
      <div className="w-full flex md:gap-8 gap-4 md:flex-row flex-column align-items-center justify-content-center">
        <div>
          <h5 className="text-center">
            Clientes Solicitados - ({clientes.length})
          </h5>
          <Chart
            type="pie"
            data={clSolicitados}
            options={chartOptions}
            className="w-screen md:w-30rem"
            width="80%"
          />
        </div>
        <div>
          <h5 className="text-center">
            Clientes Integrados - ({totalIntegrados})
          </h5>
          <Chart
            type="pie"
            data={clIntegrados}
            options={chartOptions}
            className="w-screen md:w-30rem"
          />
        </div>
      </div>
    </>
  );
};

export default VentasByVendedor;
