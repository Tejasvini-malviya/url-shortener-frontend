import { apiClient } from "../lib/apiClient";

export const shortenUrlApi = async ({ originalUrl, customText }) => {
  return apiClient.post("/api/shorten", { originalUrl, customText });
};
