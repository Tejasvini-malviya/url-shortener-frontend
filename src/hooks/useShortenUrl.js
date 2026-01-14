import { useMutation } from "@tanstack/react-query";
import { shortenUrlApi } from "../services/urlApi";
export const useShortenUrl = () => {
  return useMutation({
    mutationFn: shortenUrlApi,
    // onSuccess: (data) => {
    // },
  });
};
