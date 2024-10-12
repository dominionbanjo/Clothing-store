import axios, { AxiosInstance } from "axios";

const customFetch: AxiosInstance = axios.create({
  baseURL: "/api/v1",
});

export default customFetch;
