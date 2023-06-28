import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { closeModal } from "../redux/slices/modal";

const useNewMutation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const queryclient = useQueryClient();

  const mutation = useMutation(
    (newClient) =>
      fetch("https://crnventas.onrender.com/api/clientes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newClient),
      }),
    {
      onSuccess: () => {
        setIsLoading(false);
        queryclient.invalidateQueries("clients");
        navigate("/clientes");
        dispatch(closeModal());
      },
    }
  );
  return { mutation, isLoading, setIsLoading };
};

export default useNewMutation;
