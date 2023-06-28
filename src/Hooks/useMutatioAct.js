import { useMutation, useQueryClient } from "react-query";
import { closeModal } from "../redux/slices/modal";
import { useDispatch } from "react-redux";

const useMutatioAct = () => {
  const queryclient = useQueryClient();
  const dispatch = useDispatch();

  const mutationAct = useMutation(
    (data) =>
      fetch(
        `https://crnventas.onrender.com/api/clientes/actividades/${data.actividadId}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ),
    {
      onSuccess: () => {
        queryclient.invalidateQueries("clients");
        dispatch(closeModal());
      },
    }
  );

  return mutationAct;
};

export default useMutatioAct;
