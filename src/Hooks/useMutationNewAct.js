import { useMutation, useQueryClient } from "react-query";

const useMutationNewAct = () => {
  const queryclient = useQueryClient();

  const mutationNewAct = useMutation(
    (data) =>
      fetch(`https://crnventas.onrender.com/api/clientes/actividades`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
    {
      onSuccess: () => {
        queryclient.invalidateQueries("clients");
      },
    }
  );

  return mutationNewAct;
};

export default useMutationNewAct;
