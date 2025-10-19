import axios from "axios";

export const baseURL = "/api/v1";

const Axios = axios.create({
  baseURL: baseURL,
  headers: {},
  timeout: 60000,
});

export default Axios;
