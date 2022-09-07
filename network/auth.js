import { axiosAuthClient } from "./axios";

export function getCsrfToken() {
  return axiosAuthClient.get("/sanctum/csrf-cookie");
}