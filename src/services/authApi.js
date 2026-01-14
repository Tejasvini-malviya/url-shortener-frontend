import { apiClient } from "../lib/apiClient";

export const loginApi = async (credentials) => {
  return apiClient.post("/auth/login", credentials);
};

export const signupApi = async (credentials) => {
  return apiClient.post("/auth/signup", credentials);
};

