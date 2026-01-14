import { useMutation } from "@tanstack/react-query";
import { loginApi, signupApi } from "../services/authApi";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/home");
    },
  });
};

export const useSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/home");
    },
  });
};
