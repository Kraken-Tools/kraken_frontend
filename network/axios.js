import axios from "axios";

export const axiosAuthClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});